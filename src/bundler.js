import generateBanner from './generateBanner.js';
import { rollup } from 'rollup';
import convertCJS from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import babel from 'rollup-plugin-babel';
import preset from '@comandeer/babel-preset-rollup';

function getRollupConfig( metadata, isCJS ) {
	const banner = generateBanner( metadata );
	const plugins = [
		convertCJS(),

		babel( {
			babelrc: false,
			presets: [
				[ preset ]
			]
		} ),

		minify( {
			comments: false,
			banner,
			bannerNewLine: true
		} )
	];

	return {
		input: metadata.src,
		plugins,
		output: {
			banner,
			sourcemap: true,
			format: isCJS ? 'cjs' : 'es',
			file: isCJS ? metadata.dist.cjs : metadata.dist.esm
		}
	};
}

function bundler( metadata ) {
	const configCJS = getRollupConfig( metadata, true );
	const configESM = getRollupConfig( metadata, false );

	return Promise.all( [
		rollup( configCJS ),
		rollup( configESM )
	] ).then( ( bundles ) => {
		return Promise.all( [
			bundles[ 0 ].write( configCJS.output ),
			bundles[ 1 ].write( configESM.output )
		] );
	} );
}

export default bundler;
