const lotion = require('lotion')
const pillars = require('pillar-lib')

class Pillar {
  constructor() {
    this.app = lotion({
      initialState: {
          wallets: {
              'ting': {
                  balance: 100,
                  bonds: 0
              },
              'wai': {
                  balance: 100,
                  bonds: 0
              },
              'badActor': {
                  balance: 100,
                  bonds: 0
              }
          },
          bondQueue: [],
          bondFactor: 0.9,
          airdropFactor: 1.1,
          supply: 20,
          votePrices: {},
          stakedAmount: {},
          lastVoteWindow: Math.floor(Date.now() / 1000),
          finalPrice: 0
      },

      // logTendermint: true,
      createEmptyBlocks: true,
      devMode: false
    })

    this.app.use(pillars())
  }

  async init () {
    return await this.app.start()
  }

}

async function main () {
  const pillar = new Pillar()

  const cgi = await pillar.init()

  console.log(cgi)
}

main()
