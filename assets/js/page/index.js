particlesJS('particle',//対象のID名
    {
        "particles": {
            "number": {
                "value": 80,//シェイプの数
                "density": {
                    "enable": true,//シェイプの密集度を変更するか
                    "value_area": 800//シェイプの密集度
                }
            },
            "color": {
                "value": "#ffffff"//シェイプの色
            },
            "shape": {
                "type": "circle",//シェイプの形（circle：丸/edge：四角/triangle:三角/polygon:多角形/star:星型/image:画像）
                "stroke": {
                    "width": 0,//シェイプの枠の太さ(中央)
                    "color": "rgba(255,255,255,0.2)"
                },
                "polygon": {
                    "nb_sides": 5//typeを多角形（polygon）を選んだ場合、多角形の数
                },
                "image": {
                    "src": "img/github.svg",//typeをimage（image）にした場合、画像の指定
                    "width": 100,//画像横サイズ
                    "height": 100//画像縦サイズ
                }
            },
            "opacity": {
                "value": 0.5,//シェイプの透明度
                "random": true,//シェイプの透明度をランダムにするか
                "anim": {
                    "enable": true,//シェイプの透明度をアニメーションさせるか
                    "speed": 1,//シェイプの透明度のアニメーションスピード
                    "opacity_min": 0.1,//最小透明度
                    "sync": false//全てのシェイプの透明度を同時にアニメーションさせるか
                }
            },
            "size": {
                "value": 5,//シェイプの大きさ
                "random": true,//シェイプの大きさをランダムにするか
                "anim": {
                    "enable": true,//シェイプの大きさをアニメーションさせるか
                    "speed": 1,//シェイプの大きさのアニメーション速度
                    "size_min": 0.1,//シェイプの最小サイズ
                    "sync": false//全てのシェイプのサイズをを同時にアニメーションさせるか
                }
            },
            "line_linked": {
                "enable": false,//線を表示するか
                "distance": 150,//線をつなぐシェイプの間隔
                "color": "#ffffff",//線の色
                "opacity": 0.4,//線の透明度
                "width": 1//線の太さ
            },
            "move": {
                "enable": true,//シェイプを動かすか
                "speed": 4,//シェイプの動くスピード
                "direction": "top",//エリア全体の動き(none/top:下から上/top-right：下から右上へ/right：左から右へ/bottom-right：上から右下へ/bottom:上から下/bottom-left：上から左下/left：右から左へ/top-left：下から左上へ　より選択)
                "random": false,//個々の動きをランダムにするか
                "straight": false,//個々のシェイプの動きを止めるか
                "out_mode": "out",//エリア外に出たシェイプの動き(out（アウト）、bounce(バウンド・戻ってくる)より選択)
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,//マウスオーバーが有効か
                    "mode": "bubble"//マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
                },
                "onclick": {
                    "enable": true,//クリックが有効か
                    "mode": "push"//クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
                },
                "resize": true//canvasのサイズ変更にわせて拡大縮小するか
            },
            "modes": {
                "grab": {
                    "distance": 400,//シェイプからマウスポインタまでを線で繋ぐカーソルからの反応距離
                    "line_linked": {
                        "opacity": 1//シェイプからマウスポインタまでを線で繋ぐ線の透明度
                    }
                },
                "bubble": {
                    "distance": 200,//シェイプが膨らむカーソルの反応距離
                    "size": 10,//シェイプの膨らむ大きさ
                    "duration": 2,//膨らむシェイプの持続時間
                    "opacity": .2,//膨らむシェイプの透明度
                    "speed": 4//膨らむシェイプの速度
                },
                "repulse": {
                    "distance": 100//シェイプがカーソルから逃げる反応距離
                },
                "push": {
                    "particles_nb": 10//増えるシェイプの数
                },
                "remove": {
                    "particles_nb": 2//減るシェイプの数
                }
            }
        },
        "retina_detect": true,//Retina Displayを対応するか
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);
