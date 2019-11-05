const { errors: rpcErrors } = require('eth-json-rpc-errors')
const BitGo = require('bitgo')

const DOMAIN = 2

wallet.registerRpcMessageHandler(async (_originString, requestObject) => {
  switch (requestObject.method) {

    // retrieve our bitgo account here
    case 'getAccount':
      return getPubKey()

    // tx data event - will probably need to override this with bitgo signing
    case 'txData':
      

    // sign with our bitgo messsage
    case 'signMessage':
      const bitgoKey = await getBitgoKey()
      const data = requestObject.params[0]
      const approved = await promptUser(`Do you want BitGo to sign ${data} with ${pubKey}?`)

      if (!approved) {
        throw rpcErrors.eth.unauthorized()
      }

      // bitgoSigning mechanism
      
      return signature

    default:
      throw rpcErrors.methodNotFound(requestObject)
  }
})

async function getBitgoKey() {
  // prompt user for credentials here? or generate an access token?? 
}

async function getPubKey () {
  const PRIV_KEY = await wallet.getAppKey()
  return bls.getPublicKey(PRIV_KEY)
}

async function promptUser (message) {
  const response = await wallet.send({ method: 'confirm', params: [message] })
  return response.result
}

