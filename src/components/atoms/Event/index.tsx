import { useAppTheme } from "../../../system/helpers/hooks";
import { getEventStyles } from "./styles";
import { EventProps } from "./types";

const Event: React.FC<EventProps> = ({ time, comment }) => {
  const theme = useAppTheme();
  const styles = getEventStyles(theme);

  return (
    <div css={styles.wrapper}>
      <span css={styles.text}>{`${time} ${comment}`}</span>
    </div>
  );
};

export default Event;
