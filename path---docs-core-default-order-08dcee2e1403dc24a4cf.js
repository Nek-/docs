webpackJsonp([0xd9a02c1bb677],{392:function(t,n){t.exports={data:{post:{html:'<h1 id="overriding-default-order"><a href="#overriding-default-order" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overriding Default Order</h1>\n<p>API Platform Core provides an easy way to override the default order of items in your collection.</p>\n<p>By default, items in the collection are ordered in ascending (ASC) order by their resource identifier(s). If you want to\ncustomize this order, you must add an <code>order</code> attribute on your ApiResource annotation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Book.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={&quot;order&quot;={&quot;foo&quot;: &quot;ASC&quot;}})\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token comment">/**\n     * ...\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$foo</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This <code>order</code> attribute is used as an array: the key defines the order field, the values defines the direction.\nIf you only specify the key, <code>ASC</code> direction will be used as default. For example, to order by <code>foo</code> &#x26; <code>bar</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Book.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={&quot;order&quot;={&quot;foo&quot;, &quot;bar&quot;}})\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token comment">/**\n     * ...\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$foo</span><span class="token punctuation">;</span>\n\n    <span class="token comment">/**\n     * ...\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$bar</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It\'s also possible to configure the default filter on an association property:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// src/AppBundle/Entity/Book.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource(attributes={&quot;order&quot;={&quot;author.username&quot;}})\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Book</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n\n    <span class="token comment">/**\n     * @var User\n     */</span>\n    <span class="token keyword">public</span> <span class="token variable">$author</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/default-order",current:{path:"docs/core/default-order",title:"The API Component - Overriding Default Order"},prev:{path:"docs/core/operations",title:"Operations",rootPath:"The API Component"},next:{path:"docs/core/filters",title:"Filters",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-default-order-08dcee2e1403dc24a4cf.js.map