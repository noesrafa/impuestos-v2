import Svg, {
  Path,
  G,
  Rect,
  Circle,
  Defs,
  ClipPath,
  Stop,
  LinearGradient
} from 'react-native-svg';

const ElipseIcon = props => (
  <Svg
    width="43"
    height="33"
    viewBox="0 0 43 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M41.3372 5.25833C44.927 11.4761 38.9193 21.6654 27.9186 28.0167C16.9179 34.3679 5.08985 34.4761 1.5 28.2583C-2.08985 22.0405 3.91785 11.8513 14.9186 5.5C25.9193 -0.851274 37.7473 -0.959474 41.3372 5.25833Z"
      fill="#573AF1"
    />
  </Svg>
);

const GridIcon = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.18371 2.83866C6.30924 2.63353 5.39917 2.63353 4.5247 2.83866C3.68811 3.03489 3.03489 3.68811 2.83866 4.5247C2.63353 5.39917 2.63353 6.30924 2.83866 7.18371C3.03489 8.0203 3.68811 8.67352 4.5247 8.86975C5.39917 9.07488 6.30924 9.07488 7.18371 8.86975C8.0203 8.67352 8.67352 8.0203 8.86975 7.18371C9.07488 6.30924 9.07488 5.39917 8.86975 4.5247C8.67352 3.68811 8.0203 3.03489 7.18371 2.83866ZM4.12372 1.1292C5.26193 0.862208 6.44648 0.862208 7.58469 1.1292C9.07053 1.47773 10.2307 2.63788 10.5792 4.12372C10.8462 5.26193 10.8462 6.44648 10.5792 7.58469C10.2307 9.07053 9.07053 10.2307 7.58469 10.5792C6.44648 10.8462 5.26193 10.8462 4.12372 10.5792C2.63788 10.2307 1.47773 9.07053 1.1292 7.58469C0.862208 6.44648 0.862208 5.26193 1.1292 4.12372C1.47773 2.63788 2.63788 1.47773 4.12372 1.1292Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.18371 16.1303C6.30924 15.9252 5.39917 15.9252 4.5247 16.1303C3.68811 16.3265 3.03489 16.9797 2.83866 17.8163C2.63353 18.6908 2.63353 19.6009 2.83866 20.4753C3.03489 21.3119 3.68811 21.9651 4.5247 22.1614C5.39917 22.3665 6.30924 22.3665 7.18371 22.1614C8.0203 21.9651 8.67352 21.3119 8.86975 20.4753C9.07488 19.6009 9.07488 18.6908 8.86975 17.8163C8.67352 16.9797 8.0203 16.3265 7.18371 16.1303ZM4.12372 14.4208C5.26193 14.1538 6.44648 14.1538 7.58469 14.4208C9.07053 14.7694 10.2307 15.9295 10.5792 17.4153C10.8462 18.5536 10.8462 19.7381 10.5792 20.8763C10.2307 22.3622 9.07053 23.5223 7.58469 23.8708C6.44648 24.1378 5.26193 24.1378 4.12372 23.8708C2.63788 23.5223 1.47773 22.3622 1.1292 20.8763C0.862208 19.7381 0.862208 18.5536 1.1292 17.4153C1.47773 15.9295 2.63788 14.7694 4.12372 14.4208Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.4755 2.83866C19.601 2.63353 18.6909 2.63353 17.8165 2.83866C16.9799 3.03489 16.3266 3.68811 16.1304 4.5247C15.9253 5.39917 15.9253 6.30924 16.1304 7.18371C16.3266 8.0203 16.9799 8.67352 17.8165 8.86975C18.6909 9.07488 19.601 9.07488 20.4755 8.86975C21.312 8.67352 21.9653 8.0203 22.1615 7.18371C22.3666 6.30924 22.3666 5.39917 22.1615 4.5247C21.9653 3.68811 21.312 3.03489 20.4755 2.83866ZM17.4155 1.1292C18.5537 0.862208 19.7382 0.862208 20.8764 1.1292C22.3623 1.47773 23.5224 2.63788 23.871 4.12372C24.1379 5.26193 24.1379 6.44648 23.871 7.58469C23.5224 9.07053 22.3623 10.2307 20.8764 10.5792C19.7382 10.8462 18.5537 10.8462 17.4155 10.5792C15.9296 10.2307 14.7695 9.07053 14.4209 7.58469C14.154 6.44648 14.154 5.26193 14.4209 4.12372C14.7695 2.63788 15.9296 1.47773 17.4155 1.1292Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.4755 16.1303C19.601 15.9252 18.6909 15.9252 17.8165 16.1303C16.9799 16.3265 16.3266 16.9797 16.1304 17.8163C15.9253 18.6908 15.9253 19.6009 16.1304 20.4753C16.3266 21.3119 16.9799 21.9651 17.8165 22.1614C18.6909 22.3665 19.601 22.3665 20.4755 22.1614C21.312 21.9651 21.9653 21.3119 22.1615 20.4753C22.3666 19.6009 22.3666 18.6908 22.1615 17.8163C21.9653 16.9797 21.312 16.3265 20.4755 16.1303ZM17.4155 14.4208C18.5537 14.1538 19.7382 14.1538 20.8764 14.4208C22.3623 14.7694 23.5224 15.9295 23.871 17.4153C24.1379 18.5536 24.1379 19.7381 23.871 20.8763C23.5224 22.3622 22.3623 23.5223 20.8764 23.8708C19.7382 24.1378 18.5537 24.1378 17.4155 23.8708C15.9296 23.5223 14.7695 22.3622 14.4209 20.8763C14.154 19.7381 14.154 18.5536 14.4209 17.4153C14.7695 15.9295 15.9296 14.7694 17.4155 14.4208Z"
      fill="white"
    />
  </Svg>
);
const NotificationIcon = props => (
  <Svg
    width="21"
    height="25"
    viewBox="0 0 21 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 0.71875C11.0005 0.71875 11.4062 1.12449 11.4062 1.625V1.97242C12.0004 2.03241 12.5892 2.15656 13.1611 2.34542C15.8377 3.22942 17.8844 5.41426 18.6016 8.1476L19.3108 10.8508L19.8793 13.4253C19.9295 13.6528 19.9911 13.904 20.0558 14.1679C20.19 14.7153 20.3376 15.3173 20.425 15.8753C20.4538 16.0597 20.4688 16.2482 20.4688 16.4396C20.4688 18.1559 19.2651 19.6395 17.5834 19.9821L17.1392 20.0726C16.3984 20.2235 15.6538 20.3489 14.9066 20.4488C14.8995 20.4803 14.8921 20.5117 14.8844 20.543L14.7853 20.9458C14.3944 22.5355 13.1517 23.7756 11.5614 24.1561C10.8636 24.323 10.1364 24.323 9.43864 24.1561C7.8483 23.7756 6.60555 22.5355 6.21467 20.9458L6.11562 20.543C6.10791 20.5117 6.10051 20.4803 6.0934 20.4488C5.34623 20.3489 4.60159 20.2235 3.86078 20.0726L3.4166 19.9821C1.73494 19.6395 0.53125 18.1559 0.53125 16.4396C0.53125 16.2482 0.54615 16.0597 0.575011 15.8753C0.662354 15.3173 0.809964 14.7153 0.944178 14.168C1.00889 13.904 1.07049 13.6528 1.12072 13.4253L1.69 10.8472L2.40888 8.19404C3.15937 5.4242 5.27941 3.21679 7.99526 2.33643C8.51679 2.16738 9.05257 2.05088 9.59375 1.98735V1.625C9.59375 1.12449 9.99949 0.71875 10.5 0.71875ZM10.4489 3.74389C9.80834 3.75563 9.1687 3.86141 8.55416 4.06061C6.41646 4.75355 4.74743 6.49375 4.1583 8.66805L3.45063 11.2799L2.89059 13.8161C2.82016 14.1351 2.74736 14.4302 2.67745 14.7136C2.55533 15.2087 2.44205 15.6679 2.36571 16.1556C2.35131 16.2476 2.34375 16.3424 2.34375 16.4396C2.34375 17.3001 2.94663 18.0366 3.77841 18.2061L4.22259 18.2966C5.25829 18.5075 6.30189 18.6658 7.34944 18.7713C9.56533 18.9944 11.7989 18.9816 14.0128 18.7327C14.9387 18.6286 15.8611 18.4832 16.7774 18.2965L17.2216 18.2061C18.0534 18.0366 18.6562 17.3001 18.6562 16.4396C18.6562 16.3424 18.6487 16.2476 18.6343 16.1556C18.558 15.6679 18.4447 15.2087 18.3225 14.7136C18.2526 14.4302 18.1798 14.1351 18.1094 13.8161L17.5486 11.2763L16.8484 8.60757C16.2863 6.46527 14.6835 4.757 12.5927 4.06649C11.9383 3.85036 11.2535 3.74272 10.5681 3.74279C10.5456 3.74446 10.5229 3.74531 10.5 3.74531C10.4828 3.74531 10.4658 3.74483 10.4489 3.74389ZM12.9879 20.6488C11.3316 20.7731 9.66838 20.7731 8.01208 20.6488C8.27639 21.5171 8.97884 22.1824 9.86032 22.3933C10.2809 22.4939 10.7191 22.4939 11.1397 22.3933C12.0212 22.1824 12.7236 21.5171 12.9879 20.6488Z"
      fill="#444144"
    />
  </Svg>
);

const UserIcon = props => (
  <Svg
    width="19"
    height="25"
    viewBox="0 0 19 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.50011 2.53125C7.24428 2.53125 5.47233 4.28644 5.47233 6.38281C5.47233 8.47919 7.24428 10.2344 9.50011 10.2344C11.7559 10.2344 13.5279 8.47919 13.5279 6.38281C13.5279 4.28644 11.7559 2.53125 9.50011 2.53125ZM3.65983 6.38281C3.65983 3.22386 6.30596 0.71875 9.50011 0.71875C12.6943 0.71875 15.3404 3.22386 15.3404 6.38281C15.3404 9.54177 12.6943 12.0469 9.50011 12.0469C6.30596 12.0469 3.65983 9.54177 3.65983 6.38281ZM12.7217 16.0868C10.5874 15.7349 8.41274 15.7349 6.27845 16.0868L6.02739 16.1282L5.88677 15.2753L6.02738 16.1282C3.69865 16.5121 1.948 18.5994 1.948 21.093C1.948 21.8808 2.5588 22.4688 3.25074 22.4688H15.7494C16.4414 22.4688 17.0522 21.8808 17.0522 21.093C17.0522 18.5994 15.3015 16.5121 12.9728 16.1282L13.1202 15.234L12.9728 16.1282L12.7217 16.0868ZM13.0166 14.2985L12.8802 15.1258L13.0166 14.2985L13.2676 14.3399C16.5134 14.875 18.8647 17.7551 18.8647 21.093C18.8647 22.8258 17.4975 24.2812 15.7494 24.2812H3.25074C1.5027 24.2812 0.135498 22.8258 0.135498 21.093C0.135498 17.7551 2.48671 14.875 5.73254 14.3399L5.9836 14.2985L6.12422 15.1514L5.98361 14.2985C8.31314 13.9144 10.687 13.9144 13.0166 14.2985Z"
      fill="#444144"
    />
  </Svg>
);

const AboutIcon = props => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Circle cx="7" cy="7" r="7" fill="#403E44" />
    <Rect x="6" y="6" width="2" height="5" fill="#070607" />
    <Circle cx="7" cy="4" r="1" fill="#070607" />
  </Svg>
);

const AngleArrowIcon = ({size=8}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.68121 0.558742C7.9249 0.802429 7.9249 1.19752 7.68121 1.44121L1.44121 7.68121C1.19752 7.9249 0.802429 7.9249 0.558742 7.68121C0.315055 7.43752 0.315055 7.04243 0.558742 6.79874L6.79874 0.558742C7.04243 0.315055 7.43752 0.315055 7.68121 0.558742Z"
      fill="#8E8B8E"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.375977 0.999977C0.375977 0.655351 0.655351 0.375977 0.999977 0.375977H7.23998C7.5846 0.375977 7.86398 0.655351 7.86398 0.999977V7.23998C7.86398 7.5846 7.5846 7.86398 7.23998 7.86398C6.89535 7.86398 6.61598 7.5846 6.61598 7.23998V1.62398H0.999977C0.655351 1.62398 0.375977 1.3446 0.375977 0.999977Z"
      fill="#8E8B8E"
    />
  </Svg>
);

const BackIcon = props => (
  <Svg
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0607 0.93934C11.6464 1.52513 11.6464 2.47487 11.0607 3.06066L4.12132 10L11.0607 16.9393C11.6464 17.5251 11.6464 18.4749 11.0607 19.0607C10.4749 19.6464 9.52513 19.6464 8.93934 19.0607L0.93934 11.0607C0.353553 10.4749 0.353553 9.52513 0.93934 8.93934L8.93934 0.93934C9.52513 0.353553 10.4749 0.353553 11.0607 0.93934Z"
      fill="white"
    />
  </Svg>
);

const DownArrowIcon = props => (
  <Svg
    width="8"
    height="4"
    viewBox="0 0 8 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path d="M4.00001 4L0.535908 0.25L7.46411 0.25L4.00001 4Z" fill="#D9D9D9" />
  </Svg>
);

const DownloadIcon = props => (
  <Svg
    width="29"
    height="34"
    viewBox="0 0 29 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M26.6361 22.0255C25.9067 24.7478 24.2993 27.1534 22.0633 28.8692C19.8274 30.5849 17.0877 31.5149 14.2693 31.5149C11.451 31.5149 8.71132 30.5849 6.47535 28.8692C4.23937 27.1534 2.63201 24.7478 1.90256 22.0255L-2.24096e-05 22.5353C0.841652 25.6765 2.6963 28.4521 5.27627 30.4318C7.85624 32.4115 11.0174 33.4846 14.2693 33.4846C17.5213 33.4846 20.6824 32.4115 23.2624 30.4318C25.8424 28.4521 27.697 25.6765 28.5387 22.5353L26.6361 22.0255Z"
      fill="#4C56F7"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.80566 11.6024L5.03612 10.0643L13.2845 16.663L13.2845 0.984835C13.2845 0.440918 13.7255 -1.29178e-05 14.2694 -1.28941e-05C14.8133 -1.28703e-05 15.2542 0.440918 15.2542 0.984835L15.2542 16.663L23.5026 10.0643L24.7331 11.6024L14.2694 19.9733L3.80566 11.6024Z"
      fill="#4C56F7"
    />
  </Svg>
);

const DotMenuIcon = props => (
  <Svg
    width="22"
    height="5"
    viewBox="0 0 22 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4.07407 2.03704C4.07407 3.16206 3.16206 4.07407 2.03704 4.07407C0.912013 4.07407 0 3.16206 0 2.03704C0 0.912013 0.912013 0 2.03704 0C3.16206 0 4.07407 0.912013 4.07407 2.03704Z"
      fill="#3D3D3D"
    />
    <Path
      d="M13.0371 2.0371C13.0371 3.16212 12.1251 4.07414 11 4.07414C9.87503 4.07414 8.96301 3.16212 8.96301 2.0371C8.96301 0.912074 9.87503 6.10352e-05 11 6.10352e-05C12.1251 6.10352e-05 13.0371 0.912074 13.0371 2.0371Z"
      fill="#3D3D3D"
    />
    <Path
      d="M22 2.0371C22 3.16212 21.088 4.07414 19.9629 4.07414C18.8379 4.07414 17.9259 3.16212 17.9259 2.0371C17.9259 0.912074 18.8379 6.10352e-05 19.9629 6.10352e-05C21.088 6.10352e-05 22 0.912074 22 2.0371Z"
      fill="#3D3D3D"
    />
  </Svg>
);
const ShareIcon = props => (
  <Svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.645606 11.5454C0.753864 9.18765 2.16793 6.92295 4.83082 6.11413L23.5762 0.420539C28.4643 -1.06415 33.2712 3.74922 31.7788 8.63503L26.0634 27.3457C25.2506 30.0066 22.9842 31.417 20.6266 31.5221C18.2771 31.6269 15.7996 30.4449 14.4597 27.9526L10.8944 21.3205L4.20855 17.7172C1.71701 16.3744 0.537716 13.8951 0.645606 11.5454ZM12.6687 20.8196L16.0451 27.1003C17.0394 28.9498 18.8486 29.7996 20.5464 29.7239C22.2363 29.6486 23.7779 28.6663 24.3419 26.8198L30.0573 8.10919C31.1288 4.60129 27.6096 1.07665 24.0993 2.14285L5.35395 7.83644C3.50595 8.39774 2.5213 9.93821 2.44371 11.628C2.36576 13.3257 3.21348 15.1362 5.06252 16.1327L11.3965 19.5463L14.8164 16.1263C15.1679 15.7749 15.7378 15.7749 16.0892 16.1263C16.4407 16.4778 16.4407 17.0477 16.0892 17.3991L12.6687 20.8196Z"
      fill="#4C56F7"
    />
  </Svg>
);

const StarIcon = props => (
  <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M19.0489 1.66154C19.5176 -0.419117 22.4824 -0.419122 22.9511 1.66153L25.8698 14.6186C26.0396 15.372 26.628 15.9604 27.3814 16.1302L40.3385 19.0489C42.4191 19.5176 42.4191 22.4824 40.3385 22.9511L27.3814 25.8698C26.628 26.0396 26.0396 26.628 25.8698 27.3814L22.9511 40.3385C22.4824 42.4191 19.5176 42.4191 19.0489 40.3385L16.1302 27.3814C15.9604 26.628 15.372 26.0396 14.6186 25.8698L1.66154 22.9511C-0.419117 22.4824 -0.419122 19.5176 1.66153 19.0489L14.6186 16.1302C15.372 15.9604 15.9604 15.372 16.1302 14.6186L19.0489 1.66154Z" fill="#80F988"/>
</Svg>

);

// const UserIcon = props => (

// );

export {
  ElipseIcon,
  GridIcon,
  NotificationIcon,
  UserIcon,
  ShareIcon,
  DownArrowIcon,
  DownloadIcon,
  DotMenuIcon,
  BackIcon,
  AngleArrowIcon,
  AboutIcon,
  StarIcon
};
