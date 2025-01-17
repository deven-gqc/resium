import {
  Cesium3DTileset as CesiumCesium3DTileset,
  Cesium3DTileFeature,
  Cesium3DTile,
} from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  ConstructorOptions,
  Merge,
} from "../core";

/*
@summary
`Cesium3DTileset` is a 3D tile set.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A Cesium3DTileset object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type Cesium3DTilesetCesiumProps = PickCesiumProps<CesiumCesium3DTileset, typeof cesiumProps>;

export type Cesium3DTilesetCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumCesium3DTileset, ConstructorOptions<typeof CesiumCesium3DTileset>>,
  typeof cesiumReadonlyProps,
  "url"
>;

export type Cesium3DTilesetCesiumEvents = {
  onAllTilesLoad?: () => void;
  onInitialTilesLoad?: () => void;
  onLoadProgress?: (numberOfPendingRequests: number, numberOfTilesProcessing: number) => void;
  onTileFailed?: (error: any) => void;
  onTileLoad?: (tile: Cesium3DTile) => void;
  onTileUnload?: (tile: Cesium3DTile) => void;
  onTileVisible?: (tile: Cesium3DTile) => void;
};

export type Cesium3DTilesetOtherProps = EventProps<Cesium3DTileFeature> & {
  /** Calls when the tile set is completely loaded. */
  onReady?: (tileset: CesiumCesium3DTileset) => void;
};

export type Cesium3DTilesetProps = Cesium3DTilesetCesiumProps &
  Cesium3DTilesetCesiumReadonlyProps &
  Cesium3DTilesetCesiumEvents &
  Cesium3DTilesetOtherProps;

const cesiumProps = [
  "show",
  "modelMatrix",
  "shadows",
  "maximumScreenSpaceError",
  "maximumMemoryUsage",
  "cullRequestsWhileMoving",
  "cullRequestsWhileMovingMultiplier",
  "preloadWhenHidden",
  "preloadFlightDestinations",
  "preferLeaves",
  "progressiveResolutionHeightFraction",
  "foveatedScreenSpaceError",
  "foveatedConeSize",
  "foveatedMinimumScreenSpaceErrorRelaxation",
  "foveatedInterpolationCallback",
  "foveatedTimeDelay",
  "dynamicScreenSpaceError",
  "dynamicScreenSpaceErrorDensity",
  "dynamicScreenSpaceErrorFactor",
  "dynamicScreenSpaceErrorHeightFalloff",
  "skipLevelOfDetail",
  "baseScreenSpaceError",
  "skipScreenSpaceErrorFactor",
  "skipLevels",
  "immediatelyLoadDesiredLevelOfDetail",
  "loadSiblings",
  "clippingPlanes",
  "classificationType",
  "ellipsoid",
  "lightColor",
  "colorBlendAmount",
  "colorBlendMode",
  "debugFreezeFrame",
  "debugColorizeTiles",
  "debugWireframe",
  "debugShowBoundingVolume",
  "debugShowContentBoundingVolume",
  "debugShowViewerRequestVolume",
  "debugShowGeometricError",
  "debugShowRenderingStatistics",
  "debugShowMemoryUsage",
  "debugShowUrl",
  "style",
  "backFaceCulling",
  "vectorClassificationOnly",
  "vectorKeepDecodedPositions",
  "splitDirection",
  "customShader",
  "imageBasedLighting",
  "showCreditsOnScreen",
  "featureIdLabel",
  "instanceFeatureIdLabel",
  "imageBasedLighting",
  "outlineColor",
] as const;

const cesiumReadonlyProps = [
  "url",
  "showOutline",
  "cullWithChildrenBounds",
  "debugHeatmapTilePropertyName",
  "enableDebugWireframe",
  "modelUpAxis",
  "modelForwardAxis",
  "projectTo2D",
  "enableShowOutline",
] as const;

export const cesiumEventProps = {
  onAllTilesLoad: "allTilesLoaded",
  onInitialTilesLoad: "initialTilesLoaded",
  onLoadProgress: "loadProgress",
  onTileFailed: "tileFailed",
  onTileLoad: "tileLoad",
  onTileUnload: "tileUnload",
  onTileVisible: "tileVisible",
} as const;

export const otherProps = ["onReady"] as const;

const Cesium3DTileset = createCesiumComponent<CesiumCesium3DTileset, Cesium3DTilesetProps>({
  name: "Cesium3DTileset",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumCesium3DTileset(props);
    if (props.colorBlendAmount) {
      element.colorBlendAmount = props.colorBlendAmount;
    }
    if (props.colorBlendMode) {
      element.colorBlendMode = props.colorBlendMode;
    }
    if (props.style) {
      element.style = props.style;
    }
    if (props.onReady) {
      element.readyPromise.then(props.onReady);
    }
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
  otherProps,
  useCommonEvent: true,
});

export default Cesium3DTileset;
