import { CircleIcon } from "@/shared/assets/icons";
import { useTheme } from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button theme="ghost" onClick={toggleTheme}>
      <AppIcon Icon={CircleIcon} filled />
    </Button>
  );
};
