export default function toFormUrlEncoded(object) {
   
    return Object.entries(object)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }