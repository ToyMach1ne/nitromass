<!DOCTYPE html>
<html>
<head>
    <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->

    <!--[if lte IE 6 ]><script type="text/javascript">window.location.href="/ie6_close/index_ru.html";</script><![endif]-->
    <!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="/css/all-ie.css"><![endif]-->
    <!--[if lt IE 10]><script type="text/javascript" src="/js/pie.js"></script><![endif]-->
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div class="wrapper">
        <header class="header clearfix" role="banner">
            <div class="pull-left clearfix">
                <nav class="header-nav pull-left">
                    <?php wpeHeadNav(); ?>
                </nav>
                <div class="header__settings  pull-left">
                    <a class="popup-open" href="#popup-login">вход</a> / <a class="popup-open" href="#popup-registration">регистрация</a>
                    <span class="icon-user"></span>
                </div>
            </div>
            <div style="float: left; margin: 13px 0 0 90px;">
                <a href="http://clck.yandex.ru/redir/dtype=stred/pid=47/cid=2508/*http://market.yandex.ru/shop/276035/reviews">
                    <img src="<?php echo get_template_directory_uri(); ?>/img/rating_5_0.jpg" border="0" width="88" height="31" alt="Читайте отзывы покупателей и оценивайте качество магазина на Яндекс.Маркете" /></a>
            </div>
            <div class="pull-right clearfix">
                <div class="header-search pull-left" id="title-search">
                    <form action="/search/index.php">
                        <div class="header-search__container">
                            <input id="title-search-input" type="text" name="q" value="" size="40" maxlength="50" autocomplete="off" class="search-text" />
                            <input style="display: none;" name="s" type="submit" value="Поиск" />
                            <a class="cancel" href="#">завершить</a>
                            <a class="header-search__btn" href="#"><span class="icon-search"></span></a>
                        </div>
                    </form>
                </div>

                <div class="header-cart pull-left">
                    <a href="/personal/cart/" class="header__cart__link">
                        <span class="icon-cart"></span>
                        <span class="count"><span>0</span></span>
                    </a>
                </div>
            </div>
        </header>
        <!--.header-->
