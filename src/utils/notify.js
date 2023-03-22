import { ElNotification } from 'element-plus'
import i18n from "@/lang";

export const errCode = {
  NO_STAKING_FACTORY: 101,
  ASSET_ID_ERROR: 102,
  WRONG_ETH_ADDRESS: 103,
  NOT_A_TOKEN_CONTRACT: 104,
  TRANSACTION_FAIL: 105,
  ASSET_EXIST: 106,
  TOKEN_DEPLOYING: 107,
  INSUFIENT_BALANCE: 108,
  LARGE_IMG: 109,
  OUT_OF_USAGE: 110,
  UPLOAD_FAIL: 111,

  BLOCK_CHAIN_ERR: 351,
  CONTRACT_CREATE_FAIL: 352,
  USER_CANCEL_SIGNING: 353,
  NOT_CONNECT_METAMASK: 354,
  UNLOCK_METAMASK: 355,
  WRONG_CHAIN_ID: 356,
  HAVE_CREATED_COMMUNITY: 357,

  SIGNATURE_FAILED: 451,
  INVALID_NONCE: 452,
  DB_ERROR: 453,
  SERVER_ERR: 500,

  TWEET_NOT_FOUND: 701
};

export const notify = (options) => {
  return ElNotification({
    title: 'Wormhole3',
    duration: options.duration || 5000,
    customClass: `c-notification c-notification-${options.type || 'info'}`,
    ...options
  })
}

export const showError = (code) => {
  let message ='';
  if (code === 500 || code === 501) {
    message = i18n.global.t('err.serverErr')
  }else if (code === errCode.TRANSACTION_FAIL) {
    message = i18n.global.t('err.transErr')
  }
  return ElNotification({
    title: 'Wormhole3',
    duration: 5000,
    customClass: `c-notification c-notification-error`,
    message
  })
}
