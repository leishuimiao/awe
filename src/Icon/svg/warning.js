import React from 'react'

export function Warning ({ size, color }) {
  return (
    <svg className="icon" width={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M973.312 788.48L609.28 131.584c-23.552-43.008-58.88-67.072-96.768-67.072s-72.704 24.576-96.768 67.584L52.736 788.48c-23.552 42.496-26.112 86.016-6.656 119.296S104.448 960 152.576 960h720.896c48.128 0 87.04-18.944 106.496-52.224 19.456-33.28 16.896-76.288-6.656-119.296zM513.024 269.824c18.944 0 34.304 15.36 34.304 34.304V614.4a34.304 34.304 0 0 1-68.608 0V304.128c0-18.432 15.36-34.304 34.304-34.304zm0 547.84c-29.696 0-53.248-24.064-53.248-53.76s24.064-53.76 53.248-53.76c29.696 0 53.248 24.064 53.248 53.76s-24.064 53.76-53.248 53.76z" />
    </svg>
  )
}

export function WarningO ({ size, color }) {
  return (
    <svg className="icon" width={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M873.439 960.4H152.591c-48.34 0-87.174-19.097-106.568-52.405-19.399-33.308-17.039-76.816 6.499-119.331L416.23 131.772C439.905 88.947 475.11 64.4 512.775 64.4c37.67 0 72.84 24.517 96.581 67.304l364.09 657.027c23.532 42.516 25.966 85.992 6.531 119.296-19.363 33.307-58.229 52.373-106.538 52.373zM512.812 133.356c-11.976 0-25.693 11.964-36.813 31.998L112.291 822.313c-11.396 20.618-14.063 39.138-7.256 50.821 6.813 11.654 24.155 18.347 47.557 18.347H873.44c23.439 0 40.75-6.656 47.558-18.347 6.771-11.653 4.14-30.166-7.287-50.785L549.626 165.354c-11.088-20.034-24.875-31.998-36.814-31.998zm.205 515.978c-18.883 0-34.21-15.414-34.21-34.479v-310.31c0-19.033 15.327-34.48 34.21-34.48 18.886 0 34.213 15.447 34.213 34.48v310.309c-.001 19.066-15.328 34.48-34.213 34.48zm-.246 168.537c29.441 0 53.309-24.096 53.309-53.819s-23.867-53.819-53.309-53.819-53.308 24.096-53.308 53.819 23.867 53.819 53.308 53.819z" />
    </svg>
  )
}