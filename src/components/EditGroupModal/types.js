/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Field, Group } from '@dlghq/dialog-types';

type GroupUpdate = {
  name: string,
  about: ?string,
  shortname: ?string,
  avatar: ?(string | File)
}

export type Props = {
  group: Group,
  context: {
    name: Field<string>,
    about: Field<string>,
    shortname: Field<string>,
    avatar: Field<string>
  },
  className?: string,
  shortnamePrefix?: ?string,
  onClose: () => void,
  onSubmit: (group: Group, update: GroupUpdate) => any
};

export type State = {
  screen: 'info' | 'avatar',
  group: GroupUpdate
}
