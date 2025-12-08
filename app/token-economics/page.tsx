"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip
} from 'recharts';
import { 
  TrendingUp, 
  Coins, 
  Zap, 
  Download,
  ExternalLink,
  DollarSign,
  Wallet,
  Copy,
  Check,
  Verified,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { motion } from "motion/react";

const ContractCopyButton = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silent fail
    }
  };

  return (
    <Button
      onClick={copyToClipboard}
      variant="ghost"
      size="icon"
      className="h-10 w-10 rounded-lg hover:bg-[#8B1DB8]/10 dark:hover:bg-[#477DE9]/10 hover:text-[#8B1DB8] dark:hover:text-[#477DE9] transition-all"
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

export default function TokenEconomicsPage() {
  const t = useTranslations('token_economics');

  const distributionData = [
    {
      name: t('distribution.swap_to_earn.title'),
      value: 40,
      amount: t('distribution.swap_to_earn.amount'),
      color: '#8B1DB8'
    },
    {
      name: t('distribution.presale.title'),
      value: 20,
      amount: t('distribution.presale.amount'),
      color: '#10b981'
    },
    {
      name: t('distribution.team.title'),
      value: 15,
      amount: t('distribution.team.amount'),
      color: '#9333ea'
    },
    {
      name: t('distribution.advisors.title'),
      value: 10,
      amount: t('distribution.advisors.amount'),
      color: '#3b82f6'
    },
    {
      name: t('distribution.strategic.title'),
      value: 13,
      amount: t('distribution.strategic.amount'),
      color: '#f97316'
    },
    {
      name: t('distribution.airdrop.title'),
      value: 2,
      amount: t('distribution.airdrop.amount'),
      color: '#ec4899'
    }
  ];

  const phasesData = [
    {
      phase: 'Phase 1',
      reward: 3,
      total: t('swap_to_earn.phases.phase_1.total'),
      color: '#8B1DB8'
    },
    {
      phase: 'Phase 2',
      reward: 2,
      total: t('swap_to_earn.phases.phase_2.total'),
      color: '#10b981'
    },
    {
      phase: 'Phase 3',
      reward: 1,
      total: t('swap_to_earn.phases.phase_3.total'),
      color: '#3b82f6'
    }
  ];

  const buybackData = [
    {
      year: '2027',
      rate: 22.5,
      label: '20-25%',
      color: '#8B1DB8'
    },
    {
      year: '2028',
      rate: 12.5,
      label: '10-15%',
      color: '#10b981'
    },
    {
      year: '2029',
      rate: 3,
      label: '1-5%',
      color: '#3b82f6'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
          {label && <p className="font-bold text-sm mb-2 text-gray-500 dark:text-gray-400">{label}</p>}
          <p className="font-bold text-lg mb-1">{payload[0].name || payload[0].payload?.name}</p>
          <p className="text-[#8B1DB8] dark:text-[#477DE9] font-semibold text-base">
            {payload[0].value}% {payload[0].payload?.amount && `- ${payload[0].payload.amount}`}
          </p>
        </div>
      );
    }
    return null;
  };

  const BarCustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-2xl">
          <p className="font-bold text-sm mb-2 text-gray-500 dark:text-gray-400">{label}</p>
          <p className="font-bold text-lg mb-1">{payload[0].payload?.phase || payload[0].payload?.year}</p>
          <p className="text-[#8B1DB8] dark:text-[#477DE9] font-semibold">
            {payload[0].name === 'reward' ? `${payload[0].value} YWT / $100` : `${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.03) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-bold drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <main className="min-h-screen">
      <AuroraBackground className="min-h-[50vh] flex items-center justify-center">
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
        <section className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Coins, label: t('overview.total_supply'), value: '100M', sub: 'YWT', gradient: 'from-[#8B1DB8] to-[#477DE9]' },
            { icon: Zap, label: t('overview.blockchain'), value: 'Solana', sub: 'SOL Network', gradient: 'from-green-400 to-green-600' },
            { icon: TrendingUp, label: t('overview.symbol'), value: 'YWT', sub: 'Token Symbol', gradient: 'from-blue-400 to-blue-600' },
            { icon: DollarSign, label: t('overview.tge_price'), value: '$0.10', sub: 'USD per YWT', gradient: 'from-orange-400 to-orange-600' }
          ].map((item, index) => {
            const Icon = item.icon;
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
          })}
        </section>

        <section className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-black rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
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
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 flex items-center justify-between">
                <p className="text-sm font-mono text-gray-900 dark:text-white break-all">
                  42LDhfZxd5CMwpqMo6vsqtFbxJiJ4ZuiySzdDeu1WmAs
                </p>
                <ContractCopyButton address="42LDhfZxd5CMwpqMo6vsqtFbxJiJ4ZuiySzdDeu1WmAs" />
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Button 
                  asChild 
                  variant="outline"
                  className="border-[#8B1DB8] dark:border-[#477DE9] text-[#8B1DB8] dark:text-[#477DE9] hover:bg-[#8B1DB8] dark:hover:bg-[#477DE9] hover:text-white"
                >
                  <Link 
                    href="https://explorer.solana.com/address/42LDhfZxd5CMwpqMo6vsqtFbxJiJ4ZuiySzdDeu1WmAs" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('overview.contract_link')}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="w-full max-w-[1200px]">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B1DB8] to-[#477DE9] bg-clip-text text-transparent">
              {t('distribution.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('distribution.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-black rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="w-full h-[450px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      {distributionData.map((entry, index) => (
                        <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                          <stop offset="100%" stopColor={entry.color} stopOpacity={0.7} />
                        </linearGradient>
                      ))}
                    </defs>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomLabel}
                      outerRadius={140}
                      innerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                      stroke="white"
                      strokeWidth={3}
                      className="dark:stroke-gray-900"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`url(#gradient-${index})`}
                          style={{ 
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <text 
                      x="50%" 
                      y="45%" 
                      textAnchor="middle" 
                      className="text-3xl font-bold fill-[#8B1DB8] dark:fill-[#477DE9]"
                    >
                      100M
                    </text>
                    <text 
                      x="50%" 
                      y="55%" 
                      textAnchor="middle" 
                      className="text-sm fill-gray-600 dark:fill-gray-400"
                    >
                      Total Supply
                    </text>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-[#8B1DB8] dark:hover:border-[#477DE9] transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.amount}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-[#8B1DB8] dark:text-[#477DE9]">
                      {item.value}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="w-full max-w-[1200px]">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('swap_to_earn.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('swap_to_earn.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-black rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-8 shadow-xl"
          >
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={phasesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    {phasesData.map((entry, index) => (
                      <linearGradient key={`barGradient-${index}`} id={`barGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                        <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" opacity={0.3} />
                  <XAxis 
                    dataKey="phase" 
                    stroke="#6b7280"
                    className="dark:stroke-gray-400"
                    tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    className="dark:stroke-gray-400"
                    tick={{ fill: '#6b7280', fontSize: 14 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    label={{ value: 'YWT / $100', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                  />
                  <Tooltip content={<BarCustomTooltip />} />
                  <Bar 
                    dataKey="reward" 
                    radius={[12, 12, 0, 0]}
                    animationDuration={1500}
                    animationBegin={0}
                  >
                    {phasesData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={`url(#barGradient-${index})`}
                        style={{ 
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {phasesData.map((phase, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: phase.color }}
                    />
                    <span className="font-semibold">{phase.phase}</span>
                  </div>
                  <p className="text-2xl font-bold text-[#8B1DB8] dark:text-[#477DE9] mb-1">
                    {phase.reward} YWT / $100
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{phase.total}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-full max-w-[1200px]">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('buyback.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('buyback.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-black rounded-3xl border-2 border-gray-200 dark:border-gray-800 p-8 shadow-xl"
          >
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buybackData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    {buybackData.map((entry, index) => (
                      <linearGradient key={`buybackGradient-${index}`} id={`buybackGradient-${index}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                        <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-800" opacity={0.3} />
                  <XAxis 
                    type="number"
                    stroke="#6b7280"
                    className="dark:stroke-gray-400"
                    tick={{ fill: '#6b7280', fontSize: 14 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    label={{ value: 'Buyback Rate (%)', position: 'insideBottom', offset: -5, fill: '#6b7280' }}
                  />
                  <YAxis 
                    dataKey="year" 
                    type="category"
                    stroke="#6b7280"
                    className="dark:stroke-gray-400"
                    tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    width={60}
                  />
                  <Tooltip content={<BarCustomTooltip />} />
                  <Bar 
                    dataKey="rate" 
                    radius={[0, 12, 12, 0]}
                    animationDuration={1500}
                    animationBegin={0}
                  >
                    {buybackData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={`url(#buybackGradient-${index})`}
                        style={{ 
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {buybackData.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
                >
                  <p className="text-3xl font-bold mb-2">{item.year}</p>
                  <p className="text-2xl font-bold text-[#8B1DB8] dark:text-[#477DE9] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t(`buyback.rates.year_${item.year}.of_revenue`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl text-center bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] text-white relative overflow-hidden mb-8"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6 border-2 border-white/30">
                <BookOpen className="w-10 h-10 text-white" />
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
              <div className="w-full" style={{ height: '100vh', minHeight: '600px' }}>
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
      </div>
    </main>
  );
}
