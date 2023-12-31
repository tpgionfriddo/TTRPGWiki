

exports.wikiFormat = (title, input) => {
    let out = `<!doctype html>
    <html class="no-js" lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>TWiki - ${title}</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="canonical" href="http://html5-templates.com/" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            <!-- Place favicon.ico in the root directory -->
            <link rel="stylesheet" href="/style.css">
            <script src="js/vendor/modernizr-2.8.3.min.js"></script>
        </head>
        <body>
            <!--[if lt IE 8]>
                <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->
    
            <div class="wrapAll clearfix">
                <div class="sidebar">
                    <div class="logo">
                        <a href="/"><img src='/img/logo.png' alt="logo"></a>
                    </div>
                    <div class="navigation">
                        <ul>
                            <li><a href="#">Main page</a></li>
                            <li><a href="#">Contents</a></li>
                            <li><a href="#">Featured content</a></li>
                        </ul>
                        <h3>Interaction</h3>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portal</a></li>
                        </ul>
                        <h3>Interaction</h3>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portal</a></li>
                        </ul>
                    </div>
    
                
                </div>
                <div class="mainsection">
                    <div class="headerLinks">
                        <span class="user">Not logged in</span> <a href="#">Talk</a> <a href="#">Contributions</a> <a href="#">Create account</a> <a href="#">Log in</a>
                    </div>
                    <div class="tabs clearfix">
                        <div class="tabsLeft">
                            <ul>
                                <li><a href="#" class="active">Article</a></li>
                                <li><a href="#">Talk</a></li>						
                            </ul>
                        </div>
                        <div id="simpleSearch">
                            <input type="text" name="searchInput" id="searchInput" placeholder="Search Wikipedia" size="12" />
                            <div id="submitSearch"></div>
                        </div>
                        <div class="tabsRight">
                            <ul>
                                <li><a href="#" class="active">Read</a></li>
                                <li><a href="#">View source</a></li>						
                                <li><a href="#">View history</a></li>						
                            </ul>
                        </div>
                    
                    </div>
                    <div class="article">
                        <h1>${title}</h1>
                        <p class="siteSub">From Wikipedia, the free encyclopedia</p>
                        <p class="roleNote">This article is about ${title}.</p>
    
                        <div class="articleRight">
                            <div class="articleRightInner">
                                <img src="/img/pencil.jpg" alt="pencil" />
                            </div>
                            This is a blue <a href="">pencil</a>
                        </div>
                        <p>
                        ${input}
                        </p>
                        <div class="lavenderBox">
                            <div class="header">Panel title</div>
                            <div class="subtitle linklist"><a href="#">Lorem</a> <a href="#">Ipsum</a> <a href="#">Dolorestitas</a> </div>
                            <div class="linklist">
                                <a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril  </a> <a href="#">Forensibus sea </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a><a href="#">Percipit </a> <a href="#">Mnesarchum </a> <a href="#">Molestie </a> <a href="#">Phaedrum </a> <a href="#">Luptatum constituam </a> <a href="#">Habeo adipisci </a> <a href="#">Inani zril  </a> <a href="#">Vel nisl albucius </a> <a href="#">Habeo adipisci </a> <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a> <a href="#">Regione suscipit </a> <a href="#">Percipit maiestatis </a>
                            </div>
                            
                            <div class="subtitle">Subtitle</div>
                        </div>
                        
                        <div class="categories">
                            <a href="#">Minimum corrumpit </a> <a href="#">Regione suscipit </a> <a href="#">Has et partem </a>
                        </div>
                        
                    </div>
                    <div class="pagefooter">
                        This page was last edited on 29.07.2017 | Template by <a href="http://html5-templates.com/" target="_blank" rel="nofollow">HTML5 Templates</a> <!-- Please leave this link unchanged -->
                        <div class="footerlinks">
                            <a href="#">Privacy policy</a> <a href="#">About</a> <a href="#">Terms and conditions</a> <a href="#">Cookie statement</a> <a href="#">Developers</a>
                        </div>
                    </div>
                
                
                </div>		
            </div>
            
            
            <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
            <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
            <script src="script.js"></script>
    
    
        </body>
    </html>
    `
    return out

}