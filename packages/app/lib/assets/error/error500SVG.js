import {SvgXml} from 'react-native-svg'

const Error500SVG = () => {
    const svgXml = `<svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M93.255 58.6015C92.5816 62.2336 91.4441 65.8174 89.7709 69.2778C78.1812 93.2377 49.314 93.9834 47.2327 93.9995C45.4168 94.0156 16.1058 93.7903 4.31709 70.0342C2.45008 66.2626 1.23092 62.3355 0.577975 58.344C-2.85507 37.2918 9.48962 14.6088 24.7777 5.72978C34.0668 0.337993 44.4986 0.0214598 46.993 0C47.7123 0 48.4264 0.0107298 49.1406 0.0375546C49.4313 0.0482845 49.7578 0.0643796 50.0996 0.0912044C50.2067 0.0965694 50.324 0.101934 50.4311 0.112664C54.9558 0.429197 62.9697 1.60412 70.2694 5.9873C85.3789 15.0434 97.1267 37.6191 93.255 58.6015Z" fill="#FD9D26"/>
<mask id="mask0_6449_1713" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="94" height="81">
<path d="M93.2499 57.598C84.0934 71.577 66.8108 81 46.993 81C27.0629 81 9.68856 71.461 0.577975 57.3449C-2.85507 36.6533 9.48962 14.3586 24.7776 5.63167C34.0668 0.332205 44.4985 0.0210924 46.993 0C47.7122 0 48.4264 0.010546 49.1406 0.0369115C49.4313 0.0474577 49.7578 0.0632772 50.0996 0.0896427C50.2067 0.0949157 50.324 0.100189 50.4311 0.110735C54.9558 0.421848 62.9697 1.57666 70.2694 5.88477C85.3738 14.7858 97.1216 36.9749 93.2499 57.598Z" fill="white"/>
</mask>
<g mask="url(#mask0_6449_1713)">
<rect x="-0.114746" y="-5.91028" width="94.1461" height="136.932" fill="url(#pattern0)"/>
</g>
<path d="M28.5981 33.9993C31.1386 33.9993 33.1981 30.6414 33.1981 26.4993C33.1981 22.3571 31.1386 18.9993 28.5981 18.9993C26.0575 18.9993 23.998 22.3571 23.998 26.4993C23.998 30.6414 26.0575 33.9993 28.5981 33.9993Z" fill="#561E15"/>
<path d="M64.7958 33.9993C67.3363 33.9993 69.3958 30.6414 69.3958 26.4993C69.3958 22.3571 67.3363 18.9993 64.7958 18.9993C62.2553 18.9993 60.1958 22.3571 60.1958 26.4993C60.1958 30.6414 62.2553 33.9993 64.7958 33.9993Z" fill="#561E15"/>
<path d="M37.4053 57.9994C37.4053 57.9994 39.2053 49.0994 49.2053 49.0994C59.2053 49.0994 61.2053 57.9994 61.2053 57.9994" stroke="#542A27" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62.0994 6.30691C61.9664 8.15905 52.8899 9.06802 47.134 9.07291C41.2707 9.08268 32.138 8.16394 32.005 6.30691C31.8771 4.56228 39.6795 1.98687 47.134 2.00153C54.5016 2.02107 62.2222 4.57205 62.0994 6.30691Z" fill="#FDEA51"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_6449_1713" transform="scale(0.00129702 0.000919118)"/>
</pattern>
<image id="image0_6449_1713" width="771" height="1088" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`
  return <SvgXml xml={svgXml} />
}

export default Error500SVG