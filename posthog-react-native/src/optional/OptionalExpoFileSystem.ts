import type ExpoFileSystem from 'expo-file-system'

export let OptionalExpoFileSystem: typeof ExpoFileSystem | undefined = undefined

try {
  OptionalExpoFileSystem = require('expo-file-system')
} catch (e) {}
