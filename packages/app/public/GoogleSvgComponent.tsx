import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'

const GoogleSvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    style={{ marginRight: 10 }}
    {...props}
  >
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        fill="#4285F4"
        d="M24.02 12.273c0-.851-.076-1.67-.218-2.455H12.5v4.642h6.458a5.52 5.52 0 0 1-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82Z"
      />
      <Path
        fill="#34A853"
        d="M12.5 24c3.24 0 5.956-1.075 7.942-2.907l-3.878-3.011c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.11-6.715-4.947H1.776v3.109a11.995 11.995 0 0 0 10.724 6.61Z"
      />
      <Path
        fill="#FBBC05"
        d="M5.785 14.28A7.213 7.213 0 0 1 5.41 12c0-.791.136-1.56.376-2.28V6.61H1.776A11.995 11.995 0 0 0 .5 12c0 1.936.464 3.769 1.276 5.389l4.01-3.11Z"
      />
      <Path
        fill="#EA4335"
        d="M12.5 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C18.451 1.19 15.735 0 12.5 0 7.81 0 3.75 2.69 1.776 6.61l4.01 3.11c.943-2.836 3.589-4.947 6.714-4.947Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} x={0.5} fill="#fff" rx={6} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default GoogleSvgComponent
