/*! @comandeer/rollup-lib-bundler v0.10.0 | (c) 2020 Comandeer | MIT license (see LICENSE) */
import{existsSync,readFileSync}from"fs";import{rollup}from"rollup";import convertCJS from"rollup-plugin-commonjs";import{terser}from"rollup-plugin-terser";import babel from"rollup-plugin-babel";import preset from"@babel/preset-env";function packageParser(a){if("string"==typeof a)a=loadAndParseFile(a);else if("object"!=typeof a)throw new TypeError("Provide string or object.");return lintObject(a),prepareMetadata(a)}function loadAndParseFile(a){if(!existsSync(a))throw new ReferenceError("File with given path does not exist.");const b=readFileSync(a);let c;try{c=JSON.parse(b)}catch(a){throw new SyntaxError("Given file is not parsable as a correct JSON.")}return c}function lintObject(a){function b(b){if("undefined"==typeof a[b])throw new ReferenceError(`Package metadata must contain "${b}" property.`)}b("name"),b("version"),b("main"),function(b,c){if("undefined"==typeof a[b]&&"undefined"==typeof a[c])throw new ReferenceError(`Package metadata must contain either "${b}" or "${c}" or both properties.`)}("module","jsnext:main"),b("author"),b("license")}function prepareAuthorMetadata(a){return"object"==typeof a?a.name:a+""}function prepareMetadata(a){return{name:a.name,version:a.version,author:prepareAuthorMetadata(a.author),license:a.license,src:"src/index.js",dist:{esm:a.module||a["jsnext:main"],cjs:a.main}}}function generateBanner(a){return`/*! ${a.name} v${a.version} | (c) ${new Date().getFullYear()} ${a.author} | ${a.license} license (see LICENSE) */`}const node="10.0.0";function bundler(a){const b=getRollupConfig(a,!0),c=getRollupConfig(a,!1);return Promise.all([rollup(b),rollup(c)]).then(a=>Promise.all([a[0].write(b.output),a[1].write(c.output)]))}function getRollupConfig(a,b){const c=generateBanner(a),d=[convertCJS(),babel({babelrc:!1,presets:[[preset,{targets:{node:node}}]]}),terser()];return{input:a.src,plugins:d,output:{banner:c,sourcemap:!0,format:b?"cjs":"es",file:b?a.dist.cjs:a.dist.esm}}}function rlb(){const a=packageParser("package.json");return bundler(a)}export default rlb;
//# sourceMappingURL=rollup-lib-bundler.es2015.js.map
