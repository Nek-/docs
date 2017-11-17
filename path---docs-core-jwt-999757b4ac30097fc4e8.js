webpackJsonp([0x66872a4f84bc],{401:function(n,a){n.exports={data:{post:{html:'<h1 id="jwt-authentification"><a href="#jwt-authentification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JWT Authentification</h1>\n<blockquote>\n<p><a href="https://jwt.io/" target="_blank" rel="nofollow noopener noreferrer">JSON Web Token (JWT)</a> is a JSON-based open standard (<a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="nofollow noopener noreferrer">RFC 7519</a>) for creating access tokens that assert some number of claims. For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client. The client could then use that token to prove that he/she is logged in as admin. The tokens are signed by the server\'s key, so the server is able to verify that the token is legitimate. The tokens are designed to be compact, URL-safe and usable especially in web browser single sign-on (SSO) context.</p>\n</blockquote>\n<p><a href="https://en.wikipedia.org/wiki/JSON_Web_Token" target="_blank" rel="nofollow noopener noreferrer">Wikipedia</a></p>\n<p>API Platform allows to easily add a JWT-based authentication to your API using <a href="https://github.com/lexik/LexikJWTAuthenticationBundle" target="_blank" rel="nofollow noopener noreferrer">LexikJWTAuthenticationBundle</a>.\nTo install this bundle, <a href="https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md" target="_blank" rel="nofollow noopener noreferrer">just follow its documentation</a>.</p>\n<h1 id="installing-lexikjwtauthenticationbundle"><a href="#installing-lexikjwtauthenticationbundle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installing LexikJWTAuthenticationBundle</h1>\n<p><code>LexikJWTAuthenticationBundle</code> requires your application to have a properly configured user provider.\nYou can either use the <a href="https://symfony.com/doc/current/security/entity_provider.html" target="_blank" rel="nofollow noopener noreferrer">Doctrine user provider</a> provided\nby Symfony (recommended), <a href="http://symfony.com/doc/current/security/custom_provider.html" target="_blank" rel="nofollow noopener noreferrer">create a custom user provider</a>\nor use <a href="/docs/core/fosuser-bundle">API Platform\'s FOSUserBundle integration</a>.</p>\n<p>Here\'s a sample configuration using the data provider provided by FOSUserBundle:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/security.yml</span>\n<span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">encoders</span><span class="token punctuation">:</span>\n        <span class="token key atrule">FOS\\UserBundle\\Model\\UserInterface</span><span class="token punctuation">:</span> bcrypt\n\n    <span class="token key atrule">role_hierarchy</span><span class="token punctuation">:</span>\n        <span class="token key atrule">ROLE_READER</span><span class="token punctuation">:</span> ROLE_USER\n        <span class="token key atrule">ROLE_ADMIN</span><span class="token punctuation">:</span> ROLE_READER\n\n    <span class="token key atrule">providers</span><span class="token punctuation">:</span>\n        <span class="token key atrule">fos_userbundle</span><span class="token punctuation">:</span>\n            <span class="token key atrule">id</span><span class="token punctuation">:</span> fos_user.user_provider.username\n\n    <span class="token key atrule">firewalls</span><span class="token punctuation">:</span>\n        <span class="token key atrule">login</span><span class="token punctuation">:</span>\n            <span class="token key atrule">pattern</span><span class="token punctuation">:</span>  ^/login\n            <span class="token key atrule">stateless</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n            <span class="token key atrule">anonymous</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n            <span class="token key atrule">provider</span><span class="token punctuation">:</span> fos_userbundle\n            <span class="token key atrule">json_login</span><span class="token punctuation">:</span>\n                <span class="token key atrule">check_path</span><span class="token punctuation">:</span> /login_check\n                <span class="token key atrule">username_path</span><span class="token punctuation">:</span> email\n                <span class="token key atrule">password_path</span><span class="token punctuation">:</span> password\n                <span class="token key atrule">success_handler</span><span class="token punctuation">:</span> lexik_jwt_authentication.handler.authentication_success\n                <span class="token key atrule">failure_handler</span><span class="token punctuation">:</span> lexik_jwt_authentication.handler.authentication_failure\n\n        <span class="token key atrule">main</span><span class="token punctuation">:</span>\n            <span class="token key atrule">pattern</span><span class="token punctuation">:</span>   ^/\n            <span class="token key atrule">provider</span><span class="token punctuation">:</span> fos_userbundle\n            <span class="token key atrule">stateless</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n            <span class="token key atrule">anonymous</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n            <span class="token key atrule">lexik_jwt</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token key atrule">dev</span><span class="token punctuation">:</span>\n            <span class="token key atrule">pattern</span><span class="token punctuation">:</span>  ^/(_(profiler<span class="token punctuation">|</span>wdt)<span class="token punctuation">|</span>css<span class="token punctuation">|</span>images<span class="token punctuation">|</span>js)/\n            <span class="token key atrule">security</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n    <span class="token key atrule">access_control</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> ^/login<span class="token punctuation">,</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> IS_AUTHENTICATED_ANONYMOUSLY <span class="token punctuation">}</span>\n        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> ^/books<span class="token punctuation">,</span> <span class="token key atrule">roles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> ROLE_READER <span class="token punctuation">]</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> ^/<span class="token punctuation">,</span> <span class="token key atrule">roles</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> ROLE_READER <span class="token punctuation">]</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="documenting-the-authentication-mechanism-with-swaggeropen-api"><a href="#documenting-the-authentication-mechanism-with-swaggeropen-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documenting the Authentication Mechanism with Swagger/Open API</h2>\n<p>Want to test the routes of your JWT-authentication-protected API?</p>\n<h3 id="configuring-api-platform"><a href="#configuring-api-platform" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuring API Platform</h3>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n    <span class="token key atrule">swagger</span><span class="token punctuation">:</span>\n         <span class="token key atrule">api_keys</span><span class="token punctuation">:</span>\n             <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&apos;Authorization&apos;</span><span class="token punctuation">,</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&apos;header&apos;</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>And the "Authorize" button will automatically appear in Swagger UI.</p>\n<p></p>\n<h3 id="adding-a-new-api-key"><a href="#adding-a-new-api-key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding a New API Key</h3>\n<p>All you have to do is configuring the API key in the <code>value</code> field.\nBy default, <a href="https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#2-use-the-token" target="_blank" rel="nofollow noopener noreferrer">only the authorization header mode is enabled</a> in <a href="https://github.com/lexik/LexikJWTAuthenticationBundle" target="_blank" rel="nofollow noopener noreferrer">LexikJWTAuthenticationBundle</a>.\nYou must set the <a href="https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#1-obtain-the-token" target="_blank" rel="nofollow noopener noreferrer">JWT token</a> as below and click on the "Authorize" button.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Bearer MY_NEW_TOKEN</code></pre>\n      </div>\n<p></p>\n<h2 id="testing-with-behat"><a href="#testing-with-behat" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing with Behat</h2>\n<p>Let\'s configure Behat to automatically send an <code>Authorization</code> HTTP header containing a valid JWT token when a scenario is marked with a <code>@login</code> annotation. Edit <code>features/bootstrap/FeatureContext.php</code> and add the following methods:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// features/bootstrap/FeatureContext.php</span>\n\n<span class="token keyword">use</span> <span class="token package">AppBundle<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Behat<span class="token punctuation">\\</span>Behat<span class="token punctuation">\\</span>Hook<span class="token punctuation">\\</span>Scope<span class="token punctuation">\\</span>BeforeScenarioScope</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Behatch<span class="token punctuation">\\</span>Context<span class="token punctuation">\\</span>RestContext</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">FeatureContext</span> <span class="token keyword">implements</span> <span class="token class-name">Context</span><span class="token punctuation">,</span> SnippetAcceptingContext\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token comment">// Must be after createDatabase() and dropDatabase() functions (the order matters)</span>\n\n    <span class="token comment">/**\n     * @BeforeScenario\n     * @login\n     *\n     * @see https://symfony.com/doc/current/security/entity_provider.html#creating-your-first-user\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span>BeforeScenarioScope <span class="token variable">$scope</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$user</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&apos;admin&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$user</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&apos;ATestPassword&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$user</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token string">&apos;test@test.com&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">manager</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">persist</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">manager</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$token</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">jwtManager</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">restContext</span> <span class="token operator">=</span> <span class="token variable">$scope</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">getContext</span><span class="token punctuation">(</span>RestContext<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">restContext</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">iAddHeaderEqualTo</span><span class="token punctuation">(</span><span class="token string">&apos;Authorization&apos;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bearer $token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * @AfterScenario\n     * @logout\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token property">restContext</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token function">iAddHeaderEqualTo</span><span class="token punctuation">(</span><span class="token string">&apos;Authorization&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Then, update <code>behat.yml</code> to inject the <code>lexik_jwt_authentication.jwt_manager</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># behat.yml</span>\n<span class="token key atrule">default</span><span class="token punctuation">:</span>\n  <span class="token comment"># ...</span>\n  <span class="token key atrule">suites</span><span class="token punctuation">:</span>\n    <span class="token key atrule">default</span><span class="token punctuation">:</span>\n      <span class="token key atrule">contexts</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">FeatureContext</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">doctrine</span><span class="token punctuation">:</span> <span class="token string">&apos;@doctrine&apos;</span><span class="token punctuation">,</span> <span class="token key atrule">&apos;jwtManager&apos;</span><span class="token punctuation">:</span> <span class="token string">&apos;@lexik_jwt_authentication.jwt_manager&apos;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">-</span> Behat\\MinkExtension\\Context\\MinkContext\n        <span class="token punctuation">-</span> Behatch\\Context\\RestContext\n        <span class="token punctuation">-</span> Behatch\\Context\\JsonContext\n  <span class="token comment"># ...</span>\n</code></pre>\n      </div>\n<p>Finally, mark your scenarios with the <code>@login</code> annotation to automatically add a valid <code>Authorization</code> header, and with <code>@logout</code> to be sure to destroy the token after this scenario.</p>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/jwt",current:{path:"docs/core/jwt",title:"The API Component - JWT Authentification"},prev:{path:"docs/core/extensions",title:"Extensions",rootPath:"The API Component"},next:{path:"docs/core/security",title:"Security",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-jwt-999757b4ac30097fc4e8.js.map