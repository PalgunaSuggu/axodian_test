import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />

        {/* Favicon */}
        <link rel="icon" type="image/webp" sizes="32x32" href="/images/axodian-logo-A.webp" />
        <link rel="icon" type="image/webp" sizes="192x192" href="/images/axodian-logo-A.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/axodian-logo-A.webp" />

        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WDTLVL9W');
            `,
          }}
        />

        {/* LinkedIn Insight Tag */}
        <Script
          strategy="afterInteractive"
          id="linkedin-insight"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "6698369";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l) {
                  window.lintrk = function(a,b) { window.lintrk.q.push([a,b]); };
                  window.lintrk.q = [];
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          strategy="afterInteractive"
          id="facebook-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s) {
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
                if(!f._fbq)f._fbq=n;n.push=n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '798131718795583'); 
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          strategy="afterInteractive"
          id="microsoft-clarity"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document,'clarity','script','kqbyf9e94s');
            `,
          }}
        />

        {/* Mautic Tracking Script */}
        <Script
          strategy="afterInteractive"
          id="mautic-tracking"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
              w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
              m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://csm.leremitt.com/mtc.js','mt');

              mt('send', 'pageview');
            `,
          }}
        />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDTLVL9W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager Noscript"
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
