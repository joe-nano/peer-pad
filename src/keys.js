'use strict'

const crypto = require('libp2p-crypto')

exports.from = (_publicKey, _privateKey, callback) => {
  console.log('creating keys from', _publicKey.length, _privateKey && _privateKey.length)
  const publicKey = crypto.unmarshalPublicKey(_publicKey)
  if (!_privateKey) {
    return callback(null, {
      'public': publicKey
    })
  }

  crypto.unmarshalPrivateKey(_privateKey, (err, privateKey) => {
    if (err) { return callback(err) }
    callback(null, {
      'public': publicKey,
      'private': privateKey
    })
  })
}
