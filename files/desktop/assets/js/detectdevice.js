$(document).ready(function() {
    
    var isMobile;
    var so;
    var navegador;

    //Verifica se a pessoa está usando um dispositivo desktop
    if ((MobileEsp.DetectTierTablet() === false) && (MobileEsp.DetectMobileQuick() === false) && (MobileEsp.DetectTierOtherPhones() === false)) {
        //É provavelmente um pc desktop
        isMobile = false;
        //Tenta descobrir o sistema operacional
        var agt = navigator.userAgent.toLowerCase();

        //Tenha descobrir o navegador em uso
        if (agt.indexOf("windows") !== -1) {
            so = 'windows';
        } else if (agt.indexOf("mac os") !== -1) {
            so = 'mac';
        } else {
            so = false;
        }

        var browser = getBrowser();
        navegador = browser.t;
        var versaoNavegador = browser.v;

    } else {
        //É provavelmente um dispositivo mobile
        isMobile = true;

        if (MobileEsp.DetectIos()) {
            //É um IOS
            so = "ios";
        } else if (MobileEsp.DetectAndroid()) {
            //É um Android
            so = "android";
        } else if (MobileEsp.DetectWindowsPhone()) {
            //É um windows phone
            so = "winphone";
        } else {
            //É algum dispositivo diferente dos da lista.
            so = "desconhecido";
        }
    }
    
    $.post(base_url + "ava/controle.php?detectDevice=true&so="+so+"&isMobile="+isMobile+"&navegador="+navegador+'&versaoNavegador='+versaoNavegador);

});

function getBrowser() {
    var n,v,t,ua = navigator.userAgent;
    var names={i:'Internet Explorer',f:'Firefox',o:'Opera',s:'Apple Safari',n:'Netscape Navigator', c:"Chrome", x:"Other"};
    if (/bot|googlebot|facebook|slurp|wii|silk|blackberry|maxthon|maxton|mediapartners|dolfin|dolphin|adsbot|silk|android|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|rekonq|symbian|webos/i.test(ua)) n="x";
    else if (/Trident.*rv:(\d+\.\d+)/i.test(ua)) n="i";
    else if (/Trident.(\d+\.\d+)/i.test(ua)) n="io";
    else if (/MSIE.(\d+\.\d+)/i.test(ua)) n="i";
    else if (/OPR.(\d+\.\d+)/i.test(ua)) n="o";
    else if (/Chrome.(\d+\.\d+)/i.test(ua)) n="c";
    else if (/Firefox.(\d+\.\d+)/i.test(ua)) n="f";
    else if (/Version.(\d+.\d+).{0,10}Safari/i.test(ua)) n="s";
    else if (/Safari.(\d+)/i.test(ua)) n="so";
    else if (/Opera.*Version.(\d+\.\d+)/i.test(ua)) n="o";
    else if (/Opera.(\d+\.?\d+)/i.test(ua)) n="o";
    else if (/Netscape.(\d+)/i.test(ua)) n="n";
    else return {n:"x",v:0,t:names[n]};
    
    var v= parseFloat(RegExp.$1);
    var donotnotify=false;
    //do not notify ver old systems since their is no up-to-date browser available
    if (/windows.nt.5.0|windows.nt.4.0|windows.98|os x 10.4|os x 10.5|os x 10.3|os x 10.2/.test(ua)) donotnotify="oldOS";
    
    //do not notify firefox ESR
    if (n=="f" && Math.round(v)==24)
        donotnotify="ESR";
    //do not notify opera 12 on linux since it is the latest version
    if (/linux|x11|unix|bsd/.test(ua) && n=="o" && v>12) 
        donotnotify="Opera12Linux";
    
    if (n=="x") return {n:"x",v:v||0,t:names[n],donotnotify:donotnotify};
    

    if (n=="so") {
        v=((v<100) && 1.0) || ((v<130) && 1.2) || ((v<320) && 1.3) || ((v<520) && 2.0) || ((v<524) && 3.0) || ((v<526) && 3.2) ||4.0;
        n="s";
    }
    if (n=="i" && v==7 && window.XDomainRequest) {
        v=8;
    }
    if (n=="io") {
        n="i";
        if (v>6) v=11;
        else if (v>5) v=10;
        else if (v>4) v=9;
        else if (v>3.1) v=8;
        else if (v>3) v=7;
        else v=9;
    }	
    return {n:n,v:v,t:names[n],donotnotify:donotnotify};
}