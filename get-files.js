import { copySync } from 'fs-extra';
import { rmSync } from 'fs';
import { join } from 'path'

const __directory = process.cwd()

const NODE_MODULES_DIR = 'node_modules'

const REACT_ICONS_DIR = 'react-icons'

const PathToReactIconsModule = join(__directory, NODE_MODULES_DIR, REACT_ICONS_DIR)

const LIB_DIR = 'lib'

const PathToReactIconsLib = join(PathToReactIconsModule, LIB_DIR)

const PathToLibOutput = join(__directory, LIB_DIR)

rmSync(PathToLibOutput, { force: true, recursive: true })
copySync(PathToReactIconsLib, PathToLibOutput, { overwrite: true })

const PathToReactIconsIndexFiles = ['index.js', 'index.esm.js', 'index.d.ts']

PathToReactIconsIndexFiles.forEach(fileName => {
    const NewFilePath = join(__directory, fileName)
    rmSync(NewFilePath, { force: true, recursive: true });
    copySync(join(PathToReactIconsModule, fileName), NewFilePath, { overwrite: true })
})
