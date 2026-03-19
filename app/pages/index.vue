<template>
  <div>
    <div
      id="app"
      data-page='{"component":"Landing\/Landing","props":{"errors":{},"auth":{"user":null,"has_linked_wallet":false},"flash":{"swal":null},"ticks":{"BTC_USDT":{"id":39848261,"market":"BINANCE","pair":"BTC_USDT","price":"93530.75000000","batch":554126,"created_at":"2026-01-06T15:51:04.000000Z","updated_at":"2026-01-06T15:51:04.000000Z"},"ETH_USDT":{"id":39848265,"market":"BINANCE","pair":"ETH_USDT","price":"3270.45000000","batch":554126,"created_at":"2026-01-06T15:51:05.000000Z","updated_at":"2026-01-06T15:51:05.000000Z"},"ETH_ARB_USDT":{"id":39848269,"market":"BINANCE","pair":"ETH_ARB_USDT","price":"3270.45000000","batch":554126,"created_at":"2026-01-06T15:51:06.000000Z","updated_at":"2026-01-06T15:51:06.000000Z"},"AVAX_USDT":{"id":39848273,"market":"BINANCE","pair":"AVAX_USDT","price":"14.49000000","batch":554126,"created_at":"2026-01-06T15:51:07.000000Z","updated_at":"2026-01-06T15:51:07.000000Z"},"BNB_USDT":{"id":39848277,"market":"BINANCE","pair":"BNB_USDT","price":"918.93000000","batch":554126,"created_at":"2026-01-06T15:51:07.000000Z","updated_at":"2026-01-06T15:51:07.000000Z"},"TRX_USDT":{"id":39848281,"market":"BINANCE","pair":"TRX_USDT","price":"0.29230000","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDT_USDT":{"id":39848285,"market":"STATIC","pair":"USDT_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDT_ARB_USDT":{"id":39848289,"market":"STATIC","pair":"USDT_ARB_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDT_AVAX_USDT":{"id":39848293,"market":"STATIC","pair":"USDT_AVAX_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDT_BEP_USDT":{"id":39848297,"market":"STATIC","pair":"USDT_BEP_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDC_USDT":{"id":39848301,"market":"STATIC","pair":"USDC_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"USDT_TRC_USDT":{"id":39848305,"market":"STATIC","pair":"USDT_TRC_USDT","price":"1","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"SGD_USDT":{"id":39848309,"market":"COINBASE","pair":"SGD_USDT","price":"0.78","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"HKD_USDT":{"id":39848313,"market":"COINBASE","pair":"HKD_USDT","price":"0.12","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"ZAR_USDT":{"id":39848317,"market":"COINBASE","pair":"ZAR_USDT","price":"0.06","batch":554126,"created_at":"2026-01-06T15:51:08.000000Z","updated_at":"2026-01-06T15:51:08.000000Z"},"CHF_USDT":{"id":39848321,"market":"COINBASE","pair":"CHF_USDT","price":"1.25","batch":554126,"created_at":"2026-01-06T15:51:09.000000Z","updated_at":"2026-01-06T15:51:09.000000Z"},"GBP_USDT":{"id":39848325,"market":"COINBASE","pair":"GBP_USDT","price":"1.35","batch":554126,"created_at":"2026-01-06T15:51:09.000000Z","updated_at":"2026-01-06T15:51:09.000000Z"},"AUD_USDT":{"id":39848329,"market":"COINBASE","pair":"AUD_USDT","price":"0.67","batch":554126,"created_at":"2026-01-06T15:51:09.000000Z","updated_at":"2026-01-06T15:51:09.000000Z"},"CNY_USDT":{"id":39848333,"market":"COINBASE","pair":"CNY_USDT","price":"0.14","batch":554126,"created_at":"2026-01-06T15:51:09.000000Z","updated_at":"2026-01-06T15:51:09.000000Z"}},"ziggy":{"url":"https:\/\/dao1.ai","port":null,"defaults":[],"routes":{"landing":{"uri":"\/","methods":["GET","HEAD"]},"news.index":{"uri":"news","methods":["GET","HEAD"]},"news.":{"uri":"news\/proxy\/show","methods":["GET","HEAD"]},"news.show":{"uri":"news\/show\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"fees":{"uri":"fees","methods":["GET","HEAD"]},"approve-withdraw":{"uri":"withdraw-approve\/{signature}","methods":["GET","HEAD"],"parameters":["signature"]},"decline-withdraw":{"uri":"withdraw-decline\/{signature}","methods":["GET","HEAD"],"parameters":["signature"]},"unauthorized.access":{"uri":"unauthorized-access","methods":["GET","HEAD"]},"settings.two-factor.verify":{"uri":"profile\/two-factor\/verify","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"reports.index":{"uri":"reports","methods":["GET","HEAD"]},"reports.ranks-lines":{"uri":"reports\/ranks-lines","methods":["GET","HEAD"]},"reports.ranks-close-to":{"uri":"reports\/ranks-close-to","methods":["GET","HEAD"]},"reports.ranks-pool":{"uri":"reports\/ranks-pool","methods":["GET","HEAD"]},"reports.no1-pool":{"uri":"reports\/no1-pool","methods":["GET","HEAD"]},"reports.commissions":{"uri":"reports\/commissions","methods":["GET","HEAD"]},"reports.commissions.export":{"uri":"reports\/commissions-export","methods":["GET","HEAD"]},"reports.volumes":{"uri":"reports\/volumes","methods":["GET","HEAD"]},"settings.index":{"uri":"settings","methods":["GET","HEAD"]},"settings.user-settings":{"uri":"settings\/user-settings","methods":["POST"]},"settings.wallet-connection.connect":{"uri":"settings\/wallet-connection\/connect","methods":["POST"]},"settings.wallet-connection.check-address":{"uri":"settings\/wallet-connection\/check-address","methods":["POST"]},"settings.two-factor.generate-secret":{"uri":"settings\/two-factor\/generate-secret","methods":["POST"]},"settings.two-factor.enable":{"uri":"settings\/two-factor\/enable","methods":["POST"]},"settings.two-factor.initiate.disable":{"uri":"settings\/two-factor\/initiate-disable","methods":["POST"]},"settings.two-factor.disable":{"uri":"settings\/two-factor\/disable","methods":["GET","HEAD"]},"settings.kyc.index":{"uri":"settings\/kyc","methods":["GET","HEAD"]},"settings.kyc.submit":{"uri":"settings\/kyc\/submit","methods":["POST"]},"settings.initiate.delete.account":{"uri":"settings\/initiate-delete-account","methods":["POST"]},"settings.delete.account":{"uri":"settings\/delete-account","methods":["GET","HEAD"]},"settings.email.update":{"uri":"settings\/email\/update","methods":["POST"]},"settings.email.change":{"uri":"settings\/email\/change\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"settings.email.confirm":{"uri":"settings\/email\/confirm\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"profile.index":{"uri":"profile","methods":["GET","HEAD"]},"profile.notifications":{"uri":"profile\/notifications","methods":["GET","HEAD"]},"profile.notifications.mark-as-read":{"uri":"profile\/notifications\/mark-as-read","methods":["POST"]},"profile.picture":{"uri":"profile\/picture","methods":["POST"]},"profile.set-language":{"uri":"profile\/set-language\/{iso}","methods":["GET","HEAD"],"parameters":["iso"]},"profile.user-profile":{"uri":"profile\/{username}","methods":["GET","HEAD"],"parameters":["username"]},"financial.wallets":{"uri":"financial\/wallets","methods":["GET","HEAD"]},"financial.withdraw.withdraw":{"uri":"financial\/withdraw\/generate","methods":["POST"]},"financial.withdraw.add-address":{"uri":"financial\/withdraw\/add-address","methods":["POST"]},"financial.withdraw.remove-address":{"uri":"financial\/withdraw\/remove-address","methods":["POST"]},"team.tree.tree":{"uri":"team\/tree","methods":["GET","HEAD"]},"team.tree.card":{"uri":"team\/tree\/card","methods":["GET","HEAD"]},"team.tree.sponsored":{"uri":"team\/tree\/sponsored","methods":["GET","HEAD"]},"team.tree.sponsored.search":{"uri":"team\/tree\/sponsored\/search","methods":["GET","HEAD"]},"help-center.submit.ticket":{"uri":"support\/submit-ticket","methods":["GET","HEAD"]},"help-center.store.ticket":{"uri":"support\/submit-ticket","methods":["POST"]},"resources.index":{"uri":"resources","methods":["GET","HEAD"]},"resources.download":{"uri":"resources\/download","methods":["GET","HEAD"]},"bundle.show":{"uri":"bundle\/{bundle}","methods":["GET","HEAD"],"parameters":["bundle"]},"bundle.purchase":{"uri":"bundle\/purchase","methods":["POST"]},"store.index":{"uri":"store","methods":["GET","HEAD"]},"store.purchase":{"uri":"store\/purchase","methods":["POST"]},"store.show":{"uri":"store\/{package}","methods":["GET","HEAD"],"parameters":["package"]},"inventory.index":{"uri":"inventory","methods":["GET","HEAD"]},"tutorials.index":{"uri":"tutorials","methods":["GET","HEAD"]},"tutorials.show":{"uri":"tutorials\/{tutorial}","methods":["GET","HEAD"],"parameters":["tutorial"],"bindings":{"tutorial":"id"}},"tutorials.download":{"uri":"tutorials\/{tutorial}\/{file}\/{variation}\/download","methods":["GET","HEAD"],"parameters":["tutorial","file","variation"],"bindings":{"tutorial":"id"}},"subscription.index":{"uri":"subscription","methods":["GET","HEAD"]},"subscription.purchase":{"uri":"subscription","methods":["POST"]},"inventory-tabs.mining":{"uri":"{package}\/mining","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"inventory-tabs.trading-bot":{"uri":"{package}\/trading-bot","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"inventory-tabs.more-traders":{"uri":"{package}\/more-traders","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"inventory-tabs.start-trade":{"uri":"{package}\/start-trade","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"inventory-tabs.coin-analyzer.index":{"uri":"{package}\/coin-analyzer","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"inventory-tabs.coin-analyzer.all-signals":{"uri":"{package}\/coin-analyzer\/all-signals","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"promotions.index":{"uri":"promotions","methods":["GET","HEAD"]},"promotions.show":{"uri":"promotions\/{promo}","methods":["GET","HEAD"],"parameters":["promo"]},"log.store":{"uri":"log","methods":["POST"]},"privacy.policy":{"uri":"privacy-policy","methods":["GET","HEAD"]},"web.conditions":{"uri":"web-conditions","methods":["GET","HEAD"]},"terms.service":{"uri":"terms-of-services","methods":["GET","HEAD"]},"not.available":{"uri":"not-available","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["GET","HEAD"]},"admin-login":{"uri":"admin-login","methods":["GET","HEAD"]}},"location":"https:\/\/dao1.ai"},"formattedCurrencyNames":{"BTC":"Bitcoin","ETH":"Ethereum","ETH_ARB":"Ethereum - Arbitrum","AVAX":"Avalanche","USDT":"Tether - ERC20","USDT_ARB":"Tether - Arbitrum","USDT_AVAX":"Tether - Avalanche","BNB":"Binance Coin - BSC","USDT_BEP":"Tether - BEP20","USDC":"USDC - ERC20","TRX":"Tron","USDT_TRC":"Tether - TRC20","SGD":"Singapore dollar","HKD":"Hong Kong dollar","ZAR":"South African Rand","CHF":"Swiss franc","GBP":"British Pound","AUD":"Australian dollar","CNY":"Chinese Yuan","USD":"United States Dollar","SEK":"Swedish Krona","NOK":"Norwegian Krone","DKK":"Danish Krone"},"currencies":["BTC","ETH","ETH_ARB","AVAX","TRX","BNB","USDT","USDT_ARB","USDT_AVAX","USDT_BEP","USDT_TRC","USDC"],"blockchainCurrencies":["BTC","ETH","ETH_ARB","AVAX","TRX","BNB","USDT","USDT_ARB","USDT_AVAX","USDT_BEP","USDT_TRC","USDC"],"languages":{"en":{"name":"English","country":"United Kingdom"},"es":{"name":"Spanish","country":"Spain"},"pt":{"name":"Portuguese","country":"Portugal"},"fr":{"name":"French","country":"France"},"it":{"name":"Italian","country":"Italy"},"de":{"name":"German","country":"Germany"},"nl":{"name":"Dutch","country":"Netherlands"},"da":{"name":"Danish","country":"Denmark"},"el":{"name":"Greek","country":"Greece"},"ru":{"name":"Russian","country":"Russia"},"ko":{"name":"Korean","country":"South Korea"},"sv":{"name":"Swedish","country":"Sweden"},"tr":{"name":"Turkish","country":"Turkey"},"fi":{"name":"Finnish","country":"Finland"},"et":{"name":"Estonian","country":"Estonia"},"lt":{"name":"Lithuanian","country":"Lithuania"},"lv":{"name":"Latvian","country":"Latvia"},"hu":{"name":"Hungarian","country":"Hungary"},"ar":{"name":"Arabic","country":"Saudi Arabia"},"zh":{"name":"Chinese Simplified","country":"China"}},"language":"en","appVersion":"","appName":"DAO1"},"url":"\/","version":"195551e1e0be1781e7f85ec893346a64"}'
      data-v-app=""
    >
      <!----><!---->
      <div class="bg-[#081b2a] pt-8 text-white">
        <header class="w-full max-w-[1240px] px-5 mx-auto">
          <nav
            class="bg-gradient-to-b gap-2 from-[#11314a] to-[#0c2539] border border-[#224765] px-6 py-4 rounded-[10px] relative flex items-center justify-between z-50"
          >
            <NuxtLink to="/form" class="flex z-10 cursor-pointer">
              <img src="/img/logo-6ecfa38e.svg" alt="Logo" />
            </NuxtLink>
            <img
              src="/img/logo-blur-d68332b9.png"
              alt="Logo Blur"
              class="absolute top-0 left-0 z-[1]"
            />
            <div class="max-md:hidden flex items-center gap-3 z-[2]">
              <NuxtLink
                to="/form"
                class="text-base tracking-[0.88px] border-b border-transparent hover:border-[#76b0de] cursor-pointer"
                >Tech</NuxtLink
              ><NuxtLink
                to="/form"
                class="text-base tracking-[0.88px] border-b border-transparent hover:border-[#76b0de] cursor-pointer"
                >DAO</NuxtLink
              ><NuxtLink
                to="/form"
                class="text-base tracking-[0.88px] border-b border-transparent hover:border-[#76b0de] cursor-pointer"
                >About</NuxtLink
              ><NuxtLink
                to="/form"
                class="text-base tracking-[0.88px] border-b border-transparent hover:border-[#76b0de] cursor-pointer"
                >Features</NuxtLink
              ><NuxtLink
                to="/form"
                class="text-base tracking-[0.88px] border-b border-transparent hover:border-[#76b0de] cursor-pointer"
                >News</NuxtLink
              >
              <div class="flex items-center gap-3.5">
                <NuxtLink to="/form" class="plug-button text-sm tracking-[0.82px] px-3 cursor-pointer">
                  Access DAO1
                </NuxtLink>
                <div class="bg-transparent mx-auto lg:mx-0">
                  <button
                    type="button"
                    data-dropdown-toggle="language-dropdown-menu"
                    class="plug-button h-[46px] p-[14px] inline-flex items-center font-medium justify-center text-sm text-white rounded-[5px] cursor-pointer btn-secondary"
                  >
                    <img
                      class="min-w-5"
                      src="/img/gb-d9d07fe9.svg"
                      alt=""
                    />
                  </button>
                  <div
                    class="border border-[#224765] rounded-[10px] mt-6 z-50 hidden my-4 text-base list-none custom-gradient divide-y divide-gray-100 shadow !inset-[16px_auto_auto_-20px]"
                    id="language-dropdown-menu"
                    data-popper-placement="bottom"
                    style="
                      position: absolute;
                      inset: 0px auto auto 0px;
                      margin: 0px;
                      transform: translate(1505px, 105px);
                    "
                  >
                    <ul
                      class="py-2 font-medium h-[200px] overflow-y-auto"
                      role="none"
                    >
                      <li>
                        <NuxtLink
                          to="/form"
                          class="bg-[#224765] block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/gb-d9d07fe9.svg"
                              alt=""
                            />
                            EN (English)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/es-13dcd4fe.svg"
                              alt=""
                            />
                            ES (Spanish)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/pt-bbf75ba0.svg"
                              alt=""
                            />
                            PT (Portuguese)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/fr-1c8b9d8a.svg"
                              alt=""
                            />
                            FR (French)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/bl-a3a0e345.svg"
                              alt=""
                            />
                            FR (French)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/it-d87ab578.svg"
                              alt=""
                            />
                            IT (Italian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/de-8a88b7e9.svg"
                              alt=""
                            />
                            DE (German)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/nl-a6d60b5d.svg"
                              alt=""
                            />
                            NL (Dutch)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/nl-a6d60b5d.svg"
                              alt=""
                            />
                            NL (Dutch)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/dk-e227cf95.svg"
                              alt=""
                            />
                            DA (Danish)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/gr-ab773370.svg"
                              alt=""
                            />
                            EL (Greek)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/ru-3c221b34.svg"
                              alt=""
                            />
                            RU (Russian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/ko-113832a6.svg"
                              alt=""
                            />
                            KO (Korean)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/kr-113832a6.svg"
                              alt=""
                            />
                            KO (Korean)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/se-b8b061bd.svg"
                              alt=""
                            />
                            SV (Swedish)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/tr-7d7ae58b.svg"
                              alt=""
                            />
                            TR (Turkish)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/fi-d32d3d6c.svg"
                              alt=""
                            />
                            FI (Finnish)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/ee-86e8c704.svg"
                              alt=""
                            />
                            ET (Estonian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/lt-33b6d162.svg"
                              alt=""
                            />
                            LT (Lithuanian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/lv-c2db564c.svg"
                              alt=""
                            />
                            LV (Latvian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/hu-d2cb889e.svg"
                              alt=""
                            />
                            HU (Hungarian)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/ae-34b70c05.svg"
                              alt=""
                            />
                            AR (Arabic)
                          </div>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/form"
                          class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                          role="menuitem"
                        >
                          <div class="inline-flex items-center">
                            <img
                              class="h-3.5 w-3.5 min-w-3.5 me-2"
                              src="/img/cn-b2c49861.svg"
                              alt=""
                            />
                            ZH (Chinese Simplified)
                          </div>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <NuxtLink to="/form" class="md:hidden w-8 z-[1] cursor-pointer">
              <img src="/img/mobile-menu-4e2f7870.svg" alt="Mobile Menu" />
            </NuxtLink>
          </nav>
          <div
            class="md:hidden absolute w-full top-0 left-0 pt-36 px-6 py-8 min-h-screen bg-[#0c2539] border border-t-0 border-[#224765] z-40 flex flex-col"
            style="display: none"
          >
            <div class="bg-transparent w-full mx-auto lg:mx-0 mb-2.5">
              <button
                type="button"
                data-dropdown-toggle="language-dropdown-menu-mobile"
                class="border border-[#224765] flex justify-between items-center w-full custom-gradient p-[18px] font-medium text-sm text-white rounded-[5px] cursor-pointer"
              >
                <div class="flex gap-2 items-center">
                  <img class="size-4" src="/img/gb-d9d07fe9.svg" alt="" />
                  <p class="leading-tight">EN</p>
                </div>
                <img
                  src="/img/caret-62def87b.svg"
                  class="block lg:hidden right-3"
                  alt=""
                />
              </button>
              <div
                class="border border-[#224765] rounded-[5px] mt-6 z-50 hidden my-4 w-full max-w-[94%] text-base list-none custom-gradient divide-y divide-gray-100 shadow"
                id="language-dropdown-menu-mobile"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
                style="
                  position: absolute;
                  inset: 0px auto auto 0px;
                  margin: 0px;
                  transform: translate(0px, 10px);
                "
              >
                <ul
                  class="py-2 font-medium h-[200px] overflow-y-auto"
                  role="none"
                >
                  <li>
                    <NuxtLink
                      to="/form"
                      class="bg-[#224765] block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/gb-d9d07fe9.svg"
                          alt=""
                        />
                        EN (English)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/es-13dcd4fe.svg"
                          alt=""
                        />
                        ES (Spanish)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/pt-bbf75ba0.svg"
                          alt=""
                        />
                        PT (Portuguese)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/bl-a3a0e345.svg"
                          alt=""
                        />
                        FR (French)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/it-d87ab578.svg"
                          alt=""
                        />
                        IT (Italian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/de-8a88b7e9.svg"
                          alt=""
                        />
                        DE (German)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/nl-a6d60b5d.svg"
                          alt=""
                        />
                        NL (Dutch)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/dk-e227cf95.svg"
                          alt=""
                        />
                        DA (Danish)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/gr-ab773370.svg"
                          alt=""
                        />
                        EL (Greek)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/ru-3c221b34.svg"
                          alt=""
                        />
                        RU (Russian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/kr-113832a6.svg"
                          alt=""
                        />
                        KO (Korean)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/se-b8b061bd.svg"
                          alt=""
                        />
                        SV (Swedish)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/tr-7d7ae58b.svg"
                          alt=""
                        />
                        TR (Turkish)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/fi-d32d3d6c.svg"
                          alt=""
                        />
                        FI (Finnish)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/ee-86e8c704.svg"
                          alt=""
                        />
                        ET (Estonian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/lt-33b6d162.svg"
                          alt=""
                        />
                        LT (Lithuanian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/lv-c2db564c.svg"
                          alt=""
                        />
                        LV (Latvian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/hu-d2cb889e.svg"
                          alt=""
                        />
                        HU (Hungarian)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/ae-34b70c05.svg"
                          alt=""
                        />
                        AR (Arabic)
                      </div>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/form"
                      class="block px-4 py-2 text-sm text-white hover:bg-[#224765] cursor-pointer"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <img
                          class="h-3.5 w-3.5 min-w-3.5 me-2"
                          src="/img/cn-b2c49861.svg"
                          alt=""
                        />
                        ZH (Chinese Simplified)
                      </div>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main class="min-h-[calc(100vh-645.5px)]">
          <img
            src="/img/right-corner-bg-c8d41c5f.png"
            alt="Left Top Bg"
            class="absolute top-0 right-0 z-10"
          />
          <div class="relative bg-gradient-to-b from-[#081b2a] to-[#123756]">
            <img
              src="/img/left-corner-bg-fd82c4be.png"
              alt="Left Top Bg"
              class="absolute max-lg:hidden bottom-0 left-0"
            />
            <div
              class="pt-20 sm:pt-28 pb-[220px] w-full max-w-[1240px] px-5 mx-auto relative"
            >
              <img
                src="/img/robot-e3383591.png"
                alt="Left Top Bg"
                class="left-0 right-0 2xl:right-80 absolute hidden 2xl:flex mx-auto z-10 bottom-0"
              /><img
                src="/img/robot-2x-1a3a825d.png"
                alt="Left Top Bg"
                class="right-3 2xl:-right-20 absolute max-xl:opacity-25 bottom-0 mx-auto z-[1]"
              />
              <div class="relative z-[2]">
                <p
                  class="gold-gradient-text text-lg md:text-2xl leading-[32px] tracking-[0.82px] uppercase font-medium"
                >
                  Welcome to DAO1
                </p>
                <p
                  class="text-2xl md:text-[34px] font-medium leading-[48px] tracking-[0.82px]"
                >
                  The Technology of Tomorrow,
                </p>
                <p
                  class="text-[40px] md:text-[72px] font-medium md:leading-[88px] tracking-[0.82px]"
                >
                  is DAO1 Today
                </p>
                <p class="leading-[24px] tracking-[0.82px] max-w-[480px] mb-6">
                  Become part of DAO1.ai, your Number 1 platform, and grow your
                  business over blockchain technology.
                  <span class="font-semibold"
                    >Decentral. Independent. Transparent!</span
                  >
                </p>
              </div>
              <div class="block gap-3 z-10 relative">
                <NuxtLink
                  to="/form"
                  class="plug-button text-sm tracking-[0.82px] px-3 m-1 inline-block"
                  style="margin: 5px"
                >
                  Connect Wallet
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="plug-button text-sm tracking-[0.82px] px-3 m-1 inline-block"
                  style="margin: 5px"
                >
                  BOT Activation
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="plug-button text-sm tracking-[0.82px] px-3 m-1 inline-block"
                  style="margin: 5px"
                >
                  Synchronized / Validation
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="plug-button text-sm tracking-[0.82px] px-3 m-1 inline-block"
                  style="margin: 5px"
                >
                  APTM Unlock/Lock
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="plug-button text-sm tracking-[0.82px] px-3 m-1 inline-block"
                  style="margin: 5px"
                >
                  Claim APTM
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="relative overflow pt-[550px] sm:pt-[300px] lg:pt-[180px] bg-[#0a2037] pb-20"
          >
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-[1240px] px-5 absolute -top-14 gap-5 left-0 right-0 mx-auto z-10"
            >
              <NuxtLink
                to="/form"
                class="bg-gradient-to-b from-[#11314a] to-[#0c2539] overflow-hidden border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
              >
                <p class="text-sm tracking-[0.37px] text-[#76b0de]">01</p>
                <p class="text-xl md:text-3xl font-semibold tracking-[0.8px]">
                  Decentral
                </p>
                <img
                  src="/img/decentral-4d5a9504.png"
                  alt="Blur"
                  class="absolute bottom-0 left-0"
                />
              </NuxtLink>
              <NuxtLink
                to="/form"
                class="bg-gradient-to-b from-[#11314a] to-[#0c2539] overflow-hidden border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
              >
                <p class="text-sm tracking-[0.37px] text-[#76b0de]">02</p>
                <p class="text-xl md:text-3xl font-semibold tracking-[0.8px]">
                  Autonomous
                </p>
                <img
                  src="/img/autonomous-4719652c.png"
                  alt="Blur"
                  class="absolute bottom-0"
                />
              </NuxtLink>
              <NuxtLink
                to="/form"
                class="bg-gradient-to-b from-[#11314a] to-[#0c2539] overflow-hidden border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
              >
                <p class="text-sm tracking-[0.37px] text-[#76b0de]">03</p>
                <p class="text-xl md:text-3xl font-semibold tracking-[0.8px]">
                  Organisation
                </p>
                <img
                  src="/img/organisation-ca2029a1.png"
                  alt="Blur"
                  class="absolute bottom-0"
                />
              </NuxtLink>
              <NuxtLink
                to="/form"
                class="bg-gradient-to-b from-[#11314a] to-[#0c2539] overflow-hidden border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
              >
                <p class="text-sm tracking-[0.37px] text-[#76b0de]">04</p>
                <p class="text-xl md:text-3xl font-semibold tracking-[0.8px]">
                  Number 1
                </p>
                <img
                  src="/img/number1-69e48966.png"
                  alt="Blur"
                  class="absolute bottom-0 right-0"
                />
              </NuxtLink>
            </div>
            <div
              class="w-full max-w-[1240px] px-5 mx-auto flex max-lg:flex-col items-center gap-5"
              id="tech"
            >
              <NuxtLink to="/form" class="w-full cursor-pointer">
                <img
                  src="/img/control-25bf9a3d.png"
                  alt="Control"
                  class="w-full"
                />
              </NuxtLink>
              <NuxtLink to="/form" class="cursor-pointer">
                <div>
                  <p
                    class="font-medium text-2xl md:text-[40px] md:leading-[54px] tracking-[0.82px] mb-2"
                  >
                    Maintain Control Over Your Business &amp; Your Assets
                  </p>
                  <p class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-6">
                    A decentralized autonomous organization, sometimes called a
                    decentralized autonomous corporation, is an organization
                    managed in whole or in part by decentralized computer program,
                    with voting and operations handled through a blockchain. In
                    general terms, DAOs are member-owned communities without a
                    centralized leadership &amp; body.
                  </p>
                </div>
              </NuxtLink>
            </div>
            <div
              class="w-full max-w-[1240px] px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-14 md:mt-[84px]"
              id="dao"
            >
              <NuxtLink to="/form" class="lg:ml-5 cursor-pointer">
                <div>
                  <p
                    class="text-[72px] font-medium leading-[88px] tracking-[0.82px] text-[#76b0de33]"
                  >
                    01
                  </p>
                  <p
                    class="text-2xl tracking-[0.82px] leading-[32px] -mt-9 ml-[30px] mb-3"
                  >
                    What Is a Decentralized Autonomous Organization (DAO)?
                  </p>
                  <p
                    class="max-md:text-sm tracking-[0.82px] leading-[24px] ml-[30px]"
                  >
                    A decentralized autonomous organization, sometimes called a
                    decentralized autonomous corporation, is an organization
                    managed in whole or in part by decentralized computer program,
                    with voting and operations handled through a blockchain. In
                    general terms, DAOs are member-owned communities without a
                    centralized leadership &amp; body.
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/form" class="lg:ml-16 cursor-pointer">
                <div>
                  <p
                    class="text-[72px] font-medium leading-[88px] tracking-[0.82px] text-[#76b0de33]"
                  >
                    02
                  </p>
                  <p
                    class="text-2xl tracking-[0.82px] leading-[32px] -mt-9 ml-[30px] mb-3"
                  >
                    Why make an organization like the DAO1?
                  </p>
                  <p
                    class="max-md:text-sm tracking-[0.82px] leading-[24px] ml-[30px]"
                  >
                    The developers of the DAO believed they could eliminate human
                    error or manipulations of its users and funds, by placing
                    decision-making power into the hands of an automated system
                    and a crowdsourced process. Fueled by AVAX, the DAO1 is
                    designed to allow users to send value privately &amp; securely
                    from anywhere in the world.
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/form" class="lg:ml-5 cursor-pointer">
                <div>
                  <p
                    class="text-[72px] font-medium leading-[88px] tracking-[0.82px] text-[#76b0de33]"
                  >
                    03
                  </p>
                  <p
                    class="text-2xl tracking-[0.82px] leading-[32px] -mt-9 ml-[30px] mb-3"
                  >
                    Next Generation Privacy
                  </p>
                  <p
                    class="max-md:text-sm tracking-[0.82px] leading-[24px] ml-[30px]"
                  >
                    One of the major features of digital currencies is that they
                    are decentralized. This means they are not controlled by a
                    single institution like a government or central bank, but
                    instead are divided among a variety of computers, networks,
                    and nodes. In many cases, virtual currencies make use of this
                    decentralized status to attain levels of privacy and security
                    that are typically unavailable to standard businesses and
                    their operations.
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/form" class="lg:ml-16 cursor-pointer">
                <div>
                  <p
                    class="text-[72px] font-medium leading-[88px] tracking-[0.82px] text-[#76b0de33]"
                  >
                    04
                  </p>
                  <p
                    class="text-2xl tracking-[0.82px] leading-[32px] -mt-9 ml-[30px] mb-3"
                  >
                    The DAO1 Model is the organization of the Future, Today!
                  </p>
                  <p
                    class="max-md:text-sm tracking-[0.82px] leading-[24px] ml-[30px]"
                  >
                    With the rising optimism &amp; increased use of independent
                    decentralized communities &amp; platforms, the DAO1 model is
                    quickly growing in prominence and promise as a preferred model
                    for an organization of the future.
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="bg-[url(&#39;@/../img/landing/blockchain-bg.png&#39;)] bg-right bg-cover bg-no-repeat py-12"
          >
            <div
              class="w-full max-w-[1240px] px-5 mx-auto flex max-lg:flex-col items-center justify-between gap-10 lg:gap-[70px]"
            >
              <NuxtLink to="/form" class="cursor-pointer">
                <div>
                  <p
                    class="text-2xl md:text-[40px] font-medium leading-[54px] tracking-[0.82px] mb-2.5 md:mb-6"
                  >
                    Why It Matters
                  </p>
                  <p class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-6">
                    Blockchain technology is the future of the internet! DAO1.ai
                    is built on Apertum Smart Contract protocols, this Web3
                    solution is more fair and equitable, owned by the builders,
                    creators and users. You!
                  </p>
                </div>
              </NuxtLink>
              <NuxtLink to="/form" class="w-full cursor-pointer">
                <img
                  src="/img/blockchain-e75a9f4e.png"
                  alt="Blockchain"
                  class="w-full"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="bg-[#0a2037] pt-20 pb-[100px]">
            <div class="w-full max-w-[1240px] px-5 mx-auto">
              <p
                class="text-2xl leading-[32px] tracking-[0.82px] text-center max-w-[800px] mx-auto mb-16"
              >
                We believe it is your basic right to control your assets, data
                &amp; privacy. DAO1.ai uses integrated all-in-one smart wallet
                technology. Simply plug-in modules, such as
              </p>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                id="about"
              >
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
                >
                  <p class="text-sm tracking-[0.37px] text-[#76b0de] mb-2">
                    01.
                  </p>
                  <p
                    class="text-xl md:text-3xl tracking-[0.8px] font-semibold mb-2"
                  >
                    Cross-Platform
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Payment Solutions
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Virtual Economies
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Node Hosting
                  </p>
                  <img
                    src="/img/cross-platform-fddecbda.png"
                    alt="A Logo"
                    class="right-3.5 absolute bottom-0 max-sm:left-0 max-sm:right-0 max-sm:mx-auto"
                  /><img
                    src="/img/bottom-blur-aed2a746.png"
                    alt="A Logo"
                    class="absolute bottom-0 left-0 right-0 mx-auto"
                  />
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
                >
                  <p class="text-sm tracking-[0.37px] text-[#76b0de] mb-2">
                    02.
                  </p>
                  <p
                    class="text-xl md:text-3xl tracking-[0.8px] font-semibold mb-2"
                  >
                    Real World
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Commodities
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Stocks
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Real Estate
                  </p>
                  <img
                    src="/img/real-world-91865f44.png"
                    alt="A Logo"
                    class="right-3.5 absolute bottom-0 max-sm:left-0 max-sm:right-0 max-sm:mx-auto"
                  /><img
                    src="/img/bottom-blur-aed2a746.png"
                    alt="A Logo"
                    class="absolute bottom-0 left-0 right-0 mx-auto"
                  />
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="row-span-2 bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] p-8 relative min-h-[450px] cursor-pointer"
                >
                  <div class="z-10 flex flex-col">
                    <p
                      class="text-3xl md:text-[40px] font-medium md:leading-[54px] tracking-[0.82px] mb-1"
                    >
                      And much more!
                    </p>
                    <p
                      class="text-xl md:text-2xl font-medium md:leading-[32px] tracking-[0.82px] z-50"
                    >
                      Only with DAO1.ai, your DAO platform.
                    </p>
                  </div>
                  <img
                    src="/img/a-logo-95b31223.png"
                    alt="A Logo"
                    class="absolute bottom-0 right-0"
                  /><img
                    src="/img/left-robot-fa4be7b6.png"
                    alt="A Logo"
                    class="absolute bottom-0 left-0"
                  />
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
                >
                  <p class="text-sm tracking-[0.37px] text-[#76b0de] mb-2">
                    03.
                  </p>
                  <p
                    class="text-xl md:text-3xl tracking-[0.8px] font-semibold mb-2"
                  >
                    Virtual
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    NFT Gaming
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    DApp Development
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Virtual Mining
                  </p>
                  <img
                    src="/img/virtual-6ec39288.png"
                    alt="A Logo"
                    class="right-3.5 absolute bottom-0 max-sm:left-0 max-sm:right-0 max-sm:mx-auto"
                  /><img
                    src="/img/bottom-blur-aed2a746.png"
                    alt="A Logo"
                    class="absolute bottom-0 left-0 right-0 mx-auto"
                  />
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] p-8 relative cursor-pointer"
                >
                  <p class="text-sm tracking-[0.37px] text-[#76b0de] mb-2">
                    04.
                  </p>
                  <p
                    class="text-xl md:text-3xl tracking-[0.8px] font-semibold mb-2"
                  >
                    Digital
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Crypto
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    AI Analysis
                  </p>
                  <p
                    class="max-md:text-sm leading-[24px] tracking-[0.82px] mb-1"
                  >
                    Metaverse
                  </p>
                  <img
                    src="/img/digital-df58dea3.png"
                    alt="A Logo"
                    class="right-3.5 absolute bottom-0 max-sm:left-0 max-sm:right-0 max-sm:mx-auto"
                  /><img
                    src="/img/bottom-blur-aed2a746.png"
                    alt="A Logo"
                    class="absolute bottom-0 left-0 right-0 mx-auto"
                  />
                </NuxtLink>
              </div>
              <p
                class="text-2xl md:text-[40px] text-center font-medium md:leading-[54px] tracking-[0.82px] mt-20 md:mt-[120px] mb-8"
                id="features"
              >
                What Does DAO1.ai Mean to Your Business?
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <img
                      src="/img/privacy-2649c3bd.png"
                      alt="/img/privacy-2649c3bd.png"
                      class="rounded-t-[10px] w-full"
                    />
                    <div class="p-8 pb-0">
                      <p
                        class="text-2xl font-medium leading-[32px] tracking-[0.82px] mb-2"
                      >
                        Full Privacy &amp; Control of Your Business &amp; Assets
                      </p>
                      <p class="leading-[24px] tracking-[0.82px] mb-6">
                        Empower your business with State-of-Art Technology.
                      </p>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <img
                      src="/img/plug-in-0ea07ac7.png"
                      alt="/img/plug-in-0ea07ac7.png"
                      class="rounded-t-[10px] w-full"
                    />
                    <div class="p-8 pb-0">
                      <p
                        class="text-2xl font-medium leading-[32px] tracking-[0.82px] mb-2"
                      >
                        Simple Plug-in Technology Across Multiple Industries
                      </p>
                      <p class="leading-[24px] tracking-[0.82px] mb-6">
                        Grow with Industries, while they’re growing.
                      </p>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink
                  to="/form"
                  class="bg-gradient-to-b from-[#11314a] to-[#0c2539] border border-[#224765] rounded-[10px] flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <img
                      src="/img/ai-929dd654.png"
                      alt="/img/ai-929dd654.png"
                      class="rounded-t-[10px] w-full"
                    />
                    <div class="p-8 pb-0">
                      <p
                        class="text-2xl font-medium leading-[32px] tracking-[0.82px] mb-2"
                      >
                        AI-Multiplied Scalability &amp; Growth
                      </p>
                      <p class="leading-[24px] tracking-[0.82px] mb-6">
                        Go beyond what’s humanly possible, with AI.
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="bg-[url(&#39;@/../img/landing/join-bg.png&#39;)] bg-right bg-cover"
          >
            <div
              class="flex max-sm:flex-col items-center justify-between w-full max-w-[1240px] px-5 mx-auto py-8 gap-5"
            >
              <div class="max-sm:text-center">
                <p
                  class="gold-gradient-text text-2xl font-medium leading-[32px] tracking-[0.82px] mb-1"
                >
                  Join the Future
                </p>
                <p class="text-3xl font-medium tracking-[0.8px]">
                  Be Your DAO1.ai!
                </p>
              </div>
              <div class="flex gap-3 z-10 relative">
                <NuxtLink to="/form" class="plug-button text-sm tracking-[0.82px] px-3">
                  Access DAO1
                </NuxtLink>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div class="pt-16 pb-12 bg-gradient-to-b from-[#081b2a] to-[#123756]">
            <div class="w-full max-w-[1240px] px-5 mx-auto">
              <div
                class="pb-8 lg:pb-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-3.5 lg:justify-between border-b border-[#224765]"
              >
                <a href="https://dao1.ai/"
                  ><img
                    src="/img/footer-logo-faba978f.svg"
                    alt="Logo"
                    class="max-w-[190px]"
                /></a>
                <div
                  class="w-full lg:w-1/2 flex flex-row flex-wrap justify-between sm:justify-evenly gap-5 sm:gap-16"
                >
                  <div>
                    <p
                      class="gold-gradient-text text-2xl text-[#32a1a5] tracking-[0.82px] font-medium mb-4 leading-[32px]"
                    >
                      Site
                    </p>
                    <a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/#tech"
                      >Tech</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/#dao"
                      >DAO</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/#about"
                      >About</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/#features"
                      >Features</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/news"
                      >News</a
                    >
                  </div>
                  <div>
                    <p
                      class="gold-gradient-text text-2xl text-[#32a1a5] tracking-[0.82px] font-medium mb-4 leading-[32px]"
                    >
                      Support
                    </p>
                    <a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/web-conditions"
                      >Conditions</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/terms-of-services"
                      >Terms of Service</a
                    ><a
                      class="block leading-tight text-lg hover:opacity-50 transition duration-150 ease-in-out mb-3 last-of-type:mb-0"
                      href="https://dao1.ai/privacy-policy"
                      >Privacy Policy</a
                    >
                  </div>
                </div>
              </div>
              <p
                class="mt-8 block text-center text-[#76b0de] text-sm leading-[20px] tracking-[0.82px] font-light"
              >
                Copyright © 2026 DAO1.ai. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <div
      class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 lg:flex items-center"
      scroll-region=""
      style="display: none"
    >
      <div class="fixed inset-0 transform transition-all" style="display: none">
        <div class="absolute inset-0 opacity-60 bg-black"></div>
      </div>
      <div
        class="rounded-lg mb-6 border border-[#224765] overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto custom-gradient sm:max-w-sm"
        style="
          border-color: transparent;
          border-radius: 5px;
          text-align: center;
          background:
            linear-gradient(rgb(17, 49, 74), rgb(12, 37, 57)) padding-box
              padding-box,
            linear-gradient(
                to right,
                rgb(184, 142, 75),
                rgb(184, 142, 75),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(206, 162, 83),
                rgb(206, 162, 83)
              )
              border-box border-box !important;
          padding: 0px !important;
          display: none;
        "
      >
      </div>
    </div>
    <div
      class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 lg:flex items-center"
      scroll-region=""
      style="display: none"
    >
      <div class="fixed inset-0 transform transition-all" style="display: none">
        <div class="absolute inset-0 opacity-60 bg-black"></div>
      </div>
      <div
        class="rounded-lg mb-6 border border-[#224765] overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto custom-gradient sm:max-w-sm"
        style="
          border-color: transparent;
          border-radius: 5px;
          text-align: center;
          background:
            linear-gradient(rgb(17, 49, 74), rgb(12, 37, 57)) padding-box
              padding-box,
            linear-gradient(
                to right,
                rgb(184, 142, 75),
                rgb(184, 142, 75),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(206, 162, 83),
                rgb(206, 162, 83)
              )
              border-box border-box !important;
          padding: 0px !important;
          display: none;
        "
      >
        <!---->
      </div>
    </div>
    <div
      class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50 lg:flex items-center"
      scroll-region=""
      style="display: none"
    >
      <div class="fixed inset-0 transform transition-all" style="display: none">
        <div class="absolute inset-0 opacity-60 bg-black"></div>
      </div>
      <div
        class="rounded-lg mb-6 border border-[#224765] overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto custom-gradient sm:max-w-sm"
        style="
          border-color: transparent;
          border-radius: 5px;
          text-align: center;
          background:
            linear-gradient(rgb(17, 49, 74), rgb(12, 37, 57)) padding-box
              padding-box,
            linear-gradient(
                to right,
                rgb(184, 142, 75),
                rgb(184, 142, 75),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(211, 184, 121),
                rgb(206, 162, 83),
                rgb(206, 162, 83)
              )
              border-box border-box !important;
          padding: 0px !important;
          display: none;
        "
      >
        <!---->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home - DAO1',
  meta: [
    { name: 'description', content: 'Become part of DAO1.ai, your Number 1 platform, and grow your business over blockchain technology. Decentral. Independent. Transparent!' },
  ],
})
</script>