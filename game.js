var Do="170";var Ng=0,Dd=1,Ug=2;var Qp=1,Du=2,_i=3,En=0,Oe=1,He=2,Xi=0,sr=1,$a=2,Nd=3,Ud=4,Og=5,vs=100,Bg=101,Fg=102,kg=103,Hg=104,zg=200,Vg=201,Gg=202,Wg=203,ph=204,mh=205,Xg=206,qg=207,Yg=208,$g=209,Kg=210,Zg=211,Jg=212,jg=213,Qg=214,gh=0,yh=1,xh=2,cr=3,_h=4,vh=5,Mh=6,bh=7,tm=0,ty=1,ey=2,qi=0,ny=1,iy=2,sy=3,Nu=4,ry=5,oy=6,ay=7,Od="attached",cy="detached",em=300,lr=301,hr=302,wh=303,Sh=304,Tc=306,Tn=1e3,vi=1001,_o=1002,nn=1003,Uu=1004;var Qs=1005;var gn=1006,uo=1007;var ii=1008;var wi=1009,nm=1010,im=1011,vo=1012,Ou=1013,bs=1014,$n=1015,No=1016,Bu=1017,Fu=1018,ur=1020,sm=35902,rm=1021,om=1022,Ln=1023,am=1024,cm=1025,rr=1026,fr=1027,ku=1028,Hu=1029,lm=1030,zu=1031;var Vu=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Eh=35840,Th=35841,Ah=35842,Rh=35843,Ch=36196,Ih=37492,Ph=37496,Lh=37808,Dh=37809,Nh=37810,Uh=37811,Oh=37812,Bh=37813,Fh=37814,kh=37815,Hh=37816,zh=37817,Vh=37818,Gh=37819,Wh=37820,Xh=37821,Ya=36492,qh=36494,Yh=36495,hm=36283,$h=36284,Kh=36285,Zh=36286,Gu=2200,Wu=2201,ly=2202,dr=2300,pr=2301,Dl=2302,tr=2400,er=2401,Ka=2402,Xu=2500,hy=2501,um=0,Ac=1,Uo=2,uy=3200,fy=3201;var fm=0,dy=1,Gi="",te="srgb",on="srgb-linear",Rc="linear",me="srgb";var Fs=7680;var Bd=519,py=512,my=513,gy=514,dm=515,yy=516,xy=517,_y=518,vy=519,Jh=35044;var Fd="300 es",Mi=2e3,Za=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,fo=Math.PI/180,mr=180/Math.PI;function Dn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function qu(s,t){return(s%t+t)%t}function My(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function by(s,t,e){return s!==t?(e-s)/(t-s):0}function po(s,t,e){return(1-e)*s+e*t}function wy(s,t,e,n){return po(s,t,1-Math.exp(-e*n))}function Sy(s,t=1){return t-Math.abs(qu(s,t*2)-t)}function Ey(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ty(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ay(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ry(s,t){return s+Math.random()*(t-s)}function Cy(s){return s*(.5-Math.random())}function Iy(s){s!==void 0&&(kd=s);let t=kd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Py(s){return s*fo}function Ly(s){return s*mr}function Dy(s){return(s&s-1)===0&&s!==0}function Ny(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Uy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oy(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var fe={DEG2RAD:fo,RAD2DEG:mr,generateUUID:Dn,clamp:Ue,euclideanModulo:qu,mapLinear:My,inverseLerp:by,lerp:po,damp:wy,pingpong:Sy,smoothstep:Ey,smootherstep:Ty,randInt:Ay,randFloat:Ry,randFloatSpread:Cy,seededRandom:Iy,degToRad:Py,radToDeg:Ly,isPowerOfTwo:Dy,ceilPowerOfTwo:Ny,floorPowerOfTwo:Uy,setQuaternionFromProperEuler:Oy,normalize:pe,denormalize:Yn},it=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],m=i[3],p=i[6],v=i[1],x=i[4],_=i[7],E=i[2],w=i[5],T=i[8];return r[0]=o*y+a*v+c*E,r[3]=o*m+a*x+c*w,r[6]=o*p+a*_+c*T,r[1]=l*y+h*v+u*E,r[4]=l*m+h*x+u*w,r[7]=l*p+h*_+u*T,r[2]=f*y+d*v+g*E,r[5]=f*m+d*x+g*w,r[8]=f*p+d*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*l-h*n)*y,t[2]=(a*n-i*o)*y,t[3]=f*y,t[4]=(h*e-i*c)*y,t[5]=(i*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new Wt;function pm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function By(){let s=Mo("canvas");return s.style.display="block",s}var Hd={};function lo(s){s in Hd||(Hd[s]=!0,console.warn(s))}function Fy(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ky(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hy(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=or(s.r),s.g=or(s.g),s.b=or(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Rc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zd=[.64,.33,.3,.6,.15,.06],Vd=[.2126,.7152,.0722],Gd=[.3127,.329],Wd=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[on]:{primaries:zd,whitePoint:Gd,transfer:Rc,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,workingColorSpaceConfig:{unpackColorSpace:te},outputColorSpaceConfig:{drawingBufferColorSpace:te}},[te]:{primaries:zd,whitePoint:Gd,transfer:me,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:Vd,outputColorSpaceConfig:{drawingBufferColorSpace:te}}});var ks,jh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ks===void 0&&(ks=Mo("canvas")),ks.width=t.width,ks.height=t.height;let n=ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zy=0,Ja=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ul(i[o].image)):r.push(Ul(i[o]))}else r=Ul(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ul(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vy=0,Xe=class s extends Si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=vi,i=vi,r=gn,o=ii,a=Ln,c=wi,l=s.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Dn(),this.name="",this.source=new Ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==em)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tn:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tn:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=em;Xe.DEFAULT_ANISOTROPY=1;var ae=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,_=(d+1)/2,E=(p+1)/2,w=(h+f)/4,T=(u+y)/4,A=(g+m)/4;return x>_&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=T/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=A/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=A/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qh=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ja=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var be=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),w=Math.atan2(E,p*v);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}let _=a*v;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+y*_,m===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new S,qd=new be,ce=class{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(t.matrixWorld),this.union(fa)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(eo),da.subVectors(this.max,eo),Hs.subVectors(t.a,eo),zs.subVectors(t.b,eo),Vs.subVectors(t.c,eo),Bi.subVectors(zs,Hs),Fi.subVectors(Vs,zs),ds.subVectors(Hs,Vs);let e=[0,-Bi.z,Bi.y,0,-Fi.z,Fi.y,0,-ds.z,ds.y,Bi.z,0,-Bi.x,Fi.z,0,-Fi.x,ds.z,0,-ds.x,-Bi.y,Bi.x,0,-Fi.y,Fi.x,0,-ds.y,ds.x,0];return!Bl(e,Hs,zs,Vs,da)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,Hs,zs,Vs,da))?!1:(pa.crossVectors(Bi,Fi),e=[pa.x,pa.y,pa.z],Bl(e,Hs,zs,Vs,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},di=[new S,new S,new S,new S,new S,new S,new S,new S],Wn=new S,fa=new ce,Hs=new S,zs=new S,Vs=new S,Bi=new S,Fi=new S,ds=new S,eo=new S,da=new S,pa=new S,ps=new S;function Bl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ps.fromArray(s,r);let a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gy=new ce,no=new S,Fl=new S,fn=class{constructor(t=new S,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gy.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;no.subVectors(t,this.center);let e=no.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(no,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(no.copy(t.center).add(Fl)),this.expandByPoint(no.copy(t.center).sub(Fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new S,kl=new S,ma=new S,ki=new S,Hl=new S,ga=new S,zl=new S,Yi=class{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kl.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ki.copy(this.origin).sub(kl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ki.dot(this.direction),c=-ki.dot(ma),l=ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(kl).addScaledVector(ma,f),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,i,r){Hl.subVectors(e,t),ga.subVectors(n,t),zl.crossVectors(Hl,ga);let o=this.direction.dot(zl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,t);let c=a*this.direction.dot(ga.crossVectors(ki,ga));if(c<0)return null;let l=a*this.direction.dot(Hl.cross(ki));if(l<0||c+l>o)return null;let h=-a*ki.dot(zl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,y,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),o=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wy,t,Xy)}lookAt(t,e,n){let i=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Hi.crossVectors(n,bn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Hi.crossVectors(n,bn)),Hi.normalize(),ya.crossVectors(bn,Hi),i[0]=Hi.x,i[4]=ya.x,i[8]=bn.x,i[1]=Hi.y,i[5]=ya.y,i[9]=bn.y,i[2]=Hi.z,i[6]=ya.z,i[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],E=n[15],w=i[0],T=i[4],A=i[8],M=i[12],b=i[1],I=i[5],N=i[9],L=i[13],U=i[2],H=i[6],k=i[10],K=i[14],V=i[3],st=i[7],ut=i[11],xt=i[15];return r[0]=o*w+a*b+c*U+l*V,r[4]=o*T+a*I+c*H+l*st,r[8]=o*A+a*N+c*k+l*ut,r[12]=o*M+a*L+c*K+l*xt,r[1]=h*w+u*b+f*U+d*V,r[5]=h*T+u*I+f*H+d*st,r[9]=h*A+u*N+f*k+d*ut,r[13]=h*M+u*L+f*K+d*xt,r[2]=g*w+y*b+m*U+p*V,r[6]=g*T+y*I+m*H+p*st,r[10]=g*A+y*N+m*k+p*ut,r[14]=g*M+y*L+m*K+p*xt,r[3]=v*w+x*b+_*U+E*V,r[7]=v*T+x*I+_*H+E*st,r[11]=v*A+x*N+_*k+E*ut,r[15]=v*M+x*L+_*K+E*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+y*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,_=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,E=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,w=e*v+n*x+i*_+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(y*f*r-u*m*r-y*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*r-y*c*r+y*i*l-n*m*l-a*i*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*T,t[4]=x*T,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*T,t[8]=_*T,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*p-e*u*p)*T,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=E*T,t[13]=(h*y*i-g*u*i+g*n*f-e*y*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*y*i-g*n*c+e*y*c+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,v=c*l,x=c*h,_=c*u,E=n.x,w=n.y,T=n.z;return i[0]=(1-(y+p))*E,i[1]=(d+_)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(d-_)*w,i[5]=(1-(f+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(m-v)*T,i[10]=(1-(f+y))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Gs.set(i[0],i[1],i[2]).length(),o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xn.copy(this);let l=1/r,h=1/o,u=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Mi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===Mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Za)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Mi){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h,g,y;if(a===Mi)g=(o+r)*u,y=-2*u;else if(a===Za)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gs=new S,Xn=new nt,Wy=new S(0,0,0),Xy=new S(1,1,1),Hi=new S,ya=new S,bn=new S,Yd=new nt,$d=new be,yn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $d.setFromEuler(this),this.setFromQuaternion($d,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qy=0,Kd=new S,Ws=new be,mi=new nt,xa=new S,io=new S,Yy=new S,$y=new be,Zd=new S(1,0,0),Jd=new S(0,1,0),jd=new S(0,0,1),Qd={type:"added"},Ky={type:"removed"},Xs={type:"childadded",child:null},Vl={type:"childremoved",child:null},Re=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new S,e=new yn,n=new be,i=new S(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Wt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(Zd,t)}rotateY(t){return this.rotateOnAxis(Jd,t)}rotateZ(t){return this.rotateOnAxis(jd,t)}translateOnAxis(t,e){return Kd.copy(t).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zd,t)}translateY(t){return this.translateOnAxis(Jd,t)}translateZ(t){return this.translateOnAxis(jd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(io,xa,this.up):mi.lookAt(xa,io,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(mi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qd),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ky),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qd),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,Yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,$y,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Re.DEFAULT_UP=new S(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new S,gi=new S,Gl=new S,yi=new S,qs=new S,Ys=new S,tp=new S,Wl=new S,Xl=new S,ql=new S,Yl=new ae,$l=new ae,Kl=new ae,un=class s{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),gi.subVectors(n,e),Gl.subVectors(t,e);let o=qn.dot(qn),a=qn.dot(gi),c=qn.dot(Gl),l=gi.dot(gi),h=gi.dot(Gl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Yl.setScalar(0),$l.setScalar(0),Kl.setScalar(0),Yl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Kl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),gi.subVectors(t,e),qn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;qs.subVectors(i,n),Ys.subVectors(r,n),Wl.subVectors(t,n);let c=qs.dot(Wl),l=Ys.dot(Wl);if(c<=0&&l<=0)return e.copy(n);Xl.subVectors(t,i);let h=qs.dot(Xl),u=Ys.dot(Xl);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(qs,o);ql.subVectors(t,r);let d=qs.dot(ql),g=Ys.dot(ql);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ys,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return tp.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(tp,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Zl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=qu(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zl(o,r,t+1/3),this.g=Zl(o,r,t),this.b=Zl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=te){let n=mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=te){return Qt.fromWorkingColorSpace(en.copy(this),t),Math.round(Ue(en.r*255,0,255))*65536+Math.round(Ue(en.g*255,0,255))*256+Math.round(Ue(en.b*255,0,255))}getHexString(t=te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(en.copy(this),e);let n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=te){Qt.fromWorkingColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(_a);let n=po(zi.h,_a.h,e),i=po(zi.s,_a.s,e),r=po(zi.l,_a.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Tt;Tt.NAMES=mm;var Zy=0,An=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Dn(),this.name="",this.blending=sr,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends An{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new S,va=new it,ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jh&&(t.usage=this.usage),t}};var tc=class extends ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ec=class extends ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jy=0,Pn=new nt,Jl=new Re,$s=new S,wn=new ce,so=new ce,We=new S,ue=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pm(t)?ec:tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ce);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(wn.min,so.min),wn.expandByPoint(We),We.addVectors(wn.max,so.max),wn.expandByPoint(We)):(wn.expandByPoint(so.min),wn.expandByPoint(so.max))}wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)We.fromBufferAttribute(a,l),c&&($s.fromBufferAttribute(t,l),We.add($s)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ee(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new S,c[A]=new S;let l=new S,h=new S,u=new S,f=new it,d=new it,g=new it,y=new S,m=new S;function p(A,M,b){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[A].add(y),a[M].add(y),a[b].add(y),c[A].add(m),c[M].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,N=b.count;for(let L=I,U=I+N;L<U;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let x=new S,_=new S,E=new S,w=new S;function T(A){E.fromBufferAttribute(i,A),w.copy(E);let M=a[A];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(w,M);let I=_.dot(c[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,I)}for(let A=0,M=v.length;A<M;++A){let b=v[A],I=b.start,N=b.count;for(let L=I,U=I+N;L<U;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ep=new nt,ms=new Yi,Ma=new fn,np=new S,ba=new S,wa=new S,Sa=new S,jl=new S,Ea=new S,ip=new S,Ta=new S,Dt=class extends Re{constructor(t=new ue,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(jl.fromBufferAttribute(u,t),o?Ea.addScaledVector(jl,h):Ea.addScaledVector(jl.sub(e),h))}e.add(Ea)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Ma.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ma,np)===null||ms.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(r).invert(),ms.copy(t.ray).applyMatrix4(ep),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,E=x;_<E;_+=3){let w=a.getX(_),T=a.getX(_+1),A=a.getX(_+2);i=Aa(this,p,t,n,l,h,u,w,T,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);i=Aa(this,o,t,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,E=x;_<E;_+=3){let w=_,T=_+1,A=_+2;i=Aa(this,p,t,n,l,h,u,w,T,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let v=m,x=m+1,_=m+2;i=Aa(this,o,t,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function jy(s,t,e,n,i,r,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===En,a),c===null)return null;Ta.copy(a),Ta.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ta);return l<e.near||l>e.far?null:{distance:l,point:Ta.clone(),object:s}}function Aa(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ba),s.getVertexPosition(c,wa),s.getVertexPosition(l,Sa);let h=jy(s,t,e,n,ba,wa,Sa,ip);if(h){let u=new S;un.getBarycoord(ip,ba,wa,Sa,u),i&&(h.uv=un.getInterpolatedAttribute(i,a,c,l,u,new it)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,c,l,u,new it)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new S,materialIndex:0};un.getNormal(ba,wa,Sa,f.normal),h.face=f,h.barycoord=u}return h}var Be=class s extends ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(y,m,p,v,x,_,E,w,T,A,M){let b=_/T,I=E/A,N=_/2,L=E/2,U=w/2,H=T+1,k=A+1,K=0,V=0,st=new S;for(let ut=0;ut<k;ut++){let xt=ut*I-L;for(let Ut=0;Ut<H;Ut++){let Jt=Ut*b-N;st[y]=Jt*v,st[m]=xt*x,st[p]=U,l.push(st.x,st.y,st.z),st[y]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ut/T),u.push(1-ut/A),K+=1}}for(let ut=0;ut<A;ut++)for(let xt=0;xt<T;xt++){let Ut=f+xt+H*ut,Jt=f+xt+H*(ut+1),$=f+(xt+1)+H*(ut+1),rt=f+(xt+1)+H*ut;c.push(Ut,Jt,rt),c.push(Jt,$,rt),V+=6}a.addGroup(d,V,M),d+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(s){let t={};for(let e=0;e<s.length;e++){let n=gr(s[e]);for(let i in n)t[i]=n[i]}return t}function Qy(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gm(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var tx={clone:gr,merge:hn},ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends An{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=Qy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nc=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new S,sp=new it,rp=new it,Pe=class extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,sp,rp),e.subVectors(rp,sp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ks=-90,Zs=1,eu=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pe(Ks,Zs,t,e);i.layers=this.layers,this.add(i);let r=new Pe(Ks,Zs,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Ks,Zs,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Ks,Zs,t,e);a.layers=this.layers,this.add(a);let c=new Pe(Ks,Zs,t,e);c.layers=this.layers,this.add(c);let l=new Pe(Ks,Zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ic=class extends Xe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nu=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Be(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Xi});r.uniforms.tEquirect.value=e;let o=new Dt(i,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=gn),new eu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ql=new S,ix=new S,sx=new Wt,Sn=class{constructor(t=new S(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ql.subVectors(n,e).cross(ix.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sx.getNormalMatrix(t),i=this.coplanarPoint(Ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new fn,Ra=new S,bo=class{constructor(t=new Sn,e=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],y=i[10],m=i[11],p=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+h,m+g,_+v).normalize(),n[3].setComponents(c-o,f-h,m-g,_-v).normalize(),n[4].setComponents(c-a,f-u,m-y,_-x).normalize(),e===Mi)n[5].setComponents(c+a,f+u,m+y,_+x).normalize();else if(e===Za)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ra.x=i.normal.x>0?t.max.x:t.min.x,Ra.y=i.normal.y>0?t.max.y:t.min.y,Ra.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ym(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rx(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var xn=class s extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let x=0;x<l;x++){let _=x*u-r;g.push(_,-v,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let x=v+l*p,_=v+l*(p+1),E=v+1+l*(p+1),w=v+1+l*p;d.push(x,_,w),d.push(_,E,w)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Px=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:cx,alphamap_pars_fragment:lx,alphatest_fragment:hx,alphatest_pars_fragment:ux,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:yx,bsdfs:xx,iridescence_fragment:_x,bumpmap_pars_fragment:vx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:bx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Sx,color_fragment:Ex,color_pars_fragment:Tx,color_pars_vertex:Ax,color_vertex:Rx,common:Cx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Ox,colorspace_pars_fragment:Bx,envmap_fragment:Fx,envmap_common_pars_fragment:kx,envmap_pars_fragment:Hx,envmap_pars_vertex:zx,envmap_physical_pars_fragment:jx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:$x,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Zx,lights_pars_begin:Jx,lights_toon_fragment:Qx,lights_toon_pars_fragment:t_,lights_phong_fragment:e_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:u_,map_fragment:f_,map_pars_fragment:d_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:y_,morphinstance_vertex:x_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:M_,morphtarget_vertex:b_,normal_fragment_begin:w_,normal_fragment_maps:S_,normal_pars_fragment:E_,normal_pars_vertex:T_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:U_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:F_,roughnessmap_fragment:k_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:$_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:j_,transmission_fragment:Q_,transmission_pars_fragment:tv,uv_pars_fragment:ev,uv_pars_vertex:nv,uv_vertex:iv,worldpos_vertex:sv,background_vert:rv,background_frag:ov,backgroundCube_vert:av,backgroundCube_frag:cv,cube_vert:lv,cube_frag:hv,depth_vert:uv,depth_frag:fv,distanceRGBA_vert:dv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:yv,linedashed_frag:xv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:Mv,meshlambert_frag:bv,meshmatcap_vert:wv,meshmatcap_frag:Sv,meshnormal_vert:Ev,meshnormal_frag:Tv,meshphong_vert:Av,meshphong_frag:Rv,meshphysical_vert:Cv,meshphysical_frag:Iv,meshtoon_vert:Pv,meshtoon_frag:Lv,points_vert:Dv,points_frag:Nv,shadow_vert:Uv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:Fv},ft={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ni={basic:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:hn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:hn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:hn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:hn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:hn([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:hn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:hn([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:hn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:hn([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:hn([ft.common,ft.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:hn([ft.lights,ft.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ni.physical={uniforms:hn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Ca={r:0,b:0,g:0},ys=new yn,kv=new nt;function Hv(s,t,e,n,i,r,o){let a=new Tt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function y(v){let x=!1,_=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===Tc)?(h===void 0&&(h=new Dt(new Be(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:gr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ys.copy(x.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(ys)),h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==me,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Dt(new xn(2,2),new Nn({name:"BackgroundMaterial",uniforms:gr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Ca,gm(s)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m}}function zv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(b,I,N,L,U){let H=!1,k=u(L,N,I);r!==k&&(r=k,l(r.object)),H=d(b,L,N,U),H&&g(b,L,N,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(b,I,N,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,I,N){let L=N.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let H=U[I.id];H===void 0&&(H={},U[I.id]=H);let k=H[L];return k===void 0&&(k=f(c()),H[L]=k),k}function f(b){let I=[],N=[],L=[];for(let U=0;U<e;U++)I[U]=0,N[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:L,object:b,attributes:{},index:null}}function d(b,I,N,L){let U=r.attributes,H=I.attributes,k=0,K=N.getAttributes();for(let V in K)if(K[V].location>=0){let ut=U[V],xt=H[V];if(xt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(b,I,N,L){let U={},H=I.attributes,k=0,K=N.getAttributes();for(let V in K)if(K[V].location>=0){let ut=H[V];ut===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor));let xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),U[V]=xt,k++}r.attributes=U,r.attributesNum=k,r.index=L}function y(){let b=r.newAttributes;for(let I=0,N=b.length;I<N;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let N=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;N[b]=1,L[b]===0&&(s.enableVertexAttribArray(b),L[b]=1),U[b]!==I&&(s.vertexAttribDivisor(b,I),U[b]=I)}function v(){let b=r.newAttributes,I=r.enabledAttributes;for(let N=0,L=I.length;N<L;N++)I[N]!==b[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function x(b,I,N,L,U,H,k){k===!0?s.vertexAttribIPointer(b,I,N,U,H):s.vertexAttribPointer(b,I,N,L,U,H)}function _(b,I,N,L){y();let U=L.attributes,H=N.getAttributes(),k=I.defaultAttributeValues;for(let K in H){let V=H[K];if(V.location>=0){let st=U[K];if(st===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){let ut=st.normalized,xt=st.itemSize,Ut=t.get(st);if(Ut===void 0)continue;let Jt=Ut.buffer,$=Ut.type,rt=Ut.bytesPerElement,wt=$===s.INT||$===s.UNSIGNED_INT||st.gpuType===Ou;if(st.isInterleavedBufferAttribute){let at=st.data,Lt=at.stride,kt=st.offset;if(at.isInstancedInterleavedBuffer){for(let X=0;X<V.locationSize;X++)p(V.location+X,at.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let X=0;X<V.locationSize;X++)x(V.location+X,xt/V.locationSize,$,ut,Lt*rt,(kt+xt/V.locationSize*X)*rt,wt)}else{if(st.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)p(V.location+at,st.meshPerAttribute);b.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let at=0;at<V.locationSize;at++)x(V.location+at,xt/V.locationSize,$,ut,xt*rt,xt/V.locationSize*at*rt,wt)}}else if(k!==void 0){let ut=k[K];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(V.location,ut);break;case 3:s.vertexAttrib3fv(V.location,ut);break;case 4:s.vertexAttrib4fv(V.location,ut);break;default:s.vertexAttrib1fv(V.location,ut)}}}}v()}function E(){A();for(let b in n){let I=n[b];for(let N in I){let L=I[N];for(let U in L)h(L[U].object),delete L[U];delete I[N]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let N in I){let L=I[N];for(let U in L)h(L[U].object),delete L[U];delete I[N]}delete n[b.id]}function T(b){for(let I in n){let N=n[I];if(N[b.id]===void 0)continue;let L=N[b.id];for(let U in L)h(L[U].object),delete L[U];delete N[b.id]}}function A(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Vv(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Ln&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==wi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!A)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:w}}function Wv(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Sn,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,_=p.clippingState||null;c.value=_,_=h(g,f,x,d);for(let E=0;E!==x;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==y;++x,_+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Xv(s){let t=new WeakMap;function e(o,a){return a===wh?o.mapping=lr:a===Sh&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wh||a===Sh)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new nu(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yr=class extends nc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nr=4,op=[.125,.215,.35,.446,.526,.582],Ms=20,th=new yr,ap=new Tt,eh=null,nh=0,ih=0,sh=!1,_s=(1+Math.sqrt(5))/2,Js=1/_s,cp=[new S(-_s,Js,0),new S(_s,Js,0),new S(-Js,0,_s),new S(Js,0,_s),new S(0,_s,-Js),new S(0,_s,Js),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],xr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eh,nh,ih),this._renderer.xr.enabled=sh,t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eh=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:No,format:Ln,colorSpace:on,depthBuffer:!1},i=lp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(r)),this._blurMaterial=Yv(r,t,e)}return i}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,th)}_sceneToCubeUV(t,e,n,i){let a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ap),h.toneMapping=qi,h.autoClear=!1;let d=new qe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Dt(new Be,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(ap),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Ia(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===lr||t.mapping===hr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ia(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,th)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cp[(i-r-1)%cp.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ms-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],v=0;for(let T=0;T<Ms;++T){let A=T/y,M=Math.exp(-A*A/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let _=this._sizeLods[i],E=3*_*(i>x-nr?i-x+nr:0),w=4*(this._cubeSize-_);Ia(e,E,w,3*_,2*_),c.setRenderTarget(e),c.render(u,th)}};function qv(s){let t=[],e=[],n=[],i=s,r=s-nr+1+op.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-nr?c=op[o-s+nr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){let T=w%3*2/3-1,A=w>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(M,y*g*w),x.set(f,m*g*w);let b=[w,w,w,w,w,w];_.set(b,p*g*w)}let E=new ue;E.setAttribute("position",new ee(v,y)),E.setAttribute("uv",new ee(x,m)),E.setAttribute("faceIndex",new ee(_,p)),t.push(E),i>nr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lp(s,t,e){let n=new Kn(s,t,e);return n.texture.mapping=Tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yv(s,t,e){let n=new Float32Array(Ms),i=new S(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function up(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $v(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wh||c===Sh,h=c===lr||c===hr;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new xr(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zv(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let v=d.array;y=d.version;for(let x=0,_=v.length;x<_;x+=3){let E=v[x+0],w=v[x+1],T=v[x+2];f.push(E,w,w,T,T,E)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let E=x+0,w=x+1,T=x+2;f.push(E,w,w,T,T,E)}}else return;let m=new(pm(f)?ec:tc)(f,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jv(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*y[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qv(s,t,e){let n=new WeakMap,i=new ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let _=a.attributes.position.count*x,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*E*4*u),T=new ja(w,_,E,u);T.type=$n,T.needsUpdate=!0;let A=x*4;for(let b=0;b<u;b++){let I=m[b],N=p[b],L=v[b],U=_*E*4*b;for(let H=0;H<I.count;H++){let k=H*A;d===!0&&(i.fromBufferAttribute(I,H),w[U+k+0]=i.x,w[U+k+1]=i.y,w[U+k+2]=i.z,w[U+k+3]=0),g===!0&&(i.fromBufferAttribute(N,H),w[U+k+4]=i.x,w[U+k+5]=i.y,w[U+k+6]=i.z,w[U+k+7]=0),y===!0&&(i.fromBufferAttribute(L,H),w[U+k+8]=i.x,w[U+k+9]=i.y,w[U+k+10]=i.z,w[U+k+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new it(_,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function t1(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var sc=class extends Xe{constructor(t,e,n,i,r,o,a,c,l,h=rr){if(h!==rr&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rr&&(n=bs),n===void 0&&h===fr&&(n=ur),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xm=new Xe,fp=new sc(1,1),_m=new ja,vm=new tu,Mm=new ic,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),yp=new Float32Array(4);function Tr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=dp[i];if(r===void 0&&(r=new Float32Array(i),dp[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cc(s,t){let e=pp[t];e===void 0&&(e=new Int32Array(t),pp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function e1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function n1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function i1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function s1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function r1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;yp.set(n),s.uniformMatrix2fv(this.addr,!1,yp),Ve(e,n)}}function o1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;gp.set(n),s.uniformMatrix3fv(this.addr,!1,gp),Ve(e,n)}}function a1(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;mp.set(n),s.uniformMatrix4fv(this.addr,!1,mp),Ve(e,n)}}function c1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function l1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function h1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function u1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function f1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function d1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function p1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function m1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function g1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fp.compareFunction=dm,r=fp):r=xm,e.setTexture2D(t||r,i)}function y1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vm,i)}function x1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mm,i)}function _1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_m,i)}function v1(s){switch(s){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return c1;case 35667:case 35671:return l1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return _1}}function M1(s,t){s.uniform1fv(this.addr,t)}function b1(s,t){let e=Tr(t,this.size,2);s.uniform2fv(this.addr,e)}function w1(s,t){let e=Tr(t,this.size,3);s.uniform3fv(this.addr,e)}function S1(s,t){let e=Tr(t,this.size,4);s.uniform4fv(this.addr,e)}function E1(s,t){let e=Tr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function T1(s,t){let e=Tr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function A1(s,t){let e=Tr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function R1(s,t){s.uniform1iv(this.addr,t)}function C1(s,t){s.uniform2iv(this.addr,t)}function I1(s,t){s.uniform3iv(this.addr,t)}function P1(s,t){s.uniform4iv(this.addr,t)}function L1(s,t){s.uniform1uiv(this.addr,t)}function D1(s,t){s.uniform2uiv(this.addr,t)}function N1(s,t){s.uniform3uiv(this.addr,t)}function U1(s,t){s.uniform4uiv(this.addr,t)}function O1(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xm,r[o])}function B1(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vm,r[o])}function F1(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Mm,r[o])}function k1(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||_m,r[o])}function H1(s){switch(s){case 5126:return M1;case 35664:return b1;case 35665:return w1;case 35666:return S1;case 35674:return E1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return I1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return k1}}var iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v1(e.type)}},su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H1(e.type)}},ru=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},rh=/(\w+)(\])?(\[|\.)?/g;function xp(s,t){s.seq.push(t),s.map[t.id]=t}function z1(s,t,e){let n=s.name,i=n.length;for(rh.lastIndex=0;;){let r=rh.exec(n),o=rh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xp(e,l===void 0?new iu(a,s,t):new su(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ru(a),xp(e,u)),e=u}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);z1(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function _p(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var V1=37297,G1=0;function W1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vp=new Wt;function X1(s){Qt._getMatrix(vp,Qt.workingColorSpace,s);let t=`mat3( ${vp.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Rc:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+W1(s.getShaderSource(t),o)}else return i}function q1(s,t){let e=X1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y1(s,t){let e;switch(t){case ny:e="Linear";break;case iy:e="Reinhard";break;case sy:e="Cineon";break;case Nu:e="ACESFilmic";break;case oy:e="AgX";break;case ay:e="Neutral";break;case ry:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pa=new S;function $1(){Qt.getLuminanceCoefficients(Pa);let s=Pa.x.toFixed(4),t=Pa.y.toFixed(4),e=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Z1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ho(s){return s!==""}function bp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(s){return s.replace(j1,tM)}var Q1=new Map;function tM(s,t){let e=Yt[t];if(e===void 0){let n=Q1.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ou(e)}var eM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(s){return s.replace(eM,nM)}function nM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ep(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function sM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lr:case hr:t="ENVMAP_TYPE_CUBE";break;case Tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function oM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tm:t="ENVMAP_BLENDING_MULTIPLY";break;case ty:t="ENVMAP_BLENDING_MIX";break;case ey:t="ENVMAP_BLENDING_ADD";break}return t}function aM(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cM(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=iM(e),l=sM(e),h=rM(e),u=oM(e),f=aM(e),d=K1(e),g=Z1(r),y=i.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==qi?Y1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,q1("linearToOutputTexel",e.outputColorSpace),$1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=ou(o),o=bp(o,e),o=wp(o,e),a=ou(a),a=bp(a,e),a=wp(a,e),o=Sp(o),a=Sp(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=v+m+o,_=v+p+a,E=_p(i,i.VERTEX_SHADER,x),w=_p(i,i.FRAGMENT_SHADER,_);i.attachShader(y,E),i.attachShader(y,w),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function T(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(y).trim(),L=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(w).trim(),H=!0,k=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,E,w);else{let K=Mp(i,E,"vertex"),V=Mp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+K+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||U==="")&&(k=!1);k&&(I.diagnostics={runnable:H,programLog:N,vertexShader:{log:L,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(E),i.deleteShader(w),A=new ar(i,y),M=J1(i,y)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(y,V1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}var lM=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cu(t),e.set(t,n)),n}},cu=class{constructor(t){this.id=lM++,this.code=t,this.usedTimes=0}};function hM(s,t,e,n,i,r,o){let a=new Qa,c=new au,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,I,N,L){let U=N.fog,H=L.geometry,k=M.isMeshStandardMaterial?N.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),V=K&&K.mapping===Tc?K.image.height:null,st=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=ut!==void 0?ut.length:0,Ut=0;H.morphAttributes.position!==void 0&&(Ut=1),H.morphAttributes.normal!==void 0&&(Ut=2),H.morphAttributes.color!==void 0&&(Ut=3);let Jt,$,rt,wt;if(st){let de=ni[st];Jt=de.vertexShader,$=de.fragmentShader}else Jt=M.vertexShader,$=M.fragmentShader,c.update(M),rt=c.getVertexShaderID(M),wt=c.getFragmentShaderID(M);let at=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,X=L.isBatchedMesh===!0,ht=!!M.map,q=!!M.matcap,Q=!!K,D=!!M.aoMap,vt=!!M.lightMap,tt=!!M.bumpMap,mt=!!M.normalMap,lt=!!M.displacementMap,Nt=!!M.emissiveMap,Mt=!!M.metalnessMap,P=!!M.roughnessMap,R=M.anisotropy>0,z=M.clearcoat>0,Z=M.dispersion>0,et=M.iridescence>0,J=M.sheen>0,At=M.transmission>0,dt=R&&!!M.anisotropyMap,bt=z&&!!M.clearcoatMap,jt=z&&!!M.clearcoatNormalMap,ot=z&&!!M.clearcoatRoughnessMap,St=et&&!!M.iridescenceMap,Bt=et&&!!M.iridescenceThicknessMap,Ht=J&&!!M.sheenColorMap,Et=J&&!!M.sheenRoughnessMap,ie=!!M.specularMap,qt=!!M.specularColorMap,ve=!!M.specularIntensityMap,O=At&&!!M.transmissionMap,pt=At&&!!M.thicknessMap,Y=!!M.gradientMap,j=!!M.alphaMap,_t=M.alphaTest>0,gt=!!M.alphaHash,Vt=!!M.extensions,Ie=qi;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ie=s.toneMapping);let Qe={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:Jt,fragmentShader:$,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:X,batchingColor:X&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:on,alphaToCoverage:!!M.alphaToCoverage,map:ht,matcap:q,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:vt,bumpMap:tt,normalMap:mt,displacementMap:f&&lt,emissiveMap:Nt,normalMapObjectSpace:mt&&M.normalMapType===dy,normalMapTangentSpace:mt&&M.normalMapType===fm,metalnessMap:Mt,roughnessMap:P,anisotropy:R,anisotropyMap:dt,clearcoat:z,clearcoatMap:bt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ot,dispersion:Z,iridescence:et,iridescenceMap:St,iridescenceThicknessMap:Bt,sheen:J,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:ie,specularColorMap:qt,specularIntensityMap:ve,transmission:At,transmissionMap:O,thicknessMap:pt,gradientMap:Y,opaque:M.transparent===!1&&M.blending===sr&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:gt,combine:M.combine,mapUv:ht&&y(M.map.channel),aoMapUv:D&&y(M.aoMap.channel),lightMapUv:vt&&y(M.lightMap.channel),bumpMapUv:tt&&y(M.bumpMap.channel),normalMapUv:mt&&y(M.normalMap.channel),displacementMapUv:lt&&y(M.displacementMap.channel),emissiveMapUv:Nt&&y(M.emissiveMap.channel),metalnessMapUv:Mt&&y(M.metalnessMap.channel),roughnessMapUv:P&&y(M.roughnessMap.channel),anisotropyMapUv:dt&&y(M.anisotropyMap.channel),clearcoatMapUv:bt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&y(M.sheenRoughnessMap.channel),specularMapUv:ie&&y(M.specularMap.channel),specularColorMapUv:qt&&y(M.specularColorMap.channel),specularIntensityMapUv:ve&&y(M.specularIntensityMap.channel),transmissionMapUv:O&&y(M.transmissionMap.channel),thicknessMapUv:pt&&y(M.thicknessMap.channel),alphaMapUv:j&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(mt||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(ht||j),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(b,M),x(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let b=g[M.type],I;if(b){let N=ni[b];I=tx.clone(N.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let N=0,L=h.length;N<L;N++){let U=h[N];if(U.cacheKey===b){I=U,++I.usedTimes;break}}return I===void 0&&(I=new cM(s,b,M,r),h.push(I)),I}function w(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:A}}function uM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ap(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,y,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||fM),n.length>1&&n.sort(f||Tp),i.length>1&&i.sort(f||Tp)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function dM(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ap,s.set(n,[o])):i>=r.length?(o=new Ap,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function pM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new Tt};break;case"SpotLight":e={position:new S,direction:new S,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new S,halfWidth:new S,halfHeight:new S};break}return s[t.id]=e,e}}}function mM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var gM=0;function yM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xM(s){let t=new pM,e=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let i=new S,r=new nt,o=new nt;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,v=0,x=0,_=0,E=0,w=0,T=0;l.sort(yM);for(let M=0,b=l.length;M<b;M++){let I=l[M],N=I.color,L=I.intensity,U=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*L,u+=N.g*L,f+=N.b*L;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],L);T++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,V=e.get(I);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=k,d++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(N).multiplyScalar(L),k.distance=U,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[y]=k;let K=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,K.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[y]=K.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=H,_++}y++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(N).multiplyScalar(L),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=k,m++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let K=I.shadow,V=e.get(I);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=k,g++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(L),k.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==y||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==_||A.numSpotMaps!==E||A.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=y,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=_,A.numSpotMaps=E,A.numLightProbes=T,n.version=gM++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let x=l[p];if(x.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Rp(s){let t=new xM(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _M(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Rp(s),t.set(i,[a])):r>=o.length?(a=new Rp(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var lu=class extends An{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hu=class extends An{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bM(s,t,e){let n=new bo,i=new it,r=new it,o=new ae,a=new lu({depthPacking:fy}),c=new hu,l={},h=e.maxTextureSize,u={[En]:Oe,[Oe]:En,[He]:He},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:vM,fragmentShader:MM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qp;let p=this.type;this.render=function(w,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Xi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=p!==_i&&this.type===_i,U=p===_i&&this.type!==_i;for(let H=0,k=w.length;H<k;H++){let K=w[H],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let st=V.getFrameExtents();if(i.multiply(st),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||L===!0||U===!0){let xt=this.type!==_i?{minFilter:nn,magFilter:nn}:{};V.map!==null&&V.map.dispose(),V.map=new Kn(i.x,i.y,xt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let ut=V.getViewportCount();for(let xt=0;xt<ut;xt++){let Ut=V.getViewport(xt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),N.viewport(o),V.updateMatrices(K,xt),n=V.getFrustum(),_(T,A,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&v(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,I)};function v(w,T){let A=t.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,A,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,A,d,y,null)}function x(w,T,A,M){let b=null,I=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)b=I;else if(b=A.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=b.uuid,L=T.uuid,U=l[N];U===void 0&&(U={},l[N]=U);let H=U[L];H===void 0&&(H=b.clone(),U[L]=H,T.addEventListener("dispose",E)),b=H}if(b.visible=T.visible,b.wireframe=T.wireframe,M===_i?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=s.properties.get(b);N.light=A}return b}function _(w,T,A,M,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===_i)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let L=t.update(w),U=w.material;if(Array.isArray(U)){let H=L.groups;for(let k=0,K=H.length;k<K;k++){let V=H[k],st=U[V.materialIndex];if(st&&st.visible){let ut=x(w,st,M,b);w.onBeforeShadow(s,w,T,A,L,ut,V),s.renderBufferDirect(A,null,L,ut,w,V),w.onAfterShadow(s,w,T,A,L,ut,V)}}}else if(U.visible){let H=x(w,U,M,b);w.onBeforeShadow(s,w,T,A,L,H,null),s.renderBufferDirect(A,null,L,H,w,null),w.onAfterShadow(s,w,T,A,L,H,null)}}let N=w.children;for(let L=0,U=N.length;L<U;L++)_(N[L],T,A,M,b)}function E(w){w.target.removeEventListener("dispose",E);for(let A in l){let M=l[A],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var wM={[gh]:yh,[xh]:Mh,[_h]:bh,[cr]:vh,[yh]:gh,[Mh]:xh,[bh]:_h,[vh]:cr};function SM(s,t){function e(){let O=!1,pt=new ae,Y=null,j=new ae(0,0,0,0);return{setMask:function(_t){Y!==_t&&!O&&(s.colorMask(_t,_t,_t,_t),Y=_t)},setLocked:function(_t){O=_t},setClear:function(_t,gt,Vt,Ie,Qe){Qe===!0&&(_t*=Ie,gt*=Ie,Vt*=Ie),pt.set(_t,gt,Vt,Ie),j.equals(pt)===!1&&(s.clearColor(_t,gt,Vt,Ie),j.copy(pt))},reset:function(){O=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,Y=null,j=null,_t=null;return{setReversed:function(gt){if(pt!==gt){let Vt=t.get("EXT_clip_control");pt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=_t;_t=null,this.setClear(Ie)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?at(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!O&&(s.depthMask(gt),Y=gt)},setFunc:function(gt){if(pt&&(gt=wM[gt]),j!==gt){switch(gt){case gh:s.depthFunc(s.NEVER);break;case yh:s.depthFunc(s.ALWAYS);break;case xh:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case _h:s.depthFunc(s.EQUAL);break;case vh:s.depthFunc(s.GEQUAL);break;case Mh:s.depthFunc(s.GREATER);break;case bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=gt}},setLocked:function(gt){O=gt},setClear:function(gt){_t!==gt&&(pt&&(gt=1-gt),s.clearDepth(gt),_t=gt)},reset:function(){O=!1,Y=null,j=null,_t=null,pt=!1}}}function i(){let O=!1,pt=null,Y=null,j=null,_t=null,gt=null,Vt=null,Ie=null,Qe=null;return{setTest:function(de){O||(de?at(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(de){pt!==de&&!O&&(s.stencilMask(de),pt=de)},setFunc:function(de,Vn,ui){(Y!==de||j!==Vn||_t!==ui)&&(s.stencilFunc(de,Vn,ui),Y=de,j=Vn,_t=ui)},setOp:function(de,Vn,ui){(gt!==de||Vt!==Vn||Ie!==ui)&&(s.stencilOp(de,Vn,ui),gt=de,Vt=Vn,Ie=ui)},setLocked:function(de){O=de},setClear:function(de){Qe!==de&&(s.clearStencil(de),Qe=de)},reset:function(){O=!1,pt=null,Y=null,j=null,_t=null,gt=null,Vt=null,Ie=null,Qe=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,E=null,w=null,T=new Tt(0,0,0),A=0,M=!1,b=null,I=null,N=null,L=null,U=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=K>=2);let st=null,ut={},xt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Jt=new ae().fromArray(xt),$=new ae().fromArray(Ut);function rt(O,pt,Y,j){let _t=new Uint8Array(4),gt=s.createTexture();s.bindTexture(O,gt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Y;Vt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(pt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return gt}let wt={};wt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(cr),tt(!1),mt(Dd),at(s.CULL_FACE),D(Xi);function at(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Lt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function kt(O,pt){return u[O]!==pt?(s.bindFramebuffer(O,pt),u[O]=pt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function X(O,pt){let Y=d,j=!1;if(O){Y=f.get(pt),Y===void 0&&(Y=[],f.set(pt,Y));let _t=O.textures;if(Y.length!==_t.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Vt=_t.length;gt<Vt;gt++)Y[gt]=s.COLOR_ATTACHMENT0+gt;Y.length=_t.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function ht(O){return g!==O?(s.useProgram(O),g=O,!0):!1}let q={[vs]:s.FUNC_ADD,[Bg]:s.FUNC_SUBTRACT,[Fg]:s.FUNC_REVERSE_SUBTRACT};q[kg]=s.MIN,q[Hg]=s.MAX;let Q={[zg]:s.ZERO,[Vg]:s.ONE,[Gg]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[Kg]:s.SRC_ALPHA_SATURATE,[Yg]:s.DST_COLOR,[Xg]:s.DST_ALPHA,[Wg]:s.ONE_MINUS_SRC_COLOR,[mh]:s.ONE_MINUS_SRC_ALPHA,[$g]:s.ONE_MINUS_DST_COLOR,[qg]:s.ONE_MINUS_DST_ALPHA,[Zg]:s.CONSTANT_COLOR,[Jg]:s.ONE_MINUS_CONSTANT_COLOR,[jg]:s.CONSTANT_ALPHA,[Qg]:s.ONE_MINUS_CONSTANT_ALPHA};function D(O,pt,Y,j,_t,gt,Vt,Ie,Qe,de){if(O===Xi){y===!0&&(Lt(s.BLEND),y=!1);return}if(y===!1&&(at(s.BLEND),y=!0),O!==Og){if(O!==m||de!==M){if((p!==vs||_!==vs)&&(s.blendEquation(s.FUNC_ADD),p=vs,_=vs),de)switch(O){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFunc(s.ONE,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ud:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ud:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,x=null,E=null,w=null,T.set(0,0,0),A=0,m=O,M=de}return}_t=_t||pt,gt=gt||Y,Vt=Vt||j,(pt!==p||_t!==_)&&(s.blendEquationSeparate(q[pt],q[_t]),p=pt,_=_t),(Y!==v||j!==x||gt!==E||Vt!==w)&&(s.blendFuncSeparate(Q[Y],Q[j],Q[gt],Q[Vt]),v=Y,x=j,E=gt,w=Vt),(Ie.equals(T)===!1||Qe!==A)&&(s.blendColor(Ie.r,Ie.g,Ie.b,Qe),T.copy(Ie),A=Qe),m=O,M=!1}function vt(O,pt){O.side===He?Lt(s.CULL_FACE):at(s.CULL_FACE);let Y=O.side===Oe;pt&&(Y=!Y),tt(Y),O.blending===sr&&O.transparent===!1?D(Xi):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let j=O.stencilWrite;a.setTest(j),j&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Nt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function mt(O){O!==Ng?(at(s.CULL_FACE),O!==I&&(O===Dd?s.cullFace(s.BACK):O===Ug?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),I=O}function lt(O){O!==N&&(k&&s.lineWidth(O),N=O)}function Nt(O,pt,Y){O?(at(s.POLYGON_OFFSET_FILL),(L!==pt||U!==Y)&&(s.polygonOffset(pt,Y),L=pt,U=Y)):Lt(s.POLYGON_OFFSET_FILL)}function Mt(O){O?at(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function P(O){O===void 0&&(O=s.TEXTURE0+H-1),st!==O&&(s.activeTexture(O),st=O)}function R(O,pt,Y){Y===void 0&&(st===null?Y=s.TEXTURE0+H-1:Y=st);let j=ut[Y];j===void 0&&(j={type:void 0,texture:void 0},ut[Y]=j),(j.type!==O||j.texture!==pt)&&(st!==Y&&(s.activeTexture(Y),st=Y),s.bindTexture(O,pt||wt[O]),j.type=O,j.texture=pt)}function z(){let O=ut[st];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(O){Jt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Jt.copy(O))}function Et(O){$.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function ie(O,pt){let Y=l.get(pt);Y===void 0&&(Y=new WeakMap,l.set(pt,Y));let j=Y.get(O);j===void 0&&(j=s.getUniformBlockIndex(pt,O.name),Y.set(O,j))}function qt(O,pt){let j=l.get(pt).get(O);c.get(pt)!==j&&(s.uniformBlockBinding(pt,j,O.__bindingPointIndex),c.set(pt,j))}function ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,E=null,w=null,T=new Tt(0,0,0),A=0,M=!1,b=null,I=null,N=null,L=null,U=null,Jt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Lt,bindFramebuffer:kt,drawBuffers:X,useProgram:ht,setBlending:D,setMaterial:vt,setFlipSided:tt,setCullFace:mt,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:Mt,activeTexture:P,bindTexture:R,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:St,texImage3D:Bt,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:Ht,viewport:Et,reset:ve}}function Cp(s,t,e,n){let i=EM(n);switch(e){case rm:return s*t;case am:return s*t;case cm:return s*t*2;case ku:return s*t/i.components*i.byteLength;case Hu:return s*t/i.components*i.byteLength;case lm:return s*t*2/i.components*i.byteLength;case zu:return s*t*2/i.components*i.byteLength;case om:return s*t*3/i.components*i.byteLength;case Ln:return s*t*4/i.components*i.byteLength;case Vu:return s*t*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Th:case Rh:return Math.max(s,16)*Math.max(t,8)/4;case Eh:case Ah:return Math.max(s,8)*Math.max(t,8)/2;case Ch:case Ih:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case zh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ya:case qh:case Yh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hm:case $h:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Kh:case Zh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function EM(s){switch(s){case wi:case nm:return{byteLength:1,components:1};case vo:case im:case No:return{byteLength:2,components:1};case Bu:case Fu:return{byteLength:2,components:4};case bs:case Ou:case $n:return{byteLength:4,components:1};case sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function TM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,R){return d?new OffscreenCanvas(P,R):Mo("canvas")}function y(P,R,z){let Z=1,et=Mt(P);if((et.width>z||et.height>z)&&(Z=z/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(Z*et.width),At=Math.floor(Z*et.height);u===void 0&&(u=g(J,At));let dt=R?g(J,At):u;return dt.width=J,dt.height=At,dt.getContext("2d").drawImage(P,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+At+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,R,z,Z,et=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=R;if(R===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8)),R===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),R===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8)),R===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),R===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),R===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),R===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),R===s.RGBA){let At=et?Rc:Qt.getTransfer(Z);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=At===me?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(P,R){let z;return P?R===null||R===bs||R===ur?z=s.DEPTH24_STENCIL8:R===$n?z=s.DEPTH32F_STENCIL8:R===vo&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===bs||R===ur?z=s.DEPTH_COMPONENT24:R===$n?z=s.DEPTH_COMPONENT32F:R===vo&&(z=s.DEPTH_COMPONENT16),z}function E(P,R){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==gn?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function w(P){let R=P.target;R.removeEventListener("dispose",w),A(R),R.isVideoTexture&&h.delete(R)}function T(P){let R=P.target;R.removeEventListener("dispose",T),b(R)}function A(P){let R=n.get(P);if(R.__webglInit===void 0)return;let z=P.source,Z=f.get(z);if(Z){let et=Z[R.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys(Z).length===0&&f.delete(z)}n.remove(P)}function M(P){let R=n.get(P);s.deleteTexture(R.__webglTexture);let z=P.source,Z=f.get(z);delete Z[R.__cacheKey],o.memory.textures--}function b(P){let R=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let et=0;et<R.__webglFramebuffer[Z].length;et++)s.deleteFramebuffer(R.__webglFramebuffer[Z][et]);else s.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)s.deleteFramebuffer(R.__webglFramebuffer[Z]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let z=P.textures;for(let Z=0,et=z.length;Z<et;Z++){let J=n.get(z[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(P)}let I=0;function N(){I=0}function L(){let P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function U(P){let R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function H(P,R){let z=n.get(P);if(P.isVideoTexture&&lt(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){let Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,P,R);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+R)}function k(P,R){let z=n.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+R)}function K(P,R){let z=n.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,R);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+R)}function V(P,R){let z=n.get(P);if(P.version>0&&z.__version!==P.version){rt(z,P,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+R)}let st={[Tn]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[_o]:s.MIRRORED_REPEAT},ut={[nn]:s.NEAREST,[Uu]:s.NEAREST_MIPMAP_NEAREST,[Qs]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[uo]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},xt={[py]:s.NEVER,[vy]:s.ALWAYS,[my]:s.LESS,[dm]:s.LEQUAL,[gy]:s.EQUAL,[_y]:s.GEQUAL,[yy]:s.GREATER,[xy]:s.NOTEQUAL};function Ut(P,R){if(R.type===$n&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===gn||R.magFilter===uo||R.magFilter===Qs||R.magFilter===ii||R.minFilter===gn||R.minFilter===uo||R.minFilter===Qs||R.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,st[R.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,st[R.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,st[R.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ut[R.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ut[R.minFilter]),R.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,xt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===nn||R.minFilter!==Qs&&R.minFilter!==ii||R.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Jt(P,R){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",w));let Z=R.source,et=f.get(Z);et===void 0&&(et={},f.set(Z,et));let J=U(R);if(J!==P.__cacheKey){et[J]===void 0&&(et[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[J].usedTimes++;let At=et[P.__cacheKey];At!==void 0&&(et[P.__cacheKey].usedTimes--,At.usedTimes===0&&M(R)),P.__cacheKey=J,P.__webglTexture=et[J].texture}return z}function $(P,R,z){let Z=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=s.TEXTURE_3D);let et=Jt(P,R),J=R.source;e.bindTexture(Z,P.__webglTexture,s.TEXTURE0+z);let At=n.get(J);if(J.version!==At.__version||et===!0){e.activeTexture(s.TEXTURE0+z);let dt=Qt.getPrimaries(Qt.workingColorSpace),bt=R.colorSpace===Gi?null:Qt.getPrimaries(R.colorSpace),jt=R.colorSpace===Gi||dt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ot=y(R.image,!1,i.maxTextureSize);ot=Nt(R,ot);let St=r.convert(R.format,R.colorSpace),Bt=r.convert(R.type),Ht=x(R.internalFormat,St,Bt,R.colorSpace,R.isVideoTexture);Ut(Z,R);let Et,ie=R.mipmaps,qt=R.isVideoTexture!==!0,ve=At.__version===void 0||et===!0,O=J.dataReady,pt=E(R,ot);if(R.isDepthTexture)Ht=_(R.format===fr,R.type),ve&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Ht,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ht,ot.width,ot.height,0,St,Bt,null));else if(R.isDataTexture)if(ie.length>0){qt&&ve&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,ie[0].width,ie[0].height);for(let Y=0,j=ie.length;Y<j;Y++)Et=ie[Y],qt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Bt,Et.data):e.texImage2D(s.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,St,Bt,Et.data);R.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,ot.width,ot.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,St,Bt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ht,ot.width,ot.height,0,St,Bt,ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ht,ie[0].width,ie[0].height,ot.depth);for(let Y=0,j=ie.length;Y<j;Y++)if(Et=ie[Y],R.format!==Ln)if(St!==null)if(qt){if(O)if(R.layerUpdates.size>0){let _t=Cp(Et.width,Et.height,R.format,R.type);for(let gt of R.layerUpdates){let Vt=Et.data.subarray(gt*_t/Et.data.BYTES_PER_ELEMENT,(gt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,gt,Et.width,Et.height,1,St,Vt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,St,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,St,Bt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ht,Et.width,Et.height,ot.depth,0,St,Bt,Et.data)}else{qt&&ve&&e.texStorage2D(s.TEXTURE_2D,pt,Ht,ie[0].width,ie[0].height);for(let Y=0,j=ie.length;Y<j;Y++)Et=ie[Y],R.format!==Ln?St!==null?qt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Bt,Et.data):e.texImage2D(s.TEXTURE_2D,Y,Ht,Et.width,Et.height,0,St,Bt,Et.data)}else if(R.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Ht,ot.width,ot.height,ot.depth),O)if(R.layerUpdates.size>0){let Y=Cp(ot.width,ot.height,R.format,R.type);for(let j of R.layerUpdates){let _t=ot.data.subarray(j*Y/ot.data.BYTES_PER_ELEMENT,(j+1)*Y/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,ot.width,ot.height,1,St,Bt,_t)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,Bt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,ot.width,ot.height,ot.depth,0,St,Bt,ot.data);else if(R.isData3DTexture)qt?(ve&&e.texStorage3D(s.TEXTURE_3D,pt,Ht,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,Bt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ht,ot.width,ot.height,ot.depth,0,St,Bt,ot.data);else if(R.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(s.TEXTURE_2D,pt,Ht,ot.width,ot.height);else{let Y=ot.width,j=ot.height;for(let _t=0;_t<pt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ht,Y,j,0,St,Bt,null),Y>>=1,j>>=1}}else if(ie.length>0){if(qt&&ve){let Y=Mt(ie[0]);e.texStorage2D(s.TEXTURE_2D,pt,Ht,Y.width,Y.height)}for(let Y=0,j=ie.length;Y<j;Y++)Et=ie[Y],qt?O&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,St,Bt,Et):e.texImage2D(s.TEXTURE_2D,Y,Ht,St,Bt,Et);R.generateMipmaps=!1}else if(qt){if(ve){let Y=Mt(ot);e.texStorage2D(s.TEXTURE_2D,pt,Ht,Y.width,Y.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Bt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ht,St,Bt,ot);m(R)&&p(Z),At.__version=J.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function rt(P,R,z){if(R.image.length!==6)return;let Z=Jt(P,R),et=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);let J=n.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let At=Qt.getPrimaries(Qt.workingColorSpace),dt=R.colorSpace===Gi?null:Qt.getPrimaries(R.colorSpace),bt=R.colorSpace===Gi||At===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let jt=R.isCompressedTexture||R.image[0].isCompressedTexture,ot=R.image[0]&&R.image[0].isDataTexture,St=[];for(let j=0;j<6;j++)!jt&&!ot?St[j]=y(R.image[j],!0,i.maxCubemapSize):St[j]=ot?R.image[j].image:R.image[j],St[j]=Nt(R,St[j]);let Bt=St[0],Ht=r.convert(R.format,R.colorSpace),Et=r.convert(R.type),ie=x(R.internalFormat,Ht,Et,R.colorSpace),qt=R.isVideoTexture!==!0,ve=J.__version===void 0||Z===!0,O=et.dataReady,pt=E(R,Bt);Ut(s.TEXTURE_CUBE_MAP,R);let Y;if(jt){qt&&ve&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ie,Bt.width,Bt.height);for(let j=0;j<6;j++){Y=St[j].mipmaps;for(let _t=0;_t<Y.length;_t++){let gt=Y[_t];R.format!==Ln?Ht!==null?qt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,Ht,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,ie,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,gt.width,gt.height,Ht,Et,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,ie,gt.width,gt.height,0,Ht,Et,gt.data)}}}else{if(Y=R.mipmaps,qt&&ve){Y.length>0&&pt++;let j=Mt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ie,j.width,j.height)}for(let j=0;j<6;j++)if(ot){qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,St[j].width,St[j].height,Ht,Et,St[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ie,St[j].width,St[j].height,0,Ht,Et,St[j].data);for(let _t=0;_t<Y.length;_t++){let Vt=Y[_t].image[j].image;qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Vt.width,Vt.height,Ht,Et,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,ie,Vt.width,Vt.height,0,Ht,Et,Vt.data)}}else{qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ht,Et,St[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ie,Ht,Et,St[j]);for(let _t=0;_t<Y.length;_t++){let gt=Y[_t];qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Ht,Et,gt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,ie,Ht,Et,gt.image[j])}}}m(R)&&p(s.TEXTURE_CUBE_MAP),J.__version=et.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function wt(P,R,z,Z,et,J){let At=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),bt=x(z.internalFormat,At,dt,z.colorSpace),jt=n.get(R),ot=n.get(z);if(ot.__renderTarget=R,!jt.__hasExternalTextures){let St=Math.max(1,R.width>>J),Bt=Math.max(1,R.height>>J);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,J,bt,St,Bt,R.depth,0,At,dt,null):e.texImage2D(et,J,bt,St,Bt,0,At,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),mt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,et,ot.__webglTexture,0,tt(R)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,et,ot.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,R,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),R.depthBuffer){let Z=R.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=_(R.stencilBuffer,et),At=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=tt(R);mt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,J,R.width,R.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,J,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,J,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,P)}else{let Z=R.textures;for(let et=0;et<Z.length;et++){let J=Z[et],At=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),bt=x(J.internalFormat,At,dt,J.colorSpace),jt=tt(R);z&&mt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,bt,R.width,R.height):mt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,bt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,bt,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);let et=Z.__webglTexture,J=tt(R);if(R.depthTexture.format===rr)mt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(R.depthTexture.format===fr)mt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function kt(P){let R=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==P.depthTexture){let Z=P.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){let et=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),R.__depthDisposeCallback=et}R.__boundDepthTexture=Z}if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Lt(R.__webglFramebuffer,P)}else if(z){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=s.createRenderbuffer(),at(R.__webglDepthbuffer[Z],P,!1);else{let et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=R.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),at(R.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function X(P,R,z){let Z=n.get(P);R!==void 0&&wt(Z.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&kt(P)}function ht(P){let R=P.texture,z=n.get(P),Z=n.get(R);P.addEventListener("dispose",T);let et=P.textures,J=P.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=R.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let bt=0;bt<R.mipmaps.length;bt++)z.__webglFramebuffer[dt][bt]=s.createFramebuffer()}else z.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<R.mipmaps.length;dt++)z.__webglFramebuffer[dt]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(At)for(let dt=0,bt=et.length;dt<bt;dt++){let jt=n.get(et[dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&mt(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let bt=et[dt];z.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let jt=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),St=x(bt.internalFormat,jt,ot,bt.colorSpace,P.isXRRenderTarget===!0),Bt=tt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,St,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,R);for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)wt(z.__webglFramebuffer[dt][bt],P,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else wt(z.__webglFramebuffer[dt],P,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(R)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,bt=et.length;dt<bt;dt++){let jt=et[dt],ot=n.get(jt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),Ut(s.TEXTURE_2D,jt),wt(z.__webglFramebuffer,P,jt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Ut(dt,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)wt(z.__webglFramebuffer[bt],P,R,s.COLOR_ATTACHMENT0,dt,bt);else wt(z.__webglFramebuffer,P,R,s.COLOR_ATTACHMENT0,dt,0);m(R)&&p(dt),e.unbindTexture()}P.depthBuffer&&kt(P)}function q(P){let R=P.textures;for(let z=0,Z=R.length;z<Z;z++){let et=R[z];if(m(et)){let J=v(P),At=n.get(et).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}let Q=[],D=[];function vt(P){if(P.samples>0){if(mt(P)===!1){let R=P.textures,z=P.width,Z=P.height,et=s.COLOR_BUFFER_BIT,J=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(P),dt=R.length>1;if(dt)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let jt=n.get(R[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,et,s.NEAREST),c===!0&&(Q.length=0,D.length=0,Q.push(s.COLOR_ATTACHMENT0+bt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Q.push(J),D.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let jt=n.get(R[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let R=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function tt(P){return Math.min(i.maxSamples,P.samples)}function mt(P){let R=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function lt(P){let R=o.render.frame;h.get(P)!==R&&(h.set(P,R),P.update())}function Nt(P,R){let z=P.colorSpace,Z=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==on&&z!==Gi&&(Qt.getTransfer(z)===me?(Z!==Ln||et!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),R}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=X,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=mt}function AM(s,t){function e(n,i=Gi){let r,o=Qt.getTransfer(i);if(n===wi)return s.UNSIGNED_BYTE;if(n===Bu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nm)return s.BYTE;if(n===im)return s.SHORT;if(n===vo)return s.UNSIGNED_SHORT;if(n===Ou)return s.INT;if(n===bs)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===No)return s.HALF_FLOAT;if(n===rm)return s.ALPHA;if(n===om)return s.RGB;if(n===Ln)return s.RGBA;if(n===am)return s.LUMINANCE;if(n===cm)return s.LUMINANCE_ALPHA;if(n===rr)return s.DEPTH_COMPONENT;if(n===fr)return s.DEPTH_STENCIL;if(n===ku)return s.RED;if(n===Hu)return s.RED_INTEGER;if(n===lm)return s.RG;if(n===zu)return s.RG_INTEGER;if(n===Vu)return s.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===qa)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eh||n===Th||n===Ah||n===Rh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Ih||n===Ph)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Ih)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ph)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lh||n===Dh||n===Nh||n===Uh||n===Oh||n===Bh||n===Fh||n===kh||n===Hh||n===zh||n===Vh||n===Gh||n===Wh||n===Xh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===qh||n===Yh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hm||n===$h||n===Kh||n===Zh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$h)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var uu=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},RM={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Xe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:CM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends Si{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=new fu,m=e.getContextAttributes(),p=null,v=null,x=[],_=[],E=new it,w=null,T=new Pe;T.viewport=new ae;let A=new Pe;A.viewport=new ae;let M=[T,A],b=new uu,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=x[$];return rt===void 0&&(rt=new mo,x[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=x[$];return rt===void 0&&(rt=new mo,x[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=x[$];return rt===void 0&&(rt=new mo,x[$]=rt),rt.getHandSpace()};function L($){let rt=_.indexOf($.inputSource);if(rt===-1)return;let wt=x[rt];wt!==void 0&&(wt.update($.inputSource,$.frame,l||o),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",H);for(let $=0;$<x.length;$++){let rt=_[$];rt!==null&&(_[$]=null,x[$].disconnect(rt))}I=null,N=null,y.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,wt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?fr:rr,wt=m.stencil?ur:bs);let Lt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Kn(f.textureWidth,f.textureHeight,{format:Ln,type:wi,depthTexture:new sc(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Jt.setContext(i),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H($){for(let rt=0;rt<$.removed.length;rt++){let wt=$.removed[rt],at=_.indexOf(wt);at>=0&&(_[at]=null,x[at].disconnect(wt))}for(let rt=0;rt<$.added.length;rt++){let wt=$.added[rt],at=_.indexOf(wt);if(at===-1){for(let kt=0;kt<x.length;kt++)if(kt>=_.length){_.push(wt),at=kt;break}else if(_[kt]===null){_[kt]=wt,at=kt;break}if(at===-1)break}let Lt=x[at];Lt&&Lt.connect(wt)}}let k=new S,K=new S;function V($,rt,wt){k.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);let at=k.distanceTo(K),Lt=rt.projectionMatrix.elements,kt=wt.projectionMatrix.elements,X=Lt[14]/(Lt[10]-1),ht=Lt[14]/(Lt[10]+1),q=(Lt[9]+1)/Lt[5],Q=(Lt[9]-1)/Lt[5],D=(Lt[8]-1)/Lt[0],vt=(kt[8]+1)/kt[0],tt=X*D,mt=X*vt,lt=at/(-D+vt),Nt=lt*-D;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Mt=X+lt,P=ht+lt,R=tt-Nt,z=mt+(at-Nt),Z=q*ht/P*Mt,et=Q*ht/P*Mt;$.projectionMatrix.makePerspective(R,z,Z,et,Mt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let rt=$.near,wt=$.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),b.near=A.near=T.near=rt,b.far=A.far=T.far=wt,(I!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,N=b.far),T.layers.mask=$.layers.mask|2,A.layers.mask=$.layers.mask|4,b.layers.mask=T.layers.mask|A.layers.mask;let at=$.parent,Lt=b.cameras;st(b,at);for(let kt=0;kt<Lt.length;kt++)st(Lt[kt],at);Lt.length===2?V(b,T,A):b.projectionMatrix.copy(T.projectionMatrix),ut($,b,at)};function ut($,rt,wt){wt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let xt=null;function Ut($,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){let wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let at=!1;wt.length!==b.cameras.length&&(b.cameras.length=0,at=!0);for(let kt=0;kt<wt.length;kt++){let X=wt[kt],ht=null;if(d!==null)ht=d.getViewport(X);else{let Q=u.getViewSubImage(f,X);ht=Q.viewport,kt===0&&(t.setRenderTargetTextures(v,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(v))}let q=M[kt];q===void 0&&(q=new Pe,q.layers.enable(kt),q.viewport=new ae,M[kt]=q),q.matrix.fromArray(X.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(X.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ht.x,ht.y,ht.width,ht.height),kt===0&&(b.matrix.copy(q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),at===!0&&b.cameras.push(q)}let Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let kt=u.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&y.init(t,kt,i.renderState)}}for(let wt=0;wt<x.length;wt++){let at=_[wt],Lt=x[wt];at!==null&&Lt!==void 0&&Lt.update(at,rt,l||o)}xt&&xt($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let Jt=new ym;Jt.setAnimationLoop(Ut),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}},xs=new yn,PM=new nt;function LM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,xs.copy(_),xs.x*=-1,xs.y*=-1,xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(xs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DM(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));let E=x.program;n.updateUBOMapping(v,E);let w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){let x=u();v.__bindingPointIndex=x;let _=s.createBuffer(),E=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=i[v.id],_=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,T=_.length;w<T;w++){let A=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,b=A.length;M<b;M++){let I=A[M];if(d(I,w,M,E)===!0){let N=I.__offset,L=Array.isArray(I.value)?I.value:[I.value],U=0;for(let H=0;H<L.length;H++){let k=L[H],K=y(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+U,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,_,E){let w=v.value,T=x+"_"+_;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{let A=E[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){let x=v.uniforms,_=0,E=16;for(let T=0,A=x.length;T<A;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,I=M.length;b<I;b++){let N=M[b],L=Array.isArray(N.value)?N.value:[N.value];for(let U=0,H=L.length;U<H;U++){let k=L[U],K=y(k),V=_%E,st=V%K.boundary,ut=V+st;_+=st,ut!==0&&E-ut<K.storage&&(_+=E-ut),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=K.storage}}}let w=_%E;return w>0&&(_+=E-w),v.__size=_,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var rc=class{constructor(t={}){let{canvas:e=By(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=te,this.toneMapping=qi,this.toneMappingExposure=1;let _=this,E=!1,w=0,T=0,A=null,M=-1,b=null,I=new ae,N=new ae,L=null,U=new Tt(0),H=0,k=e.width,K=e.height,V=1,st=null,ut=null,xt=new ae(0,0,k,K),Ut=new ae(0,0,k,K),Jt=!1,$=new bo,rt=!1,wt=!1,at=new nt,Lt=new nt,kt=new S,X=new ae,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function Q(){return A===null?V:1}let D=n;function vt(C,B){return e.getContext(C,B)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let B="webgl2";if(D=vt(B,C),D===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,mt,lt,Nt,Mt,P,R,z,Z,et,J,At,dt,bt,jt,ot,St,Bt,Ht,Et,ie,qt,ve,O;function pt(){tt=new Kv(D),tt.init(),qt=new AM(D,tt),mt=new Gv(D,tt,t,qt),lt=new SM(D,tt),mt.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Nt=new jv(D),Mt=new uM,P=new TM(D,tt,lt,Mt,mt,qt,Nt),R=new Xv(_),z=new $v(_),Z=new rx(D),ve=new zv(D,Z),et=new Zv(D,Z,Nt,ve),J=new t1(D,et,Z,Nt),Ht=new Qv(D,mt,P),ot=new Wv(Mt),At=new hM(_,R,z,tt,mt,ve,ot),dt=new LM(_,Mt),bt=new dM,jt=new _M(tt),Bt=new Hv(_,R,z,lt,J,d,c),St=new bM(_,J,mt),O=new DM(D,Nt,mt,lt),Et=new Vv(D,tt,Nt),ie=new Jv(D,tt,Nt),Nt.programs=At.programs,_.capabilities=mt,_.extensions=tt,_.properties=Mt,_.renderLists=bt,_.shadowMap=St,_.state=lt,_.info=Nt}pt();let Y=new du(_,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(k,K,!1))},this.getSize=function(C){return C.set(k,K)},this.setSize=function(C,B,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,K=B,e.width=Math.floor(C*V),e.height=Math.floor(B*V),G===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*V,K*V).floor()},this.setDrawingBufferSize=function(C,B,G){k=C,K=B,V=G,e.width=Math.floor(C*G),e.height=Math.floor(B*G),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(xt)},this.setViewport=function(C,B,G,W){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,B,G,W),lt.viewport(I.copy(xt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(Ut)},this.setScissor=function(C,B,G,W){C.isVector4?Ut.set(C.x,C.y,C.z,C.w):Ut.set(C,B,G,W),lt.scissor(N.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(C){lt.setScissorTest(Jt=C)},this.setOpaqueSort=function(C){st=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(C=!0,B=!0,G=!0){let W=0;if(C){let F=!1;if(A!==null){let ct=A.texture.format;F=ct===Vu||ct===zu||ct===Hu}if(F){let ct=A.texture.type,yt=ct===wi||ct===bs||ct===vo||ct===ur||ct===Bu||ct===Fu,Rt=Bt.getClearColor(),Ct=Bt.getClearAlpha(),zt=Rt.r,Gt=Rt.g,It=Rt.b;yt?(g[0]=zt,g[1]=Gt,g[2]=It,g[3]=Ct,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=zt,y[1]=Gt,y[2]=It,y[3]=Ct,D.clearBufferiv(D.COLOR,0,y))}else W|=D.COLOR_BUFFER_BIT}B&&(W|=D.DEPTH_BUFFER_BIT),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),jt.dispose(),Mt.dispose(),R.dispose(),z.dispose(),J.dispose(),ve.dispose(),O.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ed),Y.removeEventListener("sessionend",Td),fs.stop()};function j(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Nt.autoReset,B=St.enabled,G=St.autoUpdate,W=St.needsUpdate,F=St.type;pt(),Nt.autoReset=C,St.enabled=B,St.autoUpdate=G,St.needsUpdate=W,St.type=F}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){let B=C.target;B.removeEventListener("dispose",Vt),Ie(B)}function Ie(C){Qe(C),Mt.remove(C)}function Qe(C){let B=Mt.get(C).programs;B!==void 0&&(B.forEach(function(G){At.releaseProgram(G)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,G,W,F,ct){B===null&&(B=ht);let yt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Pg(C,B,G,W,F);lt.setMaterial(W,yt);let Ct=G.index,zt=1;if(W.wireframe===!0){if(Ct=et.getWireframeAttribute(G),Ct===void 0)return;zt=2}let Gt=G.drawRange,It=G.attributes.position,re=Gt.start*zt,Me=(Gt.start+Gt.count)*zt;ct!==null&&(re=Math.max(re,ct.start*zt),Me=Math.min(Me,(ct.start+ct.count)*zt)),Ct!==null?(re=Math.max(re,0),Me=Math.min(Me,Ct.count)):It!=null&&(re=Math.max(re,0),Me=Math.min(Me,It.count));let Ee=Me-re;if(Ee<0||Ee===1/0)return;ve.setup(F,W,Rt,G,Ct);let mn,le=Et;if(Ct!==null&&(mn=Z.get(Ct),le=ie,le.setIndex(mn)),F.isMesh)W.wireframe===!0?(lt.setLineWidth(W.wireframeLinewidth*Q()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(F.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),lt.setLineWidth(Pt*Q()),F.isLineSegments?le.setMode(D.LINES):F.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else F.isPoints?le.setMode(D.POINTS):F.isSprite&&le.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Pt=F._multiDrawStarts,fi=F._multiDrawCounts,he=F._multiDrawCount,Gn=Ct?Z.get(Ct).bytesPerElement:1,Bs=Mt.get(W).currentProgram.getUniforms();for(let Mn=0;Mn<he;Mn++)Bs.setValue(D,"_gl_DrawID",Mn),le.render(Pt[Mn]/Gn,fi[Mn])}else if(F.isInstancedMesh)le.renderInstances(re,Ee,F.count);else if(G.isInstancedBufferGeometry){let Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fi=Math.min(G.instanceCount,Pt);le.renderInstances(re,Ee,fi)}else le.render(re,Ee)};function de(C,B,G){C.transparent===!0&&C.side===He&&C.forceSinglePass===!1?(C.side=Oe,C.needsUpdate=!0,ua(C,B,G),C.side=En,C.needsUpdate=!0,ua(C,B,G),C.side=He):ua(C,B,G)}this.compile=function(C,B,G=null){G===null&&(G=C),p=jt.get(G),p.init(B),x.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),C!==G&&C.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return C.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ct=F.material;if(ct)if(Array.isArray(ct))for(let yt=0;yt<ct.length;yt++){let Rt=ct[yt];de(Rt,G,F),W.add(Rt)}else de(ct,G,F),W.add(ct)}),x.pop(),p=null,W},this.compileAsync=function(C,B,G=null){let W=this.compile(C,B,G);return new Promise(F=>{function ct(){if(W.forEach(function(yt){Mt.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){F(C);return}setTimeout(ct,10)}tt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Vn=null;function ui(C){Vn&&Vn(C)}function Ed(){fs.stop()}function Td(){fs.start()}let fs=new ym;fs.setAnimationLoop(ui),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(C){Vn=C,Y.setAnimationLoop(C),C===null?fs.stop():fs.start()},Y.addEventListener("sessionstart",Ed),Y.addEventListener("sessionend",Td),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,B,A),p=jt.get(C,x.length),p.init(B),x.push(p),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Lt),wt=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,wt),m=bt.get(C,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&Ll(ct,B,-1/0,_.sortObjects)}Ll(C,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,ut),q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,q&&Bt.addToRenderList(m,C),this.info.render.frame++,rt===!0&&ot.beginShadows();let G=p.state.shadowsArray;St.render(G,C,B),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),B.isArrayCamera){let ct=B.cameras;if(F.length>0)for(let yt=0,Rt=ct.length;yt<Rt;yt++){let Ct=ct[yt];Rd(W,F,C,Ct)}q&&Bt.render(C);for(let yt=0,Rt=ct.length;yt<Rt;yt++){let Ct=ct[yt];Ad(m,C,Ct,Ct.viewport)}}else F.length>0&&Rd(W,F,C,B),q&&Bt.render(C),Ad(m,C,B);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,B),ve.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],rt===!0&&ot.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ll(C,B,G,W){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)G=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){W&&X.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);let yt=J.update(C),Rt=C.material;Rt.visible&&m.push(C,yt,Rt,G,X.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){let yt=J.update(C),Rt=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),X.copy(C.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),X.copy(yt.boundingSphere.center)),X.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(Rt)){let Ct=yt.groups;for(let zt=0,Gt=Ct.length;zt<Gt;zt++){let It=Ct[zt],re=Rt[It.materialIndex];re&&re.visible&&m.push(C,yt,re,G,X.z,It)}}else Rt.visible&&m.push(C,yt,Rt,G,X.z,null)}}let ct=C.children;for(let yt=0,Rt=ct.length;yt<Rt;yt++)Ll(ct[yt],B,G,W)}function Ad(C,B,G,W){let F=C.opaque,ct=C.transmissive,yt=C.transparent;p.setupLightsView(G),rt===!0&&ot.setGlobalState(_.clippingPlanes,G),W&&lt.viewport(I.copy(W)),F.length>0&&ha(F,B,G),ct.length>0&&ha(ct,B,G),yt.length>0&&ha(yt,B,G),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Rd(C,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Kn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?No:wi,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ct=p.state.transmissionRenderTarget[W.id],yt=W.viewport||I;ct.setSize(yt.z,yt.w);let Rt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor(U),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),q&&Bt.render(G);let Ct=_.toneMapping;_.toneMapping=qi;let zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),rt===!0&&ot.setGlobalState(_.clippingPlanes,W),ha(C,G,W),P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let It=0,re=B.length;It<re;It++){let Me=B[It],Ee=Me.object,mn=Me.geometry,le=Me.material,Pt=Me.group;if(le.side===He&&Ee.layers.test(W.layers)){let fi=le.side;le.side=Oe,le.needsUpdate=!0,Cd(Ee,G,W,mn,le,Pt),le.side=fi,le.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct))}_.setRenderTarget(Rt),_.setClearColor(U,H),zt!==void 0&&(W.viewport=zt),_.toneMapping=Ct}function ha(C,B,G){let W=B.isScene===!0?B.overrideMaterial:null;for(let F=0,ct=C.length;F<ct;F++){let yt=C[F],Rt=yt.object,Ct=yt.geometry,zt=W===null?yt.material:W,Gt=yt.group;Rt.layers.test(G.layers)&&Cd(Rt,B,G,Ct,zt,Gt)}}function Cd(C,B,G,W,F,ct){C.onBeforeRender(_,B,G,W,F,ct),C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(_,B,G,W,C,ct),F.transparent===!0&&F.side===He&&F.forceSinglePass===!1?(F.side=Oe,F.needsUpdate=!0,_.renderBufferDirect(G,B,W,F,C,ct),F.side=En,F.needsUpdate=!0,_.renderBufferDirect(G,B,W,F,C,ct),F.side=He):_.renderBufferDirect(G,B,W,F,C,ct),C.onAfterRender(_,B,G,W,F,ct)}function ua(C,B,G){B.isScene!==!0&&(B=ht);let W=Mt.get(C),F=p.state.lights,ct=p.state.shadowsArray,yt=F.state.version,Rt=At.getParameters(C,F.state,ct,B,G),Ct=At.getProgramCacheKey(Rt),zt=W.programs;W.environment=C.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(C.isMeshStandardMaterial?z:R).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",Vt),zt=new Map,W.programs=zt);let Gt=zt.get(Ct);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===yt)return Pd(C,Rt),Gt}else Rt.uniforms=At.getUniforms(C),C.onBeforeCompile(Rt,_),Gt=At.acquireProgram(Rt,Ct),zt.set(Ct,Gt),W.uniforms=Rt.uniforms;let It=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=ot.uniform),Pd(C,Rt),W.needsLights=Dg(C),W.lightsStateVersion=yt,W.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Id(C){if(C.uniformsList===null){let B=C.currentProgram.getUniforms();C.uniformsList=ar.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Pd(C,B){let G=Mt.get(C);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Pg(C,B,G,W,F){B.isScene!==!0&&(B=ht),P.resetTextureUnits();let ct=B.fog,yt=W.isMeshStandardMaterial?B.environment:null,Rt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:on,Ct=(W.isMeshStandardMaterial?z:R).get(W.envMap||yt),zt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,re=!!G.morphAttributes.normal,Me=!!G.morphAttributes.color,Ee=qi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=_.toneMapping);let mn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,le=mn!==void 0?mn.length:0,Pt=Mt.get(W),fi=p.state.lights;if(rt===!0&&(wt===!0||C!==b)){let In=C===b&&W.id===M;ot.setState(W,C,In)}let he=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==fi.state.version||Pt.outputColorSpace!==Rt||F.isBatchedMesh&&Pt.batching===!1||!F.isBatchedMesh&&Pt.batching===!0||F.isBatchedMesh&&Pt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pt.instancing===!1||!F.isInstancedMesh&&Pt.instancing===!0||F.isSkinnedMesh&&Pt.skinning===!1||!F.isSkinnedMesh&&Pt.skinning===!0||F.isInstancedMesh&&Pt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pt.instancingMorph===!1&&F.morphTexture!==null||Pt.envMap!==Ct||W.fog===!0&&Pt.fog!==ct||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Gt||Pt.morphTargets!==It||Pt.morphNormals!==re||Pt.morphColors!==Me||Pt.toneMapping!==Ee||Pt.morphTargetsCount!==le)&&(he=!0):(he=!0,Pt.__version=W.version);let Gn=Pt.currentProgram;he===!0&&(Gn=ua(W,B,F));let Bs=!1,Mn=!1,Qr=!1,Te=Gn.getUniforms(),ei=Pt.uniforms;if(lt.useProgram(Gn.program)&&(Bs=!0,Mn=!0,Qr=!0),W.id!==M&&(M=W.id,Mn=!0),Bs||b!==C){lt.buffers.depth.getReversed()?(at.copy(C.projectionMatrix),ky(at),Hy(at),Te.setValue(D,"projectionMatrix",at)):Te.setValue(D,"projectionMatrix",C.projectionMatrix),Te.setValue(D,"viewMatrix",C.matrixWorldInverse);let Ui=Te.map.cameraPosition;Ui!==void 0&&Ui.setValue(D,kt.setFromMatrixPosition(C.matrixWorld)),mt.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Te.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Mn=!0,Qr=!0)}if(F.isSkinnedMesh){Te.setOptional(D,F,"bindMatrix"),Te.setOptional(D,F,"bindMatrixInverse");let In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Te.setValue(D,"boneTexture",In.boneTexture,P))}F.isBatchedMesh&&(Te.setOptional(D,F,"batchingTexture"),Te.setValue(D,"batchingTexture",F._matricesTexture,P),Te.setOptional(D,F,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",F._indirectTexture,P),Te.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",F._colorsTexture,P));let to=G.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Ht.update(F,G,Gn),(Mn||Pt.receiveShadow!==F.receiveShadow)&&(Pt.receiveShadow=F.receiveShadow,Te.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ei.envMap.value=Ct,ei.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(ei.envMapIntensity.value=B.environmentIntensity),Mn&&(Te.setValue(D,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&Lg(ei,Qr),ct&&W.fog===!0&&dt.refreshFogUniforms(ei,ct),dt.refreshMaterialUniforms(ei,W,V,K,p.state.transmissionRenderTarget[C.id]),ar.upload(D,Id(Pt),ei,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ar.upload(D,Id(Pt),ei,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Te.setValue(D,"center",F.center),Te.setValue(D,"modelViewMatrix",F.modelViewMatrix),Te.setValue(D,"normalMatrix",F.normalMatrix),Te.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let In=W.uniformsGroups;for(let Ui=0,Oi=In.length;Ui<Oi;Ui++){let Ld=In[Ui];O.update(Ld,Gn),O.bind(Ld,Gn)}}return Gn}function Lg(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Dg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,B,G){Mt.get(C.texture).__webglTexture=B,Mt.get(C.depthTexture).__webglTexture=G;let W=Mt.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){let G=Mt.get(C);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,G=0){A=C,w=B,T=G;let W=!0,F=null,ct=!1,yt=!1;if(C){let Ct=Mt.get(C);if(Ct.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ct.__hasExternalTextures)P.rebindTextures(C,Mt.get(C.texture).__webglTexture,Mt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let It=C.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&Mt.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}let zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);let Gt=Mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?F=Gt[B][G]:F=Gt[B],ct=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?F=Mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[G]:F=Gt,I.copy(C.viewport),N.copy(C.scissor),L=C.scissorTest}else I.copy(xt).multiplyScalar(V).floor(),N.copy(Ut).multiplyScalar(V).floor(),L=Jt;if(lt.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&lt.drawBuffers(C,F),lt.viewport(I),lt.scissor(N),lt.setScissorTest(L),ct){let Ct=Mt.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,G)}else if(yt){let Ct=Mt.get(C.texture),zt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.__webglTexture,G||0,zt)}M=-1},this.readRenderTargetPixels=function(C,B,G,W,F,ct,yt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){lt.bindFramebuffer(D.FRAMEBUFFER,Rt);try{let Ct=C.texture,zt=Ct.format,Gt=Ct.type;if(!mt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-W&&G>=0&&G<=C.height-F&&D.readPixels(B,G,W,F,qt.convert(zt),qt.convert(Gt),ct)}finally{let Ct=A!==null?Mt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(C,B,G,W,F,ct,yt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){let Ct=C.texture,zt=Ct.format,Gt=Ct.type;if(!mt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-W&&G>=0&&G<=C.height-F){lt.bindFramebuffer(D.FRAMEBUFFER,Rt);let It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),D.readPixels(B,G,W,F,qt.convert(zt),qt.convert(Gt),0);let re=A!==null?Mt.get(A).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,re);let Me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fy(D,Me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(It),D.deleteSync(Me),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,B=null,G=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(C.image.width*W),ct=Math.floor(C.image.height*W),yt=B!==null?B.x:0,Rt=B!==null?B.y:0;P.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,yt,Rt,F,ct),lt.unbindTexture()},this.copyTextureToTexture=function(C,B,G=null,W=null,F=0){C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],B=arguments[2],F=arguments[3]||0,G=null);let ct,yt,Rt,Ct,zt,Gt,It,re,Me,Ee=C.isCompressedTexture?C.mipmaps[F]:C.image;G!==null?(ct=G.max.x-G.min.x,yt=G.max.y-G.min.y,Rt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,zt=G.min.y,Gt=G.isBox3?G.min.z:0):(ct=Ee.width,yt=Ee.height,Rt=Ee.depth||1,Ct=0,zt=0,Gt=0),W!==null?(It=W.x,re=W.y,Me=W.z):(It=0,re=0,Me=0);let mn=qt.convert(B.format),le=qt.convert(B.type),Pt;B.isData3DTexture?(P.setTexture3D(B,0),Pt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Pt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let fi=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Gn=D.getParameter(D.UNPACK_SKIP_PIXELS),Bs=D.getParameter(D.UNPACK_SKIP_ROWS),Mn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let Qr=C.isDataArrayTexture||C.isData3DTexture,Te=B.isDataArrayTexture||B.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ei=Mt.get(C),to=Mt.get(B),In=Mt.get(ei.__renderTarget),Ui=Mt.get(to.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,In.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Oi=0;Oi<Rt;Oi++)Qr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(C).__webglTexture,F,Gt+Oi),C.isDepthTexture?(Te&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(B).__webglTexture,F,Me+Oi),D.blitFramebuffer(Ct,zt,ct,yt,It,re,ct,yt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Te?D.copyTexSubImage3D(Pt,F,It,re,Me+Oi,Ct,zt,ct,yt):D.copyTexSubImage2D(Pt,F,It,re,Me+Oi,Ct,zt,ct,yt);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Te?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Pt,F,It,re,Me,ct,yt,Rt,mn,le,Ee.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,F,It,re,Me,ct,yt,Rt,mn,Ee.data):D.texSubImage3D(Pt,F,It,re,Me,ct,yt,Rt,mn,le,Ee):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,It,re,ct,yt,mn,le,Ee.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,It,re,Ee.width,Ee.height,mn,Ee.data):D.texSubImage2D(D.TEXTURE_2D,F,It,re,ct,yt,mn,le,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,fi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mn),F===0&&B.generateMipmaps&&D.generateMipmap(Pt),lt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,G=null,W=null,F=0){return C.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,C=arguments[2],B=arguments[3],F=arguments[4]||0),lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,B,G,W,F)},this.initRenderTarget=function(C){Mt.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,lt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var $i=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},wo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new S,So=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ip=new S,Pp=new ae,Lp=new ae,NM=new S,Dp=new nt,La=new S,oh=new fn,Np=new nt,ah=new Yi,oc=class extends Dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ce),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oh.copy(this.boundingSphere),oh.applyMatrix4(i),t.ray.intersectsSphere(oh)!==!1&&(Np.copy(i).invert(),ah.copy(t.ray).applyMatrix4(Np),!(this.boundingBox!==null&&ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ah)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Pp.fromBufferAttribute(i.attributes.skinIndex,t),Lp.fromBufferAttribute(i.attributes.skinWeight,t),Ip.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Lp.getComponent(r);if(o!==0){let a=Pp.getComponent(r);Dp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(NM.copy(Ip).applyMatrix4(Dp),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends Re{constructor(){super(),this.isBone=!0,this.type="Bone"}},ac=class extends Xe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Up=new nt,UM=new nt,cc=class s{constructor(t=[],e=[]){this.uuid=Dn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:UM;Up.multiplyMatrices(a,e[r]),Up.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ac(e,t,t,Ln,$n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Eo),this.bones.push(o),this.boneInverses.push(new nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},ws=class extends ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},js=new nt,Op=new nt,Da=[],Bp=new ce,OM=new nt,ro=new Dt,oo=new fn,lc=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,OM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ce),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Bp.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(Bp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),oo.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),Op.multiplyMatrices(n,js),ro.matrixWorld=Op,ro.raycast(t,Da);for(let o=0,a=Da.length;o<a;o++){let c=Da[o];c.instanceId=r,c.object=this,e.push(c)}Da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ac(new Float32Array(i*this.count),i,this.count,ku,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ss=class extends An{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hc=new S,uc=new S,Fp=new nt,ao=new Yi,Na=new fn,ch=new S,kp=new S,_r=class extends Re{constructor(t=new ue,e=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)hc.fromBufferAttribute(e,i-1),uc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hc.distanceTo(uc);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;Fp.copy(i).invert(),ao.copy(t.ray).applyMatrix4(Fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=h.getX(y),v=h.getX(y+1),x=Ua(this,t,ao,c,p,v);x&&e.push(x)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),p=Ua(this,t,ao,c,y,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=Ua(this,t,ao,c,y,y+1);p&&e.push(p)}if(this.isLineLoop){let y=Ua(this,t,ao,c,g-1,d);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(hc.fromBufferAttribute(o,i),uc.fromBufferAttribute(o,r),e.distanceSqToSegment(hc,uc,ch,kp)>n)return;ch.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ch);if(!(c<t.near||c>t.far))return{distance:c,point:kp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Hp=new S,zp=new S,vr=class extends _r{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Hp.fromBufferAttribute(e,i),zp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hp.distanceTo(zp);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fc=class extends _r{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Zn=class extends An{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vp=new nt,pu=new Yi,Oa=new fn,Ba=new S,si=class extends Re{constructor(t=new ue,e=new Zn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,t.ray.intersectsSphere(Oa)===!1)return;Vp.copy(i).invert(),pu.copy(t.ray).applyMatrix4(Vp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=l.getX(g);Ba.fromBufferAttribute(u,m),Gp(Ba,m,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Ba.fromBufferAttribute(u,g),Gp(Ba,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gp(s,t,e,n,i,r,o){let a=pu.distanceSqToPoint(s);if(a<e){let c=new S;pu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var sn=class extends Xe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new it:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new S,i=[],r=[],o=[],a=new S,c=new nt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ue(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ue(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},To=class extends Un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},mu=class extends To{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $u(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Fa=new S,lh=new $u,hh=new $u,uh=new $u,On=class extends Un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new S){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Fa.subVectors(i[0],i[1]).add(i[0]),l=Fa);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),lh.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,m),hh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,m),uh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),hh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),uh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(lh.calc(c),hh.calc(c),uh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new S().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wp(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function BM(s,t){let e=1-s;return e*e*t}function FM(s,t){return 2*(1-s)*s*t}function kM(s,t){return s*s*t}function go(s,t,e,n){return BM(s,t)+FM(s,e)+kM(s,n)}function HM(s,t){let e=1-s;return e*e*e*t}function zM(s,t){let e=1-s;return 3*e*e*s*t}function VM(s,t){return 3*(1-s)*s*s*t}function GM(s,t){return s*s*s*t}function yo(s,t,e,n,i){return HM(s,t)+zM(s,e)+VM(s,n)+GM(s,i)}var dc=class extends Un{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,i.x,r.x,o.x,a.x),yo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gu=class extends Un{constructor(t=new S,e=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new S){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,i.x,r.x,o.x,a.x),yo(t,i.y,r.y,o.y,a.y),yo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pc=class extends Un{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yu=class extends Un{constructor(t=new S,e=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new S){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new S){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends Un{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(go(t,i.x,r.x,o.x),go(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends Un{constructor(t=new S,e=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(go(t,i.x,r.x,o.x),go(t,i.y,r.y,o.y),go(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wp(a,c.x,l.x,h.x,u.x),Wp(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:mu,CatmullRomCurve3:On,CubicBezierCurve:dc,CubicBezierCurve3:gu,EllipseCurve:To,LineCurve:pc,LineCurve3:yu,QuadraticBezierCurve:mc,QuadraticBezierCurve3:gc,SplineCurve:yc}),xu=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new xc[i.type]().fromJSON(i))}return this}},Ao=class extends xu{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new pc(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new mc(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new dc(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new To(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ki=class s extends ue{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ue(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new S,f=new it,d=new S,g=new S,y=new S,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let v=0;v<=e;v++){let x=n+v*h*i,_=Math.sin(x),E=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*E,o.push(u.x,u.y,u.z),f.x=v/e,f.y=w/(t.length-1),a.push(f.x,f.y);let T=c[3*w+0]*_,A=c[3*w+1],M=c[3*w+0]*E;l.push(T,A,M)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let _=x+v*t.length,E=_,w=_+t.length,T=_+t.length+1,A=_+1;r.push(E,w,A),r.push(T,A,w)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ei=class s extends Ki{constructor(t=1,e=1,n=4,i=8){let r=new Ao;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},_c=class s extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new S,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kt=class s extends ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function v(){let _=new S,E=new S,w=0,T=(e-t)/n;for(let A=0;A<=r;A++){let M=[],b=A/r,I=b*(e-t)+t;for(let N=0;N<=i;N++){let L=N/i,U=L*c+a,H=Math.sin(U),k=Math.cos(U);E.x=I*H,E.y=-b*n+m,E.z=I*k,u.push(E.x,E.y,E.z),_.set(H,T,k).normalize(),f.push(_.x,_.y,_.z),d.push(L,1-b),M.push(g++)}y.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){let b=y[M][A],I=y[M+1][A],N=y[M+1][A+1],L=y[M][A+1];(t>0||M!==0)&&(h.push(b,I,L),w+=3),(e>0||M!==r-1)&&(h.push(I,N,L),w+=3)}l.addGroup(p,w,0),p+=w}function x(_){let E=g,w=new it,T=new S,A=0,M=_===!0?t:e,b=_===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let I=g;for(let N=0;N<=i;N++){let U=N/i*c+a,H=Math.cos(U),k=Math.sin(U);T.x=M*k,T.y=m*b,T.z=M*H,u.push(T.x,T.y,T.z),f.push(0,b,0),w.x=H*.5+.5,w.y=k*.5*b+.5,d.push(w.x,w.y),g++}for(let N=0;N<i;N++){let L=E+N,U=I+N;_===!0?h.push(U,U+1,L):h.push(U+1,U,L),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ri=class s extends Kt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oi=class extends Ao{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ao().fromJSON(i))}return this}},WM={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=bm(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=KM(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ro(r,o,e,a,c,d,0),o}};function bm(s,t,e,n,i){let r,o;if(i===ob(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Xp(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Xp(r,s[r],s[r+1],o);return o&&Ic(o,o.next)&&(Io(o),o=o.next),o}function Es(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ic(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(s,t,e,n,i,r,o){if(!s)return;!o&&r&&tb(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?qM(s,n,i,r):XM(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Io(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=YM(Es(s),t,e),Ro(s,t,e,n,i,r,2)):o===2&&$M(s,t,e,n,i,r):Ro(Es(s),t,e,n,i,r,1);break}}}function XM(s){let t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ir(i,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qM(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=_u(d,g,t,e,n),v=_u(y,m,t,e,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=v;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ir(a,h,c,u,l,f,x.x,x.y)&&Ae(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ir(a,h,c,u,l,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ir(a,h,c,u,l,f,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ir(a,h,c,u,l,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function YM(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ic(i,r)&&wm(i,n,n.next,r)&&Co(i,r)&&Co(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Io(n),Io(n.next),n=s=r),n=n.next}while(n!==s);return Es(n)}function $M(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ib(o,a)){let c=Sm(o,a);o=Es(o,o.next),c=Es(c,c.next),Ro(o,t,e,n,i,r,0),Ro(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function KM(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=bm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(nb(l));for(i.sort(ZM),r=0;r<i.length;r++)e=JM(i[r],e);return e}function ZM(s,t){return s.x-t.x}function JM(s,t){let e=jM(s,t);if(!e)return t;let n=Sm(e,s);return Es(n,n.next),Es(e,e.next)}function jM(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&ir(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Co(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&QM(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function QM(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function tb(s,t,e,n){let i=s;do i.z===0&&(i.z=_u(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,eb(i)}function eb(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function _u(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nb(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ir(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ib(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sb(s,t)&&(Co(s,t)&&Co(t,s)&&rb(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||Ic(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ic(s,t){return s.x===t.x&&s.y===t.y}function wm(s,t,e,n){let i=Ha(Ae(s,t,e)),r=Ha(Ae(s,t,n)),o=Ha(Ae(e,n,s)),a=Ha(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||o===0&&ka(e,s,n)||a===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ha(s){return s>0?1:s<0?-1:0}function sb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Co(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function rb(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sm(s,t){let e=new vu(s.i,s.x,s.y),n=new vu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xp(s,t,e,n){let i=new vu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vu(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ob(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var xo=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];qp(t),Yp(n,t);let o=t.length;e.forEach(qp);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Yp(n,e[c]);let a=WM.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function qp(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yp(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Mr=class s extends ue{constructor(t=new oi([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(i,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:ab,x,_=!1,E,w,T,A;p&&(x=p.getSpacedPoints(h),_=!0,f=!1,E=p.computeFrenetFrames(h,!1),w=new S,T=new S,A=new S),f||(m=0,d=0,g=0,y=0);let M=a.extractPoints(l),b=M.shape,I=M.holes;if(!xo.isClockWise(b)){b=b.reverse();for(let q=0,Q=I.length;q<Q;q++){let D=I[q];xo.isClockWise(D)&&(I[q]=D.reverse())}}let L=xo.triangulateShape(b,I),U=b;for(let q=0,Q=I.length;q<Q;q++){let D=I[q];b=b.concat(D)}function H(q,Q,D){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Q,D)}let k=b.length,K=L.length;function V(q,Q,D){let vt,tt,mt,lt=q.x-Q.x,Nt=q.y-Q.y,Mt=D.x-q.x,P=D.y-q.y,R=lt*lt+Nt*Nt,z=lt*P-Nt*Mt;if(Math.abs(z)>Number.EPSILON){let Z=Math.sqrt(R),et=Math.sqrt(Mt*Mt+P*P),J=Q.x-Nt/Z,At=Q.y+lt/Z,dt=D.x-P/et,bt=D.y+Mt/et,jt=((dt-J)*P-(bt-At)*Mt)/(lt*P-Nt*Mt);vt=J+lt*jt-q.x,tt=At+Nt*jt-q.y;let ot=vt*vt+tt*tt;if(ot<=2)return new it(vt,tt);mt=Math.sqrt(ot/2)}else{let Z=!1;lt>Number.EPSILON?Mt>Number.EPSILON&&(Z=!0):lt<-Number.EPSILON?Mt<-Number.EPSILON&&(Z=!0):Math.sign(Nt)===Math.sign(P)&&(Z=!0),Z?(vt=-Nt,tt=lt,mt=Math.sqrt(R)):(vt=lt,tt=Nt,mt=Math.sqrt(R/2))}return new it(vt/mt,tt/mt)}let st=[];for(let q=0,Q=U.length,D=Q-1,vt=q+1;q<Q;q++,D++,vt++)D===Q&&(D=0),vt===Q&&(vt=0),st[q]=V(U[q],U[D],U[vt]);let ut=[],xt,Ut=st.concat();for(let q=0,Q=I.length;q<Q;q++){let D=I[q];xt=[];for(let vt=0,tt=D.length,mt=tt-1,lt=vt+1;vt<tt;vt++,mt++,lt++)mt===tt&&(mt=0),lt===tt&&(lt=0),xt[vt]=V(D[vt],D[mt],D[lt]);ut.push(xt),Ut=Ut.concat(xt)}for(let q=0;q<m;q++){let Q=q/m,D=d*Math.cos(Q*Math.PI/2),vt=g*Math.sin(Q*Math.PI/2)+y;for(let tt=0,mt=U.length;tt<mt;tt++){let lt=H(U[tt],st[tt],vt);at(lt.x,lt.y,-D)}for(let tt=0,mt=I.length;tt<mt;tt++){let lt=I[tt];xt=ut[tt];for(let Nt=0,Mt=lt.length;Nt<Mt;Nt++){let P=H(lt[Nt],xt[Nt],vt);at(P.x,P.y,-D)}}}let Jt=g+y;for(let q=0;q<k;q++){let Q=f?H(b[q],Ut[q],Jt):b[q];_?(T.copy(E.normals[0]).multiplyScalar(Q.x),w.copy(E.binormals[0]).multiplyScalar(Q.y),A.copy(x[0]).add(T).add(w),at(A.x,A.y,A.z)):at(Q.x,Q.y,0)}for(let q=1;q<=h;q++)for(let Q=0;Q<k;Q++){let D=f?H(b[Q],Ut[Q],Jt):b[Q];_?(T.copy(E.normals[q]).multiplyScalar(D.x),w.copy(E.binormals[q]).multiplyScalar(D.y),A.copy(x[q]).add(T).add(w),at(A.x,A.y,A.z)):at(D.x,D.y,u/h*q)}for(let q=m-1;q>=0;q--){let Q=q/m,D=d*Math.cos(Q*Math.PI/2),vt=g*Math.sin(Q*Math.PI/2)+y;for(let tt=0,mt=U.length;tt<mt;tt++){let lt=H(U[tt],st[tt],vt);at(lt.x,lt.y,u+D)}for(let tt=0,mt=I.length;tt<mt;tt++){let lt=I[tt];xt=ut[tt];for(let Nt=0,Mt=lt.length;Nt<Mt;Nt++){let P=H(lt[Nt],xt[Nt],vt);_?at(P.x,P.y+x[h-1].y,x[h-1].x+D):at(P.x,P.y,u+D)}}}$(),rt();function $(){let q=i.length/3;if(f){let Q=0,D=k*Q;for(let vt=0;vt<K;vt++){let tt=L[vt];Lt(tt[2]+D,tt[1]+D,tt[0]+D)}Q=h+m*2,D=k*Q;for(let vt=0;vt<K;vt++){let tt=L[vt];Lt(tt[0]+D,tt[1]+D,tt[2]+D)}}else{for(let Q=0;Q<K;Q++){let D=L[Q];Lt(D[2],D[1],D[0])}for(let Q=0;Q<K;Q++){let D=L[Q];Lt(D[0]+k*h,D[1]+k*h,D[2]+k*h)}}n.addGroup(q,i.length/3-q,0)}function rt(){let q=i.length/3,Q=0;wt(U,Q),Q+=U.length;for(let D=0,vt=I.length;D<vt;D++){let tt=I[D];wt(tt,Q),Q+=tt.length}n.addGroup(q,i.length/3-q,1)}function wt(q,Q){let D=q.length;for(;--D>=0;){let vt=D,tt=D-1;tt<0&&(tt=q.length-1);for(let mt=0,lt=h+m*2;mt<lt;mt++){let Nt=k*mt,Mt=k*(mt+1),P=Q+vt+Nt,R=Q+tt+Nt,z=Q+tt+Mt,Z=Q+vt+Mt;kt(P,R,z,Z)}}}function at(q,Q,D){c.push(q),c.push(Q),c.push(D)}function Lt(q,Q,D){X(q),X(Q),X(D);let vt=i.length/3,tt=v.generateTopUV(n,i,vt-3,vt-2,vt-1);ht(tt[0]),ht(tt[1]),ht(tt[2])}function kt(q,Q,D,vt){X(q),X(Q),X(vt),X(Q),X(D),X(vt);let tt=i.length/3,mt=v.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);ht(mt[0]),ht(mt[1]),ht(mt[3]),ht(mt[1]),ht(mt[2]),ht(mt[3])}function X(q){i.push(c[q*3+0]),i.push(c[q*3+1]),i.push(c[q*3+2])}function ht(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cb(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new xc[i.type]().fromJSON(i)),new s(n,t.options)}},ab={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new it(r,o),new it(a,c),new it(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new it(o,1-c),new it(l,1-u),new it(f,1-g),new it(y,1-p)]:[new it(a,1-c),new it(h,1-u),new it(d,1-g),new it(m,1-p)]}};function cb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xt=class s extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new S,f=new S,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){let w=E/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(w+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=h[p][v+1],_=h[p][v],E=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&d.push(x,_,w),(p!==n-1||c<Math.PI)&&d.push(_,E,w)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var we=class s extends ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new S,u=new S,f=new S;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let y=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let y=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(y,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zi=class s extends ue{constructor(t=new gc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,c=new S,l=new it,h=new S,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function y(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),v(),p()}function m(x){h=t.getPointAt(x/e,h);let _=o.normals[x],E=o.binormals[x];for(let w=0;w<=i;w++){let T=w/i*Math.PI*2,A=Math.sin(T),M=-Math.cos(T);c.x=M*_.x+A*E.x,c.y=M*_.y+A*E.y,c.z=M*_.z+A*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){let E=(i+1)*(x-1)+(_-1),w=(i+1)*x+(_-1),T=(i+1)*x+_,A=(i+1)*(x-1)+_;g.push(E,w,A),g.push(w,T,A)}}function v(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)l.x=x/e,l.y=_/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new xc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ge=class extends An{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fm,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rn=class extends ge{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function za(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hb(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function $p(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Em(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}var Ji=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mu=class extends Ji{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tr,endingEnd:tr}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case er:r=t,a=2*e-n;break;case Ka:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case er:o=t,c=2*n-e;break;case Ka:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,v=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*y+.5*g,_=d*m-d*y;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+v*o[l+E]+x*o[c+E]+_*o[u+E];return r}},vc=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},bu=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=za(e,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:za(t.times,Array),values:za(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case pr:e=this.InterpolantFactoryMethodLinear;break;case Dl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&lb(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=pr;var ji=class extends Bn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=dr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Bn{};Mc.prototype.ValueTypeName="color";var Ti=class extends Bn{};Ti.prototype.ValueTypeName="number";var wu=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)be.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ai=class extends Bn{InterpolantFactoryMethodLinear(t){return new wu(this.times,this.values,this.getValueSize(),t)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=dr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Bn{};Ri.prototype.ValueTypeName="vector";var br=class{constructor(t="",e=-1,n=[],i=Xu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(fb(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=hb(c);c=$p(c,1,h),l=$p(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ti(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,y){if(d.length!==0){let m=[],p=[];Em(d,m,p,g),m.length!==0&&y.push(new u(f,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,c=t.length||-1,l=t.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)d[f[g].morphTargets[y]]=-1;for(let y in d){let m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){let x=f[g];m.push(x.time),p.push(x.morphTarget===y?1:0)}i.push(new Ti(".morphTargetInfluence["+y+"]",m,p))}c=d.length*o}else{let d=".bones["+e[u].name+"]";n(Ri,d+".position",f,"pos",i),n(Ai,d+".quaternion",f,"rot",i),n(Ri,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ub(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Ri;case"color":return Mc;case"quaternion":return Ai;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function fb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=ub(s.type);if(s.times===void 0){let e=[],n=[];Em(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Wi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Su=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},db=new Su,Ci=class{constructor(t){this.manager=t!==void 0?t:db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Eu=class extends Error{constructor(t,e){super(t),this.response=e}},Po=class extends Ci{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Wi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:i});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xi[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,y=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{y+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let w=0,T=h.length;w<T;w++){let A=h[w];A.onProgress&&A.onProgress(E)}p.enqueue(_),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Eu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Wi.add(t,l);let h=xi[t];delete xi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=xi[t];if(h===void 0)throw this.manager.itemError(t),l;delete xi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Tu=class extends Ci{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Wi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Mo("img");function c(){h(),Wi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var bc=class extends Ci{constructor(t){super(t)}load(t,e,n,i){let r=new Xe,o=new Tu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},wr=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Sr=class extends wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fh=new nt,Kp=new S,Zp=new S,Lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Kp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kp),Zp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zp),e.updateMatrixWorld(),fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Au=class extends Lo{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=mr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},wc=class extends wr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jp=new nt,co=new S,dh=new S,Ru=class extends Lo{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),co.setFromMatrixPosition(t.matrixWorld),n.position.copy(co),dh.copy(n.position),dh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dh),n.updateMatrixWorld(),i.makeTranslation(-co.x,-co.y,-co.z),Jp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jp)}},Er=class extends wr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cu=class extends Lo{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Cu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var es=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Sc=class extends Ci{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Wi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Wi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Wi.add(t,c),r.manager.itemStart(t)}};var Iu=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){be.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;be.multiplyQuaternionsFlat(t,o,t,e,t,n),be.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Ku="\\[\\]\\.:\\/",pb=new RegExp("["+Ku+"]","g"),Zu="[^"+Ku+"]",mb="[^"+Ku.replace("\\.","")+"]",gb=/((?:WC+[\/:])*)/.source.replace("WC",Zu),yb=/(WCOD+)?/.source.replace("WCOD",mb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),_b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),vb=new RegExp("^"+gb+yb+xb+_b+"$"),Mb=["material","materials","bones","map"],Pu=class{constructor(t,e,n){let i=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pb,"")}static parseTrackName(t){let e=vb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Pu;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lu=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),c={endingStart:tr,endingEnd:tr};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hy:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Xu:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===ly;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Gu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=er,i.endingEnd=er):(t?i.endingStart=this.zeroSlopeAtStart?er:tr:i.endingStart=Ka,e?i.endingEnd=this.zeroSlopeAtEnd?er:tr:i.endingEnd=Ka)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}},bb=new Float32Array(1),Ec=class extends Si{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let y=e&&e._propertyBindings[u].binding.parsedPath;g=new Iu(ye.create(n,d,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new vc(new Float32Array(2),new Float32Array(2),1,bb),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?br.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xu),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Lu(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?br.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var jp=new S,Va=new S,rn=class{constructor(t=new S,e=new S){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jp.subVectors(t,this.start),Va.subVectors(this.end,this.start);let n=Va.dot(Va),r=Va.dot(jp)/n;return e&&(r=Ue(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);var Ft=60,Jn=Math.PI/180,Tm=300,Am=5,Oo=-46,Ar=-39,Rm=[{id:"hdb",name:"Toa Payoh Heartland",icon:"\u{1F3E2}",lat:20,lon:30,spawn:[-6,3.6,0]},{id:"hawker",name:"Lau Pa Sat",icon:"\u{1F35C}",lat:4,lon:90,spawn:[0,1.5,Math.PI]},{id:"chinatown",name:"Chinatown",icon:"\u{1F3EE}",lat:18,lon:150,spawn:[-12,0,Math.PI/2]},{id:"marina",name:"Marina Bay",icon:"\u{1F981}",lat:-6,lon:210,spawn:[-12,1.5,Math.PI/2]},{id:"gardens",name:"Gardens by the Bay",icon:"\u{1F333}",lat:14,lon:270,spawn:[-2,1.5,0]},{id:"sentosa",name:"Sentosa",icon:"\u{1F3D6}\uFE0F",lat:-30,lon:330,spawn:[0,1.5,0]}];function Cm(s,t,e=new S){let n=(90-s)*Jn,i=t*Jn;return e.set(-Math.cos(i)*Math.sin(n),Math.cos(n),Math.sin(i)*Math.sin(n))}function Rr(s){let t=Math.asin(fe.clamp(s.y,-1,1))/Jn,e=Math.atan2(s.z,-s.x)/Jn;return e<0&&(e+=360),[t,e]}var wb=new S(0,1,0);function Cr(s,t={}){t.up=(t.up||new S).copy(s).normalize();let e=(t.north||new S).copy(wb).addScaledVector(t.up,-t.up.y);return e.lengthSq()<1e-8&&e.set(1,0,0),t.north=e.normalize(),t.east=(t.east||new S).crossVectors(t.north,t.up),t.south=(t.south||new S).copy(t.north).negate(),t}function Im(s,t,e,n=new S){let i=Math.acos(fe.clamp(s.dot(t),-1,1));if(i<1e-6)return n.copy(s);let r=Math.sin(i);return n.copy(s).multiplyScalar(Math.sin((1-e)*i)/r).addScaledVector(t,Math.sin(e*i)/r).normalize()}function Ir(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new ue,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Pm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=Pm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Pm(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ee(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Ju(s,t){if(t===um)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Uo||t===Ac){let e=s.getIndex();if(e===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=e.count-2,i=[];if(t===Uo)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}var Lm=new ge({vertexColors:!0,roughness:.82,metalness:0}),Pr={};function Sb(s){return Pr[s]||(Pr[s]=new qe({vertexColors:!0}))}var Lr={};function ns(s,t){return Lr[s]=t,t}var ju=new Map;function Eb(s){let t=String(s);return ju.has(t)||ju.set(t,new ge({color:s,roughness:.8,metalness:0})),ju.get(t)}function Dr(s,t){let e=new Dt(s,Eb(t));return e.castShadow=!0,e.receiveShadow=!0,e}function Tb(s){let t=new Array(s);for(let e=0;e<s;e++)t[e]=e;return t}var Qu=new S;function Ab(s){if(Qu.setFromMatrixPosition(s),Qu.lengthSq()<1)return"c";let[t,e]=Rr(Qu.normalize());return`${Math.floor((t+90)/30)}_${Math.floor(e/40)}`}var Bo=class{constructor(t=!0){this.chunked=t,this.buckets=new Map}add(t,e,n,i=0,r=null,o=null){let a=t.clone();!o&&a.attributes.uv&&a.deleteAttribute("uv"),a.attributes.uv1&&a.deleteAttribute("uv1"),a.index||a.setIndex(Tb(a.attributes.position.count));let c=new Tt(e),l=a.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=c.r,h[d*3+1]=c.g,h[d*3+2]=c.b;a.setAttribute("color",new ee(h,3)),a.applyMatrix4(n);let u=r?`g:${r}`:o?`m:${o}`:"base",f=`${this.chunked?Ab(n):"c"}|${u}`;return this.buckets.has(f)||this.buckets.set(f,{kind:u,list:[]}),this.buckets.get(f).list.push(a),this}build(){let t=new $t;for(let{kind:e,list:n}of this.buckets.values()){let i=e==="base"?Lm:e.startsWith("g:")?Sb(e.slice(2)):Lr[e.slice(2)],r=new Dt(Ir(n),i||Lm);n.forEach(a=>a.dispose());let o=!e.startsWith("g:");r.castShadow=o,r.receiveShadow=o,t.add(r)}return this.buckets.clear(),t}};function is(s){let t=new Bo(!1);return s(t),t.build()}var Rb=new yn;function Ot(s,t,e,n=0,i=0,r=0){return new nt().makeRotationFromEuler(Rb.set(n,i,r)).setPosition(s,t,e)}var Fo=new S;function Fn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Fo.copy(t),Fo[n]=0,Fo.normalize();let l=.5*o/(o+a),h=1-Fo.angleTo(s)/c;return Math.sign(Fo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Nr=class extends Be{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new S,c=new S,l=new S(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new S,y=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Fn(g,c,"z","y",r,n),f[p+1]=1-Fn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-Fn(g,c,"z","y",r,n),f[p+1]=1-Fn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-Fn(g,c,"x","z",r,t),f[p+1]=Fn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Fn(g,c,"x","z",r,t),f[p+1]=1-Fn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Fn(g,c,"x","y",r,t),f[p+1]=1-Fn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=Fn(g,c,"x","y",r,t),f[p+1]=1-Fn(g,c,"y","x",r,e);break}}};var Pc=class extends Ci{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new af(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new yf(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new of(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new sf(e)}),this.register(function(e){return new vf(e)}),this.register(function(e){return new Mf(e)})}load(t,e,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=es.extractUrlBase(t);o=es.resolveURL(l,this.path)}else o=es.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Po(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r,o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Bm){try{o[Zt.KHR_BINARY_GLTF]=new bf(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Cf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Zt.KHR_MATERIALS_UNLIT:o[u]=new rf;break;case Zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new wf(r,this.dracoLoader);break;case Zt.KHR_TEXTURE_TRANSFORM:o[u]=new Sf;break;case Zt.KHR_MESH_QUANTIZATION:o[u]=new Ef;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}};function Cb(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}var Zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sf=class{constructor(t){this.parser=t,this.name=Zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new Tt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ts(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Er(h),l.distance=u;break;case"spot":l=new wc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},rf=class{constructor(){this.name=Zt.KHR_MATERIALS_UNLIT}getMaterialType(){return qe}extendParams(t,e,n){let i=[];t.color=new Tt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],on),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,te))}return Promise.all(i)}},of=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}},af=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new it(a,a)}return Promise.all(r)}},cf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},lf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},hf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,te)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},uf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ff=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],on),Promise.all(r)}},df=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},pf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,te)),Promise.all(r)}},mf=class{constructor(t){this.parser=t,this.name=Zt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}},gf=class{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},yf=class{constructor(t){this.parser=t,this.name=Zt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},xf=class{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},_f=class{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},vf=class{constructor(t){this.name=Zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Mf=class{constructor(t){this.name=Zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==kn.TRIANGLES&&l.mode!==kn.TRIANGLE_STRIP&&l.mode!==kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let y=new nt,m=new S,p=new be,v=new S(1,1,1),x=new lc(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,y.compose(m,p,v));for(let _ in c)if(_==="_COLOR_0"){let E=c[_];x.instanceColor=new ws(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Re.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Bm="glTF",ko=12,Dm={JSON:1313821514,BIN:5130562},bf=class{constructor(t){this.name=Zt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ko,r=new DataView(t,ko),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Dm.JSON){let l=new Uint8Array(t,ko+o,a);this.content=n.decode(l)}else if(c===Dm.BIN){let l=ko+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wf=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Af[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Af[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Ur[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let y=d.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(d)},a,l,on,f)})})}},Sf=class{constructor(){this.name=Zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Ef=class{constructor(){this.name=Zt.KHR_MESH_QUANTIZATION}},Lc=class extends Ji{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,y=g-l,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+u;for(let _=0;_!==a;_++){let E=o[y+_+a],w=o[y+_+c]*h,T=o[g+_+a],A=o[g+_]*h;r[_]=v*E+x*w+m*T+p*A}return r}},Ib=new be,Tf=class extends Lc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return Ib.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nm={9728:nn,9729:gn,9984:Uu,9985:uo,9986:Qs,9987:ii},Um={33071:vi,33648:_o,10497:Tn},tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Af={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Pb={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},ef={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),s.DefaultMaterial}function Ts(s,t,e){for(let n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ii(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Db(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Nb(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ub(s){let t,e=s.extensions&&s.extensions[Zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+nf(e.attributes):t=s.indices+":"+nf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+nf(s.targets[n]);return t}function nf(s){let t="",e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Rf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ob(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Bb=new nt,Cf=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new bc(this.options.manager):this.textureLoader=new Sc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ts(r,a,i),Ii(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Zt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(es.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=tf[i.type],a=Ur[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new ee(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=tf[i.type],l=Ur[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=e.cache.get(v);x||(y=new l(a,p*d,i.count*d/h),x=new wo(y,d/h),e.cache.add(v,x)),m=new So(x,c,f%d/h,g)}else a===null?y=new l(i.count*c):y=new l(a,f,i.count*c),m=new ee(y,c,g);if(i.sparse!==void 0){let p=tf.SCALAR,v=Ur[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new v(o[1],x,i.sparse.count*p),w=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new ee(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,A=E.length;T<A;T++){let M=E[T];if(m.setX(M,w[T*c]),c>=2&&m.setY(M,w[T*c+1]),c>=3&&m.setZ(M,w[T*c+2]),c>=4&&m.setW(M,w[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Nm[f.magFilter]||gn,h.minFilter=Nm[f.minFilter]||ii,h.wrapS=Um[f.wrapS]||Tn,h.wrapT=Um[f.wrapT]||Tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==gn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;e.isImageBitmapLoader===!0&&(g=function(y){let m=new Xe(y);m.needsUpdate=!0,f(m)}),e.load(es.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ii(u,o),u.userData.mimeType=o.mimeType||Ob(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Zt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Zn,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ss,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return ge}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],o,a={},c=r.extensions||{},l=[];if(c[Zt.KHR_MATERIALS_UNLIT]){let u=i[Zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,te)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=He);let h=r.alphaMode||ef.OPAQUE;if(h===ef.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ef.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qe&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==qe&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qe){let u=r.emissiveFactor;a.emissive=new Tt().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==qe&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,te)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ii(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ts(i,u,r),u})}createUniqueName(t){let e=ye.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Om(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=Ub(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Zt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Om(new ue,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Lb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let y=h[d],m=o[d],p,v=l[d];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new oc(y,v):new Dt(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?p.geometry=Ju(p.geometry,Ac):m.mode===kn.TRIANGLE_FAN&&(p.geometry=Ju(p.geometry,Uo));else if(m.mode===kn.LINES)p=new vr(y,v);else if(m.mode===kn.LINE_STRIP)p=new _r(y,v);else if(m.mode===kn.LINE_LOOP)p=new fc(y,v);else if(m.mode===kn.POINTS)p=new si(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nb(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Ii(p,r),m.extensions&&Ts(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ts(i,u[0],r),u[0];let f=new $t;r.extensions&&Ts(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Pe(fe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ii(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new nt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new cc(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],y=d.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let v=0,x=f.length;v<x;v++){let _=f[v],E=d[v],w=g[v],T=y[v],A=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,E,w,T,A);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new br(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Bb)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Eo:l.length>1?h=new $t:l.length===1?h=l[0]:h=new Re,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ii(h,r),r.extensions&&Ts(n,h,r),r.matrix!==void 0){let u=new nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new $t;n.name&&(r.name=i.createUniqueName(n.name)),Ii(r,n),n.extensions&&Ts(e,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof An||f instanceof Xe)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let o=[],a=t.name?t.name:t.uuid,c=[];ss[r.path]===ss.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ss[r.path]){case ss.weights:l=Ti;break;case ss.rotation:l=Ai;break;case ss.position:case ss.scale:l=Ri;break;default:switch(n.itemSize){case 1:l=Ti;break;case 2:case 3:default:l=Ri;break}break}let h=i.interpolation!==void 0?Pb[i.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+ss[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Rf(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Ai?Tf:Lc;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fb(s,t,e){let n=t.attributes,i=new ce;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new S(c[0],c[1],c[2]),new S(l[0],l[1],l[2])),a.normalized){let h=Rf(Ur[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new S,c=new S;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let y=Rf(Ur[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new fn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Om(s,t,e){let n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Af[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){let o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Ii(s,t),Fb(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Db(s,t.targets,e):s})}function If(s){let t=new Map,e=new Map,n=s.clone();return Fm(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Fm(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Fm(s.children[n],t.children[n],e)}var km={car:["ambulance","delivery","garbage-truck","hatchback-sports","police","sedan","sedan-sports","suv","taxi","van"],"city-commercial":["building-a","building-b","building-c","building-d","building-e","building-f","building-g","building-h","building-i","building-j","building-k","building-l","building-m","building-n","building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e","detail-awning","detail-awning-wide","detail-overhang","detail-overhang-wide","detail-parasol-a","detail-parasol-b","low-detail-building-a","low-detail-building-b","low-detail-building-c","low-detail-building-d","low-detail-building-e","low-detail-building-f","low-detail-building-g","low-detail-building-h","low-detail-building-i","low-detail-building-j","low-detail-building-k","low-detail-building-l","low-detail-building-m","low-detail-building-n","low-detail-building-wide-a","low-detail-building-wide-b"],"city-roads":["construction-barrier","construction-cone","dumpster","light-curved","light-curved-double","light-square","road-sign-street","road-sign-warning","sign-highway","traffic-light"],"city-suburban":["fence-low","path-stones-short","planter","tree-large","tree-small"],food:["bag","banana","barrel","bowl","bowl-broth","bowl-soup","bread","cake","chinese","chopstick","cocktail","coconut","coconut-half","cooking-spatula","cup-coffee","cup-saucer","cup-tea","cutting-board-japanese","dim-sum","egg","egg-cooked","egg-half","fish","frappe","frying-pan","glass","ice-cream","ice-cream-cup","lemon","loaf","meat-ribs","mug","mussel","orange","pancakes","pineapple","plate","plate-dinner","popsicle","pot","pot-stew","rice-ball","skewer","skewer-vegetables","soda-bottle","soda-can","soy","steamer","watermelon"],furniture:["bench","benchCushion","books","cardboardBoxClosed","cardboardBoxOpen","ceilingFan","chair","chairRounded","kitchenBlender","kitchenCabinet","kitchenCoffeeMachine","kitchenFridge","kitchenFridgeLarge","kitchenMicrowave","kitchenSink","kitchenStove","lampRoundFloor","loungeChair","loungeChairRelax","plantSmall1","plantSmall2","plantSmall3","pottedPlant","radio","sideTable","speaker","stoolBar","table","tableRound","televisionVintage","trashcan"],"mini-characters":["character-female-a","character-female-b","character-female-c","character-female-d","character-female-e","character-female-f","character-male-a","character-male-b","character-male-c","character-male-d","character-male-e","character-male-f"],nature:["crops_bambooStageB","flower_purpleA","flower_purpleB","flower_redA","flower_redB","flower_yellowA","flower_yellowB","grass","grass_large","grass_leafs","grass_leafsLarge","hanging_moss","lily_large","lily_small","log","mushroom_red","plant_bush","plant_bushDetailed","plant_bushLarge","plant_bushSmall","plant_flatShort","plant_flatTall","pot_large","pot_small","rock_largeA","rock_largeB","rock_smallA","rock_smallB","rock_smallC","rock_tallA","stone_largeA","stone_smallA","stump_round","tree_default","tree_detailed","tree_detailed_dark","tree_fat","tree_oak","tree_oak_dark","tree_palmBend","tree_palmDetailedShort","tree_palmDetailedTall","tree_palmTall","tree_plateau","tree_plateau_dark","tree_simple","tree_small","tree_tall","tree_tall_dark"]};var Dc=new Map,Pf=new Map,Hm={"nature/leafsGreen":"#58a83f","nature/leafsDark":"#2f8038","nature/grass":"#74c04c","nature/woodBark":"#8d5b3b","nature/woodBarkDark":"#6e4630","nature/stone":"#b8b2a6","nature/dirt":"#9a7656"};async function Gm(s){let t=new Pc,e=[];for(let[o,a]of Object.entries(km))for(let c of a)e.push([o,c]);let n=0,i=0,r=async()=>{for(;i<e.length;){let[o,a]=e[i++];for(let c=0;c<4;c++)try{zb(o,a,await t.loadAsync(`assets/kenney/${o}/${a}.glb`));break}catch(l){c===3?console.warn(`model ${o}/${a} failed to load`,l?.message||l):await new Promise(h=>setTimeout(h,300*(c+1)))}s?.(++n/e.length)}};await Promise.all(Array.from({length:8},r))}var Hb={walk:.35,sprint:.2};function zm(s,t){let e=`${s}/${t.name}`;return Pf.has(e)?Pf.get(e):(t.metalness=0,t.roughness=Math.max(.65,t.roughness??1),Hm[e]&&t.color.set(Hm[e]),t.map&&(t.map.anisotropy=4),Pf.set(e,t),t)}function zb(s,t,e){let n=e.scene;n.updateMatrixWorld(!0);let i=[],r=!1;n.traverse(a=>{a.isMesh&&(a.material=Array.isArray(a.material)?a.material.map(c=>zm(s,c)):zm(s,a.material),a.castShadow=!0,a.receiveShadow=!0,a.isSkinnedMesh?r=!0:i.push({geo:a.geometry,mat:a.material,m:a.matrixWorld.clone()}))});for(let a of e.animations){let c=Hb[a.name];if(c!==void 0){for(let l of a.tracks)if(l.name==="root.position")for(let h=1;h<l.values.length;h+=3)l.values[h]*=c}}let o=new ce().setFromObject(n);Dc.set(t,{scene:n,parts:i,box:o,size:o.getSize(new S),anims:e.animations,skinned:r,pack:s})}function Wm(s){return Dc.has(s)}function rs(s){let t=Dc.get(s);if(!t)throw new Error(`unknown model "${s}"`);return t}function Ho(s,t={}){let e=rs(s),n=t.s??1;t.h&&(n=t.h/e.size.y),t.w&&(n=t.w/Math.max(e.size.x,e.size.z));let i=Array.isArray(n)?new S(...n):new S(n,n,n),r=e.box.getCenter(new S),o=new S(t.center?-r.x:0,t.ground===!1?0:-e.box.min.y,t.center?-r.z:0);return{mat:new nt().makeScale(i.x,i.y,i.z).multiply(new nt().makeTranslation(o.x,o.y,o.z)),scale:i}}function Vm(s){let t=new S().setFromMatrixPosition(s).normalize(),[e,n]=Rr(t);return`${Math.floor((e+90)/30)}_${Math.floor(n/40)}`}var Lf=class{constructor(){this.buckets=new Map}add(t,e,n={}){if(!Dc.has(t)){console.warn("missing model",t);return}let i=`${t}|${Vm(e)}|${n.shadow!==!1}`;this.buckets.has(i)||this.buckets.set(i,{name:t,chunk:Vm(e),list:[],shadow:n.shadow!==!1}),this.buckets.get(i).list.push(e.clone())}build(){let t=new Map,e=new nt;for(let{name:i,chunk:r,list:o,shadow:a}of this.buckets.values())for(let c of rs(i).parts){let l=Object.keys(c.geo.attributes).sort().join(",")+(c.geo.index?":i":":n"),h=`${r}|${c.mat.uuid}|${a}|${l}`;t.has(h)||t.set(h,{mat:c.mat,shadow:a,geos:[]});let u=t.get(h);for(let f of o)u.geos.push(c.geo.clone().applyMatrix4(e.multiplyMatrices(f,c.m)))}let n=new $t;for(let{mat:i,shadow:r,geos:o}of t.values()){let a=Ir(o);if(o.forEach(l=>l.dispose()),!a)continue;let c=new Dt(a,i);c.castShadow=r,c.receiveShadow=!0,n.add(c)}return this.buckets.clear(),n}},Nc=new Lf;function Uc(s){let t=rs(s);return t.skinned?If(t.scene):t.scene.clone(!0)}function Xm(s){let t=rs(s),e=If(t.scene);e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.frustumCulled=!1)});let n=new Ec(e),i={};for(let r of t.anims)i[r.name]=n.clipAction(r);return{root:e,mixer:n,actions:i,height:t.size.y}}function Pi(s=1){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var Oc=new nt,Km=new nt,Vb=new yn,Gb=new S,Df=new S,qm=new S,Nf=class s{constructor(t,e=0,n=0,i=0){this.site=t,this.ox=e,this.oz=n,this.orot=i,this.c=Math.cos(i),this.s=Math.sin(i)}tf(t,e){return[this.ox+t*this.c+e*this.s,this.oz-t*this.s+e*this.c]}sub(t,e,n=0){let[i,r]=this.tf(t,e);return new s(this.site,i,r,this.orot+n)}dir(t,e,n){let[i,r]=this.tf(t,e);return this.site.dirAt(i,r,n)}matrix(t,e,n=0,i=0,r=0,o=0,a=new nt){let[c,l]=this.tf(t,e);return this.site.frameMatrix(c,l,this.orot+n,a),Oc.makeRotationFromEuler(Vb.set(r,0,o)),Oc.setPosition(0,i,0),a.multiply(Oc)}put(t,e,n,i=0,r=0){return this.matrix(e,n,i,r).decompose(t.position,t.quaternion,t.scale),t}add(t,e,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,r,o.rx||0,o.rz||0);return o.ry&&a.multiply(Km.makeRotationY(o.ry)),this.site.b.add(t,e,a,0,o.glow,o.mat),this}box(t,e,n,i,r,o,a={}){return this.add(new Be(n,i,r),o,t,e,(a.y||0)+i/2,a)}rbox(t,e,n,i,r,o,a={}){let c=Math.min(a.r??.08,n/2,i/2,r/2);return this.add(new Nr(n,i,r,a.segs??2,c),o,t,e,(a.y||0)+i/2,a)}lathe(t,e,n,i,r={}){let o=new Ki(n.map(([a,c])=>new it(a,c)),r.seg||24);return(r.sx||r.sz)&&o.scale(r.sx||1,1,r.sz||1),this.add(o,i,t,e,r.y||0,r)}extrude(t,e,n,i,r,o={}){let a=new Mr(n,{depth:i,bevelEnabled:!!o.bevel,bevelSize:o.bevel||0,bevelThickness:o.bevel||0,bevelSegments:2,curveSegments:o.curveSeg||12});return a.rotateX(-Math.PI/2),this.add(a,r,t,e,o.y||0,o)}tube(t,e,n,i,r,o={}){let a=new On(n.map(c=>new S(...c)),!!o.closed);return this.add(new Zi(a,o.tseg||Math.max(8,n.length*6),i,o.rseg||6,!!o.closed),r,t,e,0,o)}model(t,e,n,i={}){if(!Wm(t))return this;let{mat:r,scale:o}=Ho(t,i),a=this.matrix(e,n,i.rot||0,i.y||0,i.rx||0,i.rz||0).multiply(r);return Nc.add(t,a,i),i.solid&&this.modelSolid(t,e,n,i,o),this}spawn(t,e,n,i={}){let r=new $t,o=Uc(t),{mat:a}=Ho(t,i);return a.decompose(o.position,o.quaternion,o.scale),r.add(o),this.put(r,e,n,i.rot||0,i.y||0),this.site.group.add(r),r}modelSolid(t,e,n,i,r){if(Array.isArray(i.solid))return this.solid(e,n,i.solid[0],i.solid[1],i.rot||0);let o=rs(t).size,a=o.x*r.x,c=o.z*r.z;return i.solid==="circle"?this.solidCircle(e,n,Math.min(a,c)*.35):this.solid(e,n,a*.9,c*.9,i.rot||0)}cyl(t,e,n,i,r,o,a={}){let c=new Kt(n,i,r,a.seg||12);return a.spin&&c.rotateY(a.spin),this.add(c,o,t,e,(a.y||0)+r/2,a)}cone(t,e,n,i,r,o={}){let a=new ri(n,i,o.seg||12);return o.spin&&a.rotateY(o.spin),o.sz&&a.scale(1,1,o.sz),this.add(a,r,t,e,(o.y||0)+i/2,o)}ball(t,e,n,i,r={}){let o=r.sy||1,a=new Xt(n,r.seg||12,r.hseg||8);return(r.sx||r.sy||r.sz)&&a.scale(r.sx||1,o,r.sz||1),this.add(a,i,t,e,(r.y||0)+n*o,r)}dome(t,e,n,i,r={}){let o=new Xt(n,r.seg||24,r.hseg||10,0,Math.PI*2,0,Math.PI/2);return r.sy&&o.scale(1,r.sy,1),this.add(o,i,t,e,r.y||0,r)}raw(t,e,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,0).multiply(r);return this.site.b.add(t,e,a,0,o.glow,o.mat),this}solid(t,e,n,i,r=0){let[o,a]=this.tf(t,e),c=this.orot+r;return this.site.colliders.push({x:o,z:a,hw:n/2,hd:i/2,c:Math.cos(c),s:Math.sin(c)}),this}camSolid(t,e,n,i,r=0){return this.solid(t,e,n,i,r),this.site.colliders[this.site.colliders.length-1].camOnly=!0,this}solidCircle(t,e,n){let[i,r]=this.tf(t,e);return this.site.colliders.push({x:i,z:r,r:n}),this}paintRect(t,e,n,i,r,o=0,a=!1){let c=this.sub(t,e,o),l=[[-n/2,-i/2],[n/2,-i/2],[n/2,i/2],[-n/2,i/2]].map(([h,u])=>c.tf(h,u));return(a?this.site.paintsOver:this.site.paints).push({pts:l,color:r}),this}paintCircle(t,e,n,i,r=!1){let o=[];for(let a=0;a<48;a++){let c=a/48*Math.PI*2;o.push(this.tf(t+Math.cos(c)*n,e+Math.sin(c)*n))}return(r?this.site.paintsOver:this.site.paints).push({pts:o,color:i}),this}water(t,e,n,i="#4fb0d8"){return this.paintCircle(t,e,n+.5,"#bfe6f2"),this.paintCircle(t,e,n,i),this.site.world.addWater(this.dir(t,e),n),this}sign(t,e,n,i={}){let r=i.w||3,o=i.h||.8,a=i.y??2,c=i.rot||0;i.board!==!1&&this.box(t,e,r+.2,o+.2,.12,i.frame||"#3a3340",{y:a-o/2-.1,rot:c,ol:.03});let l=new Dt(new xn(r,o),new qe({map:Wb(n,i,r/o),toneMapped:!1})),h=this.matrix(t,e,c,a);return h.multiply(Oc.makeTranslation(0,0,i.board!==!1?.07:.02)),h.decompose(l.position,l.quaternion,l.scale),this.site.group.add(l),l}},ai=class extends Nf{constructor(t,e,n){super(null),this.site=this,this.b=e,this.group=n,this.center=t.clone().normalize();let i=Cr(this.center);this.east=i.east,this.south=i.south}dirAt(t,e,n=new S){return n.copy(this.center).multiplyScalar(Ft).addScaledVector(this.east,t).addScaledVector(this.south,e).normalize()}frameMatrix(t,e,n,i){let r=this.dirAt(t,e,Gb);return Df.copy(this.east).addScaledVector(r,-r.dot(this.east)).normalize(),qm.crossVectors(Df,r),i.makeBasis(Df,r,qm),n&&i.multiply(Km.makeRotationY(n)),i.setPosition(r.x*Ft,r.y*Ft,r.z*Ft),i}toLocal(t){let e=Ft/t.dot(this.center);return[e*t.dot(this.east),e*t.dot(this.south)]}},Bc=class extends ai{constructor(t,e,n){super(Cm(t.lat,t.lon),e,new $t),this.def=t,this.id=t.id,this.world=n,this.colliders=[],this.paints=[],this.paintsOver=[],this.spots={},this.coins=[],this.updaters=[],this.cosNear=Math.cos(34/Ft),n.sites.push(this)}hit(t,e){if(t.dot(this.center)<this.cosNear)return!1;let[n,i]=this.toLocal(t);for(let r of this.colliders){if(r.camOnly)continue;let o=n-r.x,a=i-r.z;if(r.r!==void 0){let c=r.r+e;if(o*o+a*a<c*c)return!0}else{let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw+e&&Math.abs(l)<r.hd+e)return!0}}return!1}near(t,e){return t.dot(this.center)>Math.cos(e/Ft)}},Ym='"Baloo 2", "Nunito", system-ui, sans-serif',$m=["#e2383f","#f39c32","#f3c93a","#4caf50","#2f8fd8","#8e5ad8"];function Wb(s,t={},e=4){let i=Math.max(64,Math.round(512/e)),r=document.createElement("canvas");r.width=512,r.height=i;let o=r.getContext("2d");if(o.fillStyle=t.bg||"#2e7d5b",o.fillRect(0,0,512,i),t.border!==!1){o.strokeStyle=t.fg||"#fff",o.lineWidth=Math.max(3,i*.05);let u=i*.09;o.strokeRect(u,u,512-2*u,i-2*u)}let a=String(s).split(`
`),c=i*.62/a.length;o.font=`800 ${c}px ${Ym}`;let l=Math.max(...a.map(u=>o.measureText(u).width));l>512*.86&&(c*=512*.86/l),o.font=`800 ${c}px ${Ym}`,o.textBaseline="middle",a.forEach((u,f)=>{let d=i/2+(f-(a.length-1)/2)*c*1.08+c*.06;if(t.rainbow){o.textAlign="left";let g=512/2-o.measureText(u).width/2;[...u].forEach((y,m)=>{o.fillStyle=$m[m%$m.length],o.fillText(y,g,d),g+=o.measureText(y).width})}else o.textAlign="center",o.fillStyle=t.fg||"#fff",o.fillText(u,512/2,d)});let h=new sn(r);return h.colorSpace=te,h.anisotropy=4,h}var Zm=Math.pow(2,-24),Fc=Symbol("SKIP_GENERATION");function Xb(s){return s.index?s.index.count:s.attributes.position.count}function ci(s){return Xb(s)/3}function qb(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function Jm(s,t){if(!s.index){let e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=qb(e,n);s.setIndex(new ee(i,1));for(let r=0;r<e;r++)i[r]=r}}function Uf(s,t){let e=ci(s),n=t||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function Of(s,t){if(!s.groups||!s.groups.length)return Uf(s,t);let e=[],n=new Set,i=t||s.drawRange,r=i.start/3,o=(i.start+i.count)/3;for(let c of s.groups){let l=c.start/3,h=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,h))}let a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){let l=a[c],h=a[c+1];e.push({offset:Math.floor(l),count:Math.floor(h-l)})}return e}function jm(s,t){let e=ci(s),n=Of(s,t).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(e-i.offset,i.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function kc(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,f=1/0,d=1/0,g=-1/0,y=-1/0,m=-1/0;for(let p=t*6,v=(t+e)*6;p<v;p+=6){let x=s[p+0],_=s[p+1],E=x-_,w=x+_;E<r&&(r=E),w>c&&(c=w),x<u&&(u=x),x>g&&(g=x);let T=s[p+2],A=s[p+3],M=T-A,b=T+A;M<o&&(o=M),b>l&&(l=b),T<f&&(f=T),T>y&&(y=T);let I=s[p+4],N=s[p+5],L=I-N,U=I+N;L<a&&(a=L),U>h&&(h=U),I<d&&(d=I),I>m&&(m=I)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=h,i[0]=u,i[1]=f,i[2]=d,i[3]=g,i[4]=y,i[5]=m}function Qm(s,t=null,e=null,n=null){let i=s.attributes.position,r=s.index?s.index.array:null,o=ci(s),a=i.normalized,c;t===null?(c=new Float32Array(o*6),e=0,n=o):(c=t,e=e||0,n=n||o);let l=i.array,h=i.offset||0,u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);let f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let g=d*3,y=d*6,m=g+0,p=g+1,v=g+2;r&&(m=r[m],p=r[p],v=r[v]),a||(m=m*u+h,p=p*u+h,v=v*u+h);for(let x=0;x<3;x++){let _,E,w;a?(_=i[f[x]](m),E=i[f[x]](p),w=i[f[x]](v)):(_=l[m+x],E=l[p+x],w=l[v+x]);let T=_;E<T&&(T=E),w<T&&(T=w);let A=_;E>A&&(A=E),w>A&&(A=w);let M=(A-T)/2,b=x*2;c[y+b+0]=T+M,c[y+b+1]=M+(Math.abs(T)+M)*Zm}}return c}function xe(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function Bf(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function Ff(s,t){t.set(s)}function kf(s,t,e){let n,i;for(let r=0;r<3;r++){let o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function zo(s,t,e){for(let n=0;n<3;n++){let i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Or(s){let t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}var Li=32,$b=(s,t)=>s.candidate-t.candidate,os=new Array(Li).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Hc=new Float32Array(6);function n0(s,t,e,n,i,r){let o=-1,a=0;if(r===0)o=Bf(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=Bf(s),o!==-1&&(a=Kb(e,n,i,o));else if(r===2){let c=Or(s),l=1.25*i,h=n*6,u=(n+i)*6;for(let f=0;f<3;f++){let d=t[f],m=(t[f+3]-d)/Li;if(i<Li/4){let p=[...os];p.length=i;let v=0;for(let _=h;_<u;_+=6,v++){let E=p[v];E.candidate=e[_+2*f],E.count=0;let{bounds:w,leftCacheBounds:T,rightCacheBounds:A}=E;for(let M=0;M<3;M++)A[M]=1/0,A[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0;zo(_,e,w)}p.sort($b);let x=i;for(let _=0;_<x;_++){let E=p[_];for(;_+1<x&&p[_+1].candidate===E.candidate;)p.splice(_+1,1),x--}for(let _=h;_<u;_+=6){let E=e[_+2*f];for(let w=0;w<x;w++){let T=p[w];E>=T.candidate?zo(_,e,T.rightCacheBounds):(zo(_,e,T.leftCacheBounds),T.count++)}}for(let _=0;_<x;_++){let E=p[_],w=E.count,T=i-E.count,A=E.leftCacheBounds,M=E.rightCacheBounds,b=0;w!==0&&(b=Or(A)/c);let I=0;T!==0&&(I=Or(M)/c);let N=1+1.25*(b*w+I*T);N<l&&(o=f,l=N,a=E.candidate)}}else{for(let x=0;x<Li;x++){let _=os[x];_.count=0,_.candidate=d+m+x*m;let E=_.bounds;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0}for(let x=h;x<u;x+=6){let w=~~((e[x+2*f]-d)/m);w>=Li&&(w=Li-1);let T=os[w];T.count++,zo(x,e,T.bounds)}let p=os[Li-1];Ff(p.bounds,p.rightCacheBounds);for(let x=Li-2;x>=0;x--){let _=os[x],E=os[x+1];kf(_.bounds,E.rightCacheBounds,_.rightCacheBounds)}let v=0;for(let x=0;x<Li-1;x++){let _=os[x],E=_.count,w=_.bounds,A=os[x+1].rightCacheBounds;E!==0&&(v===0?Ff(w,Hc):kf(w,Hc,Hc)),v+=E;let M=0,b=0;v!==0&&(M=Or(Hc)/c);let I=i-v;I!==0&&(b=Or(A)/c);let N=1+1.25*(M*v+b*I);N<l&&(o=f,l=N,a=_.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Kb(s,t,e,n){let i=0;for(let r=t,o=t+e;r<o;r++)i+=s[r*6+n*2];return i/e}var Br=class{constructor(){this.boundingData=new Float32Array(6)}};function i0(s,t,e,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let h=0;h<3;h++){let u=t[o*3+h];t[o*3+h]=t[a*3+h],t[a*3+h]=u}for(let h=0;h<6;h++){let u=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=u}o++,a--}else return o}}function s0(s,t,e,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let h=s[o];s[o]=s[a],s[a]=h;for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function Ce(s,t){return t[s+15]===65535}function De(s,t){return t[s+6]}function Fe(s,t){return t[s+14]}function Ye(s){return s+8}function $e(s,t){return t[s+6]}function zc(s,t){return t[s+7]}var r0,Vo,Vc,o0,Zb=Math.pow(2,32);function Gc(s){return"count"in s?1:1+Gc(s.left)+Gc(s.right)}function a0(s,t,e){return r0=new Float32Array(e),Vo=new Uint32Array(e),Vc=new Uint16Array(e),o0=new Uint8Array(e),Hf(s,t)}function Hf(s,t){let e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)r0[e+o]=r[o];if(i)if(t.buffer){let o=t.buffer;o0.set(new Uint8Array(o),s);for(let a=s,c=s+o.byteLength;a<c;a+=32){let l=a/2;Ce(l,Vc)||(Vo[a/4+6]+=e)}return s+o.byteLength}else{let o=t.offset,a=t.count;return Vo[e+6]=o,Vc[n+14]=a,Vc[n+15]=65535,s+32}else{let o=t.left,a=t.right,c=t.splitAxis,l;if(l=Hf(s+32,o),l/4>Zb)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Vo[e+6]=l/4,l=Hf(l,a),Vo[e+7]=c,l}}function Jb(s,t){let e=(s.index?s.index.count:s.attributes.position.count)/3,n=e>2**16,i=n?4:2,r=t?new SharedArrayBuffer(e*i):new ArrayBuffer(e*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function jb(s,t,e,n,i){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:h}=i,u=s._indirectBuffer,f=s.geometry,d=f.index?f.index.array:null,g=h?s0:i0,y=ci(f),m=new Float32Array(6),p=!1,v=new Br;return kc(t,e,n,v.boundingData,m),_(v,e,n,m),v;function x(E){l&&l(E/y)}function _(E,w,T,A=null,M=0){if(!p&&M>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),T<=a||M>=r)return x(w+T),E.offset=w,E.count=T,E;let b=n0(E.boundingData,A,t,w,T,c);if(b.axis===-1)return x(w+T),E.offset=w,E.count=T,E;let I=g(u,d,t,w,T,b);if(I===w||I===w+T)x(w+T),E.offset=w,E.count=T;else{E.splitAxis=b.axis;let N=new Br,L=w,U=I-w;E.left=N,kc(t,L,U,N.boundingData,m),_(N,L,U,m,M+1);let H=new Br,k=I,K=T-U;E.right=H,kc(t,k,K,H.boundingData,m),_(H,k,K,m,M+1)}return E}}function c0(s,t){let e=s.geometry;t.indirect&&(s._indirectBuffer=Jb(e,t.useSharedArrayBuffer),jm(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Jm(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Qm(e),r=t.indirect?Uf(e,t.range):Of(e,t.range);s._roots=r.map(o=>{let a=jb(s,i,o.offset,o.count,t),c=Gc(a),l=new n(32*c);return a0(0,a,l),l})}var _n=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};_n.prototype.setFromBox=function(){let s=new S;return function(e,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*h+r.z*(1-h);let u=e.dot(s);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}}();var SE=function(){let s=new _n;return function(e,n){let i=e.points,r=e.satAxes,o=e.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let h=0;h<3;h++){let u=o[h],f=r[h];if(s.setFromPoints(f,a),u.isSeparated(s))return!1}for(let h=0;h<3;h++){let u=l[h],f=c[h];if(s.setFromPoints(f,i),u.isSeparated(s))return!1}}}();var Qb=function(){let s=new S,t=new S,e=new S;return function(i,r,o){let a=i.start,c=s,l=r.start,h=t;e.subVectors(a,l),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let u=e.dot(h),f=h.dot(c),d=h.dot(h),g=e.dot(c),m=c.dot(c)*d-f*f,p,v;m!==0?p=(u*f-g*d)/m:p=0,v=(u+p*f)/d,o.x=p,o.y=v}}(),Wo=function(){let s=new it,t=new S,e=new S;return function(i,r,o,a){Qb(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;c<0?h=i.start:h=i.end;let u;l<0?u=r.start:u=r.end;let f=t,d=e;if(i.closestPointToPoint(u,!0,t),r.closestPointToPoint(h,!0,e),f.distanceToSquared(u)<=d.distanceToSquared(h)){o.copy(f),a.copy(u);return}else{o.copy(h),a.copy(d);return}}}}(),l0=function(){let s=new S,t=new S,e=new Sn,n=new rn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:h,c:u}=o;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let y=o.getPlane(e);if(Math.abs(y.distanceToPoint(c))<=a){let p=y.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}}();var tw=1e-15;function zf(s){return Math.abs(s)<tw}var Ze=class extends un{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new S),this.satBounds=new Array(4).fill().map(()=>new _n),this.points=[this.a,this.b,this.c],this.sphere=new fn,this.plane=new Sn,this.needsUpdate=!0}intersectsSphere(t){return l0(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=r[1],h=o[1];l.subVectors(t,e),h.setFromPoints(l,i);let u=r[2],f=o[2];u.subVectors(e,n),f.setFromPoints(u,i);let d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ze.prototype.closestPointToSegment=function(){let s=new S,t=new S,e=new rn;return function(i,r=null,o=null){let{start:a,end:c}=i,l=this.points,h,u=1/0;for(let f=0;f<3;f++){let d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Wo(e,i,s,t),h=s.distanceToSquared(t),h<u&&(u=h,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),h=a.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),h=c.distanceToSquared(s),h<u&&(u=h,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(u)}}();Ze.prototype.intersectsTriangle=function(){let s=new Ze,t=new Array(3),e=new Array(3),n=new _n,i=new _n,r=new S,o=new S,a=new S,c=new S,l=new S,h=new rn,u=new rn,f=new rn,d=new S;function g(y,m,p){let v=y.points,x=0,_=-1;for(let E=0;E<3;E++){let{start:w,end:T}=h;w.copy(v[E]),T.copy(v[(E+1)%3]),h.delta(o);let A=zf(m.distanceToPoint(w));if(zf(m.normal.dot(o))&&A){p.copy(h),x=2;break}let M=m.intersectLine(h,d);if(!M&&A&&d.copy(w),(M||A)&&!zf(d.distanceTo(T))){if(x<=1)(x===1?p.start:p.end).copy(d),A&&(_=x);else if(x>=2){(_===1?p.start:p.end).copy(d),x=2;break}if(x++,x===2&&_===-1)break}}return x}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);let x=this.plane,_=m.plane;if(Math.abs(x.normal.dot(_.normal))>1-1e-10){let E=this.satBounds,w=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){let b=E[M],I=w[M];if(n.setFromPoints(I,e),b.isSeparated(n))return!1}let T=m.satBounds,A=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){let b=T[M],I=A[M];if(n.setFromPoints(I,t),b.isSeparated(n))return!1}for(let M=0;M<4;M++){let b=w[M];for(let I=0;I<4;I++){let N=A[I];if(r.crossVectors(b,N),n.setFromPoints(r,t),i.setFromPoints(r,e),n.isSeparated(i))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let E=g(this,_,u);if(E===1&&m.containsPoint(u.end))return p&&(p.start.copy(u.end),p.end.copy(u.end)),!0;if(E!==2)return!1;let w=g(m,x,f);if(w===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(w!==2)return!1;if(u.delta(a),f.delta(c),a.dot(c)<0){let L=f.start;f.start=f.end,f.end=L}let T=u.start.dot(a),A=u.end.dot(a),M=f.start.dot(a),b=f.end.dot(a),I=A<M,N=T<b;return T!==b&&M!==A&&I===N?!1:(p&&(l.subVectors(u.start,f.start),l.dot(a)>0?p.start.copy(u.start):p.start.copy(f.start),l.subVectors(u.end,f.end),l.dot(a)<0?p.end.copy(u.end):p.end.copy(f.end)),!0)}}}();Ze.prototype.distanceToPoint=function(){let s=new S;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();Ze.prototype.distanceToTriangle=function(){let s=new S,t=new S,e=["a","b","c"],n=new rn,i=new rn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let h=1/0;for(let u=0;u<3;u++){let f,d=e[u],g=o[d];this.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<h&&(h=f,a&&a.copy(s),c&&c.copy(g));let y=this[d];o.closestPointToPoint(y,s),f=y.distanceToSquared(s),f<h&&(h=f,a&&a.copy(y),c&&c.copy(s))}for(let u=0;u<3;u++){let f=e[u],d=e[(u+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){let y=e[g],m=e[(g+1)%3];i.set(o[y],o[m]),Wo(n,i,s,t);let p=s.distanceToSquared(t);p<h&&(h=p,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(h)}}();var Le=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new S,this.max=new S,this.matrix=new nt,this.invMatrix=new nt,this.points=new Array(8).fill().map(()=>new S),this.satAxes=new Array(3).fill().map(()=>new S),this.satBounds=new Array(3).fill().map(()=>new _n),this.alignedSatBounds=new Array(3).fill().map(()=>new _n),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Le.prototype.update=function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let f=1*l|2*h|4*u,d=i[f];d.x=l?n.x:e.x,d.y=h?n.y:e.y,d.z=u?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let h=o[l],u=r[l],f=1<<l,d=i[f];h.subVectors(a,d),u.setFromPoints(h,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Le.prototype.intersectsBox=function(){let s=new _n;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let l=o[c],h=r[c];if(s.setFromBox(l,e),h.isSeparated(s))return!1}return!0}}();Le.prototype.intersectsTriangle=function(){let s=new Ze,t=new Array(3),e=new _n,n=new _n,i=new S;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let l=o.satBounds,h=o.satAxes,u=this.points;for(let f=0;f<3;f++){let d=l[f],g=h[f];if(e.setFromPoints(g,u),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=c[f];for(let g=0;g<4;g++){let y=h[g];if(i.crossVectors(d,y),e.setFromPoints(i,t),n.setFromPoints(i,u),e.isSeparated(n))return!1}}return!0}}();Le.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Le.prototype.distanceToPoint=function(){let s=new S;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();Le.prototype.distanceToBox=function(){let s=["x","y","z"],t=new Array(12).fill().map(()=>new rn),e=new Array(12).fill().map(()=>new rn),n=new S,i=new S;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let h=a*a,u=o.min,f=o.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];i.copy(p).clamp(u,f);let v=p.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(i),v<h))return Math.sqrt(v)}let y=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){let x=(m+1)%3,_=(m+2)%3,E=p<<x|v<<_,w=1<<m|p<<x|v<<_,T=d[E],A=d[w];t[y].set(T,A);let b=s[m],I=s[x],N=s[_],L=e[y],U=L.start,H=L.end;U[b]=u[b],U[I]=p?u[I]:f[I],U[N]=v?u[N]:f[I],H[b]=f[b],H[I]=p?u[I]:f[I],H[N]=v?u[N]:f[I],y++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=m?f.x:u.x,i.y=p?f.y:u.y,i.z=v?f.z:u.z,this.closestPointToPoint(i,n);let x=i.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(i),x<h))return Math.sqrt(x)}for(let m=0;m<12;m++){let p=t[m];for(let v=0;v<12;v++){let x=e[v];Wo(p,x,n,i);let _=n.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<h))return Math.sqrt(_)}}return Math.sqrt(g)}}();var as=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Vf=class extends as{constructor(){super(()=>new Ze)}},dn=new Vf;var Gf=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},se=new Gf;var cs,kr,Fr=[],Xc=new as(()=>new ce);function h0(s,t,e,n,i,r){cs=Xc.getPrimitive(),kr=Xc.getPrimitive(),Fr.push(cs,kr),se.setBuffer(s._roots[t]);let o=Wf(0,s.geometry,e,n,i,r);se.clearBuffer(),Xc.releasePrimitive(cs),Xc.releasePrimitive(kr),Fr.pop(),Fr.pop();let a=Fr.length;return a>0&&(kr=Fr[a-1],cs=Fr[a-2]),o}function Wf(s,t,e,n,i=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=se,h=s*2;if(Ce(h,c)){let f=De(s,l),d=Fe(h,c);return xe(s,a,cs),n(f,d,!1,o,r+s,cs)}else{let b=function(N){let{uint16Array:L,uint32Array:U}=se,H=N*2;for(;!Ce(H,L);)N=Ye(N),H=N*2;return De(N,U)},I=function(N){let{uint16Array:L,uint32Array:U}=se,H=N*2;for(;!Ce(H,L);)N=$e(N,U),H=N*2;return De(N,U)+Fe(H,L)},f=Ye(s),d=$e(s,l),g=f,y=d,m,p,v,x;if(i&&(v=cs,x=kr,xe(g,a,v),xe(y,a,x),m=i(v),p=i(x),p<m)){g=d,y=f;let N=m;m=p,p=N,v=x}v||(v=cs,xe(g,a,v));let _=Ce(g*2,c),E=e(v,_,m,o+1,r+g),w;if(E===2){let N=b(g),U=I(g)-N;w=n(N,U,!0,o+1,r+g,v)}else w=E&&Wf(g,t,e,n,i,r,o+1);if(w)return!0;x=kr,xe(y,a,x);let T=Ce(y*2,c),A=e(x,T,p,o+1,r+y),M;if(A===2){let N=b(y),U=I(y)-N;M=n(N,U,!0,o+1,r+y,x)}else M=A&&Wf(y,t,e,n,i,r,o+1);return!!M}}var Xo=new S,qf=new S;function u0(s,t,e={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:h=>(Xo.copy(t).clamp(h.min,h.max),Xo.distanceToSquared(t)),intersectsBounds:(h,u,f)=>f<a&&f<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,Xo);let f=t.distanceToSquared(Xo);return f<a&&(qf.copy(Xo),a=f,c=u),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(qf):e.point=qf.clone(),e.distance=l,e.faceIndex=c,e}var nw=parseInt(Do)>=169,As=new S,Rs=new S,Cs=new S,qc=new it,Yc=new it,$c=new it,f0=new S,d0=new S,p0=new S,qo=new S;function iw(s,t,e,n,i,r,o,a){let c;if(r===Oe?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==He,i),c===null)return null;let l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function sw(s,t,e,n,i,r,o,a,c,l,h){As.fromBufferAttribute(t,r),Rs.fromBufferAttribute(t,o),Cs.fromBufferAttribute(t,a);let u=iw(s,As,Rs,Cs,qo,c,l,h);if(u){let f=new S;un.getBarycoord(qo,As,Rs,Cs,f),n&&(qc.fromBufferAttribute(n,r),Yc.fromBufferAttribute(n,o),$c.fromBufferAttribute(n,a),u.uv=un.getInterpolation(qo,As,Rs,Cs,qc,Yc,$c,new it)),i&&(qc.fromBufferAttribute(i,r),Yc.fromBufferAttribute(i,o),$c.fromBufferAttribute(i,a),u.uv1=un.getInterpolation(qo,As,Rs,Cs,qc,Yc,$c,new it)),e&&(f0.fromBufferAttribute(e,r),d0.fromBufferAttribute(e,o),p0.fromBufferAttribute(e,a),u.normal=un.getInterpolation(qo,As,Rs,Cs,f0,d0,p0,new S),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));let d={a:r,b:o,c:a,normal:new S,materialIndex:0};un.getNormal(As,Rs,Cs,d.normal),u.face=d,u.faceIndex=r,nw&&(u.barycoord=f)}return u}function Hr(s,t,e,n,i,r,o){let a=n*3,c=a+0,l=a+1,h=a+2,u=s.index;s.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));let{position:f,normal:d,uv:g,uv1:y}=s.attributes,m=sw(e,f,d,g,y,c,l,h,t,r,o);return m?(m.faceIndex=n,i&&i.push(m),m):null}function _e(s,t,e,n){let i=s.a,r=s.b,o=s.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function m0(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let h=n,u=n+i;h<u;h++)Hr(c,t,e,h,r,o,a)}function g0(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,h=null;for(let u=n,f=n+i;u<f;u++){let d;d=Hr(a,t,e,u,null,r,o),d&&d.distance<l&&(h=d,l=d.distance)}return h}function y0(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=s,u=t+s;h<u;h++){let f;if(f=h,_e(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function x0(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,l=0,h=s._roots;for(let f=0,d=h.length;f<d;f++)r=h[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,d,g=!1){let y=f*2;if(a[y+15]===65535){let p=o[f+6],v=a[y+14],x=1/0,_=1/0,E=1/0,w=-1/0,T=-1/0,A=-1/0;for(let M=3*p,b=3*(p+v);M<b;M++){let I=n[M],N=i.getX(I),L=i.getY(I),U=i.getZ(I);N<x&&(x=N),N>w&&(w=N),L<_&&(_=L),L>T&&(T=L),U<E&&(E=U),U>A&&(A=U)}return c[f+0]!==x||c[f+1]!==_||c[f+2]!==E||c[f+3]!==w||c[f+4]!==T||c[f+5]!==A?(c[f+0]=x,c[f+1]=_,c[f+2]=E,c[f+3]=w,c[f+4]=T,c[f+5]=A,!0):!1}else{let p=f+8,v=o[f+6],x=p+d,_=v+d,E=g,w=!1,T=!1;t?E||(w=t.has(x),T=t.has(_),E=!w&&!T):(w=!0,T=!0);let A=E||w,M=E||T,b=!1;A&&(b=u(p,d,E));let I=!1;M&&(I=u(v,d,E));let N=b||I;if(N)for(let L=0;L<3;L++){let U=p+L,H=v+L,k=c[U],K=c[U+3],V=c[H],st=c[H+3];c[f+L]=k<V?k:V,c[f+L+3]=K>st?K:st}return N}}}function Hn(s,t,e,n,i){let r,o,a,c,l,h,u=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,y=e.origin.y,m=e.origin.z,p=t[s],v=t[s+3],x=t[s+1],_=t[s+3+1],E=t[s+2],w=t[s+3+2];return u>=0?(r=(p-g)*u,o=(v-g)*u):(r=(v-g)*u,o=(p-g)*u),f>=0?(a=(x-y)*f,c=(_-y)*f):(a=(_-y)*f,c=(x-y)*f),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(E-m)*d,h=(w-m)*d):(l=(w-m)*d,h=(E-m)*d),r>h||l>o)?!1:((l>r||r!==r)&&(r=l),(h<o||o!==o)&&(o=h),r<=i&&o>=n)}function _0(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let h=n,u=n+i;h<u;h++){let f=l?l[h]:h;Hr(c,t,e,f,r,o,a)}}function v0(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,h=null;for(let u=n,f=n+i;u<f;u++){let d;d=Hr(a,t,e,c?c[u]:u,null,r,o),d&&d.distance<l&&(h=d,l=d.distance)}return h}function M0(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=s,u=t+s;h<u;h++){let f;if(f=e.resolveTriangleIndex(h),_e(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,r))return!0}return!1}function b0(s,t,e,n,i,r,o){se.setBuffer(s._roots[t]),Yf(0,s,e,n,i,r,o),se.clearBuffer()}function Yf(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=se,h=s*2;if(Ce(h,c)){let f=De(s,l),d=Fe(h,c);m0(t,e,n,f,d,i,r,o)}else{let f=Ye(s);Hn(f,a,n,r,o)&&Yf(f,t,e,n,i,r,o);let d=$e(s,l);Hn(d,a,n,r,o)&&Yf(d,t,e,n,i,r,o)}}var rw=["x","y","z"];function w0(s,t,e,n,i,r){se.setBuffer(s._roots[t]);let o=$f(0,s,e,n,i,r);return se.clearBuffer(),o}function $f(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=se,l=s*2;if(Ce(l,a)){let u=De(s,c),f=Fe(l,a);return g0(t,e,n,u,f,i,r)}else{let u=zc(s,c),f=rw[u],g=n.direction[f]>=0,y,m;g?(y=Ye(s),m=$e(s,c)):(y=$e(s,c),m=Ye(s));let v=Hn(y,o,n,i,r)?$f(y,t,e,n,i,r):null;if(v){let E=v.point[f];if(g?E<=o[m+u]:E>=o[m+u+3])return v}let _=Hn(m,o,n,i,r)?$f(m,t,e,n,i,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}var Kc=new ce,zr=new Ze,Vr=new Ze,Yo=new nt,S0=new Le,Zc=new Le;function E0(s,t,e,n){se.setBuffer(s._roots[t]);let i=Kf(0,s,e,n);return se.clearBuffer(),i}function Kf(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=se,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),S0.set(e.boundingBox.min,e.boundingBox.max,n),i=S0),Ce(c,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,g=e.attributes.position,y=De(s,a),m=Fe(c,o);if(Yo.copy(n).invert(),e.boundsTree)return xe(s,r,Zc),Zc.matrix.copy(Yo),Zc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Zc.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=y*3,_=(m+y)*3;x<_;x+=3)if(_e(Vr,x,u,f),Vr.needsUpdate=!0,v.intersectsTriangle(Vr))return!0;return!1}});for(let p=y*3,v=(m+y)*3;p<v;p+=3){_e(zr,p,u,f),zr.a.applyMatrix4(Yo),zr.b.applyMatrix4(Yo),zr.c.applyMatrix4(Yo),zr.needsUpdate=!0;for(let x=0,_=d.count;x<_;x+=3)if(_e(Vr,x,d,g),Vr.needsUpdate=!0,zr.intersectsTriangle(Vr))return!0}}else{let h=s+8,u=a[s+6];return xe(h,r,Kc),!!(i.intersectsBox(Kc)&&Kf(h,t,e,n,i)||(xe(u,r,Kc),i.intersectsBox(Kc)&&Kf(u,t,e,n,i)))}}var Jc=new nt,Zf=new Le,$o=new Le,ow=new S,aw=new S,cw=new S,lw=new S;function T0(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zf.set(t.boundingBox.min,t.boundingBox.max,e),Zf.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,f=dn.getPrimitive(),d=dn.getPrimitive(),g=ow,y=aw,m=null,p=null;i&&(m=cw,p=lw);let v=1/0,x=null,_=null;return Jc.copy(e).invert(),$o.matrix.copy(Jc),s.shapecast({boundsTraverseOrder:E=>Zf.distanceToBox(E),intersectsBounds:(E,w,T)=>T<v&&T<o?(w&&($o.min.copy(E.min),$o.max.copy(E.max),$o.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>$o.distanceToBox(A),intersectsBounds:(A,M,b)=>b<v&&b<o,intersectsRange:(A,M)=>{for(let b=A,I=A+M;b<I;b++){_e(d,3*b,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let N=E,L=E+w;N<L;N++){_e(f,3*N,l,c),f.needsUpdate=!0;let U=f.distanceToTriangle(d,g,m);if(U<v&&(y.copy(g),p&&p.copy(m),v=U,x=N,_=b),U<r)return!0}}}});{let T=ci(t);for(let A=0,M=T;A<M;A++){_e(d,3*A,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=E,I=E+w;b<I;b++){_e(f,3*b,l,c),f.needsUpdate=!0;let N=f.distanceToTriangle(d,g,m);if(N<v&&(y.copy(g),p&&p.copy(m),v=N,x=b,_=A),N<r)return!0}}}}}),dn.releasePrimitive(f),dn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=v,n.faceIndex=x,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Jc),y.applyMatrix4(Jc),i.distance=y.sub(i.point).length(),i.faceIndex=_),n)}function A0(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,l=0,h=s._roots;for(let f=0,d=h.length;f<d;f++)r=h[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,d,g=!1){let y=f*2;if(a[y+15]===65535){let p=o[f+6],v=a[y+14],x=1/0,_=1/0,E=1/0,w=-1/0,T=-1/0,A=-1/0;for(let M=p,b=p+v;M<b;M++){let I=3*s.resolveTriangleIndex(M);for(let N=0;N<3;N++){let L=I+N;L=n?n[L]:L;let U=i.getX(L),H=i.getY(L),k=i.getZ(L);U<x&&(x=U),U>w&&(w=U),H<_&&(_=H),H>T&&(T=H),k<E&&(E=k),k>A&&(A=k)}}return c[f+0]!==x||c[f+1]!==_||c[f+2]!==E||c[f+3]!==w||c[f+4]!==T||c[f+5]!==A?(c[f+0]=x,c[f+1]=_,c[f+2]=E,c[f+3]=w,c[f+4]=T,c[f+5]=A,!0):!1}else{let p=f+8,v=o[f+6],x=p+d,_=v+d,E=g,w=!1,T=!1;t?E||(w=t.has(x),T=t.has(_),E=!w&&!T):(w=!0,T=!0);let A=E||w,M=E||T,b=!1;A&&(b=u(p,d,E));let I=!1;M&&(I=u(v,d,E));let N=b||I;if(N)for(let L=0;L<3;L++){let U=p+L,H=v+L,k=c[U],K=c[U+3],V=c[H],st=c[H+3];c[f+L]=k<V?k:V,c[f+L+3]=K>st?K:st}return N}}}function R0(s,t,e,n,i,r,o){se.setBuffer(s._roots[t]),Jf(0,s,e,n,i,r,o),se.clearBuffer()}function Jf(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=se,h=s*2;if(Ce(h,c)){let f=De(s,l),d=Fe(h,c);_0(t,e,n,f,d,i,r,o)}else{let f=Ye(s);Hn(f,a,n,r,o)&&Jf(f,t,e,n,i,r,o);let d=$e(s,l);Hn(d,a,n,r,o)&&Jf(d,t,e,n,i,r,o)}}var hw=["x","y","z"];function C0(s,t,e,n,i,r){se.setBuffer(s._roots[t]);let o=jf(0,s,e,n,i,r);return se.clearBuffer(),o}function jf(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=se,l=s*2;if(Ce(l,a)){let u=De(s,c),f=Fe(l,a);return v0(t,e,n,u,f,i,r)}else{let u=zc(s,c),f=hw[u],g=n.direction[f]>=0,y,m;g?(y=Ye(s),m=$e(s,c)):(y=$e(s,c),m=Ye(s));let v=Hn(y,o,n,i,r)?jf(y,t,e,n,i,r):null;if(v){let E=v.point[f];if(g?E<=o[m+u]:E>=o[m+u+3])return v}let _=Hn(m,o,n,i,r)?jf(m,t,e,n,i,r):null;return v&&_?v.distance<=_.distance?v:_:v||_||null}}var jc=new ce,Gr=new Ze,Wr=new Ze,Ko=new nt,I0=new Le,Qc=new Le;function P0(s,t,e,n){se.setBuffer(s._roots[t]);let i=Qf(0,s,e,n);return se.clearBuffer(),i}function Qf(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=se,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),I0.set(e.boundingBox.min,e.boundingBox.max,n),i=I0),Ce(c,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,g=e.attributes.position,y=De(s,a),m=Fe(c,o);if(Ko.copy(n).invert(),e.boundsTree)return xe(s,r,Qc),Qc.matrix.copy(Ko),Qc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Qc.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=y,_=m+y;x<_;x++)if(_e(Wr,3*t.resolveTriangleIndex(x),u,f),Wr.needsUpdate=!0,v.intersectsTriangle(Wr))return!0;return!1}});for(let p=y,v=m+y;p<v;p++){let x=t.resolveTriangleIndex(p);_e(Gr,3*x,u,f),Gr.a.applyMatrix4(Ko),Gr.b.applyMatrix4(Ko),Gr.c.applyMatrix4(Ko),Gr.needsUpdate=!0;for(let _=0,E=d.count;_<E;_+=3)if(_e(Wr,_,d,g),Wr.needsUpdate=!0,Gr.intersectsTriangle(Wr))return!0}}else{let h=s+8,u=a[s+6];return xe(h,r,jc),!!(i.intersectsBox(jc)&&Qf(h,t,e,n,i)||(xe(u,r,jc),i.intersectsBox(jc)&&Qf(u,t,e,n,i)))}}var tl=new nt,td=new Le,Zo=new Le,uw=new S,fw=new S,dw=new S,pw=new S;function L0(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),td.set(t.boundingBox.min,t.boundingBox.max,e),td.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,f=dn.getPrimitive(),d=dn.getPrimitive(),g=uw,y=fw,m=null,p=null;i&&(m=dw,p=pw);let v=1/0,x=null,_=null;return tl.copy(e).invert(),Zo.matrix.copy(tl),s.shapecast({boundsTraverseOrder:E=>td.distanceToBox(E),intersectsBounds:(E,w,T)=>T<v&&T<o?(w&&(Zo.min.copy(E.min),Zo.max.copy(E.max),Zo.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree){let T=t.boundsTree;return T.shapecast({boundsTraverseOrder:A=>Zo.distanceToBox(A),intersectsBounds:(A,M,b)=>b<v&&b<o,intersectsRange:(A,M)=>{for(let b=A,I=A+M;b<I;b++){let N=T.resolveTriangleIndex(b);_e(d,3*N,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=E,U=E+w;L<U;L++){let H=s.resolveTriangleIndex(L);_e(f,3*H,l,c),f.needsUpdate=!0;let k=f.distanceToTriangle(d,g,m);if(k<v&&(y.copy(g),p&&p.copy(m),v=k,x=L,_=b),k<r)return!0}}}})}else{let T=ci(t);for(let A=0,M=T;A<M;A++){_e(d,3*A,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=E,I=E+w;b<I;b++){let N=s.resolveTriangleIndex(b);_e(f,3*N,l,c),f.needsUpdate=!0;let L=f.distanceToTriangle(d,g,m);if(L<v&&(y.copy(g),p&&p.copy(m),v=L,x=b,_=A),L<r)return!0}}}}}),dn.releasePrimitive(f),dn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=v,n.faceIndex=x,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(tl),y.applyMatrix4(tl),i.distance=y.sub(i.point).length(),i.faceIndex=_),n)}function D0(){return typeof SharedArrayBuffer<"u"}var Jo=new se.constructor,el=new se.constructor,ls=new as(()=>new ce),Xr=new ce,qr=new ce,ed=new ce,nd=new ce,id=!1;function N0(s,t,e,n){if(id)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");id=!0;let i=s._roots,r=t._roots,o,a=0,c=0,l=new nt().copy(e).invert();for(let h=0,u=i.length;h<u;h++){Jo.setBuffer(i[h]),c=0;let f=ls.getPrimitive();xe(0,Jo.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(el.setBuffer(r[d]),o=jn(0,0,e,l,n,a,c,0,0,f),el.clearBuffer(),c+=r[d].length,!o);d++);if(ls.releasePrimitive(f),Jo.clearBuffer(),a+=i[h].length,o)break}return id=!1,o}function jn(s,t,e,n,i,r=0,o=0,a=0,c=0,l=null,h=!1){let u,f;h?(u=el,f=Jo):(u=Jo,f=el);let d=u.float32Array,g=u.uint32Array,y=u.uint16Array,m=f.float32Array,p=f.uint32Array,v=f.uint16Array,x=s*2,_=t*2,E=Ce(x,y),w=Ce(_,v),T=!1;if(w&&E)h?T=i(De(t,p),Fe(t*2,v),De(s,g),Fe(s*2,y),c,o+t,a,r+s):T=i(De(s,g),Fe(s*2,y),De(t,p),Fe(t*2,v),a,r+s,c,o+t);else if(w){let A=ls.getPrimitive();xe(t,m,A),A.applyMatrix4(e);let M=Ye(s),b=$e(s,g);xe(M,d,Xr),xe(b,d,qr);let I=A.intersectsBox(Xr),N=A.intersectsBox(qr);T=I&&jn(t,M,n,e,i,o,r,c,a+1,A,!h)||N&&jn(t,b,n,e,i,o,r,c,a+1,A,!h),ls.releasePrimitive(A)}else{let A=Ye(t),M=$e(t,p);xe(A,m,ed),xe(M,m,nd);let b=l.intersectsBox(ed),I=l.intersectsBox(nd);if(b&&I)T=jn(s,A,e,n,i,r,o,a,c+1,l,h)||jn(s,M,e,n,i,r,o,a,c+1,l,h);else if(b)if(E)T=jn(s,A,e,n,i,r,o,a,c+1,l,h);else{let N=ls.getPrimitive();N.copy(ed).applyMatrix4(e);let L=Ye(s),U=$e(s,g);xe(L,d,Xr),xe(U,d,qr);let H=N.intersectsBox(Xr),k=N.intersectsBox(qr);T=H&&jn(A,L,n,e,i,o,r,c,a+1,N,!h)||k&&jn(A,U,n,e,i,o,r,c,a+1,N,!h),ls.releasePrimitive(N)}else if(I)if(E)T=jn(s,M,e,n,i,r,o,a,c+1,l,h);else{let N=ls.getPrimitive();N.copy(nd).applyMatrix4(e);let L=Ye(s),U=$e(s,g);xe(L,d,Xr),xe(U,d,qr);let H=N.intersectsBox(Xr),k=N.intersectsBox(qr);T=H&&jn(M,L,n,e,i,o,r,c,a+1,N,!h)||k&&jn(M,U,n,e,i,o,r,c,a+1,N,!h),ls.releasePrimitive(N)}}return T}var nl=new Le,U0=new ce,mw={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},jo=class s{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a;return e.cloneBuffers?a={roots:i.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:o}=t,a=new s(e,{...n,[Fc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new ee(t.index,1,!1);e.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...mw,[Fc]:!1},e),e.useSharedArrayBuffer&&!D0())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Fc]||(c0(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ce))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?A0:x0)(this,t)}traverse(t,e=0){let n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,h=r[l+15]===65535;if(h){let u=i[a+6],f=r[l+14];t(c,h,new Float32Array(n,a*4,6),u,f)}else{let u=a+32/4,f=i[a+6],d=i[a+7];t(c,h,new Float32Array(n,a*4,6),d)||(o(u,c+1),o(f,c+1))}}}raycast(t,e=En,n=0,i=1/0){let r=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),h=o.groups,u=c?e.side:e,f=this.indirect?R0:b0;for(let d=0,g=r.length;d<g;d++){let y=l?e[h[d].materialIndex].side:u,m=a.length;if(f(this,d,y,t,a,n,i),l){let p=h[d].materialIndex;for(let v=m,x=a.length;v<x;v++)a[v].face.materialIndex=p}}return a}raycastFirst(t,e=En,n=0,i=1/0){let r=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e),l=null,h=o.groups,u=a?e.side:e,f=this.indirect?C0:w0;for(let d=0,g=r.length;d<g;d++){let y=c?e[h[d].materialIndex].side:u,m=f(this,d,y,t,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=h[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?P0:E0;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=dn.getPrimitive(),n=this.indirect?M0:y0,{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){let u=o;o=(f,d,g,y,m)=>u(f,d,g,y,m)?!0:n(f,d,this,a,g,y,e)}else o||(a?o=(u,f,d,g)=>n(u,f,this,a,d,g,e):o=(u,f,d)=>d);let c=!1,l=0,h=this._roots;for(let u=0,f=h.length;u<f;u++){let d=h[u];if(c=h0(this,u,r,o,i,l),c)break;l+=d.byteLength}return dn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=dn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let y=this.resolveTriangleIndex(g);_e(o,y*3,a,c)}:g=>{_e(o,g*3,a,c)},h=dn.getPrimitive(),u=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{let y=t.resolveTriangleIndex(g);_e(h,y*3,u,f)}:g=>{_e(h,g*3,u,f)};if(r){let g=(y,m,p,v,x,_,E,w)=>{for(let T=p,A=p+v;T<A;T++){d(T),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let M=y,b=y+m;M<b;M++)if(l(M),o.needsUpdate=!0,r(o,h,M,T,x,_,E,w))return!0}return!1};if(i){let y=i;i=function(m,p,v,x,_,E,w,T){return y(m,p,v,x,_,E,w,T)?!0:g(m,p,v,x,_,E,w,T)}}else i=g}return N0(this,t,e,i)}intersectsBox(t,e){return nl.set(t.min,t.max,e),nl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>nl.intersectsBox(n),intersectsTriangle:n=>nl.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?L0:T0)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return u0(this,t,e,n,i)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{xe(0,new Float32Array(n),U0),t.union(U0)}),t}};var O0=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var B0=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var BA=`
	${O0}
	${B0}
`;var Is={r:.36,lo:.5,hi:1.85},yw=22,sd=[new S,new S,new S],Qo=new S,Di=new rn,F0=new ce,il=new S,xw=new S,sl=new S,k0=new Yi,Ps=new S,rl=class{constructor(){this.sites=[],this.circles=[],this.waters=[],this.acts=[],this.seaY=Math.sin(Oo*Jn),this.bvh=null,this.movers=[]}buildSolids(t){let e=[];for(let o of t)o.updateMatrixWorld(!0),o.traverse(a=>{!a.isMesh||a.isSkinnedMesh||a.userData.noCollide||(Array.isArray(a.material)?a.material[0]:a.material).transparent||e.push(a)});let n=(o,a)=>{let c=0;for(let l of e){let h=l.geometry.attributes.position,u=l.geometry.index,f=u?u.count:h.count;for(let d=0;d+2<f;d+=3){let g=1/0,y=-1/0;for(let m=0;m<3;m++){sd[m].fromBufferAttribute(h,u?u.getX(d+m):d+m).applyMatrix4(l.matrixWorld);let p=sd[m].length()-Ft;p<g&&(g=p),p>y&&(y=p)}if(!(y<Is.lo-.1||g>yw)){if(a)for(let m=0;m<3;m++)sd[m].toArray(o,c*9+m*3);c++}}}return c},i=new Float32Array(n(null,!1)*9);n(i,!0);let r=new ue;return r.setAttribute("position",new ee(i,3)),this.bvh=new jo(r,{maxLeafTris:8}),i.length/9}settle(t,e=Is.r){if(!this.bvh)return!0;let n=!0;for(let i=0;i<3;i++){Qo.copy(t),Di.start.copy(t).multiplyScalar(Ft+Is.lo),Di.end.copy(t).multiplyScalar(Ft+Is.hi),F0.setFromPoints([Di.start,Di.end]).expandByScalar(e);let r=!1;if(n=!0,this.bvh.shapecast({intersectsBounds:o=>o.intersectsBox(F0),intersectsTriangle:o=>{o.closestPointToSegment(Di,il,xw);let a=il.dot(Qo)-Ft;if(a<Is.lo-.02||a>Is.hi+.02)return!1;sl.copy(il).addScaledVector(Qo,-il.dot(Qo));let c=sl.length();if(c>=e)return!1;if(c<.001)return n=!1,!0;let l=(e-c)/c;return Di.start.addScaledVector(sl,-l),Di.end.addScaledVector(sl,-l),Qo.copy(Di.start).normalize(),r=!0,!1}}),t.copy(Di.start).normalize(),!n||!r)break}return n}rayDist(t,e,n){if(!this.bvh)return n;k0.set(t,e);let i=this.bvh.raycastFirst(k0,He,0,n);return i?i.distance:n}addMover(t,e,n){this.movers.push({obj:t,hw:e,hl:n})}moverAt(t,e=Is.r){for(let n of this.movers)if(n.obj.visible&&(Ps.copy(t).multiplyScalar(Ft+1),n.obj.worldToLocal(Ps),Math.abs(Ps.x)<n.hw+e&&Math.abs(Ps.z)<n.hl+e&&Ps.y<5))return{m:n,lx:Ps.x,lz:Ps.z};return null}addCircle(t,e,n=.45){this.circles.push({d:t.clone(),cos:Math.cos((e+n)/Ft)})}addWater(t,e){this.waters.push({d:t.clone(),r:e,cos:Math.cos(e/Ft)})}isWater(t){if(t.y<this.seaY)return!0;for(let e of this.waters)if(t.dot(e.d)>e.cos)return!0;return!1}blocked(t,e=.45){if(this.isWater(t))return!0;for(let n of this.circles)if(t.dot(n.d)>n.cos)return!0;for(let n of this.sites)if(n.hit(t,e))return!0;return!!this.moverAt(t,e-.1)}camBlocked(t){for(let e of this.sites){if(t.dot(e.center)<e.cosNear)continue;let[n,i]=e.toLocal(t);for(let r of e.colliders){let o=n-r.x,a=i-r.z;if(r.r!==void 0){if(r.r>1.2&&o*o+a*a<r.r*r.r)return!0}else if(r.hw>.6&&r.hd>.6){let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw&&Math.abs(l)<r.hd)return!0}}}return!1}addAct(t){return this.acts.push(t),t}nearestAct(t){let e=null,n=1/0;for(let i of this.acts){if(i.show&&!i.show())continue;let r=Math.acos(Math.min(1,t.dot(i.dir)))*Ft;r<i.r&&r<n&&(e=i,n=r)}return e}};function Ke(s,t=0){let e=new Tt(s),n={};return e.getHSL(n,te),e.setHSL(n.h,n.s,fe.clamp(n.l+t,0,1),te),"#"+e.getHexString()}var rd=1,Qn=()=>(rd=rd*16807%2147483647,rd/2147483647),Ls=s=>s[Qn()*s.length|0];function li(s,t,e,n=1){let i=(4.6+Qn()*1.6)*n;s.model(Ls(["tree_plateau","tree_plateau_dark"]),t,e,{s:[i,(3.6+Qn())*n,i],rot:Qn()*6.3}),s.solidCircle(t,e,.35)}function Yr(s,t,e,n=1){s.model(Ls(["tree_palmDetailedTall","tree_palmTall","tree_palmBend"]),t,e,{h:(5.4+Qn()*1.4)*n,rot:Qn()*6.3})}function hi(s,t,e,n=1,i=!1){if(s.model(Ls(["plant_bushDetailed","plant_bush","plant_bushLarge"]),t,e,{h:.8*n,rot:Qn()*6.3}),i)for(let r=0;r<3;r++)s.model(Ls(["flower_redA","flower_purpleA","flower_yellowA"]),t+(Qn()-.5)*1.2,e+(Qn()-.5)*1.2,{h:.5,shadow:!1})}function pn(s,t,e,n,i,r=0){let o=s.sub(t,e,r);o.rbox(0,0,n,.45,i,"#c9c1b2",{r:.06}),o.box(0,0,n-.2,.06,i-.2,"#6b4f36",{y:.42});let a=Math.max(1,Math.round(n/1.1));for(let c=0;c<a;c++){let l=-n/2+(c+.5)*(n/a);o.model(Ls(["plant_bushDetailed","plant_bushSmall","flower_redA","flower_purpleB","flower_yellowA"]),l,0,{h:.55+Qn()*.35,y:.42,rot:Qn()*6.3,shadow:!1})}o.solid(0,0,n,i)}function zn(s,t,e,n=0){s.model("light-curved",t,e,{h:4.8,rot:n}),s.sub(t,e,n).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"})}function an(s,t,e,n=0,i="#b9874f"){let r=s.sub(t,e,n);for(let o=0;o<4;o++)r.rbox(0,.15-o*.12,1.9,.06,.1,i,{y:.45,r:.02});for(let o=0;o<3;o++)r.rbox(0,-.27,1.9,.09,.05,i,{y:.62+o*.13,rx:-.12,r:.02});for(let o of[-.8,.8])r.rbox(o,0,.07,.45,.42,"#3e4650",{r:.02}),r.rbox(o,-.28,.07,.5,.06,"#3e4650",{y:.45,r:.02});r.solid(0,0,1.9,.5)}function Ds(s,t,e,n="#ece6da",i="#d24b3e"){s.lathe(t,e,[[0,0],[.32,0],[.34,.04],[.1,.1],[.07,.68],[.12,.7],[0,.7]],"#8a8f96",{seg:16}),s.lathe(t,e,[[0,.7],[.62,.7],[.66,.73],[.66,.77],[.6,.79],[0,.79]],n,{seg:28});for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4,a=t+Math.cos(o)*.98,c=e+Math.sin(o)*.98;s.lathe(a,c,[[0,0],[.16,0],[.06,.06],[.05,.38],[.2,.4],[.21,.46],[0,.47]],i,{seg:16})}s.solidCircle(t,e,1)}function Ns(s,t,e,n,i,r,o={}){let a=s.sub(t,e,n);a.rbox(0,0,2.3,.95,1,i,{y:.25,r:.06}),a.rbox(0,.05,2.42,.07,1.12,Ke(i,-.12),{y:1.2,r:.03}),a.rbox(0,.3,2.1,.35,.5,"#d9eef5",{y:1.27,r:.04});for(let c of[-.85,.85])a.cyl(c,.52,.22,.22,.08,"#2a2a30",{y:.22,rx:Math.PI/2,seg:16}),a.cyl(c,.57,.1,.1,.02,"#c9cdd2",{y:.22,rx:Math.PI/2,seg:12});for(let c of[-1.12,1.12])for(let l of[-.48,.48])a.cyl(c,l,.035,.035,1.6,"#d9d9d9",{y:1.25,seg:6});a.rbox(0,0,2.75,.1,1.75,r,{y:2.85,r:.04});for(let c=0;c<9;c++)a.cyl(-1.3+c*.325,.88,.16,.16,.06,c%2?"#ffffff":r,{y:2.68,rx:Math.PI/2,seg:10});if(o.grill){a.rbox(0,-.15,1.6,.12,.5,"#2a2a2a",{y:1.22,r:.02}),a.box(0,-.15,1.45,.04,.4,"#ff7a2e",{y:1.33,glow:"win"});for(let c=0;c<7;c++)a.model("skewer",-.6+c*.2,-.15,{w:.5,y:1.38,rot:Math.PI/2,shadow:!1})}o.label&&a.sign(0,.92,o.label,{w:2.2,h:.45,y:2.42,bg:o.signBg||r,board:!1}),a.solid(0,0,2.3,1)}function H0(s,t,e,n){s.cyl(t,e,.035,.035,2.5,"#eeeeee",{seg:8});let i=[[0,2.85],[.4,2.81],[.8,2.69],[1.2,2.51],[1.5,2.33]];s.lathe(t,e,i,"#f4efe6",{seg:16}),s.lathe(t,e,[...i].reverse(),n,{seg:16});for(let r=0;r<8;r++){let o=r/8*Math.PI*2;s.ball(t+Math.cos(o)*1.5,e+Math.sin(o)*1.5,.05,"#ffffff",{y:2.33})}s.ball(t,e,.07,"#ffffff",{y:2.85})}function ol(s,t,e,n,i){let r=s.sub(t,e,n),o=i.w,a=i.d,c=i.floors,l=2.6,h=3,u=1.1,f=h+c*l,d=i.base||"#f4ecdb",g=i.accent,y=Pi(i.seed||3),m=Math.round(o/2.4);for(let v=0;v<=m;v++){let x=-o/2+.4+v*(o-.8)/m;for(let _ of[-a/2+.4,a/2-.4]){let E=(x*x+_*_)/120;r.rbox(x,_,.55,h+E,.55,"#efe6d2",{r:.05}),r.solid(x,_,.55,.55)}}if(r.box(0,0,o-.6,.05,a-.6,"#cdbfa6",{y:.01}),!i.filler){r.rbox(-o/2+1.6,-a/2+.75,2.2,1.6,.35,"#9aa4ad",{r:.04});for(let _=0;_<5;_++)for(let E=0;E<4;E++)r.box(-o/2+.8+_*.4,-a/2+.94,.34,.3,.02,"#c3ccd4",{y:.2+E*.36});let v=o/2-3,x=.2;r.lathe(v,x,[[0,0],[.25,0],[.18,.08],[.16,.65],[.55,.68],[.55,.76],[0,.76]],"#b9b4aa",{seg:20}),r.box(v,x,.6,.01,.6,"#f3e1b0",{y:.765});for(let _=0;_<4;_++){let E=_*Math.PI/2;r.lathe(v+Math.cos(E)*.85,x+Math.sin(E)*.85,[[0,0],[.2,0],[.16,.42],[.2,.45],[0,.46]],"#b9b4aa",{seg:12})}r.solidCircle(v,x,1)}r.box(0,-u/2,o,f-h,a-u,d,{y:h});for(let v=0;v<=c;v++)r.rbox(0,0,o+.24,.26,a+.24,v===0?Ke(g,-.05):g,{y:h+v*l-.13,r:.05});let p=Math.floor((o-2.6)/1.75);for(let v=0;v<c;v++){let x=h+v*l;r.box(0,a/2-.08,o-.1,1,.16,d,{y:x+.13}),r.box(0,a/2-.08,o-.1,.06,.2,"#8f99a3",{y:x+1.13});for(let _=0;_<p;_++){let E=-o/2+1.4+_*1.75,w=y()<.5;if(_%2===0)r.box(E,a/2-u+.02,.85,1.95,.06,Ls(["#7a4b33","#5b6b4a","#4a5c7a","#8a3b3b"]),{y:x+.13}),r.box(E,a/2-u+.04,.95,2.05,.03,"#d9d4c7",{y:x+.13});else{r.box(E,a/2-u+.02,.95,.95,.05,w?"#ffe2a0":"#93a9bd",{y:x+1.05,glow:"win"});for(let A=0;A<4;A++)r.box(E-.36+A*.24,a/2-u+.06,.03,.95,.03,"#c9ced4",{y:x+1.05})}let T=-a/2-.02;r.box(E,T,1.15,1.2,.06,y()<.55?"#ffe2a0":"#93a9bd",{y:x+.9,glow:"win"});for(let A=0;A<5;A++)r.box(E-.48+A*.24,T-.04,.03,1.2,.03,"#d6d9dc",{y:x+.9});if(r.box(E,T-.04,1.2,.04,.05,"#d6d9dc",{y:x+1.48}),y()<.45&&(r.rbox(E+.95,T-.25,.55,.42,.32,"#f2f2f2",{y:x+.25,r:.04}),r.cyl(E+.95,T-.42,.13,.13,.02,"#8d949b",{y:x+.46,rx:Math.PI/2,seg:12})),y()<.4){for(let A=0;A<3;A++)r.cyl(E-.4+A*.4,T-.7,.025,.025,1.4,"#b58a52",{y:x+2.1,rx:Math.PI/2,seg:5});for(let A=0;A<4;A++){let M=E-.4+A%3*.4,b=T-.35-y()*.8;r.box(M,b,.05,.45+y()*.3,.38,Ls(["#e2383f","#2f8fd8","#f3c13a","#ffffff","#8e5ad8","#3fae49"]),{y:x+1.5})}}}}r.rbox(o/2+.6,-.2,1.8,f-h+1.6,a+.4,g,{y:h-.4,r:.08});for(let v=0;v<c;v++)r.box(o/2+.6,a/2+.02,.9,1.4,.05,"#cfe1ea",{y:h+v*l+.6,glow:"win"});r.solid(o/2+.6,-.2,1.8,a+.4),r.rbox(0,0,o+.4,.55,a+.4,g,{y:f,r:.06}),r.rbox(-o/2+2.2,-.3,2.6,1.6,2.2,"#d9d2c4",{y:f+.55,r:.1}),r.cyl(o/2-2,0,.04,.04,2.2,"#888",{y:f+.55,seg:5}),r.camSolid(0,0,o,a),i.no&&r.sub(-o/2-.01,0,-Math.PI/2).sign(0,0,`BLK
${i.no}`,{w:2.2,h:1.6,y:f-1.8,bg:g,board:!1,border:!1})}function _w(){if(Lr.hdbfacade)return"hdbfacade";let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,64,64),t.fillStyle="#d8d8d8",t.fillRect(0,54,64,10),t.fillStyle="#bfc5c9",t.fillRect(10,14,44,32),t.fillStyle="#5f7f99",t.fillRect(13,17,38,26),t.fillStyle="#86a5bd",t.fillRect(13,17,38,9),t.fillStyle="#e6e6e6";for(let n of[22,32,42])t.fillRect(n,17,2,26);let e=new sn(s);return e.colorSpace=te,e.wrapS=e.wrapT=Tn,e.anisotropy=4,ns("hdbfacade",new ge({map:e,vertexColors:!0,roughness:.85})),"hdbfacade"}function od(s,t,e,n,i){let r=s.sub(t,e,n),o=_w(),a=i.w,c=i.d,l=i.floors,h=2.6,u=2.6,f=u+l*h,d=i.base||"#f4ecdb",g=i.accent;for(let y of[-a/2+.4,-a/6,a/6,a/2-.4])for(let m of[-c/2+.4,c/2-.4])r.box(y,m,.5,u+(y*y+m*m)/120,.5,"#efe6d2");r.box(0,0,a-.3,f-u,c-.3,d,{y:u});for(let y of[-1,1]){let m=new xn(a-.3,f-u),p=m.attributes.uv;for(let v=0;v<p.count;v++)p.setXY(v,p.getX(v)*Math.round(a/1.8),p.getY(v)*l);r.add(m,d,0,y*(c/2-.13),u+(f-u)/2,{mat:o,rot:y>0?0:Math.PI})}for(let y=0;y<=l;y++)r.box(0,0,a+.1,.2,c+.1,y%3===0?g:Ke(g,.12),{y:u+y*h-.1});r.box(a/2+.6,0,1.6,f-u+1.4,c*.7,g,{y:u-.2}),r.box(0,0,a+.3,.5,c+.3,g,{y:f}),r.box(-a/2+2,0,2.4,1.4,c*.5,"#d9d2c4",{y:f+.5})}var ke=4096,vn=2048,ta=ke/(2*Math.PI*Ft),z0=.5;function vw(s){let t=[];for(let e=0;e<s.length;e++){let n=s[e],i=s[(e+1)%s.length];for(let c=-16;c<16;c+=z0)t.push(n.dirAt(c,0));let r=n.dirAt(16,0),o=i.dirAt(-16,0),a=Math.max(1,Math.ceil(r.angleTo(o)*Ft/z0));for(let c=0;c<a;c++)t.push(Im(r,o,c/a))}return t}function V0(s){let[t,e]=Rr(s);return[e/360*ke,(90-t)/180*vn]}function q0(s){let t=[s[0].slice()];for(let e=1;e<s.length;e++){let[n,i]=s[e],r=t[e-1][0];for(;n-r>ke/2;)n-=ke;for(;r-n>ke/2;)n+=ke;t.push([n,i])}return t}function G0(s,t,e){let n=q0(t);s.fillStyle=e;for(let i of[-ke,0,ke])s.beginPath(),n.forEach(([r,o],a)=>a?s.lineTo(r+i,o):s.moveTo(r+i,o)),s.closePath(),s.fill()}function ad(s,t,e,n,i=null){let r=q0(t);s.strokeStyle=e,s.lineWidth=n,s.lineJoin=s.lineCap=i?"butt":"round",s.setLineDash(i||[]);for(let o of[-ke,0,ke])s.beginPath(),r.forEach(([a,c],l)=>l?s.lineTo(a+o,c):s.moveTo(a+o,c)),s.stroke();s.setLineDash([])}function Mw(s,t,e){let n=document.createElement("canvas");n.width=ke,n.height=vn;let i=n.getContext("2d"),r=Pi(7);i.fillStyle="#95c96f",i.fillRect(0,0,ke,vn);let o=["#8cc26a","#9fd178","#86bb63","#a5d47f","#91c86d"];for(let m=0;m<1400;m++)i.fillStyle=o[r()*o.length|0],i.globalAlpha=.45,i.beginPath(),i.ellipse(r()*ke,r()*vn,15+r()*70,10+r()*40,r()*Math.PI,0,Math.PI*2),i.fill();i.globalAlpha=1;let a=48/180*vn,c=i.createLinearGradient(0,0,0,a);c.addColorStop(0,"#5d9a4c"),c.addColorStop(.7,"rgba(98,160,80,0.7)"),c.addColorStop(1,"rgba(98,160,80,0)"),i.fillStyle=c,i.fillRect(0,0,ke,a);let l=(90-Ar)/180*vn,h=(90-Oo)/180*vn,u=(m,p)=>Math.sin(m*.011+p)*9+Math.sin(m*.037+p*2)*5;i.fillStyle="#f1dfa8",i.beginPath(),i.moveTo(0,vn);for(let m=0;m<=ke;m+=16)i.lineTo(m,l+u(m,1));i.lineTo(ke,vn),i.closePath(),i.fill(),i.fillStyle="#c9eef8",i.beginPath(),i.moveTo(0,vn);for(let m=0;m<=ke;m+=16)i.lineTo(m,h-7+u(m,3));i.lineTo(ke,vn),i.closePath(),i.fill();let f=i.createLinearGradient(0,h,0,vn);f.addColorStop(0,"#5bbde0"),f.addColorStop(.35,"#3f9fd0"),f.addColorStop(1,"#2f7fc0"),i.fillStyle=f,i.beginPath(),i.moveTo(0,vn);for(let m=0;m<=ke;m+=16)i.lineTo(m,h+u(m,3));i.lineTo(ke,vn),i.closePath(),i.fill();let d=(m,p)=>p.map(([v,x])=>V0(m.dirAt(v,x)));for(let m of s.sites)for(let p of m.paints)G0(i,d(m,p.pts),p.color);let g=t.map(m=>V0(m));g.push(g[0]),ad(i,g,"#ddd6c6",6.6*ta),ad(i,g,"#5f6672",4.4*ta),ad(i,g,"#f5efdc",.22*ta,[1.6*ta,1.6*ta]);for(let m of s.sites)for(let p of m.paintsOver)G0(i,d(m,p.pts),p.color);let y=new sn(n);return y.colorSpace=te,y.anisotropy=e,y}var W0=["tree_plateau","tree_plateau_dark"],bw=["tree_detailed","tree_oak","tree_fat","tree_default","tree_tall","tree_detailed_dark","tree_oak_dark","tree_tall_dark"],ww=["tree_palmDetailedTall","tree_palmTall","tree_palmBend","tree_palmDetailedShort"],Sw=["plant_bushDetailed","plant_bush","plant_bushLarge","plant_bushSmall"],Ew=["flower_redA","flower_redB","flower_purpleA","flower_purpleB","flower_yellowA","flower_yellowB"],Tw=["grass","grass_large","grass_leafs","grass_leafsLarge"],X0=["rock_smallA","rock_smallB","rock_smallC","stone_smallA"],Aw=["building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e"];function Y0(s,t,e){let n=vw(s.sites),i=Mw(s,n,e.capabilities.getMaxAnisotropy()),r=new Dt(new Xt(Ft,256,128),new ge({map:i,roughness:.95,metalness:0}));r.receiveShadow=!0;let o=Pi(42),a=v=>v[o()*v.length|0],c=n.filter((v,x)=>x%4===0),l=(v,x)=>{let _=Math.cos(x/Ft);return c.some(E=>v.dot(E)>_)},h=(v,x)=>s.sites.some(_=>_.near(v,x)),u=new S,f=()=>{let v=o()*2-1,x=o()*Math.PI*2,_=Math.sqrt(1-v*v);return u.set(_*Math.cos(x),v,_*Math.sin(x))},d=(v,x,_)=>!s.isWater(v)&&!h(v,x)&&!l(v,_)&&!s.camBlocked(v),g=["#4fa3a5","#e9825f","#8e7cc3","#5aa95f","#d9a63a","#d65f6d","#3f86c4"];for(let v=0,x=0;v<3e3&&x<40;v++){let _=f(),E=Math.asin(_.y)/Jn;if(E>40||E<Ar+3||!d(_,25,9)||s.blocked(_,6))continue;let w=new ai(_,t,null),T=o()*Math.PI;if(o()<.25)w.model(a(Aw),0,0,{h:16+o()*10,rot:T}),s.addCircle(_,2.4);else{let A=9+o()*5,M=5+(o()*7|0),b=a(g);od(w,0,0,T,{w:A,d:4.4,floors:M,accent:b});let I=w.sub(0,0,T);for(let N of[-1,0,1])s.addCircle(w.dirAt(...I.tf(N*A/3,0)),2.6);if(o()<.5){let N=w.sub(0,0,T),L=(o()-.5)*4,[U,H]=N.tf(L,9.5),k=w.dirAt(U,H);if(d(k,25,9)&&!s.blocked(k,6)){let K=8+o()*5;od(w,U,H,T,{w:K,d:4.4,floors:M+(o()*3|0)-1,accent:a(g)});for(let V of[-1,0,1])s.addCircle(w.dirAt(...N.tf(L+V*K/3,9.5)),2.6)}}}x++}for(let v=0;v<2600;v++){let x=f(),_=Math.asin(x.y)/Jn;if(!d(x,21,4.4)||s.blocked(x,1.2))continue;let E=_<Ar+1,w=_>44;if(E&&o()>.35||!E&&!w&&o()>.32)continue;let T=new ai(x,t,null),A=o()*Math.PI*2;if(E)T.model(a(ww),0,0,{h:5+o()*2.2,rot:A});else if(!w&&o()<.55){let M=4.6+o()*2.4;T.model(a(W0),0,0,{s:[M,3.6+o()*1.2,M],rot:A})}else T.model(a(bw),0,0,{h:4.5+o()*3,rot:A});s.addCircle(x,.4)}for(let v=0;v<9e3;v++){let x=f();if(!d(x,19,3.4))continue;let _=Math.asin(x.y)/Jn,E=_<Ar+.5,w=new ai(x,t,null),T=o()*Math.PI*2,A=o();if(E){A<.12&&w.model(a(X0),0,0,{h:.3+o()*.5,rot:T});continue}A<.08?w.model(a(Sw),0,0,{h:.7+o()*.6,rot:T}):A<.16?w.model(a(Ew),0,0,{h:.45+o()*.25,rot:T,shadow:!1}):A<.38?w.model(a(Tw),0,0,{h:.35+o()*.3,rot:T,shadow:!1}):A<.4&&w.model(a(X0),0,0,{h:.25+o()*.3,rot:T})}let y=[],m=(v,x)=>Math.atan2(x.dot(v.east),x.dot(v.south));for(let v=0;v<n.length;v++){let x=n[v],_=n[(v+1)%n.length].clone().sub(n[(v-1+n.length)%n.length]).normalize(),E=new S().crossVectors(x,_).normalize(),w=T=>x.clone().multiplyScalar(Ft).addScaledVector(E,T).normalize();if(v%2===0)for(let T of[-1,1]){let A=new ai(w(T*2.32),t,null);A.box(0,0,.22,.12,1.04,"#cfc8b8",{rot:m(A,_)})}if(!h(x,17)){if(v%22===0){let T=v/22%2?1:-1,A=new ai(w(T*3),t,null),M=E.clone().multiplyScalar(-T),b=Math.atan2(-M.dot(A.east),-M.dot(A.south));A.model("light-curved",0,0,{h:4.8,rot:b}),A.sub(0,0,b).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"}),s.addCircle(A.center,.2)}if(v%18===9)for(let T of[-1,1]){let A=w(T*(5.2+o()*1.5));if(s.isWater(A)||s.blocked(A,1))continue;let M=4.2+o()*1.8;new ai(A,t,null).model(a(W0),0,0,{s:[M,3.4+o(),M],rot:o()*6.3}),s.addCircle(A,.35)}v%26===13&&y.push({id:`r${y.length}`,dir:w((o()-.5)*2.4)})}}let p=0;for(let v=0;v<600&&p<10;v++){let x=f(),_=Math.asin(x.y)/Jn,E=_>48,w=_<Ar&&_>Oo+1.5;p<6&&!E||p>=6&&!w||s.blocked(x,.8)||h(x,20)||(y.push({id:`x${p}`,dir:x.clone()}),p++)}return{mesh:r,path:n,coinSpots:y}}var ti=s=>new Tt(s),Rw=ti("#4fa7ec"),Cw=ti("#cdeefa"),Iw=ti("#5866b8"),Pw=ti("#ffad72"),Lw=ti("#0b1230"),Dw=ti("#27325c"),Nw=ti("#7f8b99"),Uw=ti("#b8c2cc"),Ow=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Bw=`
uniform vec3 top; uniform vec3 horizon; uniform vec3 up; uniform vec3 sunDir; uniform vec3 sunCol;
uniform float moon; uniform float space;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = dot(d, up);
  vec3 c = mix(horizon, top, smoothstep(-0.08, 0.55, h));
  float s = max(dot(d, sunDir), 0.0);
  c += sunCol * (smoothstep(0.9985, 0.9992, s) * 1.6 + pow(s, 14.0) * 0.28);
  float m = max(dot(d, -sunDir), 0.0);
  c += vec3(0.95, 0.95, 0.85) * smoothstep(0.9988, 0.9993, m) * moon;
  c = mix(c, vec3(0.02, 0.035, 0.09), space);
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,al=class{constructor(t,e=!0){if(this.scene=t,this.hemi=new Sr(15135999,8034920,1.2),this.sun=new ts(16774108,2.6),e){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let o=this.sun.shadow.camera;o.left=o.bottom=-38,o.right=o.top=38,o.near=40,o.far=170,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04}t.add(this.hemi,this.sun,this.sun.target),this.u={top:{value:new Tt},horizon:{value:new Tt},up:{value:new S(0,1,0)},sunDir:{value:new S(1,0,0)},sunCol:{value:new Tt("#fff2c4")},moon:{value:0},space:{value:0}},this.dome=new Dt(new Xt(900,32,16),new Nn({uniforms:this.u,vertexShader:Ow,fragmentShader:Bw,side:Oe,depthWrite:!1,depthTest:!1})),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,t.add(this.dome);let n=1200,i=new Float32Array(n*3);for(let o=0;o<n;o++){let a=new S().randomDirection().multiplyScalar(850);i.set([a.x,a.y,a.z],o*3)}let r=new ue;r.setAttribute("position",new ee(i,3)),this.starMat=new Zn({color:0,size:2,sizeAttenuation:!1,depthTest:!1,depthWrite:!1}),this.stars=new si(r,this.starMat),this.stars.renderOrder=-9,this.stars.frustumCulled=!1,this.dome.add(this.stars),this.night=0,this.elev=0,this._t=new Tt,this._h=new Tt,this._sd=new S}update(t,e,n,i,r,o){let a=t*Math.PI*2,c=Math.sin(a);this.elev=c;let l=this._sd.copy(e.east).multiplyScalar(Math.cos(a)).addScaledVector(e.up,c).addScaledVector(e.south,.35).normalize(),h=fe.clamp((.06-c)/.28,0,1),u=Math.max(0,1-Math.abs(c-.02)/.32)*(1-h*.6);this.night=h;let f=this._t.copy(Rw).lerp(Lw,h).lerp(Iw,u*.55),d=this._h.copy(Cw).lerp(Dw,h).lerp(Pw,u*.8);f.lerp(Nw,r*.65*(1-h*.7)),d.lerp(Uw,r*.65*(1-h*.7)),this.u.top.value.copy(f),this.u.horizon.value.copy(d),this.u.up.value.copy(e.up),this.u.sunDir.value.copy(l),this.u.sunCol.value.set(u>.4?"#ffc48a":"#fff2c4").multiplyScalar((1-h)*(1-r*.85)),this.u.moon.value=h*(1-r),this.u.space.value=o,this.dome.position.copy(i);let g=Math.max(h*(1-r),o);this.starMat.color.setScalar(g),this.stars.visible=g>.01,this.sun.target.position.copy(n),c>-.04?(this.sun.position.copy(n).addScaledVector(l,100),this.sun.color.set("#fff3dc").lerp(ti("#ffb27a"),u*.8),this.sun.intensity=2.8*(1-r*.45)*fe.clamp(c*4+.35,.25,1)):(this.sun.position.copy(n).addScaledVector(l,-100),this.sun.color.set("#9fb3ff"),this.sun.intensity=.75),this.hemi.position.copy(e.up),this.hemi.intensity=fe.lerp(1.2,.6,h)*(1-r*.2),this.scene.environmentIntensity=fe.lerp(.4,.08,h)*(1-r*.3),this.hemi.color.set("#e6f4ff").lerp(ti("#7486c8"),h),this.hemi.groundColor.set("#7a9a68").lerp(ti("#2c3550"),h);let y=fe.lerp(.62,1.2,h);for(let[m,p]of Object.entries(Pr))m!=="super"&&p.color.setScalar(y)}};var cd=1400,cl=16,$0=18,Fw=.7,ll=class{constructor(t){this.pos=new Float32Array(cd*6),this.drops=[];for(let n=0;n<cd;n++)this.drops.push([(Math.random()*2-1)*cl,Math.random()*$0,(Math.random()*2-1)*cl]);let e=new ue;e.setAttribute("position",new ee(this.pos,3)),this.mat=new Ss({color:13163760,transparent:!0,opacity:0,depthWrite:!1}),this.lines=new vr(e,this.mat),this.lines.frustumCulled=!1,t.add(this.lines),this.level=0,this.target=0,this.timer=70+Math.random()*60,this._m=new nt,this.onStart=null}update(t,e,n,i){this.timer-=t,this.timer<=0&&(this.target>0?(this.target=0,this.timer=80+Math.random()*90):(this.target=.6+Math.random()*.4,this.timer=22+Math.random()*18,this.onStart?.()));let r=i?this.target:0;if(this.level+=(r-this.level)*Math.min(1,t*.6),this.lines.visible=this.level>.02,!this.lines.visible)return;this._m.makeBasis(n.east,n.up,n.south).setPosition(e),this._m.decompose(this.lines.position,this.lines.quaternion,this.lines.scale);let o=26*t,a=this.pos;for(let c=0;c<cd;c++){let l=this.drops[c];l[1]-=o,l[1]<0&&(l[1]+=$0,l[0]=(Math.random()*2-1)*cl,l[2]=(Math.random()*2-1)*cl);let h=c*6;a[h]=l[0],a[h+1]=l[1],a[h+2]=l[2],a[h+3]=l[0]+.08,a[h+4]=l[1]+Fw,a[h+5]=l[2]}this.lines.geometry.attributes.position.needsUpdate=!0,this.mat.opacity=.55*this.level}forceStop(){this.target=0,this.timer=80+Math.random()*60}};var ld=["female-a","female-b","female-c","female-d","female-e","female-f","male-a","male-b","male-c","male-d","male-e","male-f"];function kw(s){let t=s.color||"#333";return is(e=>{s.type==="cap"?(e.add(new Xt(.34,18,10,0,Math.PI*2,0,Math.PI/2).scale(1,.55,1),t,Ot(0,0,0)),e.add(new Kt(.3,.3,.03,18,1,!1,-Math.PI/2,Math.PI).scale(1,1,1.1),t,Ot(0,.01,.12)),e.add(new Xt(.035,8,6),"#ffffff",Ot(0,.19,0))):s.type==="police"?(e.add(new Kt(.36,.32,.18,20),t,Ot(0,.09,0)),e.add(new Kt(.37,.37,.05,20),"#f3c13a",Ot(0,.05,0)),e.add(new Kt(.26,.26,.03,18,1,!1,-Math.PI/2,Math.PI),"#111",Ot(0,0,.14))):s.type==="songkok"?e.add(new Kt(.3,.32,.26,20),t,Ot(0,.13,0)):s.type==="bucket"?(e.add(new Kt(.28,.34,.24,20),t,Ot(0,.12,0)),e.add(new Kt(.5,.5,.03,24),t,Ot(0,.01,0))):s.type==="straw"?(e.add(new Kt(.26,.3,.18,20),t,Ot(0,.09,0)),e.add(new Kt(.62,.62,.03,28),t,Ot(0,.01,0)),e.add(new Kt(.305,.305,.05,20),"#e2383f",Ot(0,.05,0))):s.type==="bun"&&e.add(new Xt(.15,12,10),t,Ot(0,.02,-.12))})}function Us(s={}){let t=Xm(`character-${s.char||"male-a"}`),e=(s.h||1.75)/t.height,n=new $t;t.root.scale.setScalar(e),n.add(t.root);let i={};for(let o of["head","torso","arm-left","arm-right","leg-left","leg-right"])i[o]=t.root.getObjectByName(o);let r={root:n,c:t,s:e,bones:i,cur:null,curName:null,onceT:0,base:s.base||null};if(s.hat&&i.head){let o=kw(s.hat);o.scale.setScalar(1/e),o.position.set(0,s.hat.y??.285,.01),i.head.add(o)}return hd(r,r.base||"idle",0),r}function hd(s,t,e=.25){if(s.curName===t)return;let n=s.c.actions[t];if(!n)return;let i=s.cur,r=["walk","sprint"];n.reset(),i&&r.includes(t)&&r.includes(s.curName)&&(n.time=i.time/i.getClip().duration*n.getClip().duration),n.setLoop(Wu,1/0),n.clampWhenFinished=!1,n.setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(e).play(),s.cur&&s.cur!==n&&s.cur.fadeOut(e),s.cur=n,s.curName=t}function hl(s,t){let e=s.c.actions[t];e&&(hd(s,t,.12),e.setLoop(Gu,1),e.clampWhenFinished=!0,s.onceT=e.getClip().duration)}function hs(s,t,e=0,n=null){if(s.onceT>0)s.onceT-=t,s.onceT<=0&&(s.curName=null);else{let i=s.curName==="sprint"?e>5.8:e>6.6,r=s.curName==="walk"||s.curName==="sprint"?e>.35:e>.6,o=n||s.base||(i?"sprint":r?"walk":"idle");hd(s,o,.3);let a=1;o==="walk"?a=fe.clamp(e/3.2,.55,1.9):o==="sprint"&&(a=fe.clamp(e/9,.8,1.3)),s.cur.timeScale+=(a-s.cur.timeScale)*Math.min(1,t*8)}s.c.mixer.update(t)}function ea(s){let t=s.index.array;for(let n=0;n<t.length;n+=3){let i=t[n];t[n]=t[n+2],t[n+2]=i}let e=s.attributes.normal.array;for(let n=0;n<e.length;n++)e[n]=-e[n];return s}function K0(s="#e2383f"){return is(t=>{let e=[];for(let i=0;i<=10;i++){let r=i/10;e.push(new it(1.08*Math.sin(r*Math.PI/2),.48*Math.cos(r*Math.PI/2)))}let n=new Ki(e,16);t.add(ea(n),s,Ot(0,1.02,0)),t.add(new Ki(e.map(i=>i.clone().multiplyScalar(.985)),16),"#fff6f0",Ot(0,1,0));for(let i=0;i<8;i++){let r=i/8*Math.PI*2;t.add(new Xt(.035,6,5),"#ffffff",Ot(Math.cos(r)*1.08,1.02,Math.sin(r)*1.08)),t.add(new Kt(.008,.008,1,4),"#cccccc",Ot(Math.cos(r)*.5,1.3,Math.sin(r)*.5,0,-r,Math.PI/2-.42))}t.add(new ri(.03,.18,8),"#ffffff",Ot(0,1.58,0)),t.add(new Kt(.018,.018,1.25,8),"#8a8f96",Ot(0,.5,0)),t.add(new we(.07,.022,6,12,Math.PI),"#6b4a2e",Ot(.07,-.12,0,0,0,Math.PI)),t.add(new Kt(.026,.026,.2,8),"#6b4a2e",Ot(0,-.02,0))})}function Z0(s="#e8913a"){let t="#c86f22";return is(e=>{e.add(new Ei(.17,.32,6,12),s,Ot(0,.24,0,Math.PI/2,0,0));for(let i of[-.15,0,.15])e.add(new we(.172,.018,4,16,Math.PI),t,Ot(0,.24,i,0,0,0));e.add(new Xt(.17,18,14),s,Ot(0,.44,.3)),e.add(new Xt(.09,12,10).scale(1,.7,.8),"#ffe9d2",Ot(0,.39,.42));for(let i of[-1,1]){e.add(new ri(.06,.13,4),s,Ot(i*.09,.6,.28,0,0,-i*.25)),e.add(new ri(.035,.08,4),"#f7b7a3",Ot(i*.09,.59,.3,0,0,-i*.25)),e.add(new Xt(.03,8,6),"#2b2b1f",Ot(i*.065,.47,.44)),e.add(new Xt(.06,8,6).scale(1,.6,1.3),s,Ot(i*.1,.06,.24));for(let r of[-.012,.012])e.add(new Kt(.003,.003,.18,3),"#ffffff",Ot(i*.12,.4+r,.45,0,0,Math.PI/2+i*r*6))}e.add(new Xt(.02,6,5),"#e88080",Ot(0,.42,.47));let n=new On([[0,.12,-.3],[.18,.08,-.38],[.3,.1,-.15],[.26,.14,.05]].map(i=>new S(...i)));e.add(new Zi(n,16,.04,6),s,Ot(0,0,0))})}var J0=4,Hw=8.5,na=new be,j0=new S,Q0=new S,ud=new S,tg=new nt,ia=new S,sa=new S,ul=class{constructor(t,e,n="female-a"){this.scene=t,this.world=e,this.pos=new S(0,1,0),this.fwd=new S(0,0,1),this.alt=0,this.speed=0,this.moveDir=new S(0,0,1),this.holdT=0,this.gait=0,this.dropping=!1,this.onLand=null,this.umbOpen=0,this.root=new $t,t.add(this.root),this.umb=K0("#e2383f"),this.umb.visible=!1,this.setCharacter(n);let i=new _c(.5,24).rotateX(-Math.PI/2);this.shadow=new Dt(i,new qe({color:1911322,transparent:!0,opacity:.22,depthWrite:!1})),t.add(this.shadow)}setCharacter(t){this.person&&this.root.remove(this.person.root),this.char=t,this.person=Us({char:t}),this.root.add(this.person.root),this.umb.removeFromParent(),this.umb.position.set(-.42,1.15,.05),this.root.add(this.umb)}place(t,e){this.pos.copy(t).normalize(),this.fwd.copy(e).addScaledVector(this.pos,-e.dot(this.pos)).normalize(),this.moveDir.copy(this.fwd),this.speed=0,this.sync()}placeAtSite(t,e){let[n,i,r]=e,o=t.east.clone().multiplyScalar(Math.sin(r)).addScaledVector(t.south,Math.cos(r));this.place(t.dirAt(n,i),o)}startDrop(t=22){this.alt=t,this.dropping=!0,this.speed=0}worldPos(t=new S){return t.copy(this.pos).multiplyScalar(Ft+this.alt)}update(t,e,n,i){if(Q0.copy(this.pos),this.dropping)this.alt=Math.max(0,this.alt-t*(2.6+this.alt*.28)),this.alt<=0&&(this.dropping=!1,this.world.settle(this.pos),hl(this.person,"jump"),this.onLand?.());else{let a=this.pos,c=e?Math.min(1,Math.hypot(e.x,e.y)):0,l=0;if(c>.08){let h=ud.copy(i||this.fwd).addScaledVector(a,-(i||this.fwd).dot(a)).normalize();ia.crossVectors(h,a),this.moveDir.copy(h).multiplyScalar(e.y).addScaledVector(ia,e.x).normalize(),this.holdT+=t;let u=e.run?1:fe.clamp((this.holdT-2.5)/1.5,0,1);l=(J0+(Hw-J0)*u)*c;let f=Math.atan2(ia.crossVectors(this.fwd,this.moveDir).dot(a),this.fwd.dot(this.moveDir));this.fwd.applyAxisAngle(a,fe.clamp(f,-10*t,10*t))}else this.holdT=0;this.speed+=(l-this.speed)*Math.min(1,t*(l>this.speed?8:10)),this.moveDir.addScaledVector(a,-this.moveDir.dot(a)).normalize(),this.speed>.01&&this.move(this.speed*t)}let r=t>0?Math.acos(Math.min(1,Q0.dot(this.pos)))*Ft/t:0;this.gait+=(Math.min(r,Math.abs(this.speed)+.5)-this.gait)*Math.min(1,t*8);let o=this.dropping||n;if(this.umbOpen+=((o?1:0)-this.umbOpen)*Math.min(1,t*6),this.umb.visible=this.umbOpen>.03,this.umb.scale.setScalar(Math.max(.01,this.umbOpen)),hs(this.person,t,this.gait,this.dropping?"fall":null),this.umbOpen>.03){let a=this.person.bones["arm-right"];a.rotation.set(a.rotation.x*(1-this.umbOpen),0,-2.6*this.umbOpen)}this.sync()}move(t){let e=Math.ceil(Math.abs(t)/.15);for(let n=0;n<e;n++)if(!this.step(t/e)){this.speed*=.7;return}}step(t){if(this.tryMove(this.moveDir,t))return!0;for(let e of[.6,-.6,1.2,-1.2])if(ud.copy(this.moveDir).applyAxisAngle(this.pos,e),this.tryMove(ud,t*Math.cos(e)))return!0;return!1}tryMove(t,e){return j0.crossVectors(this.pos,t).normalize(),na.setFromAxisAngle(j0,e/Ft),sa.copy(this.pos).applyQuaternion(na),!this.world.settle(sa)||this.world.blocked(sa)&&!this.world.blocked(this.pos)?!1:(na.setFromUnitVectors(this.pos,sa),this.pos.copy(sa),this.fwd.applyQuaternion(na).addScaledVector(this.pos,-this.fwd.dot(this.pos)).normalize(),this.moveDir.applyQuaternion(na),!0)}sync(){ia.crossVectors(this.pos,this.fwd),tg.makeBasis(ia,this.pos,this.fwd),this.root.quaternion.setFromRotationMatrix(tg),this.root.position.copy(this.pos).multiplyScalar(Ft+this.alt),this.shadow.quaternion.copy(this.root.quaternion),this.shadow.position.copy(this.pos).multiplyScalar(Ft+.04),this.shadow.material.opacity=.22*Math.max(.15,1-this.alt/20)}};var Cn={dist:5,minDist:2.6,maxDist:12,pitch:.3,minPitch:-.1,maxPitch:1.2,pivot:1.1,lookAhead:2.6,lookRise:.5,follow:1.6},fl=new S,fd=new S,dd=new S,ra=new S,oa=new be,eg=new S,zw=new S,ng=new S,ig=new S,sg=new S,Vw=new S,Gw=new S,Ww=(s,t,e)=>Math.atan2(Vw.crossVectors(s,t).dot(e),s.dot(t)),dl=class{constructor(t){this.cam=t,this.dist=Cn.dist,this.lookUp=0,this.lookUpTarget=0,this.world=null,this.fwd=new S(0,0,1),this.pitch=Cn.pitch,this.spin=0,this.yaw=0,this.yawS=0,this.mode="map",this.mapDir=new S(0,.3,1).normalize(),this.mapUp=new S(0,1,0),this.mapDist=200,this.tween=null,this.look=new S,this.upv=new S(0,1,0),this.dragging=!1,this.autoSpin=0,this.arm=Cn.dist,this.blend=0,t.position.copy(this.mapDir).multiplyScalar(this.mapDist)}zoom(t){this.mode==="map"?this.mapDist=fe.clamp(this.mapDist+t*.15,120,280):this.dist=fe.clamp(this.dist*(1+t*.0012),Cn.minDist,Cn.maxDist)}drag(t,e){this.mode==="map"?this.rotateMap(t,e):(this.spin-=t*.0055,this.pitch=fe.clamp(this.pitch+e*.004,Cn.minPitch,Cn.maxPitch))}resetView(){this.yaw=this.yawS=0,this.pitch=Cn.pitch,this.blend=0}rotateMap(t,e){oa.setFromAxisAngle(this.mapUp,-t*.006),this.mapDir.applyQuaternion(oa),eg.crossVectors(this.mapDir,this.mapUp).normalize(),oa.setFromAxisAngle(eg,e*.006),this.mapDir.applyQuaternion(oa).normalize(),this.mapUp.applyQuaternion(oa),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize()}openMap(t,e){this.mode="map",this.mapDir.copy(t).normalize(),this.mapUp.copy(e).addScaledVector(this.mapDir,-e.dot(this.mapDir)).normalize()}flyTo(t,e,n){this.tween={from:this.mapDir.clone(),to:t.clone().normalize(),t:0,dur:e,done:n}}armDir(t,e,n,i){return t.copy(n).multiplyScalar(-Math.cos(i)).addScaledVector(e,Math.sin(i))}castArm(t,e,n,i){let r=this.armDir(Gw,e,n,i);ig.crossVectors(r,e).normalize();let o=this.dist;for(let[a,c]of[[0,0],[.25,0],[-.25,0],[0,.2],[0,-.2]])sg.copy(t).addScaledVector(ig,a).addScaledVector(e,c),o=Math.min(o,this.world.rayDist(sg,r,this.dist)-.3);return o}update(t,e){if(this.mode==="map"){if(this.tween){let r=this.tween;r.t=Math.min(1,r.t+t/r.dur);let o=r.t<.5?2*r.t*r.t:1-Math.pow(-2*r.t+2,2)/2;this.mapDir.copy(r.from).lerp(r.to,o).normalize(),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize(),r.t>=1&&(this.tween=null,r.done?.())}else this.autoSpin&&this.rotateMap(this.autoSpin*t,0);fl.copy(this.mapDir).multiplyScalar(this.mapDist),fd.set(0,0,0),dd.copy(this.mapUp),this.blend=0}else{let r=dd.copy(e.pos);this.blend===0&&this.fwd.copy(e.fwd),this.fwd.addScaledVector(r,-this.fwd.dot(r)).normalize(),this.spin&&(this.fwd.applyAxisAngle(r,this.spin),this.spin=0);let o=Math.min(1,Math.abs(e.speed)/4);!this.dragging&&o>.05&&e.moveDir.dot(this.fwd)>-.35&&this.fwd.applyAxisAngle(r,Ww(this.fwd,e.fwd,r)*Math.min(1,t*Cn.follow*o)),!this.dragging&&o>.05&&(this.yaw*=Math.exp(-t*1.5)),this.yawS+=(this.yaw-this.yawS)*(1-Math.exp(-t*4)),ra.copy(this.fwd).applyAxisAngle(r,this.yawS),this.lookUp+=(this.lookUpTarget-this.lookUp)*Math.min(1,t*1.5);let a=fe.lerp(this.pitch,.05,this.lookUp),c=e.worldPos(zw).addScaledVector(r,Cn.pivot),l=a,h=this.dist;if(this.world&&!e.dropping){let f=-1;for(let d of[a,a-.18,a-.36,-.05]){if(d<-.1||d<a&&f>=this.dist*.9)continue;let g=this.castArm(c,r,ra,d);g>f+.4&&(f=g,l=d)}}this.pitchS=this.pitchS===void 0||this.blend===0?l:this.pitchS+(l-this.pitchS)*Math.min(1,t*(l<this.pitchS?8:1.5)),this.armDir(ng,r,ra,this.pitchS),this.world&&!e.dropping&&(h=Math.max(1,this.castArm(c,r,ra,this.pitchS))),this.arm=h<this.arm?h:this.arm+(h-this.arm)*Math.min(1,t*3),fl.copy(c).addScaledVector(ng,this.arm);let u=this.cam.aspect<1?Cn.lookAhead*.55:Cn.lookAhead;fd.copy(c).addScaledVector(ra,u*(1-this.lookUp)).addScaledVector(r,Cn.lookRise+this.lookUp*11)}let n=1-Math.exp(-t*3.2);this.mode!=="map"&&(this.blend<1&&this.cam.position.distanceTo(fl)<.5&&(this.blend=1),this.blend===0&&(this.blend=.01),n=this.blend>=1?1:1-Math.exp(-t*6)),this.cam.position.lerp(fl,n);let i=Ft+.4;this.cam.position.length()<i&&this.cam.position.setLength(i),this.look.lerp(fd,n),this.upv.lerp(dd,n).normalize(),this.cam.up.copy(this.upv),this.cam.lookAt(this.look)}};var pl=class{constructor(t,e,n){this.keys=new Set,this.pressed=new Set,this.joy={x:0,y:0},this.onDrag=null,this.onZoom=null,addEventListener("keydown",m=>{m.target.tagName!=="INPUT"&&(m.repeat||this.pressed.add(m.code),this.keys.add(m.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(m.code)&&m.preventDefault())}),addEventListener("keyup",m=>this.keys.delete(m.code)),addEventListener("blur",()=>this.keys.clear());let i=null,r=0,o=new Map,a=()=>{let[m,p]=[...o.values()];return Math.hypot(m.x-p.x,m.y-p.y)};t.addEventListener("pointerdown",m=>{o.set(m.pointerId,{x:m.clientX,y:m.clientY}),t.setPointerCapture(m.pointerId),o.size===2?(i=null,r=a()):o.size===1&&(i={id:m.pointerId,x:m.clientX,y:m.clientY},this.dragging=!0)}),t.addEventListener("pointermove",m=>{if(o.has(m.pointerId)){if(o.set(m.pointerId,{x:m.clientX,y:m.clientY}),o.size===2){let p=a();this.onZoom?.((r-p)*3),r=p;return}!i||i.id!==m.pointerId||(this.onDrag?.(m.clientX-i.x,m.clientY-i.y),i.x=m.clientX,i.y=m.clientY)}});let c=m=>{o.delete(m.pointerId),i&&i.id===m.pointerId&&(i=null),o.size||(this.dragging=!1)};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),t.addEventListener("wheel",m=>{m.preventDefault(),this.onZoom?.(m.deltaY)},{passive:!1});let l=null,h=0,u=0,f=46,d=(m,p)=>{n.style.transform=`translate(${m}px, ${p}px)`};e.addEventListener("pointerdown",m=>{m.preventDefault(),l=m.pointerId,e.setPointerCapture(l);let p=e.getBoundingClientRect();h=p.left+p.width/2,u=p.top+p.height/2,g(m)});let g=m=>{if(m.pointerId!==l)return;let p=m.clientX-h,v=m.clientY-u,x=Math.hypot(p,v);x>f&&(p*=f/x,v*=f/x),d(p,v),this.joy.x=p/f,this.joy.y=-v/f};e.addEventListener("pointermove",g);let y=m=>{m.pointerId===l&&(l=null,this.joy.x=this.joy.y=0,d(0,0))};e.addEventListener("pointerup",y),e.addEventListener("pointercancel",y)}has(...t){return t.some(e=>this.keys.has(e))}axis(){let t=(this.has("KeyD","ArrowRight")?1:0)-(this.has("KeyA","ArrowLeft")?1:0),e=(this.has("KeyW","ArrowUp")?1:0)-(this.has("KeyS","ArrowDown")?1:0);Math.hypot(this.joy.x,this.joy.y)>.15&&(t+=this.joy.x,e+=this.joy.y);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,y:e,run:this.has("ShiftLeft","ShiftRight")}}consume(...t){for(let e of t)if(this.pressed.has(e))return this.pressed.delete(e),e;return null}endFrame(){this.pressed.clear()}};var ml=class{constructor(t){this.audio=t,this.el=document.getElementById("dlg"),this.nameEl=this.el.querySelector(".dlg-name"),this.textEl=this.el.querySelector(".dlg-text"),this.choicesEl=this.el.querySelector(".dlg-choices"),this.nextEl=this.el.querySelector(".dlg-next"),this.open=!1,this.typing=!1,this._res=null,this.el.addEventListener("pointerdown",e=>{e.target.closest("button")||this.advance()})}say(t,e){return this._show(t,e,null)}choose(t,e,n){return this._show(t,e,n)}_show(t,e,n){return this.open=!0,this.pendingHide=!1,this.el.classList.remove("hidden"),this.nameEl.textContent=t||"",this.nameEl.style.display=t?"":"none",this.choicesEl.innerHTML="",this.nextEl.style.visibility="hidden",this.opts=n,this.full=e,this.shown=0,this.typing=!0,this.blipT=0,new Promise(i=>{this._res=i})}update(t){!this.open||!this.typing||(this.shown+=t*55,this.blipT-=t,this.blipT<=0&&(this.audio.blip(),this.blipT=.09),this.shown>=this.full.length?this._doneTyping():this.textEl.textContent=this.full.slice(0,Math.floor(this.shown)))}_doneTyping(){this.typing=!1,this.textEl.textContent=this.full,this.opts?this.opts.forEach((t,e)=>{let n=document.createElement("button");n.textContent=`${e+1}. ${t}`,n.addEventListener("click",()=>this.pick(e)),this.choicesEl.appendChild(n)}):this.nextEl.style.visibility="visible"}advance(){if(this.open){if(this.typing){this._doneTyping();return}this.opts||this._finish(void 0)}}pick(t){!this.open||this.typing||!this.opts||t<0||t>=this.opts.length||(this.audio.blip(),this._finish(t))}_finish(t){let e=this._res;this._res=null,this.pendingHide=!0,setTimeout(()=>{this.pendingHide&&this.close()},0),e?.(t)}close(){this.open=!1,this.typing=!1,this.el.classList.add("hidden")}};var Je=s=>document.getElementById(s),gl=class{constructor(){this.hud=Je("hud"),this.wallet=Je("wallet"),this.clock=Je("clock"),this.albumPill=Je("albumPill"),this.toasts=Je("toasts"),this.promptEl=Je("prompt"),this.taskList=Je("taskList"),this.taskCount=Je("taskCount"),this.modalEl=Je("modal"),this.modalBody=this.modalEl.querySelector(".modal-body"),this.fadeEl=Je("fade"),this.flashEl=Je("flash"),this.promptHit=!1,this.onTask=null,this.promptEl.addEventListener("pointerdown",t=>{t.preventDefault(),this.promptHit=!0}),this.modalEl.querySelector(".modal-x").addEventListener("click",()=>this.closeModal()),this.modalEl.addEventListener("pointerdown",t=>{t.target===this.modalEl&&this.closeModal()}),Je("tasksHead").addEventListener("click",()=>Je("tasks").classList.toggle("collapsed")),matchMedia("(max-width: 640px)").matches&&Je("tasks").classList.add("collapsed")}loading(t,e){Je("loading").querySelector("span").textContent=t,e!==void 0&&(Je("loading").querySelector(".bar i").style.width=`${Math.round(e*100)}%`)}doneLoading(){Je("loading").classList.add("hidden")}showHud(t){this.hud.classList.toggle("hidden",!t)}setMoney(t,e=!1){this.wallet.textContent=`\u{1F4B0} $${t}`,e&&(this.wallet.classList.remove("bump"),this.wallet.offsetWidth,this.wallet.classList.add("bump"))}setClock(t,e,n){let i=Math.floor(t),r=Math.floor((t-i)*60/15)*15,o=n?"\u{1F327}\uFE0F":e?"\u{1F319}":t<7.5||t>18?"\u{1F305}":"\u2600\uFE0F",a=(i+11)%12+1;this.clock.textContent=`${o} ${a}:${String(r).padStart(2,"0")}${i<12?"am":"pm"}`}setAlbum(t,e){this.albumPill.textContent=`\u{1F37D}\uFE0F ${t}/${e}`}toast(t,e=2800){let n=document.createElement("div");for(n.className="toast",n.textContent=t,this.toasts.appendChild(n);this.toasts.children.length>3;)this.toasts.firstChild.remove();setTimeout(()=>n.classList.add("out"),e),setTimeout(()=>n.remove(),e+500)}prompt(t){t?(this.promptEl.dataset.label!==t&&(this.promptEl.dataset.label=t,this.promptEl.innerHTML=`<kbd>E</kbd> ${t}`),this.promptEl.classList.remove("hidden")):(this.promptEl.classList.add("hidden"),this.promptHit=!1)}takePromptHit(){let t=this.promptHit;return this.promptHit=!1,t}renderTasks(t){let e=t.filter(n=>!n.hidden);this.taskCount.textContent=`${e.filter(n=>n.done).length}/${e.length}`,this.taskList.innerHTML="";for(let n of t){let i=document.createElement("li");i.className=(n.done?"done ":"")+(n.hidden?"hidden-task":""),i.innerHTML=`<div class="t-title">${n.done?"\u2705":"\u2B1C"} ${n.title}</div>${n.done||!n.hint?"":`<div class="t-hint">${n.hint}</div>`}`,!n.done&&n.site&&i.addEventListener("click",()=>this.onTask?.(n)),this.taskList.appendChild(i)}}modal(t,e=""){return this.modalBody.innerHTML=t,this.modalEl.className=e,this.modalEl.classList.remove("hidden"),this.isModal=!0,this.modalBody}closeModal(){this.modalEl.classList.add("hidden"),this.isModal=!1,this.onModalClose?.(),this.onModalClose=null}fade(t,e=600){return this.fadeEl.style.transitionDuration=`${e}ms`,this.fadeEl.style.opacity=t,this.fadeEl.style.pointerEvents=t>0?"auto":"none",new Promise(n=>setTimeout(n,e))}flash(){this.flashEl.classList.remove("go"),this.flashEl.offsetWidth,this.flashEl.classList.add("go")}};var pd="sgplanet.save.v1";function md(){return{money:Am,flags:{},foods:{},coins:{},time:.1,pos:null,settings:{music:!0,sfx:!0,rain:!0}}}var yl=class{constructor(){this.data=md(),this.exists=!1;try{let t=localStorage.getItem(pd);if(t){let e=JSON.parse(t);this.data={...md(),...e,settings:{...md().settings,...e.settings||{}}},this.exists=!0}}catch{}}write(){try{localStorage.setItem(pd,JSON.stringify(this.data))}catch{}}reset(){try{localStorage.removeItem(pd)}catch{}location.reload()}};var $r=s=>261.63*Math.pow(2,s/12),Xw=[[0,"M"],[-3,"m"],[-7,"M"],[-5,"M"]],rg=[0,2,4,7,9,12,14,16];function og(s){let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}var xl=class{constructor(t){this.settings=t,this.ctx=null,this.night=0}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.9,this.master.connect(e.destination),this.mus=e.createGain(),this.mus.gain.value=this.settings.music?.16:0,this.mus.connect(this.master),this.fx=e.createGain(),this.fx.gain.value=this.settings.sfx?.5:0,this.fx.connect(this.master);let n=e.sampleRate*2,i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;let o=e.createBufferSource();o.buffer=i,o.loop=!0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=1200,this.rain=e.createGain(),this.rain.gain.value=0,o.connect(a).connect(this.rain).connect(this.fx),o.start(),this.step=0,this.next=e.currentTime+.3,setInterval(()=>this.schedule(),120)}this.ctx.resume?.()}setMusic(t){this.settings.music=t,this.ctx&&this.mus.gain.setTargetAtTime(t?.16:0,this.ctx.currentTime,.2)}setSfx(t){this.settings.sfx=t,this.ctx&&this.fx.gain.setTargetAtTime(t?.5:0,this.ctx.currentTime,.1)}setRain(t){this.ctx&&this.rain.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.5)}tone(t,e,n,i="sine",r=.2,o=this.fx,a=0){let c=this.ctx,l=c.createOscillator(),h=c.createGain();l.type=i,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n),h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(r,e+.012),h.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(h).connect(o),l.start(e),l.stop(e+n+.05)}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let t=60/92/2;for(;this.next<this.ctx.currentTime+.5;)this.playStep(this.step,this.next),this.step++,this.next+=t}playStep(t,e){let n=Math.floor(t/8)%4,i=t%8,[r,o]=Xw[n],a=o==="M"?4:3;if((i===0||i===4)&&this.tone($r(r-12),e,.5,"triangle",.32,this.mus),i===0)for(let l of[0,a,7])this.tone($r(r+l),e,1.7,"sine",.05,this.mus);if(og(t%32)<(this.night>.5?.3:.5)){let l=rg[Math.floor(og(t%32+99)*rg.length)];this.tone($r(l+12),e,.3,this.night>.5?"sine":"triangle",.1,this.mus)}}now(){return this.ctx?this.ctx.currentTime:0}blip(){this.ctx&&this.tone(620+Math.random()*120,this.now(),.05,"triangle",.08)}coin(){if(!this.ctx)return;let t=this.now();this.tone(988,t,.08,"square",.1),this.tone(1319,t+.07,.2,"square",.1)}success(){if(!this.ctx)return;let t=this.now();[0,4,7,12].forEach((e,n)=>this.tone($r(e+12),t+n*.09,.4,"triangle",.18))}buy(){if(!this.ctx)return;let t=this.now();this.tone($r(19),t,.12,"triangle",.14),this.tone($r(24),t+.1,.25,"triangle",.14)}meow(){this.ctx&&this.tone(780,this.now(),.45,"sine",.18,this.fx,480)}shutter(){if(!this.ctx)return;let t=this.now();this.tone(2400,t,.04,"square",.12),this.tone(1200,t+.06,.06,"square",.1)}whoosh(){this.ctx&&this.tone(300,this.now(),.6,"sine",.12,this.fx,900)}pop(){this.ctx&&this.tone(200+Math.random()*300,this.now(),.25,"triangle",.12,this.fx,60)}};var qw=Math.cos(1.3/Ft),_l=class{constructor(t,e,n,i){this.save=n,this.onPick=i,this.items=[],this.total=e.length;let r=new Kt(.42,.42,.1,18).rotateX(Math.PI/2),o=new nt;for(let a of e){if(n.data.coins[a.id])continue;let c=new $t,l=Cr(a.dir);o.makeBasis(l.east,l.up,l.south).setPosition(a.dir.clone().multiplyScalar(Ft)),o.decompose(c.position,c.quaternion,c.scale);let h=Dr(r,"#ffc93a",.04),u=Dr(new Be(.22,.22,.14),"#ffe58a",0);u.rotation.z=Math.PI/4,h.add(u),h.position.y=1,c.add(h),t.add(c),this.items.push({id:a.id,dir:a.dir,grp:c,coin:h,ph:Math.random()*6})}}get found(){return Object.keys(this.save.data.coins).length}update(t,e,n){for(let i=this.items.length-1;i>=0;i--){let r=this.items[i];r.coin.rotation.y+=t*2.5,r.coin.position.y=1+Math.sin(e*3+r.ph)*.12,n.alt<1.5&&n.pos.dot(r.dir)>qw&&(r.grp.removeFromParent(),this.items.splice(i,1),this.save.data.coins[r.id]=1,this.onPick(r))}}};var vl=class{constructor(t,e,n){this.scene=t,this.world=e,this.player=n,this.list=[],this.walkers=[]}add(t,e,n,i,r,o={}){let[a,c,l]=e,h=Us(n);t.put(h.root,a,c,l,n.y||0),this.scene.add(h.root),t.solidCircle(a,c,.35);let u={site:t,x:a,z:c,rot:l,person:h,name:i,talking:!1};return this.world.addAct({dir:t.dirAt(a,c),r:o.r||2.8,label:o.label||`Talk to ${i}`,show:o.show,run:async()=>{let[f,d]=t.toLocal(this.player.pos);n.base||t.put(h.root,a,c,Math.atan2(f-a,d-c),n.y||0),u.talking=!0;try{await r(u)}finally{u.talking=!1,t.put(h.root,a,c,l,n.y||0)}}}),this.list.push(u),u}cheer(t){hl(t.person,"emote-yes")}walker(t,e,n,i,r=1.3){let o=Us(e);this.scene.add(o.root);let a=Math.hypot(i[0]-n[0],i[1]-n[1]);this.walkers.push({site:t,person:o,a:n,b:i,len:a,s:Math.random(),dirn:1,speed:r,pause:0})}update(t){for(let e of this.list)hs(e.person,t,0,e.talking&&!e.person.base?"interact-right":null);for(let e of this.walkers){if(e.pause>0){e.pause-=t,hs(e.person,t,0);continue}e.s+=e.dirn*e.speed*t/e.len,(e.s>1||e.s<0)&&(e.s=Math.min(1,Math.max(0,e.s)),e.dirn*=-1,e.pause=1+Math.random()*2);let n=e.a[0]+(e.b[0]-e.a[0])*e.s,i=e.a[1]+(e.b[1]-e.a[1])*e.s,r=Math.atan2((e.b[0]-e.a[0])*e.dirn,(e.b[1]-e.a[1])*e.dirn);e.site.put(e.person.root,n,i,r),hs(e.person,t,e.speed)}}};var Kr=new S,gd=new S,Ml=class{constructor(t){this.G=t,this.root=document.getElementById("labels"),this.hint=document.getElementById("mapHint"),this.open=!1,this.labels=t.siteList.map(e=>{let n=document.createElement("button");return n.className="map-label",n.innerHTML=`<span class="ml-icon">${e.def.icon}</span><span class="ml-name">${e.def.name}</span><span class="ml-badge">!</span>`,n.addEventListener("click",()=>t.travel(e)),this.root.appendChild(n),{site:e,el:n}}),this.me=document.createElement("div"),this.me.className="map-me",this.me.textContent="You are here",this.root.appendChild(this.me)}show(t,e=null){let{rig:n,player:i}=this.G;this.open=t,this.root.classList.toggle("show",t),this.hint.classList.toggle("hidden",!t),t?(n.openMap(i.pos,i.fwd),e&&n.flyTo(e.center,.9),this.focus=e?.id||null):(n.mode="follow",n.tween=null)}update(t){if(!this.open&&!this.G.titleOpen)return;let e=this.G.camera;gd.copy(e.position).normalize();let n=innerWidth,i=innerHeight;for(let a of this.labels){let c=a.site.center.dot(gd);Kr.copy(a.site.center).multiplyScalar(Ft+4).project(e);let l=c>.15&&this.open;a.el.style.display=l?"":"none",l&&(a.el.style.transform=`translate(${(Kr.x*.5+.5)*n}px, ${(-Kr.y*.5+.5)*i}px) translate(-50%, -100%)`,a.el.style.opacity=Math.min(1,(c-.15)*4),a.el.classList.toggle("active",t.has(a.site.id)),a.el.classList.toggle("focus",this.focus===a.site.id))}let r=this.G.player.pos.dot(gd),o=this.open&&r>.1;this.me.style.display=o?"":"none",o&&(Kr.copy(this.G.player.pos).multiplyScalar(Ft+1).project(e),this.me.style.transform=`translate(${(Kr.x*.5+.5)*n}px, ${(-Kr.y*.5+.5)*i}px) translate(-50%, -50%)`)}};var ag=["#ff5a5f","#ffd23f","#3ec1d3","#ff8fd8","#9cff6b","#ffffff"],cg=new S,bl=new S,wl=class{constructor(t){this.scene=t,this.bursts=[],this.fw=0,this.fwTimer=0,this.onBang=null}burst(t,e,n,i=90,r=7,o=1.6,a=.4){let c=new Float32Array(i*3),l=[];for(let d=0;d<i;d++)c.set([t.x,t.y,t.z],d*3),l.push(new S().randomDirection().multiplyScalar(r*(.55+Math.random()*.45)));let h=new ue;h.setAttribute("position",new ee(c,3));let u=new Zn({color:n,size:a,transparent:!0,depthWrite:!1,blending:$a}),f=new si(h,u);f.frustumCulled=!1,this.scene.add(f),this.bursts.push({pts:f,vel:l,up:e.clone(),t:0,life:o})}fireworks(t){this.fw=t,this.fwTimer=0}update(t,e){for(let n=this.bursts.length-1;n>=0;n--){let i=this.bursts[n];i.t+=t;let r=i.pts.geometry.attributes.position;for(let o=0;o<i.vel.length;o++){let a=i.vel[o];a.addScaledVector(i.up,-3*t).multiplyScalar(1-t*1.2),r.array[o*3]+=a.x*t,r.array[o*3+1]+=a.y*t,r.array[o*3+2]+=a.z*t}r.needsUpdate=!0,i.pts.material.opacity=Math.max(0,1-i.t/i.life),i.t>i.life&&(i.pts.removeFromParent(),i.pts.geometry.dispose(),i.pts.material.dispose(),this.bursts.splice(n,1))}this.fw>0&&(this.fw-=t,this.fwTimer-=t,this.fwTimer<=0&&(this.fwTimer=.3+Math.random()*.45,bl.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).addScaledVector(e.pos,-0).normalize(),bl.addScaledVector(e.pos,-bl.dot(e.pos)).normalize(),cg.copy(e.pos).multiplyScalar(Ft+16+Math.random()*8).addScaledVector(bl,4+Math.random()*10).addScaledVector(e.fwd,10),this.burst(cg,e.pos,ag[Math.random()*ag.length|0],120,9,1.9,.6),this.onBang?.()))}};var lg=.5,Os=new S,Zr=new S,Sl=new S,yd=new nt,xd=new S;function Yw(){let n=is(i=>{let r=(o,a,c,l,h,u,f,d,g)=>i.add(new Nr(o,a,c,3,l),h,Ot(u,f,d),0,g);r(2.5,3.75,10.2,.32,"#f4f4f0",0,2.425,0),r(2.52,1.6,10.219999999999999,.3,"#3fae49",0,3.5,0),r(2.52,.35,10.219999999999999,.12,"#3fae49",0,.75,0),r(2.53,.9,9,.08,"#24323d",0,3.25,-.2,"win"),r(2.53,.85,6.999999999999999,.08,"#24323d",0,1.85,-1.2,"win"),r(2.2,2.4,.05,.05,"#2c3a45",0,2.55,5.109999999999999,"win"),r(1.6,.32,.06,.04,"#ffb347",0,3.98,5.119999999999999,"win"),r(.9,1.9,.06,.05,"#2c3a45",1.26,1.55,3.3,"win");for(let o of[-.85,.85])i.add(new Kt(.16,.16,.06,12),"#fff6c8",Ot(o,.95,5.119999999999999,Math.PI/2,0,0),0,"win");for(let o of[-1,1])i.add(new Be(.06,.5,.3),"#222",Ot(o*1.37,2.6,4.699999999999999));for(let o of[-3.3,3.1])for(let a of[-1,1])i.add(new Kt(.52,.52,.34,18),"#1e1e24",Ot(a*1.05,.52,o,0,0,Math.PI/2)),i.add(new Kt(.28,.28,.36,12),"#b9c0c6",Ot(a*1.05,.52,o,0,0,Math.PI/2))});return n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),n}function $w(s){let t=new $t,e=Uc(s);Ho(s,{w:3.6}).mat.decompose(e.position,e.quaternion,e.scale),t.add(e);let n=[];e.traverse(r=>{/^wheel/.test(r.name)&&n.push(r)});let{box:i}=rs(s);return e.position.x-=(i.min.x+i.max.x)/2*e.scale.x,e.position.z-=(i.min.z+i.max.z)/2*e.scale.z,{mesh:t,wheels:n,hw:(i.max.x-i.min.x)/2*e.scale.x,hl:(i.max.z-i.min.z)/2*e.scale.z}}var El=class{constructor(t,e,n,i){this.path=e,this.player=n,this.cars=[];let r=e.length,o=[["bus",1],["taxi",1],["sedan",1],["suv",-1],["taxi",-1],["van",1],["bus",-1],["delivery",-1],["hatchback-sports",1],["police",-1]];o.forEach(([a,c],l)=>{let h=a==="bus"?{mesh:Yw(),wheels:[],hw:1.3,hl:5.15}:$w(a);t.add(h.mesh),i?.addMover(h.mesh,h.hw,h.hl),this.cars.push({...h,kind:a,dir:c,s:l/o.length*r,v:0,top:a==="bus"?6.5:8+Math.random()*2,len:h.hl+.3})})}update(t){let e=this.path.length;for(let n of this.cars){let i=Math.floor(n.s)%e,r=n.s-Math.floor(n.s);Os.copy(this.path[i]).lerp(this.path[(i+1)%e],r).normalize(),Zr.copy(this.path[(i+3)%e]).sub(this.path[(i-3+e)%e]).multiplyScalar(n.dir),Zr.addScaledVector(Os,-Zr.dot(Os)).normalize(),Sl.crossVectors(Os,Zr),xd.copy(this.player.pos).sub(Os).multiplyScalar(Ft);let o=xd.dot(Zr),a=xd.dot(Sl)-1.15,c=this.player.alt<2&&o>-n.len&&o<n.len+3.5&&Math.abs(a)<n.hw+.8;for(let h of this.cars){if(h===n||h.dir!==n.dir)continue;let u=((h.s-n.s)*n.dir+e)%e*lg;u>0&&u<n.len+h.len+2&&(c=!0)}let l=c?0:n.top;n.v+=(l-n.v)*Math.min(1,t*(c?5:.8)),n.s=(n.s+n.dir*n.v*t/lg+e)%e;for(let h of n.wheels)h.rotation.x+=n.v*t/.35;yd.makeBasis(Sl,Os,Zr),yd.setPosition(Os.clone().multiplyScalar(Ft).addScaledVector(Sl,1.15)),yd.decompose(n.mesh.position,n.mesh.quaternion,n.mesh.scale)}}};var aa=[{id:"kaya",name:"Kaya Toast",icon:"\u{1F35E}",where:"HDB kopitiam",desc:"Toast with coconut-egg jam and a slab of cold butter."},{id:"kopi",name:"Kopi-O",icon:"\u2615",where:"HDB kopitiam",desc:'Black coffee with sugar. Add "kosong" for no sugar.'},{id:"prata",name:"Roti Prata",icon:"\u{1F95E}",where:"HDB kopitiam",desc:"Crispy, fluffy flatbread with curry for dipping."},{id:"chicken",name:"Chicken Rice",icon:"\u{1F357}",where:"Lau Pa Sat",desc:"Poached chicken, fragrant rice, chilli and ginger."},{id:"kachang",name:"Ice Kachang",icon:"\u{1F367}",where:"Lau Pa Sat",desc:"A shaved-ice mountain with syrup, red beans and corn."},{id:"satay",name:"Satay",icon:"\u{1F362}",where:"Satay Street (night)",desc:"Grilled skewers with peanut sauce. Only after dark!"},{id:"laksa",name:"Laksa",icon:"\u{1F35C}",where:"Chinatown",desc:"Spicy coconut curry noodles with cockles and tau pok."},{id:"crab",name:"Chilli Crab",icon:"\u{1F980}",where:"Marina Bay",desc:"Sweet, spicy, eggy gravy. Mop it up with fried mantou."},{id:"icecream",name:"Ice Cream Sandwich",icon:"\u{1F366}",where:"Sentosa",desc:"A brick of ice cream wrapped in rainbow bread. $1!"}],Kw=["q_kopi","q_chope","q_photo","q_card","q_show"],_d=["hdb","chinatown","sentosa"],Zw=["Oyen ran off towards Chinatown. Check the five-foot way!","Oyen hopped on a bus to the beach\u2026 try Sentosa."],hg=["Aiyo, not enough money leh. Go pick up some coins first. Got many lying around the roads!","Wah, your wallet very light today. Come back when you got more coins, OK?"],Ni=s=>s[Math.random()*s.length|0],cn={mei:{char:"female-c",hat:{type:"bun",color:"#8a8584"}},ravi:{char:"male-d",hat:{type:"cap",color:"#ffffff"}},huat:{char:"male-e",base:"sit",y:.05},siti:{char:"female-d",hat:{type:"police",color:"#1f3157"}},tissue:{char:"female-f",hat:{type:"bun",color:"#9a9a9a"}},tan:{char:"male-f",hat:{type:"cap",color:"#f3b33d"}},kachang:{char:"female-b"},boon:{char:"male-c",hat:{type:"cap",color:"#e8735a"}},ali:{char:"male-b",hat:{type:"songkok",color:"#1d1d22"}},laksa:{char:"female-e",hat:{type:"bun",color:"#3a2a20"}},lim:{char:"male-e",hat:{type:"straw",color:"#e8cf8a"}},kenji:{char:"male-a",hat:{type:"bucket",color:"#f1e3c2"}},crab:{char:"female-a",hat:{type:"bun",color:"#2b2220"}},priya:{char:"female-b",hat:{type:"cap",color:"#4c8f6a"}},icecream:{char:"male-c",hat:{type:"straw",color:"#e8cf8a"}},raj:{char:"male-d",hat:{type:"cap",color:"#e2383f"}}},Jw={kaya:"bread",kopi:"cup-coffee",prata:"pancakes",chicken:"rice-ball",kachang:"ice-cream-cup",satay:"skewer",laksa:"bowl-soup",crab:"pot-stew",icecream:"popsicle"};function ug(s){let{dlg:t,sites:e,world:n}=s,i={add:(L,U,H,k,K,V)=>s.npcs.add(L,U,H,k,async st=>{h=st;try{await K(st)}finally{h=null}},V),cheer:L=>s.npcs.cheer(L)},r=(L,U)=>t.say(L,U),o=(L,U,H)=>t.choose(L,U,H),a=L=>s.has(L),c=(L,U,H)=>{H&&i.cheer(H),s.set(L),s.audio.success(),s.ui.toast(`\u2705 Task complete: ${U}`,3500),s.fx.burst(s.player.worldPos().addScaledVector(s.player.pos,2),s.player.pos,"#ffd23f",70,5,1.2,.35),s.refresh(),s.checkFinale()},l=async(L,U,...H)=>s.pay(U)?(s.audio.buy(),H.forEach(k=>s.addFood(k)),h&&H.forEach((k,K)=>f(h,k,K)),!0):(await r(L,Ni(hg)),!1),h=null,u=new Set,f=(L,U,H)=>{let k=Jw[U];if(!k||u.has(U))return;u.add(U);let K=L.site,[V,st]=K.toLocal(s.player.pos),ut=V-L.x,xt=st-L.z,Ut=Math.hypot(ut,xt)||1,Jt=Math.min(1,Ut*.45);K.spawn(k,L.x+ut/Ut*Jt+H*.35,L.z+xt/Ut*Jt,{h:U==="satay"?.12:.28,center:!0,y:1.08,rot:Math.random()*6})},d=e.hdb;i.add(d,d.spots.auntie,cn.mei,"Auntie Mei",async L=>{if(a("q_kopi")){await r("Auntie Mei",Ni(["Kopi-C is with evaporated milk. Kopi-peng got ice. Teh tarik is pulled tea, very frothy one!","Come back tomorrow morning ah, I save you the window seat.","Aiyo, so hot today. Drink more water, OK?"]));return}await r("Auntie Mei","Morning ah! First time here? Come, come, sit. Before you order, Auntie quiz you a bit.");let U=await o("Auntie Mei",'"Kopi-O" means coffee with\u2026?',["Sugar, no milk","Condensed milk","No sugar, no milk"]);if(U===0?await r("Auntie Mei","Wah, steady lah! You know your kopi."):U===1?await r("Auntie Mei",'Aiyo, that one is just "kopi"! Kopi-O is with sugar but no milk. Never mind, now you know.'):await r("Auntie Mei",'That one is "kopi-O kosong". Kosong means zero! Kopi-O still got sugar, OK?'),await o("Auntie Mei","So, kaya toast set? Kaya toast, two soft-boiled eggs and one kopi-O. $3 only.",["One set, please! ($3)","Maybe later"])!==0){await r("Auntie Mei","OK, OK. Auntie here whole day one.");return}await l("Auntie Mei",3,"kaya","kopi")&&(await r("Auntie Mei","Here you go! Crack the eggs, add dark soy sauce and pepper, then dip the toast inside. Shiok right?"),c("q_kopi","Kopi & Kaya Toast",L))}),i.add(d,d.spots.prata,cn.ravi,"Ravi",async()=>{if(a("f_prata")){await r("Ravi","Next time try egg prata or prata bomb. Very nice one!");return}if(await o("Ravi","Hello boss! Roti prata, fresh from the griddle. Kosong with curry, $2. You want?",["Yes please! ($2)","No thanks"])!==0){await r("Ravi","No problem! I flip until you hungry.");return}await l("Ravi",2,"prata")&&(s.set("f_prata"),await r("Ravi","Crispy outside, fluffy inside. Dip in the fish curry!"))}),i.add(d,d.spots.uncle,cn.huat,"Uncle Ah Huat",async()=>{await r("Uncle Ah Huat",Ni(["Eh, young one! The Garden Rhapsody at the Supertrees is only at night. Very nice lights, I bring my grandson last week.","Last time this whole place was kampong, you know? Now got HDB, got MRT, got everything already.","You see the orange cat? That one is Oyen. Always sleeping at the void deck, then disappear.","Lau Pa Sat got Satay Street at night. The satay there, wah, shiok!","Low crime doesn't mean no crime. If you find something, bring it to the police post, OK?"]))}),i.add(d,d.spots.officer,cn.siti,"Officer Siti",async L=>{if(a("card")&&!a("q_card")){await r("Officer Siti","An EZ-Link card? You found it in Chinatown? Let me check\u2026 Yes, the owner reported it this morning!"),await r("Officer Siti","Thank you for being so honest. The owner wanted you to have this as a thank-you."),s.give(5),s.ui.toast("\u{1F4B5} You received $5!"),c("q_card","Lost EZ-Link Card",L);return}await r("Officer Siti",Ni(["Hello! This is the Neighbourhood Police Post. Remember: low crime doesn't mean no crime!","If you find anything lost, bring it here, OK?","Walk on the pavement and use the zebra crossing ah. The buses here very fast."]))});let g=e.hawker;i.add(g,g.spots.tissue,cn.tissue,"Tissue Auntie",async()=>{if(a("tissue")){await r("Tissue Auntie","Use the tissue to chope a table, then can go order. Nobody will take your seat one!");return}if(await r("Tissue Auntie","Tissue? Tissue? Three packets, one dollar!"),await o("Tissue Auntie","You know how to chope a seat? Just put one tissue packet on the table, then it's yours.",["Buy tissue ($1)","No thanks"])===0){if(!s.pay(1)){await r("Tissue Auntie",Ni(hg));return}s.audio.buy(),s.set("tissue"),s.ui.toast("\u{1F9FB} Got tissue packets. Now chope a table!"),await r("Tissue Auntie","Thank you ah! Go chope a table quickly. Lunch crowd coming!")}}),i.add(g,g.spots.uncleTan,cn.tan,"Uncle Tan",async L=>{if(a("q_chope")){await r("Uncle Tan",Ni(["Chicken rice good or not? Come again tomorrow!","My chilli secret recipe one. Cannot tell you."]));return}if(!a("choped")){await r("Uncle Tan","Wah, lunch crowd coming already! Chope a seat first, then come back and order."),a("tissue")||await r("Uncle Tan","No tissue? The auntie at the entrance selling.");return}let U=await o("Uncle Tan","Seat choped already? Good! One plate chicken rice, roasted or steamed? $4.",["Steamed, please! ($4)","Roasted, please! ($4)","Later"]);U!==2&&await l("Uncle Tan",4,"chicken")&&(await r("Uncle Tan",U===0?"Steamed one, silky smooth! Add the chilli and ginger, very shiok.":"Roasted one, skin very crispy! Add some dark soy sauce."),await r("Uncle Tan","Go and makan at your table. Enjoy!"),c("q_chope","Chope a Table",L))}),i.add(g,g.spots.kachang,cn.kachang,"Auntie Lan",async()=>{if(a("f_kachang")){await r("Auntie Lan","Eat fast before it melt!");return}await o("Auntie Lan","Ice kachang! Shaved ice, rose syrup, red bean, attap chee, corn, gula melaka on top. $2. Want?",["Yes! ($2)","Later"])===0&&await l("Auntie Lan",2,"kachang")&&(s.set("f_kachang"),await r("Auntie Lan","Big mountain for you!"))}),i.add(g,g.spots.ckt,cn.boon,"Uncle Boon",async()=>{await r("Uncle Boon",Ni(["Char kway teow sold out already lah! Come earlier tomorrow.","The secret is wok hei, the breath of the wok. Must cook on very hot fire."]))}),i.add(g,g.spots.satay,cn.ali,"Encik Ali",async()=>{if(!s.isNight()){await r("Encik Ali","Satay Street only open at night lah! Come back after 7pm, I fire up the grill.");return}if(a("f_satay")){await r("Encik Ali","Terima kasih! Thank you, come again!");return}await o("Encik Ali","Satay! Chicken, mutton, beef. Ten sticks with ketupat and peanut sauce, $5.",["Ten sticks! ($5)","Later"])===0&&await l("Encik Ali",5,"satay")&&(s.set("f_satay"),await r("Encik Ali","Dip properly in the peanut sauce ah. Sedap!"))});let y=g.dirAt(...g.spots.chopeTable),m=Dr(new Be(.32,.08,.22),"#ffffff",.02);g.put(m,g.spots.chopeTable[0]+.2,g.spots.chopeTable[1],.4,.82),m.visible=a("choped"),s.scene.add(m),n.addAct({dir:y,r:2,label:"Chope this table",show:()=>!a("choped")&&!a("q_chope"),run:async()=>{if(!a("tissue")){await r("","You need something to chope the table with\u2026 The tissue auntie near the entrance might help.");return}s.set("choped"),m.visible=!0,s.audio.pop(),await r("","You place a tissue packet on the table. Choped! Now it's yours. Go order from Uncle Tan."),s.refresh()}});let p=e.chinatown;i.add(p,p.spots.laksa,cn.laksa,"Auntie Rosie",async()=>{if(a("f_laksa")){await r("Auntie Rosie","Spicy or not? Drink some water!");return}let L=await o("Auntie Rosie","Laksa! Thick coconut curry, cockles, prawns, tau pok. Very shiok. $4.",["One bowl! ($4)","Too spicy for me"]);L===0&&await l("Auntie Rosie",4,"laksa")?(s.set("f_laksa"),await r("Auntie Rosie","Use the spoon only, no need chopsticks. The noodles cut short already!")):L===1&&await r("Auntie Rosie","Can ask for less chilli one, don't worry!")}),i.add(p,p.spots.lim,cn.lim,"Uncle Lim",async()=>{await r("Uncle Lim",Ni(['Chinatown in Chinese is "Niu Che Shui". It means bullock cart water. Last time they used carts to bring water here!','These shophouses got the "five-foot way" in front. Shelter from sun and rain. Very clever, right?',"The temple there keeps a relic of the Buddha. Very peaceful inside, go and see.","During Chinese New Year, this whole street full of lanterns. Even more than now!"]))});let v=Dr(new Be(.42,.04,.28),"#2f8fd8",.02);p.put(v,p.spots.card[0],p.spots.card[1],.5,.03),v.visible=!a("card"),s.scene.add(v),n.addAct({dir:p.dirAt(...p.spots.card),r:1.8,label:"Pick up the card",show:()=>!a("card"),run:async()=>{s.set("card"),v.visible=!1,s.audio.pop(),await r("","It's an EZ-Link card! Someone must have dropped it on the way to the MRT."),await r("","You should hand it in at the Neighbourhood Police Post in the HDB estate."),s.refresh()}});let x=e.marina;i.add(x,x.spots.kenji,cn.kenji,"Kenji",async()=>{if(a("q_photo")){await r("Kenji","Arigatou! My family will love the photo. Next I go to Sentosa!");return}if(!a("photoAsk")){await r("Kenji","Excuse me! I am visiting from Japan. Could you help me take a photo of the Merlion?"),await r("Kenji","The best angle is from the \u{1F4F7} spot on the promenade. Please, take it from there!"),s.set("photoAsk"),s.refresh();return}await r("Kenji","The \u{1F4F7} spot is the yellow circle on the promenade, near the Merlion!")}),i.add(x,x.spots.crab,cn.crab,"Auntie Bee",async()=>{if(a("f_crab")){await r("Auntie Bee","Don't waste the gravy! Mop it all up.");return}let L=await o("Auntie Bee","Chilli crab, Singapore's famous one! Comes with fried mantou buns. $12.",["Treat myself! ($12)","Too expensive"]);L===0&&await l("Auntie Bee",12,"crab")?(s.set("f_crab"),await r("Auntie Bee","Use your hands, no shy! Very messy but very shiok.")):L===1&&await r("Auntie Bee","Collect more coins and come back! Worth it, I promise.")}),n.addAct({dir:x.dirAt(...x.spots.photo),r:1.6,label:"Take a photo \u{1F4F7}",show:()=>a("photoAsk")&&!a("q_photo"),run:async()=>{let L=s.photo();s.audio.shutter(),s.ui.flash(),s.ui.modal(`<h2>\u{1F4F8} Merlion, Marina Bay</h2><img class="photo" src="${L}" alt="Photo of the Merlion"><p>Kenji sent you $5 by PayNow. Thanks!</p>`),await new Promise(U=>{s.ui.onModalClose=U}),s.give(5),c("q_photo","Merlion Photo")}});let _=e.gardens;i.add(_,_.spots.priya,cn.priya,"Priya",async()=>{if(a("q_show")){await r("Priya","Wasn't the Garden Rhapsody beautiful? The Supertrees are vertical gardens, with over 160,000 plants!");return}if(s.isNight()){await r("Priya","The Garden Rhapsody is on! Go stand in the middle of the grove and look up.");return}await r("Priya","Welcome to Gardens by the Bay! The Supertrees collect rainwater and some of them even make solar power."),await o("Priya","The Garden Rhapsody light show starts at 7:45pm. Want to wait for it?",["Wait until the show","I'll come back later"])===0&&(await s.ui.fade(1,700),s.time=(19.75-6)/24,await new Promise(U=>setTimeout(U,400)),await s.ui.fade(0,700),await r("Priya","It's starting! Go stand under the Supertrees."))});let E=_.dirAt(..._.spots.grove),w=Math.cos(13/Ft),T=0,A=!1;s.env.show=!1;let M=e.sentosa;i.add(M,M.spots.icecream,cn.icecream,"Ice Cream Uncle",async()=>{if(a("f_icecream")){await r("Ice Cream Uncle","Eat fast, the sun very strong. Later melt!");return}await o("Ice Cream Uncle","Ice cream! Wrapped in rainbow bread or wafer. Durian, sweet corn, yam\u2026 $1 only!",["Rainbow bread, please! ($1)","No thanks"])===0&&await l("Ice Cream Uncle",1,"icecream")&&(s.set("f_icecream"),await r("Ice Cream Uncle","Here! Rainbow bread and a big brick of ice cream. Sedap!"))}),i.add(M,M.spots.raj,cn.raj,"Lifeguard Raj",async()=>{await r("Lifeguard Raj",Ni(["Swim between the flags ah! And remember to put on sunblock.","Best view of the sunset is from the bench at Sunset Point. Come around 7pm.","Sometimes got an orange cat sleeping under the palm trees. Don't know how it got here!","If it rains, come out of the water first. The lightning here no joke."]))});let b=_d.map((L,U)=>{let H=e[L],k=H.spots.cat,K=Z0();return H.put(K,k[0],k[1],k[2]),s.scene.add(K),n.addAct({dir:H.dirAt(k[0],k[1]),r:1.8,label:"Pet the cat",show:()=>I()===U,run:async()=>{if(s.audio.meow(),s.set(`cat${U+1}`),U===0)await r("","Meow~ It's Oyen, the void deck cat! It stretches lazily\u2026 then dashes off down the road.");else if(U===1)await r("","Meow! Oyen again? It sniffs your hand and runs off once more.");else{await r("","Oyen is sunbathing on the beach! It purrs and lets you scratch its chin."),c("q_cat","Where's Oyen?");return}s.ui.toast("\u{1F408} Hidden task found: Where's Oyen?"),s.refresh()}}),K}),I=()=>_d.filter((L,U)=>a(`cat${U+1}`)).length;function N(){let L=I();return[{id:"q_kopi",title:"Kopi & Kaya Toast",site:"hdb",hint:"Order a kaya toast set from Auntie Mei at the HDB kopitiam."},{id:"q_chope",title:"Chope a Table",site:"hawker",hint:a("tissue")?a("choped")?"Order chicken rice from Uncle Tan ($4).":"Chope an empty table with a tissue packet.":"Buy tissue from the auntie at the Lau Pa Sat entrance."},{id:"q_photo",title:"Merlion Photo",site:"marina",hint:a("photoAsk")?"Take the photo from the \u{1F4F7} spot near the Merlion.":"A tourist at Marina Bay needs help."},{id:"q_card",title:"Lost EZ-Link Card",site:a("card")?"hdb":"chinatown",hint:a("card")?"Hand the card in at the Neighbourhood Police Post (HDB).":"Someone dropped something on a Chinatown street\u2026"},{id:"q_show",title:"Garden Rhapsody",site:"gardens",hint:"Watch the Supertree light show at Gardens by the Bay. It only runs at night."},L?{id:"q_cat",title:`Where's Oyen? (${L}/3)`,site:_d[Math.min(L,2)],hint:Zw[L-1]||"",hidden:!0}:{id:"q_cat",title:"??? Hidden task",site:null,hint:"Keep an eye out at the void decks\u2026",hidden:!0}].map(U=>({...U,done:a(U.id)}))}return{tasks:N,mainDone:()=>Kw.every(a),activeSites:()=>new Set(N().filter(L=>!L.done&&!L.hidden&&L.site).map(L=>L.site)),update(L){b.forEach((k,K)=>{k.visible=I()===K});let U=s.isNight(),H=s.player.pos.dot(E)>w&&s.player.alt<2;s.env.show=U&&H,U&&H&&!a("q_show")?(A||(A=!0,s.ui.toast("\u{1F3B6} The Garden Rhapsody begins! Look up\u2026",4e3)),T+=L,T>15&&c("q_show","Garden Rhapsody")):(T=Math.max(0,T-L*.5),H||(A=!1))}}}function jw(){let s=document.createElement("canvas");s.width=96,s.height=64;let t=s.getContext("2d");t.fillStyle="#ef3340",t.fillRect(0,0,96,32),t.fillStyle="#ffffff",t.fillRect(0,32,96,32),t.beginPath(),t.arc(20,16,10,0,Math.PI*2),t.fill(),t.fillStyle="#ef3340",t.beginPath(),t.arc(24,16,9,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff";for(let n=0;n<5;n++){let i=-Math.PI/2+n*Math.PI*2/5;t.beginPath(),t.arc(30+Math.cos(i)*5,16+Math.sin(i)*5,1.6,0,Math.PI*2),t.fill()}let e=new sn(s);return e.colorSpace=te,e}function Qw(s){let t=s.sub(-6,9);for(let e=0;e<18;e++)for(let n=0;n<13;n++)(e+n)%2&&t.paintRect(-5.1+e*.6,-3.6+n*.6,.6,.6,"#b9a387",0,!0);t.paintRect(0,0,10.8,7.8,"#d8c9ae");for(let[e,n]of[[-5.1,-3.9],[0,-3.9],[5.1,-3.9],[-5.1,3.9],[5.1,3.9]])t.rbox(e,n,.32,3.3,.32,"#2f6f55",{r:.05}),t.solid(e,n,.32,.32);t.rbox(0,0,11.2,.18,8.6,"#e9e2d0",{y:3.3,r:.05});for(let e of[-1,1])t.rbox(0,e*2.25,11.6,.12,4.7,"#4f8d73",{y:3.75,rx:e*.2,r:.03});t.rbox(0,0,11.6,.22,.3,"#3f7a63",{y:4.18,r:.05});for(let e of[-4.4,4.4])t.cyl(0,e,.08,.08,11.6,"#cfd3d6",{y:3.3,rz:Math.PI/2,seg:8});t.sign(0,-4.38,"KOPITIAM \u5496\u5561\u5E97",{w:4.6,h:.85,y:2.95,rot:Math.PI,bg:"#e2383f"});for(let e of[-3,0,3]){let n=t.spawn("ceilingFan",e,0,{w:1.4,y:2.9});s.updaters.push(i=>{n.rotation.y+=i*6})}t.rbox(0,4.05,10.6,3.3,.22,"#efe2c4",{r:.04}),t.solid(0,4.05,10.6,.3),t.sign(-2.6,3.92,`KOPI 1.40  TEH 1.40
MILO 1.80  KOPI-O 1.20`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),t.sign(2.6,3.92,`PRATA KOSONG 1.20
EGG 1.80  MURTABAK 6`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),t.rbox(-2.6,2.2,4.4,1,.9,"#f0c64a",{r:.05}),t.rbox(-2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let e=0;e<12;e++)t.box(-4.6+e*.36,1.74,.34,.85,.02,e%2?"#e9b42f":"#f3d26b",{y:.1});t.model("kitchenFridgeLarge",-4.4,3.5,{h:2,rot:Math.PI,center:!0}),t.model("kitchenCoffeeMachine",-1.4,2.25,{h:.45,y:1.06,rot:Math.PI,center:!0});for(let e=0;e<5;e++)t.model(e%2?"cup-saucer":"cup-coffee",-4.2+e*.4,2,{w:.22,y:1.06,center:!0,shadow:!1});t.lathe(-3,2.35,[[0,0],[.13,0],[.15,.2],[.1,.32],[.05,.34],[0,.34]],"#c6cbd0",{y:1.06,seg:14}),t.sign(-2.6,2.66,"DRINKS \u996E\u6599",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#2b6cb0",board:!1}),t.rbox(2.6,2.2,4.4,1,.9,"#e98d4a",{r:.05}),t.rbox(2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let e=0;e<12;e++)t.box(.6+e*.36,1.74,.34,.85,.02,e%2?"#d9772f":"#f0a462",{y:.1});t.cyl(2.9,2.2,.62,.62,.06,"#2b2b2b",{y:1.06,seg:24}),t.model("pancakes",1.6,2.15,{w:.4,y:1.06,center:!0}),t.model("kitchenStove",4.3,3.45,{h:1,rot:Math.PI,center:!0}),t.model("pot-stew",4.3,3.45,{w:.5,y:1,center:!0}),t.sign(2.6,2.66,"ROTI PRATA",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#b5442c",board:!1}),t.solid(0,2.2,9.6,.9);for(let[e,n]of[[-3.3,-1.6],[0,-1.6],[3.3,-1.6],[-1.65,.6]])Ds(t,e,n,"#ece6da",["#d24b3e","#2f8fd8","#3fae49","#f3c13a"][Math.abs(Math.round(e))%4]);t.model("cup-coffee",-3.1,-1.5,{w:.2,y:.79,center:!0,shadow:!1}),t.model("books",.2,-1.7,{w:.35,y:.79,center:!0,shadow:!1}),t.model("plate",3.3,-1.6,{w:.4,y:.79,center:!0,shadow:!1}),t.model("egg-cooked",3.3,-1.6,{w:.25,y:.82,center:!0,shadow:!1}),t.rbox(4.6,.4,.9,1.2,.6,"#3f7a63",{r:.05}),t.sign(4.6,.72,`TRAY
RETURN`,{w:.7,h:.45,y:1.5,bg:"#3fae49",board:!1}),t.solid(4.6,.4,.9,.6),t.model("trashcan",-4.7,.6,{h:.9,center:!0,solid:"circle"}),t.model("pottedPlant",-4.7,-3.4,{h:1.3,center:!0}),t.model("pottedPlant",4.7,-3.4,{h:1.3,center:!0})}function tS(s){let t=s.sub(8,9.5);t.rbox(0,0,5.6,3.3,4.1,"#f2f4f7",{r:.12}),t.rbox(0,0,5.8,.5,4.3,"#1f4e9c",{y:2.55,r:.06}),t.rbox(0,0,6.3,.25,4.8,"#d7dde6",{y:3.3,r:.08}),t.rbox(0,-2.4,3.2,.12,1.2,"#1f4e9c",{y:2.75,r:.04});for(let r of[-1.5,1.5])t.cyl(r,-2.9,.05,.05,2.75,"#c9cdd2",{seg:8});t.rbox(0,-2.06,1.5,2.3,.06,"#9fc2e0",{r:.03,glow:"win"}),t.box(0,-2.1,.04,2.3,.05,"#c9cdd2");for(let r of[-2,2])t.rbox(r,-2.06,1,1,.06,"#9fc2e0",{y:1,r:.03,glow:"win"});t.sign(0,-2.12,"NEIGHBOURHOOD POLICE POST",{w:5,h:.42,y:2.8,rot:Math.PI,bg:"#1f4e9c",board:!1}),t.solid(0,0,5.6,4.1),t.cyl(3.6,-2.6,.05,.07,6,"#d9dde2",{seg:8}),t.ball(3.6,-2.6,.1,"#d9a93f",{y:6});let e=new Dt(new xn(1.5,1),new ge({map:jw(),side:He,roughness:.9}));e.position.set(.76,0,0);let n=new $t;n.add(e),t.put(n,3.6,-2.6,Math.PI/2,5.3),s.group.add(n);let i=0;s.updaters.push(r=>{i+=r,e.rotation.y=Math.sin(i*2.2)*.15}),t.solidCircle(3.6,-2.6,.15),an(t,-1.6,-3.4,0)}function eS(s){s.paintCircle(1,-6.3,3.6,"#e9d29a");let t=s.sub(1,-6.3,.2),e=["#e2383f","#f3c13a","#2f8fd8","#3fae49"];for(let i=0;i<4;i++){let r=new we(.85,.32,12,24,Math.PI);t.raw(r,e[i],-1.6+i*1.15,0,new nt().makeRotationY(Math.PI/2).setPosition(0,0,0))}t.rbox(-2.9,0,1.4,1.5,1.2,"#e2383f",{r:.25}),t.rbox(-3.55,0,.6,.6,.9,"#f3c13a",{y:.5,r:.15});for(let i of[-.35,.35])t.ball(-3,i,.17,"#ffffff",{y:1.15}),t.ball(-3.12,i,.08,"#222",{y:1.22}),t.cone(-2.6,i*1.3,.12,.5,"#f3c13a",{y:1.45,rz:.5});for(let i=0;i<5;i++)t.cone(-2.4+i*.6,0,.13,.35,"#f3c13a",{y:1.15+i%2*.05});t.cone(2.7,0,.35,1.3,"#3fae49",{rz:-1.2,y:.3}),t.tube(1.2,1.3,[[0,1,0],[.6,.7,.5],[1.4,.25,.9],[2,.08,1]],.28,"#f39c32",{rseg:8}),t.solid(0,0,6.2,1.8);let n=s.sub(-3.2,-6.8);for(let i of[-1,1])for(let r of[-.5,.5])n.cyl(i*1.1,r,.05,.05,2.5,"#5a6470",{rz:i*.12,rx:r*.25,seg:6});n.cyl(0,0,.06,.06,2.4,"#5a6470",{y:2.45,rz:Math.PI/2,seg:8});for(let i of[-.45,.45]){for(let r of[-.18,.18])n.cyl(i+r,0,.01,.01,1.85,"#9aa1a8",{y:.6,seg:3});n.rbox(i,0,.45,.05,.25,"#e2383f",{y:.58,r:.02})}n.solid(0,0,2.4,1.2)}function nS(s){let t=s.sub(-13.5,4.4);for(let e of[-1.7,1.7])t.rbox(e,.6,.12,2.6,.12,"#6c7a86",{r:.03});t.rbox(0,.1,4,.14,1.7,"#8fa4b5",{y:2.6,r:.05,rx:-.06}),t.rbox(0,.75,3.5,1.7,.05,"#d7ecf5",{y:.7,r:.02}),t.rbox(1.6,.7,.9,1.6,.12,"#ffffff",{y:.6,r:.03,glow:"win"}),an(t,-.2,.35,Math.PI),t.cyl(2.4,-.1,.05,.05,2.6,"#6c7a86",{seg:8}),t.sign(2.4,-.1,`BUS STOP
52009`,{w:.9,h:.7,y:2.7,bg:"#2b8a3e"}),t.sign(-1,.68,"52 \xB7 88 \xB7 157 \xB7 232",{w:1.6,h:.35,y:1.9,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),t.solid(0,.6,3.6,.4)}function iS(s,t,e,n){let i=e-t,r=Math.max(2,Math.round(i/3)),o=s.sub((t+e)/2,n);for(let a=0;a<=r;a++){let c=-i/2+a*i/r;o.cyl(c,0,.08,.08,2.6,"#6b7f72",{seg:8}),o.solidCircle(c,0,.12)}o.rbox(0,0,i+.4,.1,1.5,"#4f8d73",{y:2.62,r:.04});for(let a of[-.72,.72])o.rbox(0,a,i+.4,.16,.08,"#3f7a63",{y:2.5,r:.03})}function fg(s){s.paintRect(0,-11.5,36,10,"#d9d1bf"),s.paintRect(0,9.5,36,10,"#ddd5c3");for(let t=0;t<6;t++)s.paintRect(-10,-2.1+t*.84,3,.42,"#f4f1e6",0,!0);ol(s,-8,-12,0,{w:12.5,d:5,floors:6,accent:"#4fa3a5",no:"123",seed:5}),ol(s,9.5,-12.5,.18,{w:10.5,d:5,floors:7,accent:"#e9825f",no:"125",seed:9}),ol(s,.5,-22,0,{w:16,d:5,floors:9,accent:"#8e7cc3",no:"127",seed:13}),Qw(s),s.spots.auntie=[-8.6,12.3,Math.PI],s.spots.prata=[-3.4,12.3,Math.PI],s.spots.uncle=[-3.39,8.09,2.36],tS(s),s.spots.officer=[8,6.6,Math.PI],eS(s),nS(s),iS(s,-16,-9.8,-4.6);for(let[t,e,n]of[[-11.8,-3.5,Math.PI/2],[-8.2,3.5,-Math.PI/2]])s.model("traffic-light",t,e,{h:3.4,rot:n,solid:"circle"});for(let[t,e,n]of[[-15.5,7.5,1],[15.5,14,1.1],[-15,-6.5,.9],[15.5,-5.5,1],[3,15.5,1.1],[-14.5,15,1]])li(s,t,e,n);pn(s,8.5,-4.4,3.6,.9),pn(s,-5,5.6,3,.8);for(let[t,e]of[[13,4.6],[-1,-9.8],[-15,-9.5],[14,11]])hi(s,t,e,1,!0);an(s,13,7.5,Math.PI/2),an(s,-4.5,-5,0);for(let t of[-2,5,14])zn(s,t,3.8,0),s.solidCircle(t,3.8,.15);s.model("trashcan",12,4.6,{h:.9,center:!0,solid:"circle"}),s.spots.cat=[-7.2,-9,.6],s.coins=[[12,-6.5],[-14.5,2.6],[5,5.6]]}var Jr="#e9e3d3",ca="#c9bfa8",vd="#7d8fa3";function sS(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d");t.fillStyle="#fdfbf3",t.fillRect(0,0,256,256),t.strokeStyle="#2e2638",t.lineWidth=10,t.beginPath(),t.arc(128,128,118,0,Math.PI*2),t.stroke(),t.fillStyle="#2e2638",t.font="bold 30px Georgia, serif",t.textAlign="center",t.textBaseline="middle",["XII","III","VI","IX"].forEach((n,i)=>{let r=-Math.PI/2+i*Math.PI/2;t.fillText(n,128+Math.cos(r)*88,128+Math.sin(r)*88)});for(let n=0;n<12;n++){let i=n*Math.PI/6;t.fillRect(128+Math.cos(i)*104-3,128+Math.sin(i)*104-3,6,6)}t.lineCap="round",t.lineWidth=9,t.beginPath(),t.moveTo(128,128),t.lineTo(178,98),t.stroke(),t.lineWidth=6,t.beginPath(),t.moveTo(128,128),t.lineTo(128,40),t.stroke();let e=new sn(s);return e.colorSpace=te,ns("clockface",new ge({map:e,roughness:.6}))}function rS(s){let t=s.sub(0,-11);s.paintCircle(0,-11,8.8,"#d9cdb4");for(let a=2;a<8.6;a+=1.6)s.paintCircle(0,-11,a,a%3.2<1.6?"#cfc2a6":"#d9cdb4");s.paintRect(0,-3.6,4.4,2.6,"#d9cdb4");let e=[[.42,0],[.42,.22],[.32,.3],[.26,.45],[.2,.6],[.18,3.55],[.24,3.65],[.36,3.8],[.44,3.95],[.44,4.1],[0,4.12]],n=Array.from({length:8},(a,c)=>(c+.5)*Math.PI/4),i=n.map(a=>[Math.sin(a)*7.6,Math.cos(a)*7.6]);i.forEach(([a,c])=>{t.lathe(a,c,e,Jr,{seg:16});for(let l of[1.2,2.4])t.cyl(a,c,.22,.22,.08,ca,{y:l,seg:14});t.solidCircle(a,c,.42)});for(let a=0;a<8;a++){let[c,l]=i[a],[h,u]=i[(a+1)%8],f=Math.hypot(h-c,u-l),d=t.sub((c+h)/2,(l+u)/2,Math.atan2(h-c,u-l)-Math.PI/2);d.tube(0,0,[[-f/2,3.7,0],[-f/4,4.05,0],[0,4.15,0],[f/4,4.05,0],[f/2,3.7,0]],.08,Jr);for(let g=-1;g<=1;g++)d.raw(new we(.22,.035,6,16),ca,g*f/4,0,new nt().makeTranslation(0,4.35-Math.abs(g)*.08,0))}t.cyl(0,0,8.25,8.25,.55,Jr,{y:4.15,seg:8,spin:Math.PI/8}),t.cyl(0,0,8.4,8.4,.12,ca,{y:4.68,seg:8,spin:Math.PI/8}),t.cone(0,0,9.4,2.7,vd,{y:4.75,seg:8,spin:Math.PI/8}),n.forEach(a=>t.tube(0,0,[[Math.sin(a)*9.35,4.78,Math.cos(a)*9.35],[Math.sin(a)*4.7,6.15,Math.cos(a)*4.7],[Math.sin(a)*.4,7.4,Math.cos(a)*.4]],.07,Jr)),t.cyl(0,0,2.6,2.6,1.3,Jr,{y:6.9,seg:8,spin:Math.PI/8});for(let a=0;a<4;a++)t.cyl(0,0,2.66,2.66,.08,"#8b98a5",{y:7.05+a*.3,seg:8,spin:Math.PI/8});t.cone(0,0,3.4,1.5,vd,{y:8.2,seg:8,spin:Math.PI/8}),t.rbox(0,0,1.5,2.3,1.5,Jr,{y:9.3,r:.08}),t.rbox(0,0,1.7,.18,1.7,ca,{y:11.6,r:.05}),sS();for(let a=0;a<4;a++){let c=t.sub(0,0,a*Math.PI/2);c.cyl(0,.77,.52,.52,.04,"#ffffff",{y:10.45,rx:Math.PI/2,seg:28,mat:"clockface",ry:Math.PI}),c.raw(new we(.53,.05,6,24),ca,0,.78,new nt().makeTranslation(0,10.45,0))}t.cone(0,0,1.15,1.7,vd,{y:11.75,seg:4,spin:Math.PI/4}),t.cyl(0,0,.03,.05,.9,"#d9a93f",{y:13.4,seg:6}),t.ball(0,0,.12,"#d9a93f",{y:14.2}),t.sign(0,7.75,"LAU PA SAT \u8001\u5DF4\u5239",{w:4.4,h:.7,y:4.42,bg:"#5c6f84",board:!1});for(let a of[[-3,0],[3,0],[0,-2.5],[0,2.5]]){let c=t.spawn("ceilingFan",a[0],a[1],{w:1.4,y:4});s.updaters.push(l=>{c.rotation.y+=l*5})}t.rbox(0,-5.95,12.6,3,.25,"#eadfca",{r:.04}),t.solid(0,-5.95,12.6,.3),[["CHICKEN RICE \u9E21\u996D","#f3b33d"],["ICE KACHANG","#7cc6d6"],["CHAR KWAY TEOW","#e8735a"],["CARROT CAKE","#9ccf6b"]].forEach(([a,c],l)=>{let h=-4.6+l*3.07;t.rbox(h,-4.4,2.8,1.05,1,c,{r:.05}),t.rbox(h,-4.4,2.9,.06,1.1,"#f7f2e6",{y:1.05,r:.02}),t.rbox(h,-4.2,2.5,.4,.5,"#d9eef5",{y:1.11,r:.04});for(let u=0;u<3;u++)t.rbox(h-1+u*1,-5.86,.9,.5,.05,"#2b2b2b",{y:2.75,r:.02});t.sign(h,-5.8,a,{w:2.7,h:.55,y:2.3,bg:c,fg:"#2e2638",board:!1}),t.sign(h+1.15,-3.88,`#01-${12+l}`,{w:.45,h:.22,y:.75,bg:"#ffffff",fg:"#2e2638",board:!1})});for(let a=0;a<3;a++)t.ball(-5.4+a*.4,-5.4,.14,"#c8743a",{y:1.65,sy:1.3});t.cyl(-5,-5.4,.015,.015,1.4,"#888",{y:1.95,rz:Math.PI/2,seg:4}),t.model("rice-ball",-3.9,-4.6,{w:.25,y:1.11,center:!0}),t.model("ice-cream-cup",-1.9,-4.6,{w:.25,y:1.11,center:!0}),t.model("kitchenBlender",-1,-4.6,{h:.4,y:1.11,center:!0}),t.model("frying-pan",1.5,-4.5,{w:.6,y:1.11,center:!0}),t.model("kitchenStove",1.2,-5.4,{h:1,center:!0,rot:0}),t.model("steamer",4.3,-4.5,{w:.4,y:1.11,center:!0}),t.model("pot",5,-4.5,{w:.4,y:1.11,center:!0}),t.solid(0,-4.4,12.6,1),s.spots.uncleTan=[-4.6,-16.25,0],s.spots.kachang=[-1.53,-16.25,0],s.spots.ckt=[1.54,-16.25,0],[[-4.2,-.8],[0,-.8],[4.2,-.8],[-2.1,2.3],[2.1,2.3]].forEach(([a,c],l)=>Ds(t,a,c,"#ece6da",["#d24b3e","#2f8fd8","#f3c13a","#3fae49","#d24b3e"][l])),t.model("bowl-soup",-4,-.7,{w:.35,y:.79,center:!0,shadow:!1}),t.model("chopstick",-4.3,-.9,{w:.3,y:.8,center:!0,shadow:!1}),t.model("cup-tea",.2,-.9,{w:.18,y:.79,center:!0,shadow:!1}),t.model("plate-dinner",-2,2.3,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.chopeTable=[2.1,-8.7],s.spots.tissue=[-4.6,-6,0],t.rbox(-4.6,5.8,.6,.45,.4,"#8a6a4a",{r:.04});for(let a=0;a<6;a++)t.rbox(-4.8+a%2*.22,5.8,.18,.08,.12,["#ffffff","#f7c6d9","#cde8f2"][a%3],{y:.45+Math.floor(a/2)*.08,r:.02});t.model("trashcan",5.6,3.2,{h:.9,center:!0,solid:"circle"})}function oS(s){s.paintRect(7,8,11,6,"#cbbca0"),Ns(s,5,6.8,Math.PI,"#b5442c","#e2383f",{grill:!0,label:"SATAY 7",signBg:"#e2383f"}),Ns(s,9.2,6.8,Math.PI,"#b5442c","#f3c13a",{grill:!0,label:"SATAY \u6C99\u7239",signBg:"#d18a1a"}),s.spots.satay=[5,8.2,Math.PI];for(let a of[3.6,6.8,10.2])Ds(s,a,10.2,"#ece6da","#f3c13a");s.model("skewer",3.7,10.1,{w:.4,y:.79,center:!0,shadow:!1}),s.model("soda-can",6.9,10.3,{h:.18,y:.79,center:!0,shadow:!1});for(let[a,c]of[[2.6,5.6],[11.6,5.6],[2.6,11.8],[11.6,11.8]])s.cyl(a,c,.05,.05,3.6,"#555",{seg:6});let t=["#ffd27a","#ff8fb1","#9ff0ff","#c4ff8a"];for(let[a,c]of[[[2.6,5.6],[11.6,5.6]],[[2.6,11.8],[11.6,11.8]],[[2.6,5.6],[2.6,11.8]],[[11.6,5.6],[11.6,11.8]]])for(let l=0;l<=12;l++){let h=l/12,u=a[0]+(c[0]-a[0])*h,f=a[1]+(c[1]-a[1])*h;s.ball(u,f,.07,t[l%4],{y:3.5-Math.sin(h*Math.PI)*.35,glow:"win"})}let e=60,n=new Float32Array(e*3),i=[];for(let a=0;a<e;a++)i.push([Math.random(),Math.random()*1.4-.7,Math.random()*.3]);let r=new ue;r.setAttribute("position",new ee(n,3));let o=new si(r,new Zn({color:14540253,size:.5,transparent:!0,opacity:.35,depthWrite:!1}));o.frustumCulled=!1,s.put(o,5,6.95,Math.PI,1.4),s.group.add(o),s.updaters.push((a,c)=>{if(o.visible=c.night>.4,!!o.visible){for(let l=0;l<e;l++){let h=i[l];h[0]=(h[0]+a*.4)%1,n[l*3]=h[1]+Math.sin(h[0]*6+l)*.15,n[l*3+1]=h[0]*2.2,n[l*3+2]=h[2]+h[0]*.4}r.attributes.position.needsUpdate=!0}})}function dg(s){rS(s),oS(s);for(let[t,e,n,i,r]of[["building-skyscraper-c",-8,13,26,0],["building-skyscraper-a",-1.5,17,21,.3],["building-skyscraper-e",13,16,24,-.2],["building-skyscraper-b",-14.5,17,18,.5]])s.model(t,e,n,{h:i,rot:r,center:!0,solid:!0});s.model("building-g",15.5,9,{h:7,rot:-Math.PI/2,center:!0,solid:!0});for(let[t,e]of[[-13,-4.8],[13,-4.8],[-14,5.5],[14.5,4.8]])li(s,t,e,1);pn(s,-9.5,-3.9,3.5,.8),pn(s,9.5,-3.9,3.5,.8),hi(s,1.5,5.4,1,!0),an(s,-4.5,5.2,Math.PI);for(let t of[-12,-6.5,6.5,12])zn(s,t,-3.8,Math.PI),s.solidCircle(t,-3.8,.15);s.coins=[[-12,-7],[12,4.6],[0,8.5]]}var Md=["#f6c1c1","#a8d8c8","#f7e1a1","#b9c8ef","#f3b38f","#cfe7a2","#e7c3ef","#f9d2a7","#a9d6ec"],pg=["#4f8f6f","#3f6f9a","#9a4f4f","#4f7f5f","#6a5a9a"],mg=["MEDICAL HALL","BAK KWA \u8089\u5E72","TAILOR","KOPI","ANTIQUES","DIM SUM","TEA HOUSE \u8336","GOLDSMITH","BOOKS"];function aS(){let s=document.createElement("canvas");s.width=64,s.height=64;let t=s.getContext("2d");t.fillStyle="#c4553b",t.fillRect(0,0,64,64);for(let n=0;n<64;n+=16){let i=t.createLinearGradient(n,0,n+16,0);i.addColorStop(0,"#9f3e2b"),i.addColorStop(.5,"#d86a4c"),i.addColorStop(1,"#9f3e2b"),t.fillStyle=i,t.fillRect(n,0,16,64)}t.fillStyle="rgba(80,20,10,0.35)";for(let n=0;n<64;n+=16)t.fillRect(0,n,64,2);let e=new sn(s);e.colorSpace=te,e.wrapS=e.wrapT=Tn,e.repeat.set(3,3),ns("rooftile",new ge({map:e,roughness:.75}))}function gg(s,t,e,n){let i=new xn(s,t,24,24).rotateX(-Math.PI/2),r=i.attributes.position;for(let o=0;o<r.count;o++){let a=Math.abs(r.getX(o))/(s/2),c=Math.abs(r.getZ(o))/(t/2),l=Math.max(a,c);r.setY(o,e*Math.pow(1-l,1.7)+n*Math.pow(a,6)*Math.pow(c,6)+n*.25*Math.pow(l,8))}return i.computeVertexNormals(),i}function cS(s,t,e,n){let i=s.sub(t,e),r=Md[n%Md.length],o=pg[n%pg.length],a=n%3===1,c=a?9.4:6.6;i.box(0,-.6,3.2,3.1,4.8,Ke(r,-.05));for(let h=0;h<7;h++)i.box(-1+h*.33,1.83,.3,2.3,.04,h%2?"#7a5a3a":"#8d6a46",{y:.05});i.sign(0,1.86,mg[n%mg.length],{w:2.4,h:.42,y:2.65,bg:"#2b2b2b",fg:"#f3d26b",board:!1}),i.box(0,0,3.2,c-3.1,6,r,{y:3.1});for(let h of[-1.5,1.5])i.rbox(h,3.02,.24,c-3.1,.12,Ke(r,.06),{y:3.1,r:.03});let l=a?[3.6,6.4]:[3.6];for(let h of l){i.rbox(0,3.03,3,.22,.16,"#ffffff",{y:h-.25,r:.04});for(let u=0;u<9;u++)i.box(-1.2+u*.3,3.04,.26,.26,.03,["#2f8fd8","#ffffff","#3fae49"][u%3],{y:h-.6});for(let u of[-.72,.72]){i.box(u,3,.78,1.6,.05,"#2e2a26",{y:h}),i.cyl(u,3,.4,.4,.06,"#fdf4d8",{y:h+1.6,rx:Math.PI/2,seg:16,glow:"win"}),i.box(u,3,.82,.08,.08,"#ffffff",{y:h+1.58});for(let f of[-1,1]){let d=u+f*.2;i.rbox(d,3.04,.38,1.55,.05,o,{y:h+.02,r:.015});for(let g=0;g<7;g++)i.box(d,3.07,.32,.03,.02,Ke(o,.12),{y:h+.2+g*.2})}}}i.rbox(0,3.08,3.25,.25,.25,"#ffffff",{y:c-.45,r:.05});for(let h=0;h<10;h++)i.box(-1.45+h*.32,3.12,.12,.12,.1,"#f1ece0",{y:c-.6});i.box(0,1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:.42,mat:"rooftile"}),i.box(0,-1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:-.42,mat:"rooftile"}),i.cyl(0,0,.1,.1,3.4,"#8f3a28",{y:c+.68,rz:Math.PI/2,seg:8}),i.rbox(-1.62,0,.12,.9,6.2,Ke(r,-.1),{y:c-.2,r:.03})}function yg(s){aS();for(let n=0;n<24;n++)s.paintRect(-14.4+n*1.2+.6,-4.6,1.2,1.3,n%2?"#c99a72":"#b9845e");s.paintRect(0,9,34,11,"#ddd2bd");for(let n=0;n<9;n++)cS(s,-12.8+n*3.2,-7,n);s.solid(0,-7.6,28.8,4.8);for(let n=0;n<=9;n++){let i=-14.4+n*3.2;s.lathe(i,-4.2,[[.24,0],[.24,.25],[.18,.3],[.17,2.4],[.24,2.5],[.24,2.6],[0,2.6]],"#f3ead6",{seg:4,ry:Math.PI/4}),s.solid(i,-4.2,.4,.4),n<9&&(s.tube(i+1.6,-4.2,[[-1.45,2.55,0],[-.8,2.95,0],[0,3.05,0],[.8,2.95,0],[1.45,2.55,0]],.09,"#f3ead6"),s.box(i+1.6,-4.2,3.2,.5,.3,Md[n],{y:2.9}),s.lathe(i+1.6,-4.25,[[0,0],[.12,.02],[.24,.15],[.26,.3],[.22,.45],[.1,.55],[0,.56]],"#e2383f",{y:1.75,seg:12,glow:"win"}),s.cyl(i+1.6,-4.25,.1,.1,.06,"#d9a93f",{y:2.3,seg:8}),s.cyl(i+1.6,-4.25,.015,.03,.35,"#f3c13a",{y:1.42,seg:5}))}s.sign(-6.4,-3.98,"CHINATOWN \u725B\u8F66\u6C34",{w:4.6,h:.6,y:3.45,bg:"#b8352b",fg:"#ffe8a3"});for(let n of[-9,0,9]){for(let i of[-3.6,3.6])s.cyl(n,i,.08,.1,5,"#7a2a20",{seg:8}),s.ball(n,i,.12,"#d9a93f",{y:5}),s.solidCircle(n,i,.15);s.cyl(n,0,.012,.012,7.2,"#3a2a2a",{y:4.9,rx:Math.PI/2,seg:3});for(let i=-2;i<=2;i++)s.lathe(n,i*1.2,[[0,0],[.12,.02],[.27,.15],[.29,.32],[.24,.48],[.1,.58],[0,.6]],i%2?"#f3c13a":"#e2383f",{y:3.95,seg:12,glow:"win"}),s.cyl(n,i*1.2,.012,.012,.4,"#3a2a2a",{y:4.55,seg:3}),s.cyl(n,i*1.2,.015,.03,.3,"#f3c13a",{y:3.65,seg:5})}let t=s.sub(4,11);t.rbox(0,0,10.4,.8,8.4,"#cfc6b8",{r:.08});for(let n=0;n<3;n++)t.rbox(0,-4.4-n*.35,4.2,.8-n*.27,.4,"#d8d0c3",{r:.03});t.box(0,0,8,4,6,"#b8352b",{y:.8});for(let n of[-3.2,-1.1,1.1,3.2])t.lathe(n,-3.35,[[.3,0],[.3,.2],[.22,.28],[.21,3.6],[.3,3.75],[.3,4],[0,4]],"#c42e22",{y:.8,seg:16}),t.cyl(n,-3.35,.24,.24,.12,"#d9a93f",{y:4,seg:16});t.rbox(0,-3.03,2.2,2.8,.08,"#6b1d17",{y:.8,r:.03});for(let n=0;n<5;n++)for(let i=0;i<4;i++)t.ball(-.75+n*.38,-3.07,.05,"#d9a93f",{y:1.3+i*.6});t.rbox(0,-3.6,8.6,.28,.5,"#d9a93f",{y:4.8,r:.04});let e=[[11.5,9.2,1.9,4.95],[7.6,6.2,1.5,8.35],[5,4.2,1.5,11.15]];t.box(0,0,5.8,2.4,4.6,"#b8352b",{y:6}),t.box(0,0,3.8,1.8,3,"#b8352b",{y:9.4});for(let[n,i,r,o]of e){let a=gg(n,i,r,.9);t.raw(a,"#3b3536",0,0,new nt().makeTranslation(0,o,0)),t.raw(ea(gg(n,i,r,.9)),"#6b2a22",0,0,new nt().makeTranslation(0,o-.06,0)),t.rbox(0,0,n*.32,.22,.24,"#d9a93f",{y:o+r-.1,r:.06});for(let c of[-1,1])t.cone(c*n*.16,0,.12,.45,"#d9a93f",{y:o+r,rz:-c*.5,seg:6})}t.lathe(0,0,[[.3,0],[.12,.25],[.18,.6],[.08,1],[.14,1.3],[.04,1.8],[0,2]],"#d9a93f",{y:12.6,seg:12}),t.sign(0,-3.12,"BUDDHA TOOTH RELIC TEMPLE \u4F5B\u7259\u5BFA",{w:5.4,h:.5,y:4.45,rot:Math.PI,bg:"#d9a93f",fg:"#6b1d17",board:!1});for(let n of[-2.6,2.6])t.rbox(n,-5.3,.9,.7,.9,"#bdb5a7",{r:.05}),t.rbox(n,-5.3,.55,.6,.75,"#a9a194",{y:.7,r:.18}),t.ball(n,-5.45,.36,"#a9a194",{y:1.15}),t.ball(n,-5.55,.42,"#9b9386",{y:1.05,sy:.9}),t.solid(n,-5.3,.9,.9);t.lathe(0,-6,[[0,0],[.45,0],[.55,.2],[.6,.55],[.5,.75],[.62,.8],[0,.82]],"#8a6a3a",{seg:20});for(let n=0;n<5;n++)t.cyl(-.2+n*.1,-6,.01,.01,.5,"#c4553b",{y:.82,seg:3});t.solidCircle(0,-6,.6),t.solid(0,0,10.4,8.4),Ns(s,-9,7,Math.PI,"#f2a33a","#f3c13a",{label:"LAKSA \u53FB\u6C99",signBg:"#d0761a"}),s.model("pot-stew",-9.6,7.05,{w:.6,y:1.25,center:!0}),s.model("bowl-soup",-8.4,6.95,{w:.35,y:1.25,center:!0}),s.spots.laksa=[-9,8.4,Math.PI],s.spots.lim=[12.5,5.8,-Math.PI*.75],s.spots.card=[-3.5,3.6];for(let[n,i,r]of[[-14.5,12,1],[15,7.5,1],[-3,15.5,.9],[15,14.5,1.1]])li(s,n,i,r);pn(s,-5,5.2,3,.8);for(let[n,i]of[[-13,4.6],[13,4.4]])hi(s,n,i,1,!0);for(let n of[-13.5,13.5])zn(s,n,3.8,0),s.solidCircle(n,3.8,.15);s.spots.cat=[5.4,-4.8,Math.PI/2],s.coins=[[-13,-4.7],[-5.5,10.5],[12,11.5]]}var ne=(s,t,e)=>new S(s,t,e),us=(s,t,e=.55)=>Object.assign(new ge({color:t,roughness:e,metalness:0}),{name:s});function lS(){return{fur:us("fur_white","#fcfbf7"),mane:us("mane_blue","#b4d6f5",.5),pink:us("nose_pink","#f093aa",.45),blush:us("blush_pink","#f8c4ce",.6),ink:us("ink_navy","#2a2a5c",.35),water:us("water","#8ec9f3",.15),stone:us("stone","#ebe6dc",.8),pool:us("pool","#6cb9ea",.2)}}var Ge=(s,t,e,n,i=[0,0,0],r=[0,0,0],o=[1,1,1])=>{let a=new Dt(e,n);return a.name=t,a.position.set(...i),a.rotation.set(...r),a.scale.set(...o),s.add(a),a},bd=(s,t,e=0)=>(s.quaternion.setFromUnitVectors(ne(0,0,1),t.clone().normalize()),e&&s.quaternion.multiply(new be().setFromAxisAngle(ne(0,0,1),e)),s),xg=(s,t,e)=>{let n=e.clone().sub(t);return s.position.copy(t).addScaledVector(n,.5),s.quaternion.setFromUnitVectors(ne(0,1,0),n.normalize()),s};function hS(s,t,e=40,n=20){let i=new Zi(s,e,1,n,!1),r=i.attributes.position,o=new S;for(let a=0;a<=e;a++){let c=s.getPointAt(a/e),l=t(a/e);for(let h=0;h<=n;h++){let u=a*(n+1)+h;o.fromBufferAttribute(r,u).sub(c).multiplyScalar(l).add(c),r.setXYZ(u,o.x,o.y,o.z)}}return i.computeVertexNormals(),i}var Tl=(s,t,e,n,i)=>{let r=new $t;return r.name=t,s.add(r),Ge(r,t+"_tube",hS(e,n),i),Ge(r,t+"_cap_a",new Xt(n(0),20,14),i,e.getPointAt(0).toArray()),Ge(r,t+"_cap_b",new Xt(n(1),20,14),i,e.getPointAt(1).toArray()),r},_g=(s,t,e,n,i)=>{let r=new Kt(t,t,n,32,1,!1,Math.PI-e/2,e);r.rotateX(Math.PI/2);let o=new Dt(r,i);return o.name=s,o};function uS(){let s=lS(),t=new $t;t.name="merlion";let e=new $t;e.name="fountain",t.add(e),Ge(e,"base_disc",new Kt(1.12,1.16,.1,64),s.stone,[0,.05,0]),Ge(e,"base_rim",new we(1.06,.07,16,72),s.stone,[0,.13,0],[Math.PI/2,0,0]),Ge(e,"pool",new Kt(1.03,1.03,.04,64),s.pool,[0,.12,0]);let n=.14,i={c:ne(0,.5,0),r:ne(.44,.42,.4)},r=new $t;r.name="body",r.position.copy(i.c),t.add(r);let o=Math.PI*.58;Ge(r,"body_fur",new Xt(1,48,32,0,Math.PI*2,0,o),s.fur,[0,0,0],[0,0,0],i.r.toArray()),Ge(r,"body_fish",new Xt(1,48,32,0,Math.PI*2,o,Math.PI-o),s.mane,[0,0,0],[0,0,0],i.r.toArray());let a=(x,_)=>{let E=ne(Math.sin(x)*Math.cos(_),Math.sin(_),Math.cos(x)*Math.cos(_));return{p:ne(E.x*i.r.x,E.y*i.r.y,E.z*i.r.z),n:ne(E.x/i.r.x,E.y/i.r.y,E.z/i.r.z).normalize()}};[[-.7,-.5],[.05,-.62],[.75,-.48],[-.3,-.85],[.4,-.85]].forEach(([x,_],E)=>{let{p:w,n:T}=a(x,_),A=new $t;A.name="scale_mark_"+(E+1),A.position.copy(w).addScaledVector(T,.004),bd(A,T),r.add(A),[-1,1].forEach(M=>Ge(A,"scale_mark_"+(E+1)+(M<0?"a":"b"),new we(.032,.007,8,20,Math.PI),s.ink,[M*.032,.01,0],[0,0,Math.PI]))});let c=new On([ne(.16,.3,-.24),ne(.46,.22,-.32),ne(.66,.34,-.22),ne(.74,.58,-.1)]);Tl(t,"tail",c,x=>.2-.12*x,s.mane);let l=_g("tail_fin",.3,2,.05,s.mane);l.position.copy(c.getPointAt(1)),l.quaternion.setFromUnitVectors(ne(0,1,0),c.getTangentAt(1)),l.quaternion.multiply(new be().setFromAxisAngle(ne(0,1,0),Math.PI/2.4)),t.add(l);let h={c:ne(0,1.14,.02),a:.6,b:.52,c2:.54},u=new $t;u.name="head",u.position.copy(h.c),t.add(u),Ge(u,"head_fur",new Xt(1,64,48),s.fur,[0,0,0],[0,0,0],[h.a,h.b,h.c2]);let f=(x,_,E=0)=>{let w=h.c2*Math.sqrt(Math.max(0,1-x*x/h.a**2-_*_/h.b**2)),T=ne(x/h.a**2,_/h.b**2,w/h.c2**2).normalize();return{p:ne(x,_,w).addScaledVector(T,E),n:T}},d=(x,_,E,w,T,A,M,b=0)=>{let{p:I,n:N}=f(w,T,A);return bd(Ge(u,x,_,E,I.toArray(),[0,0,0],M),N,b)};[-1,1].forEach(x=>{let _=x<0?"l":"r";d("eye_"+_,new Xt(.055,24,16),s.ink,x*.2,0,0,[1.25,.85,.45]),d("blush_"+_,new Xt(.075,24,16),s.blush,x*.33,-.1,-.006,[1.3,.85,.18]),[-.07,-.15].forEach((E,w)=>{let{p:T}=f(x*.46,E,.004),A=Ge(u,`whisker_${_}_${w+1}`,new Kt(.008,.008,.24,8),s.ink,T.toArray()),M=ne(x,w?-.18:.08,-.35).normalize();A.quaternion.setFromUnitVectors(ne(0,1,0),M),A.position.addScaledVector(M,.05)})}),d("nose",new Xt(.06,24,16),s.pink,0,-.06,.008,[1.3,.85,.6]),d("lip_top",new Xt(.045,20,14),s.fur,.05,-.17,.01,[1,.9,.8]),d("lip_bottom",new Xt(.045,20,14),s.fur,.05,-.24,0,[1,.9,.8]),[-1,1].forEach(x=>{let{p:_,n:E}=f(x*.34,.4,.12),w=Ge(u,"ear_"+(x<0?"l":"r"),new Xt(.15,32,20),s.fur,_.toArray(),[0,0,0],[1,1,.6]);bd(w,ne(E.x*.6,E.y*.9,1)),Ge(w,"ear_inner_"+(x<0?"l":"r"),new Xt(.09,24,16),s.pink,[0,-.01,.13],[0,0,0],[1,1,.35])}),Ge(u,"mane_fill",new Xt(1,48,32),s.mane,[0,.03,-.14],[0,0,0],[.6,.53,.5]);let g=(x,_=.035)=>E=>_+(x-_)*Math.pow(Math.sin(Math.PI*Math.min(1,E*1.1+.08)),.7);[-.46,-.31,-.155,0,.155,.31,.46].forEach((x,_)=>{let E=Math.sqrt(1-x*x/h.a**2),w=h.b*E+.05,T=h.c2*E+.05,A=[];for(let b=0;b<=8;b++){let I=fe.degToRad(38+210*(b/8));A.push(ne(x*1.04,w*Math.sin(I),T*Math.cos(I)))}let M=A[A.length-1];A.push(ne(x*1.05,M.y-.08,M.z-.12)),Tl(u,"mane_lock_"+(_+1),new On(A),g(.105-Math.abs(x)*.04),s.mane)}),[-1,1].forEach(x=>{let _=new On([ne(x*.47,.3,.18),ne(x*.57,.06,.02),ne(x*.56,-.24,-.12),ne(x*.47,-.42,-.14),ne(x*.4,-.48,-.06)]);Tl(u,"mane_side_"+(x<0?"l":"r"),_,g(.11,.04),s.mane)});let y=_g("hand_fin",.13,1.7,.04,s.mane);y.position.set(-.3,.68,.64),y.rotation.set(-.35,.25,.25),t.add(y),xg(Ge(t,"arm_l",new Ei(.075,.2,8,20),s.fur),ne(-.33,.58,.22),ne(-.3,.64,.56)),xg(Ge(t,"arm_r",new Ei(.075,.26,8,20),s.fur),ne(.3,.58,.24),ne(-.12,.7,.6));let m=h.c.clone().add(f(.05,-.2,.05).p),p=new On([m,ne(-.12,.92,.7),ne(-.36,.76,.8),ne(-.52,.44,.8),ne(-.6,n+.02,.72)]);Tl(t,"water_stream",p,x=>.035+.065*Math.pow(x,.9),s.water);let v=new $t;return v.name="splash",v.position.set(-.6,n,.72),t.add(v),Ge(v,"splash_pool",new Xt(.24,32,16),s.water,[0,0,0],[0,0,0],[1,.2,1]),[[.27,.06,.08,.05],[-.22,.08,.14,.045],[.05,.05,.27,.04],[-.12,.3,-.05,.035],[.2,.22,.12,.03]].forEach(([x,_,E,w],T)=>Ge(v,"droplet_"+(T+1),new Xt(w,20,14),s.water,[x,_,E])),{root:t,mouth:m,splash:v}}function vg(s=1){let{root:t,mouth:e,splash:n}=uS();t.scale.setScalar(s),t.updateMatrixWorld(!0);let i=new Map,r=[];t.traverse(h=>{if(!h.isMesh)return;if(h.name.startsWith("droplet_")){r.push(h);return}let u=h.geometry.clone().applyMatrix4(h.matrixWorld);i.has(h.material)||i.set(h.material,[]),i.get(h.material).push(u)});let o=new $t;o.name="merlion";for(let[h,u]of i){let f=new Dt(Ir(u),h);u.forEach(d=>d.dispose()),f.castShadow=h.name!=="water"&&h.name!=="pool",f.receiveShadow=!0,o.add(f)}let a=new $t;for(let h of r){let u=new Dt(h.geometry,h.material);h.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.userData.y0=u.position.y,u.userData.phase=Math.random()*Math.PI*2,a.add(u)}o.add(a);let c=n.getWorldPosition(new S),l=h=>{for(let u of a.children){let f=(h*1.6+u.userData.phase)%(Math.PI*2);u.position.y=u.userData.y0+Math.abs(Math.sin(f))*.12*s}};return{group:o,mouth:e.multiplyScalar(s),splash:c,animate:l}}var wd=3.2,fS="#f3f0e8";function Mg(s,t,e,n=[1,1]){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new sn(i);return r.colorSpace=te,r.wrapS=r.wrapT=Tn,r.repeat.set(...n),r.anisotropy=4,r}function dS(){let s=Mg(32,64,(e,n,i)=>{e.fillStyle="#e8eef2",e.fillRect(0,0,n,i),e.fillStyle="#6f8fa8",e.fillRect(0,10,n,26),e.fillStyle="#86a5bd",e.fillRect(0,42,n,16);for(let r=0;r<n;r+=8)e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(r,0,1,i)},[1,1]);s.repeat.set(.6,.6);let t=Mg(32,64,(e,n,i)=>{e.fillStyle="#000",e.fillRect(0,0,n,i),e.fillStyle="#ffd98a",e.fillRect(0,12,n,22),e.fillStyle="#fff1c4",e.fillRect(0,44,n,12)});t.repeat.copy(s.repeat),ns("mbsglass",new ge({map:s,emissiveMap:t,emissive:16777215,emissiveIntensity:0,roughness:.35,metalness:.1}))}function pS(s){let t=s.sub(1,-14);for(let i of[-6.5,0,6.5]){let r=t.sub(i,0),o=new oi([[-1.9,0],[-.1,0],[-.1,22],[-1.9,22]].map(([c,l])=>new it(c,l))),a=new oi;a.moveTo(.1,0),a.lineTo(1.9,0),a.bezierCurveTo(3.2,6,2.4,15,1.9,22),a.lineTo(.1,22);for(let c of[o,a]){let l=new Mr(c,{depth:4.4,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2,curveSegments:16});r.raw(l,"#ffffff",0,0,new nt().makeTranslation(0,-.4,-2.2),{mat:"mbsglass"})}r.box(0,0,.22,22.4,4.3,"#3d4a55",{y:-.4}),r.rbox(.4,0,4.2,.5,4.8,"#dfe6eb",{y:21.4,r:.1}),r.solid(.3,0,4.6,4.4)}let e=new oi;e.moveTo(-10.5,-2.2),e.lineTo(10.5,-2.2),e.quadraticCurveTo(15.5,-1.2,16.5,0),e.quadraticCurveTo(15.5,1.2,10.5,2.2),e.lineTo(-10.5,2.2),e.quadraticCurveTo(-11.5,0,-10.5,-2.2),t.extrude(0,0,e,1,"#eef2f4",{y:21.8,bevel:.12,curveSeg:16});let n=new oi(e.getPoints(24).map(i=>new it(i.x*.93,i.y*.8)));t.extrude(0,0,n,.25,"#7cbb6a",{y:22.9}),t.rbox(-1,-1.3,13,.12,.9,"#4fc3e8",{y:22.95,r:.04,glow:"pool"});for(let i=0;i<7;i++)t.model(i%2?"tree_palmTall":"tree_palmDetailedShort",-8+i*3.2,.9,{h:1.6,y:23.1,rot:i});for(let i=0;i<10;i++)t.model("loungeChair",-7+i*1.3,-.6,{h:.35,y:23.1,rot:Math.PI,center:!0,shadow:!1});for(let i of[-6.4,0,6.4])t.rbox(i,4.6,6.5,2.8,3.2,"#d7dee4",{r:.2,y:-.3}),t.rbox(i,6.25,6.2,1.9,.1,"#ffffff",{y:.1,mat:"mbsglass",r:.03}),t.rbox(i,6.6,6.6,.15,1.2,"#eef2f4",{y:2.4,r:.05});t.solid(0,4.6,19,3.2),t.sign(0,7.25,"MARINA BAY",{w:4.4,h:.6,y:3.3,bg:"#2e4a66",board:!1})}function mS(s){let t=()=>{let e=new xn(1.6,5,6,14),n=e.attributes.position;for(let i=0;i<n.count;i++){let r=n.getX(i),o=n.getY(i),a=(o+2.5)/5;n.setX(i,r*Math.sin(Math.PI*Math.min(1,a*1.1+.08))*(1-a*.35)),n.setY(i,o+2.5),n.setZ(i,.6*a*a*3-Math.abs(r)*.25)}return e.computeVertexNormals(),e};s.lathe(0,0,[[0,0],[2,0],[1.6,.8],[1.1,1.6],[0,1.7]],"#d8d2c6",{seg:20});for(let e=0;e<10;e++){let n=e/10*Math.PI*2,i=e%2?1.2:1.6,r=new nt().makeRotationY(n).multiply(new nt().makeTranslation(0,.6,i)).multiply(new nt().makeRotationX(.35+e%2*.15));s.raw(t(),fS,0,0,r),s.raw(ea(t()),"#dcd6ca",0,0,r)}s.solidCircle(0,0,2.6)}function bg(s,t,e,n){s.dome(t,e,n,"#c9b48a",{seg:32,hseg:14});let i=new ri(.13,.45,5),r=new S(0,1,0),o=new be,a=new nt,c=new S;for(let l=.15;l<1.5;l+=.17){let h=Math.max(1,Math.round(Math.sin(l)*22));for(let u=0;u<h;u++){let f=u/h*Math.PI*2+l*3;c.set(Math.sin(l)*Math.cos(f),Math.cos(l),Math.sin(l)*Math.sin(f)),o.setFromUnitVectors(r,c),a.compose(c.clone().multiplyScalar(n+.1),o,new S(1,1,1)),s.raw(i,"#a88d55",t,e,a.clone())}}s.lathe(t,e,[[n+.3,0],[n+.3,.3],[n,.35],[0,.35]],"#d8d2c6",{seg:32}),s.solidCircle(t,e,n)}function gS(s,t,e,n){let i=s.sub(t,e);i.ball(0,0,.55,"#e2383f",{y:n,sx:1.4,sy:.55,seg:16});for(let r of[-1,1]){for(let o=0;o<3;o++)i.tube(0,0,[[r*.6,n+.25,-.2+o*.25],[r*1,n+.45,-.25+o*.3],[r*1.25,n,-.3+o*.35]],.06,"#d12f35");i.tube(0,0,[[r*.5,n+.35,.3],[r*.8,n+.6,.65]],.08,"#d12f35"),i.ball(r*.85,.75,.22,"#e2383f",{y:n+.5,sx:1.2}),i.ball(r*.18,.35,.08,"#ffffff",{y:n+.55})}}function wg(s){dS(),s.paintRect(0,4.4,34,2.8,"#e3d7bf");for(let o=0;o<17;o++)s.paintRect(-16+o*2,4.4,1.9,2.6,o%2?"#d9ccb2":"#e3d7bf",0,!0);s.paintRect(1,-7.5,30,8,"#ddd6c8"),s.paintCircle(-5.5,6.2,3,"#e3d7bf"),s.water(2,16,10.5),s.paintCircle(-1.6,4.4,.9,"#f3c13a",!0),s.paintCircle(-1.6,4.4,.65,"#e3d7bf",!0);let t=null;for(let o=-1.25;o<=1.251;o+=.0625){let a=2+Math.sin(o)*10.8,c=16-Math.cos(o)*10.8;if(Math.hypot(a+5.5,c-6.2)<1.16*wd+.4){t=null;continue}if(t){let l=(a+t[0])/2,h=(c+t[1])/2;s.tube(l,h,[[t[0]-l,1,t[1]-h],[a-l,1,c-h]],.04,"#c9cdd2",{tseg:2})}Math.round(o/.0625)%2===0&&s.cyl(a,c,.04,.04,1,"#c9cdd2",{seg:6}),t=[a,c]}for(let o of[-1,.6,1.1]){let a=2+Math.sin(o)*11.4,c=16-Math.cos(o)*11.4;s.model("light-square",a,c,{h:4.2,rot:o+Math.PI}),s.ball(a,c,.18,"#fff1b8",{y:4.1,glow:"win"})}for(let[o,a,c]of[[3,20,1.6],[6,13,1.2],[-2,14,1],[7,21,1.4],[0,23,1.2]])s.model(c>1.3?"lily_large":"lily_small",o,a,{w:c,y:-.02,rot:o,shadow:!1});let e=vg(wd);s.put(e.group,-5.5,6.2,0),s.group.add(e.group),s.solidCircle(-5.5,6.2,1.16*wd),s.spots.mouth=[-5.5+e.mouth.x,6.2+e.mouth.z,e.mouth.y];let n=0;s.updaters.push(o=>e.animate(n+=o)),pS(s);let i=s.sub(13.5,8.5);mS(i),bg(s,-13,-8,3.2),bg(s,-11,-12.5,2.4);let r=s.sub(-13,9.5);r.rbox(0,0,5,2.9,4,"#f6efe2",{r:.1}),r.rbox(0,-2.02,1.3,2.1,.06,"#7a3b2e",{r:.03});for(let o of[-1.7,1.7])r.rbox(o,-2.02,1.1,.9,.06,"#ffd27a",{y:1.1,r:.03,glow:"win"});r.cone(0,0,4.2,1.6,"#c8402f",{y:2.9,seg:4,spin:Math.PI/4,sz:.85}),r.sign(0,-2.12,"CHILLI CRAB \u8FA3\u6912\u8783\u87F9",{w:4,h:.6,y:2.45,rot:Math.PI,bg:"#c8402f",board:!1}),gS(r,0,.2,4.3),r.solid(0,0,5,4),Ds(s,-15.5,6.2,"#ffffff","#e2383f"),s.model("pot-stew",-15.5,6.2,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.crab=[-13,6.8,Math.PI],s.spots.kenji=[-9.2,4.6,Math.PI/2],s.spots.photo=[-1.6,4.4];for(let[o,a]of[[14.5,-5],[8,-5.5],[-6,-5]])li(s,o,a,.9);Yr(s,15,4.2,.9),s.solidCircle(15,4.2,.3),pn(s,1,-5,4,.8),an(s,6.5,5,0);for(let o of[-10,2,12])zn(s,o,-3.8,Math.PI),s.solidCircle(o,-3.8,.15);s.coins=[[-15.5,-3.8],[10,-6.5],[14,1.5]],s.updaters.push((o,a)=>{Lr.mbsglass.emissiveIntensity=a.night*.9})}var Al=[[0,11.5,16],[-6.5,7.8,12],[6.5,8.2,13],[-4.5,16,11],[5,16.5,12],[-10.5,12.5,10],[10.5,12.8,11]],yS="#5d4a6e",Sd="#6b5579",Sg=["#4f9a57","#6fb04f","#e86fa1","#f3c13a","#3f8a4a"],Rl=s=>Math.min(2.8,.2*s);function xS(s,t,e,n,i){let r=n/14,o=Rl(n),a=n-o,c=3.1*r+.4,l=[[0,0],[1.25,0],[1.05,.25],[.78,.9],[.62,2.2]];for(let f=1;f<=6;f++)l.push([.62-.2*(f/6),2.2+(a-2.2)*(f/6)]);l.push([0,a]),s.lathe(t,e,l,yS,{seg:18});let h=f=>f<2.2?.78-.16*f/2.2:.62-.2*(f-2.2)/(a-2.2);for(let f=0;f<3;f++){let d=[];for(let g=0;g<=18;g++){let y=.6+(a-1)*(g/18),m=f*2.09+g*.75,p=h(y)+.06;d.push([Math.cos(m)*p,y,Math.sin(m)*p])}s.tube(t,e,d,.07,Sd,{tseg:90,rseg:5});for(let g=1;g<18;g++)for(let y=0;y<3;y++){let[m,p,v]=d[g],x=Math.atan2(v,m)+(i()-.5)*.5,_=Math.hypot(m,v)+.05,E=i()<.75?Sg[[0,1,4][y]]:Sg[2+(i()*2|0)];s.ball(t+Math.cos(x)*_,e+Math.sin(x)*_,.08+i()*.05,E,{y:p-.25+y*.18,seg:5,hseg:3,sy:.7})}}s.lathe(t,e,[[.4,a-.2],[.9,a+.3*o],[c*.6,a+.75*o],[c-.1,n-.05],[c-.2,n-.15]],"#3b2d48",{seg:24});let u=16;for(let f=0;f<u;f++){let d=f/u*Math.PI*2,g=Math.cos(d),y=Math.sin(d),m=[];for(let p=0;p<=1.001;p+=.25){let v=.45+(c-.45)*Math.pow(p,.75),x=a-.3+(o+.3)*Math.sqrt(p);m.push([g*v,x,y*v])}if(s.tube(t,e,m,.06,Sd,{tseg:14,rseg:4}),f%2===0)for(let p=1;p<m.length;p++)s.ball(t+m[p][0],e+m[p][2],.1,"#ffffff",{y:m[p][1]+.02,seg:6,hseg:4,glow:"super"})}for(let f of[.35,.7]){let d=.45+(c-.45)*Math.pow(f,.75),g=a-.3+(o+.3)*Math.sqrt(f);s.raw(new we(d,.045,4,32),Sd,t,e,new nt().makeRotationX(Math.PI/2).setPosition(0,g,0))}s.raw(new we(c,.13,6,40),"#ffffff",t,e,new nt().makeRotationX(Math.PI/2).setPosition(0,n,0),{glow:"super"});for(let f=0;f<20;f++){let d=f/20*Math.PI*2;s.ball(t+Math.cos(d)*(c-.15),e+Math.sin(d)*(c-.15),.12,"#ffffff",{y:n+.05,seg:6,hseg:4,glow:"super"})}s.lathe(t,e,[[1.25,0],[1.9,0],[1.9,.3],[1.75,.35],[1.25,.35]],"#cfc7b8",{seg:28});for(let f=0;f<9;f++){let d=f/9*Math.PI*2+i();s.model(f%3?"plant_bushSmall":"flower_purpleA",t+Math.cos(d)*1.55,e+Math.sin(d)*1.55,{h:.45,y:.3,rot:d,shadow:!1})}s.solidCircle(t,e,1.4)}function _S(s,t,e){let[n,i,r]=t,[o,a,c]=e,l=Math.hypot(o-n,a-i),h=Math.min(r-Rl(r),c-Rl(c))-1.4,u=s.sub((n+o)/2,(i+a)/2,Math.atan2(o-n,a-i)),f=14,d=y=>h-.45*Math.sin(Math.PI*y),g=y=>-l/2+1+(l-2)*y;for(let y=0;y<f;y++){let m=(y+.5)/f,p=Math.atan2(d((y+1)/f)-d(y/f),(l-2)/f);u.box(0,g(m),1,.14,(l-2)/f+.05,"#d6dbe0",{y:d(m)-.07,rx:-p}),u.box(0,g(m),.86,.04,(l-2)/f+.05,"#a88a62",{y:d(m)+.02,rx:-p})}for(let y of[-.5,.5]){let m=[],p=[];for(let v=0;v<=f;v++){let x=v/f;m.push([y,d(x)+.05,g(x)]),p.push([y,d(x)+.95,g(x)])}u.tube(0,0,p,.035,"#eef1f3",{tseg:40}),u.tube(0,0,m.map(([v,x,_])=>[v,x+.45,_]),.015,"#c8ced3",{tseg:40});for(let v=0;v<=f;v+=2){let x=v/f;u.cyl(y,g(x),.02,.02,.95,"#c8ced3",{y:d(x),seg:5})}for(let v of[-1,1]){let x=[y*.6,(v<0?r:c)-Rl(v<0?r:c)-.1,v*(l/2-.7)];for(let _ of v<0?[.12,.26,.4]:[.6,.74,.88])u.tube(0,0,[x,[y,d(_)+.95,g(_)]],.012,"#9aa3ab",{tseg:2,rseg:3})}}for(let y of[-1,1])u.raw(new we(.85,.12,6,20),"#d6dbe0",0,y*(l/2-.2),new nt().makeRotationX(Math.PI/2).setPosition(0,h,0))}var vS=new ge({color:"#d9f0f7",roughness:.05,metalness:.1,transparent:!0,opacity:.28,depthWrite:!1,side:He});function Eg(s,t,e,n,i,r,o){let a=s.sub(t,e);a.lathe(0,0,[[n-.1,0],[n+.45,0],[n+.45,.35],[n+.15,.45],[n-.1,.45]],"#d6d0c4",{seg:48});let c=new Dt(new Xt(n,40,16,0,Math.PI*2,0,Math.PI/2).scale(1,i,1),vS);c.renderOrder=2,a.put(c,0,0,0,.42),s.group.add(c);let l=new nt().makeTranslation(0,.42,0);for(let u=0;u<18;u++){let f=l.clone().multiply(new nt().makeScale(1,i,1)).multiply(new nt().makeRotationY(u/18*Math.PI));a.raw(new we(n+.03,.05,4,40,Math.PI),"#e4e9ec",0,0,f)}for(let u of[.35,.65,.95,1.25]){let f=new nt().makeRotationX(Math.PI/2).setPosition(0,.42+Math.cos(u)*n*i,0);a.raw(new we(Math.sin(u)*n+.03,.045,4,48),"#e4e9ec",0,0,f)}let h=a.sub(0,n+.2);h.rbox(0,0,2.6,.18,1.6,"#e4e9ec",{y:2.2,r:.05});for(let u of[-1.15,1.15])h.cyl(u,.6,.06,.06,2.2,"#bfc6cc",{seg:8});if(h.box(0,-.35,1.6,2,.08,"#2c4a58",{}),r==="flower"){for(let u=0;u<9;u++){let f=o()*6.28,d=(.25+o()*.5)*n;a.model(["tree_palmDetailedShort","tree_detailed","tree_small"][u%3],Math.cos(f)*d,Math.sin(f)*d,{h:1.8+o()*.9,y:.42,rot:f,shadow:!1})}for(let u=0;u<40;u++){let f=o()*6.28,d=o()*.85*n;a.model(["flower_redA","flower_purpleA","flower_yellowA","flower_redB","plant_bushDetailed"][u%5],Math.cos(f)*d,Math.sin(f)*d,{h:.45+o()*.3,y:.42,rot:f,shadow:!1})}}else{a.lathe(0,0,[[0,.42],[2.2,.42],[1.9,1.4],[1.4,2.6],[1.1,3.6],[.7,4.3],[0,4.5]],"#4c7f48",{seg:14});for(let u=0;u<26;u++){let f=.6+o()*3.6,d=o()*6.28,g=2.2-(f-.42)*.4+.1;a.model(u%2?"plant_bushSmall":"grass_leafsLarge",Math.cos(d)*g,Math.sin(d)*g,{h:.5,y:f,rot:d,shadow:!1})}a.tube(0,0,[[0,4.3,.75],[0,3.4,1.35],[0,2,1.95],[0,.5,2.3]],.2,"#cfeeff",{tseg:20}),a.raw(new we(2.6,.05,4,40),"#d8dde0",0,0,new nt().makeRotationX(Math.PI/2).setPosition(0,3,0))}a.solidCircle(0,0,n+.3)}function MS(s,t,e){let n=s.sub(t,e,-.35),i=8.6,r=6;for(let c of[-1,1])for(let l of[-1,1])n.tube(0,0,[[l*2.6,0,c*1.5],[l*.25,i,c*.85]],.2,"#e3e7ea",{tseg:2,rseg:10});for(let c of[-1,1])n.box(0,c*1.2,5.6,.2,.3,"#d0d6db",{y:4.2});n.rbox(0,3.1,9,1.8,2.6,"#eef0ee",{r:.25}),n.box(0,1.79,8.6,.8,.04,"#5c8ea8",{y:.6}),n.rbox(0,3.1,9.3,.15,2.9,"#c8cfd5",{y:1.8,r:.06});for(let c=0;c<5;c++)n.model("pottedPlant",-3.6+c*1.8,1.55,{h:.9,shadow:!1});n.sign(0,1.84,"SINGAPORE FLYER",{w:3.2,h:.4,y:1.55,bg:"#1d5a8a",board:!1}),n.solid(0,3.1,9,2.6);for(let c of[-2.6,2.6])for(let l of[-1.5,1.5])n.solidCircle(c,l,.3);let o=is(c=>{for(let h of[-.32,.32])c.add(new we(r,.09,6,96),"#f2f4f5",Ot(0,0,h),0);c.add(new we(r-.45,.06,5,96),"#e6eaec",Ot(0,0,0),0),c.add(new Kt(.55,.55,1.8,20),"#c4ccd2",Ot(0,0,0,Math.PI/2),0),c.add(new Kt(.8,.8,.2,20),"#dfe4e8",Ot(0,0,0,Math.PI/2),0);let l=28;for(let h=0;h<l*2;h++){let u=h/(l*2)*Math.PI*2,f=Math.cos(u),d=Math.sin(u);c.add(new Kt(.03,.03,.64,4),"#dfe3e6",Ot(f*r,d*r,0,Math.PI/2),0);let g=new S(f*(r-.45),d*(r-.45),0),y=new S(f*r,d*r,h%2?.32:-.32),m=new Kt(.025,.025,g.distanceTo(y),4),p=new be().setFromUnitVectors(new S(0,1,0),y.clone().sub(g).normalize());c.add(m,"#dfe3e6",new nt().compose(g.clone().add(y).multiplyScalar(.5),p,new S(1,1,1)),0)}for(let h=0;h<l;h++){let u=h/l*Math.PI*2;for(let f of[-1,1]){let d=new S(0,0,f*.85),g=new S(Math.cos(u)*(r-.45),Math.sin(u)*(r-.45),-f*.05),y=new Kt(.012,.012,d.distanceTo(g),3),m=new be().setFromUnitVectors(new S(0,1,0),g.clone().sub(d).normalize());c.add(y,"#b8c0c6",new nt().compose(d.clone().add(g).multiplyScalar(.5),m,new S(1,1,1)),0)}}for(let h=0;h<l;h++){let u=h/l*Math.PI*2+.05,f=Math.cos(u),d=Math.sin(u),g=r+.62;c.add(new Ei(.42,.75,6,14),"#9fd3ea",Ot(f*g,d*g,0,Math.PI/2),0);for(let y of[-.5,.5])c.add(new we(.43,.04,4,16),"#ffffff",Ot(f*g,d*g,y),0);c.add(new Be(.1,.4,.1),"#e8ecef",Ot(f*(r+.25),d*(r+.25),0,0,0,u-Math.PI/2),0),c.add(new Xt(.06,6,4),"#ffffff",Ot(f*(r+.12),d*(r+.12),.34),0,"win")}}),a=new $t;return a.add(o),n.put(a,0,0,0,i),s.group.add(a),o}function Tg(s){let t=Pi(77);s.paintCircle(0,12,13,"#7fbb64"),s.paintRect(0,4.5,3,4,"#e0d4b8"),s.paintCircle(0,11.5,3.4,"#e0d4b8"),s.paintRect(0,-8,32,9,"#ddd6c6");for(let[i,r]of[[-3.2,9.6],[-5.2,11.5],[3.4,9.6],[5.6,11.8],[-2.4,14.4],[2.6,14.8],[-8.2,10.4],[8.4,10.6]])s.paintCircle(i,r,1.15,"#e0d4b8");for(let[i,r,o]of Al)xS(s,i,r,o,t);_S(s,Al[0],Al[2]),Eg(s,-7,-11,6,.62,"flower",t),Eg(s,5.5,-12,4.6,1.15,"cloud",t),s.sign(-7,-4.6,"FLOWER DOME",{w:2.6,h:.5,y:1.3,bg:"#4c8f6a"}),s.sign(5.5,-6.8,"CLOUD FOREST",{w:2.6,h:.5,y:1.3,bg:"#3a7f9a"});for(let[i,r]of[[-7,-4.6],[5.5,-6.8]])for(let o of[-1.2,1.2])s.cyl(i+o,r-.05,.05,.05,1.1,"#555b62",{seg:6});let e=MS(s,15.5,-9);s.spots.priya=[-2.6,4.8,Math.PI],s.spots.grove=[0,11.5],s.sign(0,6.6,"SUPERTREE GROVE",{w:3,h:.5,y:2.3,bg:"#5d4a6e",rot:Math.PI});for(let i of[-1.6,1.6])s.cyl(i,6.55,.06,.06,2.3,"#3b2d48",{seg:8});pn(s,-3.6,6.2,3.2,.8),pn(s,3.6,6.2,3.2,.8);for(let[i,r]of[[-14.5,4.5],[14.5,4.5],[-14,-5.3]])li(s,i,r,.9);for(let[i,r]of[[-13.5,9],[13.5,9.5],[-12.5,17.5],[12.8,18]])Yr(s,i,r,.9);for(let[i,r]of[[-3,7.6],[3,7.6],[-8,4.8],[8.5,4.5],[-12,15],[12,15.5],[-1.5,18.8],[7.8,14.2],[-8,14.6]])hi(s,i,r,1.1,!0);for(let i=0;i<70;i++){let r=t()*6.28,o=4+t()*8.5,a=Math.cos(r)*o,c=12+Math.sin(r)*o;Al.some(([l,h])=>Math.hypot(l-a,h-c)<2.2)||Math.hypot(a,c-11.5)<3.6||c<7||s.model(["grass_large","grass_leafs","flower_yellowB","flower_purpleB","plant_flatShort"][i%5],a,c,{h:.35+t()*.25,rot:r,shadow:!1})}an(s,2.5,4.4,Math.PI),an(s,-2.2,18.5,Math.PI),an(s,-3.2,11.5,Math.PI/2),an(s,3.2,11.5,-Math.PI/2);for(let i of[-11,-6,6,11])zn(s,i,-3.8),s.solidCircle(i,-3.8,.15);s.coins=[[-13.5,6.5],[12.5,7.8],[0,19.5]];let n=0;s.updaters.push((i,r)=>{n+=i,e.rotation.z+=i*.05;let o=Pr.super;if(o)if(r.night>.4){let a=r.show?.35:.05;o.color.setHSL(n*a%1,.85,.5+.15*Math.sin(n*(r.show?6:1.5))),o.color.multiplyScalar(1.3)}else o.color.setRGB(.55,.5,.6)})}var Il="#9a7550",la="#c9a86a",Cl="#d6b062";function bS(s,t,e,n,i){let r=s.sub(t,e,n),o="#f2f0ea";for(let a of[-.3,.3]){r.rbox(a,.2,.05,.05,1.3,o,{y:.32,r:.015});for(let c of[-.35,.75])r.cyl(a,c,.025,.025,.32,o,{seg:6});r.rbox(a,-.72,.05,.05,.7,o,{y:.5,rx:.75,r:.015})}for(let a=0;a<9;a++)r.box(0,-.38+a*.145,.6,.03,.11,"#c99a62",{y:.36});for(let a=0;a<5;a++)r.box(0,-.55-a*.1,.6,.03,.08,"#c99a62",{y:.47+a*.09,rx:.75});r.rbox(0,.2,.56,.06,1.2,i,{y:.39,r:.025}),r.rbox(0,-.75,.56,.06,.62,i,{y:.62,rx:.75,r:.025}),r.solid(0,0,.7,1.9)}function wS(s,t,e,n,i,r){let o=s.sub(t,e,n);for(let a=0;a<6;a++)o.box(0,-.75+a*.25+.125,.9,.02,.25,a%2?i:r,{y:.01})}function SS(s,t,e){let n=s.sub(t,e,-.2),i=[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]];for(let[a,c]of i)n.tube(0,0,[[a*1.15,0,c*1.15],[a,2.2,c]],.07,"#f5f1e6",{tseg:2,rseg:8});for(let[a,c]of[[0,1],[2,3],[0,2],[1,3]]){let[l,h]=i[a],[u,f]=i[c];n.tube(0,0,[[l*1.08,.4,h*1.08],[u*1,1.9,f*1]],.03,"#e2383f",{tseg:2,rseg:5}),n.tube(0,0,[[u*1.08,.4,f*1.08],[l*1,1.9,h*1]],.03,"#e2383f",{tseg:2,rseg:5})}n.rbox(0,0,2.3,.12,2.3,Il,{y:2.2,r:.03});for(let a=0;a<9;a++)for(let[c,l,h]of[[-1.1+a*.275,-1.1],[-1.1+a*.275,1.1],[-1.1,-1.1+a*.275],[1.1,-1.1+a*.275]])n.cyl(c,l,.02,.02,.5,"#f5f1e6",{y:2.32,seg:4});for(let[a,c,l,h]of[[2.3,.05,0,-1.1],[2.3,.05,0,1.1],[.05,2.3,-1.1,0],[.05,2.3,1.1,0]])n.box(l,h,a,.05,c,"#f5f1e6",{y:2.82});n.rbox(0,.15,1.6,1.25,1.4,"#f5f1e6",{y:2.32,r:.06}),n.box(0,-.56,1.3,.5,.04,"#5aa9cf",{y:2.95});for(let a of[-.81,.81])n.box(a,.15,.04,.5,.9,"#5aa9cf",{y:2.95});n.box(0,-.57,1.3,.32,.05,"#e2383f",{y:2.55}),n.sign(0,-.6,"LIFEGUARD",{w:1.1,h:.24,y:2.71,rot:Math.PI,bg:"#e2383f",board:!1}),n.cone(0,.15,1.45,.75,"#e2383f",{y:3.57,seg:4,spin:Math.PI/4,sz:.95}),n.rbox(0,.15,2,.08,1.85,"#f3c13a",{y:3.52,r:.03});let r=[[0,2.2,-1.15],[0,0,-3.3]];for(let a of[-.4,.4])n.tube(0,0,r.map(([c,l,h])=>[a,l+.08,h]),.05,Il,{tseg:2,rseg:5});for(let a=1;a<10;a++){let c=a/10;n.box(0,-1.15-2.15*c,.8,.04,.16,Ke(Il,.05),{y:2.2*(1-c)+.08})}n.cyl(1,-1,.025,.025,2,"#d9d9d9",{y:2.8,seg:6}),n.box(1,-.65,.02,.32,.6,"#e2383f",{y:4.4}),n.box(1,-.65,.025,.16,.6,"#f3c13a",{y:4.48});let o=new we(.26,.08,8,20);n.raw(o,"#ff5a3a",.5,-1.17,new nt().makeTranslation(0,2.5,0));for(let a=0;a<4;a++)n.raw(new we(.262,.083,8,3,.35),"#ffffff",.5,-1.17,new nt().makeRotationZ(a*Math.PI/2).setPosition(0,2.5,-.001));n.solid(0,0,2.2,2.2)}function ES(s,t,e){let n=s.sub(t,e);for(let[i,r]of[[-2.3,-2],[2.3,-2],[-2.3,2],[2.3,2]]){n.cyl(i,r,.13,.15,2.75,la,{seg:8});for(let o=.5;o<2.6;o+=.55)n.cyl(i,r,.16,.16,.05,Ke(la,-.15),{y:o,seg:8});n.solidCircle(i,r,.2)}n.lathe(0,0,[[0,2.7],[3.85,2.45],[3.9,2.55],[3.4,2.85],[2.1,3.55],[.8,4.25],[0,4.6]],Cl,{seg:9}),n.lathe(0,0,[[0,3.9],[1.5,3.85],[1.4,3.95],[.5,4.5],[0,4.75]],Ke(Cl,-.08),{seg:9,rot:.3});for(let i=0;i<36;i++){let r=i/36*Math.PI*2;n.cone(Math.cos(r)*3.75,Math.sin(r)*3.75,.22,.45,Ke(Cl,i%3*-.05),{y:2.2,rx:Math.PI,seg:4})}n.cone(0,0,.12,.5,Ke(Cl,-.2),{y:4.6,seg:6}),n.rbox(0,.6,4,1.05,.8,"#a9835a",{r:.04});for(let i=0;i<22;i++)n.cyl(-1.95+i*.186,1.02,.085,.085,1.05,i%2?la:Ke(la,-.08),{seg:6});n.rbox(0,.6,4.3,.1,1.05,"#e7cfa2",{y:1.05,r:.03}),n.rbox(0,-1.2,3.4,1.6,.4,"#7a5a40",{r:.03});for(let i of[.9,1.35])for(let r=0;r<8;r++)n.model(r%3?"soda-bottle":"glass",-1.4+r*.4,-1.05,{h:.32,y:i,shadow:!1});n.model("speaker",1.6,-.95,{h:.5,y:1.6,shadow:!1}),n.model("radio",-1.5,-1.05,{h:.3,y:1.6,shadow:!1}),[["coconut",-1.4],["cocktail",-.7],["frappe",0],["coconut-half",.8],["cocktail",1.5]].forEach(([i,r])=>n.model(i,r,.6,{h:.3,y:1.15,shadow:!1})),n.model("pineapple",1.9,.55,{h:.4,y:1.15,shadow:!1});for(let i of[-1.5,-.5,.5,1.5])n.model("stoolBar",i,1.55,{h:.85,solid:"circle"});n.sign(0,2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:0,bg:"#2f8fd8",board:!1}),n.sign(0,-2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:Math.PI,bg:"#2f8fd8",board:!1});for(let i of[-3.3,3.3])n.cyl(i,2.6,.04,.05,1.6,la,{seg:6}),n.cyl(i,2.6,.1,.07,.2,"#7a5a40",{y:1.6,seg:8}),n.cone(i,2.6,.08,.25,"#ff9a3a",{y:1.8,seg:6,glow:"win"}),n.solidCircle(i,2.6,.12);n.solid(0,.6,4,.8),n.solid(0,-1.2,3.4,.4)}function TS(s,t,e){let n="#e6cf8f";s.lathe(t,e,[[0,0],[1,0],[.95,.3],[.7,.35],[0,.35]],n,{seg:18}),s.lathe(t,e,[[0,.35],[.45,.35],[.42,.8],[.5,.82],[.5,.9],[0,.9]],Ke(n,-.03),{seg:14});for(let i=0;i<4;i++){let r=i/4*Math.PI*2+.4,o=t+Math.cos(r)*.72,a=e+Math.sin(r)*.72;s.lathe(o,a,[[0,.3],[.17,.3],[.15,.62],[.2,.64],[0,.66]],n,{seg:10}),s.cone(o,a,.14,.2,Ke(n,-.06),{y:.65,seg:8})}s.cyl(t,e,.01,.01,.5,"#7a5a40",{y:.9,seg:3}),s.box(t+.1,e,.2,.12,.01,"#e2383f",{y:1.25}),s.model("barrel",t+1.2,e+.3,{h:.3,shadow:!1}),s.solidCircle(t,e,.9)}function AS(s,t,e,n,i){let r=new oi;for(let o=0;o<10;o++){let a=o/10*Math.PI*2,c=o%2?.07:.2;o?r.lineTo(Math.cos(a)*c,Math.sin(a)*c):r.moveTo(c,0)}s.extrude(t,e,r,.03,i,{rot:n,bevel:.015})}function Ag(s){let t=Pi(31);s.paintRect(0,9.5,40,13,"#f1dfa8"),s.paintRect(0,4.8,3.2,3.6,"#c8a070"),s.paintRect(0,-7.5,30,8,"#e7dcc4"),s.paintRect(0,15.6,40,1.4,"#ddc68a");for(let r=0;r<12;r++)s.box(0,3.15+r*.3,3,.05,.26,Ke(Il,r%3*.03),{});for(let[r,o,a]of[[-13,6.5,1],[-8,10,1.1],[-2.8,6.2,.9],[4.5,10.5,1.1],[10,6.4,1],[14.5,10,1.05],[-15.5,12.5,1]]){Yr(s,r,o,a),s.solidCircle(r,o,.3);for(let c=0;c<2;c++)s.model("coconut",r+.5+t()*.5,o+(t()-.5)*.8,{h:.22,rot:t()*6,shadow:!1})}for(let[r,o,a,c,l]of[[-5,11.5,"#e2383f","#3b82c4","#ffffff"],[1.2,12.2,"#3b82c4","#f3c13a","#ffffff"],[7.5,12,"#f3c13a","#ff8fb1","#ffffff"]])H0(s,r,o,a),s.solidCircle(r,o,.15),bS(s,r-.95,o+.1,Math.PI,c),wS(s,r+1.1,o+.5,.25,c,l);SS(s,12,13.5),ES(s,-9,-7.5);let e=s.sub(-10.5,8.6);for(let r of[-1.9,1.9])e.cyl(r,0,.05,.05,2.2,"#f5f1e6",{seg:8}),e.solidCircle(r,0,.1);e.box(0,0,3.8,.5,.02,"#2b2b30",{y:1.6});for(let r=0;r<16;r++)e.box(-1.8+r*.24,0,.012,.5,.025,"#d9d9d9",{y:1.6});e.box(0,0,3.8,.06,.03,"#ffffff",{y:2.08}),e.box(0,0,3.8,.04,.03,"#ffffff",{y:1.58});let n=new Xt(.17,16,12);for(let r=0;r<6;r++){let o=new Xt(.172,4,12,r/6*Math.PI*2,Math.PI/3);e.add(o,["#e2383f","#ffffff","#3b82c4","#ffffff","#f3c13a","#ffffff"][r],1.1,1.3,.17)}n.dispose(),TS(s,5.6,14.2);for(let[r,o,a]of[[6.9,13.7,"#ff8a4a"],[-3.4,15.2,"#e85d8a"],[9.6,15.4,"#f3a03a"]])AS(s,r,o,t()*6,a);for(let[r,o,a,c]of[[-14.6,15,.3,"#f3c13a"],[-13.2,15.4,.15,"#e2383f"]]){let l=s.sub(r,o,a);l.ball(0,0,.32,c,{sx:1,sy:.4,sz:5.2,seg:16,hseg:8}),l.ball(0,.2,.2,"#2b2b30",{sx:1,sy:.3,sz:1.6,y:.18}),l.tube(.45,0,[[0,.06,-1.1],[0,.06,1.1]],.025,"#d9d9d9",{tseg:2}),l.solid(0,0,.7,3.2)}for(let[r,o,a,c]of[[-17,14.5,"rock_largeA",1.2],[-16,15.8,"rock_smallB",.5],[16.5,14.8,"rock_largeB",1.1],[15.4,15.9,"rock_smallA",.5],[-1.6,15.7,"stone_smallA",.3],[3.6,16,"rock_smallC",.35]])s.model(a,r,o,{h:c,rot:t()*6.3,solid:c>.6?"circle":!1});let i=s.sub(5,-8);i.rbox(0,0,8.8,.7,1,"#d9cdb4",{r:.12}),i.rbox(0,.3,8.4,2.4,.22,"#fffaf0",{y:.7,r:.08}),i.sign(0,.42,"SENTOSA",{w:8,h:2,y:1.9,bg:"#fffaf0",rainbow:!0,border:!1,board:!1});for(let r of[-4.7,4.7])pn(i,r,0,1.4,1.2);i.solid(0,.15,8.8,1);for(let r=0;r<7;r++)i.model(["flower_redA","flower_yellowA","flower_purpleA"][r%3],-3.6+r*1.2,-.7,{h:.5,shadow:!1});Ns(s,3.5,5.2,Math.PI,"#f7f2e8","#ff8fb1",{label:"ICE CREAM $1",signBg:"#e85d8a"}),s.model("ice-cream",2.85,5.2,{h:.35,y:1.24,shadow:!1}),s.model("popsicle",4.15,5.2,{h:.3,y:1.24,shadow:!1}),s.spots.icecream=[3.5,6.6,Math.PI],s.spots.raj=[10.5,11.6,-Math.PI*.8],an(s,-.5,14.2,0),s.sign(2,13.8,"SUNSET POINT",{w:2.2,h:.5,y:1.6,bg:"#e8743b"}),s.cyl(2,13.8,.05,.05,1.3,"#7a5a40",{seg:6});for(let[r,o]of[[-14,-5],[14,-4.5],[-3,-5],[10.5,-6.5]])hi(s,r,o,1.2,!0);for(let r of[-12,-5,6,12])zn(s,r,-3.8),s.solidCircle(r,-3.8,.15);for(let r=0;r<30;r++){let o=(t()-.5)*34,a=3.5+t()*2.5;Math.abs(o)<2||Math.abs(o-3.5)<1.6||s.model(r%2?"grass_leafs":"grass_large",o,a,{h:.4+t()*.3,rot:t()*6.3,shadow:!1})}s.spots.cat=[-12.2,11.2,.4],s.coins=[[-14,4.5],[8.5,14.5],[-2.5,-6.5]]}function Rg(s,t,e=128){let n=new $i;n.add(new Sr(16777215,8952234,2.2));let i=new ts(16777215,2.2);i.position.set(1,2,3),n.add(i);let r=new Pe(30,1,.1,20);r.position.set(.9,1.5,3.4),r.lookAt(0,.95,0);let o=new Kn(e,e,{colorSpace:te}),a=new Uint8Array(e*e*4),c=document.createElement("canvas");c.width=c.height=e;let l=c.getContext("2d"),h=[],u=s.getClearColor(new Tt),f=s.getClearAlpha();s.setClearColor(0,0);for(let d of t){let g=Us({char:d});hs(g,.4,0),n.add(g.root),s.setRenderTarget(o),s.clear(),s.render(n,r),s.readRenderTargetPixels(o,0,0,e,e,a);let y=l.createImageData(e,e);for(let m=0;m<e;m++)y.data.set(a.subarray((e-1-m)*e*4,(e-m)*e*4),m*e*4);l.clearRect(0,0,e,e),l.putImageData(y,0,0),h.push(c.toDataURL()),n.remove(g.root)}return s.setRenderTarget(null),s.setClearColor(u,f),o.dispose(),h}var Pl=class extends $i{constructor(){super();let t=new Be;t.deleteAttribute("uv");let e=new ge({side:Oe}),n=new ge,i=new Er(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Dt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Dt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Dt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Dt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Dt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Dt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Dt(t,jr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Dt(t,jr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Dt(t,jr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new Dt(t,jr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new Dt(t,jr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Dt(t,jr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function jr(s){let t=new qe;return t.color.setScalar(s),t}var RS={hdb:fg,hawker:dg,chinatown:yg,marina:wg,gardens:Tg,sentosa:Ag},Cg=new URLSearchParams(location.search).has("debug"),je=s=>document.getElementById(s),Ig=()=>new Promise(s=>setTimeout(s,20)),CS=[{char:"female-d"},{char:"male-b",hat:{type:"cap",color:"#2f8fd8"}},{char:"female-e"},{char:"male-f"},{char:"female-a",hat:{type:"bucket",color:"#ff8fb1"}},{char:"male-c"}];async function IS(){let s=new gl,t=new yl;s.loading("Loading fonts\u2026");try{await Promise.race([document.fonts.load('800 40px "Baloo 2"'),new Promise(X=>setTimeout(X,2500))])}catch{}s.loading("Loading 3D models\u2026 0%"),await Gm(X=>s.loading(`Loading 3D models\u2026 ${Math.round(X*100)}%`,X)),s.loading("Building the island\u2026",1),await Ig();let e=je("c"),n=matchMedia("(pointer: coarse)").matches;t.data.settings.gfx||(t.data.settings.gfx=n?"low":"high");let i=t.data.settings.gfx==="high",r=new rc({canvas:e,antialias:!0});r.setPixelRatio(Math.min(devicePixelRatio,i?2:1.25)),r.setSize(innerWidth,innerHeight),r.toneMapping=Nu,r.toneMappingExposure=1.05,r.shadowMap.enabled=i,r.shadowMap.type=Du;let o=new $i,a=new xr(r);o.environment=a.fromScene(new Pl,.04).texture,o.environmentIntensity=.35;let c=new Pe(innerWidth<innerHeight?74:60,innerWidth/innerHeight,.1,2e3),l=new rl,h=new Bo,u=Rm.map(X=>new Bc(X,h,l)),f=Object.fromEntries(u.map(X=>[X.id,X]));for(let X of u)RS[X.id](X),o.add(X.group);s.loading("Painting roads and planting trees\u2026",1),await Ig();let d=Y0(l,h,r),g=[h.build(),Nc.build()];o.add(d.mesh,...g),l.buildSolids([...g,...u.map(X=>X.group)]);let y=new xl(t.data.settings),m=new al(o,i),p=new ll(o),v=new ul(o,l,t.data.char||"female-a"),x=new dl(c);x.world=l;let _=new pl(e,je("joy"),je("joyKnob")),E=new ml(y),w=new wl(o),T=new vl(o,l,v),A=new El(o,d.path,v,l),M={scene:o,camera:c,renderer:r,world:l,sites:f,siteList:u,player:v,rig:x,sky:m,ui:s,dlg:E,audio:y,save:t,fx:w,npcs:T,time:t.data.time??.1,env:{night:0,show:!1},busy:!1,titleOpen:!0,has:X=>!!t.data.flags[X],set(X){t.data.flags[X]=1,t.write()},pay(X){return t.data.money<X?!1:(t.data.money-=X,s.setMoney(t.data.money,!0),t.write(),!0)},give(X){t.data.money+=X,s.setMoney(t.data.money,!0),t.write()},addFood(X){let ht=aa.find(q=>q.id===X);t.data.foods[X]||s.toast(`${ht.icon} ${ht.name} added to your food album!`),t.data.foods[X]=1,t.write(),s.setAlbum(Object.keys(t.data.foods).length,aa.length)},hours:()=>(6+M.time*24)%24,isNight(){let X=M.hours();return X>=19.5||X<5.5},refresh(){s.renderTasks(b.tasks())}};u.forEach((X,ht)=>{let q=ht%2?3:-3;T.walker(X,CS[ht],[-13,q],[13,q],1.1+ht%3*.2)});let b=ug(M);M.quests=b;let I=new Ml(M);M.map=I;let N=[...d.coinSpots];for(let X of u)X.coins.forEach(([ht,q],Q)=>N.push({id:`${X.id}${Q}`,dir:X.dirAt(ht,q)}));let L=new _l(o,N,t,X=>{M.give(1),y.coin(),w.burst(X.dir.clone().multiplyScalar(Ft+1),X.dir,"#ffd23f",24,3,.6,.25),L.found===L.total&&s.toast("\u{1F31F} You found every coin on the planet!",4e3)});p.onStart=()=>{t.data.settings.rain&&!M.titleOpen&&s.toast("\u{1F327}\uFE0F A tropical shower! Your umbrella pops open.")},w.onBang=()=>y.pop(),M.travel=X=>{M.busy||v.dropping||(I.focus=X.id,y.whoosh(),x.flyTo(X.center,.9,()=>{I.show(!1),v.placeAtSite(X,X.def.spawn),v.startDrop(22),x.resetView(),v.onLand=()=>s.toast(`${X.def.icon} ${X.def.name}`)}))},s.onTask=X=>{!M.titleOpen&&!M.busy&&X.site&&I.show(!0,f[X.site])},M.photo=()=>{let X=f.marina,ht=2*Math.atan(Math.tan(35*fe.DEG2RAD)/Math.min(c.aspect,4/3))*fe.RAD2DEG,q=new Pe(ht,c.aspect,.1,2e3);q.position.copy(X.dirAt(-3.2,15.5)).multiplyScalar(Ft+3.2),q.up.copy(X.center),q.lookAt(X.dirAt(-5.2,5.6).multiplyScalar(Ft+3.6)),v.root.visible=!1,m.dome.position.copy(q.position),r.render(o,q);let Q=document.createElement("canvas");Q.width=800,Q.height=600;let D=Q.getContext("2d"),vt=e.width,tt=e.height,mt=4/3,lt=Math.min(vt,tt*mt),Nt=lt/mt;return D.drawImage(e,(vt-lt)/2,(tt-Nt)/2,lt,Nt,0,0,800,600),D.fillStyle="rgba(255,255,255,0.85)",D.fillRect(0,548,800,52),D.fillStyle="#2e2638",D.font='700 26px "Baloo 2", sans-serif',D.fillText("Greetings from Singapore Planet!  \u{1F981}",22,582),v.root.visible=!0,Q.toDataURL("image/jpeg",.9)},M.checkFinale=()=>{!b.mainDone()||M.has("finale")||(M.set("finale"),setTimeout(()=>{w.fireworks(16),s.modal(`<h2>\u{1F386} Majulah, explorer!</h2>
        <p>You finished every task on Singapore Planet: kopi with Auntie Mei, a choped table at Lau Pa Sat, a lost card returned, a Merlion photo and the Garden Rhapsody.</p>
        <p>Keep exploring! There are still coins to find, foods to taste${M.has("q_cat")?"":" and a certain orange cat to track down"}.</p>
        <button class="btn" onclick="document.querySelector('#modal .modal-x').click()">Keep exploring</button>`)},1200))},je("btnAlbum").addEventListener("click",()=>{let X=t.data.foods;s.modal(`<h2>\u{1F4D6} Food Album</h2>
      <div class="album">${aa.map(ht=>`<div class="food ${X[ht.id]?"got":""}"><div class="f-icon">${X[ht.id]?ht.icon:"\u2754"}</div><div class="f-name">${X[ht.id]?ht.name:"???"}</div><div class="f-where">${ht.where}</div>${X[ht.id]?`<div class="f-desc">${ht.desc}</div>`:""}</div>`).join("")}</div>
      <p class="muted">Coins found: ${L.found} / ${L.total}</p>`)});let U=()=>{let X=t.data.settings,ht=s.modal(`<h2>\u2699\uFE0F Settings</h2>
      <div class="settings">
        <button class="btn toggle" data-k="music">\u{1F3B5} Music: ${X.music?"On":"Off"}</button>
        <button class="btn toggle" data-k="sfx">\u{1F50A} Sound: ${X.sfx?"On":"Off"}</button>
        <button class="btn toggle" data-k="rain">\u{1F327}\uFE0F Rain: ${X.rain?"On":"Off"}</button>
        <button class="btn" data-a="gfx">\u{1F5A5}\uFE0F Graphics: ${X.gfx==="high"?"High":"Low"} <small>(reloads)</small></button>
        <button class="btn" data-a="fs">\u26F6 Fullscreen</button>
        <button class="btn danger" data-a="reset">\u{1F5D1}\uFE0F Reset progress</button>
      </div>
      <p class="muted">WASD / arrows: walk \xB7 Shift: run \xB7 E: talk \xB7 M: map \xB7 drag: look \xB7 scroll: zoom</p>
      <p class="muted">3D assets by <a href="https://kenney.nl" target="_blank" rel="noopener">Kenney</a> (CC0). Landmarks built in code.</p>`);ht.querySelectorAll(".toggle").forEach(Q=>Q.addEventListener("click",()=>{let D=Q.dataset.k;X[D]=!X[D],D==="music"&&y.setMusic(X.music),D==="sfx"&&y.setSfx(X.sfx),t.write(),U()})),ht.querySelector("[data-a=gfx]").addEventListener("click",()=>{X.gfx=X.gfx==="high"?"low":"high",t.data.time=M.time,t.write(),location.reload()}),ht.querySelector("[data-a=fs]").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})});let q=ht.querySelector("[data-a=reset]");q.addEventListener("click",()=>{q.dataset.sure?t.reset():(q.dataset.sure="1",q.textContent="\u26A0\uFE0F Tap again to erase everything")})};je("btnSettings").addEventListener("click",U),je("btnMap").addEventListener("click",()=>H());let H=()=>{M.titleOpen||M.busy||v.dropping||I.show(!I.open)};_.onDrag=(X,ht)=>x.drag(X,ht),_.onZoom=X=>x.zoom(X),s.setMoney(t.data.money),s.setAlbum(Object.keys(t.data.foods).length,aa.length),M.refresh();let k=matchMedia("(pointer: coarse)").matches;x.autoSpin=25;let K=X=>{if(y.unlock(),M.titleOpen=!1,x.autoSpin=0,je("title").classList.add("hidden"),s.showHud(!0),je("joy").classList.toggle("hidden",!k),X&&t.data.pos){let[ht,q,Q,D,vt,tt]=t.data.pos;v.place(new S(ht,q,Q),new S(D,vt,tt)),x.openMap(v.pos,v.fwd),I.show(!1),v.startDrop(18),v.onLand=()=>s.toast("Welcome back! \u{1F44B}")}else I.show(!0),M.travel(f.hdb),v.onLand=()=>{s.toast("\u{1F3E2} Toa Payoh Heartland"),setTimeout(()=>s.toast("Tip: walk up to people and press E to chat"),2600)}};je("btnStart").addEventListener("click",()=>{if(t.exists&&!je("btnStart").dataset.sure){je("btnStart").dataset.sure="1",je("btnStart").textContent="Start over? Tap again";return}if(t.exists){t.reset();return}K(!1)}),t.exists&&t.data.pos&&(je("btnContinue").classList.remove("hidden"),je("btnContinue").addEventListener("click",()=>K(!0))),addEventListener("resize",()=>{c.aspect=innerWidth/innerHeight,c.fov=c.aspect<1?74:60,c.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight)});let V=je("picker"),st=Rg(r,ld);ld.forEach((X,ht)=>{let q=document.createElement("button");q.className="pick"+(X===v.char?" on":""),q.innerHTML=`<img src="${st[ht]}" alt="${X}">`,q.addEventListener("click",()=>{V.querySelectorAll(".pick").forEach(Q=>Q.classList.remove("on")),q.classList.add("on"),v.setCharacter(X),t.data.char=X,t.write()}),V.appendChild(q)}),s.doneLoading(),je("title").classList.remove("hidden");let ut={up:new S,east:new S,south:new S,north:new S},xt=new S,Ut=je("fps"),Jt=performance.now(),$=0,rt=0,wt=0,at=0,Lt=0,kt=async X=>{M.busy=!0,v.speed=0,x.yaw=.65,s.prompt(null);try{await X.run()}catch(ht){console.error(ht)}E.close(),M.busy=!1,M.refresh()};r.setAnimationLoop(()=>{let X=performance.now(),ht=Math.min(.05,(X-Jt)/1e3);if(Jt=X,Lt+=ht,M.titleOpen||(M.time=(M.time+ht/Tm)%1),(_.consume("KeyM")||I.open&&_.consume("Escape"))&&H(),s.isModal&&_.consume("Escape")&&s.closeModal(),E.open){_.consume("KeyE","Space","Enter")&&E.advance();let tt=_.consume("Digit1","Digit2","Digit3");tt&&E.pick(Number(tt.slice(-1))-1)}let q=!M.titleOpen&&!M.busy&&!s.isModal&&!I.open&&x.mode==="follow";x.dragging=_.dragging;let Q=t.data.settings.rain&&p.level>.3;v.update(ht,q?_.axis():null,Q,x.fwd),x.update(ht,v),v.worldPos(xt),Cr(v.pos,ut);let D=fe.clamp((c.position.length()-90)/60,0,1);m.update(M.time,ut,xt,c.position,p.level,D),M.env.night=m.night,y.night=m.night,p.update(ht,xt,ut,t.data.settings.rain&&!M.titleOpen),y.setRain(x.mode==="follow"?p.level:0),T.update(ht),L.update(ht,Lt,v),A.update(ht),w.update(ht,v);for(let tt of u)for(let mt of tt.updaters)mt(ht,M.env);b.update(ht),x.lookUpTarget=M.env.show&&Math.abs(v.speed)<.5?1:0,E.update(ht);let vt=q&&!v.dropping?l.nearestAct(v.pos):null;s.prompt(vt?vt.label:null),vt&&(_.consume("KeyE","Enter","Space")||s.takePromptHit())&&kt(vt),I.update(b.activeSites()),$-=ht,$<=0&&($=.5,s.setClock(M.hours(),M.isNight(),Q)),rt-=ht,rt<=0&&!M.titleOpen&&!v.dropping&&(rt=5,t.data.time=M.time,t.data.pos=[...v.pos.toArray(),...v.fwd.toArray()],t.write()),m.dome.position.copy(c.position),r.render(o,c),_.endFrame(),Cg&&(wt++,at+=(X-(M._lastNow||X))/1e3,M._lastNow=X,at>.5&&(Ut.textContent=`${Math.round(wt/at)} fps \xB7 ${r.info.render.calls} calls \xB7 ${(r.info.render.triangles/1e3).toFixed(0)}k tris`,wt=0,at=0))}),Cg&&(Ut.classList.remove("hidden"),window.G=M,M.weather=p,M.traffic=A)}IS().catch(s=>{console.error(s);let t=document.getElementById("loading");t.classList.remove("hidden"),t.querySelector("span").textContent=`Couldn't start the game: ${s.message}`});
