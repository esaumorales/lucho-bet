"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Bet = {
  id: string
  event: string
  selection: string
  odds: number
  stake?: number
}

type BettingContextType = {
  bets: Bet[]
  addBet: (bet: Bet) => void
  removeBet: (id: string) => void
  updateStake: (id: string, stake: number) => void
  clearBets: () => void
  totalStake: number
  potentialWinnings: number
  isBetSlipOpen: boolean
  toggleBetSlip: () => void
}

const BettingContext = createContext<BettingContextType | undefined>(undefined)

export function BettingProvider({ children }: { children: React.ReactNode }) {
  const [bets, setBets] = useState<Bet[]>([])
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(false)
  const [totalStake, setTotalStake] = useState(0)
  const [potentialWinnings, setPotentialWinnings] = useState(0)

  useEffect(() => {
    // Calculate total stake and potential winnings
    let total = 0
    let winnings = 1

    bets.forEach((bet) => {
      if (bet.stake) {
        total += bet.stake
        winnings *= bet.odds
      }
    })

    setTotalStake(total)
    setPotentialWinnings(total * winnings)
  }, [bets])

  const addBet = (bet: Bet) => {
    // Check if bet already exists
    const existingBet = bets.find((b) => b.id === bet.id)

    if (existingBet) {
      // If it exists, remove it (toggle behavior)
      removeBet(bet.id)
    } else {
      // Otherwise add it
      setBets([...bets, { ...bet, stake: 10 }]) // Default stake of 10
      setIsBetSlipOpen(true) // Open bet slip when adding a bet
    }
  }

  const removeBet = (id: string) => {
    setBets(bets.filter((bet) => bet.id !== id))
  }

  const updateStake = (id: string, stake: number) => {
    setBets(bets.map((bet) => (bet.id === id ? { ...bet, stake } : bet)))
  }

  const clearBets = () => {
    setBets([])
  }

  const toggleBetSlip = () => {
    setIsBetSlipOpen(!isBetSlipOpen)
  }

  return (
    <BettingContext.Provider
      value={{
        bets,
        addBet,
        removeBet,
        updateStake,
        clearBets,
        totalStake,
        potentialWinnings,
        isBetSlipOpen,
        toggleBetSlip,
      }}
    >
      {children}
    </BettingContext.Provider>
  )
}

export function useBetting() {
  const context = useContext(BettingContext)
  if (context === undefined) {
    throw new Error("useBetting must be used within a BettingProvider")
  }
  return context
}
