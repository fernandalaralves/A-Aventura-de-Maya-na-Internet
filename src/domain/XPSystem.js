// src/domain/XPSystem.js

/**
 * XPSystem — Regras de XP e níveis.
 * Camada pura de domínio: sem DOM, sem UI, testável isoladamente.
 */

/**
 * Valores de recompensa por tipo de ação.
 * Centralizados aqui para facilitar ajuste de balanceamento.
 */
export const XP_REWARDS = Object.freeze({
  MISSION_COMPLETE: 100,
  PERFECT_ANSWER: 50,
  FIRST_TRY_BONUS: 25,
  FINAL_MISSION: 200,
});

/**
 * XP necessário para passar do nível atual para o próximo.
 * Progressão linear: 100, 150, 200, 250...
 *
 * @param {number} level - Nível atual (começa em 1)
 * @returns {number} XP necessário para subir
 */
export function xpForNextLevel(level) {
  return 100 + (level - 1) * 50;
}

/**
 * Converte XP total em informações de nível.
 *
 * @param {number} totalXP - XP acumulado do jogador
 * @returns {{
 *   level: number,
 *   currentXP: number,
 *   nextLevelXP: number,
 *   progress: number
 * }}
 */
export function calculateLevel(totalXP) {
  let level = 1;
  let remaining = Math.max(0, totalXP);

  while (remaining >= xpForNextLevel(level)) {
    remaining -= xpForNextLevel(level);
    level++;
  }

  const nextLevelXP = xpForNextLevel(level);
  const progress = nextLevelXP > 0 ? remaining / nextLevelXP : 0;

  return {
    level,
    currentXP: remaining,
    nextLevelXP,
    progress,
  };
}