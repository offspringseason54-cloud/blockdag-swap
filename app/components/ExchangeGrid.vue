<template>
  <section class="py-16 px-6 bg-blue-50">
    <div class="max-w-6xl mx-auto">

      <h2 class="text-4xl font-bold text-gray-900 mb-3">Check out some examples</h2>
      <p class="text-gray-500 text-sm mb-8">{{ filteredExchanges.length }} exchanges available</p>

      <!-- Search -->
      <div class="relative max-w-md mb-10">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          v-model="search"
          type="text"
          placeholder="Search exchanges..."
          class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition"
        />
        <button
          v-if="search"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          @click="search = ''"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- No results -->
      <div v-if="filteredExchanges.length === 0" class="text-center py-20 text-gray-400">
        <svg class="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <p class="text-lg font-medium">No exchanges found for "{{ search }}"</p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div
          v-for="exchange in filteredExchanges"
          :key="exchange.name"
          class="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <!-- Logo / Initial -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
              :class="logoColor(exchange.name)"
            >
              {{ exchange.name.charAt(0) }}
            </div>
            <div class="min-w-0">
              <div class="text-gray-900 font-semibold text-sm leading-tight truncate">{{ exchange.name }}</div>
              <div class="flex items-center gap-1 mt-1 flex-wrap">
                <span class="bg-blue-100 text-blue-600 text-[10px] font-semibold px-1.5 py-0.5 rounded">API</span>
                <span class="bg-purple-100 text-purple-600 text-[10px] font-semibold px-1.5 py-0.5 rounded">Secret</span>
                <span v-if="exchange.passphrase" class="bg-amber-100 text-amber-600 text-[10px] font-semibold px-1.5 py-0.5 rounded">Passphrase</span>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <button
            class="mt-auto w-full border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white text-xs font-bold tracking-wider uppercase py-2 rounded-lg transition-colors duration-150"
            @click="openModal(exchange)"
          >
            Connect
          </button>
        </div>
      </div>
    </div>

    <!-- ─── MODAL ─── -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeExchange"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal" />

          <!-- Panel -->
          <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 overflow-hidden">

            <!-- Header -->
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div
                  class="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-base shrink-0"
                  :class="logoColor(activeExchange.name)"
                >
                  {{ activeExchange.name.charAt(0) }}
                </div>
                <div>
                  <div class="text-white font-bold text-base leading-tight">{{ activeExchange.name }}</div>
                  <div class="text-gray-400 text-xs mt-0.5">Enter your API credentials</div>
                </div>
              </div>
              <button class="text-gray-400 hover:text-white transition" @click="closeModal">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="px-6 py-6 space-y-4">

              <!-- Credential badges -->
              <div class="flex gap-2 flex-wrap mb-2">
                <span class="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full">API Key</span>
                <span class="bg-purple-100 text-purple-600 text-xs font-semibold px-2.5 py-1 rounded-full">Secret Key</span>
                <span v-if="activeExchange.passphrase" class="bg-amber-100 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">Passphrase</span>
              </div>

              <!-- API Key -->
              <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  API Key
                </label>
                <div class="relative">
                  <input
                    v-model="form.apiKey"
                    :type="show.apiKey ? 'text' : 'password'"
                    placeholder="Paste your API key here..."
                    class="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                  <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" @click="show.apiKey = !show.apiKey">
                    <svg v-if="!show.apiKey" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20"/></svg>
                  </button>
                </div>
              </div>

              <!-- Secret Key -->
              <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Secret Key
                </label>
                <div class="relative">
                  <textarea
                    v-model="form.secret"
                    rows="3"
                    placeholder="Paste your secret key here..."
                    class="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none font-mono"
                  />
                </div>
              </div>

              <!-- Passphrase (conditional) -->
              <div v-if="activeExchange.passphrase">
                <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Passphrase
                </label>
                <div class="relative">
                  <input
                    v-model="form.passphrase"
                    :type="show.passphrase ? 'text' : 'password'"
                    placeholder="Enter your passphrase..."
                    class="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                  <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" @click="show.passphrase = !show.passphrase">
                    <svg v-if="!show.passphrase" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20"/></svg>
                  </button>
                </div>
              </div>

              <!-- Info note -->
              <p class="text-[11px] text-gray-400 flex items-start gap-1.5 bg-gray-50 rounded-lg px-3 py-2.5">
                <svg class="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                Your credentials are encrypted and never stored in plain text.
              </p>
            </div>

            <!-- Footer -->
            <div class="px-6 pb-6 flex items-center gap-3">
              <button
                class="flex-1 bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm py-3 rounded-xl transition"
                :disabled="!isFormValid"
                @click="handleConnect"
              >
                Connect to {{ activeExchange.name }}
              </button>
              <button
                class="px-4 py-3 border border-gray-200 text-gray-500 hover:text-gray-700 text-sm font-medium rounded-xl transition"
                @click="closeModal"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup lang="ts">
interface Exchange {
  name: string
  passphrase: boolean
}

const exchanges: Exchange[] = [
  { name: 'Binance', passphrase: false },
  { name: 'Binance US', passphrase: false },
  { name: 'Bybit', passphrase: false },
  { name: 'OKX', passphrase: true },
  { name: 'Kraken', passphrase: false },
  { name: 'KuCoin', passphrase: true },
  { name: 'KuCoin Futures', passphrase: true },
  { name: 'Gate.io', passphrase: false },
  { name: 'MEXC', passphrase: false },
  { name: 'HTX / Huobi', passphrase: false },
  { name: 'Bitget', passphrase: true },
  { name: 'BingX', passphrase: false },
  { name: 'Bitfinex', passphrase: false },
  { name: 'Phemex', passphrase: true },
  { name: 'Crypto.com', passphrase: true },
  { name: 'OKCoin', passphrase: true },
  { name: 'Coinbase Advanced Trade', passphrase: false },
  { name: 'LBank', passphrase: false },
  { name: 'BitMart', passphrase: false },
  { name: 'WhiteBIT', passphrase: false },
  { name: 'Bitrue', passphrase: false },
  { name: 'CoinEx', passphrase: false },
  { name: 'ProBit', passphrase: false },
  { name: 'DigiFinex', passphrase: false },
  { name: 'BigONE', passphrase: false },
  { name: 'AscendEX', passphrase: true },
  { name: 'WOO X', passphrase: false },
  { name: 'Gemini', passphrase: false },
  { name: 'Bitstamp', passphrase: false },
  { name: 'BitFlyer', passphrase: false },
  { name: 'Coincheck', passphrase: false },
  { name: 'BitBank', passphrase: false },
  { name: 'Bithumb', passphrase: false },
  { name: 'Upbit', passphrase: false },
  { name: 'Independent Reserve', passphrase: false },
  { name: 'BTC Markets', passphrase: false },
  { name: 'Bitvavo', passphrase: false },
  { name: 'Zonda', passphrase: false },
  { name: 'Exmo', passphrase: false },
  { name: 'Deribit', passphrase: false },
  { name: 'BitMEX', passphrase: false },
  { name: 'Pionex', passphrase: false },
  { name: 'XT.com', passphrase: false },
  { name: 'Coinstore', passphrase: false },
  { name: 'Deepcoin', passphrase: false },
  { name: 'Toobit', passphrase: false },
  { name: 'BTC Alpha', passphrase: false },
  { name: 'Bit2C', passphrase: false },
  { name: 'BTCTurk', passphrase: false },
  { name: 'NDAX', passphrase: false },
  { name: 'Novadax', passphrase: false },
  { name: 'Mercado Bitcoin', passphrase: false },
  { name: 'Coinmate', passphrase: false },
  { name: 'Hyperliquid', passphrase: false },
]

// Logo background color cycling
const colors = [
  'bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-emerald-500',
  'bg-rose-500', 'bg-amber-500', 'bg-teal-500', 'bg-cyan-500',
  'bg-orange-500', 'bg-pink-500', 'bg-lime-600', 'bg-sky-500',
]
const logoColor = (name: string) => colors[name.charCodeAt(0) % colors.length]

// Search
const search = ref('')
const filteredExchanges = computed(() =>
  exchanges.filter(e => e.name.toLowerCase().includes(search.value.toLowerCase()))
)

// Modal state
const activeExchange = ref<Exchange | null>(null)
const form = ref({ apiKey: '', secret: '', passphrase: '' })
const show = ref({ apiKey: false, passphrase: false })

const isFormValid = computed(() => {
  if (!activeExchange.value) return false
  const base = form.value.apiKey.trim() && form.value.secret.trim()
  if (activeExchange.value.passphrase) return base && form.value.passphrase.trim()
  return !!base
})

const openModal = (exchange: Exchange) => {
  activeExchange.value = exchange
  form.value = { apiKey: '', secret: '', passphrase: '' }
  show.value = { apiKey: false, passphrase: false }
}

const closeModal = () => {
  activeExchange.value = null
}

const handleConnect = () => {
  if (!isFormValid.value) return
  // Emit or handle credentials
  emit('connect', {
    exchange: activeExchange.value?.name,
    apiKey: form.value.apiKey,
    secret: form.value.secret,
    passphrase: form.value.passphrase || undefined,
  })
  closeModal()
}

const emit = defineEmits<{
  connect: [payload: { exchange?: string; apiKey: string; secret: string; passphrase?: string }]
}>()

// Close on Escape key
onMounted(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-enter-from .relative {
  transform: scale(0.95) translateY(8px);
}
.modal-leave-to .relative {
  transform: scale(0.95) translateY(8px);
}
</style>