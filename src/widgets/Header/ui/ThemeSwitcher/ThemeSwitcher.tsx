import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";
import { CircleIcon } from "@/shared/assets/icons";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button theme="ghost" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};
