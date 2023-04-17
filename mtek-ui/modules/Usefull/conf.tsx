import CigaIcon from "./components/CigaIcon";
import CubeIcon from "./components/CubeIcon";
import DockerIcon from "./components/DockerIcon";
import TetrisIcon from "./components/TetrisIcon";
import ToiletIcon from "./components/ToiletIcon";
import WheelIcon from "./components/WheelIcon";

export const usefulls: { formula: string; icon: JSX.Element }[] = [
  { formula: "V=a*b*c", icon: <CubeIcon /> },
  { formula: "V=a*b*c", icon: <ToiletIcon /> },
  { formula: "V=e*d*f", icon: <WheelIcon /> },
  { formula: 'V=b*b*c"', icon: <CigaIcon /> },
  { formula: 'V=a*b*c"', icon: <DockerIcon /> },
  { formula: 'V=a*b*c"', icon: <TetrisIcon /> },
];
