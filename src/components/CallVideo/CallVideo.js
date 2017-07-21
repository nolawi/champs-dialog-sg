/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { CallVideo as CallVideoType } from '@dlghq/dialog-types';
import React, { PureComponent } from 'react';
import CallVideoStream from './CallVideoStream';
import styles from './CallVideo.css';

export type Props = {
  ownVideos?: CallVideoType[],
  theirVideos: CallVideoType[]
};

class CallVideo extends PureComponent {
  props: Props;

  renderTheirVideos() {
    const { theirVideos } = this.props;

    return theirVideos.map(({ stream, isMirrored }) => {
      return (
        <CallVideoStream
          // $FlowFixMe: stream.id exists
          key={stream.id}
          className={styles.video}
          stream={stream}
          isMirrored={isMirrored}
        />
      );
    });
  }

  renderOwnVideos() {
    const { ownVideos } = this.props;

    if (!ownVideos) {
      return null;
    }

    const videos = ownVideos.map(({ stream, isMirrored }) => {
      return (
        <CallVideoStream
          // $FlowFixMe: stream.id exists
          key={stream.id}
          className={styles.ownVideo}
          stream={stream}
          isMirrored={isMirrored}
        />
      );
    });

    return (
      <div className={styles.ownVideos}>
        {videos}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          {this.renderTheirVideos()}
        </div>
        {this.renderOwnVideos()}
      </div>
    );
  }
}

export default CallVideo;
