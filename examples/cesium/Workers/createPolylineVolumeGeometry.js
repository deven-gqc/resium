define(["./when-4bbc8319","./Matrix2-ccd5b911","./arrayRemoveDuplicates-18786327","./BoundingRectangle-2b0e1a9b","./Transforms-d5c6ad6e","./ComponentDatatype-93750d1a","./PolylineVolumeGeometryLibrary-6bb54199","./RuntimeError-346a3079","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./GeometryPipeline-548e76d2","./IndexDatatype-b7d979a6","./PolygonPipeline-83fb62b0","./VertexFormat-71718faa","./combine-83860057","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-e000bae1","./AxisAlignedBoundingBox-883f9c89","./IntersectionTests-4d6f5c54","./Plane-18bb00f8","./PolylinePipeline-8457214f","./EllipsoidGeodesic-19ea7553","./EllipsoidRhumbLine-aa9e6266","./AttributeCompression-1f045b73","./EncodedCartesian3-08b8d980"],(function(c,u,i,r,T,G,D,e,w,R,B,S,I,m,t,n,a,o,l,s,p,d,y,g,h){"use strict";function f(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=u.Ellipsoid.clone(c.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=c.defaultValue(e.cornerType,D.CornerType.ROUNDED),this._vertexFormat=m.VertexFormat.clone(c.defaultValue(e.vertexFormat,m.VertexFormat.DEFAULT)),this._granularity=c.defaultValue(e.granularity,G.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",t=1+t.length*u.Cartesian3.packedLength,t+=1+n.length*u.Cartesian2.packedLength,this.packedLength=t+u.Ellipsoid.packedLength+m.VertexFormat.packedLength+2}f.pack=function(e,t,n){var a;n=c.defaultValue(n,0);var i=e._positions,r=i.length;for(t[n++]=r,a=0;a<r;++a,n+=u.Cartesian3.packedLength)u.Cartesian3.pack(i[a],t,n);var o=e._shape;r=o.length;for(t[n++]=r,a=0;a<r;++a,n+=u.Cartesian2.packedLength)u.Cartesian2.pack(o[a],t,n);return u.Ellipsoid.pack(e._ellipsoid,t,n),n+=u.Ellipsoid.packedLength,m.VertexFormat.pack(e._vertexFormat,t,n),n+=m.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var b=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),v=new m.VertexFormat,P={polylinePositions:void 0,shapePositions:void 0,ellipsoid:b,vertexFormat:v,cornerType:void 0,granularity:void 0};f.unpack=function(e,t,n){t=c.defaultValue(t,0);for(var a=e[t++],i=new Array(a),r=0;r<a;++r,t+=u.Cartesian3.packedLength)i[r]=u.Cartesian3.unpack(e,t);a=e[t++];var o=new Array(a);for(r=0;r<a;++r,t+=u.Cartesian2.packedLength)o[r]=u.Cartesian2.unpack(e,t);var l=u.Ellipsoid.unpack(e,t,b);t+=u.Ellipsoid.packedLength;var s=m.VertexFormat.unpack(e,t,v);t+=m.VertexFormat.packedLength;var p=e[t++],d=e[t];return c.defined(n)?(n._positions=i,n._shape=o,n._ellipsoid=u.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=m.VertexFormat.clone(s,n._vertexFormat),n._cornerType=p,n._granularity=d,n):(P.polylinePositions=i,P.shapePositions=o,P.cornerType=p,P.granularity=d,new f(P))};var E=new r.BoundingRectangle;return f.createGeometry=function(e){var t=e._positions,n=i.arrayRemoveDuplicates(t,u.Cartesian3.equalsEpsilon),a=e._shape;a=D.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(a);if(!(n.length<2||a.length<3))return I.PolygonPipeline.computeWindingOrder2D(a)===I.WindingOrder.CLOCKWISE&&a.reverse(),t=r.BoundingRectangle.fromPoints(a,E),function(e,t,n,a){var i=new R.GeometryAttributes;a.position&&(i.position=new w.GeometryAttribute({componentDatatype:G.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var r,o,l,s,p,d=t.length,c=e.length/3,u=(c-2*d)/(2*d),m=I.PolygonPipeline.triangulate(t),y=(u-1)*d*6+2*m.length,g=S.IndexDatatype.createTypedArray(c,y),h=2*d,f=0;for(V=0;V<u-1;V++){for(r=0;r<d-1;r++)p=(o=2*r+V*d*2)+h,s=(l=o+1)+h,g[f++]=l,g[f++]=o,g[f++]=s,g[f++]=s,g[f++]=o,g[f++]=p;s=(l=1+(o=2*d-2+V*d*2))+h,p=o+h,g[f++]=l,g[f++]=o,g[f++]=s,g[f++]=s,g[f++]=o,g[f++]=p}if(a.st||a.tangent||a.bitangent){for(var b,v,P=new Float32Array(2*c),E=1/(u-1),_=1/n.height,k=n.height/2,L=0,V=0;V<u;V++){for(v=_*(t[0].y+k),P[L++]=b=V*E,P[L++]=v,r=1;r<d;r++)v=_*(t[r].y+k),P[L++]=b,P[L++]=v,P[L++]=b,P[L++]=v;v=_*(t[0].y+k),P[L++]=b,P[L++]=v}for(r=0;r<d;r++)v=_*(t[r].y+k),P[L++]=b=0,P[L++]=v;for(r=0;r<d;r++)v=_*(t[r].y+k),P[L++]=b=(u-1)*E,P[L++]=v;i.st=new w.GeometryAttribute({componentDatatype:G.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(P)})}var x=c-2*d;for(V=0;V<m.length;V+=3){var C=m[V]+x,F=m[V+1]+x,A=m[V+2]+x;g[f++]=C,g[f++]=F,g[f++]=A,g[f++]=A+d,g[f++]=F+d,g[f++]=C+d}if(e=new w.Geometry({attributes:i,indices:g,boundingSphere:T.BoundingSphere.fromVertices(e),primitiveType:w.PrimitiveType.TRIANGLES}),a.normal&&(e=B.GeometryPipeline.computeNormal(e)),a.tangent||a.bitangent){try{e=B.GeometryPipeline.computeTangentAndBitangent(e)}catch(e){D.oneTimeWarning("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}a.tangent||(e.attributes.tangent=void 0),a.bitangent||(e.attributes.bitangent=void 0),a.st||(e.attributes.st=void 0)}return e}(D.PolylineVolumeGeometryLibrary.computePositions(n,a,t,e,!0),a,t,e._vertexFormat)},function(e,t){return(e=c.defined(t)?f.unpack(e,t):e)._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),f.createGeometry(e)}}));