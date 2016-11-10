<footer class="footer" role="contentinfo">
                    <div class="inside">
                        <div class="footer-pay clearfix">
                            <strong class="pull-left">Мы принимаем к оплате</strong>
                            <div class="footer-pay__logos pull-right">
                                <ul class="footer-pay__logos__list horizontal">
                                    <li class="footer-pay__logos__item">
                                        <a class="visa" href="#"></a>
                                    </li>
                                    <li class="footer-pay__logos__item">
                                        <a class="master" href="#"></a>
                                    </li>
                                    <li class="footer-pay__logos__item">
                                        <a class="maestro" href="#"></a>
                                    </li>
                                    <li class="footer-pay__logos__item">
                                        <a class="yandex" href="#"></a>
                                    </li>
                                    <li class="footer-pay__logos__item">
                                        <a class="webmoney" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-subscribe clearfix">
                            <strong class="pull-left">Подписаться на акции и скидки</strong>
                            <div class="pull-right">
                                <form action="" method="">
                                    <input type="text" class="subscribe-text" placeholder="Ваш электронный адрес" />
                                    <input type="submit" class="subscribe-btn" value="OK" />
                                </form>
                            </div>
                        </div>
                        <div class="footer-delivery">
                            <strong>Спортивное питание в Москве с доставкой на дом</strong>
                            <br/> Заказать спортивное питание в NitroMass – просто и удобно! Позвоните нам по телефону 8 (495) 222-6-22-7 или оставьте заявку на обратный звонок на нашем сайте, и наши операторы свяжутся с Вами. Если Вы живете в Москве или области и хотите купить спортивное питание высокого качества по доступной цене, обращайтесь в наш магазин – мы осуществляем доставку на дом ежедневно с 9 до 18 часов.
                        </div>
                        <div class="footer-bottom clearfix">
                            <div class="copyright pull-left"><strong>&copy; 2012-2015 Nitromass.</strong> Магазин спортивного питания в Москве.</div>
                            <div class="footer-like"><img width="229" height="20" src="<?php echo get_template_directory_uri(); ?>/img/like.png" alt="" /></div>
                            <div class="footer-social pull-right">
                                <ul class="footer-social__list horizontal">
                                    <li class="footer-social__item">
                                        <noindex>
                                            <a class="vk" rel="nofollow" href="https://vk.com/nitro_mass"></a>
                                        </noindex>
                                    </li>
                                    <li class="footer-social__item">
                                        <a class="fb" href="#"></a>
                                    </li>
                                    <li class="footer-social__item">
                                        <a class="tw" href="#"></a>
                                    </li>
                                    <li class="footer-social__item">
                                        <a class="in" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <!--.footer -->
                <div class="sepia"></div>
            </div>
            <!--.wrapper -->
            <?php get_sidebar(); ?>
                <div class="btn-top"><a href="#">top</a></div>
                <div class="popup" id="popup-registration">
                    <div class="popup__container">
                        <h2>Регистрация</h2>
                        <div class="popup__offer">
                            Вы уже зарегистрированы в нашем интернет магазине?
                            <br/>
                            <a class="popup-open" href="#popup-login">Вход</a>
                        </div>
                        <div class="form">
                            <form action="/personal/index.php?register=yes" method="post" name="bform">
                                <ul class="form__list">
                                    <li class="form__item">
                                        <input type="text" name="USER_LOGIN" tabindex="1" class="input-text" placeholder="Логин" />
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="USER_NAME" tabindex="2" class="input-text" placeholder="Имя" />
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="USER_LAST_NAME" tabindex="3" class="input-text" placeholder="Фамилия" />
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="USER_EMAIL" tabindex="4" class="input-text" placeholder="Электронная почта" />
                                    </li>
                                    <li class="form__item">
                                        <input type="password" name="USER_PASSWORD" tabindex="5" class="input-text" placeholder="Пароль" />
                                    </li>
                                    <li class="form__item">
                                        <input type="password" name="USER_CONFIRM_PASSWORD" tabindex="6" class="input-text" placeholder="Пароль ещё раз" />
                                    </li>
                                    <li class="form__item">
                                        <input type="hidden" name="captcha_sid" value="0c0abd6324469aebc541d11066795751" />
                                        <img src="<?php echo get_template_directory_uri(); ?>/img/captcha.jpg" width="180" height="40" alt="CAPTCHA" />
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="captcha_word" tabindex="7" class="input-text" placeholder="Код с картинки" />
                                    </li>
                                    <li class="form__item">
                                        <input type="submit" tabindex="8" disabled class="btn disabled" value="зарегистрироваться" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="popup" id="popup-login">
                    <div class="popup__container">
                        <h2>Вход</h2>
                        <div class="popup__offer">
                            Вы ещё не зарегистрированы в нашем интернет магазине?
                            <br/>
                            <a class="popup-open" href="#popup-registration">Регистрация</a>
                        </div>
                        <div class="form">
                            <form action="/personal/?login=yes" method="post">
                                <input type="hidden" name="AUTH_FORM" value="Y">
                                <input type="hidden" name="TYPE" value="AUTH">
                                <input type="hidden" name="backurl" value="/personal/index.php">
                                <ul class="form__list">
                                    <li class="form__item">
                                        <input type="text" name="USER_LOGIN" tabindex="1" class="input-text" placeholder="Логин" />
                                    </li>
                                    <li class="form__item">
                                        <input type="password" name="USER_PASSWORD" tabindex="2" class="input-text" placeholder="Пароль" />
                                    </li>
                                    <li class="form__item">
                                        <input type="submit" tabindex="3" disabled class="btn disabled" value="войти" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div class="popup__offer last"><a class="popup-open" href="#popup-remember">Забыли пароль?</a></div>
                    </div>
                </div>
                <div class="popup" id="popup-remember">
                    <div class="popup__container">
                        <h2>Восстановление<br/>пароля</h2>
                        <div class="popup__offer">
                            На указанный вами адрес электронной почты будет выслана инструкция по восстановлению пароля
                        </div>
                        <div class="form">
                            <form action="/personal/index.php?forgot_password=yes" name="bform" method="get">
                                <input type="hidden" name="backurl" value="/personal/index.php">
                                <input type="hidden" name="AUTH_FORM" value="Y">
                                <input type="hidden" name="TYPE" value="SEND_PWD">
                                <ul class="form__list">
                                    <li class="form__item">
                                        <input type="text" name="USER_LOGIN" tabindex="1" class="input-text" placeholder="Логин" />
                                    </li>
                                    <li class="form__item">
                                        или
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="USER_EMAIL" tabindex="2" class="input-text" placeholder="Электронная почта" />
                                    </li>
                                    <li class="form__item">
                                        <input type="submit" tabindex="2" disabled class="btn disabled" value="востановить" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div class="popup__offer last"><a class="popup-open" href="#popup-login">Назад</a></div>
                    </div>
                </div>
                <div class="popup" id="popup-call">
                    <div class="popup__container">
                        <h2>Заказать звонок</h2>
                        <div class="popup__offer">
                            Будем рады Вам перезвонить и ответить на все интересующие вопросы касающиеся продукции нашего интернет магазина.
                        </div>
                        <div class="form">
                            <form action="/ajax/callback.php" method="get">
                                <ul class="form__list">
                                    <li class="form__item">
                                        <input type="text" name="fullname" tabindex="1" class="input-text" placeholder="ФИО" />
                                    </li>
                                    <li class="form__item">
                                        <input type="text" name="phone" tabindex="2" class="input-text" placeholder="Телефон" />
                                    </li>
                                    <li class="form__item">
                                        <input type="submit" tabindex="3" disabled class="btn disabled popup-open-call" value="заказать" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="popup" id="popup-thanks">
                    <div class="popup__container">
                        <div class="popup-thanks__icon"><span class="icon-phone-big"></span></div>
                        <h2>Иван Иванович,<br/>мы перезвоним вам в ближайшее время.<br/>Спасибо!</h2>
                        <div class="popup__offer">
                            Это окно закроется автоматически через 10 секунд.
                        </div>
                    </div>
                </div>
                <a style="display: none;" class="popup-open-added" href="#popup-added"></a>
                <div class="popup" id="popup-added">
                    <div class="popup__container">
                        <div class="popup-thanks__icon">
                        <img width="128" height="190" src="<?php echo get_template_directory_uri(); ?>/img/img1.png" alt=""></div>
                        <h2>Товар добавлен в <a href="/personal/cart/">корзину</a></h2>
                        <div class="popup__offer">
                            Это окно закроется автоматически через 10 секунд.
                        </div>
                    </div>
                </div>
                <a style="display: none;" id="popup-open-reminder" class="popup-open" href="#popup-reminder"></a>
                <div class="popup" id="popup-reminder">
                    <div class="popup__container">
                        <h2>Сообщить о поступлении</h2>
                        <div class="popup__offer">К сожалению, на данный момент этого товара нет в наличии. Мы можем сообщить Вам о поступлении товара, для этого просто оставьте Ваши контактные данные:</div>
                        <div class="form">
                            <form method="POST" action="/index.php#reminder">
                                <ul class="form__list">
                                    <li class="form__item">
                                        <input size="25" value="" type="text" name="PHONE" class="input-text" placeholder="Телефон">
                                    </li>
                                    <li class="form__item">
                                        <a class="btn" onclick="$('#input_action').val('phone'); $(this).parents('form').submit();">Сообщить мне по телефону</a>
                                    </li>
                                    <li class="form__item">
                                        <input size="25" value="" type="text" name="EMAIL" class="input-text" placeholder="E-mail">
                                    </li>
                                    <li class="form__item">
                                        <a class="btn" onclick="$(this).parents('form').submit();">Сообщить мне по e-mail</a>
                                    </li>
                                </ul>
                                <input type="hidden" id="product_id_reminder" name="PRODUCT_ID" value="1">
                                <input type="hidden" name="action" value="email" id="input_action">
                                <input type="hidden" name="SEBEKON_RM" value="">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="insider-opt-in-notification" style="top: -150px;">
                    <div class="insider-opt-in-notification-inner-container">
                        <div class="insider-opt-in-notification-image-container">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" class="insider-opt-in-notification-image">
                        </div>
                        <div class="insider-opt-in-notification-text-container">
                            <div class="insider-opt-in-notification-title">Включить уведомления от Nitromass!</div>
                            <div class="insider-opt-in-notification-description">Будьте в курсе акций и скидок.</div>
                        </div>
                        <div style="clear: both;">
                            <div class="insider-opt-in-notification-button-container">
                                <div id="decline-link" class="insider-opt-in-notification-button insider-opt-in-disallow-button">Отклонить</div>
                                <div id="subscribe-link" class="insider-opt-in-notification-button insider-opt-in-allow-button">Включить</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                    </div>
                </div>



                <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.8.3.min.js"></script>

                <script type="text/javascript">
                // var arKernelCSS = new Array('/bitrix/js/main/core/css/core.css', '/bitrix/js/main/core/css/core_popup.css', '/bitrix/js/fileman/sticker.css', '/bitrix/js/main/core/css/core_panel.css', '/bitrix/js/socialservices/css/ss.css', '/bitrix/js/main/core/css/core_date.css');
                var arKernelCSS = [];
                </script>

                <script type="text/javascript">
    if (!window.BX) window.BX = {
        message: function(mess) {
            if (typeof mess == 'object')
                for (var i in mess) BX.message[i] = mess[i];
            return true;
        }
    };
    </script>
    <script type="text/javascript">
    BX.message({
        'LANGUAGE_ID': 'ru',
        'FORMAT_DATE': 'DD.MM.YYYY',
        'FORMAT_DATETIME': 'DD.MM.YYYY HH:MI:SS',
        'COOKIE_PREFIX': 'BITRIX_SM',
        'USER_ID': '',
        'SERVER_TIME': '1478769079',
        'SERVER_TZ_OFFSET': '3600',
        'USER_TZ_OFFSET': '0',
        'USER_TZ_AUTO': 'Y',
        'bitrix_sessid': '1da554d7899a9727061832944e96540c',
        'SITE_ID': 's1'
    });
    BX.message({
        'JS_CORE_LOADING': 'Загрузка...',
        'JS_CORE_NO_DATA': '- Нет данных -',
        'JS_CORE_WINDOW_CLOSE': 'Закрыть',
        'JS_CORE_WINDOW_EXPAND': 'Развернуть',
        'JS_CORE_WINDOW_NARROW': 'Свернуть в окно',
        'JS_CORE_WINDOW_SAVE': 'Сохранить',
        'JS_CORE_WINDOW_CANCEL': 'Отменить',
        'JS_CORE_H': 'ч',
        'JS_CORE_M': 'м',
        'JS_CORE_S': 'с',
        'JSADM_AI_HIDE_EXTRA': 'Скрыть лишние',
        'JSADM_AI_ALL_NOTIF': 'Показать все',
        'JSADM_AUTH_REQ': 'Требуется авторизация!',
        'JS_CORE_WINDOW_AUTH': 'Войти'
    });
    </script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/kernel.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core_ajax.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/session.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core_popup.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core_window.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/sticker.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core_admin.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/utils.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/admin_tools.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/popup_menu.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/admin_search.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/hot_keys.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/public_tools.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/ss.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/core_date.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/ajax.js"></script>

    <script type="text/javascript">
                var jsControl = new JCTitleSearch({
                    //'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
                    'AJAX_PAGE': '/',
                    'CONTAINER_ID': 'title-search',
                    'INPUT_ID': 'title-search-input',
                    'MIN_QUERY_LEN': 2
                });
                </script>

      <script>
            $(function() {
                //Вызываем обратный отсчет
                var get_date = $("#countdown").val();
                var newYear = new Date(get_date);
                //$('#defaultCountdown').countdown({until: newYear});
            });
     </script>

     <script>
                                        $(document).ready(function() {
                                            var newYear = new Date(2016, 31 - 12, 09);

                                            $('#defaultCountdown').countdown({
                                                until: newYear
                                            });
                                        });
                                        </script>

    <script type="text/javascript">
    bxSession.Expand(1440, '1da554d7899a9727061832944e96540c', false, '058cd0e8c1306e584f08d5414a19165e');
    </script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/template_264.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/page_54.js"></script>
                <script src="<?php echo get_template_directory_uri(); ?>/js/OneSignalSDK.js" async='async'></script>
                <script>
                function getCookie(cname) {
                    var name = cname + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) == 0) {
                            return c.substring(name.length, c.length);
                        }
                    }
                    return "";
                }

                function decline() {
                    $(".insider-opt-in-notification").hide();
                    setCookie("prompush", "decline", 5);
                }

                function setCookie(cname, cvalue, exdays) {
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toUTCString();
                    document.cookie = cname + "=" + cvalue + "; " + expires;

                }

                function subscribe() {
                    $(".insider-opt-in-notification").hide();
                    setCookie("prompush", "decline", 365);
                    OneSignal.push(["registerForPushNotifications"]);
                    event.preventDefault();
                }

                var OneSignal = OneSignal || [];

                OneSignal.push(["init", {
                    appId: "0171749c-6f17-4958-b906-0720b9fe6c90",
                    subdomainName: 'nitromass.onesignal.com',
                    autoRegister: false,
                    promptOptions: {
                        showCredit: false, // Hide Powered by OneSignal
                        actionMessage: 'Включить оповещения:',
                        exampleNotificationTitleDesktop: 'Снижение цен на Nitromass',
                        exampleNotificationMessageDesktop: 'Скидка 5% на все товары',
                        exampleNotificationTitleMobile: 'Снижение цен на Nitromass',
                        exampleNotificationMessageMobile: 'Скидка 5% на все товары',
                        exampleNotificationCaption: '(пример оповещения)',
                        acceptButtonText: 'Да'.toUpperCase(),
                        cancelButtonText: 'Нет'.toUpperCase()
                    },
                }]);

                OneSignal.push(function() {
                    // If we're on an unsupported browser, do nothing
                    if (!OneSignal.isPushNotificationsSupported()) {
                        return;
                    }
                    OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                        if (isEnabled) {
                            // The user is subscribed to notifications
                            // Don't show anything
                        } else {
                            var prompush = getCookie("prompush");
                            if (prompush != "decline") {
                                $('.insider-opt-in-notification').animate({
                                    top: 0
                                }, 600);
                                document.getElementById("decline-link").addEventListener('click', decline);
                                document.getElementById("subscribe-link").addEventListener('click', subscribe);
                                $(".product-bigcart .product-price__new").after("<a href='#' class='subscribe_link' onclick='subscribe();'>Уведомить о снижении цены?</a>");
                            } else {
                                $(".product-bigcart .product-price__new").after("<a href='#' class='subscribe_link' onclick='subscribe();'>Уведомить о снижении цены?</a>");
                            }
                        }
                    });
                });
                </script>

    <?php wp_footer(); ?>
  </body>
</html>
