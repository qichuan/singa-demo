var lh="170";var Kp=0,Hu=1,Zp=2;var of=1,hh=2,ei=3,kn=0,Nt=1,Jt=2,Ei=0,Rs=1,Xo=2,zu=3,Vu=4,Jp=5,$i=100,jp=101,Qp=102,em=103,tm=104,nm=200,im=201,sm=202,rm=203,Wc=204,Xc=205,om=206,am=207,cm=208,lm=209,hm=210,um=211,dm=212,fm=213,pm=214,qc=0,Yc=1,$c=2,Ls=3,Kc=4,Zc=5,Jc=6,jc=7,af=0,mm=1,gm=2,Ti=0,ym=1,xm=2,_m=3,uh=4,vm=5,Mm=6,bm=7,Gu="attached",wm="detached",cf=300,Ds=301,Us=302,Qc=303,el=304,wa=306,ln=1e3,ni=1001,Ur=1002,Wt=1003,dh=1004;var ws=1005;var en=1006,Ar=1007;var Bn=1008;var ri=1009,lf=1010,hf=1011,Nr=1012,fh=1013,Ji=1014,In=1015,$r=1016,ph=1017,mh=1018,Ns=1020,uf=35902,df=1021,ff=1022,mn=1023,pf=1024,mf=1025,Cs=1026,Os=1027,gh=1028,yh=1029,gf=1030,xh=1031;var _h=1033,Ho=33776,zo=33777,Vo=33778,Go=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,cl=37808,ll=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,yl=37817,xl=37818,_l=37819,vl=37820,Ml=37821,Wo=36492,bl=36494,wl=36495,yf=36283,Sl=36284,El=36285,Tl=36286,vh=2200,Mh=2201,Sm=2202,Fs=2300,Bs=2301,lc=2302,Ss=2400,Es=2401,qo=2402,bh=2500,Em=2501,xf=0,Sa=1,Kr=2,Tm=3200,Am=3201;var _f=0,Rm=1,wi="",et="srgb",qt="srgb-linear",Ea="linear",ut="srgb";var cs=7680;var Wu=519,Cm=512,Im=513,Pm=514,vf=515,Lm=516,Dm=517,Um=518,Nm=519,Al=35044;var Xu="300 es",ii=2e3,Yo=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,Rr=Math.PI/180,ks=180/Math.PI;function gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function wh(s,e){return(s%e+e)%e}function Om(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fm(s,e,t){return s!==e?(t-s)/(e-s):0}function Cr(s,e,t){return(1-t)*s+t*e}function Bm(s,e,t,n){return Cr(s,e,1-Math.exp(-t*n))}function km(s,e=1){return e-Math.abs(wh(s,e*2)-e)}function Hm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gm(s,e){return s+Math.random()*(e-s)}function Wm(s){return s*(.5-Math.random())}function Xm(s){s!==void 0&&(qu=s);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qm(s){return s*Rr}function Ym(s){return s*ks}function $m(s){return(s&s-1)===0&&s!==0}function Km(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Zm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var _t={DEG2RAD:Rr,RAD2DEG:ks,generateUUID:gn,clamp:It,euclideanModulo:wh,mapLinear:Om,inverseLerp:Fm,lerp:Cr,damp:Bm,pingpong:km,smoothstep:Hm,smootherstep:zm,randInt:Vm,randFloat:Gm,randFloatSpread:Wm,seededRandom:Xm,degToRad:qm,radToDeg:Ym,isPowerOfTwo:$m,ceilPowerOfTwo:Km,floorPowerOfTwo:Zm,setQuaternionFromProperEuler:Jm,normalize:ht,denormalize:Cn},ie=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],v=i[1],x=i[4],_=i[7],I=i[2],A=i[5],C=i[8];return r[0]=o*y+a*v+c*I,r[3]=o*m+a*x+c*A,r[6]=o*p+a*_+c*C,r[1]=l*y+h*v+u*I,r[4]=l*m+h*x+u*A,r[7]=l*p+h*_+u*C,r[2]=d*y+f*v+g*I,r[5]=d*m+f*x+g*A,r[8]=d*p+f*_+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=d*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hc.makeScale(e,t)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hc=new We;function Mf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jm(){let s=Or("canvas");return s.style.display="block",s}var Yu={};function Er(s){s in Yu||(Yu[s]=!0,console.warn(s))}function Qm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function e0(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function t0(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ut&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ut&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Ea:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $u=[.64,.33,.3,.6,.15,.06],Ku=[.2126,.7152,.0722],Zu=[.3127,.329],Ju=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[qt]:{primaries:$u,whitePoint:Zu,transfer:Ea,toXYZ:Ju,fromXYZ:ju,luminanceCoefficients:Ku,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:$u,whitePoint:Zu,transfer:ut,toXYZ:Ju,fromXYZ:ju,luminanceCoefficients:Ku,outputColorSpaceConfig:{drawingBufferColorSpace:et}}});var ls,Rl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Or("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,$o=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(uc(i[o].image)):r.push(uc(i[o]))}else r=uc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i0=0,Ot=class s extends oi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ni,i=ni,r=en,o=Bn,a=mn,c=ri,l=s.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=gn(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=cf;Ot.DEFAULT_ANISOTROPY=1;var rt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,_=(f+1)/2,I=(p+1)/2,A=(h+d)/4,C=(u+y)/4,T=(g+m)/4;return x>_&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=C/n):_>I?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=T/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=T/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ko=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*y,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let I=Math.sqrt(x),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let _=a*v;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+y*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new E,Qu=new yt,tn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ho.subVectors(this.max,yr),hs.subVectors(e.a,yr),us.subVectors(e.b,yr),ds.subVectors(e.c,yr),yi.subVectors(us,hs),xi.subVectors(ds,us),zi.subVectors(hs,ds);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-zi.z,zi.y,yi.z,0,-yi.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!fc(t,hs,us,ds,ho)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,hs,us,ds,ho))?!1:(uo.crossVectors(yi,xi),t=[uo.x,uo.y,uo.z],fc(t,hs,us,ds,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new E,new E,new E,new E,new E,new E,new E,new E],Tn=new E,lo=new tn,hs=new E,us=new E,ds=new E,yi=new E,xi=new E,zi=new E,yr=new E,ho=new E,uo=new E,Vi=new E;function fc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vi.fromArray(s,r);let a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var s0=new tn,xr=new E,pc=new E,hn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(pc)),this.expandByPoint(xr.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new E,mc=new E,fo=new E,_i=new E,gc=new E,po=new E,yc=new E,Hs=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=_i.dot(this.direction),c=-_i.dot(fo),l=_i.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mc).addScaledVector(fo,d),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){gc.subVectors(t,e),po.subVectors(n,e),yc.crossVectors(gc,po);let o=this.direction.dot(yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);let c=a*this.direction.dot(po.crossVectors(_i,po));if(c<0)return null;let l=a*this.direction.dot(gc.cross(_i));if(l<0||c+l>o)return null;let h=-a*_i.dot(yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,o0)}lookAt(e,t,n){let i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),vi.crossVectors(n,an),vi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),vi.crossVectors(n,an)),vi.normalize(),mo.crossVectors(an,vi),i[0]=vi.x,i[4]=mo.x,i[8]=an.x,i[1]=vi.y,i[5]=mo.y,i[9]=an.y,i[2]=vi.z,i[6]=mo.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],I=n[15],A=i[0],C=i[4],T=i[8],w=i[12],M=i[1],L=i[5],H=i[9],D=i[13],N=i[2],W=i[6],B=i[10],J=i[14],G=i[3],ae=i[7],ue=i[11],_e=i[15];return r[0]=o*A+a*M+c*N+l*G,r[4]=o*C+a*L+c*W+l*ae,r[8]=o*T+a*H+c*B+l*ue,r[12]=o*w+a*D+c*J+l*_e,r[1]=h*A+u*M+d*N+f*G,r[5]=h*C+u*L+d*W+f*ae,r[9]=h*T+u*H+d*B+f*ue,r[13]=h*w+u*D+d*J+f*_e,r[2]=g*A+y*M+m*N+p*G,r[6]=g*C+y*L+m*W+p*ae,r[10]=g*T+y*H+m*B+p*ue,r[14]=g*w+y*D+m*J+p*_e,r[3]=v*A+x*M+_*N+I*G,r[7]=v*C+x*L+_*W+I*ae,r[11]=v*T+x*H+_*B+I*ue,r[15]=v*w+x*D+_*J+I*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+y*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=u*m*l-y*d*l+y*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*y*l-g*u*l+g*a*f-o*y*f-h*a*p+o*u*p,I=g*u*c-h*y*c-g*a*d+o*y*d+h*a*m-o*u*m,A=t*v+n*x+i*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=v*C,e[1]=(y*d*r-u*m*r-y*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(a*m*r-y*c*r+y*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=x*C,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=_*C,e[9]=(g*u*r-h*y*r-g*n*f+t*y*f+h*n*p-t*u*p)*C,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=I*C,e[13]=(h*y*i-g*u*i+g*n*d-t*y*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*y*i-g*n*c+t*y*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,v=c*l,x=c*h,_=c*u,I=n.x,A=n.y,C=n.z;return i[0]=(1-(y+p))*I,i[1]=(f+_)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(f-_)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+x)*C,i[9]=(m-v)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=fs.set(i[0],i[1],i[2]).length(),o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);let l=1/r,h=1/o,u=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ii){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ii){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h,g,y;if(a===ii)g=(o+r)*u,y=-2*u;else if(a===Yo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new E,An=new oe,r0=new E(0,0,0),o0=new E(1,1,1),vi=new E,mo=new E,an=new E,ed=new oe,td=new yt,nn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,nd=new E,ps=new yt,Zn=new oe,go=new E,_r=new E,c0=new E,l0=new yt,id=new E(1,0,0),sd=new E(0,1,0),rd=new E(0,0,1),od={type:"added"},h0={type:"removed"},ms={type:"childadded",child:null},xc={type:"childremoved",child:null},St=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new nn,n=new yt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new We}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?go.copy(e):go.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(_r,go,this.up):Zn.lookAt(go,_r,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Zn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};St.DEFAULT_UP=new E(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new E,Jn=new E,_c=new E,jn=new E,gs=new E,ys=new E,ad=new E,vc=new E,Mc=new E,bc=new E,wc=new rt,Sc=new rt,Ec=new rt,Ki=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),Jn.subVectors(n,t),_c.subVectors(e,t);let o=Rn.dot(Rn),a=Rn.dot(Jn),c=Rn.dot(_c),l=Jn.dot(Jn),h=Jn.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return wc.setScalar(0),Sc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(wc,r.x),o.addScaledVector(Sc,r.y),o.addScaledVector(Ec,r.z),o}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;gs.subVectors(i,n),ys.subVectors(r,n),vc.subVectors(e,n);let c=gs.dot(vc),l=ys.dot(vc);if(c<=0&&l<=0)return t.copy(n);Mc.subVectors(e,i);let h=gs.dot(Mc),u=ys.dot(Mc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);bc.subVectors(e,r);let f=gs.dot(bc),g=ys.dot(bc);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ys,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ad.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(ad,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(n).addScaledVector(gs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Tc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=wh(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Tc(o,r,e+1/3),this.g=Tc(o,r,e),this.b=Tc(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(It(Gt.r*255,0,255))*65536+Math.round(It(Gt.g*255,0,255))*256+Math.round(It(Gt.b*255,0,255))}getHexString(e=et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),t);let n=Gt.r,i=Gt.g,r=Gt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=et){Qe.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,i=Gt.b;return e!==et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(yo);let n=Cr(Mi.h,yo.h,t),i=Cr(Mi.s,yo.s,t),r=Cr(Mi.l,yo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ae;Ae.NAMES=bf;var u0=0,un=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=gn(),this.name="",this.blending=Rs,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new E,xo=new ie,ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}};var Jo=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var jo=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},d0=0,pn=new oe,Ac=new St,xs=new E,cn=new tn,vr=new tn,Ut=new E,dt=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?jo:Jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(cn.min,vr.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,vr.max),cn.expandByPoint(Ut)):(cn.expandByPoint(vr.min),cn.expandByPoint(vr.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(e,l),Ut.add(xs)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new E,c[T]=new E;let l=new E,h=new E,u=new E,d=new ie,f=new ie,g=new ie,y=new E,m=new E;function p(T,w,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[T].add(y),a[w].add(y),a[M].add(y),c[T].add(m),c[w].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,w=v.length;T<w;++T){let M=v[T],L=M.start,H=M.count;for(let D=L,N=L+H;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new E,_=new E,I=new E,A=new E;function C(T){I.fromBufferAttribute(i,T),A.copy(I);let w=a[T];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),_.crossVectors(A,w);let L=_.dot(c[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,L)}for(let T=0,w=v.length;T<w;++T){let M=v[T],L=M.start,H=M.count;for(let D=L,N=L+H;D<N;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new E,r=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cd=new oe,Gi=new Hs,_o=new hn,ld=new E,vo=new E,Mo=new E,bo=new E,Rc=new E,wo=new E,hd=new E,So=new E,Ue=class extends St{constructor(e=new dt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rc.fromBufferAttribute(u,e),o?wo.addScaledVector(Rc,h):wo.addScaledVector(Rc.sub(t),h))}t.add(wo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(_o.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(_o,ld)===null||Gi.origin.distanceToSquared(ld)>(e.far-e.near)**2))&&(cd.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(cd),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=x;_<I;_+=3){let A=a.getX(_),C=a.getX(_+1),T=a.getX(_+2);i=Eo(this,p,e,n,l,h,u,A,C,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);i=Eo(this,o,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=x;_<I;_+=3){let A=_,C=_+1,T=_+2;i=Eo(this,p,e,n,l,h,u,A,C,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,x=m+1,_=m+2;i=Eo(this,o,e,n,l,h,u,v,x,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function f0(s,e,t,n,i,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===kn,a),c===null)return null;So.copy(a),So.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(So);return l<t.near||l>t.far?null:{distance:l,point:So.clone(),object:s}}function Eo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,vo),s.getVertexPosition(c,Mo),s.getVertexPosition(l,bo);let h=f0(s,e,t,n,vo,Mo,bo,hd);if(h){let u=new E;Ki.getBarycoord(hd,vo,Mo,bo,u),i&&(h.uv=Ki.getInterpolatedAttribute(i,a,c,l,u,new ie)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new E,materialIndex:0};Ki.getNormal(vo,Mo,bo,d.normal),h.face=d,h.barycoord=u}return h}var Rt=class s extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(y,m,p,v,x,_,I,A,C,T,w){let M=_/C,L=I/T,H=_/2,D=I/2,N=A/2,W=C+1,B=T+1,J=0,G=0,ae=new E;for(let ue=0;ue<B;ue++){let _e=ue*L-D;for(let Ne=0;Ne<W;Ne++){let Ke=Ne*M-H;ae[y]=Ke*v,ae[m]=_e*x,ae[p]=N,l.push(ae.x,ae.y,ae.z),ae[y]=0,ae[m]=0,ae[p]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ne/C),u.push(1-ue/T),J+=1}}for(let ue=0;ue<T;ue++)for(let _e=0;_e<C;_e++){let Ne=d+_e+W*ue,Ke=d+_e+W*(ue+1),$=d+(_e+1)+W*(ue+1),se=d+(_e+1)+W*ue;c.push(Ne,Ke,se),c.push(Ke,$,se),G+=6}a.addGroup(f,G,w),f+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){let e={};for(let t=0;t<s.length;t++){let n=zs(s[t]);for(let i in n)e[i]=n[i]}return e}function p0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var m0={clone:zs,merge:Zt},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qo=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new E,ud=new ie,dd=new ie,Tt=class extends Qo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,dd),t.subVectors(dd,ud)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,vs=1,Pl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Tt(_s,vs,e,t);i.layers=this.layers,this.add(i);let r=new Tt(_s,vs,e,t);r.layers=this.layers,this.add(r);let o=new Tt(_s,vs,e,t);o.layers=this.layers,this.add(o);let a=new Tt(_s,vs,e,t);a.layers=this.layers,this.add(a);let c=new Tt(_s,vs,e,t);c.layers=this.layers,this.add(c);let l=new Tt(_s,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ea=class extends Ot{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ll=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ea(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Ei});r.uniforms.tEquirect.value=t;let o=new Ue(i,r),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=en),new Pl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Cc=new E,x0=new E,_0=new We,ti=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Cc.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_0.getNormalMatrix(e),i=this.coplanarPoint(Cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new hn,To=new E,Fr=class{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],y=i[10],m=i[11],p=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+v).normalize(),n[3].setComponents(c-o,d-h,m-g,_-v).normalize(),n[4].setComponents(c-a,d-u,m-y,_-x).normalize(),t===ii)n[5].setComponents(c+a,d+u,m+y,_+x).normalize();else if(t===Yo)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(To.x=i.normal.x>0?e.max.x:e.min.x,To.y=i.normal.y>0?e.max.y:e.min.y,To.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function v0(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var sn=class s extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let x=0;x<l;x++){let _=x*u-r;g.push(_,-v,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let x=v+l*p,_=v+l*(p+1),I=v+1+l*(p+1),A=v+1+l*p;f.push(x,_,A),f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,W0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,_g=`struct PhysicalMaterial {
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
}`,vg=`
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`#include <common>
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
}`,Ay=`#if DEPTH_PACKING == 3200
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,By=`#define MATCAP
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
}`,ky=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define PHONG
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define STANDARD
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
}`,qy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,jy=`uniform float rotation;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:M0,alphahash_pars_fragment:b0,alphamap_fragment:w0,alphamap_pars_fragment:S0,alphatest_fragment:E0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:I0,begin_vertex:P0,beginnormal_vertex:L0,bsdfs:D0,iridescence_fragment:U0,bumpmap_pars_fragment:N0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:k0,color_fragment:H0,color_pars_fragment:z0,color_pars_vertex:V0,color_vertex:G0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:j0,envmap_fragment:Q0,envmap_common_pars_fragment:eg,envmap_pars_fragment:tg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:fg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:cg,lightmap_pars_fragment:lg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:ug,lights_pars_begin:dg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:gg,lights_phong_pars_fragment:yg,lights_physical_fragment:xg,lights_physical_pars_fragment:_g,lights_fragment_begin:vg,lights_fragment_maps:Mg,lights_fragment_end:bg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Eg,logdepthbuf_vertex:Tg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Dg,morphcolor_vertex:Ug,morphnormal_vertex:Ng,morphtarget_pars_vertex:Og,morphtarget_vertex:Fg,normal_fragment_begin:Bg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:zg,normal_vertex:Vg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Yg,opaque_fragment:$g,packing:Kg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:jg,dithering_pars_fragment:Qg,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:sy,shadowmask_pars_fragment:ry,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:cy,skinnormal_vertex:ly,specularmap_fragment:hy,specularmap_pars_fragment:uy,tonemapping_fragment:dy,tonemapping_pars_fragment:fy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:yy,uv_vertex:xy,worldpos_vertex:_y,background_vert:vy,background_frag:My,backgroundCube_vert:by,backgroundCube_frag:wy,cube_vert:Sy,cube_frag:Ey,depth_vert:Ty,depth_frag:Ay,distanceRGBA_vert:Ry,distanceRGBA_frag:Cy,equirect_vert:Iy,equirect_frag:Py,linedashed_vert:Ly,linedashed_frag:Dy,meshbasic_vert:Uy,meshbasic_frag:Ny,meshlambert_vert:Oy,meshlambert_frag:Fy,meshmatcap_vert:By,meshmatcap_frag:ky,meshnormal_vert:Hy,meshnormal_frag:zy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:$y,points_frag:Ky,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:jy,sprite_frag:Qy},de={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fn={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Fn.physical={uniforms:Zt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Ao={r:0,b:0,g:0},Xi=new nn,ex=new oe;function tx(s,e,t,n,i,r,o){let a=new Ae(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function y(v){let x=!1,_=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===wa)?(h===void 0&&(h=new Ue(new Rt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:zs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xi.copy(x.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(Xi)),h.material.toneMapped=Qe.getTransfer(_.colorSpace)!==ut,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ue(new sn(2,2),new yn({name:"BackgroundMaterial",uniforms:zs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(_.colorSpace)!==ut,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Ao,wf(s)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m}}function nx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,L,H,D,N){let W=!1,B=u(D,H,L);r!==B&&(r=B,l(r.object)),W=f(M,D,H,N),W&&g(M,D,H,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(M,L,H,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,H){let D=H.wireframe===!0,N=n[M.id];N===void 0&&(N={},n[M.id]=N);let W=N[L.id];W===void 0&&(W={},N[L.id]=W);let B=W[D];return B===void 0&&(B=d(c()),W[D]=B),B}function d(M){let L=[],H=[],D=[];for(let N=0;N<t;N++)L[N]=0,H[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,H,D){let N=r.attributes,W=L.attributes,B=0,J=H.getAttributes();for(let G in J)if(J[G].location>=0){let ue=N[G],_e=W[G];if(_e===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(M,L,H,D){let N={},W=L.attributes,B=0,J=H.getAttributes();for(let G in J)if(J[G].location>=0){let ue=W[G];ue===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));let _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),N[G]=_e,B++}r.attributes=N,r.attributesNum=B,r.index=D}function y(){let M=r.newAttributes;for(let L=0,H=M.length;L<H;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let H=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;H[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),N[M]!==L&&(s.vertexAttribDivisor(M,L),N[M]=L)}function v(){let M=r.newAttributes,L=r.enabledAttributes;for(let H=0,D=L.length;H<D;H++)L[H]!==M[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function x(M,L,H,D,N,W,B){B===!0?s.vertexAttribIPointer(M,L,H,N,W):s.vertexAttribPointer(M,L,H,D,N,W)}function _(M,L,H,D){y();let N=D.attributes,W=H.getAttributes(),B=L.defaultAttributeValues;for(let J in W){let G=W[J];if(G.location>=0){let ae=N[J];if(ae===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let ue=ae.normalized,_e=ae.itemSize,Ne=e.get(ae);if(Ne===void 0)continue;let Ke=Ne.buffer,$=Ne.type,se=Ne.bytesPerElement,we=$===s.INT||$===s.UNSIGNED_INT||ae.gpuType===fh;if(ae.isInterleavedBufferAttribute){let le=ae.data,De=le.stride,X=ae.offset;if(le.isInstancedInterleavedBuffer){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,le.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ne=0;ne<G.locationSize;ne++)x(G.location+ne,_e/G.locationSize,$,ue,De*se,(X+_e/G.locationSize*ne)*se,we)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ae.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let le=0;le<G.locationSize;le++)x(G.location+le,_e/G.locationSize,$,ue,_e*se,_e/G.locationSize*le*se,we)}}else if(B!==void 0){let ue=B[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(G.location,ue);break;case 3:s.vertexAttrib3fv(G.location,ue);break;case 4:s.vertexAttrib4fv(G.location,ue);break;default:s.vertexAttrib1fv(G.location,ue)}}}}v()}function I(){T();for(let M in n){let L=n[M];for(let H in L){let D=L[H];for(let N in D)h(D[N].object),delete D[N];delete L[H]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let H in L){let D=L[H];for(let N in D)h(D[N].object),delete D[N];delete L[H]}delete n[M.id]}function C(M){for(let L in n){let H=n[L];if(H[M.id]===void 0)continue;let D=H[M.id];for(let N in D)h(D[N].object),delete D[N];delete H[M.id]}}function T(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function ix(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let T=C===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ri&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!T)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function rx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ti,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,x=v*4,_=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let I=0;I!==x;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==y;++x,_+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ox(s){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=Ds:a===el&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qc||a===el)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ll(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Vs=class extends Qo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ts=4,fd=[.125,.215,.35,.446,.526,.582],Zi=20,Ic=new Vs,pd=new Ae,Pc=null,Lc=0,Dc=0,Uc=!1,Yi=(1+Math.sqrt(5))/2,Ms=1/Yi,md=[new E(-Yi,Ms,0),new E(Yi,Ms,0),new E(-Ms,0,Yi),new E(Ms,0,Yi),new E(0,Yi,-Ms),new E(0,Yi,Ms),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Lc,Dc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:$r,format:mn,colorSpace:qt,depthBuffer:!1},i=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(r)),this._blurMaterial=cx(r,e,t)}return i}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,n,i){let a=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pd),h.toneMapping=Ti,h.autoClear=!1;let f=new Ft({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Ue(new Rt,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(pd),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Ro(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ds||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ro(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=md[(i-r-1)%md.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ue(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let p=[],v=0;for(let C=0;C<Zi;++C){let T=C/y,w=Math.exp(-T*T/2);p.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let _=this._sizeLods[i],I=3*_*(i>x-Ts?i-x+Ts:0),A=4*(this._cubeSize-_);Ro(t,I,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Ic)}};function ax(s){let e=[],t=[],n=[],i=s,r=s-Ts+1+fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ts?c=fd[o-s+Ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,T=A>2?0:-1,w=[C,T,0,C+2/3,T,0,C+2/3,T+1,0,C,T,0,C+2/3,T+1,0,C,T+1,0];v.set(w,y*g*A),x.set(d,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let I=new dt;I.setAttribute("position",new ct(v,y)),I.setAttribute("uv",new ct(x,m)),I.setAttribute("faceIndex",new ct(_,p)),e.push(I),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(s,e,t){let n=new Pn(s,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cx(s,e,t){let n=new Float32Array(Zi),i=new E(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yd(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function xd(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function lx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Qc||c===el,h=c===Ds||c===Us;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Gs(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Gs(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ux(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let x=0,_=v.length;x<_;x+=3){let I=v[x+0],A=v[x+1],C=v[x+2];d.push(I,A,A,C,C,I)}}else if(g!==void 0){let v=g.array;y=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){let I=x+0,A=x+1,C=x+2;d.push(I,A,A,C,C,I)}}else return;let m=new(Mf(d)?jo:Jo)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function dx(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*y[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function px(s,e,t){let n=new WeakMap,i=new rt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let _=a.attributes.position.count*x,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*I*4*u),C=new Ko(A,_,I,u);C.type=In,C.needsUpdate=!0;let T=x*4;for(let M=0;M<u;M++){let L=m[M],H=p[M],D=v[M],N=_*I*4*M;for(let W=0;W<L.count;W++){let B=W*T;f===!0&&(i.fromBufferAttribute(L,W),A[N+B+0]=i.x,A[N+B+1]=i.y,A[N+B+2]=i.z,A[N+B+3]=0),g===!0&&(i.fromBufferAttribute(H,W),A[N+B+4]=i.x,A[N+B+5]=i.y,A[N+B+6]=i.z,A[N+B+7]=0),y===!0&&(i.fromBufferAttribute(D,W),A[N+B+8]=i.x,A[N+B+9]=i.y,A[N+B+10]=i.z,A[N+B+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ie(_,I)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ta=class extends Ot{constructor(e,t,n,i,r,o,a,c,l,h=Cs){if(h!==Cs&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=Ji),n===void 0&&h===Os&&(n=Ns),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ef=new Ot,_d=new ta(1,1),Tf=new Ko,Af=new Il,Rf=new ea,vd=[],Md=[],bd=new Float32Array(16),wd=new Float32Array(9),Sd=new Float32Array(4);function Js(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=vd[i];if(r===void 0&&(r=new Float32Array(i),vd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ta(s,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function vx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Sd.set(n),s.uniformMatrix2fv(this.addr,!1,Sd),Lt(t,n)}}function Mx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;wd.set(n),s.uniformMatrix3fv(this.addr,!1,wd),Lt(t,n)}}function bx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;bd.set(n),s.uniformMatrix4fv(this.addr,!1,bd),Lt(t,n)}}function wx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function Ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function Tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function Ax(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function Cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function Px(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=vf,r=_d):r=Ef,t.setTexture2D(e||r,i)}function Lx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Af,i)}function Dx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rf,i)}function Ux(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tf,i)}function Nx(s){switch(s){case 5126:return gx;case 35664:return yx;case 35665:return xx;case 35666:return _x;case 35674:return vx;case 35675:return Mx;case 35676:return bx;case 5124:case 35670:return wx;case 35667:case 35671:return Sx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Ox(s,e){s.uniform1fv(this.addr,e)}function Fx(s,e){let t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function Bx(s,e){let t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function kx(s,e){let t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function Hx(s,e){let t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zx(s,e){let t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Vx(s,e){let t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gx(s,e){s.uniform1iv(this.addr,e)}function Wx(s,e){s.uniform2iv(this.addr,e)}function Xx(s,e){s.uniform3iv(this.addr,e)}function qx(s,e){s.uniform4iv(this.addr,e)}function Yx(s,e){s.uniform1uiv(this.addr,e)}function $x(s,e){s.uniform2uiv(this.addr,e)}function Kx(s,e){s.uniform3uiv(this.addr,e)}function Zx(s,e){s.uniform4uiv(this.addr,e)}function Jx(s,e,t){let n=this.cache,i=e.length,r=Ta(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ef,r[o])}function jx(s,e,t){let n=this.cache,i=e.length,r=Ta(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Af,r[o])}function Qx(s,e,t){let n=this.cache,i=e.length,r=Ta(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rf,r[o])}function e_(s,e,t){let n=this.cache,i=e.length,r=Ta(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function t_(s){switch(s){case 5126:return Ox;case 35664:return Fx;case 35665:return Bx;case 35666:return kx;case 35674:return Hx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return $x;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return e_}}var Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Ed(s,e){s.seq.push(e),s.map[e.id]=e}function n_(s,e,t){let n=s.name,i=n.length;for(Nc.lastIndex=0;;){let r=Nc.exec(n),o=Nc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ed(t,l===void 0?new Dl(a,s,e):new Ul(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Nl(a),Ed(t,u)),t=u}}}var Ps=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);n_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Td(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var i_=37297,s_=0;function r_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ad=new We;function o_(s){Qe._getMatrix(Ad,Qe.workingColorSpace,s);let e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Ea:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+r_(s.getShaderSource(e),o)}else return i}function a_(s,e){let t=o_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c_(s,e){let t;switch(e){case ym:t="Linear";break;case xm:t="Reinhard";break;case _m:t="Cineon";break;case uh:t="ACESFilmic";break;case Mm:t="AgX";break;case bm:t="Neutral";break;case vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Co=new E;function l_(){Qe.getLuminanceCoefficients(Co);let s=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function u_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Tr(s){return s!==""}function Cd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(f_,m_)}var p_=new Map;function m_(s,e){let t=Ye[e];if(t===void 0){let n=p_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(s){return s.replace(g_,y_)}function y_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ld(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===of?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function __(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function M_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case mm:e="ENVMAP_BLENDING_MIX";break;case gm:e="ENVMAP_BLENDING_ADD";break}return e}function b_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function w_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=x_(t),l=__(t),h=v_(t),u=M_(t),d=b_(t),f=h_(t),g=u_(r),y=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,a_("linearToOutputTexel",t.outputColorSpace),l_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Ol(o),o=Cd(o,t),o=Id(o,t),a=Ol(a),a=Cd(a,t),a=Id(a,t),o=Pd(o),a=Pd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=v+m+o,_=v+p+a,I=Td(i,i.VERTEX_SHADER,x),A=Td(i,i.FRAGMENT_SHADER,_);i.attachShader(y,I),i.attachShader(y,A),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(L){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(y).trim(),D=i.getShaderInfoLog(I).trim(),N=i.getShaderInfoLog(A).trim(),W=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,I,A);else{let J=Rd(i,I,"vertex"),G=Rd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+J+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||N==="")&&(B=!1);B&&(L.diagnostics={runnable:W,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(I),i.deleteShader(A),T=new Ps(i,y),w=d_(i,y)}let T;this.getUniforms=function(){return T===void 0&&C(this),T};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(y,i_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=A,this}var S_=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=S_++,this.code=e,this.usedTimes=0}};function E_(s,e,t,n,i,r,o){let a=new Zo,c=new Fl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,H,D){let N=H.fog,W=D.geometry,B=w.isMeshStandardMaterial?H.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),G=J&&J.mapping===wa?J.image.height:null,ae=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ue!==void 0?ue.length:0,Ne=0;W.morphAttributes.position!==void 0&&(Ne=1),W.morphAttributes.normal!==void 0&&(Ne=2),W.morphAttributes.color!==void 0&&(Ne=3);let Ke,$,se,we;if(ae){let lt=Fn[ae];Ke=lt.vertexShader,$=lt.fragmentShader}else Ke=w.vertexShader,$=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),we=c.getFragmentShaderID(w);let le=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),X=D.isInstancedMesh===!0,ne=D.isBatchedMesh===!0,Te=!!w.map,Y=!!w.matcap,Q=!!J,P=!!w.aoMap,ve=!!w.lightMap,te=!!w.bumpMap,ye=!!w.normalMap,he=!!w.displacementMap,Fe=!!w.emissiveMap,Me=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,ee=w.iridescence>0,Z=w.sheen>0,Re=w.transmission>0,fe=b&&!!w.anisotropyMap,be=k&&!!w.clearcoatMap,je=k&&!!w.clearcoatNormalMap,re=k&&!!w.clearcoatRoughnessMap,Se=ee&&!!w.iridescenceMap,Be=ee&&!!w.iridescenceThicknessMap,ke=Z&&!!w.sheenColorMap,Ee=Z&&!!w.sheenRoughnessMap,nt=!!w.specularMap,qe=!!w.specularColorMap,mt=!!w.specularIntensityMap,U=Re&&!!w.transmissionMap,pe=Re&&!!w.thicknessMap,q=!!w.gradientMap,j=!!w.alphaMap,xe=w.alphaTest>0,me=!!w.alphaHash,Ve=!!w.extensions,Et=Ti;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Et=s.toneMapping);let zt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:Ke,fragmentShader:$,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ne,batchingColor:ne&&D._colorsTexture!==null,instancing:X,instancingColor:X&&D.instanceColor!==null,instancingMorph:X&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:qt,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:Y,envMap:Q,envMapMode:Q&&J.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:ve,bumpMap:te,normalMap:ye,displacementMap:d&&he,emissiveMap:Fe,normalMapObjectSpace:ye&&w.normalMapType===Rm,normalMapTangentSpace:ye&&w.normalMapType===_f,metalnessMap:Me,roughnessMap:R,anisotropy:b,anisotropyMap:fe,clearcoat:k,clearcoatMap:be,clearcoatNormalMap:je,clearcoatRoughnessMap:re,dispersion:K,iridescence:ee,iridescenceMap:Se,iridescenceThicknessMap:Be,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:nt,specularColorMap:qe,specularIntensityMap:mt,transmission:Re,transmissionMap:U,thicknessMap:pe,gradientMap:q,opaque:w.transparent===!1&&w.blending===Rs&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:me,combine:w.combine,mapUv:Te&&y(w.map.channel),aoMapUv:P&&y(w.aoMap.channel),lightMapUv:ve&&y(w.lightMap.channel),bumpMapUv:te&&y(w.bumpMap.channel),normalMapUv:ye&&y(w.normalMap.channel),displacementMapUv:he&&y(w.displacementMap.channel),emissiveMapUv:Fe&&y(w.emissiveMap.channel),metalnessMapUv:Me&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:fe&&y(w.anisotropyMap.channel),clearcoatMapUv:be&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(w.sheenRoughnessMap.channel),specularMapUv:nt&&y(w.specularMap.channel),specularColorMapUv:qe&&y(w.specularColorMap.channel),specularIntensityMapUv:mt&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:pe&&y(w.thicknessMap.channel),alphaMapUv:j&&y(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ye||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Te||j),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Et,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jt,flipSided:w.side===Nt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(M,w),x(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let M=g[w.type],L;if(M){let H=Fn[M];L=m0.clone(H.uniforms)}else L=w.uniforms;return L}function I(w,M){let L;for(let H=0,D=h.length;H<D;H++){let N=h[H];if(N.cacheKey===M){L=N,++L.usedTimes;break}}return L===void 0&&(L=new w_(s,M,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:T}}function T_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function A_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ud(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,y,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||A_),n.length>1&&n.sort(d||Dd),i.length>1&&i.sort(d||Dd)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function R_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Ud,s.set(n,[o])):i>=r.length?(o=new Ud,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function C_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ae};break;case"SpotLight":t={position:new E,direction:new E,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function I_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var P_=0;function L_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function D_(s){let e=new C_,t=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);let i=new E,r=new oe,o=new oe;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,x=0,_=0,I=0,A=0,C=0;l.sort(L_);for(let w=0,M=l.length;w<M;w++){let L=l[w],H=L.color,D=L.intensity,N=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*D,u+=H.g*D,d+=H.b*D;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],D);C++}else if(L.isDirectionalLight){let B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=B,f++}else if(L.isSpotLight){let B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(H).multiplyScalar(D),B.distance=N,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[y]=B;let J=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,J.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[y]=J.matrix,L.castShadow){let G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=W,_++}y++}else if(L.isRectAreaLight){let B=e.get(L);B.color.copy(H).multiplyScalar(D),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){let B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=B,g++}else if(L.isHemisphereLight){let B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(D),B.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==v||T.numPointShadows!==x||T.numSpotShadows!==_||T.numSpotMaps!==I||T.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,T.directionalLength=f,T.pointLength=g,T.spotLength=y,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=v,T.numPointShadows=x,T.numSpotShadows=_,T.numSpotMaps=I,T.numLightProbes=C,n.version=P_++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let x=l[p];if(x.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Nd(s){let e=new D_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function U_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Nd(s),e.set(i,[a])):r>=o.length?(a=new Nd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var kl=class extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`;function F_(s,e,t){let n=new Fr,i=new ie,r=new ie,o=new rt,a=new kl({depthPacking:Am}),c=new Hl,l={},h=t.maxTextureSize,u={[kn]:Nt,[Nt]:kn,[Jt]:Jt},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:N_,fragmentShader:O_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let p=this.type;this.render=function(A,C,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=p!==ei&&this.type===ei,N=p===ei&&this.type!==ei;for(let W=0,B=A.length;W<B;W++){let J=A[W],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ae=G.getFrameExtents();if(i.multiply(ae),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||D===!0||N===!0){let _e=this.type!==ei?{minFilter:Wt,magFilter:Wt}:{};G.map!==null&&G.map.dispose(),G.map=new Pn(i.x,i.y,_e),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let ue=G.getViewportCount();for(let _e=0;_e<ue;_e++){let Ne=G.getViewport(_e);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),H.viewport(o),G.updateMatrices(J,_e),n=G.getFrustum(),_(C,T,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&v(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,L)};function v(A,C){let T=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,T,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,T,f,y,null)}function x(A,C,T,w){let M=null,L=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=T.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=M.uuid,D=C.uuid,N=l[H];N===void 0&&(N={},l[H]=N);let W=N[D];W===void 0&&(W=M.clone(),N[D]=W,C.addEventListener("dispose",I)),M=W}if(M.visible=C.visible,M.wireframe=C.wireframe,w===ei?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let H=s.properties.get(M);H.light=T}return M}function _(A,C,T,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let D=e.update(A),N=A.material;if(Array.isArray(N)){let W=D.groups;for(let B=0,J=W.length;B<J;B++){let G=W[B],ae=N[G.materialIndex];if(ae&&ae.visible){let ue=x(A,ae,w,M);A.onBeforeShadow(s,A,C,T,D,ue,G),s.renderBufferDirect(T,null,D,ue,A,G),A.onAfterShadow(s,A,C,T,D,ue,G)}}}else if(N.visible){let W=x(A,N,w,M);A.onBeforeShadow(s,A,C,T,D,W,null),s.renderBufferDirect(T,null,D,W,A,null),A.onAfterShadow(s,A,C,T,D,W,null)}}let H=A.children;for(let D=0,N=H.length;D<N;D++)_(H[D],C,T,w,M)}function I(A){A.target.removeEventListener("dispose",I);for(let T in l){let w=l[T],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var B_={[qc]:Yc,[$c]:Jc,[Kc]:jc,[Ls]:Zc,[Yc]:qc,[Jc]:$c,[jc]:Kc,[Zc]:Ls};function k_(s,e){function t(){let U=!1,pe=new rt,q=null,j=new rt(0,0,0,0);return{setMask:function(xe){q!==xe&&!U&&(s.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,me,Ve,Et,zt){zt===!0&&(xe*=Et,me*=Et,Ve*=Et),pe.set(xe,me,Ve,Et),j.equals(pe)===!1&&(s.clearColor(xe,me,Ve,Et),j.copy(pe))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,q=null,j=null,xe=null;return{setReversed:function(me){if(pe!==me){let Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let Et=xe;xe=null,this.setClear(Et)}pe=me},getReversed:function(){return pe},setTest:function(me){me?le(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(me){q!==me&&!U&&(s.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=B_[me]),j!==me){switch(me){case qc:s.depthFunc(s.NEVER);break;case Yc:s.depthFunc(s.ALWAYS);break;case $c:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case Kc:s.depthFunc(s.EQUAL);break;case Zc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=me}},setLocked:function(me){U=me},setClear:function(me){xe!==me&&(pe&&(me=1-me),s.clearDepth(me),xe=me)},reset:function(){U=!1,q=null,j=null,xe=null,pe=!1}}}function i(){let U=!1,pe=null,q=null,j=null,xe=null,me=null,Ve=null,Et=null,zt=null;return{setTest:function(lt){U||(lt?le(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!U&&(s.stencilMask(lt),pe=lt)},setFunc:function(lt,Sn,qn){(q!==lt||j!==Sn||xe!==qn)&&(s.stencilFunc(lt,Sn,qn),q=lt,j=Sn,xe=qn)},setOp:function(lt,Sn,qn){(me!==lt||Ve!==Sn||Et!==qn)&&(s.stencilOp(lt,Sn,qn),me=lt,Ve=Sn,Et=qn)},setLocked:function(lt){U=lt},setClear:function(lt){zt!==lt&&(s.clearStencil(lt),zt=lt)},reset:function(){U=!1,pe=null,q=null,j=null,xe=null,me=null,Ve=null,Et=null,zt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,I=null,A=null,C=new Ae(0,0,0),T=0,w=!1,M=null,L=null,H=null,D=null,N=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=J>=2);let ae=null,ue={},_e=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Ke=new rt().fromArray(_e),$=new rt().fromArray(Ne);function se(U,pe,q,j){let xe=new Uint8Array(4),me=s.createTexture();s.bindTexture(U,me),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<q;Ve++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return me}let we={};we[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(Ls),te(!1),ye(Hu),le(s.CULL_FACE),P(Ei);function le(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function X(U,pe){return u[U]!==pe?(s.bindFramebuffer(U,pe),u[U]=pe,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ne(U,pe){let q=f,j=!1;if(U){q=d.get(pe),q===void 0&&(q=[],d.set(pe,q));let xe=U.textures;if(q.length!==xe.length||q[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Ve=xe.length;me<Ve;me++)q[me]=s.COLOR_ATTACHMENT0+me;q.length=xe.length,j=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,j=!0);j&&s.drawBuffers(q)}function Te(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let Y={[$i]:s.FUNC_ADD,[jp]:s.FUNC_SUBTRACT,[Qp]:s.FUNC_REVERSE_SUBTRACT};Y[em]=s.MIN,Y[tm]=s.MAX;let Q={[nm]:s.ZERO,[im]:s.ONE,[sm]:s.SRC_COLOR,[Wc]:s.SRC_ALPHA,[hm]:s.SRC_ALPHA_SATURATE,[cm]:s.DST_COLOR,[om]:s.DST_ALPHA,[rm]:s.ONE_MINUS_SRC_COLOR,[Xc]:s.ONE_MINUS_SRC_ALPHA,[lm]:s.ONE_MINUS_DST_COLOR,[am]:s.ONE_MINUS_DST_ALPHA,[um]:s.CONSTANT_COLOR,[dm]:s.ONE_MINUS_CONSTANT_COLOR,[fm]:s.CONSTANT_ALPHA,[pm]:s.ONE_MINUS_CONSTANT_ALPHA};function P(U,pe,q,j,xe,me,Ve,Et,zt,lt){if(U===Ei){y===!0&&(De(s.BLEND),y=!1);return}if(y===!1&&(le(s.BLEND),y=!0),U!==Jp){if(U!==m||lt!==w){if((p!==$i||_!==$i)&&(s.blendEquation(s.FUNC_ADD),p=$i,_=$i),lt)switch(U){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFunc(s.ONE,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,I=null,A=null,C.set(0,0,0),T=0,m=U,w=lt}return}xe=xe||pe,me=me||q,Ve=Ve||j,(pe!==p||xe!==_)&&(s.blendEquationSeparate(Y[pe],Y[xe]),p=pe,_=xe),(q!==v||j!==x||me!==I||Ve!==A)&&(s.blendFuncSeparate(Q[q],Q[j],Q[me],Q[Ve]),v=q,x=j,I=me,A=Ve),(Et.equals(C)===!1||zt!==T)&&(s.blendColor(Et.r,Et.g,Et.b,zt),C.copy(Et),T=zt),m=U,w=!1}function ve(U,pe){U.side===Jt?De(s.CULL_FACE):le(s.CULL_FACE);let q=U.side===Nt;pe&&(q=!q),te(q),U.blending===Rs&&U.transparent===!1?P(Ei):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function ye(U){U!==Kp?(le(s.CULL_FACE),U!==L&&(U===Hu?s.cullFace(s.BACK):U===Zp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),L=U}function he(U){U!==H&&(B&&s.lineWidth(U),H=U)}function Fe(U,pe,q){U?(le(s.POLYGON_OFFSET_FILL),(D!==pe||N!==q)&&(s.polygonOffset(pe,q),D=pe,N=q)):De(s.POLYGON_OFFSET_FILL)}function Me(U){U?le(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function R(U){U===void 0&&(U=s.TEXTURE0+W-1),ae!==U&&(s.activeTexture(U),ae=U)}function b(U,pe,q){q===void 0&&(ae===null?q=s.TEXTURE0+W-1:q=ae);let j=ue[q];j===void 0&&(j={type:void 0,texture:void 0},ue[q]=j),(j.type!==U||j.texture!==pe)&&(ae!==q&&(s.activeTexture(q),ae=q),s.bindTexture(U,pe||we[U]),j.type=U,j.texture=pe)}function k(){let U=ue[ae];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){Ke.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function Ee(U){$.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function nt(U,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let j=q.get(U);j===void 0&&(j=s.getUniformBlockIndex(pe,U.name),q.set(U,j))}function qe(U,pe){let j=l.get(pe).get(U);c.get(pe)!==j&&(s.uniformBlockBinding(pe,j,U.__bindingPointIndex),c.set(pe,j))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,ue={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,I=null,A=null,C=new Ae(0,0,0),T=0,w=!1,M=null,L=null,H=null,D=null,N=null,Ke.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:De,bindFramebuffer:X,drawBuffers:ne,useProgram:Te,setBlending:P,setMaterial:ve,setFlipSided:te,setCullFace:ye,setLineWidth:he,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:Se,texImage3D:Be,updateUBOMapping:nt,uniformBlockBinding:qe,texStorage2D:je,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:ke,viewport:Ee,reset:mt}}function Od(s,e,t,n){let i=H_(n);switch(t){case df:return s*e;case pf:return s*e;case mf:return s*e*2;case gh:return s*e/i.components*i.byteLength;case yh:return s*e/i.components*i.byteLength;case gf:return s*e*2/i.components*i.byteLength;case xh:return s*e*2/i.components*i.byteLength;case ff:return s*e*3/i.components*i.byteLength;case mn:return s*e*4/i.components*i.byteLength;case _h:return s*e*4/i.components*i.byteLength;case Ho:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(e,8)/4;case tl:case il:return Math.max(s,8)*Math.max(e,8)/2;case rl:case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wo:case bl:case wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yf:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case El:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H_(s){switch(s){case ri:case lf:return{byteLength:1,components:1};case Nr:case hf:case $r:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case Ji:case fh:case In:return{byteLength:4,components:1};case uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function z_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Or("canvas")}function y(R,b,k){let K=1,ee=Me(R);if((ee.width>k||ee.height>k)&&(K=k/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(K*ee.width),Re=Math.floor(K*ee.height);u===void 0&&(u=g(Z,Re));let fe=b?g(Z,Re):u;return fe.width=Z,fe.height=Re,fe.getContext("2d").drawImage(R,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Re+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,b,k,K,ee=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),b===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),b===s.RGBA){let Re=ee?Ea:Qe.getTransfer(K);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Re===ut?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,b){let k;return R?b===null||b===Ji||b===Ns?k=s.DEPTH24_STENCIL8:b===In?k=s.DEPTH32F_STENCIL8:b===Nr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===Ns?k=s.DEPTH_COMPONENT24:b===In?k=s.DEPTH_COMPONENT32F:b===Nr&&(k=s.DEPTH_COMPONENT16),k}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&h.delete(b)}function C(R){let b=R.target;b.removeEventListener("dispose",C),M(b)}function T(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,K=d.get(k);if(K){let ee=K[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(K).length===0&&d.delete(k)}n.remove(R)}function w(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let k=R.source,K=d.get(k);delete K[b.__cacheKey],o.memory.textures--}function M(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let ee=0;ee<b.__webglFramebuffer[K].length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[K][ee]);else s.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)s.deleteFramebuffer(b.__webglFramebuffer[K]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let K=0,ee=k.length;K<ee;K++){let Z=n.get(k[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(R)}let L=0;function H(){L=0}function D(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function N(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){let k=n.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,R,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function B(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){$(k,R,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function J(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){$(k,R,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function G(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){se(k,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let ae={[ln]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Ur]:s.MIRRORED_REPEAT},ue={[Wt]:s.NEAREST,[dh]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},_e={[Cm]:s.NEVER,[Nm]:s.ALWAYS,[Im]:s.LESS,[vf]:s.LEQUAL,[Pm]:s.EQUAL,[Um]:s.GEQUAL,[Lm]:s.GREATER,[Dm]:s.NOTEQUAL};function Ne(R,b){if(b.type===In&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Ar||b.magFilter===ws||b.magFilter===Bn||b.minFilter===en||b.minFilter===Ar||b.minFilter===ws||b.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ae[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ae[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ae[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ue[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wt||b.minFilter!==ws&&b.minFilter!==Bn||b.type===In&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ke(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));let Z=N(b);if(Z!==R.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Z].usedTimes++;let Re=ee[R.__cacheKey];Re!==void 0&&(ee[R.__cacheKey].usedTimes--,Re.usedTimes===0&&w(b)),R.__cacheKey=Z,R.__webglTexture=ee[Z].texture}return k}function $(R,b,k){let K=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=s.TEXTURE_3D);let ee=Ke(R,b),Z=b.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+k);let Re=n.get(Z);if(Z.version!==Re.__version||ee===!0){t.activeTexture(s.TEXTURE0+k);let fe=Qe.getPrimaries(Qe.workingColorSpace),be=b.colorSpace===wi?null:Qe.getPrimaries(b.colorSpace),je=b.colorSpace===wi||fe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let re=y(b.image,!1,i.maxTextureSize);re=Fe(b,re);let Se=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),ke=x(b.internalFormat,Se,Be,b.colorSpace,b.isVideoTexture);Ne(K,b);let Ee,nt=b.mipmaps,qe=b.isVideoTexture!==!0,mt=Re.__version===void 0||ee===!0,U=Z.dataReady,pe=I(b,re);if(b.isDepthTexture)ke=_(b.format===Os,b.type),mt&&(qe?t.texStorage2D(s.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,Se,Be,null));else if(b.isDataTexture)if(nt.length>0){qe&&mt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,nt[0].width,nt[0].height);for(let q=0,j=nt.length;q<j;q++)Ee=nt[q],qe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Be,Ee.data):t.texImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Se,Be,Ee.data);b.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,re.width,re.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Se,Be,re.data)):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,Se,Be,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ke,nt[0].width,nt[0].height,re.depth);for(let q=0,j=nt.length;q<j;q++)if(Ee=nt[q],b.format!==mn)if(Se!==null)if(qe){if(U)if(b.layerUpdates.size>0){let xe=Od(Ee.width,Ee.height,b.format,b.type);for(let me of b.layerUpdates){let Ve=Ee.data.subarray(me*xe/Ee.data.BYTES_PER_ELEMENT,(me+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,me,Ee.width,Ee.height,1,Se,Ve)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,re.depth,Se,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,re.depth,Se,Be,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,re.depth,0,Se,Be,Ee.data)}else{qe&&mt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,nt[0].width,nt[0].height);for(let q=0,j=nt.length;q<j;q++)Ee=nt[q],b.format!==mn?Se!==null?qe?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Be,Ee.data):t.texImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Se,Be,Ee.data)}else if(b.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ke,re.width,re.height,re.depth),U)if(b.layerUpdates.size>0){let q=Od(re.width,re.height,b.format,b.type);for(let j of b.layerUpdates){let xe=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,Se,Be,xe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Be,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,Se,Be,re.data);else if(b.isData3DTexture)qe?(mt&&t.texStorage3D(s.TEXTURE_3D,pe,ke,re.width,re.height,re.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Be,re.data)):t.texImage3D(s.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,Se,Be,re.data);else if(b.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(s.TEXTURE_2D,pe,ke,re.width,re.height);else{let q=re.width,j=re.height;for(let xe=0;xe<pe;xe++)t.texImage2D(s.TEXTURE_2D,xe,ke,q,j,0,Se,Be,null),q>>=1,j>>=1}}else if(nt.length>0){if(qe&&mt){let q=Me(nt[0]);t.texStorage2D(s.TEXTURE_2D,pe,ke,q.width,q.height)}for(let q=0,j=nt.length;q<j;q++)Ee=nt[q],qe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Se,Be,Ee):t.texImage2D(s.TEXTURE_2D,q,ke,Se,Be,Ee);b.generateMipmaps=!1}else if(qe){if(mt){let q=Me(re);t.texStorage2D(s.TEXTURE_2D,pe,ke,q.width,q.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Be,re)}else t.texImage2D(s.TEXTURE_2D,0,ke,Se,Be,re);m(b)&&p(K),Re.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function se(R,b,k){if(b.image.length!==6)return;let K=Ke(R,b),ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let Z=n.get(ee);if(ee.version!==Z.__version||K===!0){t.activeTexture(s.TEXTURE0+k);let Re=Qe.getPrimaries(Qe.workingColorSpace),fe=b.colorSpace===wi?null:Qe.getPrimaries(b.colorSpace),be=b.colorSpace===wi||Re===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let je=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let j=0;j<6;j++)!je&&!re?Se[j]=y(b.image[j],!0,i.maxCubemapSize):Se[j]=re?b.image[j].image:b.image[j],Se[j]=Fe(b,Se[j]);let Be=Se[0],ke=r.convert(b.format,b.colorSpace),Ee=r.convert(b.type),nt=x(b.internalFormat,ke,Ee,b.colorSpace),qe=b.isVideoTexture!==!0,mt=Z.__version===void 0||K===!0,U=ee.dataReady,pe=I(b,Be);Ne(s.TEXTURE_CUBE_MAP,b);let q;if(je){qe&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,nt,Be.width,Be.height);for(let j=0;j<6;j++){q=Se[j].mipmaps;for(let xe=0;xe<q.length;xe++){let me=q[xe];b.format!==mn?ke!==null?qe?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,nt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,me.width,me.height,ke,Ee,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,nt,me.width,me.height,0,ke,Ee,me.data)}}}else{if(q=b.mipmaps,qe&&mt){q.length>0&&pe++;let j=Me(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,nt,j.width,j.height)}for(let j=0;j<6;j++)if(re){qe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se[j].width,Se[j].height,ke,Ee,Se[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,nt,Se[j].width,Se[j].height,0,ke,Ee,Se[j].data);for(let xe=0;xe<q.length;xe++){let Ve=q[xe].image[j].image;qe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ve.width,Ve.height,ke,Ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,nt,Ve.width,Ve.height,0,ke,Ee,Ve.data)}}else{qe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Ee,Se[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,nt,ke,Ee,Se[j]);for(let xe=0;xe<q.length;xe++){let me=q[xe];qe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,ke,Ee,me.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,nt,ke,Ee,me.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),Z.__version=ee.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function we(R,b,k,K,ee,Z){let Re=r.convert(k.format,k.colorSpace),fe=r.convert(k.type),be=x(k.internalFormat,Re,fe,k.colorSpace),je=n.get(b),re=n.get(k);if(re.__renderTarget=b,!je.__hasExternalTextures){let Se=Math.max(1,b.width>>Z),Be=Math.max(1,b.height>>Z);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,be,Se,Be,b.depth,0,Re,fe,null):t.texImage2D(ee,Z,be,Se,Be,0,Re,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ye(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ee,re.__webglTexture,0,te(b)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ee,re.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(R,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let K=b.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Z=_(b.stencilBuffer,ee),Re=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=te(b);ye(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Z,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,R)}else{let K=b.textures;for(let ee=0;ee<K.length;ee++){let Z=K[ee],Re=r.convert(Z.format,Z.colorSpace),fe=r.convert(Z.type),be=x(Z.internalFormat,Re,fe,Z.colorSpace),je=te(b);k&&ye(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,be,b.width,b.height):ye(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,be,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,be,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let ee=K.__webglTexture,Z=te(b);if(b.depthTexture.format===Cs)ye(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(b.depthTexture.format===Os)ye(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function X(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");De(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=s.createRenderbuffer(),le(b.__webglDepthbuffer[K],R,!1);else{let ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),le(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(R,b,k){let K=n.get(R);b!==void 0&&we(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&X(R)}function Te(R){let b=R.texture,k=n.get(R),K=n.get(b);R.addEventListener("dispose",C);let ee=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=b.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let be=0;be<b.mipmaps.length;be++)k.__webglFramebuffer[fe][be]=s.createFramebuffer()}else k.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[fe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Re)for(let fe=0,be=ee.length;fe<be;fe++){let je=n.get(ee[fe]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){let be=ee[fe];k.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);let je=r.convert(be.format,be.colorSpace),re=r.convert(be.type),Se=x(be.internalFormat,je,re,be.colorSpace,R.isXRRenderTarget===!0),Be=te(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Se,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),le(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)we(k.__webglFramebuffer[fe][be],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else we(k.__webglFramebuffer[fe],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let fe=0,be=ee.length;fe<be;fe++){let je=ee[fe],re=n.get(je);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),Ne(s.TEXTURE_2D,je),we(k.__webglFramebuffer,R,je,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,K.__webglTexture),Ne(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)we(k.__webglFramebuffer[be],R,b,s.COLOR_ATTACHMENT0,fe,be);else we(k.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,fe,0);m(b)&&p(fe),t.unbindTexture()}R.depthBuffer&&X(R)}function Y(R){let b=R.textures;for(let k=0,K=b.length;k<K;k++){let ee=b[k];if(m(ee)){let Z=v(R),Re=n.get(ee).__webglTexture;t.bindTexture(Z,Re),p(Z),t.unbindTexture()}}}let Q=[],P=[];function ve(R){if(R.samples>0){if(ye(R)===!1){let b=R.textures,k=R.width,K=R.height,ee=s.COLOR_BUFFER_BIT,Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(R),fe=b.length>1;if(fe)for(let be=0;be<b.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<b.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let je=n.get(b[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,ee,s.NEAREST),c===!0&&(Q.length=0,P.length=0,Q.push(s.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<b.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let je=n.get(b[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function te(R){return Math.min(i.maxSamples,R.samples)}function ye(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Fe(R,b){let k=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==qt&&k!==wi&&(Qe.getTransfer(k)===ut?(K!==mn||ee!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ye}function V_(s,e){function t(n,i=wi){let r,o=Qe.getTransfer(i);if(n===ri)return s.UNSIGNED_BYTE;if(n===ph)return s.UNSIGNED_SHORT_4_4_4_4;if(n===mh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return s.BYTE;if(n===hf)return s.SHORT;if(n===Nr)return s.UNSIGNED_SHORT;if(n===fh)return s.INT;if(n===Ji)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===$r)return s.HALF_FLOAT;if(n===df)return s.ALPHA;if(n===ff)return s.RGB;if(n===mn)return s.RGBA;if(n===pf)return s.LUMINANCE;if(n===mf)return s.LUMINANCE_ALPHA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===gh)return s.RED;if(n===yh)return s.RED_INTEGER;if(n===gf)return s.RG;if(n===xh)return s.RG_INTEGER;if(n===_h)return s.RGBA_INTEGER;if(n===Ho||n===zo||n===Vo||n===Go)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===yl||n===xl||n===_l||n===vl||n===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===bl||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yf||n===Sl||n===El||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var zl=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},G_={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yn({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends oi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=new Vl,m=t.getContextAttributes(),p=null,v=null,x=[],_=[],I=new ie,A=null,C=new Tt;C.viewport=new rt;let T=new Tt;T.viewport=new rt;let w=[C,T],M=new zl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=x[$];return se===void 0&&(se=new Ir,x[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=x[$];return se===void 0&&(se=new Ir,x[$]=se),se.getGripSpace()},this.getHand=function($){let se=x[$];return se===void 0&&(se=new Ir,x[$]=se),se.getHandSpace()};function D($){let se=_.indexOf($.inputSource);if(se===-1)return;let we=x[se];we!==void 0&&(we.update($.inputSource,$.frame,l||o),we.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",W);for(let $=0;$<x.length;$++){let se=_[$];se!==null&&(_[$]=null,x[$].disconnect(se))}L=null,H=null,y.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,we=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Os:Cs,we=m.stencil?Ns:Ji);let De={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Pn(d.textureWidth,d.textureHeight,{format:mn,type:ri,depthTexture:new ta(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W($){for(let se=0;se<$.removed.length;se++){let we=$.removed[se],le=_.indexOf(we);le>=0&&(_[le]=null,x[le].disconnect(we))}for(let se=0;se<$.added.length;se++){let we=$.added[se],le=_.indexOf(we);if(le===-1){for(let X=0;X<x.length;X++)if(X>=_.length){_.push(we),le=X;break}else if(_[X]===null){_[X]=we,le=X;break}if(le===-1)break}let De=x[le];De&&De.connect(we)}}let B=new E,J=new E;function G($,se,we){B.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);let le=B.distanceTo(J),De=se.projectionMatrix.elements,X=we.projectionMatrix.elements,ne=De[14]/(De[10]-1),Te=De[14]/(De[10]+1),Y=(De[9]+1)/De[5],Q=(De[9]-1)/De[5],P=(De[8]-1)/De[0],ve=(X[8]+1)/X[0],te=ne*P,ye=ne*ve,he=le/(-P+ve),Fe=he*-P;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(he),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Me=ne+he,R=Te+he,b=te-Fe,k=ye+(le-Fe),K=Y*Te/R*Me,ee=Q*Te/R*Me;$.projectionMatrix.makePerspective(b,k,K,ee,Me,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let se=$.near,we=$.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(we=y.depthFar)),M.near=T.near=C.near=se,M.far=T.far=C.far=we,(L!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,H=M.far),C.layers.mask=$.layers.mask|2,T.layers.mask=$.layers.mask|4,M.layers.mask=C.layers.mask|T.layers.mask;let le=$.parent,De=M.cameras;ae(M,le);for(let X=0;X<De.length;X++)ae(De[X],le);De.length===2?G(M,C,T):M.projectionMatrix.copy(C.projectionMatrix),ue($,M,le)};function ue($,se,we){we===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let _e=null;function Ne($,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let le=!1;we.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let X=0;X<we.length;X++){let ne=we[X],Te=null;if(f!==null)Te=f.getViewport(ne);else{let Q=u.getViewSubImage(d,ne);Te=Q.viewport,X===0&&(e.setRenderTargetTextures(v,Q.colorTexture,d.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(v))}let Y=w[X];Y===void 0&&(Y=new Tt,Y.layers.enable(X),Y.viewport=new rt,w[X]=Y),Y.matrix.fromArray(ne.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ne.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Te.x,Te.y,Te.width,Te.height),X===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Y)}let De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){let X=u.getDepthInformation(we[0]);X&&X.isValid&&X.texture&&y.init(e,X,i.renderState)}}for(let we=0;we<x.length;we++){let le=_[we],De=x[we];le!==null&&De!==void 0&&De.update(le,se,l||o)}_e&&_e($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ke=new Sf;Ke.setAnimationLoop(Ne),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}},qi=new nn,q_=new oe;function Y_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,qi.copy(_),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(qi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){let _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",m));let I=x.program;n.updateUBOMapping(v,I);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let x=u();v.__bindingPointIndex=x;let _=s.createBuffer(),I=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=i[v.id],_=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,C=_.length;A<C;A++){let T=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,M=T.length;w<M;w++){let L=T[w];if(f(L,A,w,I)===!0){let H=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],N=0;for(let W=0;W<D.length;W++){let B=D[W],J=y(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,H+N,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,_,I){let A=v.value,C=x+"_"+_;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let T=I[C];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return I[C]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function g(v){let x=v.uniforms,_=0,I=16;for(let C=0,T=x.length;C<T;C++){let w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,L=w.length;M<L;M++){let H=w[M],D=Array.isArray(H.value)?H.value:[H.value];for(let N=0,W=D.length;N<W;N++){let B=D[N],J=y(B),G=_%I,ae=G%J.boundary,ue=G+ae;_+=ae,ue!==0&&I-ue<J.storage&&(_+=I-ue),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=J.storage}}}let A=_%I;return A>0&&(_+=I-A),v.__size=_,v.__cache={},this}function y(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var na=class{constructor(e={}){let{canvas:t=jm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=et,this.toneMapping=Ti,this.toneMappingExposure=1;let _=this,I=!1,A=0,C=0,T=null,w=-1,M=null,L=new rt,H=new rt,D=null,N=new Ae(0),W=0,B=t.width,J=t.height,G=1,ae=null,ue=null,_e=new rt(0,0,B,J),Ne=new rt(0,0,B,J),Ke=!1,$=new Fr,se=!1,we=!1,le=new oe,De=new oe,X=new E,ne=new rt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function Q(){return T===null?G:1}let P=n;function ve(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),P===null){let O="webgl2";if(P=ve(O,S),P===null)throw ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,ye,he,Fe,Me,R,b,k,K,ee,Z,Re,fe,be,je,re,Se,Be,ke,Ee,nt,qe,mt,U;function pe(){te=new hx(P),te.init(),qe=new V_(P,te),ye=new sx(P,te,e,qe),he=new k_(P,te),ye.reverseDepthBuffer&&d&&he.buffers.depth.setReversed(!0),Fe=new fx(P),Me=new T_,R=new z_(P,te,he,Me,ye,qe,Fe),b=new ox(_),k=new lx(_),K=new v0(P),mt=new nx(P,K),ee=new ux(P,K,Fe,mt),Z=new mx(P,ee,K,Fe),ke=new px(P,ye,R),re=new rx(Me),Re=new E_(_,b,k,te,ye,mt,re),fe=new Y_(_,Me),be=new R_,je=new U_(te),Be=new tx(_,b,k,he,Z,f,c),Se=new F_(_,Z,ye),U=new $_(P,Fe,ye,he),Ee=new ix(P,te,Fe),nt=new dx(P,te,Fe),Fe.programs=Re.programs,_.capabilities=ye,_.extensions=te,_.properties=Me,_.renderLists=be,_.shadowMap=Se,_.state=he,_.info=Fe}pe();let q=new Gl(_,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(B,J,!1))},this.getSize=function(S){return S.set(B,J)},this.setSize=function(S,O,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,J=O,t.width=Math.floor(S*G),t.height=Math.floor(O*G),z===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(B*G,J*G).floor()},this.setDrawingBufferSize=function(S,O,z){B=S,J=O,G=z,t.width=Math.floor(S*z),t.height=Math.floor(O*z),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,O,z,V){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,O,z,V),he.viewport(L.copy(_e).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,O,z,V){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,O,z,V),he.scissor(H.copy(Ne).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){he.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(S=!0,O=!0,z=!0){let V=0;if(S){let F=!1;if(T!==null){let ce=T.texture.format;F=ce===_h||ce===xh||ce===yh}if(F){let ce=T.texture.type,ge=ce===ri||ce===Ji||ce===Nr||ce===Ns||ce===ph||ce===mh,Ce=Be.getClearColor(),Ie=Be.getClearAlpha(),He=Ce.r,Ge=Ce.g,Pe=Ce.b;ge?(g[0]=He,g[1]=Ge,g[2]=Pe,g[3]=Ie,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=He,y[1]=Ge,y[2]=Pe,y[3]=Ie,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}O&&(V|=P.DEPTH_BUFFER_BIT),z&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),be.dispose(),je.dispose(),Me.dispose(),b.dispose(),k.dispose(),Z.dispose(),mt.dispose(),U.dispose(),Re.dispose(),q.dispose(),q.removeEventListener("sessionstart",Lu),q.removeEventListener("sessionend",Du),Hi.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=Fe.autoReset,O=Se.enabled,z=Se.autoUpdate,V=Se.needsUpdate,F=Se.type;pe(),Fe.autoReset=S,Se.enabled=O,Se.autoUpdate=z,Se.needsUpdate=V,Se.type=F}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){let O=S.target;O.removeEventListener("dispose",Ve),Et(O)}function Et(S){zt(S),Me.remove(S)}function zt(S){let O=Me.get(S).programs;O!==void 0&&(O.forEach(function(z){Re.releaseProgram(z)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,z,V,F,ce){O===null&&(O=Te);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Ce=qp(S,O,z,V,F);he.setMaterial(V,ge);let Ie=z.index,He=1;if(V.wireframe===!0){if(Ie=ee.getWireframeAttribute(z),Ie===void 0)return;He=2}let Ge=z.drawRange,Pe=z.attributes.position,it=Ge.start*He,gt=(Ge.start+Ge.count)*He;ce!==null&&(it=Math.max(it,ce.start*He),gt=Math.min(gt,(ce.start+ce.count)*He)),Ie!==null?(it=Math.max(it,0),gt=Math.min(gt,Ie.count)):Pe!=null&&(it=Math.max(it,0),gt=Math.min(gt,Pe.count));let vt=gt-it;if(vt<0||vt===1/0)return;mt.setup(F,V,Ce,z,Ie);let Qt,ot=Ee;if(Ie!==null&&(Qt=K.get(Ie),ot=nt,ot.setIndex(Qt)),F.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*Q()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(F.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*Q()),F.isLineSegments?ot.setMode(P.LINES):F.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else F.isPoints?ot.setMode(P.POINTS):F.isSprite&&ot.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Le=F._multiDrawStarts,Yn=F._multiDrawCounts,at=F._multiDrawCount,En=Ie?K.get(Ie).bytesPerElement:1,as=Me.get(V).currentProgram.getUniforms();for(let on=0;on<at;on++)as.setValue(P,"_gl_DrawID",on),ot.render(Le[on]/En,Yn[on])}else if(F.isInstancedMesh)ot.renderInstances(it,vt,F.count);else if(z.isInstancedBufferGeometry){let Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Yn=Math.min(z.instanceCount,Le);ot.renderInstances(it,vt,Yn)}else ot.render(it,vt)};function lt(S,O,z){S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,co(S,O,z),S.side=kn,S.needsUpdate=!0,co(S,O,z),S.side=Jt):co(S,O,z)}this.compile=function(S,O,z=null){z===null&&(z=S),p=je.get(z),p.init(O),x.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ce=F.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Ce=ce[ge];lt(Ce,z,F),V.add(Ce)}else lt(ce,z,F),V.add(ce)}),x.pop(),p=null,V},this.compileAsync=function(S,O,z=null){let V=this.compile(S,O,z);return new Promise(F=>{function ce(){if(V.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){F(S);return}setTimeout(ce,10)}te.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Sn=null;function qn(S){Sn&&Sn(S)}function Lu(){Hi.stop()}function Du(){Hi.start()}let Hi=new Sf;Hi.setAnimationLoop(qn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){Sn=S,q.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},q.addEventListener("sessionstart",Lu),q.addEventListener("sessionend",Du),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,O,T),p=je.get(S,x.length),p.init(O),x.push(p),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(De),we=this.localClippingEnabled,se=re.init(this.clippingPlanes,we),m=be.get(S,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&cc(ce,O,-1/0,_.sortObjects)}cc(S,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ae,ue),Y=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Y&&Be.addToRenderList(m,S),this.info.render.frame++,se===!0&&re.beginShadows();let z=p.state.shadowsArray;Se.render(z,S,O),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ce=O.cameras;if(F.length>0)for(let ge=0,Ce=ce.length;ge<Ce;ge++){let Ie=ce[ge];Nu(V,F,S,Ie)}Y&&Be.render(S);for(let ge=0,Ce=ce.length;ge<Ce;ge++){let Ie=ce[ge];Uu(m,S,Ie,Ie.viewport)}}else F.length>0&&Nu(V,F,S,O),Y&&Be.render(S),Uu(m,S,O);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(_,S,O),mt.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],se===!0&&re.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function cc(S,O,z,V){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){V&&ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let ge=Z.update(S),Ce=S.material;Ce.visible&&m.push(S,ge,Ce,z,ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let ge=Z.update(S),Ce=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ne.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ne.copy(ge.boundingSphere.center)),ne.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(Ce)){let Ie=ge.groups;for(let He=0,Ge=Ie.length;He<Ge;He++){let Pe=Ie[He],it=Ce[Pe.materialIndex];it&&it.visible&&m.push(S,ge,it,z,ne.z,Pe)}}else Ce.visible&&m.push(S,ge,Ce,z,ne.z,null)}}let ce=S.children;for(let ge=0,Ce=ce.length;ge<Ce;ge++)cc(ce[ge],O,z,V)}function Uu(S,O,z,V){let F=S.opaque,ce=S.transmissive,ge=S.transparent;p.setupLightsView(z),se===!0&&re.setGlobalState(_.clippingPlanes,z),V&&he.viewport(L.copy(V)),F.length>0&&ao(F,O,z),ce.length>0&&ao(ce,O,z),ge.length>0&&ao(ge,O,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Nu(S,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Pn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?$r:ri,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ce=p.state.transmissionRenderTarget[V.id],ge=V.viewport||L;ce.setSize(ge.z,ge.w);let Ce=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(N),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Y&&Be.render(z);let Ie=_.toneMapping;_.toneMapping=Ti;let He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),se===!0&&re.setGlobalState(_.clippingPlanes,V),ao(S,z,V),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pe=0,it=O.length;Pe<it;Pe++){let gt=O[Pe],vt=gt.object,Qt=gt.geometry,ot=gt.material,Le=gt.group;if(ot.side===Jt&&vt.layers.test(V.layers)){let Yn=ot.side;ot.side=Nt,ot.needsUpdate=!0,Ou(vt,z,V,Qt,ot,Le),ot.side=Yn,ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ce),_.setClearColor(N,W),He!==void 0&&(V.viewport=He),_.toneMapping=Ie}function ao(S,O,z){let V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ce=S.length;F<ce;F++){let ge=S[F],Ce=ge.object,Ie=ge.geometry,He=V===null?ge.material:V,Ge=ge.group;Ce.layers.test(z.layers)&&Ou(Ce,O,z,Ie,He,Ge)}}function Ou(S,O,z,V,F,ce){S.onBeforeRender(_,O,z,V,F,ce),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(_,O,z,V,S,ce),F.transparent===!0&&F.side===Jt&&F.forceSinglePass===!1?(F.side=Nt,F.needsUpdate=!0,_.renderBufferDirect(z,O,V,F,S,ce),F.side=kn,F.needsUpdate=!0,_.renderBufferDirect(z,O,V,F,S,ce),F.side=Jt):_.renderBufferDirect(z,O,V,F,S,ce),S.onAfterRender(_,O,z,V,F,ce)}function co(S,O,z){O.isScene!==!0&&(O=Te);let V=Me.get(S),F=p.state.lights,ce=p.state.shadowsArray,ge=F.state.version,Ce=Re.getParameters(S,F.state,ce,O,z),Ie=Re.getProgramCacheKey(Ce),He=V.programs;V.environment=S.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(S.isMeshStandardMaterial?k:b).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",Ve),He=new Map,V.programs=He);let Ge=He.get(Ie);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===ge)return Bu(S,Ce),Ge}else Ce.uniforms=Re.getUniforms(S),S.onBeforeCompile(Ce,_),Ge=Re.acquireProgram(Ce,Ie),He.set(Ie,Ge),V.uniforms=Ce.uniforms;let Pe=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=re.uniform),Bu(S,Ce),V.needsLights=$p(S),V.lightsStateVersion=ge,V.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function Fu(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Ps.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Bu(S,O){let z=Me.get(S);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function qp(S,O,z,V,F){O.isScene!==!0&&(O=Te),R.resetTextureUnits();let ce=O.fog,ge=V.isMeshStandardMaterial?O.environment:null,Ce=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qt,Ie=(V.isMeshStandardMaterial?k:b).get(V.envMap||ge),He=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!z.morphAttributes.position,it=!!z.morphAttributes.normal,gt=!!z.morphAttributes.color,vt=Ti;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=_.toneMapping);let Qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=Qt!==void 0?Qt.length:0,Le=Me.get(V),Yn=p.state.lights;if(se===!0&&(we===!0||S!==M)){let fn=S===M&&V.id===w;re.setState(V,S,fn)}let at=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Yn.state.version||Le.outputColorSpace!==Ce||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==Ie||V.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==Ge||Le.morphTargets!==Pe||Le.morphNormals!==it||Le.morphColors!==gt||Le.toneMapping!==vt||Le.morphTargetsCount!==ot)&&(at=!0):(at=!0,Le.__version=V.version);let En=Le.currentProgram;at===!0&&(En=co(V,O,F));let as=!1,on=!1,mr=!1,Mt=En.getUniforms(),On=Le.uniforms;if(he.useProgram(En.program)&&(as=!0,on=!0,mr=!0),V.id!==w&&(w=V.id,on=!0),as||M!==S){he.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),e0(le),t0(le),Mt.setValue(P,"projectionMatrix",le)):Mt.setValue(P,"projectionMatrix",S.projectionMatrix),Mt.setValue(P,"viewMatrix",S.matrixWorldInverse);let mi=Mt.map.cameraPosition;mi!==void 0&&mi.setValue(P,X.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,on=!0,mr=!0)}if(F.isSkinnedMesh){Mt.setOptional(P,F,"bindMatrix"),Mt.setOptional(P,F,"bindMatrixInverse");let fn=F.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Mt.setValue(P,"boneTexture",fn.boneTexture,R))}F.isBatchedMesh&&(Mt.setOptional(P,F,"batchingTexture"),Mt.setValue(P,"batchingTexture",F._matricesTexture,R),Mt.setOptional(P,F,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",F._indirectTexture,R),Mt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",F._colorsTexture,R));let gr=z.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&ke.update(F,z,En),(on||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,Mt.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(On.envMap.value=Ie,On.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),on&&(Mt.setValue(P,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Yp(On,mr),ce&&V.fog===!0&&fe.refreshFogUniforms(On,ce),fe.refreshMaterialUniforms(On,V,G,J,p.state.transmissionRenderTarget[S.id]),Ps.upload(P,Fu(Le),On,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ps.upload(P,Fu(Le),On,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(P,"center",F.center),Mt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Mt.setValue(P,"normalMatrix",F.normalMatrix),Mt.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let fn=V.uniformsGroups;for(let mi=0,gi=fn.length;mi<gi;mi++){let ku=fn[mi];U.update(ku,En),U.bind(ku,En)}}return En}function Yp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function $p(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,O,z){Me.get(S.texture).__webglTexture=O,Me.get(S.depthTexture).__webglTexture=z;let V=Me.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){let z=Me.get(S);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,z=0){T=S,A=O,C=z;let V=!0,F=null,ce=!1,ge=!1;if(S){let Ie=Me.get(S);if(Ie.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Ie.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(Ie.__hasExternalTextures)R.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Pe=S.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&Me.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);let Ge=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?F=Ge[O][z]:F=Ge[O],ce=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?F=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[z]:F=Ge,L.copy(S.viewport),H.copy(S.scissor),D=S.scissorTest}else L.copy(_e).multiplyScalar(G).floor(),H.copy(Ne).multiplyScalar(G).floor(),D=Ke;if(he.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&he.drawBuffers(S,F),he.viewport(L),he.scissor(H),he.setScissorTest(D),ce){let Ie=Me.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,z)}else if(ge){let Ie=Me.get(S.texture),He=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,z||0,He)}w=-1},this.readRenderTargetPixels=function(S,O,z,V,F,ce,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){he.bindFramebuffer(P.FRAMEBUFFER,Ce);try{let Ie=S.texture,He=Ie.format,Ge=Ie.type;if(!ye.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-V&&z>=0&&z<=S.height-F&&P.readPixels(O,z,V,F,qe.convert(He),qe.convert(Ge),ce)}finally{let Ie=T!==null?Me.get(T).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,O,z,V,F,ce,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){let Ie=S.texture,He=Ie.format,Ge=Ie.type;if(!ye.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-V&&z>=0&&z<=S.height-F){he.bindFramebuffer(P.FRAMEBUFFER,Ce);let Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(O,z,V,F,qe.convert(He),qe.convert(Ge),0);let it=T!==null?Me.get(T).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,it);let gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qm(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Pe),P.deleteSync(gt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,z=0){S.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);let V=Math.pow(2,-z),F=Math.floor(S.image.width*V),ce=Math.floor(S.image.height*V),ge=O!==null?O.x:0,Ce=O!==null?O.y:0;R.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ge,Ce,F,ce),he.unbindTexture()},this.copyTextureToTexture=function(S,O,z=null,V=null,F=0){S.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let ce,ge,Ce,Ie,He,Ge,Pe,it,gt,vt=S.isCompressedTexture?S.mipmaps[F]:S.image;z!==null?(ce=z.max.x-z.min.x,ge=z.max.y-z.min.y,Ce=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,He=z.min.y,Ge=z.isBox3?z.min.z:0):(ce=vt.width,ge=vt.height,Ce=vt.depth||1,Ie=0,He=0,Ge=0),V!==null?(Pe=V.x,it=V.y,gt=V.z):(Pe=0,it=0,gt=0);let Qt=qe.convert(O.format),ot=qe.convert(O.type),Le;O.isData3DTexture?(R.setTexture3D(O,0),Le=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Le=P.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Yn=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),En=P.getParameter(P.UNPACK_SKIP_PIXELS),as=P.getParameter(P.UNPACK_SKIP_ROWS),on=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,He),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);let mr=S.isDataArrayTexture||S.isData3DTexture,Mt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let On=Me.get(S),gr=Me.get(O),fn=Me.get(On.__renderTarget),mi=Me.get(gr.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,fn.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Ce;gi++)mr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,F,Ge+gi),S.isDepthTexture?(Mt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,F,gt+gi),P.blitFramebuffer(Ie,He,ce,ge,Pe,it,ce,ge,P.DEPTH_BUFFER_BIT,P.NEAREST)):Mt?P.copyTexSubImage3D(Le,F,Pe,it,gt+gi,Ie,He,ce,ge):P.copyTexSubImage2D(Le,F,Pe,it,gt+gi,Ie,He,ce,ge);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Le,F,Pe,it,gt,ce,ge,Ce,Qt,ot,vt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,F,Pe,it,gt,ce,ge,Ce,Qt,vt.data):P.texSubImage3D(Le,F,Pe,it,gt,ce,ge,Ce,Qt,ot,vt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Pe,it,ce,ge,Qt,ot,vt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Pe,it,vt.width,vt.height,Qt,vt.data):P.texSubImage2D(P.TEXTURE_2D,F,Pe,it,ce,ge,Qt,ot,vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,En),P.pixelStorei(P.UNPACK_SKIP_ROWS,as),P.pixelStorei(P.UNPACK_SKIP_IMAGES,on),F===0&&O.generateMipmaps&&P.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(S,O,z=null,V=null,F=0){return S.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,S=arguments[2],O=arguments[3],F=arguments[4]||0),Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,z,V,F)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){A=0,C=0,T=null,he.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var Ai=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kt=new E,kr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Fd=new E,Bd=new rt,kd=new rt,K_=new E,Hd=new oe,Io=new E,Oc=new hn,zd=new oe,Fc=new Hs,ia=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new tn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(zd.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Bd.fromBufferAttribute(i.attributes.skinIndex,e),kd.fromBufferAttribute(i.attributes.skinWeight,e),Fd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=kd.getComponent(r);if(o!==0){let a=Bd.getComponent(r);Hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(K_.copy(Fd).applyMatrix4(Hd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Hr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},sa=class extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Wt,h=Wt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vd=new oe,Z_=new oe,ra=class s{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Z_;Vd.multiplyMatrices(a,t[r]),Vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new sa(t,e,e,mn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ji=class extends ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new oe,Gd=new oe,Po=[],Wd=new tn,J_=new oe,Mr=new Ue,br=new hn,oa=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,J_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Wd.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),br.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),Gd.multiplyMatrices(n,bs),Mr.matrixWorld=Gd,Mr.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let c=Po[o];c.instanceId=r,c.object=this,t.push(c)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(i*this.count),i,this.count,gh,In));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qi=class extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},aa=new E,ca=new E,Xd=new oe,wr=new Hs,Lo=new hn,Bc=new E,qd=new E,Ws=class extends St{constructor(e=new dt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)aa.fromBufferAttribute(t,i-1),ca.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=aa.distanceTo(ca);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;Xd.copy(i).invert(),wr.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=h.getX(y),v=h.getX(y+1),x=Do(this,e,wr,c,p,v);x&&t.push(x)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Do(this,e,wr,c,y,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=l){let p=Do(this,e,wr,c,y,y+1);p&&t.push(p)}if(this.isLineLoop){let y=Do(this,e,wr,c,g-1,f);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Do(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(aa.fromBufferAttribute(o,i),ca.fromBufferAttribute(o,r),t.distanceSqToSegment(aa,ca,Bc,qd)>n)return;Bc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Bc);if(!(c<e.near||c>e.far))return{distance:c,point:qd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Yd=new E,$d=new E,Xs=class extends Ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yd.fromBufferAttribute(t,i),$d.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yd.distanceTo($d);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends Ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ln=class extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kd=new oe,Wl=new Hs,Uo=new hn,No=new E,Hn=class extends St{constructor(e=new dt,t=new Ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;Kd.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(Kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=l.getX(g);No.fromBufferAttribute(u,m),Zd(No,m,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)No.fromBufferAttribute(u,g),Zd(No,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(s,e,t,n,i,r,o){let a=Wl.distanceSqToPoint(s);if(a<t){let c=new E;Wl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Xt=class extends Ot{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ie:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],r=[],o=[],a=new E,c=new oe;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(It(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xl=class extends zr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Oo=new E,kc=new Eh,Hc=new Eh,zc=new Eh,_n=class extends xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Oo.subVectors(i[0],i[1]).add(i[0]),l=Oo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Oo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),kc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),Hc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),zc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Hc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),zc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(kc.calc(c),Hc.calc(c),zc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function j_(s,e){let t=1-s;return t*t*e}function Q_(s,e){return 2*(1-s)*s*e}function ev(s,e){return s*s*e}function Pr(s,e,t,n){return j_(s,e)+Q_(s,t)+ev(s,n)}function tv(s,e){let t=1-s;return t*t*t*e}function nv(s,e){let t=1-s;return 3*t*t*s*e}function iv(s,e){return 3*(1-s)*s*s*e}function sv(s,e){return s*s*s*e}function Lr(s,e,t,n,i){return tv(s,e)+nv(s,t)+iv(s,n)+sv(s,i)}var ha=class extends xn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(e,i.x,r.x,o.x,a.x),Lr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ql=class extends xn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(e,i.x,r.x,o.x,a.x),Lr(e,i.y,r.y,o.y,a.y),Lr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends xn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends xn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends xn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,i.x,r.x,o.x),Pr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends xn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Pr(e,i.x,r.x,o.x),Pr(e,i.y,r.y,o.y),Pr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Jd(a,c.x,l.x,h.x,u.x),Jd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},ma=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:_n,CubicBezierCurve:ha,CubicBezierCurve3:ql,EllipseCurve:zr,LineCurve:ua,LineCurve3:Yl,QuadraticBezierCurve:da,QuadraticBezierCurve3:fa,SplineCurve:pa}),$l=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ma[i.type]().fromJSON(i))}return this}},Vr=class extends $l{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ua(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new da(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ha(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new zr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class s extends dt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=It(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new E,d=new ie,f=new E,g=new E,y=new E,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=t;v++){let x=n+v*h*i,_=Math.sin(x),I=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*_,u.y=e[A].y,u.z=e[A].x*I,o.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),a.push(d.x,d.y);let C=c[3*A+0]*_,T=c[3*A+1],w=c[3*A+0]*I;l.push(C,T,w)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let _=x+v*e.length,I=_,A=_+e.length,C=_+e.length+1,T=_+1;r.push(I,A,T),r.push(C,T,A)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},ai=class s extends Ri{constructor(e=1,t=1,n=4,i=8){let r=new Vr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},ga=class s extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new E,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ze=class s extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=n/2,p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function v(){let _=new E,I=new E,A=0,C=(t-e)/n;for(let T=0;T<=r;T++){let w=[],M=T/r,L=M*(t-e)+e;for(let H=0;H<=i;H++){let D=H/i,N=D*c+a,W=Math.sin(N),B=Math.cos(N);I.x=L*W,I.y=-M*n+m,I.z=L*B,u.push(I.x,I.y,I.z),_.set(W,C,B).normalize(),d.push(_.x,_.y,_.z),f.push(D,1-M),w.push(g++)}y.push(w)}for(let T=0;T<i;T++)for(let w=0;w<r;w++){let M=y[w][T],L=y[w+1][T],H=y[w+1][T+1],D=y[w][T+1];(e>0||w!==0)&&(h.push(M,L,D),A+=3),(t>0||w!==r-1)&&(h.push(L,H,D),A+=3)}l.addGroup(p,A,0),p+=A}function x(_){let I=g,A=new ie,C=new E,T=0,w=_===!0?e:t,M=_===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let L=g;for(let H=0;H<=i;H++){let N=H/i*c+a,W=Math.cos(N),B=Math.sin(N);C.x=w*B,C.y=m*M,C.z=w*W,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=W*.5+.5,A.y=B*.5*M+.5,f.push(A.x,A.y),g++}for(let H=0;H<i;H++){let D=I+H,N=L+H;_===!0?h.push(N,N+1,D):h.push(N+1,N,D),T+=3}l.addGroup(p,T,_===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zn=class s extends Ze{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vn=class extends Vr{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Vr().fromJSON(i))}return this}},rv={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Cf(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=hv(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Gr(r,o,t,a,c,f,0),o}};function Cf(s,e,t,n,i){let r,o;if(i===Mv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=jd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=jd(r,s[r],s[r+1],o);return o&&Aa(o,o.next)&&(Xr(o),o=o.next),o}function es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Aa(t,t.next)||wt(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&mv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?av(s,n,i,r):ov(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Xr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=cv(es(s),e,t),Gr(s,e,t,n,i,r,2)):o===2&&lv(s,e,t,n,i,r):Gr(es(s),e,t,n,i,r,1);break}}}function ov(s){let e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&As(i,a,r,c,o,l,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function av(s,e,t,n){let i=s.prev,r=s,o=s.next;if(wt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Kl(f,g,e,t,n),v=Kl(y,m,e,t,n),x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=v;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&As(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&As(a,h,c,u,l,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&As(a,h,c,u,l,d,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&As(a,h,c,u,l,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function cv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Aa(i,r)&&If(i,n,n.next,r)&&Wr(i,r)&&Wr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Xr(n),Xr(n.next),n=s=r),n=n.next}while(n!==s);return es(n)}function lv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let c=Pf(o,a);o=es(o,o.next),c=es(c,c.next),Gr(o,e,t,n,i,r,0),Gr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function hv(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Cf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(yv(l));for(i.sort(uv),r=0;r<i.length;r++)t=dv(i[r],t);return t}function uv(s,e){return s.x-e.x}function dv(s,e){let t=fv(s,e);if(!t)return e;let n=Pf(t,s);return es(n,n.next),es(t,t.next)}function fv(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Wr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&pv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function pv(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function mv(s,e,t,n){let i=s;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gv(i)}function gv(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function yv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function As(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function xv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!_v(s,e)&&(Wr(s,e)&&Wr(e,s)&&vv(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Aa(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Aa(s,e){return s.x===e.x&&s.y===e.y}function If(s,e,t,n){let i=Bo(wt(s,e,t)),r=Bo(wt(s,e,n)),o=Bo(wt(t,n,s)),a=Bo(wt(t,n,e));return!!(i!==r&&o!==a||i===0&&Fo(s,t,e)||r===0&&Fo(s,n,e)||o===0&&Fo(t,s,n)||a===0&&Fo(t,e,n))}function Fo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bo(s){return s>0?1:s<0?-1:0}function _v(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Wr(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function vv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Pf(s,e){let t=new Zl(s.i,s.x,s.y),n=new Zl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jd(s,e,t,n){let i=new Zl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Dr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Qd(e),ef(n,e);let o=e.length;t.forEach(Qd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,ef(n,t[c]);let a=rv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Qd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ef(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var qs=class s extends dt{constructor(e=new Vn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new st(i,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:bv,x,_=!1,I,A,C,T;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),A=new E,C=new E,T=new E),d||(m=0,f=0,g=0,y=0);let w=a.extractPoints(l),M=w.shape,L=w.holes;if(!Dr.isClockWise(M)){M=M.reverse();for(let Y=0,Q=L.length;Y<Q;Y++){let P=L[Y];Dr.isClockWise(P)&&(L[Y]=P.reverse())}}let D=Dr.triangulateShape(M,L),N=M;for(let Y=0,Q=L.length;Y<Q;Y++){let P=L[Y];M=M.concat(P)}function W(Y,Q,P){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(Q,P)}let B=M.length,J=D.length;function G(Y,Q,P){let ve,te,ye,he=Y.x-Q.x,Fe=Y.y-Q.y,Me=P.x-Y.x,R=P.y-Y.y,b=he*he+Fe*Fe,k=he*R-Fe*Me;if(Math.abs(k)>Number.EPSILON){let K=Math.sqrt(b),ee=Math.sqrt(Me*Me+R*R),Z=Q.x-Fe/K,Re=Q.y+he/K,fe=P.x-R/ee,be=P.y+Me/ee,je=((fe-Z)*R-(be-Re)*Me)/(he*R-Fe*Me);ve=Z+he*je-Y.x,te=Re+Fe*je-Y.y;let re=ve*ve+te*te;if(re<=2)return new ie(ve,te);ye=Math.sqrt(re/2)}else{let K=!1;he>Number.EPSILON?Me>Number.EPSILON&&(K=!0):he<-Number.EPSILON?Me<-Number.EPSILON&&(K=!0):Math.sign(Fe)===Math.sign(R)&&(K=!0),K?(ve=-Fe,te=he,ye=Math.sqrt(b)):(ve=he,te=Fe,ye=Math.sqrt(b/2))}return new ie(ve/ye,te/ye)}let ae=[];for(let Y=0,Q=N.length,P=Q-1,ve=Y+1;Y<Q;Y++,P++,ve++)P===Q&&(P=0),ve===Q&&(ve=0),ae[Y]=G(N[Y],N[P],N[ve]);let ue=[],_e,Ne=ae.concat();for(let Y=0,Q=L.length;Y<Q;Y++){let P=L[Y];_e=[];for(let ve=0,te=P.length,ye=te-1,he=ve+1;ve<te;ve++,ye++,he++)ye===te&&(ye=0),he===te&&(he=0),_e[ve]=G(P[ve],P[ye],P[he]);ue.push(_e),Ne=Ne.concat(_e)}for(let Y=0;Y<m;Y++){let Q=Y/m,P=f*Math.cos(Q*Math.PI/2),ve=g*Math.sin(Q*Math.PI/2)+y;for(let te=0,ye=N.length;te<ye;te++){let he=W(N[te],ae[te],ve);le(he.x,he.y,-P)}for(let te=0,ye=L.length;te<ye;te++){let he=L[te];_e=ue[te];for(let Fe=0,Me=he.length;Fe<Me;Fe++){let R=W(he[Fe],_e[Fe],ve);le(R.x,R.y,-P)}}}let Ke=g+y;for(let Y=0;Y<B;Y++){let Q=d?W(M[Y],Ne[Y],Ke):M[Y];_?(C.copy(I.normals[0]).multiplyScalar(Q.x),A.copy(I.binormals[0]).multiplyScalar(Q.y),T.copy(x[0]).add(C).add(A),le(T.x,T.y,T.z)):le(Q.x,Q.y,0)}for(let Y=1;Y<=h;Y++)for(let Q=0;Q<B;Q++){let P=d?W(M[Q],Ne[Q],Ke):M[Q];_?(C.copy(I.normals[Y]).multiplyScalar(P.x),A.copy(I.binormals[Y]).multiplyScalar(P.y),T.copy(x[Y]).add(C).add(A),le(T.x,T.y,T.z)):le(P.x,P.y,u/h*Y)}for(let Y=m-1;Y>=0;Y--){let Q=Y/m,P=f*Math.cos(Q*Math.PI/2),ve=g*Math.sin(Q*Math.PI/2)+y;for(let te=0,ye=N.length;te<ye;te++){let he=W(N[te],ae[te],ve);le(he.x,he.y,u+P)}for(let te=0,ye=L.length;te<ye;te++){let he=L[te];_e=ue[te];for(let Fe=0,Me=he.length;Fe<Me;Fe++){let R=W(he[Fe],_e[Fe],ve);_?le(R.x,R.y+x[h-1].y,x[h-1].x+P):le(R.x,R.y,u+P)}}}$(),se();function $(){let Y=i.length/3;if(d){let Q=0,P=B*Q;for(let ve=0;ve<J;ve++){let te=D[ve];De(te[2]+P,te[1]+P,te[0]+P)}Q=h+m*2,P=B*Q;for(let ve=0;ve<J;ve++){let te=D[ve];De(te[0]+P,te[1]+P,te[2]+P)}}else{for(let Q=0;Q<J;Q++){let P=D[Q];De(P[2],P[1],P[0])}for(let Q=0;Q<J;Q++){let P=D[Q];De(P[0]+B*h,P[1]+B*h,P[2]+B*h)}}n.addGroup(Y,i.length/3-Y,0)}function se(){let Y=i.length/3,Q=0;we(N,Q),Q+=N.length;for(let P=0,ve=L.length;P<ve;P++){let te=L[P];we(te,Q),Q+=te.length}n.addGroup(Y,i.length/3-Y,1)}function we(Y,Q){let P=Y.length;for(;--P>=0;){let ve=P,te=P-1;te<0&&(te=Y.length-1);for(let ye=0,he=h+m*2;ye<he;ye++){let Fe=B*ye,Me=B*(ye+1),R=Q+ve+Fe,b=Q+te+Fe,k=Q+te+Me,K=Q+ve+Me;X(R,b,k,K)}}}function le(Y,Q,P){c.push(Y),c.push(Q),c.push(P)}function De(Y,Q,P){ne(Y),ne(Q),ne(P);let ve=i.length/3,te=v.generateTopUV(n,i,ve-3,ve-2,ve-1);Te(te[0]),Te(te[1]),Te(te[2])}function X(Y,Q,P,ve){ne(Y),ne(Q),ne(ve),ne(Q),ne(P),ne(ve);let te=i.length/3,ye=v.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Te(ye[0]),Te(ye[1]),Te(ye[3]),Te(ye[1]),Te(ye[2]),Te(ye[3])}function ne(Y){i.push(c[Y*3+0]),i.push(c[Y*3+1]),i.push(c[Y*3+2])}function Te(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ma[i.type]().fromJSON(i)),new s(n,e.options)}},bv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(d,1-g),new ie(y,1-p)]:[new ie(a,1-c),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function wv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xe=class s extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new E,d=new E,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let A=I/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+_,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=h[p][v+1],_=h[p][v],I=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(x,_,A),(p!==n-1||c<Math.PI)&&f.push(_,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xt=class s extends dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let y=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let y=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(y,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ci=class s extends dt{constructor(e=new fa(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,c=new E,l=new ie,h=new E,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function y(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){h=e.getPointAt(x/t,h);let _=o.normals[x],I=o.binormals[x];for(let A=0;A<=i;A++){let C=A/i*Math.PI*2,T=Math.sin(C),w=-Math.cos(C);c.x=w*_.x+T*I.x,c.y=w*_.y+T*I.y,c.z=w*_.z+T*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=i;_++){let I=(i+1)*(x-1)+(_-1),A=(i+1)*x+(_-1),C=(i+1)*x+_,T=(i+1)*(x-1)+_;g.push(I,A,T),g.push(A,C,T)}}function v(){for(let x=0;x<=t;x++)for(let _=0;_<=i;_++)l.x=x/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ma[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ft=class extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ko(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ev(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function tf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Lf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jl=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ss,endingEnd:Ss}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Es:r=e,a=2*t-n;break;case qo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Es:o=e,c=2*n-t;break;case qo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+v*o[l+I]+x*o[c+I]+_*o[u+I];return r}},ya=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},jl=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Bs:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Bs;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Sv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Bs;var Pi=class extends vn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Fs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends vn{};xa.prototype.ValueTypeName="color";var ci=class extends vn{};ci.prototype.ValueTypeName="number";var Ql=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},li=class extends vn{InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends vn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Fs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends vn{};hi.prototype.ValueTypeName="vector";var Ys=class{constructor(e="",t=-1,n=[],i=bh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Av(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Ev(c);c=tf(c,1,h),l=tf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ci(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,y){if(f.length!==0){let m=[],p=[];Lf(f,m,p,g),m.length!==0&&y.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(let y in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];m.push(x.time),p.push(x.morphTarget===y?1:0)}i.push(new ci(".morphTargetInfluence["+y+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(hi,f+".position",d,"pos",i),n(li,f+".quaternion",d,"rot",i),n(hi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Tv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return hi;case"color":return xa;case"quaternion":return li;case"bool":case"boolean":return Pi;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Av(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tv(s.type);if(s.times===void 0){let t=[],n=[];Lf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},eh=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Rv=new eh,ui=class{constructor(e){this.manager=e!==void 0?e:Rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qn={},th=class extends Error{constructor(e,t){super(e),this.response=t}},qr=class extends ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Qn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{y+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let A=0,C=h.length;A<C;A++){let T=h[A];T.onProgress&&T.onProgress(I)}p.enqueue(_),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new th(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Si.add(e,l);let h=Qn[e];delete Qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Qn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var nh=class extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Or("img");function c(){h(),Si.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var _a=class extends ui{constructor(e){super(e)}load(e,t,n,i){let r=new Ot,o=new nh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$s=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ks=class extends $s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vc=new oe,nf=new E,sf=new E,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),Vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ih=class extends Yr{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},va=class extends $s{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rf=new oe,Sr=new E,Gc=new E,sh=class extends Yr{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),Gc.copy(n.position),Gc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gc),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf)}},Zs=class extends $s{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rh=class extends Yr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ui=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ma=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Si.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(e,c),r.manager.itemStart(e)}};var oh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;yt.multiplyQuaternionsFlat(e,o,e,t,e,n),yt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Th="\\[\\]\\.:\\/",Cv=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",Iv="[^"+Th.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Lv=/(WCOD+)?/.source.replace("WCOD",Iv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Nv=new RegExp("^"+Pv+Lv+Dv+Uv+"$"),Ov=["material","materials","bones","map"],ah=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(e){let t=Nv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=ah;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ch=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ss,endingEnd:Ss};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Mh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Em:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case bh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Sm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===vh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Es,i.endingEnd=Es):(e?i.endingStart=this.zeroSlopeAtStart?Es:Ss:i.endingStart=qo,t?i.endingEnd=this.zeroSlopeAtEnd?Es:Ss:i.endingEnd=qo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Fv=new Float32Array(1),ba=class extends oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new oh(pt.create(n,f,y),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ya(new Float32Array(2),new Float32Array(2),1,Fv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Ys.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new ch(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ys.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);var ze=60,Dn=Math.PI/180,Df=300,Uf=5,Zr=-46,js=-39,Nf=[{id:"hdb",name:"Toa Payoh Heartland",icon:"\u{1F3E2}",lat:20,lon:30,spawn:[-6,3.6,0]},{id:"hawker",name:"Lau Pa Sat",icon:"\u{1F35C}",lat:4,lon:90,spawn:[0,1.5,Math.PI]},{id:"chinatown",name:"Chinatown",icon:"\u{1F3EE}",lat:18,lon:150,spawn:[-12,0,Math.PI/2]},{id:"marina",name:"Marina Bay",icon:"\u{1F981}",lat:-6,lon:210,spawn:[-12,1.5,Math.PI/2]},{id:"gardens",name:"Gardens by the Bay",icon:"\u{1F333}",lat:14,lon:270,spawn:[-2,1.5,0]},{id:"sentosa",name:"Sentosa",icon:"\u{1F3D6}\uFE0F",lat:-30,lon:330,spawn:[0,1.5,0]}];function Of(s,e,t=new E){let n=(90-s)*Dn,i=e*Dn;return t.set(-Math.cos(i)*Math.sin(n),Math.cos(n),Math.sin(i)*Math.sin(n))}function Qs(s){let e=Math.asin(_t.clamp(s.y,-1,1))/Dn,t=Math.atan2(s.z,-s.x)/Dn;return t<0&&(t+=360),[e,t]}var Bv=new E(0,1,0);function er(s,e={}){e.up=(e.up||new E).copy(s).normalize();let t=(e.north||new E).copy(Bv).addScaledVector(e.up,-e.up.y);return t.lengthSq()<1e-8&&t.set(1,0,0),e.north=t.normalize(),e.east=(e.east||new E).crossVectors(e.north,e.up),e.south=(e.south||new E).copy(e.north).negate(),e}function Ff(s,e,t,n=new E){let i=Math.acos(_t.clamp(s.dot(e),-1,1));if(i<1e-6)return n.copy(s);let r=Math.sin(i);return n.copy(s).multiplyScalar(Math.sin((1-t)*i)/r).addScaledVector(e,Math.sin(t*i)/r).normalize()}function tr(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Bf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let g=Bf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Bf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new ct(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Rh(s,e){if(e===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kr||e===Sa){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Kr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var kf=new ft({vertexColors:!0,roughness:.82,metalness:0}),nr={};function kv(s){return nr[s]||(nr[s]=new Ft({vertexColors:!0}))}var ir={};function Ni(s,e){return ir[s]=e,e}var Ch=new Map;function Hv(s){let e=String(s);return Ch.has(e)||Ch.set(e,new ft({color:s,roughness:.8,metalness:0})),Ch.get(e)}function sr(s,e){let t=new Ue(s,Hv(e));return t.castShadow=!0,t.receiveShadow=!0,t}function zv(s){let e=new Array(s);for(let t=0;t<s;t++)e[t]=t;return e}var Ih=new E;function Vv(s){if(Ih.setFromMatrixPosition(s),Ih.lengthSq()<1)return"c";let[e,t]=Qs(Ih.normalize());return`${Math.floor((e+90)/30)}_${Math.floor(t/40)}`}var Jr=class{constructor(e=!0){this.chunked=e,this.buckets=new Map}add(e,t,n,i=0,r=null,o=null){let a=e.clone();!o&&a.attributes.uv&&a.deleteAttribute("uv"),a.attributes.uv1&&a.deleteAttribute("uv1"),a.index||a.setIndex(zv(a.attributes.position.count));let c=new Ae(t),l=a.attributes.position.count,h=new Float32Array(l*3);for(let f=0;f<l;f++)h[f*3]=c.r,h[f*3+1]=c.g,h[f*3+2]=c.b;a.setAttribute("color",new ct(h,3)),a.applyMatrix4(n);let u=r?`g:${r}`:o?`m:${o}`:"base",d=`${this.chunked?Vv(n):"c"}|${u}`;return this.buckets.has(d)||this.buckets.set(d,{kind:u,list:[]}),this.buckets.get(d).list.push(a),this}build(){let e=new $e;for(let{kind:t,list:n}of this.buckets.values()){let i=t==="base"?kf:t.startsWith("g:")?kv(t.slice(2)):ir[t.slice(2)],r=new Ue(tr(n),i||kf);n.forEach(a=>a.dispose());let o=!t.startsWith("g:");r.castShadow=o,r.receiveShadow=o,e.add(r)}return this.buckets.clear(),e}};function Oi(s){let e=new Jr(!1);return s(e),e.build()}var Gv=new nn;function Oe(s,e,t,n=0,i=0,r=0){return new oe().makeRotationFromEuler(Gv.set(n,i,r)).setPosition(s,e,t)}var jr=new E;function Mn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;jr.copy(e),jr[n]=0,jr.normalize();let l=.5*o/(o+a),h=1-jr.angleTo(s)/c;return Math.sign(jr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var rr=class extends Rt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new E,c=new E,l=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new E,y=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Mn(g,c,"z","y",r,n),d[p+1]=1-Mn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-Mn(g,c,"z","y",r,n),d[p+1]=1-Mn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-Mn(g,c,"x","z",r,e),d[p+1]=Mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Mn(g,c,"x","z",r,e),d[p+1]=1-Mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Mn(g,c,"x","y",r,e),d[p+1]=1-Mn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=Mn(g,c,"x","y",r,e),d[p+1]=1-Mn(g,c,"y","x",r,t);break}}};var Ra=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ui.extractUrlBase(e);o=Ui.resolveURL(l,this.path)}else o=Ui.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wf){try{o[Je.KHR_BINARY_GLTF]=new jh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ru(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new Nh;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Qh(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new eu;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new tu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Wv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uh=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Di(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Zs(h),l.distance=u;break;case"spot":l=new va(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Nh=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let i=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,et))}return Promise.all(i)}},Oh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,et)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$h=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kh=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zh=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Jh=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==bn.TRIANGLES&&l.mode!==bn.TRIANGLE_STRIP&&l.mode!==bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let y=new oe,m=new E,p=new yt,v=new E(1,1,1),x=new oa(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,y.compose(m,p,v));for(let _ in c)if(_==="_COLOR_0"){let I=c[_];x.instanceColor=new ji(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);St.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Wf="glTF",Qr=12,Hf={JSON:1313821514,BIN:5130562},jh=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Qr,r=new DataView(e,Qr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Hf.JSON){let l=new Uint8Array(e,Qr+o,a);this.content=n.decode(l)}else if(c===Hf.BIN){let l=Qr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Qh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=iu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=iu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=or[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let y=f.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(f)},a,l,qt,d)})})}},eu=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},tu=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Ca=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,y=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let _=0;_!==a;_++){let I=o[y+_+a],A=o[y+_+c]*h,C=o[g+_+a],T=o[g+_]*h;r[_]=v*I+x*A+m*C+p*T}return r}},Xv=new yt,nu=class extends Ca{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Xv.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:Wt,9729:en,9984:dh,9985:Ar,9986:ws,9987:Bn},Vf={33071:ni,33648:Ur,10497:ln},Ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qv={CUBICSPLINE:void 0,LINEAR:Bs,STEP:Fs},Lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function ts(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $v(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Kv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zv(s){let e,t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dh(t.attributes):e=s.indices+":"+Dh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Dh(s.targets[n]);return e}function Dh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var jv=new oe,ru=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new _a(this.options.manager):this.textureLoader=new Ma(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ts(r,a,i),di(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ui.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ph[i.type],a=or[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new ct(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ph[i.type],l=or[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(v);x||(y=new l(a,p*f,i.count*f/h),x=new Br(y,f/h),t.cache.add(v,x)),m=new kr(x,c,d%f/h,g)}else a===null?y=new l(i.count*c):y=new l(a,d,i.count*c),m=new ct(y,c,g);if(i.sparse!==void 0){let p=Ph.SCALAR,v=or[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,I=new v(o[1],x,i.sparse.count*p),A=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,T=I.length;C<T;C++){let w=I[C];if(m.setX(w,A[C*c]),c>=2&&m.setY(w,A[C*c+1]),c>=3&&m.setZ(w,A[C*c+2]),c>=4&&m.setW(w,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=zf[d.magFilter]||en,h.minFilter=zf[d.minFilter]||Bn,h.wrapS=Vf[d.wrapS]||ln,h.wrapT=Vf[d.wrapT]||ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==en,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Ot(y);m.needsUpdate=!0,d(m)}),t.load(Ui.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),di(u,o),u.userData.mimeType=o.mimeType||Jv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ln,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Qi,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ft}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){let u=i[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jt);let h=r.alphaMode||Lh.OPAQUE;if(h===Lh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Lh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ft&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft){let u=r.emissiveFactor;a.emissive=new Ae().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==Ft&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,et)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),di(u,r),t.associations.set(u,{materials:e}),r.extensions&&ts(i,u,r),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gf(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Zv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Gf(new dt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Yv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let y=h[f],m=o[f],p,v=l[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ia(y,v):new Ue(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?p.geometry=Rh(p.geometry,Sa):m.mode===bn.TRIANGLE_FAN&&(p.geometry=Rh(p.geometry,Kr));else if(m.mode===bn.LINES)p=new Xs(y,v);else if(m.mode===bn.LINE_STRIP)p=new Ws(y,v);else if(m.mode===bn.LINE_LOOP)p=new la(y,v);else if(m.mode===bn.POINTS)p=new Hn(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Kv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&ts(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ts(i,u[0],r),u[0];let d=new $e;r.extensions&&ts(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(_t.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Vs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new oe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ra(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){let _=d[v],I=f[v],A=g[v],C=y[v],T=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,I,A,C,T);if(w)for(let M=0;M<w.length;M++)p.push(w[M])}return new Ys(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new $e:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),di(h,r),r.extensions&&ts(n,h,r),r.matrix!==void 0){let u=new oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new $e;n.name&&(r.name=i.createUniqueName(n.name)),di(r,n),n.extensions&&ts(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof un||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Fi[r.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Fi[r.path]){case Fi.weights:l=ci;break;case Fi.rotation:l=li;break;case Fi.position:case Fi.scale:l=hi;break;default:switch(n.itemSize){case 1:l=ci;break;case 2:case 3:default:l=hi;break}break}let h=i.interpolation!==void 0?qv[i.interpolation]:Bs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Fi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=su(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof li?nu:Ca;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Qv(s,e,t){let n=e.attributes,i=new tn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){let h=su(or[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,c=new E;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=su(or[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Gf(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=iu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),di(s,e),Qv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$v(s,e.targets,t):s})}function ou(s){let e=new Map,t=new Map,n=s.clone();return Xf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Xf(s.children[n],e.children[n],t)}var qf={car:["ambulance","delivery","garbage-truck","hatchback-sports","police","sedan","sedan-sports","suv","taxi","van"],"city-commercial":["building-a","building-b","building-c","building-d","building-e","building-f","building-g","building-h","building-i","building-j","building-k","building-l","building-m","building-n","building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e","detail-awning","detail-awning-wide","detail-overhang","detail-overhang-wide","detail-parasol-a","detail-parasol-b","low-detail-building-a","low-detail-building-b","low-detail-building-c","low-detail-building-d","low-detail-building-e","low-detail-building-f","low-detail-building-g","low-detail-building-h","low-detail-building-i","low-detail-building-j","low-detail-building-k","low-detail-building-l","low-detail-building-m","low-detail-building-n","low-detail-building-wide-a","low-detail-building-wide-b"],"city-roads":["construction-barrier","construction-cone","dumpster","light-curved","light-curved-double","light-square","road-sign-street","road-sign-warning","sign-highway","traffic-light"],"city-suburban":["fence-low","path-stones-short","planter","tree-large","tree-small"],food:["bag","banana","barrel","bowl","bowl-broth","bowl-soup","bread","cake","chinese","chopstick","cocktail","coconut","coconut-half","cooking-spatula","cup-coffee","cup-saucer","cup-tea","cutting-board-japanese","dim-sum","egg","egg-cooked","egg-half","fish","frappe","frying-pan","glass","ice-cream","ice-cream-cup","lemon","loaf","meat-ribs","mug","mussel","orange","pancakes","pineapple","plate","plate-dinner","popsicle","pot","pot-stew","rice-ball","skewer","skewer-vegetables","soda-bottle","soda-can","soy","steamer","watermelon"],furniture:["bench","benchCushion","books","cardboardBoxClosed","cardboardBoxOpen","ceilingFan","chair","chairRounded","kitchenBlender","kitchenCabinet","kitchenCoffeeMachine","kitchenFridge","kitchenFridgeLarge","kitchenMicrowave","kitchenSink","kitchenStove","lampRoundFloor","loungeChair","loungeChairRelax","plantSmall1","plantSmall2","plantSmall3","pottedPlant","radio","sideTable","speaker","stoolBar","table","tableRound","televisionVintage","trashcan"],"mini-characters":["character-female-a","character-female-b","character-female-c","character-female-d","character-female-e","character-female-f","character-male-a","character-male-b","character-male-c","character-male-d","character-male-e","character-male-f"],nature:["crops_bambooStageB","flower_purpleA","flower_purpleB","flower_redA","flower_redB","flower_yellowA","flower_yellowB","grass","grass_large","grass_leafs","grass_leafsLarge","hanging_moss","lily_large","lily_small","log","mushroom_red","plant_bush","plant_bushDetailed","plant_bushLarge","plant_bushSmall","plant_flatShort","plant_flatTall","pot_large","pot_small","rock_largeA","rock_largeB","rock_smallA","rock_smallB","rock_smallC","rock_tallA","stone_largeA","stone_smallA","stump_round","tree_default","tree_detailed","tree_detailed_dark","tree_fat","tree_oak","tree_oak_dark","tree_palmBend","tree_palmDetailedShort","tree_palmDetailedTall","tree_palmTall","tree_plateau","tree_plateau_dark","tree_simple","tree_small","tree_tall","tree_tall_dark"]};var Ia=new Map,au=new Map,Yf={"nature/leafsGreen":"#58a83f","nature/leafsDark":"#2f8038","nature/grass":"#74c04c","nature/woodBark":"#8d5b3b","nature/woodBarkDark":"#6e4630","nature/stone":"#b8b2a6","nature/dirt":"#9a7656"};async function Zf(s){let e=new Ra,t=[];for(let[o,a]of Object.entries(qf))for(let c of a)t.push([o,c]);let n=0,i=0,r=async()=>{for(;i<t.length;){let[o,a]=t[i++];for(let c=0;c<4;c++)try{t1(o,a,await e.loadAsync(`assets/kenney/${o}/${a}.glb`));break}catch(l){c===3?console.warn(`model ${o}/${a} failed to load`,l?.message||l):await new Promise(h=>setTimeout(h,300*(c+1)))}s?.(++n/t.length)}};await Promise.all(Array.from({length:8},r))}function $f(s,e){let t=`${s}/${e.name}`;return au.has(t)?au.get(t):(e.metalness=0,e.roughness=Math.max(.65,e.roughness??1),Yf[t]&&e.color.set(Yf[t]),e.map&&(e.map.anisotropy=4),au.set(t,e),e)}function t1(s,e,t){let n=t.scene;n.updateMatrixWorld(!0);let i=[],r=!1;n.traverse(a=>{a.isMesh&&(a.material=Array.isArray(a.material)?a.material.map(c=>$f(s,c)):$f(s,a.material),a.castShadow=!0,a.receiveShadow=!0,a.isSkinnedMesh?r=!0:i.push({geo:a.geometry,mat:a.material,m:a.matrixWorld.clone()}))});let o=new tn().setFromObject(n);Ia.set(e,{scene:n,parts:i,box:o,size:o.getSize(new E),anims:t.animations,skinned:r,pack:s})}function Jf(s){return Ia.has(s)}function ar(s){let e=Ia.get(s);if(!e)throw new Error(`unknown model "${s}"`);return e}function eo(s,e={}){let t=ar(s),n=e.s??1;e.h&&(n=e.h/t.size.y),e.w&&(n=e.w/Math.max(t.size.x,t.size.z));let i=Array.isArray(n)?new E(...n):new E(n,n,n),r=t.box.getCenter(new E),o=new E(e.center?-r.x:0,e.ground===!1?0:-t.box.min.y,e.center?-r.z:0);return{mat:new oe().makeScale(i.x,i.y,i.z).multiply(new oe().makeTranslation(o.x,o.y,o.z)),scale:i}}function Kf(s){let e=new E().setFromMatrixPosition(s).normalize(),[t,n]=Qs(e);return`${Math.floor((t+90)/30)}_${Math.floor(n/40)}`}var cu=class{constructor(){this.buckets=new Map}add(e,t,n={}){if(!Ia.has(e)){console.warn("missing model",e);return}let i=`${e}|${Kf(t)}|${n.shadow!==!1}`;this.buckets.has(i)||this.buckets.set(i,{name:e,chunk:Kf(t),list:[],shadow:n.shadow!==!1}),this.buckets.get(i).list.push(t.clone())}build(){let e=new Map,t=new oe;for(let{name:i,chunk:r,list:o,shadow:a}of this.buckets.values())for(let c of ar(i).parts){let l=Object.keys(c.geo.attributes).sort().join(",")+(c.geo.index?":i":":n"),h=`${r}|${c.mat.uuid}|${a}|${l}`;e.has(h)||e.set(h,{mat:c.mat,shadow:a,geos:[]});let u=e.get(h);for(let d of o)u.geos.push(c.geo.clone().applyMatrix4(t.multiplyMatrices(d,c.m)))}let n=new $e;for(let{mat:i,shadow:r,geos:o}of e.values()){let a=tr(o);if(o.forEach(l=>l.dispose()),!a)continue;let c=new Ue(a,i);c.castShadow=r,c.receiveShadow=!0,n.add(c)}return this.buckets.clear(),n}},Pa=new cu;function La(s){let e=ar(s);return e.skinned?ou(e.scene):e.scene.clone(!0)}function jf(s){let e=ar(s),t=ou(e.scene);t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.frustumCulled=!1)});let n=new ba(t),i={};for(let r of e.anims)i[r.name]=n.clipAction(r);return{root:t,mixer:n,actions:i,height:e.size.y}}function fi(s=1){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var Da=new oe,np=new oe,n1=new nn,i1=new E,lu=new E,Qf=new E,hu=class s{constructor(e,t=0,n=0,i=0){this.site=e,this.ox=t,this.oz=n,this.orot=i,this.c=Math.cos(i),this.s=Math.sin(i)}tf(e,t){return[this.ox+e*this.c+t*this.s,this.oz-e*this.s+t*this.c]}sub(e,t,n=0){let[i,r]=this.tf(e,t);return new s(this.site,i,r,this.orot+n)}dir(e,t,n){let[i,r]=this.tf(e,t);return this.site.dirAt(i,r,n)}matrix(e,t,n=0,i=0,r=0,o=0,a=new oe){let[c,l]=this.tf(e,t);return this.site.frameMatrix(c,l,this.orot+n,a),Da.makeRotationFromEuler(n1.set(r,0,o)),Da.setPosition(0,i,0),a.multiply(Da)}put(e,t,n,i=0,r=0){return this.matrix(t,n,i,r).decompose(e.position,e.quaternion,e.scale),e}add(e,t,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,r,o.rx||0,o.rz||0);return o.ry&&a.multiply(np.makeRotationY(o.ry)),this.site.b.add(e,t,a,0,o.glow,o.mat),this}box(e,t,n,i,r,o,a={}){return this.add(new Rt(n,i,r),o,e,t,(a.y||0)+i/2,a)}rbox(e,t,n,i,r,o,a={}){let c=Math.min(a.r??.08,n/2,i/2,r/2);return this.add(new rr(n,i,r,a.segs??2,c),o,e,t,(a.y||0)+i/2,a)}lathe(e,t,n,i,r={}){let o=new Ri(n.map(([a,c])=>new ie(a,c)),r.seg||24);return(r.sx||r.sz)&&o.scale(r.sx||1,1,r.sz||1),this.add(o,i,e,t,r.y||0,r)}extrude(e,t,n,i,r,o={}){let a=new qs(n,{depth:i,bevelEnabled:!!o.bevel,bevelSize:o.bevel||0,bevelThickness:o.bevel||0,bevelSegments:2,curveSegments:o.curveSeg||12});return a.rotateX(-Math.PI/2),this.add(a,r,e,t,o.y||0,o)}tube(e,t,n,i,r,o={}){let a=new _n(n.map(c=>new E(...c)),!!o.closed);return this.add(new Ci(a,o.tseg||Math.max(8,n.length*6),i,o.rseg||6,!!o.closed),r,e,t,0,o)}model(e,t,n,i={}){if(!Jf(e))return this;let{mat:r,scale:o}=eo(e,i),a=this.matrix(t,n,i.rot||0,i.y||0,i.rx||0,i.rz||0).multiply(r);return Pa.add(e,a,i),i.solid&&this.modelSolid(e,t,n,i,o),this}spawn(e,t,n,i={}){let r=new $e,o=La(e),{mat:a}=eo(e,i);return a.decompose(o.position,o.quaternion,o.scale),r.add(o),this.put(r,t,n,i.rot||0,i.y||0),this.site.group.add(r),r}modelSolid(e,t,n,i,r){if(Array.isArray(i.solid))return this.solid(t,n,i.solid[0],i.solid[1],i.rot||0);let o=ar(e).size,a=o.x*r.x,c=o.z*r.z;return i.solid==="circle"?this.solidCircle(t,n,Math.min(a,c)*.35):this.solid(t,n,a*.9,c*.9,i.rot||0)}cyl(e,t,n,i,r,o,a={}){let c=new Ze(n,i,r,a.seg||12);return a.spin&&c.rotateY(a.spin),this.add(c,o,e,t,(a.y||0)+r/2,a)}cone(e,t,n,i,r,o={}){let a=new zn(n,i,o.seg||12);return o.spin&&a.rotateY(o.spin),o.sz&&a.scale(1,1,o.sz),this.add(a,r,e,t,(o.y||0)+i/2,o)}ball(e,t,n,i,r={}){let o=r.sy||1,a=new Xe(n,r.seg||12,r.hseg||8);return(r.sx||r.sy||r.sz)&&a.scale(r.sx||1,o,r.sz||1),this.add(a,i,e,t,(r.y||0)+n*o,r)}dome(e,t,n,i,r={}){let o=new Xe(n,r.seg||24,r.hseg||10,0,Math.PI*2,0,Math.PI/2);return r.sy&&o.scale(1,r.sy,1),this.add(o,i,e,t,r.y||0,r)}raw(e,t,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,0).multiply(r);return this.site.b.add(e,t,a,0,o.glow,o.mat),this}solid(e,t,n,i,r=0){let[o,a]=this.tf(e,t),c=this.orot+r;return this.site.colliders.push({x:o,z:a,hw:n/2,hd:i/2,c:Math.cos(c),s:Math.sin(c)}),this}camSolid(e,t,n,i,r=0){return this.solid(e,t,n,i,r),this.site.colliders[this.site.colliders.length-1].camOnly=!0,this}solidCircle(e,t,n){let[i,r]=this.tf(e,t);return this.site.colliders.push({x:i,z:r,r:n}),this}paintRect(e,t,n,i,r,o=0,a=!1){let c=this.sub(e,t,o),l=[[-n/2,-i/2],[n/2,-i/2],[n/2,i/2],[-n/2,i/2]].map(([h,u])=>c.tf(h,u));return(a?this.site.paintsOver:this.site.paints).push({pts:l,color:r}),this}paintCircle(e,t,n,i,r=!1){let o=[];for(let a=0;a<48;a++){let c=a/48*Math.PI*2;o.push(this.tf(e+Math.cos(c)*n,t+Math.sin(c)*n))}return(r?this.site.paintsOver:this.site.paints).push({pts:o,color:i}),this}water(e,t,n,i="#4fb0d8"){return this.paintCircle(e,t,n+.5,"#bfe6f2"),this.paintCircle(e,t,n,i),this.site.world.addWater(this.dir(e,t),n),this}sign(e,t,n,i={}){let r=i.w||3,o=i.h||.8,a=i.y??2,c=i.rot||0;i.board!==!1&&this.box(e,t,r+.2,o+.2,.12,i.frame||"#3a3340",{y:a-o/2-.1,rot:c,ol:.03});let l=new Ue(new sn(r,o),new Ft({map:s1(n,i,r/o),toneMapped:!1})),h=this.matrix(e,t,c,a);return h.multiply(Da.makeTranslation(0,0,i.board!==!1?.07:.02)),h.decompose(l.position,l.quaternion,l.scale),this.site.group.add(l),l}},Gn=class extends hu{constructor(e,t,n){super(null),this.site=this,this.b=t,this.group=n,this.center=e.clone().normalize();let i=er(this.center);this.east=i.east,this.south=i.south}dirAt(e,t,n=new E){return n.copy(this.center).multiplyScalar(ze).addScaledVector(this.east,e).addScaledVector(this.south,t).normalize()}frameMatrix(e,t,n,i){let r=this.dirAt(e,t,i1);return lu.copy(this.east).addScaledVector(r,-r.dot(this.east)).normalize(),Qf.crossVectors(lu,r),i.makeBasis(lu,r,Qf),n&&i.multiply(np.makeRotationY(n)),i.setPosition(r.x*ze,r.y*ze,r.z*ze),i}toLocal(e){let t=ze/e.dot(this.center);return[t*e.dot(this.east),t*e.dot(this.south)]}},Ua=class extends Gn{constructor(e,t,n){super(Of(e.lat,e.lon),t,new $e),this.def=e,this.id=e.id,this.world=n,this.colliders=[],this.paints=[],this.paintsOver=[],this.spots={},this.coins=[],this.updaters=[],this.cosNear=Math.cos(34/ze),n.sites.push(this)}hit(e,t){if(e.dot(this.center)<this.cosNear)return!1;let[n,i]=this.toLocal(e);for(let r of this.colliders){if(r.camOnly)continue;let o=n-r.x,a=i-r.z;if(r.r!==void 0){let c=r.r+t;if(o*o+a*a<c*c)return!0}else{let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw+t&&Math.abs(l)<r.hd+t)return!0}}return!1}near(e,t){return e.dot(this.center)>Math.cos(t/ze)}},ep='"Baloo 2", "Nunito", system-ui, sans-serif',tp=["#e2383f","#f39c32","#f3c93a","#4caf50","#2f8fd8","#8e5ad8"];function s1(s,e={},t=4){let i=Math.max(64,Math.round(512/t)),r=document.createElement("canvas");r.width=512,r.height=i;let o=r.getContext("2d");if(o.fillStyle=e.bg||"#2e7d5b",o.fillRect(0,0,512,i),e.border!==!1){o.strokeStyle=e.fg||"#fff",o.lineWidth=Math.max(3,i*.05);let u=i*.09;o.strokeRect(u,u,512-2*u,i-2*u)}let a=String(s).split(`
`),c=i*.62/a.length;o.font=`800 ${c}px ${ep}`;let l=Math.max(...a.map(u=>o.measureText(u).width));l>512*.86&&(c*=512*.86/l),o.font=`800 ${c}px ${ep}`,o.textBaseline="middle",a.forEach((u,d)=>{let f=i/2+(d-(a.length-1)/2)*c*1.08+c*.06;if(e.rainbow){o.textAlign="left";let g=512/2-o.measureText(u).width/2;[...u].forEach((y,m)=>{o.fillStyle=tp[m%tp.length],o.fillText(y,g,f),g+=o.measureText(y).width})}else o.textAlign="center",o.fillStyle=e.fg||"#fff",o.fillText(u,512/2,f)});let h=new Xt(r);return h.colorSpace=et,h.anisotropy=4,h}var Na=class{constructor(){this.sites=[],this.circles=[],this.waters=[],this.acts=[],this.seaY=Math.sin(Zr*Dn)}addCircle(e,t,n=.45){this.circles.push({d:e.clone(),cos:Math.cos((t+n)/ze)})}addWater(e,t){this.waters.push({d:e.clone(),r:t,cos:Math.cos(t/ze)})}isWater(e){if(e.y<this.seaY)return!0;for(let t of this.waters)if(e.dot(t.d)>t.cos)return!0;return!1}blocked(e,t=.45){if(this.isWater(e))return!0;for(let n of this.circles)if(e.dot(n.d)>n.cos)return!0;for(let n of this.sites)if(n.hit(e,t))return!0;return!1}camBlocked(e){for(let t of this.sites){if(e.dot(t.center)<t.cosNear)continue;let[n,i]=t.toLocal(e);for(let r of t.colliders){let o=n-r.x,a=i-r.z;if(r.r!==void 0){if(r.r>1.2&&o*o+a*a<r.r*r.r)return!0}else if(r.hw>.6&&r.hd>.6){let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw&&Math.abs(l)<r.hd)return!0}}}return!1}addAct(e){return this.acts.push(e),e}nearestAct(e){let t=null,n=1/0;for(let i of this.acts){if(i.show&&!i.show())continue;let r=Math.acos(Math.min(1,e.dot(i.dir)))*ze;r<i.r&&r<n&&(t=i,n=r)}return t}};function Bt(s,e=0){let t=new Ae(s),n={};return t.getHSL(n,et),t.setHSL(n.h,n.s,_t.clamp(n.l+e,0,1),et),"#"+t.getHexString()}var uu=1,Un=()=>(uu=uu*16807%2147483647,uu/2147483647),ns=s=>s[Un()*s.length|0];function Wn(s,e,t,n=1){let i=(4.6+Un()*1.6)*n;s.model(ns(["tree_plateau","tree_plateau_dark"]),e,t,{s:[i,(3.6+Un())*n,i],rot:Un()*6.3}),s.solidCircle(e,t,.35)}function cr(s,e,t,n=1){s.model(ns(["tree_palmDetailedTall","tree_palmTall","tree_palmBend"]),e,t,{h:(5.4+Un()*1.4)*n,rot:Un()*6.3})}function Xn(s,e,t,n=1,i=!1){if(s.model(ns(["plant_bushDetailed","plant_bush","plant_bushLarge"]),e,t,{h:.8*n,rot:Un()*6.3}),i)for(let r=0;r<3;r++)s.model(ns(["flower_redA","flower_purpleA","flower_yellowA"]),e+(Un()-.5)*1.2,t+(Un()-.5)*1.2,{h:.5,shadow:!1})}function jt(s,e,t,n,i,r=0){let o=s.sub(e,t,r);o.rbox(0,0,n,.45,i,"#c9c1b2",{r:.06}),o.box(0,0,n-.2,.06,i-.2,"#6b4f36",{y:.42});let a=Math.max(1,Math.round(n/1.1));for(let c=0;c<a;c++){let l=-n/2+(c+.5)*(n/a);o.model(ns(["plant_bushDetailed","plant_bushSmall","flower_redA","flower_purpleB","flower_yellowA"]),l,0,{h:.55+Un()*.35,y:.42,rot:Un()*6.3,shadow:!1})}o.solid(0,0,n,i)}function wn(s,e,t,n=0){s.model("light-curved",e,t,{h:4.8,rot:n}),s.sub(e,t,n).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"})}function Yt(s,e,t,n=0,i="#b9874f"){let r=s.sub(e,t,n);for(let o=0;o<4;o++)r.rbox(0,.15-o*.12,1.9,.06,.1,i,{y:.45,r:.02});for(let o=0;o<3;o++)r.rbox(0,-.27,1.9,.09,.05,i,{y:.62+o*.13,rx:-.12,r:.02});for(let o of[-.8,.8])r.rbox(o,0,.07,.45,.42,"#3e4650",{r:.02}),r.rbox(o,-.28,.07,.5,.06,"#3e4650",{y:.45,r:.02});r.solid(0,0,1.9,.5)}function is(s,e,t,n="#ece6da",i="#d24b3e"){s.lathe(e,t,[[0,0],[.32,0],[.34,.04],[.1,.1],[.07,.68],[.12,.7],[0,.7]],"#8a8f96",{seg:16}),s.lathe(e,t,[[0,.7],[.62,.7],[.66,.73],[.66,.77],[.6,.79],[0,.79]],n,{seg:28});for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4,a=e+Math.cos(o)*.98,c=t+Math.sin(o)*.98;s.lathe(a,c,[[0,0],[.16,0],[.06,.06],[.05,.38],[.2,.4],[.21,.46],[0,.47]],i,{seg:16})}s.solidCircle(e,t,1)}function ss(s,e,t,n,i,r,o={}){let a=s.sub(e,t,n);a.rbox(0,0,2.3,.95,1,i,{y:.25,r:.06}),a.rbox(0,.05,2.42,.07,1.12,Bt(i,-.12),{y:1.2,r:.03}),a.rbox(0,.3,2.1,.35,.5,"#d9eef5",{y:1.27,r:.04});for(let c of[-.85,.85])a.cyl(c,.52,.22,.22,.08,"#2a2a30",{y:.22,rx:Math.PI/2,seg:16}),a.cyl(c,.57,.1,.1,.02,"#c9cdd2",{y:.22,rx:Math.PI/2,seg:12});for(let c of[-1.12,1.12])for(let l of[-.48,.48])a.cyl(c,l,.035,.035,1.6,"#d9d9d9",{y:1.25,seg:6});a.rbox(0,0,2.75,.1,1.75,r,{y:2.85,r:.04});for(let c=0;c<9;c++)a.cyl(-1.3+c*.325,.88,.16,.16,.06,c%2?"#ffffff":r,{y:2.68,rx:Math.PI/2,seg:10});if(o.grill){a.rbox(0,-.15,1.6,.12,.5,"#2a2a2a",{y:1.22,r:.02}),a.box(0,-.15,1.45,.04,.4,"#ff7a2e",{y:1.33,glow:"win"});for(let c=0;c<7;c++)a.model("skewer",-.6+c*.2,-.15,{w:.5,y:1.38,rot:Math.PI/2,shadow:!1})}o.label&&a.sign(0,.92,o.label,{w:2.2,h:.45,y:2.42,bg:o.signBg||r,board:!1}),a.solid(0,0,2.3,1)}function ip(s,e,t,n){s.cyl(e,t,.035,.035,2.5,"#eeeeee",{seg:8});let i=[[0,2.85],[.4,2.81],[.8,2.69],[1.2,2.51],[1.5,2.33]];s.lathe(e,t,i,"#f4efe6",{seg:16}),s.lathe(e,t,[...i].reverse(),n,{seg:16});for(let r=0;r<8;r++){let o=r/8*Math.PI*2;s.ball(e+Math.cos(o)*1.5,t+Math.sin(o)*1.5,.05,"#ffffff",{y:2.33})}s.ball(e,t,.07,"#ffffff",{y:2.85})}function Oa(s,e,t,n,i){let r=s.sub(e,t,n),o=i.w,a=i.d,c=i.floors,l=2.6,h=3,u=1.1,d=h+c*l,f=i.base||"#f4ecdb",g=i.accent,y=fi(i.seed||3),m=Math.round(o/2.4);for(let v=0;v<=m;v++){let x=-o/2+.4+v*(o-.8)/m;for(let _ of[-a/2+.4,a/2-.4]){let I=(x*x+_*_)/120;r.rbox(x,_,.55,h+I,.55,"#efe6d2",{r:.05}),r.solid(x,_,.55,.55)}}if(r.box(0,0,o-.6,.05,a-.6,"#cdbfa6",{y:.01}),!i.filler){r.rbox(-o/2+1.6,-a/2+.75,2.2,1.6,.35,"#9aa4ad",{r:.04});for(let _=0;_<5;_++)for(let I=0;I<4;I++)r.box(-o/2+.8+_*.4,-a/2+.94,.34,.3,.02,"#c3ccd4",{y:.2+I*.36});let v=o/2-3,x=.2;r.lathe(v,x,[[0,0],[.25,0],[.18,.08],[.16,.65],[.55,.68],[.55,.76],[0,.76]],"#b9b4aa",{seg:20}),r.box(v,x,.6,.01,.6,"#f3e1b0",{y:.765});for(let _=0;_<4;_++){let I=_*Math.PI/2;r.lathe(v+Math.cos(I)*.85,x+Math.sin(I)*.85,[[0,0],[.2,0],[.16,.42],[.2,.45],[0,.46]],"#b9b4aa",{seg:12})}r.solidCircle(v,x,1)}r.box(0,-u/2,o,d-h,a-u,f,{y:h});for(let v=0;v<=c;v++)r.rbox(0,0,o+.24,.26,a+.24,v===0?Bt(g,-.05):g,{y:h+v*l-.13,r:.05});let p=Math.floor((o-2.6)/1.75);for(let v=0;v<c;v++){let x=h+v*l;r.box(0,a/2-.08,o-.1,1,.16,f,{y:x+.13}),r.box(0,a/2-.08,o-.1,.06,.2,"#8f99a3",{y:x+1.13});for(let _=0;_<p;_++){let I=-o/2+1.4+_*1.75,A=y()<.5;if(_%2===0)r.box(I,a/2-u+.02,.85,1.95,.06,ns(["#7a4b33","#5b6b4a","#4a5c7a","#8a3b3b"]),{y:x+.13}),r.box(I,a/2-u+.04,.95,2.05,.03,"#d9d4c7",{y:x+.13});else{r.box(I,a/2-u+.02,.95,.95,.05,A?"#ffe2a0":"#93a9bd",{y:x+1.05,glow:"win"});for(let T=0;T<4;T++)r.box(I-.36+T*.24,a/2-u+.06,.03,.95,.03,"#c9ced4",{y:x+1.05})}let C=-a/2-.02;r.box(I,C,1.15,1.2,.06,y()<.55?"#ffe2a0":"#93a9bd",{y:x+.9,glow:"win"});for(let T=0;T<5;T++)r.box(I-.48+T*.24,C-.04,.03,1.2,.03,"#d6d9dc",{y:x+.9});if(r.box(I,C-.04,1.2,.04,.05,"#d6d9dc",{y:x+1.48}),y()<.45&&(r.rbox(I+.95,C-.25,.55,.42,.32,"#f2f2f2",{y:x+.25,r:.04}),r.cyl(I+.95,C-.42,.13,.13,.02,"#8d949b",{y:x+.46,rx:Math.PI/2,seg:12})),y()<.4){for(let T=0;T<3;T++)r.cyl(I-.4+T*.4,C-.7,.025,.025,1.4,"#b58a52",{y:x+2.1,rx:Math.PI/2,seg:5});for(let T=0;T<4;T++){let w=I-.4+T%3*.4,M=C-.35-y()*.8;r.box(w,M,.05,.45+y()*.3,.38,ns(["#e2383f","#2f8fd8","#f3c13a","#ffffff","#8e5ad8","#3fae49"]),{y:x+1.5})}}}}r.rbox(o/2+.6,-.2,1.8,d-h+1.6,a+.4,g,{y:h-.4,r:.08});for(let v=0;v<c;v++)r.box(o/2+.6,a/2+.02,.9,1.4,.05,"#cfe1ea",{y:h+v*l+.6,glow:"win"});r.solid(o/2+.6,-.2,1.8,a+.4),r.rbox(0,0,o+.4,.55,a+.4,g,{y:d,r:.06}),r.rbox(-o/2+2.2,-.3,2.6,1.6,2.2,"#d9d2c4",{y:d+.55,r:.1}),r.cyl(o/2-2,0,.04,.04,2.2,"#888",{y:d+.55,seg:5}),r.camSolid(0,0,o,a),i.no&&r.sub(-o/2-.01,0,-Math.PI/2).sign(0,0,`BLK
${i.no}`,{w:2.2,h:1.6,y:d-1.8,bg:g,board:!1,border:!1})}function r1(){if(ir.hdbfacade)return"hdbfacade";let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,64),e.fillStyle="#d8d8d8",e.fillRect(0,54,64,10),e.fillStyle="#bfc5c9",e.fillRect(10,14,44,32),e.fillStyle="#5f7f99",e.fillRect(13,17,38,26),e.fillStyle="#86a5bd",e.fillRect(13,17,38,9),e.fillStyle="#e6e6e6";for(let n of[22,32,42])e.fillRect(n,17,2,26);let t=new Xt(s);return t.colorSpace=et,t.wrapS=t.wrapT=ln,t.anisotropy=4,Ni("hdbfacade",new ft({map:t,vertexColors:!0,roughness:.85})),"hdbfacade"}function du(s,e,t,n,i){let r=s.sub(e,t,n),o=r1(),a=i.w,c=i.d,l=i.floors,h=2.6,u=2.6,d=u+l*h,f=i.base||"#f4ecdb",g=i.accent;for(let y of[-a/2+.4,-a/6,a/6,a/2-.4])for(let m of[-c/2+.4,c/2-.4])r.box(y,m,.5,u+(y*y+m*m)/120,.5,"#efe6d2");r.box(0,0,a-.3,d-u,c-.3,f,{y:u});for(let y of[-1,1]){let m=new sn(a-.3,d-u),p=m.attributes.uv;for(let v=0;v<p.count;v++)p.setXY(v,p.getX(v)*Math.round(a/1.8),p.getY(v)*l);r.add(m,f,0,y*(c/2-.13),u+(d-u)/2,{mat:o,rot:y>0?0:Math.PI})}for(let y=0;y<=l;y++)r.box(0,0,a+.1,.2,c+.1,y%3===0?g:Bt(g,.12),{y:u+y*h-.1});r.box(a/2+.6,0,1.6,d-u+1.4,c*.7,g,{y:u-.2}),r.box(0,0,a+.3,.5,c+.3,g,{y:d}),r.box(-a/2+2,0,2.4,1.4,c*.5,"#d9d2c4",{y:d+.5})}var Ct=4096,rn=2048,to=Ct/(2*Math.PI*ze),sp=.5;function o1(s){let e=[];for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];for(let c=-16;c<16;c+=sp)e.push(n.dirAt(c,0));let r=n.dirAt(16,0),o=i.dirAt(-16,0),a=Math.max(1,Math.ceil(r.angleTo(o)*ze/sp));for(let c=0;c<a;c++)e.push(Ff(r,o,c/a))}return e}function rp(s){let[e,t]=Qs(s);return[t/360*Ct,(90-e)/180*rn]}function lp(s){let e=[s[0].slice()];for(let t=1;t<s.length;t++){let[n,i]=s[t],r=e[t-1][0];for(;n-r>Ct/2;)n-=Ct;for(;r-n>Ct/2;)n+=Ct;e.push([n,i])}return e}function op(s,e,t){let n=lp(e);s.fillStyle=t;for(let i of[-Ct,0,Ct])s.beginPath(),n.forEach(([r,o],a)=>a?s.lineTo(r+i,o):s.moveTo(r+i,o)),s.closePath(),s.fill()}function fu(s,e,t,n,i=null){let r=lp(e);s.strokeStyle=t,s.lineWidth=n,s.lineJoin=s.lineCap=i?"butt":"round",s.setLineDash(i||[]);for(let o of[-Ct,0,Ct])s.beginPath(),r.forEach(([a,c],l)=>l?s.lineTo(a+o,c):s.moveTo(a+o,c)),s.stroke();s.setLineDash([])}function a1(s,e,t){let n=document.createElement("canvas");n.width=Ct,n.height=rn;let i=n.getContext("2d"),r=fi(7);i.fillStyle="#95c96f",i.fillRect(0,0,Ct,rn);let o=["#8cc26a","#9fd178","#86bb63","#a5d47f","#91c86d"];for(let m=0;m<1400;m++)i.fillStyle=o[r()*o.length|0],i.globalAlpha=.45,i.beginPath(),i.ellipse(r()*Ct,r()*rn,15+r()*70,10+r()*40,r()*Math.PI,0,Math.PI*2),i.fill();i.globalAlpha=1;let a=48/180*rn,c=i.createLinearGradient(0,0,0,a);c.addColorStop(0,"#5d9a4c"),c.addColorStop(.7,"rgba(98,160,80,0.7)"),c.addColorStop(1,"rgba(98,160,80,0)"),i.fillStyle=c,i.fillRect(0,0,Ct,a);let l=(90-js)/180*rn,h=(90-Zr)/180*rn,u=(m,p)=>Math.sin(m*.011+p)*9+Math.sin(m*.037+p*2)*5;i.fillStyle="#f1dfa8",i.beginPath(),i.moveTo(0,rn);for(let m=0;m<=Ct;m+=16)i.lineTo(m,l+u(m,1));i.lineTo(Ct,rn),i.closePath(),i.fill(),i.fillStyle="#c9eef8",i.beginPath(),i.moveTo(0,rn);for(let m=0;m<=Ct;m+=16)i.lineTo(m,h-7+u(m,3));i.lineTo(Ct,rn),i.closePath(),i.fill();let d=i.createLinearGradient(0,h,0,rn);d.addColorStop(0,"#5bbde0"),d.addColorStop(.35,"#3f9fd0"),d.addColorStop(1,"#2f7fc0"),i.fillStyle=d,i.beginPath(),i.moveTo(0,rn);for(let m=0;m<=Ct;m+=16)i.lineTo(m,h+u(m,3));i.lineTo(Ct,rn),i.closePath(),i.fill();let f=(m,p)=>p.map(([v,x])=>rp(m.dirAt(v,x)));for(let m of s.sites)for(let p of m.paints)op(i,f(m,p.pts),p.color);let g=e.map(m=>rp(m));g.push(g[0]),fu(i,g,"#ddd6c6",6.6*to),fu(i,g,"#5f6672",4.4*to),fu(i,g,"#f5efdc",.22*to,[1.6*to,1.6*to]);for(let m of s.sites)for(let p of m.paintsOver)op(i,f(m,p.pts),p.color);let y=new Xt(n);return y.colorSpace=et,y.anisotropy=t,y}var ap=["tree_plateau","tree_plateau_dark"],c1=["tree_detailed","tree_oak","tree_fat","tree_default","tree_tall","tree_detailed_dark","tree_oak_dark","tree_tall_dark"],l1=["tree_palmDetailedTall","tree_palmTall","tree_palmBend","tree_palmDetailedShort"],h1=["plant_bushDetailed","plant_bush","plant_bushLarge","plant_bushSmall"],u1=["flower_redA","flower_redB","flower_purpleA","flower_purpleB","flower_yellowA","flower_yellowB"],d1=["grass","grass_large","grass_leafs","grass_leafsLarge"],cp=["rock_smallA","rock_smallB","rock_smallC","stone_smallA"],f1=["building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e"];function hp(s,e,t){let n=o1(s.sites),i=a1(s,n,t.capabilities.getMaxAnisotropy()),r=new Ue(new Xe(ze,256,128),new ft({map:i,roughness:.95,metalness:0}));r.receiveShadow=!0;let o=fi(42),a=v=>v[o()*v.length|0],c=n.filter((v,x)=>x%4===0),l=(v,x)=>{let _=Math.cos(x/ze);return c.some(I=>v.dot(I)>_)},h=(v,x)=>s.sites.some(_=>_.near(v,x)),u=new E,d=()=>{let v=o()*2-1,x=o()*Math.PI*2,_=Math.sqrt(1-v*v);return u.set(_*Math.cos(x),v,_*Math.sin(x))},f=(v,x,_)=>!s.isWater(v)&&!h(v,x)&&!l(v,_)&&!s.camBlocked(v),g=["#4fa3a5","#e9825f","#8e7cc3","#5aa95f","#d9a63a","#d65f6d","#3f86c4"];for(let v=0,x=0;v<3e3&&x<40;v++){let _=d(),I=Math.asin(_.y)/Dn;if(I>40||I<js+3||!f(_,25,9)||s.blocked(_,6))continue;let A=new Gn(_,e,null),C=o()*Math.PI;if(o()<.25)A.model(a(f1),0,0,{h:16+o()*10,rot:C}),s.addCircle(_,2.4);else{let T=9+o()*5,w=5+(o()*7|0),M=a(g);du(A,0,0,C,{w:T,d:4.4,floors:w,accent:M});let L=A.sub(0,0,C);for(let H of[-1,0,1])s.addCircle(A.dirAt(...L.tf(H*T/3,0)),2.6);if(o()<.5){let H=A.sub(0,0,C),D=(o()-.5)*4,[N,W]=H.tf(D,9.5),B=A.dirAt(N,W);if(f(B,25,9)&&!s.blocked(B,6)){let J=8+o()*5;du(A,N,W,C,{w:J,d:4.4,floors:w+(o()*3|0)-1,accent:a(g)});for(let G of[-1,0,1])s.addCircle(A.dirAt(...H.tf(D+G*J/3,9.5)),2.6)}}}x++}for(let v=0;v<2600;v++){let x=d(),_=Math.asin(x.y)/Dn;if(!f(x,21,4.4)||s.blocked(x,1.2))continue;let I=_<js+1,A=_>44;if(I&&o()>.35||!I&&!A&&o()>.32)continue;let C=new Gn(x,e,null),T=o()*Math.PI*2;if(I)C.model(a(l1),0,0,{h:5+o()*2.2,rot:T});else if(!A&&o()<.55){let w=4.6+o()*2.4;C.model(a(ap),0,0,{s:[w,3.6+o()*1.2,w],rot:T})}else C.model(a(c1),0,0,{h:4.5+o()*3,rot:T});s.addCircle(x,.4)}for(let v=0;v<9e3;v++){let x=d();if(!f(x,19,3.4))continue;let _=Math.asin(x.y)/Dn,I=_<js+.5,A=new Gn(x,e,null),C=o()*Math.PI*2,T=o();if(I){T<.12&&A.model(a(cp),0,0,{h:.3+o()*.5,rot:C});continue}T<.08?A.model(a(h1),0,0,{h:.7+o()*.6,rot:C}):T<.16?A.model(a(u1),0,0,{h:.45+o()*.25,rot:C,shadow:!1}):T<.38?A.model(a(d1),0,0,{h:.35+o()*.3,rot:C,shadow:!1}):T<.4&&A.model(a(cp),0,0,{h:.25+o()*.3,rot:C})}let y=[],m=(v,x)=>Math.atan2(x.dot(v.east),x.dot(v.south));for(let v=0;v<n.length;v++){let x=n[v],_=n[(v+1)%n.length].clone().sub(n[(v-1+n.length)%n.length]).normalize(),I=new E().crossVectors(x,_).normalize(),A=C=>x.clone().multiplyScalar(ze).addScaledVector(I,C).normalize();if(v%2===0)for(let C of[-1,1]){let T=new Gn(A(C*2.32),e,null);T.box(0,0,.22,.12,1.04,"#cfc8b8",{rot:m(T,_)})}if(!h(x,17)){if(v%22===0){let C=v/22%2?1:-1,T=new Gn(A(C*3),e,null),w=I.clone().multiplyScalar(-C),M=Math.atan2(-w.dot(T.east),-w.dot(T.south));T.model("light-curved",0,0,{h:4.8,rot:M}),T.sub(0,0,M).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"}),s.addCircle(T.center,.2)}if(v%18===9)for(let C of[-1,1]){let T=A(C*(5.2+o()*1.5));if(s.isWater(T)||s.blocked(T,1))continue;let w=4.2+o()*1.8;new Gn(T,e,null).model(a(ap),0,0,{s:[w,3.4+o(),w],rot:o()*6.3}),s.addCircle(T,.35)}v%26===13&&y.push({id:`r${y.length}`,dir:A((o()-.5)*2.4)})}}let p=0;for(let v=0;v<600&&p<10;v++){let x=d(),_=Math.asin(x.y)/Dn,I=_>48,A=_<js&&_>Zr+1.5;p<6&&!I||p>=6&&!A||s.blocked(x,.8)||h(x,20)||(y.push({id:`x${p}`,dir:x.clone()}),p++)}return{mesh:r,path:n,coinSpots:y}}var Nn=s=>new Ae(s),p1=Nn("#4fa7ec"),m1=Nn("#cdeefa"),g1=Nn("#5866b8"),y1=Nn("#ffad72"),x1=Nn("#0b1230"),_1=Nn("#27325c"),v1=Nn("#7f8b99"),M1=Nn("#b8c2cc"),b1=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,w1=`
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
}`,Fa=class{constructor(e,t=!0){if(this.scene=e,this.hemi=new Ks(15135999,8034920,1.2),this.sun=new Di(16774108,2.6),t){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let o=this.sun.shadow.camera;o.left=o.bottom=-38,o.right=o.top=38,o.near=40,o.far=170,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04}e.add(this.hemi,this.sun,this.sun.target),this.u={top:{value:new Ae},horizon:{value:new Ae},up:{value:new E(0,1,0)},sunDir:{value:new E(1,0,0)},sunCol:{value:new Ae("#fff2c4")},moon:{value:0},space:{value:0}},this.dome=new Ue(new Xe(900,32,16),new yn({uniforms:this.u,vertexShader:b1,fragmentShader:w1,side:Nt,depthWrite:!1,depthTest:!1})),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,e.add(this.dome);let n=1200,i=new Float32Array(n*3);for(let o=0;o<n;o++){let a=new E().randomDirection().multiplyScalar(850);i.set([a.x,a.y,a.z],o*3)}let r=new dt;r.setAttribute("position",new ct(i,3)),this.starMat=new Ln({color:0,size:2,sizeAttenuation:!1,depthTest:!1,depthWrite:!1}),this.stars=new Hn(r,this.starMat),this.stars.renderOrder=-9,this.stars.frustumCulled=!1,this.dome.add(this.stars),this.night=0,this.elev=0,this._t=new Ae,this._h=new Ae,this._sd=new E}update(e,t,n,i,r,o){let a=e*Math.PI*2,c=Math.sin(a);this.elev=c;let l=this._sd.copy(t.east).multiplyScalar(Math.cos(a)).addScaledVector(t.up,c).addScaledVector(t.south,.35).normalize(),h=_t.clamp((.06-c)/.28,0,1),u=Math.max(0,1-Math.abs(c-.02)/.32)*(1-h*.6);this.night=h;let d=this._t.copy(p1).lerp(x1,h).lerp(g1,u*.55),f=this._h.copy(m1).lerp(_1,h).lerp(y1,u*.8);d.lerp(v1,r*.65*(1-h*.7)),f.lerp(M1,r*.65*(1-h*.7)),this.u.top.value.copy(d),this.u.horizon.value.copy(f),this.u.up.value.copy(t.up),this.u.sunDir.value.copy(l),this.u.sunCol.value.set(u>.4?"#ffc48a":"#fff2c4").multiplyScalar((1-h)*(1-r*.85)),this.u.moon.value=h*(1-r),this.u.space.value=o,this.dome.position.copy(i);let g=Math.max(h*(1-r),o);this.starMat.color.setScalar(g),this.stars.visible=g>.01,this.sun.target.position.copy(n),c>-.04?(this.sun.position.copy(n).addScaledVector(l,100),this.sun.color.set("#fff3dc").lerp(Nn("#ffb27a"),u*.8),this.sun.intensity=2.8*(1-r*.45)*_t.clamp(c*4+.35,.25,1)):(this.sun.position.copy(n).addScaledVector(l,-100),this.sun.color.set("#9fb3ff"),this.sun.intensity=.75),this.hemi.position.copy(t.up),this.hemi.intensity=_t.lerp(1.2,.6,h)*(1-r*.2),this.scene.environmentIntensity=_t.lerp(.4,.08,h)*(1-r*.3),this.hemi.color.set("#e6f4ff").lerp(Nn("#7486c8"),h),this.hemi.groundColor.set("#7a9a68").lerp(Nn("#2c3550"),h);let y=_t.lerp(.62,1.2,h);for(let[m,p]of Object.entries(nr))m!=="super"&&p.color.setScalar(y)}};var pu=1400,Ba=16,up=18,S1=.7,ka=class{constructor(e){this.pos=new Float32Array(pu*6),this.drops=[];for(let n=0;n<pu;n++)this.drops.push([(Math.random()*2-1)*Ba,Math.random()*up,(Math.random()*2-1)*Ba]);let t=new dt;t.setAttribute("position",new ct(this.pos,3)),this.mat=new Qi({color:13163760,transparent:!0,opacity:0,depthWrite:!1}),this.lines=new Xs(t,this.mat),this.lines.frustumCulled=!1,e.add(this.lines),this.level=0,this.target=0,this.timer=70+Math.random()*60,this._m=new oe,this.onStart=null}update(e,t,n,i){this.timer-=e,this.timer<=0&&(this.target>0?(this.target=0,this.timer=80+Math.random()*90):(this.target=.6+Math.random()*.4,this.timer=22+Math.random()*18,this.onStart?.()));let r=i?this.target:0;if(this.level+=(r-this.level)*Math.min(1,e*.6),this.lines.visible=this.level>.02,!this.lines.visible)return;this._m.makeBasis(n.east,n.up,n.south).setPosition(t),this._m.decompose(this.lines.position,this.lines.quaternion,this.lines.scale);let o=26*e,a=this.pos;for(let c=0;c<pu;c++){let l=this.drops[c];l[1]-=o,l[1]<0&&(l[1]+=up,l[0]=(Math.random()*2-1)*Ba,l[2]=(Math.random()*2-1)*Ba);let h=c*6;a[h]=l[0],a[h+1]=l[1],a[h+2]=l[2],a[h+3]=l[0]+.08,a[h+4]=l[1]+S1,a[h+5]=l[2]}this.lines.geometry.attributes.position.needsUpdate=!0,this.mat.opacity=.55*this.level}forceStop(){this.target=0,this.timer=80+Math.random()*60}};var mu=["female-a","female-b","female-c","female-d","female-e","female-f","male-a","male-b","male-c","male-d","male-e","male-f"];function E1(s){let e=s.color||"#333";return Oi(t=>{s.type==="cap"?(t.add(new Xe(.34,18,10,0,Math.PI*2,0,Math.PI/2).scale(1,.55,1),e,Oe(0,0,0)),t.add(new Ze(.3,.3,.03,18,1,!1,-Math.PI/2,Math.PI).scale(1,1,1.1),e,Oe(0,.01,.12)),t.add(new Xe(.035,8,6),"#ffffff",Oe(0,.19,0))):s.type==="police"?(t.add(new Ze(.36,.32,.18,20),e,Oe(0,.09,0)),t.add(new Ze(.37,.37,.05,20),"#f3c13a",Oe(0,.05,0)),t.add(new Ze(.26,.26,.03,18,1,!1,-Math.PI/2,Math.PI),"#111",Oe(0,0,.14))):s.type==="songkok"?t.add(new Ze(.3,.32,.26,20),e,Oe(0,.13,0)):s.type==="bucket"?(t.add(new Ze(.28,.34,.24,20),e,Oe(0,.12,0)),t.add(new Ze(.5,.5,.03,24),e,Oe(0,.01,0))):s.type==="straw"?(t.add(new Ze(.26,.3,.18,20),e,Oe(0,.09,0)),t.add(new Ze(.62,.62,.03,28),e,Oe(0,.01,0)),t.add(new Ze(.305,.305,.05,20),"#e2383f",Oe(0,.05,0))):s.type==="bun"&&t.add(new Xe(.15,12,10),e,Oe(0,.02,-.12))})}function rs(s={}){let e=jf(`character-${s.char||"male-a"}`),t=(s.h||1.75)/e.height,n=new $e;e.root.scale.setScalar(t),n.add(e.root);let i={};for(let o of["head","torso","arm-left","arm-right","leg-left","leg-right"])i[o]=e.root.getObjectByName(o);let r={root:n,c:e,s:t,bones:i,cur:null,curName:null,onceT:0,base:s.base||null};if(s.hat&&i.head){let o=E1(s.hat);o.scale.setScalar(1/t),o.position.set(0,s.hat.y??.285,.01),i.head.add(o)}return gu(r,r.base||"idle",0),r}function gu(s,e,t=.25){if(s.curName===e)return;let n=s.c.actions[e];n&&(n.reset(),n.setLoop(Mh,1/0),n.clampWhenFinished=!1,n.setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(t).play(),s.cur&&s.cur!==n&&s.cur.fadeOut(t),s.cur=n,s.curName=e)}function Ha(s,e){let t=s.c.actions[e];t&&(gu(s,e,.12),t.setLoop(vh,1),t.clampWhenFinished=!0,s.onceT=t.getClip().duration)}function Bi(s,e,t=0,n=null){if(s.onceT>0)s.onceT-=e,s.onceT<=0&&(s.curName=null);else{let i=n||s.base||(t>7.5?"sprint":t>.3?"walk":"idle");gu(s,i),i==="walk"?s.cur.timeScale=_t.clamp(t/2.6,.6,2.2):i==="sprint"?s.cur.timeScale=_t.clamp(t/8,.8,1.6):s.cur.timeScale=1}s.c.mixer.update(e)}function no(s){let e=s.index.array;for(let n=0;n<e.length;n+=3){let i=e[n];e[n]=e[n+2],e[n+2]=i}let t=s.attributes.normal.array;for(let n=0;n<t.length;n++)t[n]=-t[n];return s}function dp(s="#e2383f"){return Oi(e=>{let t=[];for(let i=0;i<=10;i++){let r=i/10;t.push(new ie(1.08*Math.sin(r*Math.PI/2),.48*Math.cos(r*Math.PI/2)))}let n=new Ri(t,16);e.add(no(n),s,Oe(0,1.02,0)),e.add(new Ri(t.map(i=>i.clone().multiplyScalar(.985)),16),"#fff6f0",Oe(0,1,0));for(let i=0;i<8;i++){let r=i/8*Math.PI*2;e.add(new Xe(.035,6,5),"#ffffff",Oe(Math.cos(r)*1.08,1.02,Math.sin(r)*1.08)),e.add(new Ze(.008,.008,1,4),"#cccccc",Oe(Math.cos(r)*.5,1.3,Math.sin(r)*.5,0,-r,Math.PI/2-.42))}e.add(new zn(.03,.18,8),"#ffffff",Oe(0,1.58,0)),e.add(new Ze(.018,.018,1.25,8),"#8a8f96",Oe(0,.5,0)),e.add(new xt(.07,.022,6,12,Math.PI),"#6b4a2e",Oe(.07,-.12,0,0,0,Math.PI)),e.add(new Ze(.026,.026,.2,8),"#6b4a2e",Oe(0,-.02,0))})}function fp(s="#e8913a"){let e="#c86f22";return Oi(t=>{t.add(new ai(.17,.32,6,12),s,Oe(0,.24,0,Math.PI/2,0,0));for(let i of[-.15,0,.15])t.add(new xt(.172,.018,4,16,Math.PI),e,Oe(0,.24,i,0,0,0));t.add(new Xe(.17,18,14),s,Oe(0,.44,.3)),t.add(new Xe(.09,12,10).scale(1,.7,.8),"#ffe9d2",Oe(0,.39,.42));for(let i of[-1,1]){t.add(new zn(.06,.13,4),s,Oe(i*.09,.6,.28,0,0,-i*.25)),t.add(new zn(.035,.08,4),"#f7b7a3",Oe(i*.09,.59,.3,0,0,-i*.25)),t.add(new Xe(.03,8,6),"#2b2b1f",Oe(i*.065,.47,.44)),t.add(new Xe(.06,8,6).scale(1,.6,1.3),s,Oe(i*.1,.06,.24));for(let r of[-.012,.012])t.add(new Ze(.003,.003,.18,3),"#ffffff",Oe(i*.12,.4+r,.45,0,0,Math.PI/2+i*r*6))}t.add(new Xe(.02,6,5),"#e88080",Oe(0,.42,.47));let n=new _n([[0,.12,-.3],[.18,.08,-.38],[.3,.1,-.15],[.26,.14,.05]].map(i=>new E(...i)));t.add(new Ci(n,16,.04,6),s,Oe(0,0,0))})}var yu=new yt,pp=new E,xu=new E,mp=new E,gp=new oe,yp=new E,za=class{constructor(e,t,n="female-a"){this.scene=e,this.world=t,this.pos=new E(0,1,0),this.fwd=new E(0,0,1),this.alt=0,this.speed=0,this.dropping=!1,this.onLand=null,this.umbOpen=0,this.root=new $e,e.add(this.root),this.umb=dp("#e2383f"),this.umb.visible=!1,this.setCharacter(n);let i=new ga(.5,24).rotateX(-Math.PI/2);this.shadow=new Ue(i,new Ft({color:1911322,transparent:!0,opacity:.22,depthWrite:!1})),e.add(this.shadow)}setCharacter(e){this.person&&this.root.remove(this.person.root),this.char=e,this.person=rs({char:e}),this.root.add(this.person.root),this.umb.removeFromParent(),this.umb.position.set(-.42,1.15,.05),this.root.add(this.umb)}place(e,t){this.pos.copy(e).normalize(),this.fwd.copy(t).addScaledVector(this.pos,-t.dot(this.pos)).normalize(),this.speed=0,this.sync()}placeAtSite(e,t){let[n,i,r]=t,o=e.east.clone().multiplyScalar(Math.sin(r)).addScaledVector(e.south,Math.cos(r));this.place(e.dirAt(n,i),o)}startDrop(e=22){this.alt=e,this.dropping=!0,this.speed=0}worldPos(e=new E){return e.copy(this.pos).multiplyScalar(ze+this.alt)}update(e,t,n){if(this.dropping)this.alt=Math.max(0,this.alt-e*(2.6+this.alt*.28)),this.alt<=0&&(this.dropping=!1,Ha(this.person,"jump"),this.onLand?.());else if(t){let r=-t.x*2.6*e;r&&this.fwd.applyAxisAngle(this.pos,r);let o=t.y*(t.run?10:5.5);this.speed+=(o-this.speed)*Math.min(1,e*10),Math.abs(this.speed)>.01&&this.move(this.speed*e)}else this.speed*=.8;let i=this.dropping||n;if(this.umbOpen+=((i?1:0)-this.umbOpen)*Math.min(1,e*6),this.umb.visible=this.umbOpen>.03,this.umb.scale.setScalar(Math.max(.01,this.umbOpen)),Bi(this.person,e,Math.abs(this.speed),this.dropping?"fall":null),this.umbOpen>.03){let r=this.person.bones["arm-right"];r.rotation.set(r.rotation.x*(1-this.umbOpen),0,-2.6*this.umbOpen)}this.sync()}move(e){if(!this.tryMove(this.fwd,e)){for(let t of[.7,-.7,1.3,-1.3])if(mp.copy(this.fwd).applyAxisAngle(this.pos,t),this.tryMove(mp,e*Math.cos(t)))return;this.speed*=.5}}tryMove(e,t){return pp.crossVectors(this.pos,e).normalize(),yu.setFromAxisAngle(pp,t/ze),xu.copy(this.pos).applyQuaternion(yu),this.world.blocked(xu)&&!this.world.blocked(this.pos)?!1:(this.pos.copy(xu).normalize(),this.fwd.applyQuaternion(yu).addScaledVector(this.pos,-this.fwd.dot(this.pos)).normalize(),!0)}sync(){yp.crossVectors(this.pos,this.fwd),gp.makeBasis(yp,this.pos,this.fwd),this.root.quaternion.setFromRotationMatrix(gp),this.root.position.copy(this.pos).multiplyScalar(ze+this.alt),this.shadow.quaternion.copy(this.root.quaternion),this.shadow.position.copy(this.pos).multiplyScalar(ze+.04),this.shadow.material.opacity=.22*Math.max(.15,1-this.alt/20)}};var _u=new E,Va=new E,lr=new E,vu=new E,io=new yt,xp=new E,_p=new E,Ga=class{constructor(e){this.cam=e,this.dist=9,this.curDist=9,this.lookUp=0,this.lookUpTarget=0,this.world=null,this.yaw=0,this.pitch=0,this.mode="map",this.mapDir=new E(0,.3,1).normalize(),this.mapUp=new E(0,1,0),this.mapDist=200,this.tween=null,this.look=new E,this.upv=new E(0,1,0),this.dragging=!1,this.autoSpin=0,e.position.copy(this.mapDir).multiplyScalar(this.mapDist)}zoom(e){this.mode==="map"?this.mapDist=_t.clamp(this.mapDist+e*.15,120,280):this.dist=_t.clamp(this.dist+e*.01,4.5,18)}drag(e,t){this.mode==="map"?this.rotateMap(e,t):(this.yaw-=e*.008,this.pitch=_t.clamp(this.pitch+t*.006,-.5,.9))}rotateMap(e,t){io.setFromAxisAngle(this.mapUp,-e*.006),this.mapDir.applyQuaternion(io),xp.crossVectors(this.mapDir,this.mapUp).normalize(),io.setFromAxisAngle(xp,t*.006),this.mapDir.applyQuaternion(io).normalize(),this.mapUp.applyQuaternion(io),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize()}openMap(e,t){this.mode="map",this.mapDir.copy(e).normalize(),this.mapUp.copy(t).addScaledVector(this.mapDir,-t.dot(this.mapDir)).normalize()}flyTo(e,t,n){this.tween={from:this.mapDir.clone(),to:e.clone().normalize(),t:0,dur:t,done:n}}update(e,t){if(this.mode==="map"){if(this.tween){let r=this.tween;r.t=Math.min(1,r.t+e/r.dur);let o=r.t<.5?2*r.t*r.t:1-Math.pow(-2*r.t+2,2)/2;this.mapDir.copy(r.from).lerp(r.to,o).normalize(),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize(),r.t>=1&&(this.tween=null,r.done?.())}else this.autoSpin&&this.rotateMap(this.autoSpin*e,0);_u.copy(this.mapDir).multiplyScalar(this.mapDist),Va.set(0,0,0),lr.copy(this.mapUp)}else{!this.dragging&&Math.abs(t.speed)>.5&&(this.yaw*=Math.exp(-e*1.5),this.pitch*=Math.exp(-e*1.5));let r=t.worldPos(Va);lr.copy(t.pos),vu.copy(t.fwd).negate().applyAxisAngle(lr,this.yaw);let o=this.dist;if(this.world&&!t.dropping)for(let c=1;c<=10;c++){let l=o*c/10;if(_p.copy(t.pos).multiplyScalar(ze).addScaledVector(vu,l).normalize(),this.world.camBlocked(_p)){o=Math.max(2.6,l-.8);break}}this.curDist+=(o-this.curDist)*Math.min(1,e*(o<this.curDist?10:2)),this.lookUp+=(this.lookUpTarget-this.lookUp)*Math.min(1,e*1.5);let a=(1.4+this.curDist*(.26+this.pitch*.5))*(1-this.lookUp*.75);_u.copy(r).addScaledVector(lr,a).addScaledVector(vu,this.curDist*(1-Math.max(0,this.pitch)*.35)),Va.addScaledVector(lr,1.4+this.lookUp*11)}let n=1-Math.exp(-e*(this.mode==="map"?3.2:6));this.cam.position.lerp(_u,n);let i=ze+.8;this.cam.position.length()<i&&this.cam.position.setLength(i),this.look.lerp(Va,n),this.upv.lerp(lr,n).normalize(),this.cam.up.copy(this.upv),this.cam.lookAt(this.look)}};var Wa=class{constructor(e,t,n){this.keys=new Set,this.pressed=new Set,this.joy={x:0,y:0},this.onDrag=null,this.onZoom=null,addEventListener("keydown",m=>{m.target.tagName!=="INPUT"&&(m.repeat||this.pressed.add(m.code),this.keys.add(m.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(m.code)&&m.preventDefault())}),addEventListener("keyup",m=>this.keys.delete(m.code)),addEventListener("blur",()=>this.keys.clear());let i=null,r=0,o=new Map,a=()=>{let[m,p]=[...o.values()];return Math.hypot(m.x-p.x,m.y-p.y)};e.addEventListener("pointerdown",m=>{o.set(m.pointerId,{x:m.clientX,y:m.clientY}),e.setPointerCapture(m.pointerId),o.size===2?(i=null,r=a()):o.size===1&&(i={id:m.pointerId,x:m.clientX,y:m.clientY},this.dragging=!0)}),e.addEventListener("pointermove",m=>{if(o.has(m.pointerId)){if(o.set(m.pointerId,{x:m.clientX,y:m.clientY}),o.size===2){let p=a();this.onZoom?.((r-p)*3),r=p;return}!i||i.id!==m.pointerId||(this.onDrag?.(m.clientX-i.x,m.clientY-i.y),i.x=m.clientX,i.y=m.clientY)}});let c=m=>{o.delete(m.pointerId),i&&i.id===m.pointerId&&(i=null),o.size||(this.dragging=!1)};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("wheel",m=>{m.preventDefault(),this.onZoom?.(m.deltaY)},{passive:!1});let l=null,h=0,u=0,d=46,f=(m,p)=>{n.style.transform=`translate(${m}px, ${p}px)`};t.addEventListener("pointerdown",m=>{m.preventDefault(),l=m.pointerId,t.setPointerCapture(l);let p=t.getBoundingClientRect();h=p.left+p.width/2,u=p.top+p.height/2,g(m)});let g=m=>{if(m.pointerId!==l)return;let p=m.clientX-h,v=m.clientY-u,x=Math.hypot(p,v);x>d&&(p*=d/x,v*=d/x),f(p,v),this.joy.x=p/d,this.joy.y=-v/d};t.addEventListener("pointermove",g);let y=m=>{m.pointerId===l&&(l=null,this.joy.x=this.joy.y=0,f(0,0))};t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y)}has(...e){return e.some(t=>this.keys.has(t))}axis(){let e=(this.has("KeyD","ArrowRight")?1:0)-(this.has("KeyA","ArrowLeft")?1:0),t=(this.has("KeyW","ArrowUp")?1:0)-(this.has("KeyS","ArrowDown")?1:0),n=Math.hypot(this.joy.x,this.joy.y);return n>.15&&(e+=this.joy.x*.8,t+=this.joy.y),{x:Math.max(-1,Math.min(1,e)),y:Math.max(-1,Math.min(1,t)),run:this.has("ShiftLeft","ShiftRight")||n>.92}}consume(...e){for(let t of e)if(this.pressed.has(t))return this.pressed.delete(t),t;return null}endFrame(){this.pressed.clear()}};var Xa=class{constructor(e){this.audio=e,this.el=document.getElementById("dlg"),this.nameEl=this.el.querySelector(".dlg-name"),this.textEl=this.el.querySelector(".dlg-text"),this.choicesEl=this.el.querySelector(".dlg-choices"),this.nextEl=this.el.querySelector(".dlg-next"),this.open=!1,this.typing=!1,this._res=null,this.el.addEventListener("pointerdown",t=>{t.target.closest("button")||this.advance()})}say(e,t){return this._show(e,t,null)}choose(e,t,n){return this._show(e,t,n)}_show(e,t,n){return this.open=!0,this.pendingHide=!1,this.el.classList.remove("hidden"),this.nameEl.textContent=e||"",this.nameEl.style.display=e?"":"none",this.choicesEl.innerHTML="",this.nextEl.style.visibility="hidden",this.opts=n,this.full=t,this.shown=0,this.typing=!0,this.blipT=0,new Promise(i=>{this._res=i})}update(e){!this.open||!this.typing||(this.shown+=e*55,this.blipT-=e,this.blipT<=0&&(this.audio.blip(),this.blipT=.09),this.shown>=this.full.length?this._doneTyping():this.textEl.textContent=this.full.slice(0,Math.floor(this.shown)))}_doneTyping(){this.typing=!1,this.textEl.textContent=this.full,this.opts?this.opts.forEach((e,t)=>{let n=document.createElement("button");n.textContent=`${t+1}. ${e}`,n.addEventListener("click",()=>this.pick(t)),this.choicesEl.appendChild(n)}):this.nextEl.style.visibility="visible"}advance(){if(this.open){if(this.typing){this._doneTyping();return}this.opts||this._finish(void 0)}}pick(e){!this.open||this.typing||!this.opts||e<0||e>=this.opts.length||(this.audio.blip(),this._finish(e))}_finish(e){let t=this._res;this._res=null,this.pendingHide=!0,setTimeout(()=>{this.pendingHide&&this.close()},0),t?.(e)}close(){this.open=!1,this.typing=!1,this.el.classList.add("hidden")}};var kt=s=>document.getElementById(s),qa=class{constructor(){this.hud=kt("hud"),this.wallet=kt("wallet"),this.clock=kt("clock"),this.albumPill=kt("albumPill"),this.toasts=kt("toasts"),this.promptEl=kt("prompt"),this.taskList=kt("taskList"),this.taskCount=kt("taskCount"),this.modalEl=kt("modal"),this.modalBody=this.modalEl.querySelector(".modal-body"),this.fadeEl=kt("fade"),this.flashEl=kt("flash"),this.promptHit=!1,this.onTask=null,this.promptEl.addEventListener("pointerdown",e=>{e.preventDefault(),this.promptHit=!0}),this.modalEl.querySelector(".modal-x").addEventListener("click",()=>this.closeModal()),this.modalEl.addEventListener("pointerdown",e=>{e.target===this.modalEl&&this.closeModal()}),kt("tasksHead").addEventListener("click",()=>kt("tasks").classList.toggle("collapsed")),matchMedia("(max-width: 640px)").matches&&kt("tasks").classList.add("collapsed")}loading(e,t){kt("loading").querySelector("span").textContent=e,t!==void 0&&(kt("loading").querySelector(".bar i").style.width=`${Math.round(t*100)}%`)}doneLoading(){kt("loading").classList.add("hidden")}showHud(e){this.hud.classList.toggle("hidden",!e)}setMoney(e,t=!1){this.wallet.textContent=`\u{1F4B0} $${e}`,t&&(this.wallet.classList.remove("bump"),this.wallet.offsetWidth,this.wallet.classList.add("bump"))}setClock(e,t,n){let i=Math.floor(e),r=Math.floor((e-i)*60/15)*15,o=n?"\u{1F327}\uFE0F":t?"\u{1F319}":e<7.5||e>18?"\u{1F305}":"\u2600\uFE0F",a=(i+11)%12+1;this.clock.textContent=`${o} ${a}:${String(r).padStart(2,"0")}${i<12?"am":"pm"}`}setAlbum(e,t){this.albumPill.textContent=`\u{1F37D}\uFE0F ${e}/${t}`}toast(e,t=2800){let n=document.createElement("div");for(n.className="toast",n.textContent=e,this.toasts.appendChild(n);this.toasts.children.length>3;)this.toasts.firstChild.remove();setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+500)}prompt(e){e?(this.promptEl.dataset.label!==e&&(this.promptEl.dataset.label=e,this.promptEl.innerHTML=`<kbd>E</kbd> ${e}`),this.promptEl.classList.remove("hidden")):(this.promptEl.classList.add("hidden"),this.promptHit=!1)}takePromptHit(){let e=this.promptHit;return this.promptHit=!1,e}renderTasks(e){let t=e.filter(n=>!n.hidden);this.taskCount.textContent=`${t.filter(n=>n.done).length}/${t.length}`,this.taskList.innerHTML="";for(let n of e){let i=document.createElement("li");i.className=(n.done?"done ":"")+(n.hidden?"hidden-task":""),i.innerHTML=`<div class="t-title">${n.done?"\u2705":"\u2B1C"} ${n.title}</div>${n.done||!n.hint?"":`<div class="t-hint">${n.hint}</div>`}`,!n.done&&n.site&&i.addEventListener("click",()=>this.onTask?.(n)),this.taskList.appendChild(i)}}modal(e,t=""){return this.modalBody.innerHTML=e,this.modalEl.className=t,this.modalEl.classList.remove("hidden"),this.isModal=!0,this.modalBody}closeModal(){this.modalEl.classList.add("hidden"),this.isModal=!1,this.onModalClose?.(),this.onModalClose=null}fade(e,t=600){return this.fadeEl.style.transitionDuration=`${t}ms`,this.fadeEl.style.opacity=e,this.fadeEl.style.pointerEvents=e>0?"auto":"none",new Promise(n=>setTimeout(n,t))}flash(){this.flashEl.classList.remove("go"),this.flashEl.offsetWidth,this.flashEl.classList.add("go")}};var Mu="sgplanet.save.v1";function bu(){return{money:Uf,flags:{},foods:{},coins:{},time:.1,pos:null,settings:{music:!0,sfx:!0,rain:!0}}}var Ya=class{constructor(){this.data=bu(),this.exists=!1;try{let e=localStorage.getItem(Mu);if(e){let t=JSON.parse(e);this.data={...bu(),...t,settings:{...bu().settings,...t.settings||{}}},this.exists=!0}}catch{}}write(){try{localStorage.setItem(Mu,JSON.stringify(this.data))}catch{}}reset(){try{localStorage.removeItem(Mu)}catch{}location.reload()}};var hr=s=>261.63*Math.pow(2,s/12),T1=[[0,"M"],[-3,"m"],[-7,"M"],[-5,"M"]],vp=[0,2,4,7,9,12,14,16];function Mp(s){let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}var $a=class{constructor(e){this.settings=e,this.ctx=null,this.night=0}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9,this.master.connect(t.destination),this.mus=t.createGain(),this.mus.gain.value=this.settings.music?.16:0,this.mus.connect(this.master),this.fx=t.createGain(),this.fx.gain.value=this.settings.sfx?.5:0,this.fx.connect(this.master);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;let o=t.createBufferSource();o.buffer=i,o.loop=!0;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1200,this.rain=t.createGain(),this.rain.gain.value=0,o.connect(a).connect(this.rain).connect(this.fx),o.start(),this.step=0,this.next=t.currentTime+.3,setInterval(()=>this.schedule(),120)}this.ctx.resume?.()}setMusic(e){this.settings.music=e,this.ctx&&this.mus.gain.setTargetAtTime(e?.16:0,this.ctx.currentTime,.2)}setSfx(e){this.settings.sfx=e,this.ctx&&this.fx.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.1)}setRain(e){this.ctx&&this.rain.gain.setTargetAtTime(e*.22,this.ctx.currentTime,.5)}tone(e,t,n,i="sine",r=.2,o=this.fx,a=0){let c=this.ctx,l=c.createOscillator(),h=c.createGain();l.type=i,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+n),h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(r,t+.012),h.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(h).connect(o),l.start(t),l.stop(t+n+.05)}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let e=60/92/2;for(;this.next<this.ctx.currentTime+.5;)this.playStep(this.step,this.next),this.step++,this.next+=e}playStep(e,t){let n=Math.floor(e/8)%4,i=e%8,[r,o]=T1[n],a=o==="M"?4:3;if((i===0||i===4)&&this.tone(hr(r-12),t,.5,"triangle",.32,this.mus),i===0)for(let l of[0,a,7])this.tone(hr(r+l),t,1.7,"sine",.05,this.mus);if(Mp(e%32)<(this.night>.5?.3:.5)){let l=vp[Math.floor(Mp(e%32+99)*vp.length)];this.tone(hr(l+12),t,.3,this.night>.5?"sine":"triangle",.1,this.mus)}}now(){return this.ctx?this.ctx.currentTime:0}blip(){this.ctx&&this.tone(620+Math.random()*120,this.now(),.05,"triangle",.08)}coin(){if(!this.ctx)return;let e=this.now();this.tone(988,e,.08,"square",.1),this.tone(1319,e+.07,.2,"square",.1)}success(){if(!this.ctx)return;let e=this.now();[0,4,7,12].forEach((t,n)=>this.tone(hr(t+12),e+n*.09,.4,"triangle",.18))}buy(){if(!this.ctx)return;let e=this.now();this.tone(hr(19),e,.12,"triangle",.14),this.tone(hr(24),e+.1,.25,"triangle",.14)}meow(){this.ctx&&this.tone(780,this.now(),.45,"sine",.18,this.fx,480)}shutter(){if(!this.ctx)return;let e=this.now();this.tone(2400,e,.04,"square",.12),this.tone(1200,e+.06,.06,"square",.1)}whoosh(){this.ctx&&this.tone(300,this.now(),.6,"sine",.12,this.fx,900)}pop(){this.ctx&&this.tone(200+Math.random()*300,this.now(),.25,"triangle",.12,this.fx,60)}};var A1=Math.cos(1.3/ze),Ka=class{constructor(e,t,n,i){this.save=n,this.onPick=i,this.items=[],this.total=t.length;let r=new Ze(.42,.42,.1,18).rotateX(Math.PI/2),o=new oe;for(let a of t){if(n.data.coins[a.id])continue;let c=new $e,l=er(a.dir);o.makeBasis(l.east,l.up,l.south).setPosition(a.dir.clone().multiplyScalar(ze)),o.decompose(c.position,c.quaternion,c.scale);let h=sr(r,"#ffc93a",.04),u=sr(new Rt(.22,.22,.14),"#ffe58a",0);u.rotation.z=Math.PI/4,h.add(u),h.position.y=1,c.add(h),e.add(c),this.items.push({id:a.id,dir:a.dir,grp:c,coin:h,ph:Math.random()*6})}}get found(){return Object.keys(this.save.data.coins).length}update(e,t,n){for(let i=this.items.length-1;i>=0;i--){let r=this.items[i];r.coin.rotation.y+=e*2.5,r.coin.position.y=1+Math.sin(t*3+r.ph)*.12,n.alt<1.5&&n.pos.dot(r.dir)>A1&&(r.grp.removeFromParent(),this.items.splice(i,1),this.save.data.coins[r.id]=1,this.onPick(r))}}};var Za=class{constructor(e,t,n){this.scene=e,this.world=t,this.player=n,this.list=[],this.walkers=[]}add(e,t,n,i,r,o={}){let[a,c,l]=t,h=rs(n);e.put(h.root,a,c,l,n.y||0),this.scene.add(h.root),e.solidCircle(a,c,.35);let u={site:e,x:a,z:c,rot:l,person:h,name:i,talking:!1};return this.world.addAct({dir:e.dirAt(a,c),r:o.r||2.8,label:o.label||`Talk to ${i}`,show:o.show,run:async()=>{let[d,f]=e.toLocal(this.player.pos);n.base||e.put(h.root,a,c,Math.atan2(d-a,f-c),n.y||0),u.talking=!0;try{await r(u)}finally{u.talking=!1,e.put(h.root,a,c,l,n.y||0)}}}),this.list.push(u),u}cheer(e){Ha(e.person,"emote-yes")}walker(e,t,n,i,r=1.3){let o=rs(t);this.scene.add(o.root);let a=Math.hypot(i[0]-n[0],i[1]-n[1]);this.walkers.push({site:e,person:o,a:n,b:i,len:a,s:Math.random(),dirn:1,speed:r,pause:0})}update(e){for(let t of this.list)Bi(t.person,e,0,t.talking&&!t.person.base?"interact-right":null);for(let t of this.walkers){if(t.pause>0){t.pause-=e,Bi(t.person,e,0);continue}t.s+=t.dirn*t.speed*e/t.len,(t.s>1||t.s<0)&&(t.s=Math.min(1,Math.max(0,t.s)),t.dirn*=-1,t.pause=1+Math.random()*2);let n=t.a[0]+(t.b[0]-t.a[0])*t.s,i=t.a[1]+(t.b[1]-t.a[1])*t.s,r=Math.atan2((t.b[0]-t.a[0])*t.dirn,(t.b[1]-t.a[1])*t.dirn);t.site.put(t.person.root,n,i,r),Bi(t.person,e,t.speed)}}};var ur=new E,wu=new E,Ja=class{constructor(e){this.G=e,this.root=document.getElementById("labels"),this.hint=document.getElementById("mapHint"),this.open=!1,this.labels=e.siteList.map(t=>{let n=document.createElement("button");return n.className="map-label",n.innerHTML=`<span class="ml-icon">${t.def.icon}</span><span class="ml-name">${t.def.name}</span><span class="ml-badge">!</span>`,n.addEventListener("click",()=>e.travel(t)),this.root.appendChild(n),{site:t,el:n}}),this.me=document.createElement("div"),this.me.className="map-me",this.me.textContent="You are here",this.root.appendChild(this.me)}show(e,t=null){let{rig:n,player:i}=this.G;this.open=e,this.root.classList.toggle("show",e),this.hint.classList.toggle("hidden",!e),e?(n.openMap(i.pos,i.fwd),t&&n.flyTo(t.center,.9),this.focus=t?.id||null):(n.mode="follow",n.tween=null)}update(e){if(!this.open&&!this.G.titleOpen)return;let t=this.G.camera;wu.copy(t.position).normalize();let n=innerWidth,i=innerHeight;for(let a of this.labels){let c=a.site.center.dot(wu);ur.copy(a.site.center).multiplyScalar(ze+4).project(t);let l=c>.15&&this.open;a.el.style.display=l?"":"none",l&&(a.el.style.transform=`translate(${(ur.x*.5+.5)*n}px, ${(-ur.y*.5+.5)*i}px) translate(-50%, -100%)`,a.el.style.opacity=Math.min(1,(c-.15)*4),a.el.classList.toggle("active",e.has(a.site.id)),a.el.classList.toggle("focus",this.focus===a.site.id))}let r=this.G.player.pos.dot(wu),o=this.open&&r>.1;this.me.style.display=o?"":"none",o&&(ur.copy(this.G.player.pos).multiplyScalar(ze+1).project(t),this.me.style.transform=`translate(${(ur.x*.5+.5)*n}px, ${(-ur.y*.5+.5)*i}px) translate(-50%, -50%)`)}};var bp=["#ff5a5f","#ffd23f","#3ec1d3","#ff8fd8","#9cff6b","#ffffff"],wp=new E,ja=new E,Qa=class{constructor(e){this.scene=e,this.bursts=[],this.fw=0,this.fwTimer=0,this.onBang=null}burst(e,t,n,i=90,r=7,o=1.6,a=.4){let c=new Float32Array(i*3),l=[];for(let f=0;f<i;f++)c.set([e.x,e.y,e.z],f*3),l.push(new E().randomDirection().multiplyScalar(r*(.55+Math.random()*.45)));let h=new dt;h.setAttribute("position",new ct(c,3));let u=new Ln({color:n,size:a,transparent:!0,depthWrite:!1,blending:Xo}),d=new Hn(h,u);d.frustumCulled=!1,this.scene.add(d),this.bursts.push({pts:d,vel:l,up:t.clone(),t:0,life:o})}fireworks(e){this.fw=e,this.fwTimer=0}update(e,t){for(let n=this.bursts.length-1;n>=0;n--){let i=this.bursts[n];i.t+=e;let r=i.pts.geometry.attributes.position;for(let o=0;o<i.vel.length;o++){let a=i.vel[o];a.addScaledVector(i.up,-3*e).multiplyScalar(1-e*1.2),r.array[o*3]+=a.x*e,r.array[o*3+1]+=a.y*e,r.array[o*3+2]+=a.z*e}r.needsUpdate=!0,i.pts.material.opacity=Math.max(0,1-i.t/i.life),i.t>i.life&&(i.pts.removeFromParent(),i.pts.geometry.dispose(),i.pts.material.dispose(),this.bursts.splice(n,1))}this.fw>0&&(this.fw-=e,this.fwTimer-=e,this.fwTimer<=0&&(this.fwTimer=.3+Math.random()*.45,ja.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).addScaledVector(t.pos,-0).normalize(),ja.addScaledVector(t.pos,-ja.dot(t.pos)).normalize(),wp.copy(t.pos).multiplyScalar(ze+16+Math.random()*8).addScaledVector(ja,4+Math.random()*10).addScaledVector(t.fwd,10),this.burst(wp,t.pos,bp[Math.random()*bp.length|0],120,9,1.9,.6),this.onBang?.()))}};var Sp=.5,os=new E,dr=new E,ec=new E,Su=new oe,Eu=new E;function R1(){let n=Oi(i=>{let r=(o,a,c,l,h,u,d,f,g)=>i.add(new rr(o,a,c,3,l),h,Oe(u,d,f),0,g);r(2.5,3.75,10.2,.32,"#f4f4f0",0,2.425,0),r(2.52,1.6,10.219999999999999,.3,"#3fae49",0,3.5,0),r(2.52,.35,10.219999999999999,.12,"#3fae49",0,.75,0),r(2.53,.9,9,.08,"#24323d",0,3.25,-.2,"win"),r(2.53,.85,6.999999999999999,.08,"#24323d",0,1.85,-1.2,"win"),r(2.2,2.4,.05,.05,"#2c3a45",0,2.55,5.109999999999999,"win"),r(1.6,.32,.06,.04,"#ffb347",0,3.98,5.119999999999999,"win"),r(.9,1.9,.06,.05,"#2c3a45",1.26,1.55,3.3,"win");for(let o of[-.85,.85])i.add(new Ze(.16,.16,.06,12),"#fff6c8",Oe(o,.95,5.119999999999999,Math.PI/2,0,0),0,"win");for(let o of[-1,1])i.add(new Rt(.06,.5,.3),"#222",Oe(o*1.37,2.6,4.699999999999999));for(let o of[-3.3,3.1])for(let a of[-1,1])i.add(new Ze(.52,.52,.34,18),"#1e1e24",Oe(a*1.05,.52,o,0,0,Math.PI/2)),i.add(new Ze(.28,.28,.36,12),"#b9c0c6",Oe(a*1.05,.52,o,0,0,Math.PI/2))});return n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),n}function C1(s){let e=new $e,t=La(s);eo(s,{w:3.6}).mat.decompose(t.position,t.quaternion,t.scale),e.add(t);let n=[];return t.traverse(i=>{/^wheel/.test(i.name)&&n.push(i)}),{mesh:e,wheels:n}}var tc=class{constructor(e,t,n){this.path=t,this.player=n,this.cars=[];let i=t.length,r=[["bus",1],["taxi",1],["sedan",1],["suv",-1],["taxi",-1],["van",1],["bus",-1],["delivery",-1],["hatchback-sports",1],["police",-1]];r.forEach(([o,a],c)=>{let l=o==="bus"?{mesh:R1(),wheels:[]}:C1(o);e.add(l.mesh),this.cars.push({...l,kind:o,dir:a,s:c/r.length*i,v:0,top:o==="bus"?6.5:8+Math.random()*2,len:o==="bus"?5.5:2.2})})}update(e){let t=this.path.length;for(let n of this.cars){let i=Math.floor(n.s)%t,r=n.s-Math.floor(n.s);os.copy(this.path[i]).lerp(this.path[(i+1)%t],r).normalize(),dr.copy(this.path[(i+3)%t]).sub(this.path[(i-3+t)%t]).multiplyScalar(n.dir),dr.addScaledVector(os,-dr.dot(os)).normalize(),ec.crossVectors(os,dr),Eu.copy(this.player.pos).sub(os).multiplyScalar(ze);let o=Eu.dot(dr),a=Eu.dot(ec)-1.15,c=this.player.alt<2&&o>0&&o<n.len+3.5&&Math.abs(a)<1.6;for(let h of this.cars){if(h===n||h.dir!==n.dir)continue;let u=((h.s-n.s)*n.dir+t)%t*Sp;u>0&&u<n.len+h.len+2&&(c=!0)}let l=c?0:n.top;n.v+=(l-n.v)*Math.min(1,e*(c?5:.8)),n.s=(n.s+n.dir*n.v*e/Sp+t)%t;for(let h of n.wheels)h.rotation.x+=n.v*e/.35;Su.makeBasis(ec,os,dr),Su.setPosition(os.clone().multiplyScalar(ze).addScaledVector(ec,1.15)),Su.decompose(n.mesh.position,n.mesh.quaternion,n.mesh.scale)}}};var so=[{id:"kaya",name:"Kaya Toast",icon:"\u{1F35E}",where:"HDB kopitiam",desc:"Toast with coconut-egg jam and a slab of cold butter."},{id:"kopi",name:"Kopi-O",icon:"\u2615",where:"HDB kopitiam",desc:'Black coffee with sugar. Add "kosong" for no sugar.'},{id:"prata",name:"Roti Prata",icon:"\u{1F95E}",where:"HDB kopitiam",desc:"Crispy, fluffy flatbread with curry for dipping."},{id:"chicken",name:"Chicken Rice",icon:"\u{1F357}",where:"Lau Pa Sat",desc:"Poached chicken, fragrant rice, chilli and ginger."},{id:"kachang",name:"Ice Kachang",icon:"\u{1F367}",where:"Lau Pa Sat",desc:"A shaved-ice mountain with syrup, red beans and corn."},{id:"satay",name:"Satay",icon:"\u{1F362}",where:"Satay Street (night)",desc:"Grilled skewers with peanut sauce. Only after dark!"},{id:"laksa",name:"Laksa",icon:"\u{1F35C}",where:"Chinatown",desc:"Spicy coconut curry noodles with cockles and tau pok."},{id:"crab",name:"Chilli Crab",icon:"\u{1F980}",where:"Marina Bay",desc:"Sweet, spicy, eggy gravy. Mop it up with fried mantou."},{id:"icecream",name:"Ice Cream Sandwich",icon:"\u{1F366}",where:"Sentosa",desc:"A brick of ice cream wrapped in rainbow bread. $1!"}],I1=["q_kopi","q_chope","q_photo","q_card","q_show"],Tu=["hdb","chinatown","sentosa"],P1=["Oyen ran off towards Chinatown. Check the five-foot way!","Oyen hopped on a bus to the beach\u2026 try Sentosa."],Ep=["Aiyo, not enough money leh. Go pick up some coins first. Got many lying around the roads!","Wah, your wallet very light today. Come back when you got more coins, OK?"],pi=s=>s[Math.random()*s.length|0],$t={mei:{char:"female-c",hat:{type:"bun",color:"#8a8584"}},ravi:{char:"male-d",hat:{type:"cap",color:"#ffffff"}},huat:{char:"male-e",base:"sit",y:.05},siti:{char:"female-d",hat:{type:"police",color:"#1f3157"}},tissue:{char:"female-f",hat:{type:"bun",color:"#9a9a9a"}},tan:{char:"male-f",hat:{type:"cap",color:"#f3b33d"}},kachang:{char:"female-b"},boon:{char:"male-c",hat:{type:"cap",color:"#e8735a"}},ali:{char:"male-b",hat:{type:"songkok",color:"#1d1d22"}},laksa:{char:"female-e",hat:{type:"bun",color:"#3a2a20"}},lim:{char:"male-e",hat:{type:"straw",color:"#e8cf8a"}},kenji:{char:"male-a",hat:{type:"bucket",color:"#f1e3c2"}},crab:{char:"female-a",hat:{type:"bun",color:"#2b2220"}},priya:{char:"female-b",hat:{type:"cap",color:"#4c8f6a"}},icecream:{char:"male-c",hat:{type:"straw",color:"#e8cf8a"}},raj:{char:"male-d",hat:{type:"cap",color:"#e2383f"}}},L1={kaya:"bread",kopi:"cup-coffee",prata:"pancakes",chicken:"rice-ball",kachang:"ice-cream-cup",satay:"skewer",laksa:"bowl-soup",crab:"pot-stew",icecream:"popsicle"};function Tp(s){let{dlg:e,sites:t,world:n}=s,i={add:(D,N,W,B,J,G)=>s.npcs.add(D,N,W,B,async ae=>{h=ae;try{await J(ae)}finally{h=null}},G),cheer:D=>s.npcs.cheer(D)},r=(D,N)=>e.say(D,N),o=(D,N,W)=>e.choose(D,N,W),a=D=>s.has(D),c=(D,N,W)=>{W&&i.cheer(W),s.set(D),s.audio.success(),s.ui.toast(`\u2705 Task complete: ${N}`,3500),s.fx.burst(s.player.worldPos().addScaledVector(s.player.pos,2),s.player.pos,"#ffd23f",70,5,1.2,.35),s.refresh(),s.checkFinale()},l=async(D,N,...W)=>s.pay(N)?(s.audio.buy(),W.forEach(B=>s.addFood(B)),h&&W.forEach((B,J)=>d(h,B,J)),!0):(await r(D,pi(Ep)),!1),h=null,u=new Set,d=(D,N,W)=>{let B=L1[N];if(!B||u.has(N))return;u.add(N);let J=D.site,[G,ae]=J.toLocal(s.player.pos),ue=G-D.x,_e=ae-D.z,Ne=Math.hypot(ue,_e)||1,Ke=Math.min(1,Ne*.45);J.spawn(B,D.x+ue/Ne*Ke+W*.35,D.z+_e/Ne*Ke,{h:N==="satay"?.12:.28,center:!0,y:1.08,rot:Math.random()*6})},f=t.hdb;i.add(f,f.spots.auntie,$t.mei,"Auntie Mei",async D=>{if(a("q_kopi")){await r("Auntie Mei",pi(["Kopi-C is with evaporated milk. Kopi-peng got ice. Teh tarik is pulled tea, very frothy one!","Come back tomorrow morning ah, I save you the window seat.","Aiyo, so hot today. Drink more water, OK?"]));return}await r("Auntie Mei","Morning ah! First time here? Come, come, sit. Before you order, Auntie quiz you a bit.");let N=await o("Auntie Mei",'"Kopi-O" means coffee with\u2026?',["Sugar, no milk","Condensed milk","No sugar, no milk"]);if(N===0?await r("Auntie Mei","Wah, steady lah! You know your kopi."):N===1?await r("Auntie Mei",'Aiyo, that one is just "kopi"! Kopi-O is with sugar but no milk. Never mind, now you know.'):await r("Auntie Mei",'That one is "kopi-O kosong". Kosong means zero! Kopi-O still got sugar, OK?'),await o("Auntie Mei","So, kaya toast set? Kaya toast, two soft-boiled eggs and one kopi-O. $3 only.",["One set, please! ($3)","Maybe later"])!==0){await r("Auntie Mei","OK, OK. Auntie here whole day one.");return}await l("Auntie Mei",3,"kaya","kopi")&&(await r("Auntie Mei","Here you go! Crack the eggs, add dark soy sauce and pepper, then dip the toast inside. Shiok right?"),c("q_kopi","Kopi & Kaya Toast",D))}),i.add(f,f.spots.prata,$t.ravi,"Ravi",async()=>{if(a("f_prata")){await r("Ravi","Next time try egg prata or prata bomb. Very nice one!");return}if(await o("Ravi","Hello boss! Roti prata, fresh from the griddle. Kosong with curry, $2. You want?",["Yes please! ($2)","No thanks"])!==0){await r("Ravi","No problem! I flip until you hungry.");return}await l("Ravi",2,"prata")&&(s.set("f_prata"),await r("Ravi","Crispy outside, fluffy inside. Dip in the fish curry!"))}),i.add(f,f.spots.uncle,$t.huat,"Uncle Ah Huat",async()=>{await r("Uncle Ah Huat",pi(["Eh, young one! The Garden Rhapsody at the Supertrees is only at night. Very nice lights, I bring my grandson last week.","Last time this whole place was kampong, you know? Now got HDB, got MRT, got everything already.","You see the orange cat? That one is Oyen. Always sleeping at the void deck, then disappear.","Lau Pa Sat got Satay Street at night. The satay there, wah, shiok!","Low crime doesn't mean no crime. If you find something, bring it to the police post, OK?"]))}),i.add(f,f.spots.officer,$t.siti,"Officer Siti",async D=>{if(a("card")&&!a("q_card")){await r("Officer Siti","An EZ-Link card? You found it in Chinatown? Let me check\u2026 Yes, the owner reported it this morning!"),await r("Officer Siti","Thank you for being so honest. The owner wanted you to have this as a thank-you."),s.give(5),s.ui.toast("\u{1F4B5} You received $5!"),c("q_card","Lost EZ-Link Card",D);return}await r("Officer Siti",pi(["Hello! This is the Neighbourhood Police Post. Remember: low crime doesn't mean no crime!","If you find anything lost, bring it here, OK?","Walk on the pavement and use the zebra crossing ah. The buses here very fast."]))});let g=t.hawker;i.add(g,g.spots.tissue,$t.tissue,"Tissue Auntie",async()=>{if(a("tissue")){await r("Tissue Auntie","Use the tissue to chope a table, then can go order. Nobody will take your seat one!");return}if(await r("Tissue Auntie","Tissue? Tissue? Three packets, one dollar!"),await o("Tissue Auntie","You know how to chope a seat? Just put one tissue packet on the table, then it's yours.",["Buy tissue ($1)","No thanks"])===0){if(!s.pay(1)){await r("Tissue Auntie",pi(Ep));return}s.audio.buy(),s.set("tissue"),s.ui.toast("\u{1F9FB} Got tissue packets. Now chope a table!"),await r("Tissue Auntie","Thank you ah! Go chope a table quickly. Lunch crowd coming!")}}),i.add(g,g.spots.uncleTan,$t.tan,"Uncle Tan",async D=>{if(a("q_chope")){await r("Uncle Tan",pi(["Chicken rice good or not? Come again tomorrow!","My chilli secret recipe one. Cannot tell you."]));return}if(!a("choped")){await r("Uncle Tan","Wah, lunch crowd coming already! Chope a seat first, then come back and order."),a("tissue")||await r("Uncle Tan","No tissue? The auntie at the entrance selling.");return}let N=await o("Uncle Tan","Seat choped already? Good! One plate chicken rice, roasted or steamed? $4.",["Steamed, please! ($4)","Roasted, please! ($4)","Later"]);N!==2&&await l("Uncle Tan",4,"chicken")&&(await r("Uncle Tan",N===0?"Steamed one, silky smooth! Add the chilli and ginger, very shiok.":"Roasted one, skin very crispy! Add some dark soy sauce."),await r("Uncle Tan","Go and makan at your table. Enjoy!"),c("q_chope","Chope a Table",D))}),i.add(g,g.spots.kachang,$t.kachang,"Auntie Lan",async()=>{if(a("f_kachang")){await r("Auntie Lan","Eat fast before it melt!");return}await o("Auntie Lan","Ice kachang! Shaved ice, rose syrup, red bean, attap chee, corn, gula melaka on top. $2. Want?",["Yes! ($2)","Later"])===0&&await l("Auntie Lan",2,"kachang")&&(s.set("f_kachang"),await r("Auntie Lan","Big mountain for you!"))}),i.add(g,g.spots.ckt,$t.boon,"Uncle Boon",async()=>{await r("Uncle Boon",pi(["Char kway teow sold out already lah! Come earlier tomorrow.","The secret is wok hei, the breath of the wok. Must cook on very hot fire."]))}),i.add(g,g.spots.satay,$t.ali,"Encik Ali",async()=>{if(!s.isNight()){await r("Encik Ali","Satay Street only open at night lah! Come back after 7pm, I fire up the grill.");return}if(a("f_satay")){await r("Encik Ali","Terima kasih! Thank you, come again!");return}await o("Encik Ali","Satay! Chicken, mutton, beef. Ten sticks with ketupat and peanut sauce, $5.",["Ten sticks! ($5)","Later"])===0&&await l("Encik Ali",5,"satay")&&(s.set("f_satay"),await r("Encik Ali","Dip properly in the peanut sauce ah. Sedap!"))});let y=g.dirAt(...g.spots.chopeTable),m=sr(new Rt(.32,.08,.22),"#ffffff",.02);g.put(m,g.spots.chopeTable[0]+.2,g.spots.chopeTable[1],.4,.82),m.visible=a("choped"),s.scene.add(m),n.addAct({dir:y,r:2,label:"Chope this table",show:()=>!a("choped")&&!a("q_chope"),run:async()=>{if(!a("tissue")){await r("","You need something to chope the table with\u2026 The tissue auntie near the entrance might help.");return}s.set("choped"),m.visible=!0,s.audio.pop(),await r("","You place a tissue packet on the table. Choped! Now it's yours. Go order from Uncle Tan."),s.refresh()}});let p=t.chinatown;i.add(p,p.spots.laksa,$t.laksa,"Auntie Rosie",async()=>{if(a("f_laksa")){await r("Auntie Rosie","Spicy or not? Drink some water!");return}let D=await o("Auntie Rosie","Laksa! Thick coconut curry, cockles, prawns, tau pok. Very shiok. $4.",["One bowl! ($4)","Too spicy for me"]);D===0&&await l("Auntie Rosie",4,"laksa")?(s.set("f_laksa"),await r("Auntie Rosie","Use the spoon only, no need chopsticks. The noodles cut short already!")):D===1&&await r("Auntie Rosie","Can ask for less chilli one, don't worry!")}),i.add(p,p.spots.lim,$t.lim,"Uncle Lim",async()=>{await r("Uncle Lim",pi(['Chinatown in Chinese is "Niu Che Shui". It means bullock cart water. Last time they used carts to bring water here!','These shophouses got the "five-foot way" in front. Shelter from sun and rain. Very clever, right?',"The temple there keeps a relic of the Buddha. Very peaceful inside, go and see.","During Chinese New Year, this whole street full of lanterns. Even more than now!"]))});let v=sr(new Rt(.42,.04,.28),"#2f8fd8",.02);p.put(v,p.spots.card[0],p.spots.card[1],.5,.03),v.visible=!a("card"),s.scene.add(v),n.addAct({dir:p.dirAt(...p.spots.card),r:1.8,label:"Pick up the card",show:()=>!a("card"),run:async()=>{s.set("card"),v.visible=!1,s.audio.pop(),await r("","It's an EZ-Link card! Someone must have dropped it on the way to the MRT."),await r("","You should hand it in at the Neighbourhood Police Post in the HDB estate."),s.refresh()}});let x=t.marina;i.add(x,x.spots.kenji,$t.kenji,"Kenji",async()=>{if(a("q_photo")){await r("Kenji","Arigatou! My family will love the photo. Next I go to Sentosa!");return}if(!a("photoAsk")){await r("Kenji","Excuse me! I am visiting from Japan. Could you help me take a photo of the Merlion?"),await r("Kenji","The best angle is from the \u{1F4F7} spot on the promenade. Please, take it from there!"),s.set("photoAsk"),s.refresh();return}await r("Kenji","The \u{1F4F7} spot is the yellow circle on the promenade, near the Merlion!")}),i.add(x,x.spots.crab,$t.crab,"Auntie Bee",async()=>{if(a("f_crab")){await r("Auntie Bee","Don't waste the gravy! Mop it all up.");return}let D=await o("Auntie Bee","Chilli crab, Singapore's famous one! Comes with fried mantou buns. $12.",["Treat myself! ($12)","Too expensive"]);D===0&&await l("Auntie Bee",12,"crab")?(s.set("f_crab"),await r("Auntie Bee","Use your hands, no shy! Very messy but very shiok.")):D===1&&await r("Auntie Bee","Collect more coins and come back! Worth it, I promise.")}),n.addAct({dir:x.dirAt(...x.spots.photo),r:1.6,label:"Take a photo \u{1F4F7}",show:()=>a("photoAsk")&&!a("q_photo"),run:async()=>{let D=s.photo();s.audio.shutter(),s.ui.flash(),s.ui.modal(`<h2>\u{1F4F8} Merlion, Marina Bay</h2><img class="photo" src="${D}" alt="Photo of the Merlion"><p>Kenji sent you $5 by PayNow. Thanks!</p>`),await new Promise(N=>{s.ui.onModalClose=N}),s.give(5),c("q_photo","Merlion Photo")}});let _=t.gardens;i.add(_,_.spots.priya,$t.priya,"Priya",async()=>{if(a("q_show")){await r("Priya","Wasn't the Garden Rhapsody beautiful? The Supertrees are vertical gardens, with over 160,000 plants!");return}if(s.isNight()){await r("Priya","The Garden Rhapsody is on! Go stand in the middle of the grove and look up.");return}await r("Priya","Welcome to Gardens by the Bay! The Supertrees collect rainwater and some of them even make solar power."),await o("Priya","The Garden Rhapsody light show starts at 7:45pm. Want to wait for it?",["Wait until the show","I'll come back later"])===0&&(await s.ui.fade(1,700),s.time=(19.75-6)/24,await new Promise(N=>setTimeout(N,400)),await s.ui.fade(0,700),await r("Priya","It's starting! Go stand under the Supertrees."))});let I=_.dirAt(..._.spots.grove),A=Math.cos(13/ze),C=0,T=!1;s.env.show=!1;let w=t.sentosa;i.add(w,w.spots.icecream,$t.icecream,"Ice Cream Uncle",async()=>{if(a("f_icecream")){await r("Ice Cream Uncle","Eat fast, the sun very strong. Later melt!");return}await o("Ice Cream Uncle","Ice cream! Wrapped in rainbow bread or wafer. Durian, sweet corn, yam\u2026 $1 only!",["Rainbow bread, please! ($1)","No thanks"])===0&&await l("Ice Cream Uncle",1,"icecream")&&(s.set("f_icecream"),await r("Ice Cream Uncle","Here! Rainbow bread and a big brick of ice cream. Sedap!"))}),i.add(w,w.spots.raj,$t.raj,"Lifeguard Raj",async()=>{await r("Lifeguard Raj",pi(["Swim between the flags ah! And remember to put on sunblock.","Best view of the sunset is from the bench at Sunset Point. Come around 7pm.","Sometimes got an orange cat sleeping under the palm trees. Don't know how it got here!","If it rains, come out of the water first. The lightning here no joke."]))});let M=Tu.map((D,N)=>{let W=t[D],B=W.spots.cat,J=fp();return W.put(J,B[0],B[1],B[2]),s.scene.add(J),n.addAct({dir:W.dirAt(B[0],B[1]),r:1.8,label:"Pet the cat",show:()=>L()===N,run:async()=>{if(s.audio.meow(),s.set(`cat${N+1}`),N===0)await r("","Meow~ It's Oyen, the void deck cat! It stretches lazily\u2026 then dashes off down the road.");else if(N===1)await r("","Meow! Oyen again? It sniffs your hand and runs off once more.");else{await r("","Oyen is sunbathing on the beach! It purrs and lets you scratch its chin."),c("q_cat","Where's Oyen?");return}s.ui.toast("\u{1F408} Hidden task found: Where's Oyen?"),s.refresh()}}),J}),L=()=>Tu.filter((D,N)=>a(`cat${N+1}`)).length;function H(){let D=L();return[{id:"q_kopi",title:"Kopi & Kaya Toast",site:"hdb",hint:"Order a kaya toast set from Auntie Mei at the HDB kopitiam."},{id:"q_chope",title:"Chope a Table",site:"hawker",hint:a("tissue")?a("choped")?"Order chicken rice from Uncle Tan ($4).":"Chope an empty table with a tissue packet.":"Buy tissue from the auntie at the Lau Pa Sat entrance."},{id:"q_photo",title:"Merlion Photo",site:"marina",hint:a("photoAsk")?"Take the photo from the \u{1F4F7} spot near the Merlion.":"A tourist at Marina Bay needs help."},{id:"q_card",title:"Lost EZ-Link Card",site:a("card")?"hdb":"chinatown",hint:a("card")?"Hand the card in at the Neighbourhood Police Post (HDB).":"Someone dropped something on a Chinatown street\u2026"},{id:"q_show",title:"Garden Rhapsody",site:"gardens",hint:"Watch the Supertree light show at Gardens by the Bay. It only runs at night."},D?{id:"q_cat",title:`Where's Oyen? (${D}/3)`,site:Tu[Math.min(D,2)],hint:P1[D-1]||"",hidden:!0}:{id:"q_cat",title:"??? Hidden task",site:null,hint:"Keep an eye out at the void decks\u2026",hidden:!0}].map(N=>({...N,done:a(N.id)}))}return{tasks:H,mainDone:()=>I1.every(a),activeSites:()=>new Set(H().filter(D=>!D.done&&!D.hidden&&D.site).map(D=>D.site)),update(D){M.forEach((B,J)=>{B.visible=L()===J});let N=s.isNight(),W=s.player.pos.dot(I)>A&&s.player.alt<2;s.env.show=N&&W,N&&W&&!a("q_show")?(T||(T=!0,s.ui.toast("\u{1F3B6} The Garden Rhapsody begins! Look up\u2026",4e3)),C+=D,C>15&&c("q_show","Garden Rhapsody")):(C=Math.max(0,C-D*.5),W||(T=!1))}}}function D1(){let s=document.createElement("canvas");s.width=96,s.height=64;let e=s.getContext("2d");e.fillStyle="#ef3340",e.fillRect(0,0,96,32),e.fillStyle="#ffffff",e.fillRect(0,32,96,32),e.beginPath(),e.arc(20,16,10,0,Math.PI*2),e.fill(),e.fillStyle="#ef3340",e.beginPath(),e.arc(24,16,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff";for(let n=0;n<5;n++){let i=-Math.PI/2+n*Math.PI*2/5;e.beginPath(),e.arc(30+Math.cos(i)*5,16+Math.sin(i)*5,1.6,0,Math.PI*2),e.fill()}let t=new Xt(s);return t.colorSpace=et,t}function U1(s){let e=s.sub(-6,9);for(let t=0;t<18;t++)for(let n=0;n<13;n++)(t+n)%2&&e.paintRect(-5.1+t*.6,-3.6+n*.6,.6,.6,"#b9a387",0,!0);e.paintRect(0,0,10.8,7.8,"#d8c9ae");for(let[t,n]of[[-5.1,-3.9],[0,-3.9],[5.1,-3.9],[-5.1,3.9],[5.1,3.9]])e.rbox(t,n,.32,3.3,.32,"#2f6f55",{r:.05}),e.solid(t,n,.32,.32);e.rbox(0,0,11.2,.18,8.6,"#e9e2d0",{y:3.3,r:.05});for(let t of[-1,1])e.rbox(0,t*2.25,11.6,.12,4.7,"#4f8d73",{y:3.75,rx:t*.2,r:.03});e.rbox(0,0,11.6,.22,.3,"#3f7a63",{y:4.18,r:.05});for(let t of[-4.4,4.4])e.cyl(0,t,.08,.08,11.6,"#cfd3d6",{y:3.3,rz:Math.PI/2,seg:8});e.sign(0,-4.38,"KOPITIAM \u5496\u5561\u5E97",{w:4.6,h:.85,y:2.95,rot:Math.PI,bg:"#e2383f"});for(let t of[-3,0,3]){let n=e.spawn("ceilingFan",t,0,{w:1.4,y:2.9});s.updaters.push(i=>{n.rotation.y+=i*6})}e.rbox(0,4.05,10.6,3.3,.22,"#efe2c4",{r:.04}),e.solid(0,4.05,10.6,.3),e.sign(-2.6,3.92,`KOPI 1.40  TEH 1.40
MILO 1.80  KOPI-O 1.20`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.sign(2.6,3.92,`PRATA KOSONG 1.20
EGG 1.80  MURTABAK 6`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.rbox(-2.6,2.2,4.4,1,.9,"#f0c64a",{r:.05}),e.rbox(-2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let t=0;t<12;t++)e.box(-4.6+t*.36,1.74,.34,.85,.02,t%2?"#e9b42f":"#f3d26b",{y:.1});e.model("kitchenFridgeLarge",-4.4,3.5,{h:2,rot:Math.PI,center:!0}),e.model("kitchenCoffeeMachine",-1.4,2.25,{h:.45,y:1.06,rot:Math.PI,center:!0});for(let t=0;t<5;t++)e.model(t%2?"cup-saucer":"cup-coffee",-4.2+t*.4,2,{w:.22,y:1.06,center:!0,shadow:!1});e.lathe(-3,2.35,[[0,0],[.13,0],[.15,.2],[.1,.32],[.05,.34],[0,.34]],"#c6cbd0",{y:1.06,seg:14}),e.sign(-2.6,2.66,"DRINKS \u996E\u6599",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#2b6cb0",board:!1}),e.rbox(2.6,2.2,4.4,1,.9,"#e98d4a",{r:.05}),e.rbox(2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let t=0;t<12;t++)e.box(.6+t*.36,1.74,.34,.85,.02,t%2?"#d9772f":"#f0a462",{y:.1});e.cyl(2.9,2.2,.62,.62,.06,"#2b2b2b",{y:1.06,seg:24}),e.model("pancakes",1.6,2.15,{w:.4,y:1.06,center:!0}),e.model("kitchenStove",4.3,3.45,{h:1,rot:Math.PI,center:!0}),e.model("pot-stew",4.3,3.45,{w:.5,y:1,center:!0}),e.sign(2.6,2.66,"ROTI PRATA",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#b5442c",board:!1}),e.solid(0,2.2,9.6,.9);for(let[t,n]of[[-3.3,-1.6],[0,-1.6],[3.3,-1.6],[-1.65,.6]])is(e,t,n,"#ece6da",["#d24b3e","#2f8fd8","#3fae49","#f3c13a"][Math.abs(Math.round(t))%4]);e.model("cup-coffee",-3.1,-1.5,{w:.2,y:.79,center:!0,shadow:!1}),e.model("books",.2,-1.7,{w:.35,y:.79,center:!0,shadow:!1}),e.model("plate",3.3,-1.6,{w:.4,y:.79,center:!0,shadow:!1}),e.model("egg-cooked",3.3,-1.6,{w:.25,y:.82,center:!0,shadow:!1}),e.rbox(4.6,.4,.9,1.2,.6,"#3f7a63",{r:.05}),e.sign(4.6,.72,`TRAY
RETURN`,{w:.7,h:.45,y:1.5,bg:"#3fae49",board:!1}),e.solid(4.6,.4,.9,.6),e.model("trashcan",-4.7,.6,{h:.9,center:!0,solid:"circle"}),e.model("pottedPlant",-4.7,-3.4,{h:1.3,center:!0}),e.model("pottedPlant",4.7,-3.4,{h:1.3,center:!0})}function N1(s){let e=s.sub(8,9.5);e.rbox(0,0,5.6,3.3,4.1,"#f2f4f7",{r:.12}),e.rbox(0,0,5.8,.5,4.3,"#1f4e9c",{y:2.55,r:.06}),e.rbox(0,0,6.3,.25,4.8,"#d7dde6",{y:3.3,r:.08}),e.rbox(0,-2.4,3.2,.12,1.2,"#1f4e9c",{y:2.75,r:.04});for(let r of[-1.5,1.5])e.cyl(r,-2.9,.05,.05,2.75,"#c9cdd2",{seg:8});e.rbox(0,-2.06,1.5,2.3,.06,"#9fc2e0",{r:.03,glow:"win"}),e.box(0,-2.1,.04,2.3,.05,"#c9cdd2");for(let r of[-2,2])e.rbox(r,-2.06,1,1,.06,"#9fc2e0",{y:1,r:.03,glow:"win"});e.sign(0,-2.12,"NEIGHBOURHOOD POLICE POST",{w:5,h:.42,y:2.8,rot:Math.PI,bg:"#1f4e9c",board:!1}),e.solid(0,0,5.6,4.1),e.cyl(3.6,-2.6,.05,.07,6,"#d9dde2",{seg:8}),e.ball(3.6,-2.6,.1,"#d9a93f",{y:6});let t=new Ue(new sn(1.5,1),new ft({map:D1(),side:Jt,roughness:.9}));t.position.set(.76,0,0);let n=new $e;n.add(t),e.put(n,3.6,-2.6,Math.PI/2,5.3),s.group.add(n);let i=0;s.updaters.push(r=>{i+=r,t.rotation.y=Math.sin(i*2.2)*.15}),e.solidCircle(3.6,-2.6,.15),Yt(e,-1.6,-3.4,0)}function O1(s){s.paintCircle(1,-6.3,3.6,"#e9d29a");let e=s.sub(1,-6.3,.2),t=["#e2383f","#f3c13a","#2f8fd8","#3fae49"];for(let i=0;i<4;i++){let r=new xt(.85,.32,12,24,Math.PI);e.raw(r,t[i],-1.6+i*1.15,0,new oe().makeRotationY(Math.PI/2).setPosition(0,0,0))}e.rbox(-2.9,0,1.4,1.5,1.2,"#e2383f",{r:.25}),e.rbox(-3.55,0,.6,.6,.9,"#f3c13a",{y:.5,r:.15});for(let i of[-.35,.35])e.ball(-3,i,.17,"#ffffff",{y:1.15}),e.ball(-3.12,i,.08,"#222",{y:1.22}),e.cone(-2.6,i*1.3,.12,.5,"#f3c13a",{y:1.45,rz:.5});for(let i=0;i<5;i++)e.cone(-2.4+i*.6,0,.13,.35,"#f3c13a",{y:1.15+i%2*.05});e.cone(2.7,0,.35,1.3,"#3fae49",{rz:-1.2,y:.3}),e.tube(1.2,1.3,[[0,1,0],[.6,.7,.5],[1.4,.25,.9],[2,.08,1]],.28,"#f39c32",{rseg:8}),e.solid(0,0,6.2,1.8);let n=s.sub(-3.2,-6.8);for(let i of[-1,1])for(let r of[-.5,.5])n.cyl(i*1.1,r,.05,.05,2.5,"#5a6470",{rz:i*.12,rx:r*.25,seg:6});n.cyl(0,0,.06,.06,2.4,"#5a6470",{y:2.45,rz:Math.PI/2,seg:8});for(let i of[-.45,.45]){for(let r of[-.18,.18])n.cyl(i+r,0,.01,.01,1.85,"#9aa1a8",{y:.6,seg:3});n.rbox(i,0,.45,.05,.25,"#e2383f",{y:.58,r:.02})}n.solid(0,0,2.4,1.2)}function F1(s){let e=s.sub(-13.5,4.4);for(let t of[-1.7,1.7])e.rbox(t,.6,.12,2.6,.12,"#6c7a86",{r:.03});e.rbox(0,.1,4,.14,1.7,"#8fa4b5",{y:2.6,r:.05,rx:-.06}),e.rbox(0,.75,3.5,1.7,.05,"#d7ecf5",{y:.7,r:.02}),e.rbox(1.6,.7,.9,1.6,.12,"#ffffff",{y:.6,r:.03,glow:"win"}),Yt(e,-.2,.35,Math.PI),e.cyl(2.4,-.1,.05,.05,2.6,"#6c7a86",{seg:8}),e.sign(2.4,-.1,`BUS STOP
52009`,{w:.9,h:.7,y:2.7,bg:"#2b8a3e"}),e.sign(-1,.68,"52 \xB7 88 \xB7 157 \xB7 232",{w:1.6,h:.35,y:1.9,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.solid(0,.6,3.6,.4)}function B1(s,e,t,n){let i=t-e,r=Math.max(2,Math.round(i/3)),o=s.sub((e+t)/2,n);for(let a=0;a<=r;a++){let c=-i/2+a*i/r;o.cyl(c,0,.08,.08,2.6,"#6b7f72",{seg:8}),o.solidCircle(c,0,.12)}o.rbox(0,0,i+.4,.1,1.5,"#4f8d73",{y:2.62,r:.04});for(let a of[-.72,.72])o.rbox(0,a,i+.4,.16,.08,"#3f7a63",{y:2.5,r:.03})}function Ap(s){s.paintRect(0,-11.5,36,10,"#d9d1bf"),s.paintRect(0,9.5,36,10,"#ddd5c3");for(let e=0;e<6;e++)s.paintRect(-10,-2.1+e*.84,3,.42,"#f4f1e6",0,!0);Oa(s,-8,-12,0,{w:12.5,d:5,floors:6,accent:"#4fa3a5",no:"123",seed:5}),Oa(s,9.5,-12.5,.18,{w:10.5,d:5,floors:7,accent:"#e9825f",no:"125",seed:9}),Oa(s,.5,-22,0,{w:16,d:5,floors:9,accent:"#8e7cc3",no:"127",seed:13}),U1(s),s.spots.auntie=[-8.6,12.3,Math.PI],s.spots.prata=[-3.4,12.3,Math.PI],s.spots.uncle=[-3.39,8.09,2.36],N1(s),s.spots.officer=[8,6.6,Math.PI],O1(s),F1(s),B1(s,-16,-9.8,-4.6);for(let[e,t,n]of[[-11.8,-3.5,Math.PI/2],[-8.2,3.5,-Math.PI/2]])s.model("traffic-light",e,t,{h:3.4,rot:n,solid:"circle"});for(let[e,t,n]of[[-15.5,7.5,1],[15.5,14,1.1],[-15,-6.5,.9],[15.5,-5.5,1],[3,15.5,1.1],[-14.5,15,1]])Wn(s,e,t,n);jt(s,8.5,-4.4,3.6,.9),jt(s,-5,5.6,3,.8);for(let[e,t]of[[13,4.6],[-1,-9.8],[-15,-9.5],[14,11]])Xn(s,e,t,1,!0);Yt(s,13,7.5,Math.PI/2),Yt(s,-4.5,-5,0);for(let e of[-2,5,14])wn(s,e,3.8,0),s.solidCircle(e,3.8,.15);s.model("trashcan",12,4.6,{h:.9,center:!0,solid:"circle"}),s.spots.cat=[-7.2,-9,.6],s.coins=[[12,-6.5],[-14.5,2.6],[5,5.6]]}var fr="#e9e3d3",ro="#c9bfa8",Au="#7d8fa3";function k1(){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#fdfbf3",e.fillRect(0,0,256,256),e.strokeStyle="#2e2638",e.lineWidth=10,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.fillStyle="#2e2638",e.font="bold 30px Georgia, serif",e.textAlign="center",e.textBaseline="middle",["XII","III","VI","IX"].forEach((n,i)=>{let r=-Math.PI/2+i*Math.PI/2;e.fillText(n,128+Math.cos(r)*88,128+Math.sin(r)*88)});for(let n=0;n<12;n++){let i=n*Math.PI/6;e.fillRect(128+Math.cos(i)*104-3,128+Math.sin(i)*104-3,6,6)}e.lineCap="round",e.lineWidth=9,e.beginPath(),e.moveTo(128,128),e.lineTo(178,98),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(128,128),e.lineTo(128,40),e.stroke();let t=new Xt(s);return t.colorSpace=et,Ni("clockface",new ft({map:t,roughness:.6}))}function H1(s){let e=s.sub(0,-11);s.paintCircle(0,-11,8.8,"#d9cdb4");for(let a=2;a<8.6;a+=1.6)s.paintCircle(0,-11,a,a%3.2<1.6?"#cfc2a6":"#d9cdb4");s.paintRect(0,-3.6,4.4,2.6,"#d9cdb4");let t=[[.42,0],[.42,.22],[.32,.3],[.26,.45],[.2,.6],[.18,3.55],[.24,3.65],[.36,3.8],[.44,3.95],[.44,4.1],[0,4.12]],n=Array.from({length:8},(a,c)=>(c+.5)*Math.PI/4),i=n.map(a=>[Math.sin(a)*7.6,Math.cos(a)*7.6]);i.forEach(([a,c])=>{e.lathe(a,c,t,fr,{seg:16});for(let l of[1.2,2.4])e.cyl(a,c,.22,.22,.08,ro,{y:l,seg:14});e.solidCircle(a,c,.42)});for(let a=0;a<8;a++){let[c,l]=i[a],[h,u]=i[(a+1)%8],d=Math.hypot(h-c,u-l),f=e.sub((c+h)/2,(l+u)/2,Math.atan2(h-c,u-l)-Math.PI/2);f.tube(0,0,[[-d/2,3.7,0],[-d/4,4.05,0],[0,4.15,0],[d/4,4.05,0],[d/2,3.7,0]],.08,fr);for(let g=-1;g<=1;g++)f.raw(new xt(.22,.035,6,16),ro,g*d/4,0,new oe().makeTranslation(0,4.35-Math.abs(g)*.08,0))}e.cyl(0,0,8.25,8.25,.55,fr,{y:4.15,seg:8,spin:Math.PI/8}),e.cyl(0,0,8.4,8.4,.12,ro,{y:4.68,seg:8,spin:Math.PI/8}),e.cone(0,0,9.4,2.7,Au,{y:4.75,seg:8,spin:Math.PI/8}),n.forEach(a=>e.tube(0,0,[[Math.sin(a)*9.35,4.78,Math.cos(a)*9.35],[Math.sin(a)*4.7,6.15,Math.cos(a)*4.7],[Math.sin(a)*.4,7.4,Math.cos(a)*.4]],.07,fr)),e.cyl(0,0,2.6,2.6,1.3,fr,{y:6.9,seg:8,spin:Math.PI/8});for(let a=0;a<4;a++)e.cyl(0,0,2.66,2.66,.08,"#8b98a5",{y:7.05+a*.3,seg:8,spin:Math.PI/8});e.cone(0,0,3.4,1.5,Au,{y:8.2,seg:8,spin:Math.PI/8}),e.rbox(0,0,1.5,2.3,1.5,fr,{y:9.3,r:.08}),e.rbox(0,0,1.7,.18,1.7,ro,{y:11.6,r:.05}),k1();for(let a=0;a<4;a++){let c=e.sub(0,0,a*Math.PI/2);c.cyl(0,.77,.52,.52,.04,"#ffffff",{y:10.45,rx:Math.PI/2,seg:28,mat:"clockface",ry:Math.PI}),c.raw(new xt(.53,.05,6,24),ro,0,.78,new oe().makeTranslation(0,10.45,0))}e.cone(0,0,1.15,1.7,Au,{y:11.75,seg:4,spin:Math.PI/4}),e.cyl(0,0,.03,.05,.9,"#d9a93f",{y:13.4,seg:6}),e.ball(0,0,.12,"#d9a93f",{y:14.2}),e.sign(0,7.75,"LAU PA SAT \u8001\u5DF4\u5239",{w:4.4,h:.7,y:4.42,bg:"#5c6f84",board:!1});for(let a of[[-3,0],[3,0],[0,-2.5],[0,2.5]]){let c=e.spawn("ceilingFan",a[0],a[1],{w:1.4,y:4});s.updaters.push(l=>{c.rotation.y+=l*5})}e.rbox(0,-5.95,12.6,3,.25,"#eadfca",{r:.04}),e.solid(0,-5.95,12.6,.3),[["CHICKEN RICE \u9E21\u996D","#f3b33d"],["ICE KACHANG","#7cc6d6"],["CHAR KWAY TEOW","#e8735a"],["CARROT CAKE","#9ccf6b"]].forEach(([a,c],l)=>{let h=-4.6+l*3.07;e.rbox(h,-4.4,2.8,1.05,1,c,{r:.05}),e.rbox(h,-4.4,2.9,.06,1.1,"#f7f2e6",{y:1.05,r:.02}),e.rbox(h,-4.2,2.5,.4,.5,"#d9eef5",{y:1.11,r:.04});for(let u=0;u<3;u++)e.rbox(h-1+u*1,-5.86,.9,.5,.05,"#2b2b2b",{y:2.75,r:.02});e.sign(h,-5.8,a,{w:2.7,h:.55,y:2.3,bg:c,fg:"#2e2638",board:!1}),e.sign(h+1.15,-3.88,`#01-${12+l}`,{w:.45,h:.22,y:.75,bg:"#ffffff",fg:"#2e2638",board:!1})});for(let a=0;a<3;a++)e.ball(-5.4+a*.4,-5.4,.14,"#c8743a",{y:1.65,sy:1.3});e.cyl(-5,-5.4,.015,.015,1.4,"#888",{y:1.95,rz:Math.PI/2,seg:4}),e.model("rice-ball",-3.9,-4.6,{w:.25,y:1.11,center:!0}),e.model("ice-cream-cup",-1.9,-4.6,{w:.25,y:1.11,center:!0}),e.model("kitchenBlender",-1,-4.6,{h:.4,y:1.11,center:!0}),e.model("frying-pan",1.5,-4.5,{w:.6,y:1.11,center:!0}),e.model("kitchenStove",1.2,-5.4,{h:1,center:!0,rot:0}),e.model("steamer",4.3,-4.5,{w:.4,y:1.11,center:!0}),e.model("pot",5,-4.5,{w:.4,y:1.11,center:!0}),e.solid(0,-4.4,12.6,1),s.spots.uncleTan=[-4.6,-16.25,0],s.spots.kachang=[-1.53,-16.25,0],s.spots.ckt=[1.54,-16.25,0],[[-4.2,-.8],[0,-.8],[4.2,-.8],[-2.1,2.3],[2.1,2.3]].forEach(([a,c],l)=>is(e,a,c,"#ece6da",["#d24b3e","#2f8fd8","#f3c13a","#3fae49","#d24b3e"][l])),e.model("bowl-soup",-4,-.7,{w:.35,y:.79,center:!0,shadow:!1}),e.model("chopstick",-4.3,-.9,{w:.3,y:.8,center:!0,shadow:!1}),e.model("cup-tea",.2,-.9,{w:.18,y:.79,center:!0,shadow:!1}),e.model("plate-dinner",-2,2.3,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.chopeTable=[2.1,-8.7],s.spots.tissue=[-4.6,-6,0],e.rbox(-4.6,5.8,.6,.45,.4,"#8a6a4a",{r:.04});for(let a=0;a<6;a++)e.rbox(-4.8+a%2*.22,5.8,.18,.08,.12,["#ffffff","#f7c6d9","#cde8f2"][a%3],{y:.45+Math.floor(a/2)*.08,r:.02});e.model("trashcan",5.6,3.2,{h:.9,center:!0,solid:"circle"})}function z1(s){s.paintRect(7,8,11,6,"#cbbca0"),ss(s,5,6.8,Math.PI,"#b5442c","#e2383f",{grill:!0,label:"SATAY 7",signBg:"#e2383f"}),ss(s,9.2,6.8,Math.PI,"#b5442c","#f3c13a",{grill:!0,label:"SATAY \u6C99\u7239",signBg:"#d18a1a"}),s.spots.satay=[5,8.2,Math.PI];for(let a of[3.6,6.8,10.2])is(s,a,10.2,"#ece6da","#f3c13a");s.model("skewer",3.7,10.1,{w:.4,y:.79,center:!0,shadow:!1}),s.model("soda-can",6.9,10.3,{h:.18,y:.79,center:!0,shadow:!1});for(let[a,c]of[[2.6,5.6],[11.6,5.6],[2.6,11.8],[11.6,11.8]])s.cyl(a,c,.05,.05,3.6,"#555",{seg:6});let e=["#ffd27a","#ff8fb1","#9ff0ff","#c4ff8a"];for(let[a,c]of[[[2.6,5.6],[11.6,5.6]],[[2.6,11.8],[11.6,11.8]],[[2.6,5.6],[2.6,11.8]],[[11.6,5.6],[11.6,11.8]]])for(let l=0;l<=12;l++){let h=l/12,u=a[0]+(c[0]-a[0])*h,d=a[1]+(c[1]-a[1])*h;s.ball(u,d,.07,e[l%4],{y:3.5-Math.sin(h*Math.PI)*.35,glow:"win"})}let t=60,n=new Float32Array(t*3),i=[];for(let a=0;a<t;a++)i.push([Math.random(),Math.random()*1.4-.7,Math.random()*.3]);let r=new dt;r.setAttribute("position",new ct(n,3));let o=new Hn(r,new Ln({color:14540253,size:.5,transparent:!0,opacity:.35,depthWrite:!1}));o.frustumCulled=!1,s.put(o,5,6.95,Math.PI,1.4),s.group.add(o),s.updaters.push((a,c)=>{if(o.visible=c.night>.4,!!o.visible){for(let l=0;l<t;l++){let h=i[l];h[0]=(h[0]+a*.4)%1,n[l*3]=h[1]+Math.sin(h[0]*6+l)*.15,n[l*3+1]=h[0]*2.2,n[l*3+2]=h[2]+h[0]*.4}r.attributes.position.needsUpdate=!0}})}function Rp(s){H1(s),z1(s);for(let[e,t,n,i,r]of[["building-skyscraper-c",-8,13,26,0],["building-skyscraper-a",-1.5,17,21,.3],["building-skyscraper-e",13,16,24,-.2],["building-skyscraper-b",-14.5,17,18,.5]])s.model(e,t,n,{h:i,rot:r,center:!0,solid:!0});s.model("building-g",15.5,9,{h:7,rot:-Math.PI/2,center:!0,solid:!0});for(let[e,t]of[[-13,-4.8],[13,-4.8],[-14,5.5],[14.5,4.8]])Wn(s,e,t,1);jt(s,-9.5,-3.9,3.5,.8),jt(s,9.5,-3.9,3.5,.8),Xn(s,1.5,5.4,1,!0),Yt(s,-4.5,5.2,Math.PI);for(let e of[-12,-6.5,6.5,12])wn(s,e,-3.8,Math.PI),s.solidCircle(e,-3.8,.15);s.coins=[[-12,-7],[12,4.6],[0,8.5]]}var Ru=["#f6c1c1","#a8d8c8","#f7e1a1","#b9c8ef","#f3b38f","#cfe7a2","#e7c3ef","#f9d2a7","#a9d6ec"],Cp=["#4f8f6f","#3f6f9a","#9a4f4f","#4f7f5f","#6a5a9a"],Ip=["MEDICAL HALL","BAK KWA \u8089\u5E72","TAILOR","KOPI","ANTIQUES","DIM SUM","TEA HOUSE \u8336","GOLDSMITH","BOOKS"];function V1(){let s=document.createElement("canvas");s.width=64,s.height=64;let e=s.getContext("2d");e.fillStyle="#c4553b",e.fillRect(0,0,64,64);for(let n=0;n<64;n+=16){let i=e.createLinearGradient(n,0,n+16,0);i.addColorStop(0,"#9f3e2b"),i.addColorStop(.5,"#d86a4c"),i.addColorStop(1,"#9f3e2b"),e.fillStyle=i,e.fillRect(n,0,16,64)}e.fillStyle="rgba(80,20,10,0.35)";for(let n=0;n<64;n+=16)e.fillRect(0,n,64,2);let t=new Xt(s);t.colorSpace=et,t.wrapS=t.wrapT=ln,t.repeat.set(3,3),Ni("rooftile",new ft({map:t,roughness:.75}))}function Pp(s,e,t,n){let i=new sn(s,e,24,24).rotateX(-Math.PI/2),r=i.attributes.position;for(let o=0;o<r.count;o++){let a=Math.abs(r.getX(o))/(s/2),c=Math.abs(r.getZ(o))/(e/2),l=Math.max(a,c);r.setY(o,t*Math.pow(1-l,1.7)+n*Math.pow(a,6)*Math.pow(c,6)+n*.25*Math.pow(l,8))}return i.computeVertexNormals(),i}function G1(s,e,t,n){let i=s.sub(e,t),r=Ru[n%Ru.length],o=Cp[n%Cp.length],a=n%3===1,c=a?9.4:6.6;i.box(0,-.6,3.2,3.1,4.8,Bt(r,-.05));for(let h=0;h<7;h++)i.box(-1+h*.33,1.83,.3,2.3,.04,h%2?"#7a5a3a":"#8d6a46",{y:.05});i.sign(0,1.86,Ip[n%Ip.length],{w:2.4,h:.42,y:2.65,bg:"#2b2b2b",fg:"#f3d26b",board:!1}),i.box(0,0,3.2,c-3.1,6,r,{y:3.1});for(let h of[-1.5,1.5])i.rbox(h,3.02,.24,c-3.1,.12,Bt(r,.06),{y:3.1,r:.03});let l=a?[3.6,6.4]:[3.6];for(let h of l){i.rbox(0,3.03,3,.22,.16,"#ffffff",{y:h-.25,r:.04});for(let u=0;u<9;u++)i.box(-1.2+u*.3,3.04,.26,.26,.03,["#2f8fd8","#ffffff","#3fae49"][u%3],{y:h-.6});for(let u of[-.72,.72]){i.box(u,3,.78,1.6,.05,"#2e2a26",{y:h}),i.cyl(u,3,.4,.4,.06,"#fdf4d8",{y:h+1.6,rx:Math.PI/2,seg:16,glow:"win"}),i.box(u,3,.82,.08,.08,"#ffffff",{y:h+1.58});for(let d of[-1,1]){let f=u+d*.2;i.rbox(f,3.04,.38,1.55,.05,o,{y:h+.02,r:.015});for(let g=0;g<7;g++)i.box(f,3.07,.32,.03,.02,Bt(o,.12),{y:h+.2+g*.2})}}}i.rbox(0,3.08,3.25,.25,.25,"#ffffff",{y:c-.45,r:.05});for(let h=0;h<10;h++)i.box(-1.45+h*.32,3.12,.12,.12,.1,"#f1ece0",{y:c-.6});i.box(0,1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:.42,mat:"rooftile"}),i.box(0,-1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:-.42,mat:"rooftile"}),i.cyl(0,0,.1,.1,3.4,"#8f3a28",{y:c+.68,rz:Math.PI/2,seg:8}),i.rbox(-1.62,0,.12,.9,6.2,Bt(r,-.1),{y:c-.2,r:.03})}function Lp(s){V1();for(let n=0;n<24;n++)s.paintRect(-14.4+n*1.2+.6,-4.6,1.2,1.3,n%2?"#c99a72":"#b9845e");s.paintRect(0,9,34,11,"#ddd2bd");for(let n=0;n<9;n++)G1(s,-12.8+n*3.2,-7,n);s.solid(0,-7.6,28.8,4.8);for(let n=0;n<=9;n++){let i=-14.4+n*3.2;s.lathe(i,-4.2,[[.24,0],[.24,.25],[.18,.3],[.17,2.4],[.24,2.5],[.24,2.6],[0,2.6]],"#f3ead6",{seg:4,ry:Math.PI/4}),s.solid(i,-4.2,.4,.4),n<9&&(s.tube(i+1.6,-4.2,[[-1.45,2.55,0],[-.8,2.95,0],[0,3.05,0],[.8,2.95,0],[1.45,2.55,0]],.09,"#f3ead6"),s.box(i+1.6,-4.2,3.2,.5,.3,Ru[n],{y:2.9}),s.lathe(i+1.6,-4.25,[[0,0],[.12,.02],[.24,.15],[.26,.3],[.22,.45],[.1,.55],[0,.56]],"#e2383f",{y:1.75,seg:12,glow:"win"}),s.cyl(i+1.6,-4.25,.1,.1,.06,"#d9a93f",{y:2.3,seg:8}),s.cyl(i+1.6,-4.25,.015,.03,.35,"#f3c13a",{y:1.42,seg:5}))}s.sign(-6.4,-3.98,"CHINATOWN \u725B\u8F66\u6C34",{w:4.6,h:.6,y:3.45,bg:"#b8352b",fg:"#ffe8a3"});for(let n of[-9,0,9]){for(let i of[-3.6,3.6])s.cyl(n,i,.08,.1,5,"#7a2a20",{seg:8}),s.ball(n,i,.12,"#d9a93f",{y:5}),s.solidCircle(n,i,.15);s.cyl(n,0,.012,.012,7.2,"#3a2a2a",{y:4.9,rx:Math.PI/2,seg:3});for(let i=-2;i<=2;i++)s.lathe(n,i*1.2,[[0,0],[.12,.02],[.27,.15],[.29,.32],[.24,.48],[.1,.58],[0,.6]],i%2?"#f3c13a":"#e2383f",{y:3.95,seg:12,glow:"win"}),s.cyl(n,i*1.2,.012,.012,.4,"#3a2a2a",{y:4.55,seg:3}),s.cyl(n,i*1.2,.015,.03,.3,"#f3c13a",{y:3.65,seg:5})}let e=s.sub(4,11);e.rbox(0,0,10.4,.8,8.4,"#cfc6b8",{r:.08});for(let n=0;n<3;n++)e.rbox(0,-4.4-n*.35,4.2,.8-n*.27,.4,"#d8d0c3",{r:.03});e.box(0,0,8,4,6,"#b8352b",{y:.8});for(let n of[-3.2,-1.1,1.1,3.2])e.lathe(n,-3.35,[[.3,0],[.3,.2],[.22,.28],[.21,3.6],[.3,3.75],[.3,4],[0,4]],"#c42e22",{y:.8,seg:16}),e.cyl(n,-3.35,.24,.24,.12,"#d9a93f",{y:4,seg:16});e.rbox(0,-3.03,2.2,2.8,.08,"#6b1d17",{y:.8,r:.03});for(let n=0;n<5;n++)for(let i=0;i<4;i++)e.ball(-.75+n*.38,-3.07,.05,"#d9a93f",{y:1.3+i*.6});e.rbox(0,-3.6,8.6,.28,.5,"#d9a93f",{y:4.8,r:.04});let t=[[11.5,9.2,1.9,4.95],[7.6,6.2,1.5,8.35],[5,4.2,1.5,11.15]];e.box(0,0,5.8,2.4,4.6,"#b8352b",{y:6}),e.box(0,0,3.8,1.8,3,"#b8352b",{y:9.4});for(let[n,i,r,o]of t){let a=Pp(n,i,r,.9);e.raw(a,"#3b3536",0,0,new oe().makeTranslation(0,o,0)),e.raw(no(Pp(n,i,r,.9)),"#6b2a22",0,0,new oe().makeTranslation(0,o-.06,0)),e.rbox(0,0,n*.32,.22,.24,"#d9a93f",{y:o+r-.1,r:.06});for(let c of[-1,1])e.cone(c*n*.16,0,.12,.45,"#d9a93f",{y:o+r,rz:-c*.5,seg:6})}e.lathe(0,0,[[.3,0],[.12,.25],[.18,.6],[.08,1],[.14,1.3],[.04,1.8],[0,2]],"#d9a93f",{y:12.6,seg:12}),e.sign(0,-3.12,"BUDDHA TOOTH RELIC TEMPLE \u4F5B\u7259\u5BFA",{w:5.4,h:.5,y:4.45,rot:Math.PI,bg:"#d9a93f",fg:"#6b1d17",board:!1});for(let n of[-2.6,2.6])e.rbox(n,-5.3,.9,.7,.9,"#bdb5a7",{r:.05}),e.rbox(n,-5.3,.55,.6,.75,"#a9a194",{y:.7,r:.18}),e.ball(n,-5.45,.36,"#a9a194",{y:1.15}),e.ball(n,-5.55,.42,"#9b9386",{y:1.05,sy:.9}),e.solid(n,-5.3,.9,.9);e.lathe(0,-6,[[0,0],[.45,0],[.55,.2],[.6,.55],[.5,.75],[.62,.8],[0,.82]],"#8a6a3a",{seg:20});for(let n=0;n<5;n++)e.cyl(-.2+n*.1,-6,.01,.01,.5,"#c4553b",{y:.82,seg:3});e.solidCircle(0,-6,.6),e.solid(0,0,10.4,8.4),ss(s,-9,7,Math.PI,"#f2a33a","#f3c13a",{label:"LAKSA \u53FB\u6C99",signBg:"#d0761a"}),s.model("pot-stew",-9.6,7.05,{w:.6,y:1.25,center:!0}),s.model("bowl-soup",-8.4,6.95,{w:.35,y:1.25,center:!0}),s.spots.laksa=[-9,8.4,Math.PI],s.spots.lim=[12.5,5.8,-Math.PI*.75],s.spots.card=[-3.5,3.6];for(let[n,i,r]of[[-14.5,12,1],[15,7.5,1],[-3,15.5,.9],[15,14.5,1.1]])Wn(s,n,i,r);jt(s,-5,5.2,3,.8);for(let[n,i]of[[-13,4.6],[13,4.4]])Xn(s,n,i,1,!0);for(let n of[-13.5,13.5])wn(s,n,3.8,0),s.solidCircle(n,3.8,.15);s.spots.cat=[5.4,-4.8,Math.PI/2],s.coins=[[-13,-4.7],[-5.5,10.5],[12,11.5]]}var tt=(s,e,t)=>new E(s,e,t),ki=(s,e,t=.55)=>Object.assign(new ft({color:e,roughness:t,metalness:0}),{name:s});function W1(){return{fur:ki("fur_white","#fcfbf7"),mane:ki("mane_blue","#b4d6f5",.5),pink:ki("nose_pink","#f093aa",.45),blush:ki("blush_pink","#f8c4ce",.6),ink:ki("ink_navy","#2a2a5c",.35),water:ki("water","#8ec9f3",.15),stone:ki("stone","#ebe6dc",.8),pool:ki("pool","#6cb9ea",.2)}}var Dt=(s,e,t,n,i=[0,0,0],r=[0,0,0],o=[1,1,1])=>{let a=new Ue(t,n);return a.name=e,a.position.set(...i),a.rotation.set(...r),a.scale.set(...o),s.add(a),a},Cu=(s,e,t=0)=>(s.quaternion.setFromUnitVectors(tt(0,0,1),e.clone().normalize()),t&&s.quaternion.multiply(new yt().setFromAxisAngle(tt(0,0,1),t)),s),Dp=(s,e,t)=>{let n=t.clone().sub(e);return s.position.copy(e).addScaledVector(n,.5),s.quaternion.setFromUnitVectors(tt(0,1,0),n.normalize()),s};function X1(s,e,t=40,n=20){let i=new Ci(s,t,1,n,!1),r=i.attributes.position,o=new E;for(let a=0;a<=t;a++){let c=s.getPointAt(a/t),l=e(a/t);for(let h=0;h<=n;h++){let u=a*(n+1)+h;o.fromBufferAttribute(r,u).sub(c).multiplyScalar(l).add(c),r.setXYZ(u,o.x,o.y,o.z)}}return i.computeVertexNormals(),i}var nc=(s,e,t,n,i)=>{let r=new $e;return r.name=e,s.add(r),Dt(r,e+"_tube",X1(t,n),i),Dt(r,e+"_cap_a",new Xe(n(0),20,14),i,t.getPointAt(0).toArray()),Dt(r,e+"_cap_b",new Xe(n(1),20,14),i,t.getPointAt(1).toArray()),r},Up=(s,e,t,n,i)=>{let r=new Ze(e,e,n,32,1,!1,Math.PI-t/2,t);r.rotateX(Math.PI/2);let o=new Ue(r,i);return o.name=s,o};function q1(){let s=W1(),e=new $e;e.name="merlion";let t=new $e;t.name="fountain",e.add(t),Dt(t,"base_disc",new Ze(1.12,1.16,.1,64),s.stone,[0,.05,0]),Dt(t,"base_rim",new xt(1.06,.07,16,72),s.stone,[0,.13,0],[Math.PI/2,0,0]),Dt(t,"pool",new Ze(1.03,1.03,.04,64),s.pool,[0,.12,0]);let n=.14,i={c:tt(0,.5,0),r:tt(.44,.42,.4)},r=new $e;r.name="body",r.position.copy(i.c),e.add(r);let o=Math.PI*.58;Dt(r,"body_fur",new Xe(1,48,32,0,Math.PI*2,0,o),s.fur,[0,0,0],[0,0,0],i.r.toArray()),Dt(r,"body_fish",new Xe(1,48,32,0,Math.PI*2,o,Math.PI-o),s.mane,[0,0,0],[0,0,0],i.r.toArray());let a=(x,_)=>{let I=tt(Math.sin(x)*Math.cos(_),Math.sin(_),Math.cos(x)*Math.cos(_));return{p:tt(I.x*i.r.x,I.y*i.r.y,I.z*i.r.z),n:tt(I.x/i.r.x,I.y/i.r.y,I.z/i.r.z).normalize()}};[[-.7,-.5],[.05,-.62],[.75,-.48],[-.3,-.85],[.4,-.85]].forEach(([x,_],I)=>{let{p:A,n:C}=a(x,_),T=new $e;T.name="scale_mark_"+(I+1),T.position.copy(A).addScaledVector(C,.004),Cu(T,C),r.add(T),[-1,1].forEach(w=>Dt(T,"scale_mark_"+(I+1)+(w<0?"a":"b"),new xt(.032,.007,8,20,Math.PI),s.ink,[w*.032,.01,0],[0,0,Math.PI]))});let c=new _n([tt(.16,.3,-.24),tt(.46,.22,-.32),tt(.66,.34,-.22),tt(.74,.58,-.1)]);nc(e,"tail",c,x=>.2-.12*x,s.mane);let l=Up("tail_fin",.3,2,.05,s.mane);l.position.copy(c.getPointAt(1)),l.quaternion.setFromUnitVectors(tt(0,1,0),c.getTangentAt(1)),l.quaternion.multiply(new yt().setFromAxisAngle(tt(0,1,0),Math.PI/2.4)),e.add(l);let h={c:tt(0,1.14,.02),a:.6,b:.52,c2:.54},u=new $e;u.name="head",u.position.copy(h.c),e.add(u),Dt(u,"head_fur",new Xe(1,64,48),s.fur,[0,0,0],[0,0,0],[h.a,h.b,h.c2]);let d=(x,_,I=0)=>{let A=h.c2*Math.sqrt(Math.max(0,1-x*x/h.a**2-_*_/h.b**2)),C=tt(x/h.a**2,_/h.b**2,A/h.c2**2).normalize();return{p:tt(x,_,A).addScaledVector(C,I),n:C}},f=(x,_,I,A,C,T,w,M=0)=>{let{p:L,n:H}=d(A,C,T);return Cu(Dt(u,x,_,I,L.toArray(),[0,0,0],w),H,M)};[-1,1].forEach(x=>{let _=x<0?"l":"r";f("eye_"+_,new Xe(.055,24,16),s.ink,x*.2,0,0,[1.25,.85,.45]),f("blush_"+_,new Xe(.075,24,16),s.blush,x*.33,-.1,-.006,[1.3,.85,.18]),[-.07,-.15].forEach((I,A)=>{let{p:C}=d(x*.46,I,.004),T=Dt(u,`whisker_${_}_${A+1}`,new Ze(.008,.008,.24,8),s.ink,C.toArray()),w=tt(x,A?-.18:.08,-.35).normalize();T.quaternion.setFromUnitVectors(tt(0,1,0),w),T.position.addScaledVector(w,.05)})}),f("nose",new Xe(.06,24,16),s.pink,0,-.06,.008,[1.3,.85,.6]),f("lip_top",new Xe(.045,20,14),s.fur,.05,-.17,.01,[1,.9,.8]),f("lip_bottom",new Xe(.045,20,14),s.fur,.05,-.24,0,[1,.9,.8]),[-1,1].forEach(x=>{let{p:_,n:I}=d(x*.34,.4,.12),A=Dt(u,"ear_"+(x<0?"l":"r"),new Xe(.15,32,20),s.fur,_.toArray(),[0,0,0],[1,1,.6]);Cu(A,tt(I.x*.6,I.y*.9,1)),Dt(A,"ear_inner_"+(x<0?"l":"r"),new Xe(.09,24,16),s.pink,[0,-.01,.13],[0,0,0],[1,1,.35])}),Dt(u,"mane_fill",new Xe(1,48,32),s.mane,[0,.03,-.14],[0,0,0],[.6,.53,.5]);let g=(x,_=.035)=>I=>_+(x-_)*Math.pow(Math.sin(Math.PI*Math.min(1,I*1.1+.08)),.7);[-.46,-.31,-.155,0,.155,.31,.46].forEach((x,_)=>{let I=Math.sqrt(1-x*x/h.a**2),A=h.b*I+.05,C=h.c2*I+.05,T=[];for(let M=0;M<=8;M++){let L=_t.degToRad(38+210*(M/8));T.push(tt(x*1.04,A*Math.sin(L),C*Math.cos(L)))}let w=T[T.length-1];T.push(tt(x*1.05,w.y-.08,w.z-.12)),nc(u,"mane_lock_"+(_+1),new _n(T),g(.105-Math.abs(x)*.04),s.mane)}),[-1,1].forEach(x=>{let _=new _n([tt(x*.47,.3,.18),tt(x*.57,.06,.02),tt(x*.56,-.24,-.12),tt(x*.47,-.42,-.14),tt(x*.4,-.48,-.06)]);nc(u,"mane_side_"+(x<0?"l":"r"),_,g(.11,.04),s.mane)});let y=Up("hand_fin",.13,1.7,.04,s.mane);y.position.set(-.3,.68,.64),y.rotation.set(-.35,.25,.25),e.add(y),Dp(Dt(e,"arm_l",new ai(.075,.2,8,20),s.fur),tt(-.33,.58,.22),tt(-.3,.64,.56)),Dp(Dt(e,"arm_r",new ai(.075,.26,8,20),s.fur),tt(.3,.58,.24),tt(-.12,.7,.6));let m=h.c.clone().add(d(.05,-.2,.05).p),p=new _n([m,tt(-.12,.92,.7),tt(-.36,.76,.8),tt(-.52,.44,.8),tt(-.6,n+.02,.72)]);nc(e,"water_stream",p,x=>.035+.065*Math.pow(x,.9),s.water);let v=new $e;return v.name="splash",v.position.set(-.6,n,.72),e.add(v),Dt(v,"splash_pool",new Xe(.24,32,16),s.water,[0,0,0],[0,0,0],[1,.2,1]),[[.27,.06,.08,.05],[-.22,.08,.14,.045],[.05,.05,.27,.04],[-.12,.3,-.05,.035],[.2,.22,.12,.03]].forEach(([x,_,I,A],C)=>Dt(v,"droplet_"+(C+1),new Xe(A,20,14),s.water,[x,_,I])),{root:e,mouth:m,splash:v}}function Np(s=1){let{root:e,mouth:t,splash:n}=q1();e.scale.setScalar(s),e.updateMatrixWorld(!0);let i=new Map,r=[];e.traverse(h=>{if(!h.isMesh)return;if(h.name.startsWith("droplet_")){r.push(h);return}let u=h.geometry.clone().applyMatrix4(h.matrixWorld);i.has(h.material)||i.set(h.material,[]),i.get(h.material).push(u)});let o=new $e;o.name="merlion";for(let[h,u]of i){let d=new Ue(tr(u),h);u.forEach(f=>f.dispose()),d.castShadow=h.name!=="water"&&h.name!=="pool",d.receiveShadow=!0,o.add(d)}let a=new $e;for(let h of r){let u=new Ue(h.geometry,h.material);h.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.userData.y0=u.position.y,u.userData.phase=Math.random()*Math.PI*2,a.add(u)}o.add(a);let c=n.getWorldPosition(new E),l=h=>{for(let u of a.children){let d=(h*1.6+u.userData.phase)%(Math.PI*2);u.position.y=u.userData.y0+Math.abs(Math.sin(d))*.12*s}};return{group:o,mouth:t.multiplyScalar(s),splash:c,animate:l}}var Iu=3.2,Y1="#f3f0e8";function Op(s,e,t,n=[1,1]){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new Xt(i);return r.colorSpace=et,r.wrapS=r.wrapT=ln,r.repeat.set(...n),r.anisotropy=4,r}function $1(){let s=Op(32,64,(t,n,i)=>{t.fillStyle="#e8eef2",t.fillRect(0,0,n,i),t.fillStyle="#6f8fa8",t.fillRect(0,10,n,26),t.fillStyle="#86a5bd",t.fillRect(0,42,n,16);for(let r=0;r<n;r+=8)t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(r,0,1,i)},[1,1]);s.repeat.set(.6,.6);let e=Op(32,64,(t,n,i)=>{t.fillStyle="#000",t.fillRect(0,0,n,i),t.fillStyle="#ffd98a",t.fillRect(0,12,n,22),t.fillStyle="#fff1c4",t.fillRect(0,44,n,12)});e.repeat.copy(s.repeat),Ni("mbsglass",new ft({map:s,emissiveMap:e,emissive:16777215,emissiveIntensity:0,roughness:.35,metalness:.1}))}function K1(s){let e=s.sub(1,-14);for(let i of[-6.5,0,6.5]){let r=e.sub(i,0),o=new Vn([[-1.9,0],[-.1,0],[-.1,22],[-1.9,22]].map(([c,l])=>new ie(c,l))),a=new Vn;a.moveTo(.1,0),a.lineTo(1.9,0),a.bezierCurveTo(3.2,6,2.4,15,1.9,22),a.lineTo(.1,22);for(let c of[o,a]){let l=new qs(c,{depth:4.4,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2,curveSegments:16});r.raw(l,"#ffffff",0,0,new oe().makeTranslation(0,-.4,-2.2),{mat:"mbsglass"})}r.box(0,0,.22,22.4,4.3,"#3d4a55",{y:-.4}),r.rbox(.4,0,4.2,.5,4.8,"#dfe6eb",{y:21.4,r:.1}),r.solid(.3,0,4.6,4.4)}let t=new Vn;t.moveTo(-10.5,-2.2),t.lineTo(10.5,-2.2),t.quadraticCurveTo(15.5,-1.2,16.5,0),t.quadraticCurveTo(15.5,1.2,10.5,2.2),t.lineTo(-10.5,2.2),t.quadraticCurveTo(-11.5,0,-10.5,-2.2),e.extrude(0,0,t,1,"#eef2f4",{y:21.8,bevel:.12,curveSeg:16});let n=new Vn(t.getPoints(24).map(i=>new ie(i.x*.93,i.y*.8)));e.extrude(0,0,n,.25,"#7cbb6a",{y:22.9}),e.rbox(-1,-1.3,13,.12,.9,"#4fc3e8",{y:22.95,r:.04,glow:"pool"});for(let i=0;i<7;i++)e.model(i%2?"tree_palmTall":"tree_palmDetailedShort",-8+i*3.2,.9,{h:1.6,y:23.1,rot:i});for(let i=0;i<10;i++)e.model("loungeChair",-7+i*1.3,-.6,{h:.35,y:23.1,rot:Math.PI,center:!0,shadow:!1});for(let i of[-6.4,0,6.4])e.rbox(i,4.6,6.5,2.8,3.2,"#d7dee4",{r:.2,y:-.3}),e.rbox(i,6.25,6.2,1.9,.1,"#ffffff",{y:.1,mat:"mbsglass",r:.03}),e.rbox(i,6.6,6.6,.15,1.2,"#eef2f4",{y:2.4,r:.05});e.solid(0,4.6,19,3.2),e.sign(0,7.25,"MARINA BAY",{w:4.4,h:.6,y:3.3,bg:"#2e4a66",board:!1})}function Z1(s){let e=()=>{let t=new sn(1.6,5,6,14),n=t.attributes.position;for(let i=0;i<n.count;i++){let r=n.getX(i),o=n.getY(i),a=(o+2.5)/5;n.setX(i,r*Math.sin(Math.PI*Math.min(1,a*1.1+.08))*(1-a*.35)),n.setY(i,o+2.5),n.setZ(i,.6*a*a*3-Math.abs(r)*.25)}return t.computeVertexNormals(),t};s.lathe(0,0,[[0,0],[2,0],[1.6,.8],[1.1,1.6],[0,1.7]],"#d8d2c6",{seg:20});for(let t=0;t<10;t++){let n=t/10*Math.PI*2,i=t%2?1.2:1.6,r=new oe().makeRotationY(n).multiply(new oe().makeTranslation(0,.6,i)).multiply(new oe().makeRotationX(.35+t%2*.15));s.raw(e(),Y1,0,0,r),s.raw(no(e()),"#dcd6ca",0,0,r)}s.solidCircle(0,0,2.6)}function Fp(s,e,t,n){s.dome(e,t,n,"#c9b48a",{seg:32,hseg:14});let i=new zn(.13,.45,5),r=new E(0,1,0),o=new yt,a=new oe,c=new E;for(let l=.15;l<1.5;l+=.17){let h=Math.max(1,Math.round(Math.sin(l)*22));for(let u=0;u<h;u++){let d=u/h*Math.PI*2+l*3;c.set(Math.sin(l)*Math.cos(d),Math.cos(l),Math.sin(l)*Math.sin(d)),o.setFromUnitVectors(r,c),a.compose(c.clone().multiplyScalar(n+.1),o,new E(1,1,1)),s.raw(i,"#a88d55",e,t,a.clone())}}s.lathe(e,t,[[n+.3,0],[n+.3,.3],[n,.35],[0,.35]],"#d8d2c6",{seg:32}),s.solidCircle(e,t,n)}function J1(s,e,t,n){let i=s.sub(e,t);i.ball(0,0,.55,"#e2383f",{y:n,sx:1.4,sy:.55,seg:16});for(let r of[-1,1]){for(let o=0;o<3;o++)i.tube(0,0,[[r*.6,n+.25,-.2+o*.25],[r*1,n+.45,-.25+o*.3],[r*1.25,n,-.3+o*.35]],.06,"#d12f35");i.tube(0,0,[[r*.5,n+.35,.3],[r*.8,n+.6,.65]],.08,"#d12f35"),i.ball(r*.85,.75,.22,"#e2383f",{y:n+.5,sx:1.2}),i.ball(r*.18,.35,.08,"#ffffff",{y:n+.55})}}function Bp(s){$1(),s.paintRect(0,4.4,34,2.8,"#e3d7bf");for(let o=0;o<17;o++)s.paintRect(-16+o*2,4.4,1.9,2.6,o%2?"#d9ccb2":"#e3d7bf",0,!0);s.paintRect(1,-7.5,30,8,"#ddd6c8"),s.paintCircle(-5.5,6.2,3,"#e3d7bf"),s.water(2,16,10.5),s.paintCircle(-1.6,4.4,.9,"#f3c13a",!0),s.paintCircle(-1.6,4.4,.65,"#e3d7bf",!0);let e=null;for(let o=-1.25;o<=1.251;o+=.0625){let a=2+Math.sin(o)*10.8,c=16-Math.cos(o)*10.8;if(Math.hypot(a+5.5,c-6.2)<1.16*Iu+.4){e=null;continue}if(e){let l=(a+e[0])/2,h=(c+e[1])/2;s.tube(l,h,[[e[0]-l,1,e[1]-h],[a-l,1,c-h]],.04,"#c9cdd2",{tseg:2})}Math.round(o/.0625)%2===0&&s.cyl(a,c,.04,.04,1,"#c9cdd2",{seg:6}),e=[a,c]}for(let o of[-1,.6,1.1]){let a=2+Math.sin(o)*11.4,c=16-Math.cos(o)*11.4;s.model("light-square",a,c,{h:4.2,rot:o+Math.PI}),s.ball(a,c,.18,"#fff1b8",{y:4.1,glow:"win"})}for(let[o,a,c]of[[3,20,1.6],[6,13,1.2],[-2,14,1],[7,21,1.4],[0,23,1.2]])s.model(c>1.3?"lily_large":"lily_small",o,a,{w:c,y:-.02,rot:o,shadow:!1});let t=Np(Iu);s.put(t.group,-5.5,6.2,0),s.group.add(t.group),s.solidCircle(-5.5,6.2,1.16*Iu),s.spots.mouth=[-5.5+t.mouth.x,6.2+t.mouth.z,t.mouth.y];let n=0;s.updaters.push(o=>t.animate(n+=o)),K1(s);let i=s.sub(13.5,8.5);Z1(i),Fp(s,-13,-8,3.2),Fp(s,-11,-12.5,2.4);let r=s.sub(-13,9.5);r.rbox(0,0,5,2.9,4,"#f6efe2",{r:.1}),r.rbox(0,-2.02,1.3,2.1,.06,"#7a3b2e",{r:.03});for(let o of[-1.7,1.7])r.rbox(o,-2.02,1.1,.9,.06,"#ffd27a",{y:1.1,r:.03,glow:"win"});r.cone(0,0,4.2,1.6,"#c8402f",{y:2.9,seg:4,spin:Math.PI/4,sz:.85}),r.sign(0,-2.12,"CHILLI CRAB \u8FA3\u6912\u8783\u87F9",{w:4,h:.6,y:2.45,rot:Math.PI,bg:"#c8402f",board:!1}),J1(r,0,.2,4.3),r.solid(0,0,5,4),is(s,-15.5,6.2,"#ffffff","#e2383f"),s.model("pot-stew",-15.5,6.2,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.crab=[-13,6.8,Math.PI],s.spots.kenji=[-9.2,4.6,Math.PI/2],s.spots.photo=[-1.6,4.4];for(let[o,a]of[[14.5,-5],[8,-5.5],[-6,-5]])Wn(s,o,a,.9);cr(s,15,4.2,.9),s.solidCircle(15,4.2,.3),jt(s,1,-5,4,.8),Yt(s,6.5,5,0);for(let o of[-10,2,12])wn(s,o,-3.8,Math.PI),s.solidCircle(o,-3.8,.15);s.coins=[[-15.5,-3.8],[10,-6.5],[14,1.5]],s.updaters.push((o,a)=>{ir.mbsglass.emissiveIntensity=a.night*.9})}var ic=[[0,11.5,16],[-6.5,7.8,12],[6.5,8.2,13],[-4.5,16,11],[5,16.5,12],[-10.5,12.5,10],[10.5,12.8,11]],j1="#5d4a6e",Pu="#6b5579",kp=["#4f9a57","#6fb04f","#e86fa1","#f3c13a","#3f8a4a"],sc=s=>Math.min(2.8,.2*s);function Q1(s,e,t,n,i){let r=n/14,o=sc(n),a=n-o,c=3.1*r+.4,l=[[0,0],[1.25,0],[1.05,.25],[.78,.9],[.62,2.2]];for(let d=1;d<=6;d++)l.push([.62-.2*(d/6),2.2+(a-2.2)*(d/6)]);l.push([0,a]),s.lathe(e,t,l,j1,{seg:18});let h=d=>d<2.2?.78-.16*d/2.2:.62-.2*(d-2.2)/(a-2.2);for(let d=0;d<3;d++){let f=[];for(let g=0;g<=18;g++){let y=.6+(a-1)*(g/18),m=d*2.09+g*.75,p=h(y)+.06;f.push([Math.cos(m)*p,y,Math.sin(m)*p])}s.tube(e,t,f,.07,Pu,{tseg:90,rseg:5});for(let g=1;g<18;g++)for(let y=0;y<3;y++){let[m,p,v]=f[g],x=Math.atan2(v,m)+(i()-.5)*.5,_=Math.hypot(m,v)+.05,I=i()<.75?kp[[0,1,4][y]]:kp[2+(i()*2|0)];s.ball(e+Math.cos(x)*_,t+Math.sin(x)*_,.08+i()*.05,I,{y:p-.25+y*.18,seg:5,hseg:3,sy:.7})}}s.lathe(e,t,[[.4,a-.2],[.9,a+.3*o],[c*.6,a+.75*o],[c-.1,n-.05],[c-.2,n-.15]],"#3b2d48",{seg:24});let u=16;for(let d=0;d<u;d++){let f=d/u*Math.PI*2,g=Math.cos(f),y=Math.sin(f),m=[];for(let p=0;p<=1.001;p+=.25){let v=.45+(c-.45)*Math.pow(p,.75),x=a-.3+(o+.3)*Math.sqrt(p);m.push([g*v,x,y*v])}if(s.tube(e,t,m,.06,Pu,{tseg:14,rseg:4}),d%2===0)for(let p=1;p<m.length;p++)s.ball(e+m[p][0],t+m[p][2],.1,"#ffffff",{y:m[p][1]+.02,seg:6,hseg:4,glow:"super"})}for(let d of[.35,.7]){let f=.45+(c-.45)*Math.pow(d,.75),g=a-.3+(o+.3)*Math.sqrt(d);s.raw(new xt(f,.045,4,32),Pu,e,t,new oe().makeRotationX(Math.PI/2).setPosition(0,g,0))}s.raw(new xt(c,.13,6,40),"#ffffff",e,t,new oe().makeRotationX(Math.PI/2).setPosition(0,n,0),{glow:"super"});for(let d=0;d<20;d++){let f=d/20*Math.PI*2;s.ball(e+Math.cos(f)*(c-.15),t+Math.sin(f)*(c-.15),.12,"#ffffff",{y:n+.05,seg:6,hseg:4,glow:"super"})}s.lathe(e,t,[[1.25,0],[1.9,0],[1.9,.3],[1.75,.35],[1.25,.35]],"#cfc7b8",{seg:28});for(let d=0;d<9;d++){let f=d/9*Math.PI*2+i();s.model(d%3?"plant_bushSmall":"flower_purpleA",e+Math.cos(f)*1.55,t+Math.sin(f)*1.55,{h:.45,y:.3,rot:f,shadow:!1})}s.solidCircle(e,t,1.4)}function eM(s,e,t){let[n,i,r]=e,[o,a,c]=t,l=Math.hypot(o-n,a-i),h=Math.min(r-sc(r),c-sc(c))-1.4,u=s.sub((n+o)/2,(i+a)/2,Math.atan2(o-n,a-i)),d=14,f=y=>h-.45*Math.sin(Math.PI*y),g=y=>-l/2+1+(l-2)*y;for(let y=0;y<d;y++){let m=(y+.5)/d,p=Math.atan2(f((y+1)/d)-f(y/d),(l-2)/d);u.box(0,g(m),1,.14,(l-2)/d+.05,"#d6dbe0",{y:f(m)-.07,rx:-p}),u.box(0,g(m),.86,.04,(l-2)/d+.05,"#a88a62",{y:f(m)+.02,rx:-p})}for(let y of[-.5,.5]){let m=[],p=[];for(let v=0;v<=d;v++){let x=v/d;m.push([y,f(x)+.05,g(x)]),p.push([y,f(x)+.95,g(x)])}u.tube(0,0,p,.035,"#eef1f3",{tseg:40}),u.tube(0,0,m.map(([v,x,_])=>[v,x+.45,_]),.015,"#c8ced3",{tseg:40});for(let v=0;v<=d;v+=2){let x=v/d;u.cyl(y,g(x),.02,.02,.95,"#c8ced3",{y:f(x),seg:5})}for(let v of[-1,1]){let x=[y*.6,(v<0?r:c)-sc(v<0?r:c)-.1,v*(l/2-.7)];for(let _ of v<0?[.12,.26,.4]:[.6,.74,.88])u.tube(0,0,[x,[y,f(_)+.95,g(_)]],.012,"#9aa3ab",{tseg:2,rseg:3})}}for(let y of[-1,1])u.raw(new xt(.85,.12,6,20),"#d6dbe0",0,y*(l/2-.2),new oe().makeRotationX(Math.PI/2).setPosition(0,h,0))}var tM=new ft({color:"#d9f0f7",roughness:.05,metalness:.1,transparent:!0,opacity:.28,depthWrite:!1,side:Jt});function Hp(s,e,t,n,i,r,o){let a=s.sub(e,t);a.lathe(0,0,[[n-.1,0],[n+.45,0],[n+.45,.35],[n+.15,.45],[n-.1,.45]],"#d6d0c4",{seg:48});let c=new Ue(new Xe(n,40,16,0,Math.PI*2,0,Math.PI/2).scale(1,i,1),tM);c.renderOrder=2,a.put(c,0,0,0,.42),s.group.add(c);let l=new oe().makeTranslation(0,.42,0);for(let u=0;u<18;u++){let d=l.clone().multiply(new oe().makeScale(1,i,1)).multiply(new oe().makeRotationY(u/18*Math.PI));a.raw(new xt(n+.03,.05,4,40,Math.PI),"#e4e9ec",0,0,d)}for(let u of[.35,.65,.95,1.25]){let d=new oe().makeRotationX(Math.PI/2).setPosition(0,.42+Math.cos(u)*n*i,0);a.raw(new xt(Math.sin(u)*n+.03,.045,4,48),"#e4e9ec",0,0,d)}let h=a.sub(0,n+.2);h.rbox(0,0,2.6,.18,1.6,"#e4e9ec",{y:2.2,r:.05});for(let u of[-1.15,1.15])h.cyl(u,.6,.06,.06,2.2,"#bfc6cc",{seg:8});if(h.box(0,-.35,1.6,2,.08,"#2c4a58",{}),r==="flower"){for(let u=0;u<9;u++){let d=o()*6.28,f=(.25+o()*.5)*n;a.model(["tree_palmDetailedShort","tree_detailed","tree_small"][u%3],Math.cos(d)*f,Math.sin(d)*f,{h:1.8+o()*.9,y:.42,rot:d,shadow:!1})}for(let u=0;u<40;u++){let d=o()*6.28,f=o()*.85*n;a.model(["flower_redA","flower_purpleA","flower_yellowA","flower_redB","plant_bushDetailed"][u%5],Math.cos(d)*f,Math.sin(d)*f,{h:.45+o()*.3,y:.42,rot:d,shadow:!1})}}else{a.lathe(0,0,[[0,.42],[2.2,.42],[1.9,1.4],[1.4,2.6],[1.1,3.6],[.7,4.3],[0,4.5]],"#4c7f48",{seg:14});for(let u=0;u<26;u++){let d=.6+o()*3.6,f=o()*6.28,g=2.2-(d-.42)*.4+.1;a.model(u%2?"plant_bushSmall":"grass_leafsLarge",Math.cos(f)*g,Math.sin(f)*g,{h:.5,y:d,rot:f,shadow:!1})}a.tube(0,0,[[0,4.3,.75],[0,3.4,1.35],[0,2,1.95],[0,.5,2.3]],.2,"#cfeeff",{tseg:20}),a.raw(new xt(2.6,.05,4,40),"#d8dde0",0,0,new oe().makeRotationX(Math.PI/2).setPosition(0,3,0))}a.solidCircle(0,0,n+.3)}function nM(s,e,t){let n=s.sub(e,t,-.35),i=8.6,r=6;for(let c of[-1,1])for(let l of[-1,1])n.tube(0,0,[[l*2.6,0,c*1.5],[l*.25,i,c*.85]],.2,"#e3e7ea",{tseg:2,rseg:10});for(let c of[-1,1])n.box(0,c*1.2,5.6,.2,.3,"#d0d6db",{y:4.2});n.rbox(0,3.1,9,1.8,2.6,"#eef0ee",{r:.25}),n.box(0,1.79,8.6,.8,.04,"#5c8ea8",{y:.6}),n.rbox(0,3.1,9.3,.15,2.9,"#c8cfd5",{y:1.8,r:.06});for(let c=0;c<5;c++)n.model("pottedPlant",-3.6+c*1.8,1.55,{h:.9,shadow:!1});n.sign(0,1.84,"SINGAPORE FLYER",{w:3.2,h:.4,y:1.55,bg:"#1d5a8a",board:!1}),n.solid(0,3.1,9,2.6);for(let c of[-2.6,2.6])for(let l of[-1.5,1.5])n.solidCircle(c,l,.3);let o=Oi(c=>{for(let h of[-.32,.32])c.add(new xt(r,.09,6,96),"#f2f4f5",Oe(0,0,h),0);c.add(new xt(r-.45,.06,5,96),"#e6eaec",Oe(0,0,0),0),c.add(new Ze(.55,.55,1.8,20),"#c4ccd2",Oe(0,0,0,Math.PI/2),0),c.add(new Ze(.8,.8,.2,20),"#dfe4e8",Oe(0,0,0,Math.PI/2),0);let l=28;for(let h=0;h<l*2;h++){let u=h/(l*2)*Math.PI*2,d=Math.cos(u),f=Math.sin(u);c.add(new Ze(.03,.03,.64,4),"#dfe3e6",Oe(d*r,f*r,0,Math.PI/2),0);let g=new E(d*(r-.45),f*(r-.45),0),y=new E(d*r,f*r,h%2?.32:-.32),m=new Ze(.025,.025,g.distanceTo(y),4),p=new yt().setFromUnitVectors(new E(0,1,0),y.clone().sub(g).normalize());c.add(m,"#dfe3e6",new oe().compose(g.clone().add(y).multiplyScalar(.5),p,new E(1,1,1)),0)}for(let h=0;h<l;h++){let u=h/l*Math.PI*2;for(let d of[-1,1]){let f=new E(0,0,d*.85),g=new E(Math.cos(u)*(r-.45),Math.sin(u)*(r-.45),-d*.05),y=new Ze(.012,.012,f.distanceTo(g),3),m=new yt().setFromUnitVectors(new E(0,1,0),g.clone().sub(f).normalize());c.add(y,"#b8c0c6",new oe().compose(f.clone().add(g).multiplyScalar(.5),m,new E(1,1,1)),0)}}for(let h=0;h<l;h++){let u=h/l*Math.PI*2+.05,d=Math.cos(u),f=Math.sin(u),g=r+.62;c.add(new ai(.42,.75,6,14),"#9fd3ea",Oe(d*g,f*g,0,Math.PI/2),0);for(let y of[-.5,.5])c.add(new xt(.43,.04,4,16),"#ffffff",Oe(d*g,f*g,y),0);c.add(new Rt(.1,.4,.1),"#e8ecef",Oe(d*(r+.25),f*(r+.25),0,0,0,u-Math.PI/2),0),c.add(new Xe(.06,6,4),"#ffffff",Oe(d*(r+.12),f*(r+.12),.34),0,"win")}}),a=new $e;return a.add(o),n.put(a,0,0,0,i),s.group.add(a),o}function zp(s){let e=fi(77);s.paintCircle(0,12,13,"#7fbb64"),s.paintRect(0,4.5,3,4,"#e0d4b8"),s.paintCircle(0,11.5,3.4,"#e0d4b8"),s.paintRect(0,-8,32,9,"#ddd6c6");for(let[i,r]of[[-3.2,9.6],[-5.2,11.5],[3.4,9.6],[5.6,11.8],[-2.4,14.4],[2.6,14.8],[-8.2,10.4],[8.4,10.6]])s.paintCircle(i,r,1.15,"#e0d4b8");for(let[i,r,o]of ic)Q1(s,i,r,o,e);eM(s,ic[0],ic[2]),Hp(s,-7,-11,6,.62,"flower",e),Hp(s,5.5,-12,4.6,1.15,"cloud",e),s.sign(-7,-4.6,"FLOWER DOME",{w:2.6,h:.5,y:1.3,bg:"#4c8f6a"}),s.sign(5.5,-6.8,"CLOUD FOREST",{w:2.6,h:.5,y:1.3,bg:"#3a7f9a"});for(let[i,r]of[[-7,-4.6],[5.5,-6.8]])for(let o of[-1.2,1.2])s.cyl(i+o,r-.05,.05,.05,1.1,"#555b62",{seg:6});let t=nM(s,15.5,-9);s.spots.priya=[-2.6,4.8,Math.PI],s.spots.grove=[0,11.5],s.sign(0,6.6,"SUPERTREE GROVE",{w:3,h:.5,y:2.3,bg:"#5d4a6e",rot:Math.PI});for(let i of[-1.6,1.6])s.cyl(i,6.55,.06,.06,2.3,"#3b2d48",{seg:8});jt(s,-3.6,6.2,3.2,.8),jt(s,3.6,6.2,3.2,.8);for(let[i,r]of[[-14.5,4.5],[14.5,4.5],[-14,-5.3]])Wn(s,i,r,.9);for(let[i,r]of[[-13.5,9],[13.5,9.5],[-12.5,17.5],[12.8,18]])cr(s,i,r,.9);for(let[i,r]of[[-3,7.6],[3,7.6],[-8,4.8],[8.5,4.5],[-12,15],[12,15.5],[-1.5,18.8],[7.8,14.2],[-8,14.6]])Xn(s,i,r,1.1,!0);for(let i=0;i<70;i++){let r=e()*6.28,o=4+e()*8.5,a=Math.cos(r)*o,c=12+Math.sin(r)*o;ic.some(([l,h])=>Math.hypot(l-a,h-c)<2.2)||Math.hypot(a,c-11.5)<3.6||c<7||s.model(["grass_large","grass_leafs","flower_yellowB","flower_purpleB","plant_flatShort"][i%5],a,c,{h:.35+e()*.25,rot:r,shadow:!1})}Yt(s,2.5,4.4,Math.PI),Yt(s,-2.2,18.5,Math.PI),Yt(s,-3.2,11.5,Math.PI/2),Yt(s,3.2,11.5,-Math.PI/2);for(let i of[-11,-6,6,11])wn(s,i,-3.8),s.solidCircle(i,-3.8,.15);s.coins=[[-13.5,6.5],[12.5,7.8],[0,19.5]];let n=0;s.updaters.push((i,r)=>{n+=i,t.rotation.z+=i*.05;let o=nr.super;if(o)if(r.night>.4){let a=r.show?.35:.05;o.color.setHSL(n*a%1,.85,.5+.15*Math.sin(n*(r.show?6:1.5))),o.color.multiplyScalar(1.3)}else o.color.setRGB(.55,.5,.6)})}var oc="#9a7550",oo="#c9a86a",rc="#d6b062";function iM(s,e,t,n,i){let r=s.sub(e,t,n),o="#f2f0ea";for(let a of[-.3,.3]){r.rbox(a,.2,.05,.05,1.3,o,{y:.32,r:.015});for(let c of[-.35,.75])r.cyl(a,c,.025,.025,.32,o,{seg:6});r.rbox(a,-.72,.05,.05,.7,o,{y:.5,rx:.75,r:.015})}for(let a=0;a<9;a++)r.box(0,-.38+a*.145,.6,.03,.11,"#c99a62",{y:.36});for(let a=0;a<5;a++)r.box(0,-.55-a*.1,.6,.03,.08,"#c99a62",{y:.47+a*.09,rx:.75});r.rbox(0,.2,.56,.06,1.2,i,{y:.39,r:.025}),r.rbox(0,-.75,.56,.06,.62,i,{y:.62,rx:.75,r:.025}),r.solid(0,0,.7,1.9)}function sM(s,e,t,n,i,r){let o=s.sub(e,t,n);for(let a=0;a<6;a++)o.box(0,-.75+a*.25+.125,.9,.02,.25,a%2?i:r,{y:.01})}function rM(s,e,t){let n=s.sub(e,t,-.2),i=[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]];for(let[a,c]of i)n.tube(0,0,[[a*1.15,0,c*1.15],[a,2.2,c]],.07,"#f5f1e6",{tseg:2,rseg:8});for(let[a,c]of[[0,1],[2,3],[0,2],[1,3]]){let[l,h]=i[a],[u,d]=i[c];n.tube(0,0,[[l*1.08,.4,h*1.08],[u*1,1.9,d*1]],.03,"#e2383f",{tseg:2,rseg:5}),n.tube(0,0,[[u*1.08,.4,d*1.08],[l*1,1.9,h*1]],.03,"#e2383f",{tseg:2,rseg:5})}n.rbox(0,0,2.3,.12,2.3,oc,{y:2.2,r:.03});for(let a=0;a<9;a++)for(let[c,l,h]of[[-1.1+a*.275,-1.1],[-1.1+a*.275,1.1],[-1.1,-1.1+a*.275],[1.1,-1.1+a*.275]])n.cyl(c,l,.02,.02,.5,"#f5f1e6",{y:2.32,seg:4});for(let[a,c,l,h]of[[2.3,.05,0,-1.1],[2.3,.05,0,1.1],[.05,2.3,-1.1,0],[.05,2.3,1.1,0]])n.box(l,h,a,.05,c,"#f5f1e6",{y:2.82});n.rbox(0,.15,1.6,1.25,1.4,"#f5f1e6",{y:2.32,r:.06}),n.box(0,-.56,1.3,.5,.04,"#5aa9cf",{y:2.95});for(let a of[-.81,.81])n.box(a,.15,.04,.5,.9,"#5aa9cf",{y:2.95});n.box(0,-.57,1.3,.32,.05,"#e2383f",{y:2.55}),n.sign(0,-.6,"LIFEGUARD",{w:1.1,h:.24,y:2.71,rot:Math.PI,bg:"#e2383f",board:!1}),n.cone(0,.15,1.45,.75,"#e2383f",{y:3.57,seg:4,spin:Math.PI/4,sz:.95}),n.rbox(0,.15,2,.08,1.85,"#f3c13a",{y:3.52,r:.03});let r=[[0,2.2,-1.15],[0,0,-3.3]];for(let a of[-.4,.4])n.tube(0,0,r.map(([c,l,h])=>[a,l+.08,h]),.05,oc,{tseg:2,rseg:5});for(let a=1;a<10;a++){let c=a/10;n.box(0,-1.15-2.15*c,.8,.04,.16,Bt(oc,.05),{y:2.2*(1-c)+.08})}n.cyl(1,-1,.025,.025,2,"#d9d9d9",{y:2.8,seg:6}),n.box(1,-.65,.02,.32,.6,"#e2383f",{y:4.4}),n.box(1,-.65,.025,.16,.6,"#f3c13a",{y:4.48});let o=new xt(.26,.08,8,20);n.raw(o,"#ff5a3a",.5,-1.17,new oe().makeTranslation(0,2.5,0));for(let a=0;a<4;a++)n.raw(new xt(.262,.083,8,3,.35),"#ffffff",.5,-1.17,new oe().makeRotationZ(a*Math.PI/2).setPosition(0,2.5,-.001));n.solid(0,0,2.2,2.2)}function oM(s,e,t){let n=s.sub(e,t);for(let[i,r]of[[-2.3,-2],[2.3,-2],[-2.3,2],[2.3,2]]){n.cyl(i,r,.13,.15,2.75,oo,{seg:8});for(let o=.5;o<2.6;o+=.55)n.cyl(i,r,.16,.16,.05,Bt(oo,-.15),{y:o,seg:8});n.solidCircle(i,r,.2)}n.lathe(0,0,[[0,2.7],[3.85,2.45],[3.9,2.55],[3.4,2.85],[2.1,3.55],[.8,4.25],[0,4.6]],rc,{seg:9}),n.lathe(0,0,[[0,3.9],[1.5,3.85],[1.4,3.95],[.5,4.5],[0,4.75]],Bt(rc,-.08),{seg:9,rot:.3});for(let i=0;i<36;i++){let r=i/36*Math.PI*2;n.cone(Math.cos(r)*3.75,Math.sin(r)*3.75,.22,.45,Bt(rc,i%3*-.05),{y:2.2,rx:Math.PI,seg:4})}n.cone(0,0,.12,.5,Bt(rc,-.2),{y:4.6,seg:6}),n.rbox(0,.6,4,1.05,.8,"#a9835a",{r:.04});for(let i=0;i<22;i++)n.cyl(-1.95+i*.186,1.02,.085,.085,1.05,i%2?oo:Bt(oo,-.08),{seg:6});n.rbox(0,.6,4.3,.1,1.05,"#e7cfa2",{y:1.05,r:.03}),n.rbox(0,-1.2,3.4,1.6,.4,"#7a5a40",{r:.03});for(let i of[.9,1.35])for(let r=0;r<8;r++)n.model(r%3?"soda-bottle":"glass",-1.4+r*.4,-1.05,{h:.32,y:i,shadow:!1});n.model("speaker",1.6,-.95,{h:.5,y:1.6,shadow:!1}),n.model("radio",-1.5,-1.05,{h:.3,y:1.6,shadow:!1}),[["coconut",-1.4],["cocktail",-.7],["frappe",0],["coconut-half",.8],["cocktail",1.5]].forEach(([i,r])=>n.model(i,r,.6,{h:.3,y:1.15,shadow:!1})),n.model("pineapple",1.9,.55,{h:.4,y:1.15,shadow:!1});for(let i of[-1.5,-.5,.5,1.5])n.model("stoolBar",i,1.55,{h:.85,solid:"circle"});n.sign(0,2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:0,bg:"#2f8fd8",board:!1}),n.sign(0,-2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:Math.PI,bg:"#2f8fd8",board:!1});for(let i of[-3.3,3.3])n.cyl(i,2.6,.04,.05,1.6,oo,{seg:6}),n.cyl(i,2.6,.1,.07,.2,"#7a5a40",{y:1.6,seg:8}),n.cone(i,2.6,.08,.25,"#ff9a3a",{y:1.8,seg:6,glow:"win"}),n.solidCircle(i,2.6,.12);n.solid(0,.6,4,.8),n.solid(0,-1.2,3.4,.4)}function aM(s,e,t){let n="#e6cf8f";s.lathe(e,t,[[0,0],[1,0],[.95,.3],[.7,.35],[0,.35]],n,{seg:18}),s.lathe(e,t,[[0,.35],[.45,.35],[.42,.8],[.5,.82],[.5,.9],[0,.9]],Bt(n,-.03),{seg:14});for(let i=0;i<4;i++){let r=i/4*Math.PI*2+.4,o=e+Math.cos(r)*.72,a=t+Math.sin(r)*.72;s.lathe(o,a,[[0,.3],[.17,.3],[.15,.62],[.2,.64],[0,.66]],n,{seg:10}),s.cone(o,a,.14,.2,Bt(n,-.06),{y:.65,seg:8})}s.cyl(e,t,.01,.01,.5,"#7a5a40",{y:.9,seg:3}),s.box(e+.1,t,.2,.12,.01,"#e2383f",{y:1.25}),s.model("barrel",e+1.2,t+.3,{h:.3,shadow:!1}),s.solidCircle(e,t,.9)}function cM(s,e,t,n,i){let r=new Vn;for(let o=0;o<10;o++){let a=o/10*Math.PI*2,c=o%2?.07:.2;o?r.lineTo(Math.cos(a)*c,Math.sin(a)*c):r.moveTo(c,0)}s.extrude(e,t,r,.03,i,{rot:n,bevel:.015})}function Vp(s){let e=fi(31);s.paintRect(0,9.5,40,13,"#f1dfa8"),s.paintRect(0,4.8,3.2,3.6,"#c8a070"),s.paintRect(0,-7.5,30,8,"#e7dcc4"),s.paintRect(0,15.6,40,1.4,"#ddc68a");for(let r=0;r<12;r++)s.box(0,3.15+r*.3,3,.05,.26,Bt(oc,r%3*.03),{});for(let[r,o,a]of[[-13,6.5,1],[-8,10,1.1],[-2.8,6.2,.9],[4.5,10.5,1.1],[10,6.4,1],[14.5,10,1.05],[-15.5,12.5,1]]){cr(s,r,o,a),s.solidCircle(r,o,.3);for(let c=0;c<2;c++)s.model("coconut",r+.5+e()*.5,o+(e()-.5)*.8,{h:.22,rot:e()*6,shadow:!1})}for(let[r,o,a,c,l]of[[-5,11.5,"#e2383f","#3b82c4","#ffffff"],[1.2,12.2,"#3b82c4","#f3c13a","#ffffff"],[7.5,12,"#f3c13a","#ff8fb1","#ffffff"]])ip(s,r,o,a),s.solidCircle(r,o,.15),iM(s,r-.95,o+.1,Math.PI,c),sM(s,r+1.1,o+.5,.25,c,l);rM(s,12,13.5),oM(s,-9,-7.5);let t=s.sub(-10.5,8.6);for(let r of[-1.9,1.9])t.cyl(r,0,.05,.05,2.2,"#f5f1e6",{seg:8}),t.solidCircle(r,0,.1);t.box(0,0,3.8,.5,.02,"#2b2b30",{y:1.6});for(let r=0;r<16;r++)t.box(-1.8+r*.24,0,.012,.5,.025,"#d9d9d9",{y:1.6});t.box(0,0,3.8,.06,.03,"#ffffff",{y:2.08}),t.box(0,0,3.8,.04,.03,"#ffffff",{y:1.58});let n=new Xe(.17,16,12);for(let r=0;r<6;r++){let o=new Xe(.172,4,12,r/6*Math.PI*2,Math.PI/3);t.add(o,["#e2383f","#ffffff","#3b82c4","#ffffff","#f3c13a","#ffffff"][r],1.1,1.3,.17)}n.dispose(),aM(s,5.6,14.2);for(let[r,o,a]of[[6.9,13.7,"#ff8a4a"],[-3.4,15.2,"#e85d8a"],[9.6,15.4,"#f3a03a"]])cM(s,r,o,e()*6,a);for(let[r,o,a,c]of[[-14.6,15,.3,"#f3c13a"],[-13.2,15.4,.15,"#e2383f"]]){let l=s.sub(r,o,a);l.ball(0,0,.32,c,{sx:1,sy:.4,sz:5.2,seg:16,hseg:8}),l.ball(0,.2,.2,"#2b2b30",{sx:1,sy:.3,sz:1.6,y:.18}),l.tube(.45,0,[[0,.06,-1.1],[0,.06,1.1]],.025,"#d9d9d9",{tseg:2}),l.solid(0,0,.7,3.2)}for(let[r,o,a,c]of[[-17,14.5,"rock_largeA",1.2],[-16,15.8,"rock_smallB",.5],[16.5,14.8,"rock_largeB",1.1],[15.4,15.9,"rock_smallA",.5],[-1.6,15.7,"stone_smallA",.3],[3.6,16,"rock_smallC",.35]])s.model(a,r,o,{h:c,rot:e()*6.3,solid:c>.6?"circle":!1});let i=s.sub(5,-8);i.rbox(0,0,8.8,.7,1,"#d9cdb4",{r:.12}),i.rbox(0,.3,8.4,2.4,.22,"#fffaf0",{y:.7,r:.08}),i.sign(0,.42,"SENTOSA",{w:8,h:2,y:1.9,bg:"#fffaf0",rainbow:!0,border:!1,board:!1});for(let r of[-4.7,4.7])jt(i,r,0,1.4,1.2);i.solid(0,.15,8.8,1);for(let r=0;r<7;r++)i.model(["flower_redA","flower_yellowA","flower_purpleA"][r%3],-3.6+r*1.2,-.7,{h:.5,shadow:!1});ss(s,3.5,5.2,Math.PI,"#f7f2e8","#ff8fb1",{label:"ICE CREAM $1",signBg:"#e85d8a"}),s.model("ice-cream",2.85,5.2,{h:.35,y:1.24,shadow:!1}),s.model("popsicle",4.15,5.2,{h:.3,y:1.24,shadow:!1}),s.spots.icecream=[3.5,6.6,Math.PI],s.spots.raj=[10.5,11.6,-Math.PI*.8],Yt(s,-.5,14.2,0),s.sign(2,13.8,"SUNSET POINT",{w:2.2,h:.5,y:1.6,bg:"#e8743b"}),s.cyl(2,13.8,.05,.05,1.3,"#7a5a40",{seg:6});for(let[r,o]of[[-14,-5],[14,-4.5],[-3,-5],[10.5,-6.5]])Xn(s,r,o,1.2,!0);for(let r of[-12,-5,6,12])wn(s,r,-3.8),s.solidCircle(r,-3.8,.15);for(let r=0;r<30;r++){let o=(e()-.5)*34,a=3.5+e()*2.5;Math.abs(o)<2||Math.abs(o-3.5)<1.6||s.model(r%2?"grass_leafs":"grass_large",o,a,{h:.4+e()*.3,rot:e()*6.3,shadow:!1})}s.spots.cat=[-12.2,11.2,.4],s.coins=[[-14,4.5],[8.5,14.5],[-2.5,-6.5]]}function Gp(s,e,t=128){let n=new Ai;n.add(new Ks(16777215,8952234,2.2));let i=new Di(16777215,2.2);i.position.set(1,2,3),n.add(i);let r=new Tt(30,1,.1,20);r.position.set(.9,1.5,3.4),r.lookAt(0,.95,0);let o=new Pn(t,t,{colorSpace:et}),a=new Uint8Array(t*t*4),c=document.createElement("canvas");c.width=c.height=t;let l=c.getContext("2d"),h=[],u=s.getClearColor(new Ae),d=s.getClearAlpha();s.setClearColor(0,0);for(let f of e){let g=rs({char:f});Bi(g,.4,0),n.add(g.root),s.setRenderTarget(o),s.clear(),s.render(n,r),s.readRenderTargetPixels(o,0,0,t,t,a);let y=l.createImageData(t,t);for(let m=0;m<t;m++)y.data.set(a.subarray((t-1-m)*t*4,(t-m)*t*4),m*t*4);l.clearRect(0,0,t,t),l.putImageData(y,0,0),h.push(c.toDataURL()),n.remove(g.root)}return s.setRenderTarget(null),s.setClearColor(u,d),o.dispose(),h}var ac=class extends Ai{constructor(){super();let e=new Rt;e.deleteAttribute("uv");let t=new ft({side:Nt}),n=new ft,i=new Zs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ue(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ue(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ue(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ue(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ue(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Ue(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ue(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Ue(e,pr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ue(e,pr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Ue(e,pr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new Ue(e,pr(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new Ue(e,pr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ue(e,pr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(s){let e=new Ft;return e.color.setScalar(s),e}var lM={hdb:Ap,hawker:Rp,chinatown:Lp,marina:Bp,gardens:zp,sentosa:Vp},Wp=new URLSearchParams(location.search).has("debug"),Ht=s=>document.getElementById(s),Xp=()=>new Promise(s=>setTimeout(s,20)),hM=[{char:"female-d"},{char:"male-b",hat:{type:"cap",color:"#2f8fd8"}},{char:"female-e"},{char:"male-f"},{char:"female-a",hat:{type:"bucket",color:"#ff8fb1"}},{char:"male-c"}];async function uM(){let s=new qa,e=new Ya;s.loading("Loading fonts\u2026");try{await Promise.race([document.fonts.load('800 40px "Baloo 2"'),new Promise(X=>setTimeout(X,2500))])}catch{}s.loading("Loading 3D models\u2026 0%"),await Zf(X=>s.loading(`Loading 3D models\u2026 ${Math.round(X*100)}%`,X)),s.loading("Building the island\u2026",1),await Xp();let t=Ht("c"),n=matchMedia("(pointer: coarse)").matches;e.data.settings.gfx||(e.data.settings.gfx=n?"low":"high");let i=e.data.settings.gfx==="high",r=new na({canvas:t,antialias:!0});r.setPixelRatio(Math.min(devicePixelRatio,i?2:1.25)),r.setSize(innerWidth,innerHeight),r.toneMapping=uh,r.toneMappingExposure=1.05,r.shadowMap.enabled=i,r.shadowMap.type=hh;let o=new Ai,a=new Gs(r);o.environment=a.fromScene(new ac,.04).texture,o.environmentIntensity=.35;let c=new Tt(55,innerWidth/innerHeight,.1,2e3),l=new Na,h=new Jr,u=Nf.map(X=>new Ua(X,h,l)),d=Object.fromEntries(u.map(X=>[X.id,X]));for(let X of u)lM[X.id](X),o.add(X.group);s.loading("Painting roads and planting trees\u2026",1),await Xp();let f=hp(l,h,r);o.add(f.mesh,h.build(),Pa.build());let g=new $a(e.data.settings),y=new Fa(o,i),m=new ka(o),p=new za(o,l,e.data.char||"female-a"),v=new Ga(c);v.world=l;let x=new Wa(t,Ht("joy"),Ht("joyKnob")),_=new Xa(g),I=new Qa(o),A=new Za(o,l,p),C=new tc(o,f.path,p,3),T={scene:o,camera:c,renderer:r,world:l,sites:d,siteList:u,player:p,rig:v,sky:y,ui:s,dlg:_,audio:g,save:e,fx:I,npcs:A,time:e.data.time??.1,env:{night:0,show:!1},busy:!1,titleOpen:!0,has:X=>!!e.data.flags[X],set(X){e.data.flags[X]=1,e.write()},pay(X){return e.data.money<X?!1:(e.data.money-=X,s.setMoney(e.data.money,!0),e.write(),!0)},give(X){e.data.money+=X,s.setMoney(e.data.money,!0),e.write()},addFood(X){let ne=so.find(Te=>Te.id===X);e.data.foods[X]||s.toast(`${ne.icon} ${ne.name} added to your food album!`),e.data.foods[X]=1,e.write(),s.setAlbum(Object.keys(e.data.foods).length,so.length)},hours:()=>(6+T.time*24)%24,isNight(){let X=T.hours();return X>=19.5||X<5.5},refresh(){s.renderTasks(w.tasks())}};u.forEach((X,ne)=>{let Te=ne%2?3:-3;A.walker(X,hM[ne],[-13,Te],[13,Te],1.1+ne%3*.2)});let w=Tp(T);T.quests=w;let M=new Ja(T);T.map=M;let L=[...f.coinSpots];for(let X of u)X.coins.forEach(([ne,Te],Y)=>L.push({id:`${X.id}${Y}`,dir:X.dirAt(ne,Te)}));let H=new Ka(o,L,e,X=>{T.give(1),g.coin(),I.burst(X.dir.clone().multiplyScalar(ze+1),X.dir,"#ffd23f",24,3,.6,.25),H.found===H.total&&s.toast("\u{1F31F} You found every coin on the planet!",4e3)});m.onStart=()=>{e.data.settings.rain&&!T.titleOpen&&s.toast("\u{1F327}\uFE0F A tropical shower! Your umbrella pops open.")},I.onBang=()=>g.pop(),T.travel=X=>{T.busy||p.dropping||(M.focus=X.id,g.whoosh(),v.flyTo(X.center,.9,()=>{M.show(!1),p.placeAtSite(X,X.def.spawn),p.startDrop(22),v.yaw=0,v.pitch=0,p.onLand=()=>s.toast(`${X.def.icon} ${X.def.name}`)}))},s.onTask=X=>{!T.titleOpen&&!T.busy&&X.site&&M.show(!0,d[X.site])},T.photo=()=>{let X=d.marina,ne=2*Math.atan(Math.tan(35*_t.DEG2RAD)/Math.min(c.aspect,4/3))*_t.RAD2DEG,Te=new Tt(ne,c.aspect,.1,2e3);Te.position.copy(X.dirAt(-3.2,15.5)).multiplyScalar(ze+3.2),Te.up.copy(X.center),Te.lookAt(X.dirAt(-5.2,5.6).multiplyScalar(ze+3.6)),p.root.visible=!1,y.dome.position.copy(Te.position),r.render(o,Te);let Y=document.createElement("canvas");Y.width=800,Y.height=600;let Q=Y.getContext("2d"),P=t.width,ve=t.height,te=4/3,ye=Math.min(P,ve*te),he=ye/te;return Q.drawImage(t,(P-ye)/2,(ve-he)/2,ye,he,0,0,800,600),Q.fillStyle="rgba(255,255,255,0.85)",Q.fillRect(0,548,800,52),Q.fillStyle="#2e2638",Q.font='700 26px "Baloo 2", sans-serif',Q.fillText("Greetings from Singapore Planet!  \u{1F981}",22,582),p.root.visible=!0,Y.toDataURL("image/jpeg",.9)},T.checkFinale=()=>{!w.mainDone()||T.has("finale")||(T.set("finale"),setTimeout(()=>{I.fireworks(16),s.modal(`<h2>\u{1F386} Majulah, explorer!</h2>
        <p>You finished every task on Singapore Planet: kopi with Auntie Mei, a choped table at Lau Pa Sat, a lost card returned, a Merlion photo and the Garden Rhapsody.</p>
        <p>Keep exploring! There are still coins to find, foods to taste${T.has("q_cat")?"":" and a certain orange cat to track down"}.</p>
        <button class="btn" onclick="document.querySelector('#modal .modal-x').click()">Keep exploring</button>`)},1200))},Ht("btnAlbum").addEventListener("click",()=>{let X=e.data.foods;s.modal(`<h2>\u{1F4D6} Food Album</h2>
      <div class="album">${so.map(ne=>`<div class="food ${X[ne.id]?"got":""}"><div class="f-icon">${X[ne.id]?ne.icon:"\u2754"}</div><div class="f-name">${X[ne.id]?ne.name:"???"}</div><div class="f-where">${ne.where}</div>${X[ne.id]?`<div class="f-desc">${ne.desc}</div>`:""}</div>`).join("")}</div>
      <p class="muted">Coins found: ${H.found} / ${H.total}</p>`)});let D=()=>{let X=e.data.settings,ne=s.modal(`<h2>\u2699\uFE0F Settings</h2>
      <div class="settings">
        <button class="btn toggle" data-k="music">\u{1F3B5} Music: ${X.music?"On":"Off"}</button>
        <button class="btn toggle" data-k="sfx">\u{1F50A} Sound: ${X.sfx?"On":"Off"}</button>
        <button class="btn toggle" data-k="rain">\u{1F327}\uFE0F Rain: ${X.rain?"On":"Off"}</button>
        <button class="btn" data-a="gfx">\u{1F5A5}\uFE0F Graphics: ${X.gfx==="high"?"High":"Low"} <small>(reloads)</small></button>
        <button class="btn" data-a="fs">\u26F6 Fullscreen</button>
        <button class="btn danger" data-a="reset">\u{1F5D1}\uFE0F Reset progress</button>
      </div>
      <p class="muted">WASD / arrows: walk \xB7 Shift: run \xB7 E: talk \xB7 M: map \xB7 drag: look \xB7 scroll: zoom</p>
      <p class="muted">3D assets by <a href="https://kenney.nl" target="_blank" rel="noopener">Kenney</a> (CC0). Landmarks built in code.</p>`);ne.querySelectorAll(".toggle").forEach(Y=>Y.addEventListener("click",()=>{let Q=Y.dataset.k;X[Q]=!X[Q],Q==="music"&&g.setMusic(X.music),Q==="sfx"&&g.setSfx(X.sfx),e.write(),D()})),ne.querySelector("[data-a=gfx]").addEventListener("click",()=>{X.gfx=X.gfx==="high"?"low":"high",e.data.time=T.time,e.write(),location.reload()}),ne.querySelector("[data-a=fs]").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})});let Te=ne.querySelector("[data-a=reset]");Te.addEventListener("click",()=>{Te.dataset.sure?e.reset():(Te.dataset.sure="1",Te.textContent="\u26A0\uFE0F Tap again to erase everything")})};Ht("btnSettings").addEventListener("click",D),Ht("btnMap").addEventListener("click",()=>N());let N=()=>{T.titleOpen||T.busy||p.dropping||M.show(!M.open)};x.onDrag=(X,ne)=>v.drag(X,ne),x.onZoom=X=>v.zoom(X),s.setMoney(e.data.money),s.setAlbum(Object.keys(e.data.foods).length,so.length),T.refresh();let W=matchMedia("(pointer: coarse)").matches;v.autoSpin=25;let B=X=>{if(g.unlock(),T.titleOpen=!1,v.autoSpin=0,Ht("title").classList.add("hidden"),s.showHud(!0),Ht("joy").classList.toggle("hidden",!W),X&&e.data.pos){let[ne,Te,Y,Q,P,ve]=e.data.pos;p.place(new E(ne,Te,Y),new E(Q,P,ve)),v.openMap(p.pos,p.fwd),M.show(!1),p.startDrop(18),p.onLand=()=>s.toast("Welcome back! \u{1F44B}")}else M.show(!0),T.travel(d.hdb),p.onLand=()=>{s.toast("\u{1F3E2} Toa Payoh Heartland"),setTimeout(()=>s.toast("Tip: walk up to people and press E to chat"),2600)}};Ht("btnStart").addEventListener("click",()=>{if(e.exists&&!Ht("btnStart").dataset.sure){Ht("btnStart").dataset.sure="1",Ht("btnStart").textContent="Start over? Tap again";return}if(e.exists){e.reset();return}B(!1)}),e.exists&&e.data.pos&&(Ht("btnContinue").classList.remove("hidden"),Ht("btnContinue").addEventListener("click",()=>B(!0))),addEventListener("resize",()=>{c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight)});let J=Ht("picker"),G=Gp(r,mu);mu.forEach((X,ne)=>{let Te=document.createElement("button");Te.className="pick"+(X===p.char?" on":""),Te.innerHTML=`<img src="${G[ne]}" alt="${X}">`,Te.addEventListener("click",()=>{J.querySelectorAll(".pick").forEach(Y=>Y.classList.remove("on")),Te.classList.add("on"),p.setCharacter(X),e.data.char=X,e.write()}),J.appendChild(Te)}),s.doneLoading(),Ht("title").classList.remove("hidden");let ae={up:new E,east:new E,south:new E,north:new E},ue=new E,_e=Ht("fps"),Ne=performance.now(),Ke=0,$=0,se=0,we=0,le=0,De=async X=>{T.busy=!0,p.speed=0,v.yaw=.65,s.prompt(null);try{await X.run()}catch(ne){console.error(ne)}_.close(),T.busy=!1,T.refresh()};r.setAnimationLoop(()=>{let X=performance.now(),ne=Math.min(.05,(X-Ne)/1e3);if(Ne=X,le+=ne,T.titleOpen||(T.time=(T.time+ne/Df)%1),(x.consume("KeyM")||M.open&&x.consume("Escape"))&&N(),s.isModal&&x.consume("Escape")&&s.closeModal(),_.open){x.consume("KeyE","Space","Enter")&&_.advance();let ve=x.consume("Digit1","Digit2","Digit3");ve&&_.pick(Number(ve.slice(-1))-1)}let Te=!T.titleOpen&&!T.busy&&!s.isModal&&!M.open&&v.mode==="follow";v.dragging=x.dragging;let Y=e.data.settings.rain&&m.level>.3;p.update(ne,Te?x.axis():null,Y),v.update(ne,p),p.worldPos(ue),er(p.pos,ae);let Q=_t.clamp((c.position.length()-90)/60,0,1);y.update(T.time,ae,ue,c.position,m.level,Q),T.env.night=y.night,g.night=y.night,m.update(ne,ue,ae,e.data.settings.rain&&!T.titleOpen),g.setRain(v.mode==="follow"?m.level:0),A.update(ne),H.update(ne,le,p),C.update(ne),I.update(ne,p);for(let ve of u)for(let te of ve.updaters)te(ne,T.env);w.update(ne),v.lookUpTarget=T.env.show&&Math.abs(p.speed)<.5?1:0,_.update(ne);let P=Te&&!p.dropping?l.nearestAct(p.pos):null;s.prompt(P?P.label:null),P&&(x.consume("KeyE","Enter","Space")||s.takePromptHit())&&De(P),M.update(w.activeSites()),Ke-=ne,Ke<=0&&(Ke=.5,s.setClock(T.hours(),T.isNight(),Y)),$-=ne,$<=0&&!T.titleOpen&&!p.dropping&&($=5,e.data.time=T.time,e.data.pos=[...p.pos.toArray(),...p.fwd.toArray()],e.write()),y.dome.position.copy(c.position),r.render(o,c),x.endFrame(),Wp&&(se++,we+=(X-(T._lastNow||X))/1e3,T._lastNow=X,we>.5&&(_e.textContent=`${Math.round(se/we)} fps \xB7 ${r.info.render.calls} calls \xB7 ${(r.info.render.triangles/1e3).toFixed(0)}k tris`,se=0,we=0))}),Wp&&(_e.classList.remove("hidden"),window.G=T,T.weather=m)}uM().catch(s=>{console.error(s);let e=document.getElementById("loading");e.classList.remove("hidden"),e.querySelector("span").textContent=`Couldn't start the game: ${s.message}`});
