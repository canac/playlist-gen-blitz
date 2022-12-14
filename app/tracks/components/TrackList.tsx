import { Box } from "@mantine/core";
import TrackItem from "./TrackItem";
import { Album, Artist, Label, Track } from "db";

export type TrackListProps = {
  tracks: (Track & {
    album: Album;
    artists: Artist[];
    labels: Label[];
  })[];

  // All available dumb labels
  labels: Label[];

  // The id of the active quick apply label
  quickLabel: number | null;
};

export default function TrackList(props: TrackListProps): JSX.Element {
  return (
    <Box>
      {props.tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          labels={props.labels}
          quickLabelId={props.quickLabel}
        />
      ))}
    </Box>
  );
}
