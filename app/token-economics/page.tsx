"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardContainer, CardBody, CardItem } from '@/components/ui/card-3d';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { CardStack } from '@/components/ui/card-stack';
import { 
  TrendingUp, 
  Coins, 
  Users, 
  Zap, 
  Shield, 
  Download,
  ExternalLink,
  PieChart,
  DollarSign,
  Clock,
  BarChart3,
  Target,
  Lock,
  Award,
  Globe,
  Wallet,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Percent,
  Sparkles,
  Copy,
  Check,
  QrCode,
  Verified,
  BookOpen
} from 'lucide-react';
import { motion } from "motion/react";

// Contract Copy Button Component
const ContractCopyButton = ({ address }: { address: string }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Button
      onClick={copyToClipboard}
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-lg hover:bg-[#8B1DB8]/10 dark:hover:bg-[#477DE9]/10 hover:text-[#8B1DB8] dark:hover:text-[#477DE9] transition-all shrink-0"
      title={copied ? "Kopyalandı!" : "Kopyala"}
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <Copy className="w-5 h-5" />
      )}
    </Button>
  );
};

// Simple QR Code Component using online API
const QRCodeDisplay = ({ address }: { address: string }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(address)}`;
  
  return (
    <div className="relative">
      <img 
        src={qrUrl} 
        alt="Contract Address QR Code" 
        className="w-32 h-32 rounded-lg border-2 border-gray-300 dark:border-gray-700 group-hover:border-[#8B1DB8] dark:group-hover:border-[#477DE9] transition-all"
      />
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-black shadow-lg">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
  );
};

export default function TokenEconomicsPage() {
  const t = useTranslations('token_economics');

  // Gift icon component - defined before use
  const Gift = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );

  const distributionData = [
    {
      label: t('distribution.swap_to_earn.title'),
      value: 40,
      amount: t('distribution.swap_to_earn.amount'),
      description: t('distribution.swap_to_earn.description'),
      period: t('distribution.swap_to_earn.period'),
      color: 'from-[#8B1DB8] to-[#477DE9]',
      icon: Zap
    },
    {
      label: t('distribution.presale.title'),
      value: 20,
      amount: t('distribution.presale.amount'),
      description: t('distribution.presale.description'),
      vesting: t('distribution.presale.vesting'),
      color: 'from-green-400 to-green-600',
      icon: TrendingUp
    },
    {
      label: t('distribution.team.title'),
      value: 15,
      amount: t('distribution.team.amount'),
      description: t('distribution.team.description'),
      vesting: t('distribution.team.vesting'),
      color: 'from-purple-400 to-purple-600',
      icon: Users
    },
    {
      label: t('distribution.advisors.title'),
      value: 10,
      amount: t('distribution.advisors.amount'),
      description: t('distribution.advisors.description'),
      vesting: t('distribution.advisors.vesting'),
      color: 'from-blue-400 to-blue-600',
      icon: Award
    },
    {
      label: t('distribution.strategic.title'),
      value: 13,
      amount: t('distribution.strategic.amount'),
      description: t('distribution.strategic.description'),
      vesting: t('distribution.strategic.vesting'),
      color: 'from-orange-400 to-orange-600',
      icon: Globe
    },
    {
      label: t('distribution.airdrop.title'),
      value: 2,
      amount: t('distribution.airdrop.amount'),
      description: t('distribution.airdrop.description'),
      color: 'from-pink-400 to-pink-600',
      icon: Gift
    }
  ];

  const phases = [
    {
      phase: '1',
      title: t('swap_to_earn.phases.phase_1.title'),
      total: t('swap_to_earn.phases.phase_1.total'),
      reward: t('swap_to_earn.phases.phase_1.reward_per_100'),
      tge: t('swap_to_earn.phases.phase_1.tge'),
      duration: t('swap_to_earn.phases.phase_1.duration'),
      description: t('swap_to_earn.phases.phase_1.description'),
      color: 'from-[#8B1DB8] to-[#477DE9]',
      rewardRate: '3 YWT / $100'
    },
    {
      phase: '2',
      title: t('swap_to_earn.phases.phase_2.title'),
      total: t('swap_to_earn.phases.phase_2.total'),
      reward: t('swap_to_earn.phases.phase_2.reward_per_100'),
      tge: t('swap_to_earn.phases.phase_2.tge'),
      duration: t('swap_to_earn.phases.phase_2.duration'),
      description: t('swap_to_earn.phases.phase_2.description'),
      color: 'from-green-400 to-green-600',
      rewardRate: '2 YWT / $100'
    },
    {
      phase: '3',
      title: t('swap_to_earn.phases.phase_3.title'),
      total: t('swap_to_earn.phases.phase_3.total'),
      reward: t('swap_to_earn.phases.phase_3.reward_per_100'),
      tge: t('swap_to_earn.phases.phase_3.tge'),
      duration: t('swap_to_earn.phases.phase_3.duration'),
      description: t('swap_to_earn.phases.phase_3.description'),
      color: 'from-blue-400 to-blue-600',
      rewardRate: '1 YWT / $100'
    }
  ];

  // CardStack için phase cards
  const phaseCards = phases.map((phase, index) => ({
    id: index + 1,
    name: phase.title,
    designation: phase.duration,
    content: (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-70">{t('swap_to_earn.labels.total')}</span>
          <span className="font-bold text-lg">{phase.total}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-70">{t('swap_to_earn.labels.per_100')}</span>
          <span className="font-bold text-lg">{phase.rewardRate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-70">{t('swap_to_earn.labels.tge')}</span>
          <span className="font-bold text-lg">{phase.tge}</span>
        </div>
        <p className="text-sm opacity-80 mt-4">{phase.description}</p>
      </div>
    )
  }));

  const buybackRates = [
    {
      year: '2027',
      rate: t('buyback.rates.year_2027.rate'),
      maxLimit: t('buyback.rates.year_2027.max_limit'),
      description: t('buyback.rates.year_2027.description'),
      color: 'from-[#8B1DB8] to-[#477DE9]',
      rateValue: '20-25%'
    },
    {
      year: '2028',
      rate: t('buyback.rates.year_2028.rate'),
      maxLimit: t('buyback.rates.year_2028.max_limit'),
      description: t('buyback.rates.year_2028.description'),
      color: 'from-green-400 to-green-600',
      rateValue: '10-15%'
    },
    {
      year: '2029',
      rate: t('buyback.rates.year_2029.rate'),
      maxLimit: t('buyback.rates.year_2029.max_limit'),
      description: t('buyback.rates.year_2029.description'),
      color: 'from-blue-400 to-blue-600',
      rateValue: '1-5%'
    }
  ];

  const buybackBenefits = [
    {
      icon: TrendingUp,
      title: t('buyback.benefits.revenue_reflection.title'),
      description: t('buyback.benefits.revenue_reflection.description'),
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Shield,
      title: t('buyback.benefits.market_stability.title'),
      description: t('buyback.benefits.market_stability.description'),
      color: 'from-green-500 to-green-700'
    },
    {
      icon: BarChart3,
      title: t('buyback.benefits.supply_control.title'),
      description: t('buyback.benefits.supply_control.description'),
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Target,
      title: t('buyback.benefits.long_term_value.title'),
      description: t('buyback.benefits.long_term_value.description'),
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: t('use_cases.governance.title'),
      description: t('use_cases.governance.description'),
      color: 'from-purple-500 to-purple-700',
      details: t('use_cases.governance.details')
    },
    {
      icon: Percent,
      title: t('use_cases.fee_discounts.title'),
      description: t('use_cases.fee_discounts.description'),
      color: 'from-green-500 to-green-700',
      details: t('use_cases.fee_discounts.details')
    },
    {
      icon: TrendingUp,
      title: t('use_cases.staking.title'),
      description: t('use_cases.staking.description'),
      color: 'from-blue-500 to-blue-700',
      details: t('use_cases.staking.details')
    },
    {
      icon: CreditCard,
      title: t('use_cases.cashback.title'),
      description: t('use_cases.cashback.description'),
      color: 'from-orange-500 to-orange-700',
      details: t('use_cases.cashback.details')
    },
    {
      icon: Award,
      title: t('use_cases.vip_tiers.title'),
      description: t('use_cases.vip_tiers.description'),
      color: 'from-pink-500 to-pink-700',
      details: t('use_cases.vip_tiers.details')
    }
  ];

  const economicBalance = [
    {
      icon: BarChart3,
      title: t('economic_balance.decreasing_rewards.title'),
      description: t('economic_balance.decreasing_rewards.description'),
      color: 'from-[#8B1DB8] to-[#477DE9]',
      details: t('economic_balance.decreasing_rewards.details')
    },
    {
      icon: Shield,
      title: t('economic_balance.buyback_lp.title'),
      description: t('economic_balance.buyback_lp.description'),
      color: 'from-orange-400 to-orange-600',
      details: t('economic_balance.buyback_lp.details')
    },
    {
      icon: Lock,
      title: t('economic_balance.vesting.title'),
      description: t('economic_balance.vesting.description'),
      color: 'from-blue-400 to-blue-600',
      details: t('economic_balance.vesting.details')
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="min-h-[60vh] flex items-center justify-center">
        <section className="w-full max-w-[1200px] text-center py-16 px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] mb-6 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <TextGenerateEffect 
              words={t('hero.title')}
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>
        </section>
      </AuroraBackground>

      <div className="md:px-10 px-5 mx-auto mb-6 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 -mt-20 relative z-20">
        {/* Overview Cards - Different styles for each */}
        <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Coins, label: t('overview.total_supply'), value: '100M', sub: 'YWT', gradient: 'from-[#8B1DB8] to-[#477DE9]', style: '3d' },
            { icon: Zap, label: t('overview.blockchain'), value: 'Solana', sub: 'SOL Network', gradient: 'from-green-400 to-green-600', style: 'gradient' },
            { icon: TrendingUp, label: t('overview.symbol'), value: 'YWT', sub: 'Token Symbol', gradient: 'from-blue-400 to-blue-600', style: 'border' },
            { icon: DollarSign, label: t('overview.tge_price'), value: '$0.10', sub: 'USD per YWT', gradient: 'from-orange-400 to-orange-600', style: 'glass' }
          ].map((item, index) => {
            const Icon = item.icon;
            
            // Different card styles
            if (item.style === '3d') {
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardContainer containerClassName="py-0" className="w-full h-full">
                    <CardBody className="w-full h-full">
                      <CardItem translateZ="50" className="w-full h-full">
                        <div className={`p-6 rounded-3xl bg-gradient-to-br ${item.gradient} text-white border border-white/20 backdrop-blur-sm h-full shadow-xl`}>
                          <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-sm opacity-90 mb-2">{item.label}</h3>
                          <p className="text-3xl font-bold mb-1">{item.value}</p>
                          <p className="text-sm opacity-80">{item.sub}</p>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              );
            } else if (item.style === 'gradient') {
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-6 rounded-3xl bg-gradient-to-br ${item.gradient} text-white h-full shadow-xl hover:shadow-2xl transition-all hover:scale-105`}>
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sm opacity-90 mb-2">{item.label}</h3>
                    <p className="text-3xl font-bold mb-1">{item.value}</p>
                    <p className="text-sm opacity-80">{item.sub}</p>
                  </div>
                </motion.div>
              );
            } else if (item.style === 'border') {
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-6 rounded-3xl border-2 bg-white dark:bg-black border-gray-300 dark:border-gray-700 h-full hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all hover:shadow-xl`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.label}</h3>
                    <p className="text-3xl font-bold mb-1">{item.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.sub}</p>
                  </div>
                </motion.div>
              );
            } else {
              // Glass morphism style
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 h-full shadow-lg hover:shadow-xl transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{item.label}</h3>
                    <p className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">{item.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.sub}</p>
                  </div>
                </motion.div>
              );
            }
          })}
        </section>

        {/* Contract Address - Professional Design */}
        <section className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900 border-2 border-gray-200 dark:border-gray-800 p-8 shadow-2xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8B1DB8]/10 to-[#477DE9]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] flex items-center justify-center shadow-lg">
                      <Wallet className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {t('overview.contract_address')}
                        </h3>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700">
                          <Verified className="w-3 h-3 text-green-600 dark:text-green-400" />
                          <span className="text-xs font-semibold text-green-700 dark:text-green-400">{t('overview.verified')}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('overview.network')}</p>
                    </div>
                  </div>
                </div>

                {/* Contract Address Display */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* Address Box */}
                  <div className="lg:col-span-2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8B1DB8]/20 to-[#477DE9]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">{t('overview.contract_address')}</p>
                          <p className="text-sm font-mono text-gray-900 dark:text-white break-all select-all">
                            DyTY5YnvZHvcxeUcwXkaDg13GVqLUCbycDf1Udkfv
                          </p>
                        </div>
                        <ContractCopyButton address="DyTY5YnvZHvcxeUcwXkaDg13GVqLUCbycDf1Udkfv" />
                      </div>
                    </div>
                  </div>

                  {/* QR Code & Actions */}
                  <div className="space-y-4">
                    {/* QR Code */}
                    <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center h-full min-h-[200px] hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all group">
                      <QRCodeDisplay address="DyTY5YnvZHvcxeUcwXkaDg13GVqLUCbycDf1Udkfv" />
                      <div className="mt-3 text-center">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('overview.qr_code')}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{t('overview.scan_to_add')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button 
                    asChild 
                    variant="outline"
                    className="border-[#8B1DB8] dark:border-[#477DE9] text-[#8B1DB8] dark:text-[#477DE9] hover:bg-[#8B1DB8] dark:hover:bg-[#477DE9] hover:text-white"
                  >
                    <Link 
                      href="https://explorer.solana.com/address/DyTY5YnvZHvcxeUcwXkaDg13GVqLUCbycDf1Udkfv" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('overview.contract_link')}
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{t('overview.audited')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Token Distribution - Enhanced with staggered animations */}
        <section className="w-full max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B1DB8] to-[#477DE9] bg-clip-text text-transparent">
              {t('distribution.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {t('distribution.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {distributionData.map((item, index) => {
              const Icon = item.icon;
              const cardStyles = ['gradient-full', 'bordered', 'glass', 'spotlight', 'elevated', 'minimal'];
              const style = cardStyles[index % cardStyles.length];
              
              if (style === 'gradient-full') {
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`p-6 rounded-3xl bg-gradient-to-br ${item.color} text-white relative overflow-hidden h-full shadow-xl hover:shadow-2xl transition-all`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold">{item.label}</h3>
                            <span className="text-xs px-2 py-1 rounded-full bg-white/20 font-semibold">
                              {item.value}%
                            </span>
                          </div>
                        </div>
                        <p className="text-2xl font-bold mb-2">{item.amount}</p>
                        <p className="text-sm opacity-90 mb-2">{item.description}</p>
                        {(item.vesting || item.period) && (
                          <div className="flex items-center gap-2 mt-2 text-xs opacity-80">
                            <Clock className="w-4 h-4" />
                            <span>{item.vesting || item.period}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              } else if (style === 'bordered') {
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`p-6 rounded-3xl border-3 bg-white dark:bg-black border-transparent bg-clip-padding h-full hover:shadow-xl transition-all relative`} style={{
                      background: `linear-gradient(white, white) padding-box, linear-gradient(to right, ${item.color.includes('purple') ? '#8B1DB8' : item.color.includes('green') ? '#10b981' : item.color.includes('blue') ? '#3b82f6' : item.color.includes('orange') ? '#f97316' : '#ec4899'}, ${item.color.includes('purple') ? '#477DE9' : item.color.includes('green') ? '#059669' : item.color.includes('blue') ? '#2563eb' : item.color.includes('orange') ? '#ea580c' : '#db2777'}) border-box`
                    }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.label}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold`}>
                            {item.value}%
                          </span>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2 text-[#8B1DB8] dark:text-[#477DE9]">
                        {item.amount}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                      {(item.vesting || item.period) && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{item.vesting || item.period}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              } else if (style === 'glass') {
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-2xl border border-white/30 dark:border-gray-700/50 h-full shadow-lg hover:shadow-xl transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.label}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold`}>
                            {item.value}%
                          </span>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2 text-[#8B1DB8] dark:text-[#477DE9]">
                        {item.amount}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                      {(item.vesting || item.period) && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{item.vesting || item.period}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              } else if (style === 'spotlight') {
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-3xl bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 h-full hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all hover:shadow-xl relative overflow-hidden group">
                      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity -z-0`} />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold">{item.label}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold`}>
                              {item.value}%
                            </span>
                          </div>
                        </div>
                        <p className="text-2xl font-bold mb-2 text-[#8B1DB8] dark:text-[#477DE9]">
                          {item.amount}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {item.description}
                        </p>
                        {(item.vesting || item.period) && (
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{item.vesting || item.period}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              } else if (style === 'elevated') {
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-3xl bg-white dark:bg-black h-full shadow-2xl border border-gray-100 dark:border-gray-900 hover:shadow-3xl transition-all hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.label}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold`}>
                            {item.value}%
                          </span>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2 text-[#8B1DB8] dark:text-[#477DE9]">
                        {item.amount}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                      {(item.vesting || item.period) && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{item.vesting || item.period}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              } else {
                // Minimal style
                return (
                  <motion.div
                    key={`distribution-${item.label}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.label}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold`}>
                            {item.value}%
                          </span>
                        </div>
                      </div>
                      <p className="text-2xl font-bold mb-2 text-[#8B1DB8] dark:text-[#477DE9]">
                        {item.amount}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {item.description}
                      </p>
                      {(item.vesting || item.period) && (
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{item.vesting || item.period}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>

          {/* Distribution Chart - Enhanced */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6">
              <PieChart className="w-8 h-8 text-[#8B1DB8] dark:text-[#477DE9] mr-3" />
              <h3 className="text-2xl font-bold">{t('distribution.summary')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {distributionData.map((item, index) => (
                <motion.div 
                  key={`distribution-visual-${item.label}`} 
                  className="bg-white dark:bg-black rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold">{item.label}</span>
                        <span className="text-sm font-bold text-[#8B1DB8] dark:text-[#477DE9]">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div 
                          className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Swap-to-Earn Section - Enhanced with CardStack */}
        <section className="w-full max-w-[1200px] bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('swap_to_earn.title')}</h2>
              <p className="text-xl mb-2 opacity-90">{t('swap_to_earn.subtitle')}</p>
              <p className="text-gray-200 max-w-3xl mx-auto">
                {t('swap_to_earn.description')}
              </p>
            </motion.div>

            {/* Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: DollarSign, label: t('swap_to_earn.parameters.min_transaction'), value: t('swap_to_earn.parameters.min_transaction_value') },
                { icon: Percent, label: t('swap_to_earn.parameters.transaction_fee'), value: t('swap_to_earn.parameters.transaction_fee_value') },
                { icon: Coins, label: t('swap_to_earn.parameters.reward_pool'), value: t('swap_to_earn.parameters.reward_pool_value') }
              ].map((param, index) => {
                const Icon = param.icon;
                return (
                  <motion.div
                    key={param.label}
                    className="p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm opacity-90">{param.label}</h3>
                    </div>
                    <p className="text-3xl font-bold">{param.value}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Phases with CardStack */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">{t('swap_to_earn.phases.phase_structure_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={`phase-${phase.phase}`}
                      className={`p-6 rounded-3xl bg-gradient-to-br ${phase.color} border border-white/20 text-white relative overflow-hidden`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{phase.title}</h3>
                          <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold border-2 border-white/30">
                            {phase.phase}
                          </span>
                        </div>
                        <div className="space-y-2 mb-4 bg-white/10 rounded-xl p-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">{t('swap_to_earn.labels.total')}</span>
                            <span className="font-bold">{phase.total}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">{t('swap_to_earn.labels.per_100')}</span>
                            <span className="font-bold">{phase.rewardRate}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">{t('swap_to_earn.labels.tge')}</span>
                            <span className="font-bold">{phase.tge}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">{t('swap_to_earn.labels.duration')}</span>
                            <span className="font-bold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-sm text-white/80">{phase.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buyback Mechanism - Enhanced */}
        <section className="w-full max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('buyback.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{t('buyback.subtitle')}</p>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              {t('buyback.description')}
            </p>
          </motion.div>

        {/* Buyback Benefits - Different styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {buybackBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const styles = ['gradient-box', 'outlined', 'shadow', 'flat'];
            const style = styles[index % styles.length];
            
            if (style === 'gradient-box') {
              return (
                <motion.div
                  key={`buyback-benefit-${benefit.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-6 rounded-3xl bg-gradient-to-br ${benefit.color} text-white h-full shadow-xl hover:shadow-2xl transition-all`}>
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm opacity-90">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            } else if (style === 'outlined') {
              return (
                <motion.div
                  key={`buyback-benefit-${benefit.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl border-2 bg-white dark:bg-black border-gray-200 dark:border-gray-800 h-full hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            } else if (style === 'shadow') {
              return (
                <motion.div
                  key={`buyback-benefit-${benefit.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl bg-white dark:bg-black h-full shadow-2xl border border-gray-100 dark:border-gray-900 hover:shadow-3xl transition-all hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={`buyback-benefit-${benefit.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            }
          })}
        </div>

          {/* Buyback Rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {buybackRates.map((rate, index) => (
              <motion.div
                key={`buyback-rate-${rate.year}`}
                className={`p-8 rounded-3xl bg-gradient-to-br ${rate.color} text-white relative overflow-hidden hover:scale-105 transition-transform`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="relative z-10 text-center">
                  <h3 className="text-5xl font-bold mb-3">{rate.year}</h3>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4 border-2 border-white/30">
                    <span className="text-2xl font-bold">{rate.rateValue}</span>
                  </div>
                  <p className="text-lg mb-2 opacity-90">{t(`buyback.rates.year_${rate.year}.of_revenue`)}</p>
                  <p className="text-2xl font-bold mb-4">{rate.rate}</p>
                  <div className="bg-white/10 rounded-xl p-4 mt-4">
                    <p className="text-sm opacity-90 mb-2">{t(`buyback.rates.year_${rate.year}.max_limit_label`)}</p>
                    <p className="text-xl font-bold">{rate.maxLimit}</p>
                  </div>
                  <p className="text-sm opacity-80 mt-4">{rate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Economic Balance - Different styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {economicBalance.map((item, index) => {
            const Icon = item.icon;
            const styles = ['glass', 'bordered', 'gradient'];
            const style = styles[index % styles.length];
            
            if (style === 'glass') {
              return (
                <motion.div
                  key={`economic-balance-${item.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/50 h-full shadow-lg hover:shadow-xl transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{item.details}</span>
                    </div>
                  </div>
                </motion.div>
              );
            } else if (style === 'bordered') {
              return (
                <motion.div
                  key={`economic-balance-${item.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-3xl border-3 bg-white dark:bg-black border-transparent bg-clip-padding h-full hover:shadow-xl transition-all relative" style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(to right, ${item.color.includes('purple') ? '#8B1DB8' : item.color.includes('green') ? '#10b981' : item.color.includes('orange') ? '#fb923c' : '#3b82f6'}, ${item.color.includes('purple') ? '#477DE9' : item.color.includes('green') ? '#059669' : item.color.includes('orange') ? '#ea580c' : '#2563eb'}) border-box`
                  }}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{item.details}</span>
                    </div>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={`economic-balance-${item.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`p-6 rounded-3xl bg-gradient-to-br ${item.color} text-white h-full shadow-xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs opacity-80 border-t border-white/20 pt-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{item.details}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          })}
        </div>
        </section>

        {/* Use Cases - Enhanced */}
        <section className="w-full max-w-[1200px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('use_cases.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{t('use_cases.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const styles = ['hover-border', 'elevated', 'gradient-accent', 'minimal', 'glass-card'];
              const style = styles[index % styles.length];
              
              if (style === 'hover-border') {
                return (
                  <motion.div
                    key={`use-case-${useCase.title}`}
                    className="group p-6 rounded-3xl bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all hover:shadow-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>{useCase.details}</span>
                    </div>
                  </motion.div>
                );
              } else if (style === 'elevated') {
                return (
                  <motion.div
                    key={`use-case-${useCase.title}`}
                    className="group p-6 rounded-3xl bg-white dark:bg-black h-full shadow-2xl border border-gray-100 dark:border-gray-900 hover:shadow-3xl transition-all hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>{useCase.details}</span>
                    </div>
                  </motion.div>
                );
              } else if (style === 'gradient-accent') {
                return (
                  <motion.div
                    key={`use-case-${useCase.title}`}
                    className="group p-6 rounded-3xl bg-white dark:bg-black border-l-4 border-transparent hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>{useCase.details}</span>
                    </div>
                  </motion.div>
                );
              } else if (style === 'minimal') {
                return (
                  <motion.div
                    key={`use-case-${useCase.title}`}
                    className="group p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>{useCase.details}</span>
                    </div>
                  </motion.div>
                );
              } else {
                return (
                  <motion.div
                    key={`use-case-${useCase.title}`}
                    className="group p-6 rounded-3xl bg-white/50 dark:bg-black/50 backdrop-blur-2xl border border-white/30 dark:border-gray-700/50 h-full hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>{useCase.details}</span>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </section>

        {/* Whitepaper Download - Enhanced */}
        <section className="w-full max-w-[1200px]">
          <motion.div
            className="p-8 md:p-12 rounded-3xl text-center bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] text-white relative overflow-hidden mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6 border-2 border-white/30">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whitepaper.title')}</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {t('whitepaper.description')}
              </p>
              <Button 
                asChild 
                variant="outline"
                className="bg-white text-[#8B1DB8] hover:bg-gray-100 border-white text-lg px-8 py-6 rounded-full"
              >
                <Link href="/YWT Whitepaper.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  {t('whitepaper.button')}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-white dark:bg-black rounded-3xl border-2 border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#8B1DB8] to-[#477DE9] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{t('whitepaper.viewer_title')}</h3>
                </div>
                <Button 
                  asChild 
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <Link href="/YWT Whitepaper.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    {t('whitepaper.download_pdf')}
                  </Link>
                </Button>
              </div>
              <div className="w-full" style={{ height: '80vh', minHeight: '600px' }}>
                <iframe
                  src="/YWT Whitepaper.pdf#view=FitH"
                  className="w-full h-full border-0"
                  title="YWT Whitepaper"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="w-full max-w-[1200px] mb-12">
          <motion.div
            className="text-center bg-white dark:bg-black rounded-3xl p-8 md:p-12 border-2 border-[#8B1DB8] dark:border-[#477DE9] relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1DB8]/5 to-[#477DE9]/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] mb-6">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <Button 
                asChild 
                className="bg-[#8B1DB8] dark:bg-[#477DE9] hover:bg-[#477DE9] dark:hover:bg-[#8B1DB8] text-white px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform"
              >
                <Link href="/download">
                  {t('cta.button')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
