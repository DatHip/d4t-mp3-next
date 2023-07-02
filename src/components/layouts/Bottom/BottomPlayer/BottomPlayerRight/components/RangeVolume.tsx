/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { queueActions } from "@/store/slice/queue";
import { selectMuted, selectVolume } from "@/store/slice/queue/selector";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const RangeVolume = () => {
  const volume = useSelector(selectVolume);
  const muted = useSelector(selectMuted);
  const dispatch = useDispatch();

  const handleVolumeChange = useCallback((e: any) => {
    return dispatch(queueActions.changeVolume(Number(e.target.value)));
  }, []);

  return (
    <input
      type="range"
      min={0}
      max={1}
      step="any"
      onChange={handleVolumeChange}
      value={muted ? 0 : volume}
    />
  );
};

export default RangeVolume;
