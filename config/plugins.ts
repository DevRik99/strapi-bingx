export default () => ({
  // "excel": {
  //   enabled: true,
  //   config: {
  //     "api::trader.trader": {
  //       columns: ["nickname",
  //         "uid",
  //         "equity",
  //         "totalEarnings",
  //         "followerEarning",
  //         "totalTransactions",
  //         "avgProfitAmount",
  //         "avgProfitRate",
  //         "avgLossAmount",
  //         "avgLossRate",
  //         "pnlRate",
  //         "weeklyTradeFrequency",
  //         "riskLevel7Days",
  //         "riskLevel30Days",
  //         "riskLevel90Days",
  //         "riskLevel180Days",
  //         "strFollowerNum",
  //         "avgFollowerEarnings",
  //         "risks",
  //         "maxRiskInAllTime",
  //         "minRiskInAllTime",
  //         "averageRiskInAllTime",
  //         "isPnLRateAcceptable",
  //         "isProfitRateAcceptable",
  //         "isRiskAcceptable",
  //         "isTradeFrequencyAcceptable",
  //         "isTotalTransactionsAcceptable",
  //         "isMinDaysAcceptable",
  //         "isTotalEarningAcceptable",
  //         "isFollowersVariationAcceptable",
  //         "isAceptableRiskTrader",
  //         "averageRiskLevel",
  //         "maxLossDayValue",
  //         "maxLossWeekValue",
  //         "maxLossMonthValue",
  //         "isAcceptableLossAverage",
  //         "isGodResume",
  //         "BINGX_FEATURE",
  //         "BINGX_SWAP_FUTURES",
  //         "fansNum",
  //         "isActive",
  //         "latest30DaysEarningRatio",
  //         "maxProfit",
  //         "maxLoss",
  //         "maxProfitAVG",
  //         "maxLossAVG",
  //         "aceptableLossAVG",
  //         "minProfit",
  //         "minLoss",
  //         "formattedDate",
  //         "avatar",
  //         "recent7DaysRate",
  //         "recent30DaysRate",
  //         "recent90DaysRate",
  //         "recent180DaysRate",
  //         "winRate",
  //         "urlAnalized"

  //       ],

  //       locale: "false",
  //     },
  //   }
  // }
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::trader.trader",
        ],
      },
    },
  },
});
