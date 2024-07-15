## Descripción de los Valores Booleanos en isAceptableStats

1. **isPnLRateAcceptable**: Indica si la tasa de ganancia (PnL Rate) del trader es aceptable según los criterios establecidos.
2. **isProfitRateAcceptable**: Indica si la tasa promedio de ganancias es mayor o igual que la tasa promedio de pérdidas.
3. **isRiskAcceptable**: Indica si el nivel promedio de riesgo en todos los periodos es aceptable según el umbral máximo de riesgo permitido.
4. **isTradeFrequencyAcceptable**: Indica si la frecuencia semanal de operaciones del trader está dentro del rango aceptable.
5. **isTotalTransactionsAcceptable**: Indica si el número total de transacciones del trader es mayor o igual que el número mínimo requerido de transacciones.
6. **isMinDaysAcceptable**: Indica si el número de días de trading del trader es mayor o igual que el número mínimo requerido de días de trading.
7. **isTotalEarningAcceptable**: Indica si las ganancias totales del trader son positivas.
8. **isFollowersVariationAcceptable**: Indica si la variación en el número de seguidores del trader es aceptable según un criterio ponderado.
9. **isWinRateAceptable**: Indica si la tasa de éxito (win rate) del trader es mayor o igual que la tasa mínima requerida de éxito.

## Para la función isAceptableRiskTrader:

- `isAceptable`: Indica si el trader tiene un riesgo aceptable.
- `isLastWeekRiskPercentageAcceptable`: Indica si las pérdidas de la última semana son aceptables según el porcentaje máximo de pérdida permitido.
