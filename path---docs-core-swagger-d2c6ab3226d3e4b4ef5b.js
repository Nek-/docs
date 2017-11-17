webpackJsonp([2394058813013],{409:function(n,a){n.exports={data:{post:{html:'<h1 id="swagger--open-api-support"><a href="#swagger--open-api-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Swagger / Open API Support</h1>\n<p>API Platform natively support the <a href="https://www.openapis.org/" target="_blank" rel="nofollow noopener noreferrer">Open API</a> (formerly Swagger) API documentation format.\nIt also integrates a customized version of <a href="https://swagger.io/swagger-ui/" target="_blank" rel="nofollow noopener noreferrer">Swagger UI</a>, a nice tool to display the\nAPI documentation in a user friendly way.</p>\n<p></p>\n<h2 id="overriding-the-swagger-documentation"><a href="#overriding-the-swagger-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overriding the Swagger Documentation</h2>\n<p>Symfony allows to <a href="https://symfony.com/doc/current/service_container/service_decoration.html" target="_blank" rel="nofollow noopener noreferrer">decorate services</a>, here we\nneed to decorate <code>api_platform.swagger.normalizer.documentation</code>.</p>\n<p>In the following example, we will see how to override the title of the Swagger documentation and add a custom filter for\nthe <code>GET</code> operation of <code>/foos</code> path</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/services.yml</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n    <span class="token key atrule">&apos;AppBundle\\Swagger\\SwaggerDecorator&apos;</span><span class="token punctuation">:</span>\n        <span class="token key atrule">decorates</span><span class="token punctuation">:</span> <span class="token string">&apos;api_platform.swagger.normalizer.documentation&apos;</span>\n        <span class="token key atrule">arguments</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&apos;@AppBundle\\Swagger\\SwaggerDecorator.inner&apos;</span> <span class="token punctuation">]</span>\n        <span class="token key atrule">autoconfigure</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Swagger/SwaggerDecorator.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Swagger</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Serializer<span class="token punctuation">\\</span>Normalizer<span class="token punctuation">\\</span>NormalizerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">NormalizerInterface</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$decorated</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>NormalizerInterface <span class="token variable">$decorated</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">decorated</span> <span class="token operator">=</span> <span class="token variable">$decorated</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$docs</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">decorated</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token variable">$object</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">,</span> <span class="token variable">$context</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$customDefinition</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n            <span class="token string">&apos;name&apos;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&apos;fields&apos;</span><span class="token punctuation">,</span>\n            <span class="token string">&apos;definition&apos;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&apos;Fields to remove of the outpout&apos;</span><span class="token punctuation">,</span>\n            <span class="token string">&apos;default&apos;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&apos;id&apos;</span><span class="token punctuation">,</span>\n            <span class="token string">&apos;in&apos;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&apos;query&apos;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n\n\t<span class="token comment">// e.g. add a custom parameter</span>\n\t\t<span class="token variable">$docs</span><span class="token punctuation">[</span><span class="token string">&apos;paths&apos;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&apos;/foos&apos;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&apos;get&apos;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&apos;parameters&apos;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$customDefinition</span><span class="token punctuation">;</span>\n\n\t\t<span class="token comment">// Override title</span>\n\t\t<span class="token variable">$docs</span><span class="token punctuation">[</span><span class="token string">&apos;info&apos;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&apos;title&apos;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&apos;My Api Foo&apos;</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> <span class="token variable">$docs</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">decorated</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">supportsNormalization</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$format</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="using-the-swagger-context"><a href="#using-the-swagger-context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the Swagger Context</h2>\n<p>Sometimes you may want to have additional information included in your Swagger documentation.\nThe following configuration will provide additional context to your Swagger definitions:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Product.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiProperty</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>Mapping</span> <span class="token keyword">as</span> <span class="token constant">ORM</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Validator<span class="token punctuation">\\</span>Constraints</span> <span class="token keyword">as</span> Assert<span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n * @ORM\\Entity\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token comment">// The class name will be used to name exposed resources</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">/**\n     * @ORM\\Column(type=&quot;integer&quot;)\n     * @ORM\\Id\n     * @ORM\\GeneratedValue(strategy=&quot;AUTO&quot;)\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$id</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @param string $name A name property - this description will be avaliable in the API documentation too.\n     *\n     * @ORM\\Column\n     * @Assert\\NotBlank\n     *\n     * @ApiProperty(\n     *     &quot;attributes&quot;={\n     *         &quot;swagger_context&quot;={\n     *             &quot;type&quot;=&quot;string&quot;,\n     *             &quot;enum&quot;={&quot;one&quot;, &quot;two&quot;},\n     *             &quot;example&quot;=&quot;one&quot;          \n     *         }\n     *     }\n     * )\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * @ORM\\Column\n     * @Assert\\DateTime\n     *\n     * @ApiProperty(\n     *     &quot;attributes&quot;={\n     *         &quot;swagger_context&quot;={&quot;type&quot;=&quot;string&quot;, &quot;format&quot;=&quot;date-time&quot;}\n     *     }\n     * )\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$timestamp</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Or in YAML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># src/AppBundle/Resources/config/api_resources/resources.yml</span>\n<span class="token key atrule">resources</span><span class="token punctuation">:</span>\n    <span class="token key atrule">AppBundle\\Entity\\Product</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">name</span><span class="token punctuation">:</span>\n          <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n            <span class="token key atrule">swagger_context</span><span class="token punctuation">:</span>\n              <span class="token key atrule">type</span><span class="token punctuation">:</span> string\n              <span class="token key atrule">enum</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&apos;one&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;two&apos;</span><span class="token punctuation">]</span>\n              <span class="token key atrule">example</span><span class="token punctuation">:</span> one\n        <span class="token key atrule">timestamp</span><span class="token punctuation">:</span>\n          <span class="token key atrule">attributes</span><span class="token punctuation">:</span>\n            <span class="token key atrule">swagger_context</span><span class="token punctuation">:</span>\n              <span class="token key atrule">type</span><span class="token punctuation">:</span> string\n              <span class="token key atrule">format</span><span class="token punctuation">:</span> date<span class="token punctuation">-</span>time\n</code></pre>\n      </div>\n<p>Will produce the following Swagger documentation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;swagger&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;basePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>\n\n  <span class="token property">&quot;definitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;Product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is a product.&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;readOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This is a name.&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;example&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;date-time&quot;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/swagger",current:{path:"docs/core/swagger",title:"The API Component - Swagger Support"},prev:{path:"docs/core/security",title:"Security",rootPath:"The API Component"},next:{path:"docs/core/performance",title:"Performance",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-swagger-d2c6ab3226d3e4b4ef5b.js.map