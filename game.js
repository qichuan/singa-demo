var ch="170";var Gp=0,Bu=1,Wp=2;var sd=1,lh=2,Jn=3,Fn=0,Dt=1,Kt=2,wi=0,Es=1,Go=2,ku=3,Hu=4,Xp=5,Wi=100,qp=101,Yp=102,$p=103,Kp=104,Zp=200,Jp=201,jp=202,Qp=203,Gc=204,Wc=205,em=206,tm=207,nm=208,im=209,sm=210,rm=211,om=212,am=213,cm=214,Xc=0,qc=1,Yc=2,Cs=3,$c=4,Kc=5,Zc=6,Jc=7,rd=0,lm=1,hm=2,Si=0,um=1,fm=2,dm=3,hh=4,pm=5,mm=6,gm=7,zu="attached",ym="detached",od=300,Is=301,Ps=302,jc=303,Qc=304,Ma=306,an=1e3,Qn=1001,Pr=1002,Vt=1003,uh=1004;var vs=1005;var jt=1006,Sr=1007;var On=1008;var ni=1009,ad=1010,cd=1011,Lr=1012,fh=1013,Yi=1014,Cn=1015,Xr=1016,dh=1017,ph=1018,Ls=1020,ld=35902,hd=1021,ud=1022,pn=1023,fd=1024,dd=1025,Ts=1026,Ds=1027,mh=1028,gh=1029,pd=1030,yh=1031;var xh=1033,Bo=33776,ko=33777,Ho=33778,zo=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,cl=37809,ll=37810,hl=37811,ul=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,yl=37818,xl=37819,_l=37820,vl=37821,Vo=36492,Ml=36494,bl=36495,md=36283,wl=36284,Sl=36285,El=36286,_h=2200,vh=2201,xm=2202,Us=2300,Ns=2301,cc=2302,Ms=2400,bs=2401,Wo=2402,Mh=2500,_m=2501,gd=0,ba=1,qr=2,vm=3200,Mm=3201;var yd=0,bm=1,Mi="",Je="srgb",Wt="srgb-linear",wa="linear",ht="srgb";var rs=7680;var Vu=519,wm=512,Sm=513,Em=514,xd=515,Tm=516,Am=517,Rm=518,Cm=519,Tl=35044;var Gu="300 es",ei=2e3,Xo=2001,ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Er=Math.PI/180,Os=180/Math.PI;function mn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function bh(s,e){return(s%e+e)%e}function Im(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pm(s,e,t){return s!==e?(t-s)/(e-s):0}function Tr(s,e,t){return(1-t)*s+t*e}function Lm(s,e,t,n){return Tr(s,e,1-Math.exp(-t*n))}function Dm(s,e=1){return e-Math.abs(bh(s,e*2)-e)}function Um(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Om(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fm(s,e){return s+Math.random()*(e-s)}function Bm(s){return s*(.5-Math.random())}function km(s){s!==void 0&&(Wu=s);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(s){return s*Er}function zm(s){return s*Os}function Vm(s){return(s&s-1)===0&&s!==0}function Gm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xt={DEG2RAD:Er,RAD2DEG:Os,generateUUID:mn,clamp:Ct,euclideanModulo:bh,mapLinear:Im,inverseLerp:Pm,lerp:Tr,damp:Lm,pingpong:Dm,smoothstep:Um,smootherstep:Nm,randInt:Om,randFloat:Fm,randFloatSpread:Bm,seededRandom:km,degToRad:Hm,radToDeg:zm,isPowerOfTwo:Vm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Xm,normalize:ct,denormalize:Rn},ie=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=i[0],m=i[3],p=i[6],v=i[1],_=i[4],x=i[7],P=i[2],R=i[5],C=i[8];return r[0]=o*y+a*v+c*P,r[3]=o*m+a*_+c*R,r[6]=o*p+a*x+c*C,r[1]=l*y+h*v+u*P,r[4]=l*m+h*_+u*R,r[7]=l*p+h*x+u*C,r[2]=f*y+d*v+g*P,r[5]=f*m+d*_+g*R,r[8]=f*p+d*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(i*l-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*c)*y,e[5]=(i*r-a*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(lc.makeScale(e,t)),this}rotate(e){return this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lc=new We;function _d(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qm(){let s=Dr("canvas");return s.style.display="block",s}var Xu={};function br(s){s in Xu||(Xu[s]=!0,console.warn(s))}function Ym(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $m(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Km(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?wa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qu=[.64,.33,.3,.6,.15,.06],Yu=[.2126,.7152,.0722],$u=[.3127,.329],Ku=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Wt]:{primaries:qu,whitePoint:$u,transfer:wa,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:Yu,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:qu,whitePoint:$u,transfer:ht,toXYZ:Ku,fromXYZ:Zu,luminanceCoefficients:Yu,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var os,Al=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Dr("canvas")),os.width=e.width,os.height=e.height;let n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zm=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hc(i[o].image)):r.push(hc(i[o]))}else r=hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jm=0,Ut=class s extends ii{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Qn,i=Qn,r=jt,o=On,a=pn,c=ni,l=s.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=mn(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=od;Ut.DEFAULT_ANISOTROPY=1;var it=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(d+1)/2,P=(p+1)/2,R=(h+f)/4,C=(u+y)/4,T=(g+m)/4;return _>x&&_>P?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=R/n,r=C/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=T/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=T/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yo=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),R=Math.atan2(P,p*v);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let x=a*v;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+y*x,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new E,Ju=new Mt,Qt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),co.subVectors(this.max,pr),as.subVectors(e.a,pr),cs.subVectors(e.b,pr),ls.subVectors(e.c,pr),mi.subVectors(cs,as),gi.subVectors(ls,cs),Fi.subVectors(as,ls);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Fi.z,Fi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Fi.z,0,-Fi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Fi.y,Fi.x,0];return!fc(t,as,cs,ls,co)||(t=[1,0,0,0,1,0,0,0,1],!fc(t,as,cs,ls,co))?!1:(lo.crossVectors(mi,gi),t=[lo.x,lo.y,lo.z],fc(t,as,cs,ls,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xn=[new E,new E,new E,new E,new E,new E,new E,new E],En=new E,ao=new Qt,as=new E,cs=new E,ls=new E,mi=new E,gi=new E,Fi=new E,pr=new E,co=new E,lo=new E,Bi=new E;function fc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bi.fromArray(s,r);let a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var jm=new Qt,mr=new E,dc=new E,cn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);let t=mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(dc)),this.expandByPoint(mr.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new E,pc=new E,ho=new E,yi=new E,mc=new E,uo=new E,gc=new E,Fs=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pc.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=yi.dot(this.direction),c=-yi.dot(ho),l=yi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(pc).addScaledVector(ho,f),d}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),i=qn.dot(qn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,r){mc.subVectors(t,e),uo.subVectors(n,e),gc.crossVectors(mc,uo);let o=this.direction.dot(gc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);let c=a*this.direction.dot(uo.crossVectors(yi,uo));if(c<0)return null;let l=a*this.direction.dot(mc.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(gc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f+y*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;t[0]=f-y*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+y,t[1]=c*u,t[5]=y*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qm,e,e0)}lookAt(e,t,n){let i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(n,rn),xi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(n,rn)),xi.normalize(),fo.crossVectors(rn,xi),i[0]=xi.x,i[4]=fo.x,i[8]=rn.x,i[1]=xi.y,i[5]=fo.y,i[9]=rn.y,i[2]=xi.z,i[6]=fo.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],_=n[7],x=n[11],P=n[15],R=i[0],C=i[4],T=i[8],w=i[12],b=i[1],L=i[5],H=i[9],D=i[13],N=i[2],W=i[6],B=i[10],J=i[14],G=i[3],ae=i[7],ue=i[11],_e=i[15];return r[0]=o*R+a*b+c*N+l*G,r[4]=o*C+a*L+c*W+l*ae,r[8]=o*T+a*H+c*B+l*ue,r[12]=o*w+a*D+c*J+l*_e,r[1]=h*R+u*b+f*N+d*G,r[5]=h*C+u*L+f*W+d*ae,r[9]=h*T+u*H+f*B+d*ue,r[13]=h*w+u*D+f*J+d*_e,r[2]=g*R+y*b+m*N+p*G,r[6]=g*C+y*L+m*W+p*ae,r[10]=g*T+y*H+m*B+p*ue,r[14]=g*w+y*D+m*J+p*_e,r[3]=v*R+_*b+x*N+P*G,r[7]=v*C+_*L+x*W+P*ae,r[11]=v*T+_*H+x*B+P*ue,r[15]=v*w+_*D+x*J+P*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+y*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,_=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,P=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,R=t*v+n*_+i*x+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return e[0]=v*C,e[1]=(y*f*r-u*m*r-y*i*d+n*m*d+u*i*p-n*f*p)*C,e[2]=(a*m*r-y*c*r+y*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*C,e[4]=_*C,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*C,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*C,e[8]=x*C,e[9]=(g*u*r-h*y*r-g*n*d+t*y*d+h*n*p-t*u*p)*C,e[10]=(o*y*r-g*a*r+g*n*l-t*y*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=P*C,e[13]=(h*y*i-g*u*i+g*n*f-t*y*f-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*y*i-g*n*c+t*y*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,v=c*l,_=c*h,x=c*u,P=n.x,R=n.y,C=n.z;return i[0]=(1-(y+p))*P,i[1]=(d+x)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(d-x)*R,i[5]=(1-(f+p))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(g+_)*C,i[9]=(m-v)*C,i[10]=(1-(f+y))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=hs.set(i[0],i[1],i[2]).length(),o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);let l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ei){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===ei)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ei){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,g,y;if(a===ei)g=(o+r)*u,y=-2*u;else if(a===Xo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},hs=new E,Tn=new oe,Qm=new E(0,0,0),e0=new E(1,1,1),xi=new E,fo=new E,rn=new E,ju=new oe,Qu=new Mt,en=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t0=0,ef=new E,us=new Mt,Yn=new oe,po=new E,gr=new E,n0=new E,i0=new Mt,tf=new E(1,0,0),nf=new E(0,1,0),sf=new E(0,0,1),rf={type:"added"},s0={type:"removed"},fs={type:"childadded",child:null},yc={type:"childremoved",child:null},bt=class s extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new en,n=new Mt,i=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new We}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(gr,po,this.up):Yn.lookAt(po,gr,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Yn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};bt.DEFAULT_UP=new E(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new E,$n=new E,xc=new E,Kn=new E,ds=new E,ps=new E,of=new E,_c=new E,vc=new E,Mc=new E,bc=new it,wc=new it,Sc=new it,Xi=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),$n.subVectors(n,t),xc.subVectors(e,t);let o=An.dot(An),a=An.dot($n),c=An.dot(xc),l=$n.dot($n),h=$n.dot(xc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return bc.setScalar(0),wc.setScalar(0),Sc.setScalar(0),bc.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,n),Sc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(bc,r.x),o.addScaledVector(wc,r.y),o.addScaledVector(Sc,r.z),o}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),$n.subVectors(e,t),An.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ds.subVectors(i,n),ps.subVectors(r,n),_c.subVectors(e,n);let c=ds.dot(_c),l=ps.dot(_c);if(c<=0&&l<=0)return t.copy(n);vc.subVectors(e,i);let h=ds.dot(vc),u=ps.dot(vc);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ds,o);Mc.subVectors(e,r);let d=ds.dot(Mc),g=ps.dot(Mc);if(g>=0&&d<=g)return t.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ps,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return of.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(of,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Ec(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=bh(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ec(o,r,e+1/3),this.g=Ec(o,r,e),this.b=Ec(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Ze.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ct(zt.r*255,0,255))*65536+Math.round(Ct(zt.g*255,0,255))*256+Math.round(Ct(zt.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Je){Ze.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,i=zt.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(mo);let n=Tr(_i.h,mo.h,t),i=Tr(_i.s,mo.s,t),r=Tr(_i.l,mo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ae;Ae.NAMES=vd;var r0=0,ln=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=mn(),this.name="",this.blending=Es,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nt=class extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new E,go=new ie,et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}};var Ko=class extends et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zo=class extends et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends et{constructor(e,t,n){super(new Float32Array(e),t,n)}},o0=0,dn=new oe,Tc=new bt,ms=new E,on=new Qt,yr=new Qt,Lt=new E,ot=class s extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Zo:Ko)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,yr.min),on.expandByPoint(Lt),Lt.addVectors(on.max,yr.max),on.expandByPoint(Lt)):(on.expandByPoint(yr.min),on.expandByPoint(yr.max))}on.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Lt.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(e,l),Lt.add(ms)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new E,c[T]=new E;let l=new E,h=new E,u=new E,f=new ie,d=new ie,g=new ie,y=new E,m=new E;function p(T,w,b){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[T].add(y),a[w].add(y),a[b].add(y),c[T].add(m),c[w].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,w=v.length;T<w;++T){let b=v[T],L=b.start,H=b.count;for(let D=L,N=L+H;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let _=new E,x=new E,P=new E,R=new E;function C(T){P.fromBufferAttribute(i,T),R.copy(P);let w=a[T];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(R,w);let L=x.dot(c[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,L)}for(let T=0,w=v.length;T<w;++T){let b=v[T],L=b.start,H=b.count;for(let D=L,N=L+H;D<N;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new E,r=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new et(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},af=new oe,ki=new Fs,yo=new cn,cf=new E,xo=new E,_o=new E,vo=new E,Ac=new E,Mo=new E,lf=new E,bo=new E,Ne=class extends bt{constructor(e=new ot,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ac.fromBufferAttribute(u,e),o?Mo.addScaledVector(Ac,h):Mo.addScaledVector(Ac.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(yo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(yo,cf)===null||ki.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(af.copy(r).invert(),ki.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,P=_;x<P;x+=3){let R=a.getX(x),C=a.getX(x+1),T=a.getX(x+2);i=wo(this,p,e,n,l,h,u,R,C,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);i=wo(this,o,e,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,P=_;x<P;x+=3){let R=x,C=x+1,T=x+2;i=wo(this,p,e,n,l,h,u,R,C,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let v=m,_=m+1,x=m+2;i=wo(this,o,e,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function a0(s,e,t,n,i,r,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Fn,a),c===null)return null;bo.copy(a),bo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(bo);return l<t.near||l>t.far?null:{distance:l,point:bo.clone(),object:s}}function wo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,xo),s.getVertexPosition(c,_o),s.getVertexPosition(l,vo);let h=a0(s,e,t,n,xo,_o,vo,lf);if(h){let u=new E;Xi.getBarycoord(lf,xo,_o,vo,u),i&&(h.uv=Xi.getInterpolatedAttribute(i,a,c,l,u,new ie)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Xi.getInterpolatedAttribute(o,a,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new E,materialIndex:0};Xi.getNormal(xo,_o,vo,f.normal),h.face=f,h.barycoord=u}return h}var At=class s extends ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(y,m,p,v,_,x,P,R,C,T,w){let b=x/C,L=P/T,H=x/2,D=P/2,N=R/2,W=C+1,B=T+1,J=0,G=0,ae=new E;for(let ue=0;ue<B;ue++){let _e=ue*L-D;for(let Ue=0;Ue<W;Ue++){let Ye=Ue*b-H;ae[y]=Ye*v,ae[m]=_e*_,ae[p]=N,l.push(ae.x,ae.y,ae.z),ae[y]=0,ae[m]=0,ae[p]=R>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ue/C),u.push(1-ue/T),J+=1}}for(let ue=0;ue<T;ue++)for(let _e=0;_e<C;_e++){let Ue=f+_e+W*ue,Ye=f+_e+W*(ue+1),$=f+(_e+1)+W*(ue+1),se=f+(_e+1)+W*ue;c.push(Ue,Ye,se),c.push(Ye,$,se),G+=6}a.addGroup(d,G,w),d+=G,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){let e={};for(let t=0;t<s.length;t++){let n=Bs(s[t]);for(let i in n)e[i]=n[i]}return e}function c0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Md(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var l0={clone:Bs,merge:$t},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Jo=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new E,hf=new ie,uf=new ie,Et=class extends Jo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,hf,uf),t.subVectors(uf,hf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gs=-90,ys=1,Il=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Et(gs,ys,e,t);i.layers=this.layers,this.add(i);let r=new Et(gs,ys,e,t);r.layers=this.layers,this.add(r);let o=new Et(gs,ys,e,t);o.layers=this.layers,this.add(o);let a=new Et(gs,ys,e,t);a.layers=this.layers,this.add(a);let c=new Et(gs,ys,e,t);c.layers=this.layers,this.add(c);let l=new Et(gs,ys,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends Ut{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new At(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:wi});r.uniforms.tEquirect.value=t;let o=new Ne(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=jt),new Il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Rc=new E,f0=new E,d0=new We,jn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Rc.subVectors(n,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||d0.getNormalMatrix(e),i=this.coplanarPoint(Rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new cn,So=new E,Ur=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,r=new jn,o=new jn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],y=i[10],m=i[11],p=i[12],v=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-y,x-_).normalize(),t===ei)n[5].setComponents(c+a,f+u,m+y,x+_).normalize();else if(t===Xo)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function p0(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var tn=class s extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let _=0;_<l;_++){let x=_*u-r;g.push(x,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,x=v+l*(p+1),P=v+1+l*(p+1),R=v+1+l*p;d.push(_,x,R),d.push(x,P,R)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,dg=`struct PhysicalMaterial {
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sg=`#if defined( USE_POINTS_UV )
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
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,by=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,Ny=`#define NORMAL
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
}`,Oy=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,By=`#define STANDARD
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
}`,ky=`#define STANDARD
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
}`,Hy=`#define TOON
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
}`,zy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,Xy=`uniform vec3 color;
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
}`,qy=`uniform float rotation;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:y0,alphamap_pars_fragment:x0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:M0,aomap_pars_fragment:b0,batching_pars_vertex:w0,batching_vertex:S0,begin_vertex:E0,beginnormal_vertex:T0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:U0,color_pars_fragment:N0,color_pars_vertex:O0,color_vertex:F0,common:B0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:H0,displacementmap_pars_vertex:z0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:$0,envmap_pars_fragment:K0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:ag,envmap_vertex:J0,fog_vertex:j0,fog_pars_vertex:Q0,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:lg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:fg,lights_physical_pars_fragment:dg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:Mg,map_pars_fragment:bg,map_particle_fragment:wg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ug,normal_pars_vertex:Ng,normal_vertex:Og,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:zg,opaque_fragment:Vg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Zg,shadowmap_pars_vertex:Jg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:cy,transmission_pars_fragment:ly,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:yy,cube_vert:xy,cube_frag:_y,depth_vert:vy,depth_frag:My,distanceRGBA_vert:by,distanceRGBA_frag:wy,equirect_vert:Sy,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:Ay,meshbasic_vert:Ry,meshbasic_frag:Cy,meshlambert_vert:Iy,meshlambert_frag:Py,meshmatcap_vert:Ly,meshmatcap_frag:Dy,meshnormal_vert:Uy,meshnormal_frag:Ny,meshphong_vert:Oy,meshphong_frag:Fy,meshphysical_vert:By,meshphysical_frag:ky,meshtoon_vert:Hy,meshtoon_frag:zy,points_vert:Vy,points_frag:Gy,shadow_vert:Wy,shadow_frag:Xy,sprite_vert:qy,sprite_frag:Yy},fe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Nn={basic:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:$t([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:$t([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:$t([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:$t([fe.points,fe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:$t([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:$t([fe.common,fe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:$t([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:$t([fe.sprite,fe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:$t([fe.common,fe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:$t([fe.lights,fe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Nn.physical={uniforms:$t([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Eo={r:0,b:0,g:0},zi=new en,$y=new oe;function Ky(s,e,t,n,i,r,o){let a=new Ae(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1,x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Ma)?(h===void 0&&(h=new Ne(new At(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Bs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(_.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($y.makeRotationFromEuler(zi)),h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ht,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new tn(2,2),new gn({name:"BackgroundMaterial",uniforms:Bs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(Eo,Md(s)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m}}function Zy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(b,L,H,D,N){let W=!1,B=u(D,H,L);r!==B&&(r=B,l(r.object)),W=d(b,D,H,N),W&&g(b,D,H,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(b,L,H,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,H){let D=H.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let W=N[L.id];W===void 0&&(W={},N[L.id]=W);let B=W[D];return B===void 0&&(B=f(c()),W[D]=B),B}function f(b){let L=[],H=[],D=[];for(let N=0;N<t;N++)L[N]=0,H[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:D,object:b,attributes:{},index:null}}function d(b,L,H,D){let N=r.attributes,W=L.attributes,B=0,J=H.getAttributes();for(let G in J)if(J[G].location>=0){let ue=N[G],_e=W[G];if(_e===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(b,L,H,D){let N={},W=L.attributes,B=0,J=H.getAttributes();for(let G in J)if(J[G].location>=0){let ue=W[G];ue===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));let _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),N[G]=_e,B++}r.attributes=N,r.attributesNum=B,r.index=D}function y(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){let H=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;H[b]=1,D[b]===0&&(s.enableVertexAttribArray(b),D[b]=1),N[b]!==L&&(s.vertexAttribDivisor(b,L),N[b]=L)}function v(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,D=L.length;H<D;H++)L[H]!==b[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function _(b,L,H,D,N,W,B){B===!0?s.vertexAttribIPointer(b,L,H,N,W):s.vertexAttribPointer(b,L,H,D,N,W)}function x(b,L,H,D){y();let N=D.attributes,W=H.getAttributes(),B=L.defaultAttributeValues;for(let J in W){let G=W[J];if(G.location>=0){let ae=N[J];if(ae===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),ae!==void 0){let ue=ae.normalized,_e=ae.itemSize,Ue=e.get(ae);if(Ue===void 0)continue;let Ye=Ue.buffer,$=Ue.type,se=Ue.bytesPerElement,we=$===s.INT||$===s.UNSIGNED_INT||ae.gpuType===fh;if(ae.isInterleavedBufferAttribute){let le=ae.data,De=le.stride,X=ae.offset;if(le.isInstancedInterleavedBuffer){for(let ne=0;ne<G.locationSize;ne++)p(G.location+ne,le.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ne=0;ne<G.locationSize;ne++)m(G.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ne=0;ne<G.locationSize;ne++)_(G.location+ne,_e/G.locationSize,$,ue,De*se,(X+_e/G.locationSize*ne)*se,we)}else{if(ae.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,ae.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let le=0;le<G.locationSize;le++)_(G.location+le,_e/G.locationSize,$,ue,_e*se,_e/G.locationSize*le*se,we)}}else if(B!==void 0){let ue=B[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(G.location,ue);break;case 3:s.vertexAttrib3fv(G.location,ue);break;case 4:s.vertexAttrib4fv(G.location,ue);break;default:s.vertexAttrib1fv(G.location,ue)}}}}v()}function P(){T();for(let b in n){let L=n[b];for(let H in L){let D=L[H];for(let N in D)h(D[N].object),delete D[N];delete L[H]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let H in L){let D=L[H];for(let N in D)h(D[N].object),delete D[N];delete L[H]}delete n[b.id]}function C(b){for(let L in n){let H=n[L];if(H[b.id]===void 0)continue;let D=H[b.id];for(let N in D)h(D[N].object),delete D[N];delete H[b.id]}}function T(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function Jy(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let T=C===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ni&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!T)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function Qy(s){let e=this,t=null,n=0,i=!1,r=!1,o=new jn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,_=v*4,x=p.clippingState||null;c.value=x,x=h(g,f,_,d);for(let P=0;P!==_;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==y;++_,x+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ex(s){let e=new WeakMap;function t(o,a){return a===jc?o.mapping=Is:a===Qc&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jc||a===Qc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Pl(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ks=class extends Jo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,ff=[.125,.215,.35,.446,.526,.582],qi=20,Cc=new ks,df=new Ae,Ic=null,Pc=0,Lc=0,Dc=!1,Gi=(1+Math.sqrt(5))/2,xs=1/Gi,pf=[new E(-Gi,xs,0),new E(Gi,xs,0),new E(-xs,0,Gi),new E(xs,0,Gi),new E(0,Gi,-xs),new E(0,Gi,xs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Pc,Lc),this._renderer.xr.enabled=Dc,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Xr,format:pn,colorSpace:Wt,depthBuffer:!1},i=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(r)),this._blurMaterial=nx(r,e,t)}return i}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Cc)}_sceneToCubeUV(e,t,n,i){let a=new Et(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(df),h.toneMapping=Si,h.autoClear=!1;let d=new Nt({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new Ne(new At,d),y=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,y=!0):(d.color.copy(df),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;To(i,v*_,p>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Is||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;To(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Cc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pf[(i-r-1)%pf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let p=[],v=0;for(let C=0;C<qi;++C){let T=C/y,w=Math.exp(-T*T/2);p.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let x=this._sizeLods[i],P=3*x*(i>_-ws?i-_+ws:0),R=4*(this._cubeSize-x);To(t,P,R,3*x,2*x),c.setRenderTarget(t),c.render(u,Cc)}};function tx(s){let e=[],t=[],n=[],i=s,r=s-ws+1+ff.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ws?c=ff[o-s+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*d),_=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let R=0;R<d;R++){let C=R%3*2/3-1,T=R>2?0:-1,w=[C,T,0,C+2/3,T,0,C+2/3,T+1,0,C,T,0,C+2/3,T+1,0,C,T+1,0];v.set(w,y*g*R),_.set(f,m*g*R);let b=[R,R,R,R,R,R];x.set(b,p*g*R)}let P=new ot;P.setAttribute("position",new et(v,y)),P.setAttribute("uv",new et(_,m)),P.setAttribute("faceIndex",new et(x,p)),e.push(P),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(s,e,t){let n=new In(s,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function nx(s,e,t){let n=new Float32Array(qi),i=new E(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function gf(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function yf(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function ix(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===jc||c===Qc,h=c===Is||c===Ps;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Hs(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Hs(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rx(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let v=d.array;y=d.version;for(let _=0,x=v.length;_<x;_+=3){let P=v[_+0],R=v[_+1],C=v[_+2];f.push(P,R,R,C,C,P)}}else if(g!==void 0){let v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let P=_+0,R=_+1,C=_+2;f.push(P,R,R,C,C,P)}}else return;let m=new(_d(f)?Zo:Ko)(f,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ox(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*y[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ax(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cx(s,e,t){let n=new WeakMap,i=new it;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let x=a.attributes.position.count*_,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*P*4*u),C=new Yo(R,x,P,u);C.type=Cn,C.needsUpdate=!0;let T=_*4;for(let b=0;b<u;b++){let L=m[b],H=p[b],D=v[b],N=x*P*4*b;for(let W=0;W<L.count;W++){let B=W*T;d===!0&&(i.fromBufferAttribute(L,W),R[N+B+0]=i.x,R[N+B+1]=i.y,R[N+B+2]=i.z,R[N+B+3]=0),g===!0&&(i.fromBufferAttribute(H,W),R[N+B+4]=i.x,R[N+B+5]=i.y,R[N+B+6]=i.z,R[N+B+7]=0),y===!0&&(i.fromBufferAttribute(D,W),R[N+B+8]=i.x,R[N+B+9]=i.y,R[N+B+10]=i.z,R[N+B+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new ie(x,P)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function lx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Qo=class extends Ut{constructor(e,t,n,i,r,o,a,c,l,h=Ts){if(h!==Ts&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Yi),n===void 0&&h===Ds&&(n=Ls),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wd=new Ut,xf=new Qo(1,1),Sd=new Yo,Ed=new Cl,Td=new jo,_f=[],vf=[],Mf=new Float32Array(16),bf=new Float32Array(9),wf=new Float32Array(4);function Ks(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=_f[i];if(r===void 0&&(r=new Float32Array(i),_f[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Sa(s,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function px(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;wf.set(n),s.uniformMatrix2fv(this.addr,!1,wf),Pt(t,n)}}function mx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;bf.set(n),s.uniformMatrix3fv(this.addr,!1,bf),Pt(t,n)}}function gx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Mf.set(n),s.uniformMatrix4fv(this.addr,!1,Mf),Pt(t,n)}}function yx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function _x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function Mx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Ex(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xf.compareFunction=xd,r=xf):r=wd,t.setTexture2D(e||r,i)}function Tx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ed,i)}function Ax(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Td,i)}function Rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sd,i)}function Cx(s){switch(s){case 5126:return hx;case 35664:return ux;case 35665:return fx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return yx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return Mx;case 36294:return bx;case 36295:return wx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Ix(s,e){s.uniform1fv(this.addr,e)}function Px(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function Lx(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function Dx(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function Ux(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Nx(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ox(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Fx(s,e){s.uniform1iv(this.addr,e)}function Bx(s,e){s.uniform2iv(this.addr,e)}function kx(s,e){s.uniform3iv(this.addr,e)}function Hx(s,e){s.uniform4iv(this.addr,e)}function zx(s,e){s.uniform1uiv(this.addr,e)}function Vx(s,e){s.uniform2uiv(this.addr,e)}function Gx(s,e){s.uniform3uiv(this.addr,e)}function Wx(s,e){s.uniform4uiv(this.addr,e)}function Xx(s,e,t){let n=this.cache,i=e.length,r=Sa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wd,r[o])}function qx(s,e,t){let n=this.cache,i=e.length,r=Sa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ed,r[o])}function Yx(s,e,t){let n=this.cache,i=e.length,r=Sa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Td,r[o])}function $x(s,e,t){let n=this.cache,i=e.length,r=Sa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Sd,r[o])}function Kx(s){switch(s){case 5126:return Ix;case 35664:return Px;case 35665:return Lx;case 35666:return Dx;case 35674:return Ux;case 35675:return Nx;case 35676:return Ox;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return zx;case 36294:return Vx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return $x}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cx(t.type)}},Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kx(t.type)}},Ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Sf(s,e){s.seq.push(e),s.map[e.id]=e}function Zx(s,e,t){let n=s.name,i=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),o=Uc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Sf(t,l===void 0?new Ll(a,s,e):new Dl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ul(a),Sf(t,u)),t=u}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Zx(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ef(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Jx=37297,jx=0;function Qx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Tf=new We;function e_(s){Ze._getMatrix(Tf,Ze.workingColorSpace,s);let e=`mat3( ${Tf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(s)){case wa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Af(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qx(s.getShaderSource(e),o)}else return i}function t_(s,e){let t=e_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n_(s,e){let t;switch(e){case um:t="Linear";break;case fm:t="Reinhard";break;case dm:t="Cineon";break;case hh:t="ACESFilmic";break;case mm:t="AgX";break;case gm:t="Neutral";break;case pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new E;function i_(){Ze.getLuminanceCoefficients(Ao);let s=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function r_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wr(s){return s!==""}function Rf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(s){return s.replace(a_,l_)}var c_=new Map;function l_(s,e){let t=qe[e];if(t===void 0){let n=c_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}var h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(s){return s.replace(h_,u_)}function u_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function f_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ps:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function m_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case lm:e="ENVMAP_BLENDING_MIX";break;case hm:e="ENVMAP_BLENDING_ADD";break}return e}function g_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=f_(t),l=d_(t),h=p_(t),u=m_(t),f=g_(t),d=s_(t),g=r_(r),y=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?qe.tonemapping_pars_fragment:"",t.toneMapping!==Si?n_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,t_("linearToOutputTexel",t.outputColorSpace),i_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Nl(o),o=Rf(o,t),o=Cf(o,t),a=Nl(a),a=Rf(a,t),a=Cf(a,t),o=If(o),a=If(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,x=v+p+a,P=Ef(i,i.VERTEX_SHADER,_),R=Ef(i,i.FRAGMENT_SHADER,x);i.attachShader(y,P),i.attachShader(y,R),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(L){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(y).trim(),D=i.getShaderInfoLog(P).trim(),N=i.getShaderInfoLog(R).trim(),W=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,P,R);else{let J=Af(i,P,"vertex"),G=Af(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+J+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||N==="")&&(B=!1);B&&(L.diagnostics={runnable:W,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(P),i.deleteShader(R),T=new Rs(i,y),w=o_(i,y)}let T;this.getUniforms=function(){return T===void 0&&C(this),T};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(y,Jx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}var x_=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=x_++,this.code=e,this.usedTimes=0}};function __(s,e,t,n,i,r,o){let a=new $o,c=new Ol,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,L,H,D){let N=H.fog,W=D.geometry,B=w.isMeshStandardMaterial?H.environment:null,J=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),G=J&&J.mapping===Ma?J.image.height:null,ae=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ue!==void 0?ue.length:0,Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let Ye,$,se,we;if(ae){let at=Nn[ae];Ye=at.vertexShader,$=at.fragmentShader}else Ye=w.vertexShader,$=w.fragmentShader,c.update(w),se=c.getVertexShaderID(w),we=c.getFragmentShaderID(w);let le=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),X=D.isInstancedMesh===!0,ne=D.isBatchedMesh===!0,Te=!!w.map,Y=!!w.matcap,Q=!!J,I=!!w.aoMap,ve=!!w.lightMap,te=!!w.bumpMap,ye=!!w.normalMap,he=!!w.displacementMap,Fe=!!w.emissiveMap,Me=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,k=w.clearcoat>0,K=w.dispersion>0,ee=w.iridescence>0,Z=w.sheen>0,Re=w.transmission>0,de=M&&!!w.anisotropyMap,be=k&&!!w.clearcoatMap,Ke=k&&!!w.clearcoatNormalMap,re=k&&!!w.clearcoatRoughnessMap,Se=ee&&!!w.iridescenceMap,Be=ee&&!!w.iridescenceThicknessMap,ke=Z&&!!w.sheenColorMap,Ee=Z&&!!w.sheenRoughnessMap,je=!!w.specularMap,Xe=!!w.specularColorMap,dt=!!w.specularIntensityMap,U=Re&&!!w.transmissionMap,pe=Re&&!!w.thicknessMap,q=!!w.gradientMap,j=!!w.alphaMap,xe=w.alphaTest>0,me=!!w.alphaHash,Ve=!!w.extensions,St=Si;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(St=s.toneMapping);let kt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:$,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:ne,batchingColor:ne&&D._colorsTexture!==null,instancing:X,instancingColor:X&&D.instanceColor!==null,instancingMorph:X&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Wt,alphaToCoverage:!!w.alphaToCoverage,map:Te,matcap:Y,envMap:Q,envMapMode:Q&&J.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:ve,bumpMap:te,normalMap:ye,displacementMap:f&&he,emissiveMap:Fe,normalMapObjectSpace:ye&&w.normalMapType===bm,normalMapTangentSpace:ye&&w.normalMapType===yd,metalnessMap:Me,roughnessMap:A,anisotropy:M,anisotropyMap:de,clearcoat:k,clearcoatMap:be,clearcoatNormalMap:Ke,clearcoatRoughnessMap:re,dispersion:K,iridescence:ee,iridescenceMap:Se,iridescenceThicknessMap:Be,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Ee,specularMap:je,specularColorMap:Xe,specularIntensityMap:dt,transmission:Re,transmissionMap:U,thicknessMap:pe,gradientMap:q,opaque:w.transparent===!1&&w.blending===Es&&w.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:me,combine:w.combine,mapUv:Te&&y(w.map.channel),aoMapUv:I&&y(w.aoMap.channel),lightMapUv:ve&&y(w.lightMap.channel),bumpMapUv:te&&y(w.bumpMap.channel),normalMapUv:ye&&y(w.normalMap.channel),displacementMapUv:he&&y(w.displacementMap.channel),emissiveMapUv:Fe&&y(w.emissiveMap.channel),metalnessMapUv:Me&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:de&&y(w.anisotropyMap.channel),clearcoatMapUv:be&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&y(w.sheenRoughnessMap.channel),specularMapUv:je&&y(w.specularMap.channel),specularColorMapUv:Xe&&y(w.specularColorMap.channel),specularIntensityMapUv:dt&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:pe&&y(w.thicknessMap.channel),alphaMapUv:j&&y(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ye||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Te||j),fog:!!N,useFog:w.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:Te&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===ht,decodeVideoTextureEmissive:Fe&&w.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(w.emissiveMap.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kt,flipSided:w.side===Dt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)b.push(L),b.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(b,w),_(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function _(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let b=g[w.type],L;if(b){let H=Nn[b];L=l0.clone(H.uniforms)}else L=w.uniforms;return L}function P(w,b){let L;for(let H=0,D=h.length;H<D;H++){let N=h[H];if(N.cacheKey===b){L=N,++L.usedTimes;break}}return L===void 0&&(L=new y_(s,b,w,r),h.push(L)),L}function R(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:T}}function v_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function M_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Df(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,y,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||M_),n.length>1&&n.sort(f||Lf),i.length>1&&i.sort(f||Lf)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function b_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Df,s.set(n,[o])):i>=r.length?(o=new Df,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function w_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ae};break;case"SpotLight":t={position:new E,direction:new E,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new E,halfWidth:new E,halfHeight:new E};break}return s[e.id]=t,t}}}function S_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var E_=0;function T_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function A_(s){let e=new w_,t=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);let i=new E,r=new oe,o=new oe;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,v=0,_=0,x=0,P=0,R=0,C=0;l.sort(T_);for(let w=0,b=l.length;w<b;w++){let L=l[w],H=L.color,D=L.intensity,N=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*D,u+=H.g*D,f+=H.b*D;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],D);C++}else if(L.isDirectionalLight){let B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=L.shadow.matrix,v++}n.directional[d]=B,d++}else if(L.isSpotLight){let B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(H).multiplyScalar(D),B.distance=N,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[y]=B;let J=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,J.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[y]=J.matrix,L.castShadow){let G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=W,x++}y++}else if(L.isRectAreaLight){let B=e.get(L);B.color.copy(H).multiplyScalar(D),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){let B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=B,g++}else if(L.isHemisphereLight){let B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(D),B.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==v||T.numPointShadows!==_||T.numSpotShadows!==x||T.numSpotMaps!==P||T.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,T.directionalLength=d,T.pointLength=g,T.spotLength=y,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=v,T.numPointShadows=_,T.numSpotShadows=x,T.numSpotMaps=P,T.numLightProbes=C,n.version=E_++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Uf(s){let e=new A_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function R_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Uf(s),e.set(i,[a])):r>=o.length?(a=new Uf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bl=class extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function P_(s,e,t){let n=new Ur,i=new ie,r=new ie,o=new it,a=new Bl({depthPacking:Mm}),c=new kl,l={},h=t.maxTextureSize,u={[Fn]:Dt,[Dt]:Fn,[Kt]:Kt},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:C_,fragmentShader:I_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ot;g.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let p=this.type;this.render=function(R,C,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(wi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=p!==Jn&&this.type===Jn,N=p===Jn&&this.type!==Jn;for(let W=0,B=R.length;W<B;W++){let J=R[W],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ae=G.getFrameExtents();if(i.multiply(ae),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||D===!0||N===!0){let _e=this.type!==Jn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new In(i.x,i.y,_e),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let ue=G.getViewportCount();for(let _e=0;_e<ue;_e++){let Ue=G.getViewport(_e);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),H.viewport(o),G.updateMatrices(J,_e),n=G.getFrustum(),x(C,T,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Jn&&v(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,L)};function v(R,C){let T=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new In(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(C,null,T,f,y,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(C,null,T,d,y,null)}function _(R,C,T,w){let b=null,L=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)b=L;else if(b=T.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=b.uuid,D=C.uuid,N=l[H];N===void 0&&(N={},l[H]=N);let W=N[D];W===void 0&&(W=b.clone(),N[D]=W,C.addEventListener("dispose",P)),b=W}if(b.visible=C.visible,b.wireframe=C.wireframe,w===Jn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=s.properties.get(b);H.light=T}return b}function x(R,C,T,w,b){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);let D=e.update(R),N=R.material;if(Array.isArray(N)){let W=D.groups;for(let B=0,J=W.length;B<J;B++){let G=W[B],ae=N[G.materialIndex];if(ae&&ae.visible){let ue=_(R,ae,w,b);R.onBeforeShadow(s,R,C,T,D,ue,G),s.renderBufferDirect(T,null,D,ue,R,G),R.onAfterShadow(s,R,C,T,D,ue,G)}}}else if(N.visible){let W=_(R,N,w,b);R.onBeforeShadow(s,R,C,T,D,W,null),s.renderBufferDirect(T,null,D,W,R,null),R.onAfterShadow(s,R,C,T,D,W,null)}}let H=R.children;for(let D=0,N=H.length;D<N;D++)x(H[D],C,T,w,b)}function P(R){R.target.removeEventListener("dispose",P);for(let T in l){let w=l[T],b=R.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}var L_={[Xc]:qc,[Yc]:Zc,[$c]:Jc,[Cs]:Kc,[qc]:Xc,[Zc]:Yc,[Jc]:$c,[Kc]:Cs};function D_(s,e){function t(){let U=!1,pe=new it,q=null,j=new it(0,0,0,0);return{setMask:function(xe){q!==xe&&!U&&(s.colorMask(xe,xe,xe,xe),q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,me,Ve,St,kt){kt===!0&&(xe*=St,me*=St,Ve*=St),pe.set(xe,me,Ve,St),j.equals(pe)===!1&&(s.clearColor(xe,me,Ve,St),j.copy(pe))},reset:function(){U=!1,q=null,j.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,q=null,j=null,xe=null;return{setReversed:function(me){if(pe!==me){let Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let St=xe;xe=null,this.setClear(St)}pe=me},getReversed:function(){return pe},setTest:function(me){me?le(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(me){q!==me&&!U&&(s.depthMask(me),q=me)},setFunc:function(me){if(pe&&(me=L_[me]),j!==me){switch(me){case Xc:s.depthFunc(s.NEVER);break;case qc:s.depthFunc(s.ALWAYS);break;case Yc:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case $c:s.depthFunc(s.EQUAL);break;case Kc:s.depthFunc(s.GEQUAL);break;case Zc:s.depthFunc(s.GREATER);break;case Jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=me}},setLocked:function(me){U=me},setClear:function(me){xe!==me&&(pe&&(me=1-me),s.clearDepth(me),xe=me)},reset:function(){U=!1,q=null,j=null,xe=null,pe=!1}}}function i(){let U=!1,pe=null,q=null,j=null,xe=null,me=null,Ve=null,St=null,kt=null;return{setTest:function(at){U||(at?le(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(at){pe!==at&&!U&&(s.stencilMask(at),pe=at)},setFunc:function(at,wn,Gn){(q!==at||j!==wn||xe!==Gn)&&(s.stencilFunc(at,wn,Gn),q=at,j=wn,xe=Gn)},setOp:function(at,wn,Gn){(me!==at||Ve!==wn||St!==Gn)&&(s.stencilOp(at,wn,Gn),me=at,Ve=wn,St=Gn)},setLocked:function(at){U=at},setClear:function(at){kt!==at&&(s.clearStencil(at),kt=at)},reset:function(){U=!1,pe=null,q=null,j=null,xe=null,me=null,Ve=null,St=null,kt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,_=null,x=null,P=null,R=null,C=new Ae(0,0,0),T=0,w=!1,b=null,L=null,H=null,D=null,N=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=J>=2);let ae=null,ue={},_e=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ye=new it().fromArray(_e),$=new it().fromArray(Ue);function se(U,pe,q,j){let xe=new Uint8Array(4),me=s.createTexture();s.bindTexture(U,me),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<q;Ve++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(pe+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return me}let we={};we[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(s.DEPTH_TEST),o.setFunc(Cs),te(!1),ye(Bu),le(s.CULL_FACE),I(wi);function le(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function X(U,pe){return u[U]!==pe?(s.bindFramebuffer(U,pe),u[U]=pe,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ne(U,pe){let q=d,j=!1;if(U){q=f.get(pe),q===void 0&&(q=[],f.set(pe,q));let xe=U.textures;if(q.length!==xe.length||q[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Ve=xe.length;me<Ve;me++)q[me]=s.COLOR_ATTACHMENT0+me;q.length=xe.length,j=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,j=!0);j&&s.drawBuffers(q)}function Te(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let Y={[Wi]:s.FUNC_ADD,[qp]:s.FUNC_SUBTRACT,[Yp]:s.FUNC_REVERSE_SUBTRACT};Y[$p]=s.MIN,Y[Kp]=s.MAX;let Q={[Zp]:s.ZERO,[Jp]:s.ONE,[jp]:s.SRC_COLOR,[Gc]:s.SRC_ALPHA,[sm]:s.SRC_ALPHA_SATURATE,[nm]:s.DST_COLOR,[em]:s.DST_ALPHA,[Qp]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[im]:s.ONE_MINUS_DST_COLOR,[tm]:s.ONE_MINUS_DST_ALPHA,[rm]:s.CONSTANT_COLOR,[om]:s.ONE_MINUS_CONSTANT_COLOR,[am]:s.CONSTANT_ALPHA,[cm]:s.ONE_MINUS_CONSTANT_ALPHA};function I(U,pe,q,j,xe,me,Ve,St,kt,at){if(U===wi){y===!0&&(De(s.BLEND),y=!1);return}if(y===!1&&(le(s.BLEND),y=!0),U!==Xp){if(U!==m||at!==w){if((p!==Wi||x!==Wi)&&(s.blendEquation(s.FUNC_ADD),p=Wi,x=Wi),at)switch(U){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.ONE,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Go:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ku:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,P=null,R=null,C.set(0,0,0),T=0,m=U,w=at}return}xe=xe||pe,me=me||q,Ve=Ve||j,(pe!==p||xe!==x)&&(s.blendEquationSeparate(Y[pe],Y[xe]),p=pe,x=xe),(q!==v||j!==_||me!==P||Ve!==R)&&(s.blendFuncSeparate(Q[q],Q[j],Q[me],Q[Ve]),v=q,_=j,P=me,R=Ve),(St.equals(C)===!1||kt!==T)&&(s.blendColor(St.r,St.g,St.b,kt),C.copy(St),T=kt),m=U,w=!1}function ve(U,pe){U.side===Kt?De(s.CULL_FACE):le(s.CULL_FACE);let q=U.side===Dt;pe&&(q=!q),te(q),U.blending===Es&&U.transparent===!1?I(wi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function ye(U){U!==Gp?(le(s.CULL_FACE),U!==L&&(U===Bu?s.cullFace(s.BACK):U===Wp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),L=U}function he(U){U!==H&&(B&&s.lineWidth(U),H=U)}function Fe(U,pe,q){U?(le(s.POLYGON_OFFSET_FILL),(D!==pe||N!==q)&&(s.polygonOffset(pe,q),D=pe,N=q)):De(s.POLYGON_OFFSET_FILL)}function Me(U){U?le(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function A(U){U===void 0&&(U=s.TEXTURE0+W-1),ae!==U&&(s.activeTexture(U),ae=U)}function M(U,pe,q){q===void 0&&(ae===null?q=s.TEXTURE0+W-1:q=ae);let j=ue[q];j===void 0&&(j={type:void 0,texture:void 0},ue[q]=j),(j.type!==U||j.texture!==pe)&&(ae!==q&&(s.activeTexture(q),ae=q),s.bindTexture(U,pe||we[U]),j.type=U,j.texture=pe)}function k(){let U=ue[ae];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){Ye.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ye.copy(U))}function Ee(U){$.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function je(U,pe){let q=l.get(pe);q===void 0&&(q=new WeakMap,l.set(pe,q));let j=q.get(U);j===void 0&&(j=s.getUniformBlockIndex(pe,U.name),q.set(U,j))}function Xe(U,pe){let j=l.get(pe).get(U);c.get(pe)!==j&&(s.uniformBlockBinding(pe,j,U.__bindingPointIndex),c.set(pe,j))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,ue={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,_=null,x=null,P=null,R=null,C=new Ae(0,0,0),T=0,w=!1,b=null,L=null,H=null,D=null,N=null,Ye.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:De,bindFramebuffer:X,drawBuffers:ne,useProgram:Te,setBlending:I,setMaterial:ve,setFlipSided:te,setCullFace:ye,setLineWidth:he,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:Se,texImage3D:Be,updateUBOMapping:je,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:ke,viewport:Ee,reset:dt}}function Nf(s,e,t,n){let i=U_(n);switch(t){case hd:return s*e;case fd:return s*e;case dd:return s*e*2;case mh:return s*e/i.components*i.byteLength;case gh:return s*e/i.components*i.byteLength;case pd:return s*e*2/i.components*i.byteLength;case yh:return s*e*2/i.components*i.byteLength;case ud:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case xh:return s*e*4/i.components*i.byteLength;case Bo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ho:case zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(s,16)*Math.max(e,8)/4;case el:case nl:return Math.max(s,8)*Math.max(e,8)/2;case sl:case rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Ml:case bl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case md:case wl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sl:case El:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U_(s){switch(s){case ni:case ad:return{byteLength:1,components:1};case Lr:case cd:case Xr:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Yi:case fh:case Cn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Dr("canvas")}function y(A,M,k){let K=1,ee=Me(A);if((ee.width>k||ee.height>k)&&(K=k/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor(K*ee.width),Re=Math.floor(K*ee.height);u===void 0&&(u=g(Z,Re));let de=M?g(Z,Re):u;return de.width=Z,de.height=Re,de.getContext("2d").drawImage(A,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Re+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,M,k,K,ee=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),M===s.RGBA){let Re=ee?wa:Ze.getTransfer(K);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Re===ht?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(A,M){let k;return A?M===null||M===Yi||M===Ls?k=s.DEPTH24_STENCIL8:M===Cn?k=s.DEPTH32F_STENCIL8:M===Lr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===Ls?k=s.DEPTH_COMPONENT24:M===Cn?k=s.DEPTH_COMPONENT32F:M===Lr&&(k=s.DEPTH_COMPONENT16),k}function P(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){let M=A.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&h.delete(M)}function C(A){let M=A.target;M.removeEventListener("dispose",C),b(M)}function T(A){let M=n.get(A);if(M.__webglInit===void 0)return;let k=A.source,K=f.get(k);if(K){let ee=K[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(A),Object.keys(K).length===0&&f.delete(k)}n.remove(A)}function w(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let k=A.source,K=f.get(k);delete K[M.__cacheKey],o.memory.textures--}function b(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ee=0;ee<M.__webglFramebuffer[K].length;ee++)s.deleteFramebuffer(M.__webglFramebuffer[K][ee]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=A.textures;for(let K=0,ee=k.length;K<ee;K++){let Z=n.get(k[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(A)}let L=0;function H(){L=0}function D(){let A=L;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function N(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){let k=n.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,A,M);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function B(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function J(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function G(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){se(k,A,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let ae={[an]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},ue={[Vt]:s.NEAREST,[uh]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},_e={[wm]:s.NEVER,[Cm]:s.ALWAYS,[Sm]:s.LESS,[xd]:s.LEQUAL,[Em]:s.EQUAL,[Rm]:s.GEQUAL,[Tm]:s.GREATER,[Am]:s.NOTEQUAL};function Ue(A,M){if(M.type===Cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===Sr||M.magFilter===vs||M.magFilter===On||M.minFilter===jt||M.minFilter===Sr||M.minFilter===vs||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ae[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vt||M.minFilter!==vs&&M.minFilter!==On||M.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ye(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));let K=M.source,ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));let Z=N(M);if(Z!==A.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Z].usedTimes++;let Re=ee[A.__cacheKey];Re!==void 0&&(ee[A.__cacheKey].usedTimes--,Re.usedTimes===0&&w(M)),A.__cacheKey=Z,A.__webglTexture=ee[Z].texture}return k}function $(A,M,k){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);let ee=Ye(A,M),Z=M.source;t.bindTexture(K,A.__webglTexture,s.TEXTURE0+k);let Re=n.get(Z);if(Z.version!==Re.__version||ee===!0){t.activeTexture(s.TEXTURE0+k);let de=Ze.getPrimaries(Ze.workingColorSpace),be=M.colorSpace===Mi?null:Ze.getPrimaries(M.colorSpace),Ke=M.colorSpace===Mi||de===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let re=y(M.image,!1,i.maxTextureSize);re=Fe(M,re);let Se=r.convert(M.format,M.colorSpace),Be=r.convert(M.type),ke=_(M.internalFormat,Se,Be,M.colorSpace,M.isVideoTexture);Ue(K,M);let Ee,je=M.mipmaps,Xe=M.isVideoTexture!==!0,dt=Re.__version===void 0||ee===!0,U=Z.dataReady,pe=P(M,re);if(M.isDepthTexture)ke=x(M.format===Ds,M.type),dt&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,Se,Be,null));else if(M.isDataTexture)if(je.length>0){Xe&&dt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,je[0].width,je[0].height);for(let q=0,j=je.length;q<j;q++)Ee=je[q],Xe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Be,Ee.data):t.texImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Se,Be,Ee.data);M.generateMipmaps=!1}else Xe?(dt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,re.width,re.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Se,Be,re.data)):t.texImage2D(s.TEXTURE_2D,0,ke,re.width,re.height,0,Se,Be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ke,je[0].width,je[0].height,re.depth);for(let q=0,j=je.length;q<j;q++)if(Ee=je[q],M.format!==pn)if(Se!==null)if(Xe){if(U)if(M.layerUpdates.size>0){let xe=Nf(Ee.width,Ee.height,M.format,M.type);for(let me of M.layerUpdates){let Ve=Ee.data.subarray(me*xe/Ee.data.BYTES_PER_ELEMENT,(me+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,me,Ee.width,Ee.height,1,Se,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,re.depth,Se,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,re.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ee.width,Ee.height,re.depth,Se,Be,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,ke,Ee.width,Ee.height,re.depth,0,Se,Be,Ee.data)}else{Xe&&dt&&t.texStorage2D(s.TEXTURE_2D,pe,ke,je[0].width,je[0].height);for(let q=0,j=je.length;q<j;q++)Ee=je[q],M.format!==pn?Se!==null?Xe?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ee.width,Ee.height,Se,Be,Ee.data):t.texImage2D(s.TEXTURE_2D,q,ke,Ee.width,Ee.height,0,Se,Be,Ee.data)}else if(M.isDataArrayTexture)if(Xe){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ke,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){let q=Nf(re.width,re.height,M.format,M.type);for(let j of M.layerUpdates){let xe=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,Se,Be,xe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Be,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,Se,Be,re.data);else if(M.isData3DTexture)Xe?(dt&&t.texStorage3D(s.TEXTURE_3D,pe,ke,re.width,re.height,re.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Be,re.data)):t.texImage3D(s.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,Se,Be,re.data);else if(M.isFramebufferTexture){if(dt)if(Xe)t.texStorage2D(s.TEXTURE_2D,pe,ke,re.width,re.height);else{let q=re.width,j=re.height;for(let xe=0;xe<pe;xe++)t.texImage2D(s.TEXTURE_2D,xe,ke,q,j,0,Se,Be,null),q>>=1,j>>=1}}else if(je.length>0){if(Xe&&dt){let q=Me(je[0]);t.texStorage2D(s.TEXTURE_2D,pe,ke,q.width,q.height)}for(let q=0,j=je.length;q<j;q++)Ee=je[q],Xe?U&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Se,Be,Ee):t.texImage2D(s.TEXTURE_2D,q,ke,Se,Be,Ee);M.generateMipmaps=!1}else if(Xe){if(dt){let q=Me(re);t.texStorage2D(s.TEXTURE_2D,pe,ke,q.width,q.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Be,re)}else t.texImage2D(s.TEXTURE_2D,0,ke,Se,Be,re);m(M)&&p(K),Re.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function se(A,M,k){if(M.image.length!==6)return;let K=Ye(A,M),ee=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);let Z=n.get(ee);if(ee.version!==Z.__version||K===!0){t.activeTexture(s.TEXTURE0+k);let Re=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===Mi?null:Ze.getPrimaries(M.colorSpace),be=M.colorSpace===Mi||Re===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let j=0;j<6;j++)!Ke&&!re?Se[j]=y(M.image[j],!0,i.maxCubemapSize):Se[j]=re?M.image[j].image:M.image[j],Se[j]=Fe(M,Se[j]);let Be=Se[0],ke=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type),je=_(M.internalFormat,ke,Ee,M.colorSpace),Xe=M.isVideoTexture!==!0,dt=Z.__version===void 0||K===!0,U=ee.dataReady,pe=P(M,Be);Ue(s.TEXTURE_CUBE_MAP,M);let q;if(Ke){Xe&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,je,Be.width,Be.height);for(let j=0;j<6;j++){q=Se[j].mipmaps;for(let xe=0;xe<q.length;xe++){let me=q[xe];M.format!==pn?ke!==null?Xe?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,me.width,me.height,ke,Ee,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,je,me.width,me.height,0,ke,Ee,me.data)}}}else{if(q=M.mipmaps,Xe&&dt){q.length>0&&pe++;let j=Me(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,je,j.width,j.height)}for(let j=0;j<6;j++)if(re){Xe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se[j].width,Se[j].height,ke,Ee,Se[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,Se[j].width,Se[j].height,0,ke,Ee,Se[j].data);for(let xe=0;xe<q.length;xe++){let Ve=q[xe].image[j].image;Xe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ve.width,Ve.height,ke,Ee,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,je,Ve.width,Ve.height,0,ke,Ee,Ve.data)}}else{Xe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Ee,Se[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,ke,Ee,Se[j]);for(let xe=0;xe<q.length;xe++){let me=q[xe];Xe?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,ke,Ee,me.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,je,ke,Ee,me.image[j])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function we(A,M,k,K,ee,Z){let Re=r.convert(k.format,k.colorSpace),de=r.convert(k.type),be=_(k.internalFormat,Re,de,k.colorSpace),Ke=n.get(M),re=n.get(k);if(re.__renderTarget=M,!Ke.__hasExternalTextures){let Se=Math.max(1,M.width>>Z),Be=Math.max(1,M.height>>Z);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,be,Se,Be,M.depth,0,Re,de,null):t.texImage2D(ee,Z,be,Se,Be,0,Re,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ye(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ee,re.__webglTexture,0,te(M)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ee,re.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let K=M.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Z=x(M.stencilBuffer,ee),Re=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=te(M);ye(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,Z,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,A)}else{let K=M.textures;for(let ee=0;ee<K.length;ee++){let Z=K[ee],Re=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),be=_(Z.internalFormat,Re,de,Z.colorSpace),Ke=te(M);k&&ye(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,be,M.width,M.height):ye(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,be,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,be,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let ee=K.__webglTexture,Z=te(M);if(M.depthTexture.format===Ts)ye(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ds)ye(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function X(A){let M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=K}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=s.createRenderbuffer(),le(M.__webglDepthbuffer[K],A,!1);else{let ee=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),le(M.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(A,M,k){let K=n.get(A);M!==void 0&&we(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&X(A)}function Te(A){let M=A.texture,k=n.get(A),K=n.get(M);A.addEventListener("dispose",C);let ee=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let be=0;be<M.mipmaps.length;be++)k.__webglFramebuffer[de][be]=s.createFramebuffer()}else k.__webglFramebuffer[de]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)k.__webglFramebuffer[de]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Re)for(let de=0,be=ee.length;de<be;de++){let Ke=n.get(ee[de]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&ye(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){let be=ee[de];k.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[de]);let Ke=r.convert(be.format,be.colorSpace),re=r.convert(be.type),Se=_(be.internalFormat,Ke,re,be.colorSpace,A.isXRRenderTarget===!0),Be=te(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Se,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,k.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),le(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)we(k.__webglFramebuffer[de][be],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be);else we(k.__webglFramebuffer[de],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,be=ee.length;de<be;de++){let Ke=ee[de],re=n.get(Ke);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),Ue(s.TEXTURE_2D,Ke),we(k.__webglFramebuffer,A,Ke,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),Ue(de,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)we(k.__webglFramebuffer[be],A,M,s.COLOR_ATTACHMENT0,de,be);else we(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,de,0);m(M)&&p(de),t.unbindTexture()}A.depthBuffer&&X(A)}function Y(A){let M=A.textures;for(let k=0,K=M.length;k<K;k++){let ee=M[k];if(m(ee)){let Z=v(A),Re=n.get(ee).__webglTexture;t.bindTexture(Z,Re),p(Z),t.unbindTexture()}}}let Q=[],I=[];function ve(A){if(A.samples>0){if(ye(A)===!1){let M=A.textures,k=A.width,K=A.height,ee=s.COLOR_BUFFER_BIT,Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(A),de=M.length>1;if(de)for(let be=0;be<M.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let be=0;be<M.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let Ke=n.get(M[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,ee,s.NEAREST),c===!0&&(Q.length=0,I.length=0,Q.push(s.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(Z),I.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<M.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Re.__webglColorRenderbuffer[be]);let Ke=n.get(M[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function te(A){return Math.min(i.maxSamples,A.samples)}function ye(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Fe(A,M){let k=A.colorSpace,K=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Wt&&k!==Mi&&(Ze.getTransfer(k)===ht?(K!==pn||ee!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=ne,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ye}function O_(s,e){function t(n,i=Mi){let r,o=Ze.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===dh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ad)return s.BYTE;if(n===cd)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===fh)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Xr)return s.HALF_FLOAT;if(n===hd)return s.ALPHA;if(n===ud)return s.RGB;if(n===pn)return s.RGBA;if(n===fd)return s.LUMINANCE;if(n===dd)return s.LUMINANCE_ALPHA;if(n===Ts)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===mh)return s.RED;if(n===gh)return s.RED_INTEGER;if(n===pd)return s.RG;if(n===yh)return s.RG_INTEGER;if(n===xh)return s.RGBA_INTEGER;if(n===Bo||n===ko||n===Ho||n===zo)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===yl||n===xl||n===_l||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ml||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===wl||n===Sl||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Hl=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},F_={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ut,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new gn({vertexShader:B_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends ii{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=new zl,m=t.getContextAttributes(),p=null,v=null,_=[],x=[],P=new ie,R=null,C=new Et;C.viewport=new it;let T=new Et;T.viewport=new it;let w=[C,T],b=new Hl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=_[$];return se===void 0&&(se=new Ar,_[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=_[$];return se===void 0&&(se=new Ar,_[$]=se),se.getGripSpace()},this.getHand=function($){let se=_[$];return se===void 0&&(se=new Ar,_[$]=se),se.getHandSpace()};function D($){let se=x.indexOf($.inputSource);if(se===-1)return;let we=_[se];we!==void 0&&(we.update($.inputSource,$.frame,l||o),we.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",W);for(let $=0;$<_.length;$++){let se=x[$];se!==null&&(x[$]=null,_[$].disconnect(se))}L=null,H=null,y.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new In(d.framebufferWidth,d.framebufferHeight,{format:pn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,we=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Ds:Ts,we=m.stencil?Ls:Yi);let De={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(De),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new In(f.textureWidth,f.textureHeight,{format:pn,type:ni,depthTexture:new Qo(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W($){for(let se=0;se<$.removed.length;se++){let we=$.removed[se],le=x.indexOf(we);le>=0&&(x[le]=null,_[le].disconnect(we))}for(let se=0;se<$.added.length;se++){let we=$.added[se],le=x.indexOf(we);if(le===-1){for(let X=0;X<_.length;X++)if(X>=x.length){x.push(we),le=X;break}else if(x[X]===null){x[X]=we,le=X;break}if(le===-1)break}let De=_[le];De&&De.connect(we)}}let B=new E,J=new E;function G($,se,we){B.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);let le=B.distanceTo(J),De=se.projectionMatrix.elements,X=we.projectionMatrix.elements,ne=De[14]/(De[10]-1),Te=De[14]/(De[10]+1),Y=(De[9]+1)/De[5],Q=(De[9]-1)/De[5],I=(De[8]-1)/De[0],ve=(X[8]+1)/X[0],te=ne*I,ye=ne*ve,he=le/(-I+ve),Fe=he*-I;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(he),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Me=ne+he,A=Te+he,M=te-Fe,k=ye+(le-Fe),K=Y*Te/A*Me,ee=Q*Te/A*Me;$.projectionMatrix.makePerspective(M,k,K,ee,Me,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let se=$.near,we=$.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(we=y.depthFar)),b.near=T.near=C.near=se,b.far=T.far=C.far=we,(L!==b.near||H!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),C.layers.mask=$.layers.mask|2,T.layers.mask=$.layers.mask|4,b.layers.mask=C.layers.mask|T.layers.mask;let le=$.parent,De=b.cameras;ae(b,le);for(let X=0;X<De.length;X++)ae(De[X],le);De.length===2?G(b,C,T):b.projectionMatrix.copy(C.projectionMatrix),ue($,b,le)};function ue($,se,we){we===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Os*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let _e=null;function Ue($,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let le=!1;we.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let X=0;X<we.length;X++){let ne=we[X],Te=null;if(d!==null)Te=d.getViewport(ne);else{let Q=u.getViewSubImage(f,ne);Te=Q.viewport,X===0&&(e.setRenderTargetTextures(v,Q.colorTexture,f.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(v))}let Y=w[X];Y===void 0&&(Y=new Et,Y.layers.enable(X),Y.viewport=new it,w[X]=Y),Y.matrix.fromArray(ne.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ne.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Te.x,Te.y,Te.width,Te.height),X===0&&(b.matrix.copy(Y.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(Y)}let De=i.enabledFeatures;if(De&&De.includes("depth-sensing")){let X=u.getDepthInformation(we[0]);X&&X.isValid&&X.texture&&y.init(e,X,i.renderState)}}for(let we=0;we<_.length;we++){let le=x[we],De=_[we];le!==null&&De!==void 0&&De.update(le,se,l||o)}_e&&_e($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ye=new bd;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function($){_e=$},this.dispose=function(){}}},Vi=new en,H_=new oe;function z_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Md(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Vi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));let P=_.program;n.updateUBOMapping(v,P);let R=e.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){let _=u();v.__bindingPointIndex=_;let x=s.createBuffer(),P=v.__size,R=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],x=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,C=x.length;R<C;R++){let T=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,b=T.length;w<b;w++){let L=T[w];if(d(L,R,w,P)===!0){let H=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],N=0;for(let W=0;W<D.length;W++){let B=D[W],J=y(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,H+N,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,x,P){let R=v.value,C=_+"_"+x;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{let T=P[C];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return P[C]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function g(v){let _=v.uniforms,x=0,P=16;for(let C=0,T=_.length;C<T;C++){let w=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,L=w.length;b<L;b++){let H=w[b],D=Array.isArray(H.value)?H.value:[H.value];for(let N=0,W=D.length;N<W;N++){let B=D[N],J=y(B),G=x%P,ae=G%J.boundary,ue=G+ae;x+=ae,ue!==0&&P-ue<J.storage&&(x+=P-ue),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=J.storage}}}let R=x%P;return R>0&&(x+=P-R),v.__size=x,v.__cache={},this}function y(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var ea=class{constructor(e={}){let{canvas:t=qm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Si,this.toneMappingExposure=1;let x=this,P=!1,R=0,C=0,T=null,w=-1,b=null,L=new it,H=new it,D=null,N=new Ae(0),W=0,B=t.width,J=t.height,G=1,ae=null,ue=null,_e=new it(0,0,B,J),Ue=new it(0,0,B,J),Ye=!1,$=new Ur,se=!1,we=!1,le=new oe,De=new oe,X=new E,ne=new it,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function Q(){return T===null?G:1}let I=n;function ve(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){let O="webgl2";if(I=ve(O,S),I===null)throw ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,ye,he,Fe,Me,A,M,k,K,ee,Z,Re,de,be,Ke,re,Se,Be,ke,Ee,je,Xe,dt,U;function pe(){te=new sx(I),te.init(),Xe=new O_(I,te),ye=new jy(I,te,e,Xe),he=new D_(I,te),ye.reverseDepthBuffer&&f&&he.buffers.depth.setReversed(!0),Fe=new ax(I),Me=new v_,A=new N_(I,te,he,Me,ye,Xe,Fe),M=new ex(x),k=new ix(x),K=new p0(I),dt=new Zy(I,K),ee=new rx(I,K,Fe,dt),Z=new lx(I,ee,K,Fe),ke=new cx(I,ye,A),re=new Qy(Me),Re=new __(x,M,k,te,ye,dt,re),de=new z_(x,Me),be=new b_,Ke=new R_(te),Be=new Ky(x,M,k,he,Z,d,c),Se=new P_(x,Z,ye),U=new V_(I,Fe,ye,he),Ee=new Jy(I,te,Fe),je=new ox(I,te,Fe),Fe.programs=Re.programs,x.capabilities=ye,x.extensions=te,x.properties=Me,x.renderLists=be,x.shadowMap=Se,x.state=he,x.info=Fe}pe();let q=new Vl(x,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(B,J,!1))},this.getSize=function(S){return S.set(B,J)},this.setSize=function(S,O,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,J=O,t.width=Math.floor(S*G),t.height=Math.floor(O*G),z===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(B*G,J*G).floor()},this.setDrawingBufferSize=function(S,O,z){B=S,J=O,G=z,t.width=Math.floor(S*z),t.height=Math.floor(O*z),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(_e)},this.setViewport=function(S,O,z,V){S.isVector4?_e.set(S.x,S.y,S.z,S.w):_e.set(S,O,z,V),he.viewport(L.copy(_e).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ue)},this.setScissor=function(S,O,z,V){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,O,z,V),he.scissor(H.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){he.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(S=!0,O=!0,z=!0){let V=0;if(S){let F=!1;if(T!==null){let ce=T.texture.format;F=ce===xh||ce===yh||ce===gh}if(F){let ce=T.texture.type,ge=ce===ni||ce===Yi||ce===Lr||ce===Ls||ce===dh||ce===ph,Ce=Be.getClearColor(),Ie=Be.getClearAlpha(),He=Ce.r,Ge=Ce.g,Pe=Ce.b;ge?(g[0]=He,g[1]=Ge,g[2]=Pe,g[3]=Ie,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=He,y[1]=Ge,y[2]=Pe,y[3]=Ie,I.clearBufferiv(I.COLOR,0,y))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),be.dispose(),Ke.dispose(),Me.dispose(),M.dispose(),k.dispose(),Z.dispose(),dt.dispose(),U.dispose(),Re.dispose(),q.dispose(),q.removeEventListener("sessionstart",Iu),q.removeEventListener("sessionend",Pu),Oi.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=Fe.autoReset,O=Se.enabled,z=Se.autoUpdate,V=Se.needsUpdate,F=Se.type;pe(),Fe.autoReset=S,Se.enabled=O,Se.autoUpdate=z,Se.needsUpdate=V,Se.type=F}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){let O=S.target;O.removeEventListener("dispose",Ve),St(O)}function St(S){kt(S),Me.remove(S)}function kt(S){let O=Me.get(S).programs;O!==void 0&&(O.forEach(function(z){Re.releaseProgram(z)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,z,V,F,ce){O===null&&(O=Te);let ge=F.isMesh&&F.matrixWorld.determinant()<0,Ce=Hp(S,O,z,V,F);he.setMaterial(V,ge);let Ie=z.index,He=1;if(V.wireframe===!0){if(Ie=ee.getWireframeAttribute(z),Ie===void 0)return;He=2}let Ge=z.drawRange,Pe=z.attributes.position,Qe=Ge.start*He,pt=(Ge.start+Ge.count)*He;ce!==null&&(Qe=Math.max(Qe,ce.start*He),pt=Math.min(pt,(ce.start+ce.count)*He)),Ie!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Ie.count)):Pe!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Pe.count));let mt=pt-Qe;if(mt<0||mt===1/0)return;dt.setup(F,V,Ce,z,Ie);let Jt,st=Ee;if(Ie!==null&&(Jt=K.get(Ie),st=je,st.setIndex(Jt)),F.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*Q()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(F.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),he.setLineWidth(Le*Q()),F.isLineSegments?st.setMode(I.LINES):F.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else F.isPoints?st.setMode(I.POINTS):F.isSprite&&st.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Le=F._multiDrawStarts,Wn=F._multiDrawCounts,rt=F._multiDrawCount,Sn=Ie?K.get(Ie).bytesPerElement:1,ss=Me.get(V).currentProgram.getUniforms();for(let sn=0;sn<rt;sn++)ss.setValue(I,"_gl_DrawID",sn),st.render(Le[sn]/Sn,Wn[sn])}else if(F.isInstancedMesh)st.renderInstances(Qe,mt,F.count);else if(z.isInstancedBufferGeometry){let Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wn=Math.min(z.instanceCount,Le);st.renderInstances(Qe,mt,Wn)}else st.render(Qe,mt)};function at(S,O,z){S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,oo(S,O,z),S.side=Fn,S.needsUpdate=!0,oo(S,O,z),S.side=Kt):oo(S,O,z)}this.compile=function(S,O,z=null){z===null&&(z=S),p=Ke.get(z),p.init(O),_.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==z&&S.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ce=F.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let Ce=ce[ge];at(Ce,z,F),V.add(Ce)}else at(ce,z,F),V.add(ce)}),_.pop(),p=null,V},this.compileAsync=function(S,O,z=null){let V=this.compile(S,O,z);return new Promise(F=>{function ce(){if(V.forEach(function(ge){Me.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){F(S);return}setTimeout(ce,10)}te.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let wn=null;function Gn(S){wn&&wn(S)}function Iu(){Oi.stop()}function Pu(){Oi.start()}let Oi=new bd;Oi.setAnimationLoop(Gn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(S){wn=S,q.setAnimationLoop(S),S===null?Oi.stop():Oi.start()},q.addEventListener("sessionstart",Iu),q.addEventListener("sessionend",Pu),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,T),p=Ke.get(S,_.length),p.init(O),_.push(p),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(De),we=this.localClippingEnabled,se=re.init(this.clippingPlanes,we),m=be.get(S,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let ce=x.xr.getDepthSensingMesh();ce!==null&&ac(ce,O,-1/0,x.sortObjects)}ac(S,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,ue),Y=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Y&&Be.addToRenderList(m,S),this.info.render.frame++,se===!0&&re.beginShadows();let z=p.state.shadowsArray;Se.render(z,S,O),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ce=O.cameras;if(F.length>0)for(let ge=0,Ce=ce.length;ge<Ce;ge++){let Ie=ce[ge];Du(V,F,S,Ie)}Y&&Be.render(S);for(let ge=0,Ce=ce.length;ge<Ce;ge++){let Ie=ce[ge];Lu(m,S,Ie,Ie.viewport)}}else F.length>0&&Du(V,F,S,O),Y&&Be.render(S),Lu(m,S,O);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(x,S,O),dt.resetDefaultState(),w=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],se===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ac(S,O,z,V){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){V&&ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);let ge=Z.update(S),Ce=S.material;Ce.visible&&m.push(S,ge,Ce,z,ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let ge=Z.update(S),Ce=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ne.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ne.copy(ge.boundingSphere.center)),ne.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(Ce)){let Ie=ge.groups;for(let He=0,Ge=Ie.length;He<Ge;He++){let Pe=Ie[He],Qe=Ce[Pe.materialIndex];Qe&&Qe.visible&&m.push(S,ge,Qe,z,ne.z,Pe)}}else Ce.visible&&m.push(S,ge,Ce,z,ne.z,null)}}let ce=S.children;for(let ge=0,Ce=ce.length;ge<Ce;ge++)ac(ce[ge],O,z,V)}function Lu(S,O,z,V){let F=S.opaque,ce=S.transmissive,ge=S.transparent;p.setupLightsView(z),se===!0&&re.setGlobalState(x.clippingPlanes,z),V&&he.viewport(L.copy(V)),F.length>0&&ro(F,O,z),ce.length>0&&ro(ce,O,z),ge.length>0&&ro(ge,O,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Du(S,O,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new In(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Xr:ni,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ce=p.state.transmissionRenderTarget[V.id],ge=V.viewport||L;ce.setSize(ge.z,ge.w);let Ce=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(N),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Y&&Be.render(z);let Ie=x.toneMapping;x.toneMapping=Si;let He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),se===!0&&re.setGlobalState(x.clippingPlanes,V),ro(S,z,V),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Pe=0,Qe=O.length;Pe<Qe;Pe++){let pt=O[Pe],mt=pt.object,Jt=pt.geometry,st=pt.material,Le=pt.group;if(st.side===Kt&&mt.layers.test(V.layers)){let Wn=st.side;st.side=Dt,st.needsUpdate=!0,Uu(mt,z,V,Jt,st,Le),st.side=Wn,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ce),x.setClearColor(N,W),He!==void 0&&(V.viewport=He),x.toneMapping=Ie}function ro(S,O,z){let V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ce=S.length;F<ce;F++){let ge=S[F],Ce=ge.object,Ie=ge.geometry,He=V===null?ge.material:V,Ge=ge.group;Ce.layers.test(z.layers)&&Uu(Ce,O,z,Ie,He,Ge)}}function Uu(S,O,z,V,F,ce){S.onBeforeRender(x,O,z,V,F,ce),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,O,z,V,S,ce),F.transparent===!0&&F.side===Kt&&F.forceSinglePass===!1?(F.side=Dt,F.needsUpdate=!0,x.renderBufferDirect(z,O,V,F,S,ce),F.side=Fn,F.needsUpdate=!0,x.renderBufferDirect(z,O,V,F,S,ce),F.side=Kt):x.renderBufferDirect(z,O,V,F,S,ce),S.onAfterRender(x,O,z,V,F,ce)}function oo(S,O,z){O.isScene!==!0&&(O=Te);let V=Me.get(S),F=p.state.lights,ce=p.state.shadowsArray,ge=F.state.version,Ce=Re.getParameters(S,F.state,ce,O,z),Ie=Re.getProgramCacheKey(Ce),He=V.programs;V.environment=S.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(S.isMeshStandardMaterial?k:M).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",Ve),He=new Map,V.programs=He);let Ge=He.get(Ie);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===ge)return Ou(S,Ce),Ge}else Ce.uniforms=Re.getUniforms(S),S.onBeforeCompile(Ce,x),Ge=Re.acquireProgram(Ce,Ie),He.set(Ie,Ge),V.uniforms=Ce.uniforms;let Pe=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=re.uniform),Ou(S,Ce),V.needsLights=Vp(S),V.lightsStateVersion=ge,V.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function Nu(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Rs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ou(S,O){let z=Me.get(S);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Hp(S,O,z,V,F){O.isScene!==!0&&(O=Te),A.resetTextureUnits();let ce=O.fog,ge=V.isMeshStandardMaterial?O.environment:null,Ce=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wt,Ie=(V.isMeshStandardMaterial?k:M).get(V.envMap||ge),He=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,pt=!!z.morphAttributes.color,mt=Si;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=x.toneMapping);let Jt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=Jt!==void 0?Jt.length:0,Le=Me.get(V),Wn=p.state.lights;if(se===!0&&(we===!0||S!==b)){let fn=S===b&&V.id===w;re.setState(V,S,fn)}let rt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Wn.state.version||Le.outputColorSpace!==Ce||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==Ie||V.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==Ge||Le.morphTargets!==Pe||Le.morphNormals!==Qe||Le.morphColors!==pt||Le.toneMapping!==mt||Le.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Le.__version=V.version);let Sn=Le.currentProgram;rt===!0&&(Sn=oo(V,O,F));let ss=!1,sn=!1,fr=!1,gt=Sn.getUniforms(),Un=Le.uniforms;if(he.useProgram(Sn.program)&&(ss=!0,sn=!0,fr=!0),V.id!==w&&(w=V.id,sn=!0),ss||b!==S){he.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),$m(le),Km(le),gt.setValue(I,"projectionMatrix",le)):gt.setValue(I,"projectionMatrix",S.projectionMatrix),gt.setValue(I,"viewMatrix",S.matrixWorldInverse);let di=gt.map.cameraPosition;di!==void 0&&di.setValue(I,X.setFromMatrixPosition(S.matrixWorld)),ye.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,sn=!0,fr=!0)}if(F.isSkinnedMesh){gt.setOptional(I,F,"bindMatrix"),gt.setOptional(I,F,"bindMatrixInverse");let fn=F.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),gt.setValue(I,"boneTexture",fn.boneTexture,A))}F.isBatchedMesh&&(gt.setOptional(I,F,"batchingTexture"),gt.setValue(I,"batchingTexture",F._matricesTexture,A),gt.setOptional(I,F,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",F._indirectTexture,A),gt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",F._colorsTexture,A));let dr=z.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&ke.update(F,z,Sn),(sn||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,gt.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Un.envMap.value=Ie,Un.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Un.envMapIntensity.value=O.environmentIntensity),sn&&(gt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&zp(Un,fr),ce&&V.fog===!0&&de.refreshFogUniforms(Un,ce),de.refreshMaterialUniforms(Un,V,G,J,p.state.transmissionRenderTarget[S.id]),Rs.upload(I,Nu(Le),Un,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Rs.upload(I,Nu(Le),Un,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(I,"center",F.center),gt.setValue(I,"modelViewMatrix",F.modelViewMatrix),gt.setValue(I,"normalMatrix",F.normalMatrix),gt.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let fn=V.uniformsGroups;for(let di=0,pi=fn.length;di<pi;di++){let Fu=fn[di];U.update(Fu,Sn),U.bind(Fu,Sn)}}return Sn}function zp(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Vp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,O,z){Me.get(S.texture).__webglTexture=O,Me.get(S.depthTexture).__webglTexture=z;let V=Me.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){let z=Me.get(S);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,z=0){T=S,R=O,C=z;let V=!0,F=null,ce=!1,ge=!1;if(S){let Ie=Me.get(S);if(Ie.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Ie.__hasExternalTextures)A.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Pe=S.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&Me.has(Pe)&&(S.width!==Pe.image.width||S.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);let Ge=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?F=Ge[O][z]:F=Ge[O],ce=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?F=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?F=Ge[z]:F=Ge,L.copy(S.viewport),H.copy(S.scissor),D=S.scissorTest}else L.copy(_e).multiplyScalar(G).floor(),H.copy(Ue).multiplyScalar(G).floor(),D=Ye;if(he.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&he.drawBuffers(S,F),he.viewport(L),he.scissor(H),he.setScissorTest(D),ce){let Ie=Me.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,z)}else if(ge){let Ie=Me.get(S.texture),He=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,z||0,He)}w=-1},this.readRenderTargetPixels=function(S,O,z,V,F,ce,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){he.bindFramebuffer(I.FRAMEBUFFER,Ce);try{let Ie=S.texture,He=Ie.format,Ge=Ie.type;if(!ye.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-V&&z>=0&&z<=S.height-F&&I.readPixels(O,z,V,F,Xe.convert(He),Xe.convert(Ge),ce)}finally{let Ie=T!==null?Me.get(T).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,O,z,V,F,ce,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ce=Ce[ge]),Ce){let Ie=S.texture,He=Ie.format,Ge=Ie.type;if(!ye.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-V&&z>=0&&z<=S.height-F){he.bindFramebuffer(I.FRAMEBUFFER,Ce);let Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(O,z,V,F,Xe.convert(He),Xe.convert(Ge),0);let Qe=T!==null?Me.get(T).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Qe);let pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ym(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Pe),I.deleteSync(pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,z=0){S.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);let V=Math.pow(2,-z),F=Math.floor(S.image.width*V),ce=Math.floor(S.image.height*V),ge=O!==null?O.x:0,Ce=O!==null?O.y:0;A.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ge,Ce,F,ce),he.unbindTexture()},this.copyTextureToTexture=function(S,O,z=null,V=null,F=0){S.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let ce,ge,Ce,Ie,He,Ge,Pe,Qe,pt,mt=S.isCompressedTexture?S.mipmaps[F]:S.image;z!==null?(ce=z.max.x-z.min.x,ge=z.max.y-z.min.y,Ce=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,He=z.min.y,Ge=z.isBox3?z.min.z:0):(ce=mt.width,ge=mt.height,Ce=mt.depth||1,Ie=0,He=0,Ge=0),V!==null?(Pe=V.x,Qe=V.y,pt=V.z):(Pe=0,Qe=0,pt=0);let Jt=Xe.convert(O.format),st=Xe.convert(O.type),Le;O.isData3DTexture?(A.setTexture3D(O,0),Le=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Le=I.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Wn=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),ss=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);let fr=S.isDataArrayTexture||S.isData3DTexture,gt=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Un=Me.get(S),dr=Me.get(O),fn=Me.get(Un.__renderTarget),di=Me.get(dr.__renderTarget);he.bindFramebuffer(I.READ_FRAMEBUFFER,fn.__webglFramebuffer),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let pi=0;pi<Ce;pi++)fr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,F,Ge+pi),S.isDepthTexture?(gt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,F,pt+pi),I.blitFramebuffer(Ie,He,ce,ge,Pe,Qe,ce,ge,I.DEPTH_BUFFER_BIT,I.NEAREST)):gt?I.copyTexSubImage3D(Le,F,Pe,Qe,pt+pi,Ie,He,ce,ge):I.copyTexSubImage2D(Le,F,Pe,Qe,pt+pi,Ie,He,ce,ge);he.bindFramebuffer(I.READ_FRAMEBUFFER,null),he.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Le,F,Pe,Qe,pt,ce,ge,Ce,Jt,st,mt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,F,Pe,Qe,pt,ce,ge,Ce,Jt,mt.data):I.texSubImage3D(Le,F,Pe,Qe,pt,ce,ge,Ce,Jt,st,mt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Pe,Qe,ce,ge,Jt,st,mt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Pe,Qe,mt.width,mt.height,Jt,mt.data):I.texSubImage2D(I.TEXTURE_2D,F,Pe,Qe,ce,ge,Jt,st,mt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Wn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ss),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),F===0&&O.generateMipmaps&&I.generateMipmap(Le),he.unbindTexture()},this.copyTextureToTexture3D=function(S,O,z=null,V=null,F=0){return S.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,S=arguments[2],O=arguments[3],F=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,z,V,F)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,he.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Ei=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new E,Or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Of=new E,Ff=new it,Bf=new it,G_=new E,kf=new oe,Ro=new E,Nc=new cn,Hf=new oe,Oc=new Fs,ta=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zu,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ro),this.boundingSphere.expandByPoint(Ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(i),e.ray.intersectsSphere(Nc)!==!1&&(Hf.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(Hf),!(this.boundingBox!==null&&Oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ym?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ff.fromBufferAttribute(i.attributes.skinIndex,e),Bf.fromBufferAttribute(i.attributes.skinWeight,e),Of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Bf.getComponent(r);if(o!==0){let a=Ff.getComponent(r);kf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(G_.copy(Of).applyMatrix4(kf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fr=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},na=class extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Vt,h=Vt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zf=new oe,W_=new oe,ia=class s{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:W_;zf.multiplyMatrices(a,t[r]),zf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new na(t,e,e,pn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fr),this.bones.push(o),this.boneInverses.push(new oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},$i=class extends et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_s=new oe,Vf=new oe,Co=[],Gf=new Qt,X_=new oe,xr=new Ne,_r=new cn,sa=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,X_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),Gf.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(Gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),_r.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_s),Vf.multiplyMatrices(n,_s),xr.matrixWorld=Vf,xr.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){let c=Co[o];c.instanceId=r,c.object=this,t.push(c)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(i*this.count),i,this.count,mh,Cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ki=class extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ra=new E,oa=new E,Wf=new oe,vr=new Fs,Io=new cn,Fc=new E,Xf=new E,zs=class extends bt{constructor(e=new ot,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ra.fromBufferAttribute(t,i-1),oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ra.distanceTo(oa);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Wf.copy(i).invert(),vr.copy(e.ray).applyMatrix4(Wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=h.getX(y),v=h.getX(y+1),_=Po(this,e,vr,c,p,v);_&&t.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),p=Po(this,e,vr,c,y,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=l){let p=Po(this,e,vr,c,y,y+1);p&&t.push(p)}if(this.isLineLoop){let y=Po(this,e,vr,c,g-1,d);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Po(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(ra.fromBufferAttribute(o,i),oa.fromBufferAttribute(o,r),t.distanceSqToSegment(ra,oa,Fc,Xf)>n)return;Fc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fc);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var qf=new E,Yf=new E,Vs=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qf.fromBufferAttribute(t,i),Yf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},aa=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},hn=class extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$f=new oe,Gl=new Fs,Lo=new cn,Do=new E,yn=class extends bt{constructor(e=new ot,t=new hn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(i),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;$f.copy(i).invert(),Gl.copy(e.ray).applyMatrix4($f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=l.getX(g);Do.fromBufferAttribute(u,m),Kf(Do,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Do.fromBufferAttribute(u,g),Kf(Do,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kf(s,e,t,n,i,r,o){let a=Gl.distanceSqToPoint(s);if(a<t){let c=new E;Gl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gt=class extends Ut{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ie:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],r=[],o=[],a=new E,c=new oe;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ct(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ct(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Br=class extends xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wl=class extends Br{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Uo=new E,Bc=new Sh,kc=new Sh,Hc=new Sh,si=class extends xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Uo.subVectors(i[0],i[1]).add(i[0]),l=Uo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,m),kc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,m),Hc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),kc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Hc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Bc.calc(c),kc.calc(c),Hc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function q_(s,e){let t=1-s;return t*t*e}function Y_(s,e){return 2*(1-s)*s*e}function $_(s,e){return s*s*e}function Rr(s,e,t,n){return q_(s,e)+Y_(s,t)+$_(s,n)}function K_(s,e){let t=1-s;return t*t*t*e}function Z_(s,e){let t=1-s;return 3*t*t*s*e}function J_(s,e){return 3*(1-s)*s*s*e}function j_(s,e){return s*s*s*e}function Cr(s,e,t,n,i){return K_(s,e)+Z_(s,t)+J_(s,n)+j_(s,i)}var ca=class extends xn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xl=class extends xn{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y),Cr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends xn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends xn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends xn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends xn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y),Rr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Zf(a,c.x,l.x,h.x,u.x),Zf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},da=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:si,CubicBezierCurve:ca,CubicBezierCurve3:Xl,EllipseCurve:Br,LineCurve:la,LineCurve3:ql,QuadraticBezierCurve:ha,QuadraticBezierCurve3:ua,SplineCurve:fa}),Yl=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new da[i.type]().fromJSON(i))}return this}},kr=class extends Yl{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ha(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ca(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Br(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ti=class s extends ot{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new E,f=new ie,d=new E,g=new E,y=new E,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let v=0;v<=t;v++){let _=n+v*h*i,x=Math.sin(_),P=Math.cos(_);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*x,u.y=e[R].y,u.z=e[R].x*P,o.push(u.x,u.y,u.z),f.x=v/t,f.y=R/(e.length-1),a.push(f.x,f.y);let C=c[3*R+0]*x,T=c[3*R+1],w=c[3*R+0]*P;l.push(C,T,w)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let x=_+v*e.length,P=x,R=x+e.length,C=x+e.length+1,T=x+1;r.push(P,R,T),r.push(C,T,R)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Gs=class s extends Ti{constructor(e=1,t=1,n=4,i=8){let r=new kr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},pa=class s extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new E,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nt=class s extends ot{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function v(){let x=new E,P=new E,R=0,C=(t-e)/n;for(let T=0;T<=r;T++){let w=[],b=T/r,L=b*(t-e)+e;for(let H=0;H<=i;H++){let D=H/i,N=D*c+a,W=Math.sin(N),B=Math.cos(N);P.x=L*W,P.y=-b*n+m,P.z=L*B,u.push(P.x,P.y,P.z),x.set(W,C,B).normalize(),f.push(x.x,x.y,x.z),d.push(D,1-b),w.push(g++)}y.push(w)}for(let T=0;T<i;T++)for(let w=0;w<r;w++){let b=y[w][T],L=y[w+1][T],H=y[w+1][T+1],D=y[w][T+1];(e>0||w!==0)&&(h.push(b,L,D),R+=3),(t>0||w!==r-1)&&(h.push(L,H,D),R+=3)}l.addGroup(p,R,0),p+=R}function _(x){let P=g,R=new ie,C=new E,T=0,w=x===!0?e:t,b=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let L=g;for(let H=0;H<=i;H++){let N=H/i*c+a,W=Math.cos(N),B=Math.sin(N);C.x=w*B,C.y=m*b,C.z=w*W,u.push(C.x,C.y,C.z),f.push(0,b,0),R.x=W*.5+.5,R.y=B*.5*b+.5,d.push(R.x,R.y),g++}for(let H=0;H<i;H++){let D=P+H,N=L+H;x===!0?h.push(N,N+1,D):h.push(N+1,N,D),T+=3}l.addGroup(p,T,x===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bn=class s extends nt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kn=class extends kr{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new kr().fromJSON(i))}return this}},Q_={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Ad(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=sv(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Hr(r,o,t,a,c,d,0),o}};function Ad(s,e,t,n,i){let r,o;if(i===mv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Jf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Jf(r,s[r],s[r+1],o);return o&&Ea(o,o.next)&&(Vr(o),o=o.next),o}function Zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||vt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&lv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?tv(s,n,i,r):ev(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Vr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=nv(Zi(s),e,t),Hr(s,e,t,n,i,r,2)):o===2&&iv(s,e,t,n,i,r):Hr(Zi(s),e,t,n,i,r,1);break}}}function ev(s){let e=s.prev,t=s,n=s.next;if(vt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ss(i,a,r,c,o,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(vt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=$l(d,g,e,t,n),v=$l(y,m,e,t,n),_=s.prevZ,x=s.nextZ;for(;_&&_.z>=p&&x&&x.z<=v;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ss(a,h,c,u,l,f,_.x,_.y)&&vt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ss(a,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ss(a,h,c,u,l,f,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ss(a,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function nv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Ea(i,r)&&Rd(i,n,n.next,r)&&zr(i,r)&&zr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return Zi(n)}function iv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fv(o,a)){let c=Cd(o,a);o=Zi(o,o.next),c=Zi(c,c.next),Hr(o,e,t,n,i,r,0),Hr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sv(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Ad(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(uv(l));for(i.sort(rv),r=0;r<i.length;r++)t=ov(i[r],t);return t}function rv(s,e){return s.x-e.x}function ov(s,e){let t=av(s,e);if(!t)return e;let n=Cd(t,s);return Zi(n,n.next),Zi(t,t.next)}function av(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ss(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),zr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&cv(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function cv(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function lv(s,e,t,n){let i=s;do i.z===0&&(i.z=$l(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hv(i)}function hv(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function $l(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ss(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function fv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!dv(s,e)&&(zr(s,e)&&zr(e,s)&&pv(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||Ea(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ea(s,e){return s.x===e.x&&s.y===e.y}function Rd(s,e,t,n){let i=Oo(vt(s,e,t)),r=Oo(vt(s,e,n)),o=Oo(vt(t,n,s)),a=Oo(vt(t,n,e));return!!(i!==r&&o!==a||i===0&&No(s,t,e)||r===0&&No(s,n,e)||o===0&&No(t,s,n)||a===0&&No(t,e,n))}function No(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Oo(s){return s>0?1:s<0?-1:0}function dv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Rd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function zr(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function pv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Cd(s,e){let t=new Kl(s.i,s.x,s.y),n=new Kl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jf(s,e,t,n){let i=new Kl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ir=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];jf(e),Qf(n,e);let o=e.length;t.forEach(jf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Qf(n,t[c]);let a=Q_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ws=class s extends ot{constructor(e=new kn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(i,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:gv,_,x=!1,P,R,C,T;p&&(_=p.getSpacedPoints(h),x=!0,f=!1,P=p.computeFrenetFrames(h,!1),R=new E,C=new E,T=new E),f||(m=0,d=0,g=0,y=0);let w=a.extractPoints(l),b=w.shape,L=w.holes;if(!Ir.isClockWise(b)){b=b.reverse();for(let Y=0,Q=L.length;Y<Q;Y++){let I=L[Y];Ir.isClockWise(I)&&(L[Y]=I.reverse())}}let D=Ir.triangulateShape(b,L),N=b;for(let Y=0,Q=L.length;Y<Q;Y++){let I=L[Y];b=b.concat(I)}function W(Y,Q,I){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(Q,I)}let B=b.length,J=D.length;function G(Y,Q,I){let ve,te,ye,he=Y.x-Q.x,Fe=Y.y-Q.y,Me=I.x-Y.x,A=I.y-Y.y,M=he*he+Fe*Fe,k=he*A-Fe*Me;if(Math.abs(k)>Number.EPSILON){let K=Math.sqrt(M),ee=Math.sqrt(Me*Me+A*A),Z=Q.x-Fe/K,Re=Q.y+he/K,de=I.x-A/ee,be=I.y+Me/ee,Ke=((de-Z)*A-(be-Re)*Me)/(he*A-Fe*Me);ve=Z+he*Ke-Y.x,te=Re+Fe*Ke-Y.y;let re=ve*ve+te*te;if(re<=2)return new ie(ve,te);ye=Math.sqrt(re/2)}else{let K=!1;he>Number.EPSILON?Me>Number.EPSILON&&(K=!0):he<-Number.EPSILON?Me<-Number.EPSILON&&(K=!0):Math.sign(Fe)===Math.sign(A)&&(K=!0),K?(ve=-Fe,te=he,ye=Math.sqrt(M)):(ve=he,te=Fe,ye=Math.sqrt(M/2))}return new ie(ve/ye,te/ye)}let ae=[];for(let Y=0,Q=N.length,I=Q-1,ve=Y+1;Y<Q;Y++,I++,ve++)I===Q&&(I=0),ve===Q&&(ve=0),ae[Y]=G(N[Y],N[I],N[ve]);let ue=[],_e,Ue=ae.concat();for(let Y=0,Q=L.length;Y<Q;Y++){let I=L[Y];_e=[];for(let ve=0,te=I.length,ye=te-1,he=ve+1;ve<te;ve++,ye++,he++)ye===te&&(ye=0),he===te&&(he=0),_e[ve]=G(I[ve],I[ye],I[he]);ue.push(_e),Ue=Ue.concat(_e)}for(let Y=0;Y<m;Y++){let Q=Y/m,I=d*Math.cos(Q*Math.PI/2),ve=g*Math.sin(Q*Math.PI/2)+y;for(let te=0,ye=N.length;te<ye;te++){let he=W(N[te],ae[te],ve);le(he.x,he.y,-I)}for(let te=0,ye=L.length;te<ye;te++){let he=L[te];_e=ue[te];for(let Fe=0,Me=he.length;Fe<Me;Fe++){let A=W(he[Fe],_e[Fe],ve);le(A.x,A.y,-I)}}}let Ye=g+y;for(let Y=0;Y<B;Y++){let Q=f?W(b[Y],Ue[Y],Ye):b[Y];x?(C.copy(P.normals[0]).multiplyScalar(Q.x),R.copy(P.binormals[0]).multiplyScalar(Q.y),T.copy(_[0]).add(C).add(R),le(T.x,T.y,T.z)):le(Q.x,Q.y,0)}for(let Y=1;Y<=h;Y++)for(let Q=0;Q<B;Q++){let I=f?W(b[Q],Ue[Q],Ye):b[Q];x?(C.copy(P.normals[Y]).multiplyScalar(I.x),R.copy(P.binormals[Y]).multiplyScalar(I.y),T.copy(_[Y]).add(C).add(R),le(T.x,T.y,T.z)):le(I.x,I.y,u/h*Y)}for(let Y=m-1;Y>=0;Y--){let Q=Y/m,I=d*Math.cos(Q*Math.PI/2),ve=g*Math.sin(Q*Math.PI/2)+y;for(let te=0,ye=N.length;te<ye;te++){let he=W(N[te],ae[te],ve);le(he.x,he.y,u+I)}for(let te=0,ye=L.length;te<ye;te++){let he=L[te];_e=ue[te];for(let Fe=0,Me=he.length;Fe<Me;Fe++){let A=W(he[Fe],_e[Fe],ve);x?le(A.x,A.y+_[h-1].y,_[h-1].x+I):le(A.x,A.y,u+I)}}}$(),se();function $(){let Y=i.length/3;if(f){let Q=0,I=B*Q;for(let ve=0;ve<J;ve++){let te=D[ve];De(te[2]+I,te[1]+I,te[0]+I)}Q=h+m*2,I=B*Q;for(let ve=0;ve<J;ve++){let te=D[ve];De(te[0]+I,te[1]+I,te[2]+I)}}else{for(let Q=0;Q<J;Q++){let I=D[Q];De(I[2],I[1],I[0])}for(let Q=0;Q<J;Q++){let I=D[Q];De(I[0]+B*h,I[1]+B*h,I[2]+B*h)}}n.addGroup(Y,i.length/3-Y,0)}function se(){let Y=i.length/3,Q=0;we(N,Q),Q+=N.length;for(let I=0,ve=L.length;I<ve;I++){let te=L[I];we(te,Q),Q+=te.length}n.addGroup(Y,i.length/3-Y,1)}function we(Y,Q){let I=Y.length;for(;--I>=0;){let ve=I,te=I-1;te<0&&(te=Y.length-1);for(let ye=0,he=h+m*2;ye<he;ye++){let Fe=B*ye,Me=B*(ye+1),A=Q+ve+Fe,M=Q+te+Fe,k=Q+te+Me,K=Q+ve+Me;X(A,M,k,K)}}}function le(Y,Q,I){c.push(Y),c.push(Q),c.push(I)}function De(Y,Q,I){ne(Y),ne(Q),ne(I);let ve=i.length/3,te=v.generateTopUV(n,i,ve-3,ve-2,ve-1);Te(te[0]),Te(te[1]),Te(te[2])}function X(Y,Q,I,ve){ne(Y),ne(Q),ne(ve),ne(Q),ne(I),ne(ve);let te=i.length/3,ye=v.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Te(ye[0]),Te(ye[1]),Te(ye[3]),Te(ye[1]),Te(ye[2]),Te(ye[3])}function ne(Y){i.push(c[Y*3+0]),i.push(c[Y*3+1]),i.push(c[Y*3+2])}function Te(Y){r.push(Y.x),r.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new da[i.type]().fromJSON(i)),new s(n,e.options)}},gv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(f,1-g),new ie(y,1-p)]:[new ie(a,1-c),new ie(h,1-u),new ie(d,1-g),new ie(m,1-p)]}};function yv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yt=class s extends ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new E,f=new E,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(R+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],x=h[p][v],P=h[p+1][v],R=h[p+1][v+1];(p!==0||o>0)&&d.push(_,x,R),(p!==n-1||c<Math.PI)&&d.push(x,P,R)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(y,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wt=class s extends ot{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new E,u=new E,f=new E;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let y=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let y=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(y,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ai=class s extends ot{constructor(e=new ua(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new E,c=new E,l=new ie,h=new E,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let x=o.normals[_],P=o.binormals[_];for(let R=0;R<=i;R++){let C=R/i*Math.PI*2,T=Math.sin(C),w=-Math.cos(C);c.x=w*x.x+T*P.x,c.y=w*x.y+T*P.y,c.z=w*x.z+T*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){let P=(i+1)*(_-1)+(x-1),R=(i+1)*_+(x-1),C=(i+1)*_+x,T=(i+1)*(_-1)+x;g.push(P,R,T),g.push(R,C,T)}}function v(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)l.x=_/t,l.y=x/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ut=class extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends ut{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _v(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ed(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Id(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ms,endingEnd:Ms}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bs:r=e,a=2*t-n;break;case Wo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bs:o=e,c=2*n-t;break;case Wo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,v=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,_=(-1-d)*m+(1.5+d)*y+.5*g,x=d*m-d*y;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[l+P]+_*o[c+P]+x*o[u+P];return r}},ma=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Jl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&xv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ns;var Ci=class extends _n{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Us;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends _n{};ga.prototype.ValueTypeName="color";var ri=class extends _n{};ri.prototype.ValueTypeName="number";var jl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Mt.slerpFlat(r,0,o,l-a,o,l,c);return r}},oi=class extends _n{InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends _n{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Us;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends _n{};ai.prototype.ValueTypeName="vector";var Xs=class{constructor(e="",t=-1,n=[],i=Mh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=_v(c);c=ed(c,1,h),l=ed(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ri(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,y){if(d.length!==0){let m=[],p=[];Id(d,m,p,g),m.length!==0&&y.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)d[f[g].morphTargets[y]]=-1;for(let y in d){let m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){let _=f[g];m.push(_.time),p.push(_.morphTarget===y?1:0)}i.push(new ri(".morphTargetInfluence["+y+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(ai,d+".position",f,"pos",i),n(oi,d+".quaternion",f,"rot",i),n(ai,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function vv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ri;case"vector":case"vector2":case"vector3":case"vector4":return ai;case"color":return ga;case"quaternion":return oi;case"bool":case"boolean":return Ci;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=vv(s.type);if(s.times===void 0){let t=[],n=[];Id(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ql=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},bv=new Ql,ci=class{constructor(e){this.manager=e!==void 0?e:bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zn={},eh=class extends Error{constructor(e,t){super(e),this.response=t}},Gr=class extends ci{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Zn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,y=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{y+=x.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let R=0,C=h.length;R<C;R++){let T=h[R];T.onProgress&&T.onProgress(P)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new eh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{bi.add(e,l);let h=Zn[e];delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var th=class extends ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Dr("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ya=class extends ci{constructor(e){super(e)}load(e,t,n,i){let r=new Ut,o=new th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},qs=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ys=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zc=new oe,td=new E,nd=new E,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nh=class extends Wr{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xa=class extends qs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},id=new oe,Mr=new E,Vc=new E,ih=class extends Wr{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),i.makeTranslation(-Mr.x,-Mr.y,-Mr.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}},$s=class extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},sh=class extends Wr{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Li=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var _a=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}};var rh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Mt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Mt.multiplyQuaternionsFlat(e,o,e,t,e,n),Mt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Eh="\\[\\]\\.:\\/",wv=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",Sv="[^"+Eh.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",Th),Tv=/(WCOD+)?/.source.replace("WCOD",Sv),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Cv=new RegExp("^"+Ev+Tv+Av+Rv+"$"),Iv=["material","materials","bones","map"],oh=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(e){let t=Cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Iv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=oh;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ah=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Ms,endingEnd:Ms};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case _m:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Mh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===xm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===_h){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=bs,i.endingEnd=bs):(e?i.endingStart=this.zeroSlopeAtStart?bs:Ms:i.endingStart=Wo,t?i.endingEnd=this.zeroSlopeAtEnd?bs:Ms:i.endingEnd=Wo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Pv=new Float32Array(1),va=class extends ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let y=t&&t._propertyBindings[u].binding.parsedPath;g=new rh(ft.create(n,d,y),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ma(new Float32Array(2),new Float32Array(2),1,Pv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Xs.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Mh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new ah(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Xs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);var ze=60,Pn=Math.PI/180,Pd=300,Ld=5,Yr=-46,Zs=-39,Dd=[{id:"hdb",name:"Toa Payoh Heartland",icon:"\u{1F3E2}",lat:20,lon:30,spawn:[-6,3.6,0]},{id:"hawker",name:"Lau Pa Sat",icon:"\u{1F35C}",lat:4,lon:90,spawn:[0,1.5,Math.PI]},{id:"chinatown",name:"Chinatown",icon:"\u{1F3EE}",lat:18,lon:150,spawn:[-12,0,Math.PI/2]},{id:"marina",name:"Marina Bay",icon:"\u{1F981}",lat:-6,lon:210,spawn:[-12,1.5,Math.PI/2]},{id:"gardens",name:"Gardens by the Bay",icon:"\u{1F333}",lat:14,lon:270,spawn:[-2,1.5,0]},{id:"sentosa",name:"Sentosa",icon:"\u{1F3D6}\uFE0F",lat:-30,lon:330,spawn:[0,1.5,0]}];function Ud(s,e,t=new E){let n=(90-s)*Pn,i=e*Pn;return t.set(-Math.cos(i)*Math.sin(n),Math.cos(n),Math.sin(i)*Math.sin(n))}function Js(s){let e=Math.asin(xt.clamp(s.y,-1,1))/Pn,t=Math.atan2(s.z,-s.x)/Pn;return t<0&&(t+=360),[e,t]}var Lv=new E(0,1,0);function js(s,e={}){e.up=(e.up||new E).copy(s).normalize();let t=(e.north||new E).copy(Lv).addScaledVector(e.up,-e.up.y);return t.lengthSq()<1e-8&&t.set(1,0,0),e.north=t.normalize(),e.east=(e.east||new E).crossVectors(e.north,e.up),e.south=(e.south||new E).copy(e.north).negate(),e}function Nd(s,e,t,n=new E){let i=Math.acos(xt.clamp(s.dot(e),-1,1));if(i<1e-6)return n.copy(s);let r=Math.sin(i);return n.copy(s).multiplyScalar(Math.sin((1-t)*i)/r).addScaledVector(e,Math.sin(t*i)/r).normalize()}function Ta(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new ot,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=Od(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Od(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new et(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Ah(s,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===qr||e===ba){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===qr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Fd=new ut({vertexColors:!0,roughness:.82,metalness:0}),Qs={};function Dv(s){return Qs[s]||(Qs[s]=new Nt({vertexColors:!0}))}var er={};function li(s,e){return er[s]=e,e}var Rh=new Map;function Uv(s){let e=String(s);return Rh.has(e)||Rh.set(e,new ut({color:s,roughness:.8,metalness:0})),Rh.get(e)}function tr(s,e){let t=new Ne(s,Uv(e));return t.castShadow=!0,t.receiveShadow=!0,t}function Nv(s){let e=new Array(s);for(let t=0;t<s;t++)e[t]=t;return e}var Ch=new E;function Ov(s){if(Ch.setFromMatrixPosition(s),Ch.lengthSq()<1)return"c";let[e,t]=Js(Ch.normalize());return`${Math.floor((e+90)/30)}_${Math.floor(t/40)}`}var $r=class{constructor(e=!0){this.chunked=e,this.buckets=new Map}add(e,t,n,i=0,r=null,o=null){let a=e.clone();!o&&a.attributes.uv&&a.deleteAttribute("uv"),a.attributes.uv1&&a.deleteAttribute("uv1"),a.index||a.setIndex(Nv(a.attributes.position.count));let c=new Ae(t),l=a.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=c.r,h[d*3+1]=c.g,h[d*3+2]=c.b;a.setAttribute("color",new et(h,3)),a.applyMatrix4(n);let u=r?`g:${r}`:o?`m:${o}`:"base",f=`${this.chunked?Ov(n):"c"}|${u}`;return this.buckets.has(f)||this.buckets.set(f,{kind:u,list:[]}),this.buckets.get(f).list.push(a),this}build(){let e=new lt;for(let{kind:t,list:n}of this.buckets.values()){let i=t==="base"?Fd:t.startsWith("g:")?Dv(t.slice(2)):er[t.slice(2)],r=new Ne(Ta(n),i||Fd);n.forEach(a=>a.dispose());let o=!t.startsWith("g:");r.castShadow=o,r.receiveShadow=o,e.add(r)}return this.buckets.clear(),e}};function Di(s){let e=new $r(!1);return s(e),e.build()}var Fv=new en;function Oe(s,e,t,n=0,i=0,r=0){return new oe().makeRotationFromEuler(Fv.set(n,i,r)).setPosition(s,e,t)}var Kr=new E;function vn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Kr.copy(e),Kr[n]=0,Kr.normalize();let l=.5*o/(o+a),h=1-Kr.angleTo(s)/c;return Math.sign(Kr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var nr=class extends At{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new E,c=new E,l=new E(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new E,y=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=vn(g,c,"z","y",r,n),f[p+1]=1-vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-vn(g,c,"z","y",r,n),f[p+1]=1-vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-vn(g,c,"x","z",r,e),f[p+1]=vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-vn(g,c,"x","z",r,e),f[p+1]=1-vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-vn(g,c,"x","y",r,e),f[p+1]=1-vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=vn(g,c,"x","y",r,e),f[p+1]=1-vn(g,c,"y","x",r,t);break}}};var Aa=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Zh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Li.extractUrlBase(e);o=Li.resolveURL(l,this.path)}else o=Li.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Vd){try{o[$e.KHR_BINARY_GLTF]=new Jh(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new su(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Uh;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new jh(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new Qh;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new eu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Bv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dh=class{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $s(h),l.distance=u;break;case"spot":l=new xa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Uh=class{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let i=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Je))}return Promise.all(i)}},Nh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Oh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Je)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Je)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Yh=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$h=class{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kh=class{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Zh=class{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let y=new oe,m=new E,p=new Mt,v=new E(1,1,1),_=new sa(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,y.compose(m,p,v));for(let x in c)if(x==="_COLOR_0"){let P=c[x];_.instanceColor=new $i(P.array,P.itemSize,P.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);bt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Vd="glTF",Zr=12,Bd={JSON:1313821514,BIN:5130562},Jh=class{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zr,r=new DataView(e,Zr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Bd.JSON){let l=new Uint8Array(e,Zr+o,a);this.content=n.decode(l)}else if(c===Bd.BIN){let l=Zr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},jh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=nu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=nu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=ir[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let y=d.attributes[g],m=c[g];m!==void 0&&(y.normalized=m)}u(d)},a,l,Wt,f)})})}},Qh=class{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},eu=class{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}},Ra=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,y=g-l,m=-2*d+3*f,p=d-f,v=1-m,_=p-f+u;for(let x=0;x!==a;x++){let P=o[y+x+a],R=o[y+x+c]*h,C=o[g+x+a],T=o[g+x]*h;r[x]=v*P+_*R+m*C+p*T}return r}},kv=new Mt,tu=class extends Ra{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return kv.fromArray(r).normalize().toArray(r),r}},Mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:Vt,9729:jt,9984:uh,9985:Sr,9986:vs,9987:On},Hd={33071:Qn,33648:Pr,10497:an},Ih={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hv={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Us},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),s.DefaultMaterial}function Ji(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Gv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wv(s){let e,t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lh(t.attributes):e=s.indices+":"+Lh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Lh(s.targets[n]);return e}function Lh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function iu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qv=new oe,su=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ya(this.options.manager):this.textureLoader=new _a(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ji(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Li.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ih[i.type],a=ir[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new et(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ih[i.type],l=ir[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,y,m;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(v);_||(y=new l(a,p*d,i.count*d/h),_=new Nr(y,d/h),t.cache.add(v,_)),m=new Or(_,c,f%d/h,g)}else a===null?y=new l(i.count*c):y=new l(a,f,i.count*c),m=new et(y,c,g);if(i.sparse!==void 0){let p=Ih.SCALAR,v=ir[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,P=new v(o[1],_,i.sparse.count*p),R=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,T=P.length;C<T;C++){let w=P[C];if(m.setX(w,R[C*c]),c>=2&&m.setY(w,R[C*c+1]),c>=3&&m.setZ(w,R[C*c+2]),c>=4&&m.setW(w,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=kd[f.magFilter]||jt,h.minFilter=kd[f.minFilter]||On,h.wrapS=Hd[f.wrapS]||an,h.wrapT=Hd[f.wrapT]||an,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Ut(y);m.needsUpdate=!0,f(m)}),t.load(Li.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),hi(u,o),u.userData.mimeType=o.mimeType||Xv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new hn,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ki,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ut}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){let u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Je)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Kt);let h=r.alphaMode||Ph.OPAQUE;if(h===Ph.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ph.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Nt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt){let u=r.emissiveFactor;a.emissive=new Ae().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==Nt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Je)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ji(i,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return zd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Wv(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=zd(new ot,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?zv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let y=h[d],m=o[d],p,v=l[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ta(y,v):new Ne(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Ah(p.geometry,ba):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Ah(p.geometry,qr));else if(m.mode===Mn.LINES)p=new Vs(y,v);else if(m.mode===Mn.LINE_STRIP)p=new zs(y,v);else if(m.mode===Mn.LINE_LOOP)p=new aa(y,v);else if(m.mode===Mn.POINTS)p=new yn(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Gv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),m.extensions&&Ji(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ji(i,u[0],r),u[0];let f=new lt;r.extensions&&Ji(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Et(xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ks(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new oe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ia(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],y=d.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],y=u[3],m=u[4],p=[];for(let v=0,_=f.length;v<_;v++){let x=f[v],P=d[v],R=g[v],C=y[v],T=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let w=n._createAnimationTracks(x,P,R,C,T);if(w)for(let b=0;b<w.length;b++)p.push(w[b])}return new Xs(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,qv)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Fr:l.length>1?h=new lt:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),hi(h,r),r.extensions&&Ji(n,h,r),r.matrix!==void 0){let u=new oe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new lt;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Ji(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof ln||f instanceof Ut)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Ui[r.path]){case Ui.weights:l=ri;break;case Ui.rotation:l=oi;break;case Ui.position:case Ui.scale:l=ai;break;default:switch(n.itemSize){case 1:l=ri;break;case 2:case 3:default:l=ai;break}break}let h=i.interpolation!==void 0?Hv[i.interpolation]:Ns,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Ui[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=iu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof oi?tu:Ra;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yv(s,e,t){let n=e.attributes,i=new Qt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){let h=iu(ir[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new E,c=new E;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let y=iu(ir[f.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new cn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=nu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),hi(s,e),Yv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vv(s,e.targets,t):s})}function ru(s){let e=new Map,t=new Map,n=s.clone();return Gd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Gd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Gd(s.children[n],e.children[n],t)}var Wd={car:["ambulance","delivery","garbage-truck","hatchback-sports","police","sedan","sedan-sports","suv","taxi","van"],"city-commercial":["building-a","building-b","building-c","building-d","building-e","building-f","building-g","building-h","building-i","building-j","building-k","building-l","building-m","building-n","building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e","detail-awning","detail-awning-wide","detail-overhang","detail-overhang-wide","detail-parasol-a","detail-parasol-b","low-detail-building-a","low-detail-building-b","low-detail-building-c","low-detail-building-d","low-detail-building-e","low-detail-building-f","low-detail-building-g","low-detail-building-h","low-detail-building-i","low-detail-building-j","low-detail-building-k","low-detail-building-l","low-detail-building-m","low-detail-building-n","low-detail-building-wide-a","low-detail-building-wide-b"],"city-roads":["construction-barrier","construction-cone","dumpster","light-curved","light-curved-double","light-square","road-sign-street","road-sign-warning","sign-highway","traffic-light"],"city-suburban":["fence-low","path-stones-short","planter","tree-large","tree-small"],food:["bag","banana","barrel","bowl","bowl-broth","bowl-soup","bread","cake","chinese","chopstick","cocktail","coconut","coconut-half","cooking-spatula","cup-coffee","cup-saucer","cup-tea","cutting-board-japanese","dim-sum","egg","egg-cooked","egg-half","fish","frappe","frying-pan","glass","ice-cream","ice-cream-cup","lemon","loaf","meat-ribs","mug","mussel","orange","pancakes","pineapple","plate","plate-dinner","popsicle","pot","pot-stew","rice-ball","skewer","skewer-vegetables","soda-bottle","soda-can","soy","steamer","watermelon"],furniture:["bench","benchCushion","books","cardboardBoxClosed","cardboardBoxOpen","ceilingFan","chair","chairRounded","kitchenBlender","kitchenCabinet","kitchenCoffeeMachine","kitchenFridge","kitchenFridgeLarge","kitchenMicrowave","kitchenSink","kitchenStove","lampRoundFloor","loungeChair","loungeChairRelax","plantSmall1","plantSmall2","plantSmall3","pottedPlant","radio","sideTable","speaker","stoolBar","table","tableRound","televisionVintage","trashcan"],"mini-characters":["character-female-a","character-female-b","character-female-c","character-female-d","character-female-e","character-female-f","character-male-a","character-male-b","character-male-c","character-male-d","character-male-e","character-male-f"],nature:["crops_bambooStageB","flower_purpleA","flower_purpleB","flower_redA","flower_redB","flower_yellowA","flower_yellowB","grass","grass_large","grass_leafs","grass_leafsLarge","hanging_moss","lily_large","lily_small","log","mushroom_red","plant_bush","plant_bushDetailed","plant_bushLarge","plant_bushSmall","plant_flatShort","plant_flatTall","pot_large","pot_small","rock_largeA","rock_largeB","rock_smallA","rock_smallB","rock_smallC","rock_tallA","stone_largeA","stone_smallA","stump_round","tree_default","tree_detailed","tree_detailed_dark","tree_fat","tree_oak","tree_oak_dark","tree_palmBend","tree_palmDetailedShort","tree_palmDetailedTall","tree_palmTall","tree_plateau","tree_plateau_dark","tree_simple","tree_small","tree_tall","tree_tall_dark"]};var Ca=new Map,ou=new Map,Xd={"nature/leafsGreen":"#58a83f","nature/leafsDark":"#2f8038","nature/grass":"#74c04c","nature/woodBark":"#8d5b3b","nature/woodBarkDark":"#6e4630","nature/stone":"#b8b2a6","nature/dirt":"#9a7656"};async function $d(s){let e=new Aa,t=[];for(let[o,a]of Object.entries(Wd))for(let c of a)t.push([o,c]);let n=0,i=0,r=async()=>{for(;i<t.length;){let[o,a]=t[i++];for(let c=0;c<4;c++)try{Kv(o,a,await e.loadAsync(`assets/kenney/${o}/${a}.glb`));break}catch(l){c===3?console.warn(`model ${o}/${a} failed to load`,l?.message||l):await new Promise(h=>setTimeout(h,300*(c+1)))}s?.(++n/t.length)}};await Promise.all(Array.from({length:8},r))}function qd(s,e){let t=`${s}/${e.name}`;return ou.has(t)?ou.get(t):(e.metalness=0,e.roughness=Math.max(.65,e.roughness??1),Xd[t]&&e.color.set(Xd[t]),e.map&&(e.map.anisotropy=4),ou.set(t,e),e)}function Kv(s,e,t){let n=t.scene;n.updateMatrixWorld(!0);let i=[],r=!1;n.traverse(a=>{a.isMesh&&(a.material=Array.isArray(a.material)?a.material.map(c=>qd(s,c)):qd(s,a.material),a.castShadow=!0,a.receiveShadow=!0,a.isSkinnedMesh?r=!0:i.push({geo:a.geometry,mat:a.material,m:a.matrixWorld.clone()}))});let o=new Qt().setFromObject(n);Ca.set(e,{scene:n,parts:i,box:o,size:o.getSize(new E),anims:t.animations,skinned:r,pack:s})}function Kd(s){return Ca.has(s)}function sr(s){let e=Ca.get(s);if(!e)throw new Error(`unknown model "${s}"`);return e}function Jr(s,e={}){let t=sr(s),n=e.s??1;e.h&&(n=e.h/t.size.y),e.w&&(n=e.w/Math.max(t.size.x,t.size.z));let i=Array.isArray(n)?new E(...n):new E(n,n,n),r=t.box.getCenter(new E),o=new E(e.center?-r.x:0,e.ground===!1?0:-t.box.min.y,e.center?-r.z:0);return{mat:new oe().makeScale(i.x,i.y,i.z).multiply(new oe().makeTranslation(o.x,o.y,o.z)),scale:i}}function Yd(s){let e=new E().setFromMatrixPosition(s).normalize(),[t,n]=Js(e);return`${Math.floor((t+90)/30)}_${Math.floor(n/40)}`}var au=class{constructor(){this.buckets=new Map}add(e,t,n={}){if(!Ca.has(e)){console.warn("missing model",e);return}let i=`${e}|${Yd(t)}|${n.shadow!==!1}`;this.buckets.has(i)||this.buckets.set(i,{name:e,chunk:Yd(t),list:[],shadow:n.shadow!==!1}),this.buckets.get(i).list.push(t.clone())}build(){let e=new Map,t=new oe;for(let{name:i,chunk:r,list:o,shadow:a}of this.buckets.values())for(let c of sr(i).parts){let l=Object.keys(c.geo.attributes).sort().join(",")+(c.geo.index?":i":":n"),h=`${r}|${c.mat.uuid}|${a}|${l}`;e.has(h)||e.set(h,{mat:c.mat,shadow:a,geos:[]});let u=e.get(h);for(let f of o)u.geos.push(c.geo.clone().applyMatrix4(t.multiplyMatrices(f,c.m)))}let n=new lt;for(let{mat:i,shadow:r,geos:o}of e.values()){let a=Ta(o);if(o.forEach(l=>l.dispose()),!a)continue;let c=new Ne(a,i);c.castShadow=r,c.receiveShadow=!0,n.add(c)}return this.buckets.clear(),n}},Ia=new au;function Pa(s){let e=sr(s);return e.skinned?ru(e.scene):e.scene.clone(!0)}function Zd(s){let e=sr(s),t=ru(e.scene);t.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.frustumCulled=!1)});let n=new va(t),i={};for(let r of e.anims)i[r.name]=n.clipAction(r);return{root:t,mixer:n,actions:i,height:e.size.y}}function ui(s=1){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var La=new oe,ep=new oe,Zv=new en,Jv=new E,cu=new E,Jd=new E,lu=class s{constructor(e,t=0,n=0,i=0){this.site=e,this.ox=t,this.oz=n,this.orot=i,this.c=Math.cos(i),this.s=Math.sin(i)}tf(e,t){return[this.ox+e*this.c+t*this.s,this.oz-e*this.s+t*this.c]}sub(e,t,n=0){let[i,r]=this.tf(e,t);return new s(this.site,i,r,this.orot+n)}dir(e,t,n){let[i,r]=this.tf(e,t);return this.site.dirAt(i,r,n)}matrix(e,t,n=0,i=0,r=0,o=0,a=new oe){let[c,l]=this.tf(e,t);return this.site.frameMatrix(c,l,this.orot+n,a),La.makeRotationFromEuler(Zv.set(r,0,o)),La.setPosition(0,i,0),a.multiply(La)}put(e,t,n,i=0,r=0){return this.matrix(t,n,i,r).decompose(e.position,e.quaternion,e.scale),e}add(e,t,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,r,o.rx||0,o.rz||0);return o.ry&&a.multiply(ep.makeRotationY(o.ry)),this.site.b.add(e,t,a,0,o.glow,o.mat),this}box(e,t,n,i,r,o,a={}){return this.add(new At(n,i,r),o,e,t,(a.y||0)+i/2,a)}rbox(e,t,n,i,r,o,a={}){let c=Math.min(a.r??.08,n/2,i/2,r/2);return this.add(new nr(n,i,r,a.segs??2,c),o,e,t,(a.y||0)+i/2,a)}lathe(e,t,n,i,r={}){let o=new Ti(n.map(([a,c])=>new ie(a,c)),r.seg||24);return(r.sx||r.sz)&&o.scale(r.sx||1,1,r.sz||1),this.add(o,i,e,t,r.y||0,r)}extrude(e,t,n,i,r,o={}){let a=new Ws(n,{depth:i,bevelEnabled:!!o.bevel,bevelSize:o.bevel||0,bevelThickness:o.bevel||0,bevelSegments:2,curveSegments:o.curveSeg||12});return a.rotateX(-Math.PI/2),this.add(a,r,e,t,o.y||0,o)}tube(e,t,n,i,r,o={}){let a=new si(n.map(c=>new E(...c)),!!o.closed);return this.add(new Ai(a,o.tseg||Math.max(8,n.length*6),i,o.rseg||6,!!o.closed),r,e,t,0,o)}model(e,t,n,i={}){if(!Kd(e))return this;let{mat:r,scale:o}=Jr(e,i),a=this.matrix(t,n,i.rot||0,i.y||0,i.rx||0,i.rz||0).multiply(r);return Ia.add(e,a,i),i.solid&&this.modelSolid(e,t,n,i,o),this}spawn(e,t,n,i={}){let r=new lt,o=Pa(e),{mat:a}=Jr(e,i);return a.decompose(o.position,o.quaternion,o.scale),r.add(o),this.put(r,t,n,i.rot||0,i.y||0),this.site.group.add(r),r}modelSolid(e,t,n,i,r){if(Array.isArray(i.solid))return this.solid(t,n,i.solid[0],i.solid[1],i.rot||0);let o=sr(e).size,a=o.x*r.x,c=o.z*r.z;return i.solid==="circle"?this.solidCircle(t,n,Math.min(a,c)*.35):this.solid(t,n,a*.9,c*.9,i.rot||0)}cyl(e,t,n,i,r,o,a={}){let c=new nt(n,i,r,a.seg||12);return a.spin&&c.rotateY(a.spin),this.add(c,o,e,t,(a.y||0)+r/2,a)}cone(e,t,n,i,r,o={}){let a=new Bn(n,i,o.seg||12);return o.spin&&a.rotateY(o.spin),o.sz&&a.scale(1,1,o.sz),this.add(a,r,e,t,(o.y||0)+i/2,o)}ball(e,t,n,i,r={}){let o=r.sy||1,a=new yt(n,r.seg||12,r.hseg||8);return(r.sx||r.sy||r.sz)&&a.scale(r.sx||1,o,r.sz||1),this.add(a,i,e,t,(r.y||0)+n*o,r)}dome(e,t,n,i,r={}){let o=new yt(n,r.seg||24,r.hseg||10,0,Math.PI*2,0,Math.PI/2);return r.sy&&o.scale(1,r.sy,1),this.add(o,i,e,t,r.y||0,r)}raw(e,t,n,i,r,o={}){let a=this.matrix(n,i,o.rot||0,0).multiply(r);return this.site.b.add(e,t,a,0,o.glow,o.mat),this}solid(e,t,n,i,r=0){let[o,a]=this.tf(e,t),c=this.orot+r;return this.site.colliders.push({x:o,z:a,hw:n/2,hd:i/2,c:Math.cos(c),s:Math.sin(c)}),this}camSolid(e,t,n,i,r=0){return this.solid(e,t,n,i,r),this.site.colliders[this.site.colliders.length-1].camOnly=!0,this}solidCircle(e,t,n){let[i,r]=this.tf(e,t);return this.site.colliders.push({x:i,z:r,r:n}),this}paintRect(e,t,n,i,r,o=0,a=!1){let c=this.sub(e,t,o),l=[[-n/2,-i/2],[n/2,-i/2],[n/2,i/2],[-n/2,i/2]].map(([h,u])=>c.tf(h,u));return(a?this.site.paintsOver:this.site.paints).push({pts:l,color:r}),this}paintCircle(e,t,n,i,r=!1){let o=[];for(let a=0;a<48;a++){let c=a/48*Math.PI*2;o.push(this.tf(e+Math.cos(c)*n,t+Math.sin(c)*n))}return(r?this.site.paintsOver:this.site.paints).push({pts:o,color:i}),this}water(e,t,n,i="#4fb0d8"){return this.paintCircle(e,t,n+.5,"#bfe6f2"),this.paintCircle(e,t,n,i),this.site.world.addWater(this.dir(e,t),n),this}sign(e,t,n,i={}){let r=i.w||3,o=i.h||.8,a=i.y??2,c=i.rot||0;i.board!==!1&&this.box(e,t,r+.2,o+.2,.12,i.frame||"#3a3340",{y:a-o/2-.1,rot:c,ol:.03});let l=new Ne(new tn(r,o),new Nt({map:jv(n,i,r/o),toneMapped:!1})),h=this.matrix(e,t,c,a);return h.multiply(La.makeTranslation(0,0,i.board!==!1?.07:.02)),h.decompose(l.position,l.quaternion,l.scale),this.site.group.add(l),l}},Hn=class extends lu{constructor(e,t,n){super(null),this.site=this,this.b=t,this.group=n,this.center=e.clone().normalize();let i=js(this.center);this.east=i.east,this.south=i.south}dirAt(e,t,n=new E){return n.copy(this.center).multiplyScalar(ze).addScaledVector(this.east,e).addScaledVector(this.south,t).normalize()}frameMatrix(e,t,n,i){let r=this.dirAt(e,t,Jv);return cu.copy(this.east).addScaledVector(r,-r.dot(this.east)).normalize(),Jd.crossVectors(cu,r),i.makeBasis(cu,r,Jd),n&&i.multiply(ep.makeRotationY(n)),i.setPosition(r.x*ze,r.y*ze,r.z*ze),i}toLocal(e){let t=ze/e.dot(this.center);return[t*e.dot(this.east),t*e.dot(this.south)]}},Da=class extends Hn{constructor(e,t,n){super(Ud(e.lat,e.lon),t,new lt),this.def=e,this.id=e.id,this.world=n,this.colliders=[],this.paints=[],this.paintsOver=[],this.spots={},this.coins=[],this.updaters=[],this.cosNear=Math.cos(34/ze),n.sites.push(this)}hit(e,t){if(e.dot(this.center)<this.cosNear)return!1;let[n,i]=this.toLocal(e);for(let r of this.colliders){if(r.camOnly)continue;let o=n-r.x,a=i-r.z;if(r.r!==void 0){let c=r.r+t;if(o*o+a*a<c*c)return!0}else{let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw+t&&Math.abs(l)<r.hd+t)return!0}}return!1}near(e,t){return e.dot(this.center)>Math.cos(t/ze)}},jd='"Baloo 2", "Nunito", system-ui, sans-serif',Qd=["#e2383f","#f39c32","#f3c93a","#4caf50","#2f8fd8","#8e5ad8"];function jv(s,e={},t=4){let i=Math.max(64,Math.round(512/t)),r=document.createElement("canvas");r.width=512,r.height=i;let o=r.getContext("2d");if(o.fillStyle=e.bg||"#2e7d5b",o.fillRect(0,0,512,i),e.border!==!1){o.strokeStyle=e.fg||"#fff",o.lineWidth=Math.max(3,i*.05);let u=i*.09;o.strokeRect(u,u,512-2*u,i-2*u)}let a=String(s).split(`
`),c=i*.62/a.length;o.font=`800 ${c}px ${jd}`;let l=Math.max(...a.map(u=>o.measureText(u).width));l>512*.86&&(c*=512*.86/l),o.font=`800 ${c}px ${jd}`,o.textBaseline="middle",a.forEach((u,f)=>{let d=i/2+(f-(a.length-1)/2)*c*1.08+c*.06;if(e.rainbow){o.textAlign="left";let g=512/2-o.measureText(u).width/2;[...u].forEach((y,m)=>{o.fillStyle=Qd[m%Qd.length],o.fillText(y,g,d),g+=o.measureText(y).width})}else o.textAlign="center",o.fillStyle=e.fg||"#fff",o.fillText(u,512/2,d)});let h=new Gt(r);return h.colorSpace=Je,h.anisotropy=4,h}var Ua=class{constructor(){this.sites=[],this.circles=[],this.waters=[],this.acts=[],this.seaY=Math.sin(Yr*Pn)}addCircle(e,t,n=.45){this.circles.push({d:e.clone(),cos:Math.cos((t+n)/ze)})}addWater(e,t){this.waters.push({d:e.clone(),r:t,cos:Math.cos(t/ze)})}isWater(e){if(e.y<this.seaY)return!0;for(let t of this.waters)if(e.dot(t.d)>t.cos)return!0;return!1}blocked(e,t=.45){if(this.isWater(e))return!0;for(let n of this.circles)if(e.dot(n.d)>n.cos)return!0;for(let n of this.sites)if(n.hit(e,t))return!0;return!1}camBlocked(e){for(let t of this.sites){if(e.dot(t.center)<t.cosNear)continue;let[n,i]=t.toLocal(e);for(let r of t.colliders){let o=n-r.x,a=i-r.z;if(r.r!==void 0){if(r.r>1.2&&o*o+a*a<r.r*r.r)return!0}else if(r.hw>.6&&r.hd>.6){let c=o*r.c-a*r.s,l=o*r.s+a*r.c;if(Math.abs(c)<r.hw&&Math.abs(l)<r.hd)return!0}}}return!1}addAct(e){return this.acts.push(e),e}nearestAct(e){let t=null,n=1/0;for(let i of this.acts){if(i.show&&!i.show())continue;let r=Math.acos(Math.min(1,e.dot(i.dir)))*ze;r<i.r&&r<n&&(t=i,n=r)}return t}};function Ot(s,e=0){let t=new Ae(s),n={};return t.getHSL(n,Je),t.setHSL(n.h,n.s,xt.clamp(n.l+e,0,1),Je),"#"+t.getHexString()}var hu=1,Ln=()=>(hu=hu*16807%2147483647,hu/2147483647),ji=s=>s[Ln()*s.length|0];function zn(s,e,t,n=1){let i=(4.6+Ln()*1.6)*n;s.model(ji(["tree_plateau","tree_plateau_dark"]),e,t,{s:[i,(3.6+Ln())*n,i],rot:Ln()*6.3}),s.solidCircle(e,t,.35)}function rr(s,e,t,n=1){s.model(ji(["tree_palmDetailedTall","tree_palmTall","tree_palmBend"]),e,t,{h:(5.4+Ln()*1.4)*n,rot:Ln()*6.3})}function Vn(s,e,t,n=1,i=!1){if(s.model(ji(["plant_bushDetailed","plant_bush","plant_bushLarge"]),e,t,{h:.8*n,rot:Ln()*6.3}),i)for(let r=0;r<3;r++)s.model(ji(["flower_redA","flower_purpleA","flower_yellowA"]),e+(Ln()-.5)*1.2,t+(Ln()-.5)*1.2,{h:.5,shadow:!1})}function Zt(s,e,t,n,i,r=0){let o=s.sub(e,t,r);o.rbox(0,0,n,.45,i,"#c9c1b2",{r:.06}),o.box(0,0,n-.2,.06,i-.2,"#6b4f36",{y:.42});let a=Math.max(1,Math.round(n/1.1));for(let c=0;c<a;c++){let l=-n/2+(c+.5)*(n/a);o.model(ji(["plant_bushDetailed","plant_bushSmall","flower_redA","flower_purpleB","flower_yellowA"]),l,0,{h:.55+Ln()*.35,y:.42,rot:Ln()*6.3,shadow:!1})}o.solid(0,0,n,i)}function bn(s,e,t,n=0){s.model("light-curved",e,t,{h:4.8,rot:n}),s.sub(e,t,n).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"})}function Xt(s,e,t,n=0,i="#b9874f"){let r=s.sub(e,t,n);for(let o=0;o<4;o++)r.rbox(0,.15-o*.12,1.9,.06,.1,i,{y:.45,r:.02});for(let o=0;o<3;o++)r.rbox(0,-.27,1.9,.09,.05,i,{y:.62+o*.13,rx:-.12,r:.02});for(let o of[-.8,.8])r.rbox(o,0,.07,.45,.42,"#3e4650",{r:.02}),r.rbox(o,-.28,.07,.5,.06,"#3e4650",{y:.45,r:.02});r.solid(0,0,1.9,.5)}function Qi(s,e,t,n="#ece6da",i="#d24b3e"){s.lathe(e,t,[[0,0],[.32,0],[.34,.04],[.1,.1],[.07,.68],[.12,.7],[0,.7]],"#8a8f96",{seg:16}),s.lathe(e,t,[[0,.7],[.62,.7],[.66,.73],[.66,.77],[.6,.79],[0,.79]],n,{seg:28});for(let r=0;r<4;r++){let o=r*Math.PI/2+Math.PI/4,a=e+Math.cos(o)*.98,c=t+Math.sin(o)*.98;s.lathe(a,c,[[0,0],[.16,0],[.06,.06],[.05,.38],[.2,.4],[.21,.46],[0,.47]],i,{seg:16})}s.solidCircle(e,t,1)}function es(s,e,t,n,i,r,o={}){let a=s.sub(e,t,n);a.rbox(0,0,2.3,.95,1,i,{y:.25,r:.06}),a.rbox(0,.05,2.42,.07,1.12,Ot(i,-.12),{y:1.2,r:.03}),a.rbox(0,.3,2.1,.35,.5,"#d9eef5",{y:1.27,r:.04});for(let c of[-.85,.85])a.cyl(c,.52,.22,.22,.08,"#2a2a30",{y:.22,rx:Math.PI/2,seg:16}),a.cyl(c,.57,.1,.1,.02,"#c9cdd2",{y:.22,rx:Math.PI/2,seg:12});for(let c of[-1.12,1.12])for(let l of[-.48,.48])a.cyl(c,l,.035,.035,1.6,"#d9d9d9",{y:1.25,seg:6});a.rbox(0,0,2.75,.1,1.75,r,{y:2.85,r:.04});for(let c=0;c<9;c++)a.cyl(-1.3+c*.325,.88,.16,.16,.06,c%2?"#ffffff":r,{y:2.68,rx:Math.PI/2,seg:10});if(o.grill){a.rbox(0,-.15,1.6,.12,.5,"#2a2a2a",{y:1.22,r:.02}),a.box(0,-.15,1.45,.04,.4,"#ff7a2e",{y:1.33,glow:"win"});for(let c=0;c<7;c++)a.model("skewer",-.6+c*.2,-.15,{w:.5,y:1.38,rot:Math.PI/2,shadow:!1})}o.label&&a.sign(0,.92,o.label,{w:2.2,h:.45,y:2.42,bg:o.signBg||r,board:!1}),a.solid(0,0,2.3,1)}function tp(s,e,t,n){s.cyl(e,t,.035,.035,2.5,"#eeeeee",{seg:8});let i=[[0,2.85],[.4,2.81],[.8,2.69],[1.2,2.51],[1.5,2.33]];s.lathe(e,t,i,"#f4efe6",{seg:16}),s.lathe(e,t,[...i].reverse(),n,{seg:16});for(let r=0;r<8;r++){let o=r/8*Math.PI*2;s.ball(e+Math.cos(o)*1.5,t+Math.sin(o)*1.5,.05,"#ffffff",{y:2.33})}s.ball(e,t,.07,"#ffffff",{y:2.85})}function Na(s,e,t,n,i){let r=s.sub(e,t,n),o=i.w,a=i.d,c=i.floors,l=2.6,h=3,u=1.1,f=h+c*l,d=i.base||"#f4ecdb",g=i.accent,y=ui(i.seed||3),m=Math.round(o/2.4);for(let v=0;v<=m;v++){let _=-o/2+.4+v*(o-.8)/m;for(let x of[-a/2+.4,a/2-.4]){let P=(_*_+x*x)/120;r.rbox(_,x,.55,h+P,.55,"#efe6d2",{r:.05}),r.solid(_,x,.55,.55)}}if(r.box(0,0,o-.6,.05,a-.6,"#cdbfa6",{y:.01}),!i.filler){r.rbox(-o/2+1.6,-a/2+.75,2.2,1.6,.35,"#9aa4ad",{r:.04});for(let x=0;x<5;x++)for(let P=0;P<4;P++)r.box(-o/2+.8+x*.4,-a/2+.94,.34,.3,.02,"#c3ccd4",{y:.2+P*.36});let v=o/2-3,_=.2;r.lathe(v,_,[[0,0],[.25,0],[.18,.08],[.16,.65],[.55,.68],[.55,.76],[0,.76]],"#b9b4aa",{seg:20}),r.box(v,_,.6,.01,.6,"#f3e1b0",{y:.765});for(let x=0;x<4;x++){let P=x*Math.PI/2;r.lathe(v+Math.cos(P)*.85,_+Math.sin(P)*.85,[[0,0],[.2,0],[.16,.42],[.2,.45],[0,.46]],"#b9b4aa",{seg:12})}r.solidCircle(v,_,1)}r.box(0,-u/2,o,f-h,a-u,d,{y:h});for(let v=0;v<=c;v++)r.rbox(0,0,o+.24,.26,a+.24,v===0?Ot(g,-.05):g,{y:h+v*l-.13,r:.05});let p=Math.floor((o-2.6)/1.75);for(let v=0;v<c;v++){let _=h+v*l;r.box(0,a/2-.08,o-.1,1,.16,d,{y:_+.13}),r.box(0,a/2-.08,o-.1,.06,.2,"#8f99a3",{y:_+1.13});for(let x=0;x<p;x++){let P=-o/2+1.4+x*1.75,R=y()<.5;if(x%2===0)r.box(P,a/2-u+.02,.85,1.95,.06,ji(["#7a4b33","#5b6b4a","#4a5c7a","#8a3b3b"]),{y:_+.13}),r.box(P,a/2-u+.04,.95,2.05,.03,"#d9d4c7",{y:_+.13});else{r.box(P,a/2-u+.02,.95,.95,.05,R?"#ffe2a0":"#93a9bd",{y:_+1.05,glow:"win"});for(let T=0;T<4;T++)r.box(P-.36+T*.24,a/2-u+.06,.03,.95,.03,"#c9ced4",{y:_+1.05})}let C=-a/2-.02;r.box(P,C,1.15,1.2,.06,y()<.55?"#ffe2a0":"#93a9bd",{y:_+.9,glow:"win"});for(let T=0;T<5;T++)r.box(P-.48+T*.24,C-.04,.03,1.2,.03,"#d6d9dc",{y:_+.9});if(r.box(P,C-.04,1.2,.04,.05,"#d6d9dc",{y:_+1.48}),y()<.45&&(r.rbox(P+.95,C-.25,.55,.42,.32,"#f2f2f2",{y:_+.25,r:.04}),r.cyl(P+.95,C-.42,.13,.13,.02,"#8d949b",{y:_+.46,rx:Math.PI/2,seg:12})),y()<.4){for(let T=0;T<3;T++)r.cyl(P-.4+T*.4,C-.7,.025,.025,1.4,"#b58a52",{y:_+2.1,rx:Math.PI/2,seg:5});for(let T=0;T<4;T++){let w=P-.4+T%3*.4,b=C-.35-y()*.8;r.box(w,b,.05,.45+y()*.3,.38,ji(["#e2383f","#2f8fd8","#f3c13a","#ffffff","#8e5ad8","#3fae49"]),{y:_+1.5})}}}}r.rbox(o/2+.6,-.2,1.8,f-h+1.6,a+.4,g,{y:h-.4,r:.08});for(let v=0;v<c;v++)r.box(o/2+.6,a/2+.02,.9,1.4,.05,"#cfe1ea",{y:h+v*l+.6,glow:"win"});r.solid(o/2+.6,-.2,1.8,a+.4),r.rbox(0,0,o+.4,.55,a+.4,g,{y:f,r:.06}),r.rbox(-o/2+2.2,-.3,2.6,1.6,2.2,"#d9d2c4",{y:f+.55,r:.1}),r.cyl(o/2-2,0,.04,.04,2.2,"#888",{y:f+.55,seg:5}),r.camSolid(0,0,o,a),i.no&&r.sub(-o/2-.01,0,-Math.PI/2).sign(0,0,`BLK
${i.no}`,{w:2.2,h:1.6,y:f-1.8,bg:g,board:!1,border:!1})}function Qv(){if(er.hdbfacade)return"hdbfacade";let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,64),e.fillStyle="#d8d8d8",e.fillRect(0,54,64,10),e.fillStyle="#bfc5c9",e.fillRect(10,14,44,32),e.fillStyle="#5f7f99",e.fillRect(13,17,38,26),e.fillStyle="#86a5bd",e.fillRect(13,17,38,9),e.fillStyle="#e6e6e6";for(let n of[22,32,42])e.fillRect(n,17,2,26);let t=new Gt(s);return t.colorSpace=Je,t.wrapS=t.wrapT=an,t.anisotropy=4,li("hdbfacade",new ut({map:t,vertexColors:!0,roughness:.85})),"hdbfacade"}function uu(s,e,t,n,i){let r=s.sub(e,t,n),o=Qv(),a=i.w,c=i.d,l=i.floors,h=2.6,u=2.6,f=u+l*h,d=i.base||"#f4ecdb",g=i.accent;for(let y of[-a/2+.4,-a/6,a/6,a/2-.4])for(let m of[-c/2+.4,c/2-.4])r.box(y,m,.5,u+(y*y+m*m)/120,.5,"#efe6d2");r.box(0,0,a-.3,f-u,c-.3,d,{y:u});for(let y of[-1,1]){let m=new tn(a-.3,f-u),p=m.attributes.uv;for(let v=0;v<p.count;v++)p.setXY(v,p.getX(v)*Math.round(a/1.8),p.getY(v)*l);r.add(m,d,0,y*(c/2-.13),u+(f-u)/2,{mat:o,rot:y>0?0:Math.PI})}for(let y=0;y<=l;y++)r.box(0,0,a+.1,.2,c+.1,y%3===0?g:Ot(g,.12),{y:u+y*h-.1});r.box(a/2+.6,0,1.6,f-u+1.4,c*.7,g,{y:u-.2}),r.box(0,0,a+.3,.5,c+.3,g,{y:f}),r.box(-a/2+2,0,2.4,1.4,c*.5,"#d9d2c4",{y:f+.5})}var Rt=4096,nn=2048,jr=Rt/(2*Math.PI*ze),np=.5;function e1(s){let e=[];for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];for(let c=-16;c<16;c+=np)e.push(n.dirAt(c,0));let r=n.dirAt(16,0),o=i.dirAt(-16,0),a=Math.max(1,Math.ceil(r.angleTo(o)*ze/np));for(let c=0;c<a;c++)e.push(Nd(r,o,c/a))}return e}function ip(s){let[e,t]=Js(s);return[t/360*Rt,(90-e)/180*nn]}function ap(s){let e=[s[0].slice()];for(let t=1;t<s.length;t++){let[n,i]=s[t],r=e[t-1][0];for(;n-r>Rt/2;)n-=Rt;for(;r-n>Rt/2;)n+=Rt;e.push([n,i])}return e}function sp(s,e,t){let n=ap(e);s.fillStyle=t;for(let i of[-Rt,0,Rt])s.beginPath(),n.forEach(([r,o],a)=>a?s.lineTo(r+i,o):s.moveTo(r+i,o)),s.closePath(),s.fill()}function fu(s,e,t,n,i=null){let r=ap(e);s.strokeStyle=t,s.lineWidth=n,s.lineJoin=s.lineCap=i?"butt":"round",s.setLineDash(i||[]);for(let o of[-Rt,0,Rt])s.beginPath(),r.forEach(([a,c],l)=>l?s.lineTo(a+o,c):s.moveTo(a+o,c)),s.stroke();s.setLineDash([])}function t1(s,e,t){let n=document.createElement("canvas");n.width=Rt,n.height=nn;let i=n.getContext("2d"),r=ui(7);i.fillStyle="#95c96f",i.fillRect(0,0,Rt,nn);let o=["#8cc26a","#9fd178","#86bb63","#a5d47f","#91c86d"];for(let m=0;m<1400;m++)i.fillStyle=o[r()*o.length|0],i.globalAlpha=.45,i.beginPath(),i.ellipse(r()*Rt,r()*nn,15+r()*70,10+r()*40,r()*Math.PI,0,Math.PI*2),i.fill();i.globalAlpha=1;let a=48/180*nn,c=i.createLinearGradient(0,0,0,a);c.addColorStop(0,"#5d9a4c"),c.addColorStop(.7,"rgba(98,160,80,0.7)"),c.addColorStop(1,"rgba(98,160,80,0)"),i.fillStyle=c,i.fillRect(0,0,Rt,a);let l=(90-Zs)/180*nn,h=(90-Yr)/180*nn,u=(m,p)=>Math.sin(m*.011+p)*9+Math.sin(m*.037+p*2)*5;i.fillStyle="#f1dfa8",i.beginPath(),i.moveTo(0,nn);for(let m=0;m<=Rt;m+=16)i.lineTo(m,l+u(m,1));i.lineTo(Rt,nn),i.closePath(),i.fill(),i.fillStyle="#c9eef8",i.beginPath(),i.moveTo(0,nn);for(let m=0;m<=Rt;m+=16)i.lineTo(m,h-7+u(m,3));i.lineTo(Rt,nn),i.closePath(),i.fill();let f=i.createLinearGradient(0,h,0,nn);f.addColorStop(0,"#5bbde0"),f.addColorStop(.35,"#3f9fd0"),f.addColorStop(1,"#2f7fc0"),i.fillStyle=f,i.beginPath(),i.moveTo(0,nn);for(let m=0;m<=Rt;m+=16)i.lineTo(m,h+u(m,3));i.lineTo(Rt,nn),i.closePath(),i.fill();let d=(m,p)=>p.map(([v,_])=>ip(m.dirAt(v,_)));for(let m of s.sites)for(let p of m.paints)sp(i,d(m,p.pts),p.color);let g=e.map(m=>ip(m));g.push(g[0]),fu(i,g,"#ddd6c6",6.6*jr),fu(i,g,"#5f6672",4.4*jr),fu(i,g,"#f5efdc",.22*jr,[1.6*jr,1.6*jr]);for(let m of s.sites)for(let p of m.paintsOver)sp(i,d(m,p.pts),p.color);let y=new Gt(n);return y.colorSpace=Je,y.anisotropy=t,y}var rp=["tree_plateau","tree_plateau_dark"],n1=["tree_detailed","tree_oak","tree_fat","tree_default","tree_tall","tree_detailed_dark","tree_oak_dark","tree_tall_dark"],i1=["tree_palmDetailedTall","tree_palmTall","tree_palmBend","tree_palmDetailedShort"],s1=["plant_bushDetailed","plant_bush","plant_bushLarge","plant_bushSmall"],r1=["flower_redA","flower_redB","flower_purpleA","flower_purpleB","flower_yellowA","flower_yellowB"],o1=["grass","grass_large","grass_leafs","grass_leafsLarge"],op=["rock_smallA","rock_smallB","rock_smallC","stone_smallA"],a1=["building-skyscraper-a","building-skyscraper-b","building-skyscraper-c","building-skyscraper-d","building-skyscraper-e"];function cp(s,e,t){let n=e1(s.sites),i=t1(s,n,t.capabilities.getMaxAnisotropy()),r=new Ne(new yt(ze,256,128),new ut({map:i,roughness:.95,metalness:0}));r.receiveShadow=!0;let o=ui(42),a=v=>v[o()*v.length|0],c=n.filter((v,_)=>_%4===0),l=(v,_)=>{let x=Math.cos(_/ze);return c.some(P=>v.dot(P)>x)},h=(v,_)=>s.sites.some(x=>x.near(v,_)),u=new E,f=()=>{let v=o()*2-1,_=o()*Math.PI*2,x=Math.sqrt(1-v*v);return u.set(x*Math.cos(_),v,x*Math.sin(_))},d=(v,_,x)=>!s.isWater(v)&&!h(v,_)&&!l(v,x)&&!s.camBlocked(v),g=["#4fa3a5","#e9825f","#8e7cc3","#5aa95f","#d9a63a","#d65f6d","#3f86c4"];for(let v=0,_=0;v<3e3&&_<40;v++){let x=f(),P=Math.asin(x.y)/Pn;if(P>40||P<Zs+3||!d(x,25,9)||s.blocked(x,6))continue;let R=new Hn(x,e,null),C=o()*Math.PI;if(o()<.25)R.model(a(a1),0,0,{h:16+o()*10,rot:C}),s.addCircle(x,2.4);else{let T=9+o()*5,w=5+(o()*7|0),b=a(g);uu(R,0,0,C,{w:T,d:4.4,floors:w,accent:b});let L=R.sub(0,0,C);for(let H of[-1,0,1])s.addCircle(R.dirAt(...L.tf(H*T/3,0)),2.6);if(o()<.5){let H=R.sub(0,0,C),D=(o()-.5)*4,[N,W]=H.tf(D,9.5),B=R.dirAt(N,W);if(d(B,25,9)&&!s.blocked(B,6)){let J=8+o()*5;uu(R,N,W,C,{w:J,d:4.4,floors:w+(o()*3|0)-1,accent:a(g)});for(let G of[-1,0,1])s.addCircle(R.dirAt(...H.tf(D+G*J/3,9.5)),2.6)}}}_++}for(let v=0;v<2600;v++){let _=f(),x=Math.asin(_.y)/Pn;if(!d(_,21,4.4)||s.blocked(_,1.2))continue;let P=x<Zs+1,R=x>44;if(P&&o()>.35||!P&&!R&&o()>.32)continue;let C=new Hn(_,e,null),T=o()*Math.PI*2;if(P)C.model(a(i1),0,0,{h:5+o()*2.2,rot:T});else if(!R&&o()<.55){let w=4.6+o()*2.4;C.model(a(rp),0,0,{s:[w,3.6+o()*1.2,w],rot:T})}else C.model(a(n1),0,0,{h:4.5+o()*3,rot:T});s.addCircle(_,.4)}for(let v=0;v<9e3;v++){let _=f();if(!d(_,19,3.4))continue;let x=Math.asin(_.y)/Pn,P=x<Zs+.5,R=new Hn(_,e,null),C=o()*Math.PI*2,T=o();if(P){T<.12&&R.model(a(op),0,0,{h:.3+o()*.5,rot:C});continue}T<.08?R.model(a(s1),0,0,{h:.7+o()*.6,rot:C}):T<.16?R.model(a(r1),0,0,{h:.45+o()*.25,rot:C,shadow:!1}):T<.38?R.model(a(o1),0,0,{h:.35+o()*.3,rot:C,shadow:!1}):T<.4&&R.model(a(op),0,0,{h:.25+o()*.3,rot:C})}let y=[],m=(v,_)=>Math.atan2(_.dot(v.east),_.dot(v.south));for(let v=0;v<n.length;v++){let _=n[v],x=n[(v+1)%n.length].clone().sub(n[(v-1+n.length)%n.length]).normalize(),P=new E().crossVectors(_,x).normalize(),R=C=>_.clone().multiplyScalar(ze).addScaledVector(P,C).normalize();if(v%2===0)for(let C of[-1,1]){let T=new Hn(R(C*2.32),e,null);T.box(0,0,.22,.12,1.04,"#cfc8b8",{rot:m(T,x)})}if(!h(_,17)){if(v%22===0){let C=v/22%2?1:-1,T=new Hn(R(C*3),e,null),w=P.clone().multiplyScalar(-C),b=Math.atan2(-w.dot(T.east),-w.dot(T.south));T.model("light-curved",0,0,{h:4.8,rot:b}),T.sub(0,0,b).box(0,-1.45,.34,.07,.5,"#fff1b8",{y:4.45,glow:"win"}),s.addCircle(T.center,.2)}if(v%18===9)for(let C of[-1,1]){let T=R(C*(5.2+o()*1.5));if(s.isWater(T)||s.blocked(T,1))continue;let w=4.2+o()*1.8;new Hn(T,e,null).model(a(rp),0,0,{s:[w,3.4+o(),w],rot:o()*6.3}),s.addCircle(T,.35)}v%26===13&&y.push({id:`r${y.length}`,dir:R((o()-.5)*2.4)})}}let p=0;for(let v=0;v<600&&p<10;v++){let _=f(),x=Math.asin(_.y)/Pn,P=x>48,R=x<Zs&&x>Yr+1.5;p<6&&!P||p>=6&&!R||s.blocked(_,.8)||h(_,20)||(y.push({id:`x${p}`,dir:_.clone()}),p++)}return{mesh:r,path:n,coinSpots:y}}var Dn=s=>new Ae(s),c1=Dn("#4fa7ec"),l1=Dn("#cdeefa"),h1=Dn("#5866b8"),u1=Dn("#ffad72"),f1=Dn("#0b1230"),d1=Dn("#27325c"),p1=Dn("#7f8b99"),m1=Dn("#b8c2cc"),g1=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,y1=`
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
}`,Oa=class{constructor(e,t=!0){if(this.scene=e,this.hemi=new Ys(15135999,8034920,1.2),this.sun=new Pi(16774108,2.6),t){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let o=this.sun.shadow.camera;o.left=o.bottom=-38,o.right=o.top=38,o.near=40,o.far=170,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04}e.add(this.hemi,this.sun,this.sun.target),this.u={top:{value:new Ae},horizon:{value:new Ae},up:{value:new E(0,1,0)},sunDir:{value:new E(1,0,0)},sunCol:{value:new Ae("#fff2c4")},moon:{value:0},space:{value:0}},this.dome=new Ne(new yt(900,32,16),new gn({uniforms:this.u,vertexShader:g1,fragmentShader:y1,side:Dt,depthWrite:!1,depthTest:!1})),this.dome.renderOrder=-10,this.dome.frustumCulled=!1,e.add(this.dome);let n=1200,i=new Float32Array(n*3);for(let o=0;o<n;o++){let a=new E().randomDirection().multiplyScalar(850);i.set([a.x,a.y,a.z],o*3)}let r=new ot;r.setAttribute("position",new et(i,3)),this.starMat=new hn({color:0,size:2,sizeAttenuation:!1,depthTest:!1,depthWrite:!1}),this.stars=new yn(r,this.starMat),this.stars.renderOrder=-9,this.stars.frustumCulled=!1,this.dome.add(this.stars),this.night=0,this.elev=0,this._t=new Ae,this._h=new Ae,this._sd=new E}update(e,t,n,i,r,o){let a=e*Math.PI*2,c=Math.sin(a);this.elev=c;let l=this._sd.copy(t.east).multiplyScalar(Math.cos(a)).addScaledVector(t.up,c).addScaledVector(t.south,.35).normalize(),h=xt.clamp((.06-c)/.28,0,1),u=Math.max(0,1-Math.abs(c-.02)/.32)*(1-h*.6);this.night=h;let f=this._t.copy(c1).lerp(f1,h).lerp(h1,u*.55),d=this._h.copy(l1).lerp(d1,h).lerp(u1,u*.8);f.lerp(p1,r*.65*(1-h*.7)),d.lerp(m1,r*.65*(1-h*.7)),this.u.top.value.copy(f),this.u.horizon.value.copy(d),this.u.up.value.copy(t.up),this.u.sunDir.value.copy(l),this.u.sunCol.value.set(u>.4?"#ffc48a":"#fff2c4").multiplyScalar((1-h)*(1-r*.85)),this.u.moon.value=h*(1-r),this.u.space.value=o,this.dome.position.copy(i);let g=Math.max(h*(1-r),o);this.starMat.color.setScalar(g),this.stars.visible=g>.01,this.sun.target.position.copy(n),c>-.04?(this.sun.position.copy(n).addScaledVector(l,100),this.sun.color.set("#fff3dc").lerp(Dn("#ffb27a"),u*.8),this.sun.intensity=2.8*(1-r*.45)*xt.clamp(c*4+.35,.25,1)):(this.sun.position.copy(n).addScaledVector(l,-100),this.sun.color.set("#9fb3ff"),this.sun.intensity=.75),this.hemi.position.copy(t.up),this.hemi.intensity=xt.lerp(1.2,.6,h)*(1-r*.2),this.scene.environmentIntensity=xt.lerp(.4,.08,h)*(1-r*.3),this.hemi.color.set("#e6f4ff").lerp(Dn("#7486c8"),h),this.hemi.groundColor.set("#7a9a68").lerp(Dn("#2c3550"),h);let y=xt.lerp(.62,1.2,h);for(let[m,p]of Object.entries(Qs))m!=="super"&&p.color.setScalar(y)}};var du=1400,Fa=16,lp=18,x1=.7,Ba=class{constructor(e){this.pos=new Float32Array(du*6),this.drops=[];for(let n=0;n<du;n++)this.drops.push([(Math.random()*2-1)*Fa,Math.random()*lp,(Math.random()*2-1)*Fa]);let t=new ot;t.setAttribute("position",new et(this.pos,3)),this.mat=new Ki({color:13163760,transparent:!0,opacity:0,depthWrite:!1}),this.lines=new Vs(t,this.mat),this.lines.frustumCulled=!1,e.add(this.lines),this.level=0,this.target=0,this.timer=70+Math.random()*60,this._m=new oe,this.onStart=null}update(e,t,n,i){this.timer-=e,this.timer<=0&&(this.target>0?(this.target=0,this.timer=80+Math.random()*90):(this.target=.6+Math.random()*.4,this.timer=22+Math.random()*18,this.onStart?.()));let r=i?this.target:0;if(this.level+=(r-this.level)*Math.min(1,e*.6),this.lines.visible=this.level>.02,!this.lines.visible)return;this._m.makeBasis(n.east,n.up,n.south).setPosition(t),this._m.decompose(this.lines.position,this.lines.quaternion,this.lines.scale);let o=26*e,a=this.pos;for(let c=0;c<du;c++){let l=this.drops[c];l[1]-=o,l[1]<0&&(l[1]+=lp,l[0]=(Math.random()*2-1)*Fa,l[2]=(Math.random()*2-1)*Fa);let h=c*6;a[h]=l[0],a[h+1]=l[1],a[h+2]=l[2],a[h+3]=l[0]+.08,a[h+4]=l[1]+x1,a[h+5]=l[2]}this.lines.geometry.attributes.position.needsUpdate=!0,this.mat.opacity=.55*this.level}forceStop(){this.target=0,this.timer=80+Math.random()*60}};var pu=["female-a","female-b","female-c","female-d","female-e","female-f","male-a","male-b","male-c","male-d","male-e","male-f"];function _1(s){let e=s.color||"#333";return Di(t=>{s.type==="cap"?(t.add(new yt(.34,18,10,0,Math.PI*2,0,Math.PI/2).scale(1,.55,1),e,Oe(0,0,0)),t.add(new nt(.3,.3,.03,18,1,!1,-Math.PI/2,Math.PI).scale(1,1,1.1),e,Oe(0,.01,.12)),t.add(new yt(.035,8,6),"#ffffff",Oe(0,.19,0))):s.type==="police"?(t.add(new nt(.36,.32,.18,20),e,Oe(0,.09,0)),t.add(new nt(.37,.37,.05,20),"#f3c13a",Oe(0,.05,0)),t.add(new nt(.26,.26,.03,18,1,!1,-Math.PI/2,Math.PI),"#111",Oe(0,0,.14))):s.type==="songkok"?t.add(new nt(.3,.32,.26,20),e,Oe(0,.13,0)):s.type==="bucket"?(t.add(new nt(.28,.34,.24,20),e,Oe(0,.12,0)),t.add(new nt(.5,.5,.03,24),e,Oe(0,.01,0))):s.type==="straw"?(t.add(new nt(.26,.3,.18,20),e,Oe(0,.09,0)),t.add(new nt(.62,.62,.03,28),e,Oe(0,.01,0)),t.add(new nt(.305,.305,.05,20),"#e2383f",Oe(0,.05,0))):s.type==="bun"&&t.add(new yt(.15,12,10),e,Oe(0,.02,-.12))})}function ts(s={}){let e=Zd(`character-${s.char||"male-a"}`),t=(s.h||1.75)/e.height,n=new lt;e.root.scale.setScalar(t),n.add(e.root);let i={};for(let o of["head","torso","arm-left","arm-right","leg-left","leg-right"])i[o]=e.root.getObjectByName(o);let r={root:n,c:e,s:t,bones:i,cur:null,curName:null,onceT:0,base:s.base||null};if(s.hat&&i.head){let o=_1(s.hat);o.scale.setScalar(1/t),o.position.set(0,s.hat.y??.285,.01),i.head.add(o)}return mu(r,r.base||"idle",0),r}function mu(s,e,t=.25){if(s.curName===e)return;let n=s.c.actions[e];n&&(n.reset(),n.setLoop(vh,1/0),n.clampWhenFinished=!1,n.setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(t).play(),s.cur&&s.cur!==n&&s.cur.fadeOut(t),s.cur=n,s.curName=e)}function ka(s,e){let t=s.c.actions[e];t&&(mu(s,e,.12),t.setLoop(_h,1),t.clampWhenFinished=!0,s.onceT=t.getClip().duration)}function Ni(s,e,t=0,n=null){if(s.onceT>0)s.onceT-=e,s.onceT<=0&&(s.curName=null);else{let i=n||s.base||(t>7.5?"sprint":t>.3?"walk":"idle");mu(s,i),i==="walk"?s.cur.timeScale=xt.clamp(t/2.6,.6,2.2):i==="sprint"?s.cur.timeScale=xt.clamp(t/8,.8,1.6):s.cur.timeScale=1}s.c.mixer.update(e)}function Qr(s){let e=s.index.array;for(let n=0;n<e.length;n+=3){let i=e[n];e[n]=e[n+2],e[n+2]=i}let t=s.attributes.normal.array;for(let n=0;n<t.length;n++)t[n]=-t[n];return s}function hp(s="#e2383f"){return Di(e=>{let t=[];for(let i=0;i<=10;i++){let r=i/10;t.push(new ie(1.08*Math.sin(r*Math.PI/2),.48*Math.cos(r*Math.PI/2)))}let n=new Ti(t,16);e.add(Qr(n),s,Oe(0,1.02,0)),e.add(new Ti(t.map(i=>i.clone().multiplyScalar(.985)),16),"#fff6f0",Oe(0,1,0));for(let i=0;i<8;i++){let r=i/8*Math.PI*2;e.add(new yt(.035,6,5),"#ffffff",Oe(Math.cos(r)*1.08,1.02,Math.sin(r)*1.08)),e.add(new nt(.008,.008,1,4),"#cccccc",Oe(Math.cos(r)*.5,1.3,Math.sin(r)*.5,0,-r,Math.PI/2-.42))}e.add(new Bn(.03,.18,8),"#ffffff",Oe(0,1.58,0)),e.add(new nt(.018,.018,1.25,8),"#8a8f96",Oe(0,.5,0)),e.add(new wt(.07,.022,6,12,Math.PI),"#6b4a2e",Oe(.07,-.12,0,0,0,Math.PI)),e.add(new nt(.026,.026,.2,8),"#6b4a2e",Oe(0,-.02,0))})}function up(s="#e8913a"){let e="#c86f22";return Di(t=>{t.add(new Gs(.17,.32,6,12),s,Oe(0,.24,0,Math.PI/2,0,0));for(let i of[-.15,0,.15])t.add(new wt(.172,.018,4,16,Math.PI),e,Oe(0,.24,i,0,0,0));t.add(new yt(.17,18,14),s,Oe(0,.44,.3)),t.add(new yt(.09,12,10).scale(1,.7,.8),"#ffe9d2",Oe(0,.39,.42));for(let i of[-1,1]){t.add(new Bn(.06,.13,4),s,Oe(i*.09,.6,.28,0,0,-i*.25)),t.add(new Bn(.035,.08,4),"#f7b7a3",Oe(i*.09,.59,.3,0,0,-i*.25)),t.add(new yt(.03,8,6),"#2b2b1f",Oe(i*.065,.47,.44)),t.add(new yt(.06,8,6).scale(1,.6,1.3),s,Oe(i*.1,.06,.24));for(let r of[-.012,.012])t.add(new nt(.003,.003,.18,3),"#ffffff",Oe(i*.12,.4+r,.45,0,0,Math.PI/2+i*r*6))}t.add(new yt(.02,6,5),"#e88080",Oe(0,.42,.47));let n=new si([[0,.12,-.3],[.18,.08,-.38],[.3,.1,-.15],[.26,.14,.05]].map(i=>new E(...i)));t.add(new Ai(n,16,.04,6),s,Oe(0,0,0))})}var gu=new Mt,fp=new E,yu=new E,dp=new E,pp=new oe,mp=new E,Ha=class{constructor(e,t,n="female-a"){this.scene=e,this.world=t,this.pos=new E(0,1,0),this.fwd=new E(0,0,1),this.alt=0,this.speed=0,this.dropping=!1,this.onLand=null,this.umbOpen=0,this.root=new lt,e.add(this.root),this.umb=hp("#e2383f"),this.umb.visible=!1,this.setCharacter(n);let i=new pa(.5,24).rotateX(-Math.PI/2);this.shadow=new Ne(i,new Nt({color:1911322,transparent:!0,opacity:.22,depthWrite:!1})),e.add(this.shadow)}setCharacter(e){this.person&&this.root.remove(this.person.root),this.char=e,this.person=ts({char:e}),this.root.add(this.person.root),this.umb.removeFromParent(),this.umb.position.set(-.42,1.15,.05),this.root.add(this.umb)}place(e,t){this.pos.copy(e).normalize(),this.fwd.copy(t).addScaledVector(this.pos,-t.dot(this.pos)).normalize(),this.speed=0,this.sync()}placeAtSite(e,t){let[n,i,r]=t,o=e.east.clone().multiplyScalar(Math.sin(r)).addScaledVector(e.south,Math.cos(r));this.place(e.dirAt(n,i),o)}startDrop(e=22){this.alt=e,this.dropping=!0,this.speed=0}worldPos(e=new E){return e.copy(this.pos).multiplyScalar(ze+this.alt)}update(e,t,n){if(this.dropping)this.alt=Math.max(0,this.alt-e*(2.6+this.alt*.28)),this.alt<=0&&(this.dropping=!1,ka(this.person,"jump"),this.onLand?.());else if(t){let r=-t.x*2.6*e;r&&this.fwd.applyAxisAngle(this.pos,r);let o=t.y*(t.run?10:5.5);this.speed+=(o-this.speed)*Math.min(1,e*10),Math.abs(this.speed)>.01&&this.move(this.speed*e)}else this.speed*=.8;let i=this.dropping||n;if(this.umbOpen+=((i?1:0)-this.umbOpen)*Math.min(1,e*6),this.umb.visible=this.umbOpen>.03,this.umb.scale.setScalar(Math.max(.01,this.umbOpen)),Ni(this.person,e,Math.abs(this.speed),this.dropping?"fall":null),this.umbOpen>.03){let r=this.person.bones["arm-right"];r.rotation.set(r.rotation.x*(1-this.umbOpen),0,-2.6*this.umbOpen)}this.sync()}move(e){if(!this.tryMove(this.fwd,e)){for(let t of[.7,-.7,1.3,-1.3])if(dp.copy(this.fwd).applyAxisAngle(this.pos,t),this.tryMove(dp,e*Math.cos(t)))return;this.speed*=.5}}tryMove(e,t){return fp.crossVectors(this.pos,e).normalize(),gu.setFromAxisAngle(fp,t/ze),yu.copy(this.pos).applyQuaternion(gu),this.world.blocked(yu)&&!this.world.blocked(this.pos)?!1:(this.pos.copy(yu).normalize(),this.fwd.applyQuaternion(gu).addScaledVector(this.pos,-this.fwd.dot(this.pos)).normalize(),!0)}sync(){mp.crossVectors(this.pos,this.fwd),pp.makeBasis(mp,this.pos,this.fwd),this.root.quaternion.setFromRotationMatrix(pp),this.root.position.copy(this.pos).multiplyScalar(ze+this.alt),this.shadow.quaternion.copy(this.root.quaternion),this.shadow.position.copy(this.pos).multiplyScalar(ze+.04),this.shadow.material.opacity=.22*Math.max(.15,1-this.alt/20)}};var xu=new E,za=new E,or=new E,_u=new E,eo=new Mt,gp=new E,yp=new E,Va=class{constructor(e){this.cam=e,this.dist=9,this.curDist=9,this.lookUp=0,this.lookUpTarget=0,this.world=null,this.yaw=0,this.pitch=0,this.mode="map",this.mapDir=new E(0,.3,1).normalize(),this.mapUp=new E(0,1,0),this.mapDist=200,this.tween=null,this.look=new E,this.upv=new E(0,1,0),this.dragging=!1,this.autoSpin=0,e.position.copy(this.mapDir).multiplyScalar(this.mapDist)}zoom(e){this.mode==="map"?this.mapDist=xt.clamp(this.mapDist+e*.15,120,280):this.dist=xt.clamp(this.dist+e*.01,4.5,18)}drag(e,t){this.mode==="map"?this.rotateMap(e,t):(this.yaw-=e*.008,this.pitch=xt.clamp(this.pitch+t*.006,-.5,.9))}rotateMap(e,t){eo.setFromAxisAngle(this.mapUp,-e*.006),this.mapDir.applyQuaternion(eo),gp.crossVectors(this.mapDir,this.mapUp).normalize(),eo.setFromAxisAngle(gp,t*.006),this.mapDir.applyQuaternion(eo).normalize(),this.mapUp.applyQuaternion(eo),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize()}openMap(e,t){this.mode="map",this.mapDir.copy(e).normalize(),this.mapUp.copy(t).addScaledVector(this.mapDir,-t.dot(this.mapDir)).normalize()}flyTo(e,t,n){this.tween={from:this.mapDir.clone(),to:e.clone().normalize(),t:0,dur:t,done:n}}update(e,t){if(this.mode==="map"){if(this.tween){let r=this.tween;r.t=Math.min(1,r.t+e/r.dur);let o=r.t<.5?2*r.t*r.t:1-Math.pow(-2*r.t+2,2)/2;this.mapDir.copy(r.from).lerp(r.to,o).normalize(),this.mapUp.addScaledVector(this.mapDir,-this.mapUp.dot(this.mapDir)).normalize(),r.t>=1&&(this.tween=null,r.done?.())}else this.autoSpin&&this.rotateMap(this.autoSpin*e,0);xu.copy(this.mapDir).multiplyScalar(this.mapDist),za.set(0,0,0),or.copy(this.mapUp)}else{!this.dragging&&Math.abs(t.speed)>.5&&(this.yaw*=Math.exp(-e*1.5),this.pitch*=Math.exp(-e*1.5));let r=t.worldPos(za);or.copy(t.pos),_u.copy(t.fwd).negate().applyAxisAngle(or,this.yaw);let o=this.dist;if(this.world&&!t.dropping)for(let c=1;c<=10;c++){let l=o*c/10;if(yp.copy(t.pos).multiplyScalar(ze).addScaledVector(_u,l).normalize(),this.world.camBlocked(yp)){o=Math.max(2.6,l-.8);break}}this.curDist+=(o-this.curDist)*Math.min(1,e*(o<this.curDist?10:2)),this.lookUp+=(this.lookUpTarget-this.lookUp)*Math.min(1,e*1.5);let a=(1.4+this.curDist*(.26+this.pitch*.5))*(1-this.lookUp*.75);xu.copy(r).addScaledVector(or,a).addScaledVector(_u,this.curDist*(1-Math.max(0,this.pitch)*.35)),za.addScaledVector(or,1.4+this.lookUp*11)}let n=1-Math.exp(-e*(this.mode==="map"?3.2:6));this.cam.position.lerp(xu,n);let i=ze+.8;this.cam.position.length()<i&&this.cam.position.setLength(i),this.look.lerp(za,n),this.upv.lerp(or,n).normalize(),this.cam.up.copy(this.upv),this.cam.lookAt(this.look)}};var Ga=class{constructor(e,t,n){this.keys=new Set,this.pressed=new Set,this.joy={x:0,y:0},this.onDrag=null,this.onZoom=null,addEventListener("keydown",m=>{m.target.tagName!=="INPUT"&&(m.repeat||this.pressed.add(m.code),this.keys.add(m.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(m.code)&&m.preventDefault())}),addEventListener("keyup",m=>this.keys.delete(m.code)),addEventListener("blur",()=>this.keys.clear());let i=null,r=0,o=new Map,a=()=>{let[m,p]=[...o.values()];return Math.hypot(m.x-p.x,m.y-p.y)};e.addEventListener("pointerdown",m=>{o.set(m.pointerId,{x:m.clientX,y:m.clientY}),e.setPointerCapture(m.pointerId),o.size===2?(i=null,r=a()):o.size===1&&(i={id:m.pointerId,x:m.clientX,y:m.clientY},this.dragging=!0)}),e.addEventListener("pointermove",m=>{if(o.has(m.pointerId)){if(o.set(m.pointerId,{x:m.clientX,y:m.clientY}),o.size===2){let p=a();this.onZoom?.((r-p)*3),r=p;return}!i||i.id!==m.pointerId||(this.onDrag?.(m.clientX-i.x,m.clientY-i.y),i.x=m.clientX,i.y=m.clientY)}});let c=m=>{o.delete(m.pointerId),i&&i.id===m.pointerId&&(i=null),o.size||(this.dragging=!1)};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("wheel",m=>{m.preventDefault(),this.onZoom?.(m.deltaY)},{passive:!1});let l=null,h=0,u=0,f=46,d=(m,p)=>{n.style.transform=`translate(${m}px, ${p}px)`};t.addEventListener("pointerdown",m=>{m.preventDefault(),l=m.pointerId,t.setPointerCapture(l);let p=t.getBoundingClientRect();h=p.left+p.width/2,u=p.top+p.height/2,g(m)});let g=m=>{if(m.pointerId!==l)return;let p=m.clientX-h,v=m.clientY-u,_=Math.hypot(p,v);_>f&&(p*=f/_,v*=f/_),d(p,v),this.joy.x=p/f,this.joy.y=-v/f};t.addEventListener("pointermove",g);let y=m=>{m.pointerId===l&&(l=null,this.joy.x=this.joy.y=0,d(0,0))};t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y)}has(...e){return e.some(t=>this.keys.has(t))}axis(){let e=(this.has("KeyD","ArrowRight")?1:0)-(this.has("KeyA","ArrowLeft")?1:0),t=(this.has("KeyW","ArrowUp")?1:0)-(this.has("KeyS","ArrowDown")?1:0),n=Math.hypot(this.joy.x,this.joy.y);return n>.15&&(e+=this.joy.x*.8,t+=this.joy.y),{x:Math.max(-1,Math.min(1,e)),y:Math.max(-1,Math.min(1,t)),run:this.has("ShiftLeft","ShiftRight")||n>.92}}consume(...e){for(let t of e)if(this.pressed.has(t))return this.pressed.delete(t),t;return null}endFrame(){this.pressed.clear()}};var Wa=class{constructor(e){this.audio=e,this.el=document.getElementById("dlg"),this.nameEl=this.el.querySelector(".dlg-name"),this.textEl=this.el.querySelector(".dlg-text"),this.choicesEl=this.el.querySelector(".dlg-choices"),this.nextEl=this.el.querySelector(".dlg-next"),this.open=!1,this.typing=!1,this._res=null,this.el.addEventListener("pointerdown",t=>{t.target.closest("button")||this.advance()})}say(e,t){return this._show(e,t,null)}choose(e,t,n){return this._show(e,t,n)}_show(e,t,n){return this.open=!0,this.pendingHide=!1,this.el.classList.remove("hidden"),this.nameEl.textContent=e||"",this.nameEl.style.display=e?"":"none",this.choicesEl.innerHTML="",this.nextEl.style.visibility="hidden",this.opts=n,this.full=t,this.shown=0,this.typing=!0,this.blipT=0,new Promise(i=>{this._res=i})}update(e){!this.open||!this.typing||(this.shown+=e*55,this.blipT-=e,this.blipT<=0&&(this.audio.blip(),this.blipT=.09),this.shown>=this.full.length?this._doneTyping():this.textEl.textContent=this.full.slice(0,Math.floor(this.shown)))}_doneTyping(){this.typing=!1,this.textEl.textContent=this.full,this.opts?this.opts.forEach((e,t)=>{let n=document.createElement("button");n.textContent=`${t+1}. ${e}`,n.addEventListener("click",()=>this.pick(t)),this.choicesEl.appendChild(n)}):this.nextEl.style.visibility="visible"}advance(){if(this.open){if(this.typing){this._doneTyping();return}this.opts||this._finish(void 0)}}pick(e){!this.open||this.typing||!this.opts||e<0||e>=this.opts.length||(this.audio.blip(),this._finish(e))}_finish(e){let t=this._res;this._res=null,this.pendingHide=!0,setTimeout(()=>{this.pendingHide&&this.close()},0),t?.(e)}close(){this.open=!1,this.typing=!1,this.el.classList.add("hidden")}};var Ft=s=>document.getElementById(s),Xa=class{constructor(){this.hud=Ft("hud"),this.wallet=Ft("wallet"),this.clock=Ft("clock"),this.albumPill=Ft("albumPill"),this.toasts=Ft("toasts"),this.promptEl=Ft("prompt"),this.taskList=Ft("taskList"),this.taskCount=Ft("taskCount"),this.modalEl=Ft("modal"),this.modalBody=this.modalEl.querySelector(".modal-body"),this.fadeEl=Ft("fade"),this.flashEl=Ft("flash"),this.promptHit=!1,this.onTask=null,this.promptEl.addEventListener("pointerdown",e=>{e.preventDefault(),this.promptHit=!0}),this.modalEl.querySelector(".modal-x").addEventListener("click",()=>this.closeModal()),this.modalEl.addEventListener("pointerdown",e=>{e.target===this.modalEl&&this.closeModal()}),Ft("tasksHead").addEventListener("click",()=>Ft("tasks").classList.toggle("collapsed")),matchMedia("(max-width: 640px)").matches&&Ft("tasks").classList.add("collapsed")}loading(e,t){Ft("loading").querySelector("span").textContent=e,t!==void 0&&(Ft("loading").querySelector(".bar i").style.width=`${Math.round(t*100)}%`)}doneLoading(){Ft("loading").classList.add("hidden")}showHud(e){this.hud.classList.toggle("hidden",!e)}setMoney(e,t=!1){this.wallet.textContent=`\u{1F4B0} $${e}`,t&&(this.wallet.classList.remove("bump"),this.wallet.offsetWidth,this.wallet.classList.add("bump"))}setClock(e,t,n){let i=Math.floor(e),r=Math.floor((e-i)*60/15)*15,o=n?"\u{1F327}\uFE0F":t?"\u{1F319}":e<7.5||e>18?"\u{1F305}":"\u2600\uFE0F",a=(i+11)%12+1;this.clock.textContent=`${o} ${a}:${String(r).padStart(2,"0")}${i<12?"am":"pm"}`}setAlbum(e,t){this.albumPill.textContent=`\u{1F37D}\uFE0F ${e}/${t}`}toast(e,t=2800){let n=document.createElement("div");for(n.className="toast",n.textContent=e,this.toasts.appendChild(n);this.toasts.children.length>3;)this.toasts.firstChild.remove();setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+500)}prompt(e){e?(this.promptEl.dataset.label!==e&&(this.promptEl.dataset.label=e,this.promptEl.innerHTML=`<kbd>E</kbd> ${e}`),this.promptEl.classList.remove("hidden")):(this.promptEl.classList.add("hidden"),this.promptHit=!1)}takePromptHit(){let e=this.promptHit;return this.promptHit=!1,e}renderTasks(e){let t=e.filter(n=>!n.hidden);this.taskCount.textContent=`${t.filter(n=>n.done).length}/${t.length}`,this.taskList.innerHTML="";for(let n of e){let i=document.createElement("li");i.className=(n.done?"done ":"")+(n.hidden?"hidden-task":""),i.innerHTML=`<div class="t-title">${n.done?"\u2705":"\u2B1C"} ${n.title}</div>${n.done||!n.hint?"":`<div class="t-hint">${n.hint}</div>`}`,!n.done&&n.site&&i.addEventListener("click",()=>this.onTask?.(n)),this.taskList.appendChild(i)}}modal(e,t=""){return this.modalBody.innerHTML=e,this.modalEl.className=t,this.modalEl.classList.remove("hidden"),this.isModal=!0,this.modalBody}closeModal(){this.modalEl.classList.add("hidden"),this.isModal=!1,this.onModalClose?.(),this.onModalClose=null}fade(e,t=600){return this.fadeEl.style.transitionDuration=`${t}ms`,this.fadeEl.style.opacity=e,this.fadeEl.style.pointerEvents=e>0?"auto":"none",new Promise(n=>setTimeout(n,t))}flash(){this.flashEl.classList.remove("go"),this.flashEl.offsetWidth,this.flashEl.classList.add("go")}};var vu="sgplanet.save.v1";function Mu(){return{money:Ld,flags:{},foods:{},coins:{},time:.1,pos:null,settings:{music:!0,sfx:!0,rain:!0}}}var qa=class{constructor(){this.data=Mu(),this.exists=!1;try{let e=localStorage.getItem(vu);if(e){let t=JSON.parse(e);this.data={...Mu(),...t,settings:{...Mu().settings,...t.settings||{}}},this.exists=!0}}catch{}}write(){try{localStorage.setItem(vu,JSON.stringify(this.data))}catch{}}reset(){try{localStorage.removeItem(vu)}catch{}location.reload()}};var ar=s=>261.63*Math.pow(2,s/12),v1=[[0,"M"],[-3,"m"],[-7,"M"],[-5,"M"]],xp=[0,2,4,7,9,12,14,16];function _p(s){let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}var Ya=class{constructor(e){this.settings=e,this.ctx=null,this.night=0}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.9,this.master.connect(t.destination),this.mus=t.createGain(),this.mus.gain.value=this.settings.music?.16:0,this.mus.connect(this.master),this.fx=t.createGain(),this.fx.gain.value=this.settings.sfx?.5:0,this.fx.connect(this.master);let n=t.sampleRate*2,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let c=0;c<n;c++)r[c]=Math.random()*2-1;let o=t.createBufferSource();o.buffer=i,o.loop=!0;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1200,this.rain=t.createGain(),this.rain.gain.value=0,o.connect(a).connect(this.rain).connect(this.fx),o.start(),this.step=0,this.next=t.currentTime+.3,setInterval(()=>this.schedule(),120)}this.ctx.resume?.()}setMusic(e){this.settings.music=e,this.ctx&&this.mus.gain.setTargetAtTime(e?.16:0,this.ctx.currentTime,.2)}setSfx(e){this.settings.sfx=e,this.ctx&&this.fx.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.1)}setRain(e){this.ctx&&this.rain.gain.setTargetAtTime(e*.22,this.ctx.currentTime,.5)}tone(e,t,n,i="sine",r=.2,o=this.fx,a=0){let c=this.ctx,l=c.createOscillator(),h=c.createGain();l.type=i,l.frequency.setValueAtTime(e,t),a&&l.frequency.exponentialRampToValueAtTime(a,t+n),h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(r,t+.012),h.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(h).connect(o),l.start(t),l.stop(t+n+.05)}schedule(){if(!this.ctx||this.ctx.state!=="running")return;let e=60/92/2;for(;this.next<this.ctx.currentTime+.5;)this.playStep(this.step,this.next),this.step++,this.next+=e}playStep(e,t){let n=Math.floor(e/8)%4,i=e%8,[r,o]=v1[n],a=o==="M"?4:3;if((i===0||i===4)&&this.tone(ar(r-12),t,.5,"triangle",.32,this.mus),i===0)for(let l of[0,a,7])this.tone(ar(r+l),t,1.7,"sine",.05,this.mus);if(_p(e%32)<(this.night>.5?.3:.5)){let l=xp[Math.floor(_p(e%32+99)*xp.length)];this.tone(ar(l+12),t,.3,this.night>.5?"sine":"triangle",.1,this.mus)}}now(){return this.ctx?this.ctx.currentTime:0}blip(){this.ctx&&this.tone(620+Math.random()*120,this.now(),.05,"triangle",.08)}coin(){if(!this.ctx)return;let e=this.now();this.tone(988,e,.08,"square",.1),this.tone(1319,e+.07,.2,"square",.1)}success(){if(!this.ctx)return;let e=this.now();[0,4,7,12].forEach((t,n)=>this.tone(ar(t+12),e+n*.09,.4,"triangle",.18))}buy(){if(!this.ctx)return;let e=this.now();this.tone(ar(19),e,.12,"triangle",.14),this.tone(ar(24),e+.1,.25,"triangle",.14)}meow(){this.ctx&&this.tone(780,this.now(),.45,"sine",.18,this.fx,480)}shutter(){if(!this.ctx)return;let e=this.now();this.tone(2400,e,.04,"square",.12),this.tone(1200,e+.06,.06,"square",.1)}whoosh(){this.ctx&&this.tone(300,this.now(),.6,"sine",.12,this.fx,900)}pop(){this.ctx&&this.tone(200+Math.random()*300,this.now(),.25,"triangle",.12,this.fx,60)}};var M1=Math.cos(1.3/ze),$a=class{constructor(e,t,n,i){this.save=n,this.onPick=i,this.items=[],this.total=t.length;let r=new nt(.42,.42,.1,18).rotateX(Math.PI/2),o=new oe;for(let a of t){if(n.data.coins[a.id])continue;let c=new lt,l=js(a.dir);o.makeBasis(l.east,l.up,l.south).setPosition(a.dir.clone().multiplyScalar(ze)),o.decompose(c.position,c.quaternion,c.scale);let h=tr(r,"#ffc93a",.04),u=tr(new At(.22,.22,.14),"#ffe58a",0);u.rotation.z=Math.PI/4,h.add(u),h.position.y=1,c.add(h),e.add(c),this.items.push({id:a.id,dir:a.dir,grp:c,coin:h,ph:Math.random()*6})}}get found(){return Object.keys(this.save.data.coins).length}update(e,t,n){for(let i=this.items.length-1;i>=0;i--){let r=this.items[i];r.coin.rotation.y+=e*2.5,r.coin.position.y=1+Math.sin(t*3+r.ph)*.12,n.alt<1.5&&n.pos.dot(r.dir)>M1&&(r.grp.removeFromParent(),this.items.splice(i,1),this.save.data.coins[r.id]=1,this.onPick(r))}}};var Ka=class{constructor(e,t,n){this.scene=e,this.world=t,this.player=n,this.list=[],this.walkers=[]}add(e,t,n,i,r,o={}){let[a,c,l]=t,h=ts(n);e.put(h.root,a,c,l,n.y||0),this.scene.add(h.root),e.solidCircle(a,c,.35);let u={site:e,x:a,z:c,rot:l,person:h,name:i,talking:!1};return this.world.addAct({dir:e.dirAt(a,c),r:o.r||2.8,label:o.label||`Talk to ${i}`,show:o.show,run:async()=>{let[f,d]=e.toLocal(this.player.pos);n.base||e.put(h.root,a,c,Math.atan2(f-a,d-c),n.y||0),u.talking=!0;try{await r(u)}finally{u.talking=!1,e.put(h.root,a,c,l,n.y||0)}}}),this.list.push(u),u}cheer(e){ka(e.person,"emote-yes")}walker(e,t,n,i,r=1.3){let o=ts(t);this.scene.add(o.root);let a=Math.hypot(i[0]-n[0],i[1]-n[1]);this.walkers.push({site:e,person:o,a:n,b:i,len:a,s:Math.random(),dirn:1,speed:r,pause:0})}update(e){for(let t of this.list)Ni(t.person,e,0,t.talking&&!t.person.base?"interact-right":null);for(let t of this.walkers){if(t.pause>0){t.pause-=e,Ni(t.person,e,0);continue}t.s+=t.dirn*t.speed*e/t.len,(t.s>1||t.s<0)&&(t.s=Math.min(1,Math.max(0,t.s)),t.dirn*=-1,t.pause=1+Math.random()*2);let n=t.a[0]+(t.b[0]-t.a[0])*t.s,i=t.a[1]+(t.b[1]-t.a[1])*t.s,r=Math.atan2((t.b[0]-t.a[0])*t.dirn,(t.b[1]-t.a[1])*t.dirn);t.site.put(t.person.root,n,i,r),Ni(t.person,e,t.speed)}}};var cr=new E,bu=new E,Za=class{constructor(e){this.G=e,this.root=document.getElementById("labels"),this.hint=document.getElementById("mapHint"),this.open=!1,this.labels=e.siteList.map(t=>{let n=document.createElement("button");return n.className="map-label",n.innerHTML=`<span class="ml-icon">${t.def.icon}</span><span class="ml-name">${t.def.name}</span><span class="ml-badge">!</span>`,n.addEventListener("click",()=>e.travel(t)),this.root.appendChild(n),{site:t,el:n}}),this.me=document.createElement("div"),this.me.className="map-me",this.me.textContent="You are here",this.root.appendChild(this.me)}show(e,t=null){let{rig:n,player:i}=this.G;this.open=e,this.root.classList.toggle("show",e),this.hint.classList.toggle("hidden",!e),e?(n.openMap(i.pos,i.fwd),t&&n.flyTo(t.center,.9),this.focus=t?.id||null):(n.mode="follow",n.tween=null)}update(e){if(!this.open&&!this.G.titleOpen)return;let t=this.G.camera;bu.copy(t.position).normalize();let n=innerWidth,i=innerHeight;for(let a of this.labels){let c=a.site.center.dot(bu);cr.copy(a.site.center).multiplyScalar(ze+4).project(t);let l=c>.15&&this.open;a.el.style.display=l?"":"none",l&&(a.el.style.transform=`translate(${(cr.x*.5+.5)*n}px, ${(-cr.y*.5+.5)*i}px) translate(-50%, -100%)`,a.el.style.opacity=Math.min(1,(c-.15)*4),a.el.classList.toggle("active",e.has(a.site.id)),a.el.classList.toggle("focus",this.focus===a.site.id))}let r=this.G.player.pos.dot(bu),o=this.open&&r>.1;this.me.style.display=o?"":"none",o&&(cr.copy(this.G.player.pos).multiplyScalar(ze+1).project(t),this.me.style.transform=`translate(${(cr.x*.5+.5)*n}px, ${(-cr.y*.5+.5)*i}px) translate(-50%, -50%)`)}};var vp=["#ff5a5f","#ffd23f","#3ec1d3","#ff8fd8","#9cff6b","#ffffff"],Mp=new E,Ja=new E,ja=class{constructor(e){this.scene=e,this.bursts=[],this.fw=0,this.fwTimer=0,this.onBang=null}burst(e,t,n,i=90,r=7,o=1.6,a=.4){let c=new Float32Array(i*3),l=[];for(let d=0;d<i;d++)c.set([e.x,e.y,e.z],d*3),l.push(new E().randomDirection().multiplyScalar(r*(.55+Math.random()*.45)));let h=new ot;h.setAttribute("position",new et(c,3));let u=new hn({color:n,size:a,transparent:!0,depthWrite:!1,blending:Go}),f=new yn(h,u);f.frustumCulled=!1,this.scene.add(f),this.bursts.push({pts:f,vel:l,up:t.clone(),t:0,life:o})}fireworks(e){this.fw=e,this.fwTimer=0}update(e,t){for(let n=this.bursts.length-1;n>=0;n--){let i=this.bursts[n];i.t+=e;let r=i.pts.geometry.attributes.position;for(let o=0;o<i.vel.length;o++){let a=i.vel[o];a.addScaledVector(i.up,-3*e).multiplyScalar(1-e*1.2),r.array[o*3]+=a.x*e,r.array[o*3+1]+=a.y*e,r.array[o*3+2]+=a.z*e}r.needsUpdate=!0,i.pts.material.opacity=Math.max(0,1-i.t/i.life),i.t>i.life&&(i.pts.removeFromParent(),i.pts.geometry.dispose(),i.pts.material.dispose(),this.bursts.splice(n,1))}this.fw>0&&(this.fw-=e,this.fwTimer-=e,this.fwTimer<=0&&(this.fwTimer=.3+Math.random()*.45,Ja.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).addScaledVector(t.pos,-0).normalize(),Ja.addScaledVector(t.pos,-Ja.dot(t.pos)).normalize(),Mp.copy(t.pos).multiplyScalar(ze+16+Math.random()*8).addScaledVector(Ja,4+Math.random()*10).addScaledVector(t.fwd,10),this.burst(Mp,t.pos,vp[Math.random()*vp.length|0],120,9,1.9,.6),this.onBang?.()))}};var bp=.5,ns=new E,lr=new E,Qa=new E,wu=new oe,Su=new E;function b1(){let n=Di(i=>{let r=(o,a,c,l,h,u,f,d,g)=>i.add(new nr(o,a,c,3,l),h,Oe(u,f,d),0,g);r(2.5,3.75,10.2,.32,"#f4f4f0",0,2.425,0),r(2.52,1.6,10.219999999999999,.3,"#3fae49",0,3.5,0),r(2.52,.35,10.219999999999999,.12,"#3fae49",0,.75,0),r(2.53,.9,9,.08,"#24323d",0,3.25,-.2,"win"),r(2.53,.85,6.999999999999999,.08,"#24323d",0,1.85,-1.2,"win"),r(2.2,2.4,.05,.05,"#2c3a45",0,2.55,5.109999999999999,"win"),r(1.6,.32,.06,.04,"#ffb347",0,3.98,5.119999999999999,"win"),r(.9,1.9,.06,.05,"#2c3a45",1.26,1.55,3.3,"win");for(let o of[-.85,.85])i.add(new nt(.16,.16,.06,12),"#fff6c8",Oe(o,.95,5.119999999999999,Math.PI/2,0,0),0,"win");for(let o of[-1,1])i.add(new At(.06,.5,.3),"#222",Oe(o*1.37,2.6,4.699999999999999));for(let o of[-3.3,3.1])for(let a of[-1,1])i.add(new nt(.52,.52,.34,18),"#1e1e24",Oe(a*1.05,.52,o,0,0,Math.PI/2)),i.add(new nt(.28,.28,.36,12),"#b9c0c6",Oe(a*1.05,.52,o,0,0,Math.PI/2))});return n.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0)}),n}function w1(s){let e=new lt,t=Pa(s);Jr(s,{w:3.6}).mat.decompose(t.position,t.quaternion,t.scale),e.add(t);let n=[];return t.traverse(i=>{/^wheel/.test(i.name)&&n.push(i)}),{mesh:e,wheels:n}}var ec=class{constructor(e,t,n){this.path=t,this.player=n,this.cars=[];let i=t.length,r=[["bus",1],["taxi",1],["sedan",1],["suv",-1],["taxi",-1],["van",1],["bus",-1],["delivery",-1],["hatchback-sports",1],["police",-1]];r.forEach(([o,a],c)=>{let l=o==="bus"?{mesh:b1(),wheels:[]}:w1(o);e.add(l.mesh),this.cars.push({...l,kind:o,dir:a,s:c/r.length*i,v:0,top:o==="bus"?6.5:8+Math.random()*2,len:o==="bus"?5.5:2.2})})}update(e){let t=this.path.length;for(let n of this.cars){let i=Math.floor(n.s)%t,r=n.s-Math.floor(n.s);ns.copy(this.path[i]).lerp(this.path[(i+1)%t],r).normalize(),lr.copy(this.path[(i+3)%t]).sub(this.path[(i-3+t)%t]).multiplyScalar(n.dir),lr.addScaledVector(ns,-lr.dot(ns)).normalize(),Qa.crossVectors(ns,lr),Su.copy(this.player.pos).sub(ns).multiplyScalar(ze);let o=Su.dot(lr),a=Su.dot(Qa)-1.15,c=this.player.alt<2&&o>0&&o<n.len+3.5&&Math.abs(a)<1.6;for(let h of this.cars){if(h===n||h.dir!==n.dir)continue;let u=((h.s-n.s)*n.dir+t)%t*bp;u>0&&u<n.len+h.len+2&&(c=!0)}let l=c?0:n.top;n.v+=(l-n.v)*Math.min(1,e*(c?5:.8)),n.s=(n.s+n.dir*n.v*e/bp+t)%t;for(let h of n.wheels)h.rotation.x+=n.v*e/.35;wu.makeBasis(Qa,ns,lr),wu.setPosition(ns.clone().multiplyScalar(ze).addScaledVector(Qa,1.15)),wu.decompose(n.mesh.position,n.mesh.quaternion,n.mesh.scale)}}};var to=[{id:"kaya",name:"Kaya Toast",icon:"\u{1F35E}",where:"HDB kopitiam",desc:"Toast with coconut-egg jam and a slab of cold butter."},{id:"kopi",name:"Kopi-O",icon:"\u2615",where:"HDB kopitiam",desc:'Black coffee with sugar. Add "kosong" for no sugar.'},{id:"prata",name:"Roti Prata",icon:"\u{1F95E}",where:"HDB kopitiam",desc:"Crispy, fluffy flatbread with curry for dipping."},{id:"chicken",name:"Chicken Rice",icon:"\u{1F357}",where:"Lau Pa Sat",desc:"Poached chicken, fragrant rice, chilli and ginger."},{id:"kachang",name:"Ice Kachang",icon:"\u{1F367}",where:"Lau Pa Sat",desc:"A shaved-ice mountain with syrup, red beans and corn."},{id:"satay",name:"Satay",icon:"\u{1F362}",where:"Satay Street (night)",desc:"Grilled skewers with peanut sauce. Only after dark!"},{id:"laksa",name:"Laksa",icon:"\u{1F35C}",where:"Chinatown",desc:"Spicy coconut curry noodles with cockles and tau pok."},{id:"crab",name:"Chilli Crab",icon:"\u{1F980}",where:"Marina Bay",desc:"Sweet, spicy, eggy gravy. Mop it up with fried mantou."},{id:"icecream",name:"Ice Cream Sandwich",icon:"\u{1F366}",where:"Sentosa",desc:"A brick of ice cream wrapped in rainbow bread. $1!"}],S1=["q_kopi","q_chope","q_photo","q_card","q_show"],Eu=["hdb","chinatown","sentosa"],E1=["Oyen ran off towards Chinatown. Check the five-foot way!","Oyen hopped on a bus to the beach\u2026 try Sentosa."],wp=["Aiyo, not enough money leh. Go pick up some coins first. Got many lying around the roads!","Wah, your wallet very light today. Come back when you got more coins, OK?"],fi=s=>s[Math.random()*s.length|0],qt={mei:{char:"female-c",hat:{type:"bun",color:"#8a8584"}},ravi:{char:"male-d",hat:{type:"cap",color:"#ffffff"}},huat:{char:"male-e",base:"sit",y:.05},siti:{char:"female-d",hat:{type:"police",color:"#1f3157"}},tissue:{char:"female-f",hat:{type:"bun",color:"#9a9a9a"}},tan:{char:"male-f",hat:{type:"cap",color:"#f3b33d"}},kachang:{char:"female-b"},boon:{char:"male-c",hat:{type:"cap",color:"#e8735a"}},ali:{char:"male-b",hat:{type:"songkok",color:"#1d1d22"}},laksa:{char:"female-e",hat:{type:"bun",color:"#3a2a20"}},lim:{char:"male-e",hat:{type:"straw",color:"#e8cf8a"}},kenji:{char:"male-a",hat:{type:"bucket",color:"#f1e3c2"}},crab:{char:"female-a",hat:{type:"bun",color:"#2b2220"}},priya:{char:"female-b",hat:{type:"cap",color:"#4c8f6a"}},icecream:{char:"male-c",hat:{type:"straw",color:"#e8cf8a"}},raj:{char:"male-d",hat:{type:"cap",color:"#e2383f"}}},T1={kaya:"bread",kopi:"cup-coffee",prata:"pancakes",chicken:"rice-ball",kachang:"ice-cream-cup",satay:"skewer",laksa:"bowl-soup",crab:"pot-stew",icecream:"popsicle"};function Sp(s){let{dlg:e,sites:t,world:n}=s,i={add:(D,N,W,B,J,G)=>s.npcs.add(D,N,W,B,async ae=>{h=ae;try{await J(ae)}finally{h=null}},G),cheer:D=>s.npcs.cheer(D)},r=(D,N)=>e.say(D,N),o=(D,N,W)=>e.choose(D,N,W),a=D=>s.has(D),c=(D,N,W)=>{W&&i.cheer(W),s.set(D),s.audio.success(),s.ui.toast(`\u2705 Task complete: ${N}`,3500),s.fx.burst(s.player.worldPos().addScaledVector(s.player.pos,2),s.player.pos,"#ffd23f",70,5,1.2,.35),s.refresh(),s.checkFinale()},l=async(D,N,...W)=>s.pay(N)?(s.audio.buy(),W.forEach(B=>s.addFood(B)),h&&W.forEach((B,J)=>f(h,B,J)),!0):(await r(D,fi(wp)),!1),h=null,u=new Set,f=(D,N,W)=>{let B=T1[N];if(!B||u.has(N))return;u.add(N);let J=D.site,[G,ae]=J.toLocal(s.player.pos),ue=G-D.x,_e=ae-D.z,Ue=Math.hypot(ue,_e)||1,Ye=Math.min(1,Ue*.45);J.spawn(B,D.x+ue/Ue*Ye+W*.35,D.z+_e/Ue*Ye,{h:N==="satay"?.12:.28,center:!0,y:1.08,rot:Math.random()*6})},d=t.hdb;i.add(d,d.spots.auntie,qt.mei,"Auntie Mei",async D=>{if(a("q_kopi")){await r("Auntie Mei",fi(["Kopi-C is with evaporated milk. Kopi-peng got ice. Teh tarik is pulled tea, very frothy one!","Come back tomorrow morning ah, I save you the window seat.","Aiyo, so hot today. Drink more water, OK?"]));return}await r("Auntie Mei","Morning ah! First time here? Come, come, sit. Before you order, Auntie quiz you a bit.");let N=await o("Auntie Mei",'"Kopi-O" means coffee with\u2026?',["Sugar, no milk","Condensed milk","No sugar, no milk"]);if(N===0?await r("Auntie Mei","Wah, steady lah! You know your kopi."):N===1?await r("Auntie Mei",'Aiyo, that one is just "kopi"! Kopi-O is with sugar but no milk. Never mind, now you know.'):await r("Auntie Mei",'That one is "kopi-O kosong". Kosong means zero! Kopi-O still got sugar, OK?'),await o("Auntie Mei","So, kaya toast set? Kaya toast, two soft-boiled eggs and one kopi-O. $3 only.",["One set, please! ($3)","Maybe later"])!==0){await r("Auntie Mei","OK, OK. Auntie here whole day one.");return}await l("Auntie Mei",3,"kaya","kopi")&&(await r("Auntie Mei","Here you go! Crack the eggs, add dark soy sauce and pepper, then dip the toast inside. Shiok right?"),c("q_kopi","Kopi & Kaya Toast",D))}),i.add(d,d.spots.prata,qt.ravi,"Ravi",async()=>{if(a("f_prata")){await r("Ravi","Next time try egg prata or prata bomb. Very nice one!");return}if(await o("Ravi","Hello boss! Roti prata, fresh from the griddle. Kosong with curry, $2. You want?",["Yes please! ($2)","No thanks"])!==0){await r("Ravi","No problem! I flip until you hungry.");return}await l("Ravi",2,"prata")&&(s.set("f_prata"),await r("Ravi","Crispy outside, fluffy inside. Dip in the fish curry!"))}),i.add(d,d.spots.uncle,qt.huat,"Uncle Ah Huat",async()=>{await r("Uncle Ah Huat",fi(["Eh, young one! The Garden Rhapsody at the Supertrees is only at night. Very nice lights, I bring my grandson last week.","Last time this whole place was kampong, you know? Now got HDB, got MRT, got everything already.","You see the orange cat? That one is Oyen. Always sleeping at the void deck, then disappear.","Lau Pa Sat got Satay Street at night. The satay there, wah, shiok!","Low crime doesn't mean no crime. If you find something, bring it to the police post, OK?"]))}),i.add(d,d.spots.officer,qt.siti,"Officer Siti",async D=>{if(a("card")&&!a("q_card")){await r("Officer Siti","An EZ-Link card? You found it in Chinatown? Let me check\u2026 Yes, the owner reported it this morning!"),await r("Officer Siti","Thank you for being so honest. The owner wanted you to have this as a thank-you."),s.give(5),s.ui.toast("\u{1F4B5} You received $5!"),c("q_card","Lost EZ-Link Card",D);return}await r("Officer Siti",fi(["Hello! This is the Neighbourhood Police Post. Remember: low crime doesn't mean no crime!","If you find anything lost, bring it here, OK?","Walk on the pavement and use the zebra crossing ah. The buses here very fast."]))});let g=t.hawker;i.add(g,g.spots.tissue,qt.tissue,"Tissue Auntie",async()=>{if(a("tissue")){await r("Tissue Auntie","Use the tissue to chope a table, then can go order. Nobody will take your seat one!");return}if(await r("Tissue Auntie","Tissue? Tissue? Three packets, one dollar!"),await o("Tissue Auntie","You know how to chope a seat? Just put one tissue packet on the table, then it's yours.",["Buy tissue ($1)","No thanks"])===0){if(!s.pay(1)){await r("Tissue Auntie",fi(wp));return}s.audio.buy(),s.set("tissue"),s.ui.toast("\u{1F9FB} Got tissue packets. Now chope a table!"),await r("Tissue Auntie","Thank you ah! Go chope a table quickly. Lunch crowd coming!")}}),i.add(g,g.spots.uncleTan,qt.tan,"Uncle Tan",async D=>{if(a("q_chope")){await r("Uncle Tan",fi(["Chicken rice good or not? Come again tomorrow!","My chilli secret recipe one. Cannot tell you."]));return}if(!a("choped")){await r("Uncle Tan","Wah, lunch crowd coming already! Chope a seat first, then come back and order."),a("tissue")||await r("Uncle Tan","No tissue? The auntie at the entrance selling.");return}let N=await o("Uncle Tan","Seat choped already? Good! One plate chicken rice, roasted or steamed? $4.",["Steamed, please! ($4)","Roasted, please! ($4)","Later"]);N!==2&&await l("Uncle Tan",4,"chicken")&&(await r("Uncle Tan",N===0?"Steamed one, silky smooth! Add the chilli and ginger, very shiok.":"Roasted one, skin very crispy! Add some dark soy sauce."),await r("Uncle Tan","Go and makan at your table. Enjoy!"),c("q_chope","Chope a Table",D))}),i.add(g,g.spots.kachang,qt.kachang,"Auntie Lan",async()=>{if(a("f_kachang")){await r("Auntie Lan","Eat fast before it melt!");return}await o("Auntie Lan","Ice kachang! Shaved ice, rose syrup, red bean, attap chee, corn, gula melaka on top. $2. Want?",["Yes! ($2)","Later"])===0&&await l("Auntie Lan",2,"kachang")&&(s.set("f_kachang"),await r("Auntie Lan","Big mountain for you!"))}),i.add(g,g.spots.ckt,qt.boon,"Uncle Boon",async()=>{await r("Uncle Boon",fi(["Char kway teow sold out already lah! Come earlier tomorrow.","The secret is wok hei, the breath of the wok. Must cook on very hot fire."]))}),i.add(g,g.spots.satay,qt.ali,"Encik Ali",async()=>{if(!s.isNight()){await r("Encik Ali","Satay Street only open at night lah! Come back after 7pm, I fire up the grill.");return}if(a("f_satay")){await r("Encik Ali","Terima kasih! Thank you, come again!");return}await o("Encik Ali","Satay! Chicken, mutton, beef. Ten sticks with ketupat and peanut sauce, $5.",["Ten sticks! ($5)","Later"])===0&&await l("Encik Ali",5,"satay")&&(s.set("f_satay"),await r("Encik Ali","Dip properly in the peanut sauce ah. Sedap!"))});let y=g.dirAt(...g.spots.chopeTable),m=tr(new At(.32,.08,.22),"#ffffff",.02);g.put(m,g.spots.chopeTable[0]+.2,g.spots.chopeTable[1],.4,.82),m.visible=a("choped"),s.scene.add(m),n.addAct({dir:y,r:2,label:"Chope this table",show:()=>!a("choped")&&!a("q_chope"),run:async()=>{if(!a("tissue")){await r("","You need something to chope the table with\u2026 The tissue auntie near the entrance might help.");return}s.set("choped"),m.visible=!0,s.audio.pop(),await r("","You place a tissue packet on the table. Choped! Now it's yours. Go order from Uncle Tan."),s.refresh()}});let p=t.chinatown;i.add(p,p.spots.laksa,qt.laksa,"Auntie Rosie",async()=>{if(a("f_laksa")){await r("Auntie Rosie","Spicy or not? Drink some water!");return}let D=await o("Auntie Rosie","Laksa! Thick coconut curry, cockles, prawns, tau pok. Very shiok. $4.",["One bowl! ($4)","Too spicy for me"]);D===0&&await l("Auntie Rosie",4,"laksa")?(s.set("f_laksa"),await r("Auntie Rosie","Use the spoon only, no need chopsticks. The noodles cut short already!")):D===1&&await r("Auntie Rosie","Can ask for less chilli one, don't worry!")}),i.add(p,p.spots.lim,qt.lim,"Uncle Lim",async()=>{await r("Uncle Lim",fi(['Chinatown in Chinese is "Niu Che Shui". It means bullock cart water. Last time they used carts to bring water here!','These shophouses got the "five-foot way" in front. Shelter from sun and rain. Very clever, right?',"The temple there keeps a relic of the Buddha. Very peaceful inside, go and see.","During Chinese New Year, this whole street full of lanterns. Even more than now!"]))});let v=tr(new At(.42,.04,.28),"#2f8fd8",.02);p.put(v,p.spots.card[0],p.spots.card[1],.5,.03),v.visible=!a("card"),s.scene.add(v),n.addAct({dir:p.dirAt(...p.spots.card),r:1.8,label:"Pick up the card",show:()=>!a("card"),run:async()=>{s.set("card"),v.visible=!1,s.audio.pop(),await r("","It's an EZ-Link card! Someone must have dropped it on the way to the MRT."),await r("","You should hand it in at the Neighbourhood Police Post in the HDB estate."),s.refresh()}});let _=t.marina;i.add(_,_.spots.kenji,qt.kenji,"Kenji",async()=>{if(a("q_photo")){await r("Kenji","Arigatou! My family will love the photo. Next I go to Sentosa!");return}if(!a("photoAsk")){await r("Kenji","Excuse me! I am visiting from Japan. Could you help me take a photo of the Merlion?"),await r("Kenji","The best angle is from the \u{1F4F7} spot on the promenade. Please, take it from there!"),s.set("photoAsk"),s.refresh();return}await r("Kenji","The \u{1F4F7} spot is the yellow circle on the promenade, near the Merlion!")}),i.add(_,_.spots.crab,qt.crab,"Auntie Bee",async()=>{if(a("f_crab")){await r("Auntie Bee","Don't waste the gravy! Mop it all up.");return}let D=await o("Auntie Bee","Chilli crab, Singapore's famous one! Comes with fried mantou buns. $12.",["Treat myself! ($12)","Too expensive"]);D===0&&await l("Auntie Bee",12,"crab")?(s.set("f_crab"),await r("Auntie Bee","Use your hands, no shy! Very messy but very shiok.")):D===1&&await r("Auntie Bee","Collect more coins and come back! Worth it, I promise.")}),n.addAct({dir:_.dirAt(..._.spots.photo),r:1.6,label:"Take a photo \u{1F4F7}",show:()=>a("photoAsk")&&!a("q_photo"),run:async()=>{let D=s.photo();s.audio.shutter(),s.ui.flash(),s.ui.modal(`<h2>\u{1F4F8} Merlion, Marina Bay</h2><img class="photo" src="${D}" alt="Photo of the Merlion"><p>Kenji sent you $5 by PayNow. Thanks!</p>`),await new Promise(N=>{s.ui.onModalClose=N}),s.give(5),c("q_photo","Merlion Photo")}});let x=t.gardens;i.add(x,x.spots.priya,qt.priya,"Priya",async()=>{if(a("q_show")){await r("Priya","Wasn't the Garden Rhapsody beautiful? The Supertrees are vertical gardens, with over 160,000 plants!");return}if(s.isNight()){await r("Priya","The Garden Rhapsody is on! Go stand in the middle of the grove and look up.");return}await r("Priya","Welcome to Gardens by the Bay! The Supertrees collect rainwater and some of them even make solar power."),await o("Priya","The Garden Rhapsody light show starts at 7:45pm. Want to wait for it?",["Wait until the show","I'll come back later"])===0&&(await s.ui.fade(1,700),s.time=(19.75-6)/24,await new Promise(N=>setTimeout(N,400)),await s.ui.fade(0,700),await r("Priya","It's starting! Go stand under the Supertrees."))});let P=x.dirAt(...x.spots.grove),R=Math.cos(13/ze),C=0,T=!1;s.env.show=!1;let w=t.sentosa;i.add(w,w.spots.icecream,qt.icecream,"Ice Cream Uncle",async()=>{if(a("f_icecream")){await r("Ice Cream Uncle","Eat fast, the sun very strong. Later melt!");return}await o("Ice Cream Uncle","Ice cream! Wrapped in rainbow bread or wafer. Durian, sweet corn, yam\u2026 $1 only!",["Rainbow bread, please! ($1)","No thanks"])===0&&await l("Ice Cream Uncle",1,"icecream")&&(s.set("f_icecream"),await r("Ice Cream Uncle","Here! Rainbow bread and a big brick of ice cream. Sedap!"))}),i.add(w,w.spots.raj,qt.raj,"Lifeguard Raj",async()=>{await r("Lifeguard Raj",fi(["Swim between the flags ah! And remember to put on sunblock.","Best view of the sunset is from the bench at Sunset Point. Come around 7pm.","Sometimes got an orange cat sleeping under the palm trees. Don't know how it got here!","If it rains, come out of the water first. The lightning here no joke."]))});let b=Eu.map((D,N)=>{let W=t[D],B=W.spots.cat,J=up();return W.put(J,B[0],B[1],B[2]),s.scene.add(J),n.addAct({dir:W.dirAt(B[0],B[1]),r:1.8,label:"Pet the cat",show:()=>L()===N,run:async()=>{if(s.audio.meow(),s.set(`cat${N+1}`),N===0)await r("","Meow~ It's Oyen, the void deck cat! It stretches lazily\u2026 then dashes off down the road.");else if(N===1)await r("","Meow! Oyen again? It sniffs your hand and runs off once more.");else{await r("","Oyen is sunbathing on the beach! It purrs and lets you scratch its chin."),c("q_cat","Where's Oyen?");return}s.ui.toast("\u{1F408} Hidden task found: Where's Oyen?"),s.refresh()}}),J}),L=()=>Eu.filter((D,N)=>a(`cat${N+1}`)).length;function H(){let D=L();return[{id:"q_kopi",title:"Kopi & Kaya Toast",site:"hdb",hint:"Order a kaya toast set from Auntie Mei at the HDB kopitiam."},{id:"q_chope",title:"Chope a Table",site:"hawker",hint:a("tissue")?a("choped")?"Order chicken rice from Uncle Tan ($4).":"Chope an empty table with a tissue packet.":"Buy tissue from the auntie at the Lau Pa Sat entrance."},{id:"q_photo",title:"Merlion Photo",site:"marina",hint:a("photoAsk")?"Take the photo from the \u{1F4F7} spot near the Merlion.":"A tourist at Marina Bay needs help."},{id:"q_card",title:"Lost EZ-Link Card",site:a("card")?"hdb":"chinatown",hint:a("card")?"Hand the card in at the Neighbourhood Police Post (HDB).":"Someone dropped something on a Chinatown street\u2026"},{id:"q_show",title:"Garden Rhapsody",site:"gardens",hint:"Watch the Supertree light show at Gardens by the Bay. It only runs at night."},D?{id:"q_cat",title:`Where's Oyen? (${D}/3)`,site:Eu[Math.min(D,2)],hint:E1[D-1]||"",hidden:!0}:{id:"q_cat",title:"??? Hidden task",site:null,hint:"Keep an eye out at the void decks\u2026",hidden:!0}].map(N=>({...N,done:a(N.id)}))}return{tasks:H,mainDone:()=>S1.every(a),activeSites:()=>new Set(H().filter(D=>!D.done&&!D.hidden&&D.site).map(D=>D.site)),update(D){b.forEach((B,J)=>{B.visible=L()===J});let N=s.isNight(),W=s.player.pos.dot(P)>R&&s.player.alt<2;s.env.show=N&&W,N&&W&&!a("q_show")?(T||(T=!0,s.ui.toast("\u{1F3B6} The Garden Rhapsody begins! Look up\u2026",4e3)),C+=D,C>15&&c("q_show","Garden Rhapsody")):(C=Math.max(0,C-D*.5),W||(T=!1))}}}function A1(){let s=document.createElement("canvas");s.width=96,s.height=64;let e=s.getContext("2d");e.fillStyle="#ef3340",e.fillRect(0,0,96,32),e.fillStyle="#ffffff",e.fillRect(0,32,96,32),e.beginPath(),e.arc(20,16,10,0,Math.PI*2),e.fill(),e.fillStyle="#ef3340",e.beginPath(),e.arc(24,16,9,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff";for(let n=0;n<5;n++){let i=-Math.PI/2+n*Math.PI*2/5;e.beginPath(),e.arc(30+Math.cos(i)*5,16+Math.sin(i)*5,1.6,0,Math.PI*2),e.fill()}let t=new Gt(s);return t.colorSpace=Je,t}function R1(s){let e=s.sub(-6,9);for(let t=0;t<18;t++)for(let n=0;n<13;n++)(t+n)%2&&e.paintRect(-5.1+t*.6,-3.6+n*.6,.6,.6,"#b9a387",0,!0);e.paintRect(0,0,10.8,7.8,"#d8c9ae");for(let[t,n]of[[-5.1,-3.9],[0,-3.9],[5.1,-3.9],[-5.1,3.9],[5.1,3.9]])e.rbox(t,n,.32,3.3,.32,"#2f6f55",{r:.05}),e.solid(t,n,.32,.32);e.rbox(0,0,11.2,.18,8.6,"#e9e2d0",{y:3.3,r:.05});for(let t of[-1,1])e.rbox(0,t*2.25,11.6,.12,4.7,"#4f8d73",{y:3.75,rx:t*.2,r:.03});e.rbox(0,0,11.6,.22,.3,"#3f7a63",{y:4.18,r:.05});for(let t of[-4.4,4.4])e.cyl(0,t,.08,.08,11.6,"#cfd3d6",{y:3.3,rz:Math.PI/2,seg:8});e.sign(0,-4.38,"KOPITIAM \u5496\u5561\u5E97",{w:4.6,h:.85,y:2.95,rot:Math.PI,bg:"#e2383f"});for(let t of[-3,0,3]){let n=e.spawn("ceilingFan",t,0,{w:1.4,y:2.9});s.updaters.push(i=>{n.rotation.y+=i*6})}e.rbox(0,4.05,10.6,3.3,.22,"#efe2c4",{r:.04}),e.solid(0,4.05,10.6,.3),e.sign(-2.6,3.92,`KOPI 1.40  TEH 1.40
MILO 1.80  KOPI-O 1.20`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.sign(2.6,3.92,`PRATA KOSONG 1.20
EGG 1.80  MURTABAK 6`,{w:3.2,h:.75,y:2.65,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.rbox(-2.6,2.2,4.4,1,.9,"#f0c64a",{r:.05}),e.rbox(-2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let t=0;t<12;t++)e.box(-4.6+t*.36,1.74,.34,.85,.02,t%2?"#e9b42f":"#f3d26b",{y:.1});e.model("kitchenFridgeLarge",-4.4,3.5,{h:2,rot:Math.PI,center:!0}),e.model("kitchenCoffeeMachine",-1.4,2.25,{h:.45,y:1.06,rot:Math.PI,center:!0});for(let t=0;t<5;t++)e.model(t%2?"cup-saucer":"cup-coffee",-4.2+t*.4,2,{w:.22,y:1.06,center:!0,shadow:!1});e.lathe(-3,2.35,[[0,0],[.13,0],[.15,.2],[.1,.32],[.05,.34],[0,.34]],"#c6cbd0",{y:1.06,seg:14}),e.sign(-2.6,2.66,"DRINKS \u996E\u6599",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#2b6cb0",board:!1}),e.rbox(2.6,2.2,4.4,1,.9,"#e98d4a",{r:.05}),e.rbox(2.6,2.2,4.5,.06,1,"#f7f2e6",{y:1,r:.02});for(let t=0;t<12;t++)e.box(.6+t*.36,1.74,.34,.85,.02,t%2?"#d9772f":"#f0a462",{y:.1});e.cyl(2.9,2.2,.62,.62,.06,"#2b2b2b",{y:1.06,seg:24}),e.model("pancakes",1.6,2.15,{w:.4,y:1.06,center:!0}),e.model("kitchenStove",4.3,3.45,{h:1,rot:Math.PI,center:!0}),e.model("pot-stew",4.3,3.45,{w:.5,y:1,center:!0}),e.sign(2.6,2.66,"ROTI PRATA",{w:2.6,h:.5,y:2.05,rot:Math.PI,bg:"#b5442c",board:!1}),e.solid(0,2.2,9.6,.9);for(let[t,n]of[[-3.3,-1.6],[0,-1.6],[3.3,-1.6],[-1.65,.6]])Qi(e,t,n,"#ece6da",["#d24b3e","#2f8fd8","#3fae49","#f3c13a"][Math.abs(Math.round(t))%4]);e.model("cup-coffee",-3.1,-1.5,{w:.2,y:.79,center:!0,shadow:!1}),e.model("books",.2,-1.7,{w:.35,y:.79,center:!0,shadow:!1}),e.model("plate",3.3,-1.6,{w:.4,y:.79,center:!0,shadow:!1}),e.model("egg-cooked",3.3,-1.6,{w:.25,y:.82,center:!0,shadow:!1}),e.rbox(4.6,.4,.9,1.2,.6,"#3f7a63",{r:.05}),e.sign(4.6,.72,`TRAY
RETURN`,{w:.7,h:.45,y:1.5,bg:"#3fae49",board:!1}),e.solid(4.6,.4,.9,.6),e.model("trashcan",-4.7,.6,{h:.9,center:!0,solid:"circle"}),e.model("pottedPlant",-4.7,-3.4,{h:1.3,center:!0}),e.model("pottedPlant",4.7,-3.4,{h:1.3,center:!0})}function C1(s){let e=s.sub(8,9.5);e.rbox(0,0,5.6,3.3,4.1,"#f2f4f7",{r:.12}),e.rbox(0,0,5.8,.5,4.3,"#1f4e9c",{y:2.55,r:.06}),e.rbox(0,0,6.3,.25,4.8,"#d7dde6",{y:3.3,r:.08}),e.rbox(0,-2.4,3.2,.12,1.2,"#1f4e9c",{y:2.75,r:.04});for(let r of[-1.5,1.5])e.cyl(r,-2.9,.05,.05,2.75,"#c9cdd2",{seg:8});e.rbox(0,-2.06,1.5,2.3,.06,"#9fc2e0",{r:.03,glow:"win"}),e.box(0,-2.1,.04,2.3,.05,"#c9cdd2");for(let r of[-2,2])e.rbox(r,-2.06,1,1,.06,"#9fc2e0",{y:1,r:.03,glow:"win"});e.sign(0,-2.12,"NEIGHBOURHOOD POLICE POST",{w:5,h:.42,y:2.8,rot:Math.PI,bg:"#1f4e9c",board:!1}),e.solid(0,0,5.6,4.1),e.cyl(3.6,-2.6,.05,.07,6,"#d9dde2",{seg:8}),e.ball(3.6,-2.6,.1,"#d9a93f",{y:6});let t=new Ne(new tn(1.5,1),new ut({map:A1(),side:Kt,roughness:.9}));t.position.set(.76,0,0);let n=new lt;n.add(t),e.put(n,3.6,-2.6,Math.PI/2,5.3),s.group.add(n);let i=0;s.updaters.push(r=>{i+=r,t.rotation.y=Math.sin(i*2.2)*.15}),e.solidCircle(3.6,-2.6,.15),Xt(e,-1.6,-3.4,0)}function I1(s){s.paintCircle(1,-6.3,3.6,"#e9d29a");let e=s.sub(1,-6.3,.2),t=["#e2383f","#f3c13a","#2f8fd8","#3fae49"];for(let i=0;i<4;i++){let r=new wt(.85,.32,12,24,Math.PI);e.raw(r,t[i],-1.6+i*1.15,0,new oe().makeRotationY(Math.PI/2).setPosition(0,0,0))}e.rbox(-2.9,0,1.4,1.5,1.2,"#e2383f",{r:.25}),e.rbox(-3.55,0,.6,.6,.9,"#f3c13a",{y:.5,r:.15});for(let i of[-.35,.35])e.ball(-3,i,.17,"#ffffff",{y:1.15}),e.ball(-3.12,i,.08,"#222",{y:1.22}),e.cone(-2.6,i*1.3,.12,.5,"#f3c13a",{y:1.45,rz:.5});for(let i=0;i<5;i++)e.cone(-2.4+i*.6,0,.13,.35,"#f3c13a",{y:1.15+i%2*.05});e.cone(2.7,0,.35,1.3,"#3fae49",{rz:-1.2,y:.3}),e.tube(1.2,1.3,[[0,1,0],[.6,.7,.5],[1.4,.25,.9],[2,.08,1]],.28,"#f39c32",{rseg:8}),e.solid(0,0,6.2,1.8);let n=s.sub(-3.2,-6.8);for(let i of[-1,1])for(let r of[-.5,.5])n.cyl(i*1.1,r,.05,.05,2.5,"#5a6470",{rz:i*.12,rx:r*.25,seg:6});n.cyl(0,0,.06,.06,2.4,"#5a6470",{y:2.45,rz:Math.PI/2,seg:8});for(let i of[-.45,.45]){for(let r of[-.18,.18])n.cyl(i+r,0,.01,.01,1.85,"#9aa1a8",{y:.6,seg:3});n.rbox(i,0,.45,.05,.25,"#e2383f",{y:.58,r:.02})}n.solid(0,0,2.4,1.2)}function P1(s){let e=s.sub(-13.5,4.4);for(let t of[-1.7,1.7])e.rbox(t,.6,.12,2.6,.12,"#6c7a86",{r:.03});e.rbox(0,.1,4,.14,1.7,"#8fa4b5",{y:2.6,r:.05,rx:-.06}),e.rbox(0,.75,3.5,1.7,.05,"#d7ecf5",{y:.7,r:.02}),e.rbox(1.6,.7,.9,1.6,.12,"#ffffff",{y:.6,r:.03,glow:"win"}),Xt(e,-.2,.35,Math.PI),e.cyl(2.4,-.1,.05,.05,2.6,"#6c7a86",{seg:8}),e.sign(2.4,-.1,`BUS STOP
52009`,{w:.9,h:.7,y:2.7,bg:"#2b8a3e"}),e.sign(-1,.68,"52 \xB7 88 \xB7 157 \xB7 232",{w:1.6,h:.35,y:1.9,rot:Math.PI,bg:"#2b2b2b",fg:"#ffe9a3",board:!1}),e.solid(0,.6,3.6,.4)}function L1(s,e,t,n){let i=t-e,r=Math.max(2,Math.round(i/3)),o=s.sub((e+t)/2,n);for(let a=0;a<=r;a++){let c=-i/2+a*i/r;o.cyl(c,0,.08,.08,2.6,"#6b7f72",{seg:8}),o.solidCircle(c,0,.12)}o.rbox(0,0,i+.4,.1,1.5,"#4f8d73",{y:2.62,r:.04});for(let a of[-.72,.72])o.rbox(0,a,i+.4,.16,.08,"#3f7a63",{y:2.5,r:.03})}function Ep(s){s.paintRect(0,-11.5,36,10,"#d9d1bf"),s.paintRect(0,9.5,36,10,"#ddd5c3");for(let e=0;e<6;e++)s.paintRect(-10,-2.1+e*.84,3,.42,"#f4f1e6",0,!0);Na(s,-8,-12,0,{w:12.5,d:5,floors:6,accent:"#4fa3a5",no:"123",seed:5}),Na(s,9.5,-12.5,.18,{w:10.5,d:5,floors:7,accent:"#e9825f",no:"125",seed:9}),Na(s,.5,-22,0,{w:16,d:5,floors:9,accent:"#8e7cc3",no:"127",seed:13}),R1(s),s.spots.auntie=[-8.6,12.3,Math.PI],s.spots.prata=[-3.4,12.3,Math.PI],s.spots.uncle=[-3.39,8.09,2.36],C1(s),s.spots.officer=[8,6.6,Math.PI],I1(s),P1(s),L1(s,-16,-9.8,-4.6);for(let[e,t,n]of[[-11.8,-3.5,Math.PI/2],[-8.2,3.5,-Math.PI/2]])s.model("traffic-light",e,t,{h:3.4,rot:n,solid:"circle"});for(let[e,t,n]of[[-15.5,7.5,1],[15.5,14,1.1],[-15,-6.5,.9],[15.5,-5.5,1],[3,15.5,1.1],[-14.5,15,1]])zn(s,e,t,n);Zt(s,8.5,-4.4,3.6,.9),Zt(s,-5,5.6,3,.8);for(let[e,t]of[[13,4.6],[-1,-9.8],[-15,-9.5],[14,11]])Vn(s,e,t,1,!0);Xt(s,13,7.5,Math.PI/2),Xt(s,-4.5,-5,0);for(let e of[-2,5,14])bn(s,e,3.8,0),s.solidCircle(e,3.8,.15);s.model("trashcan",12,4.6,{h:.9,center:!0,solid:"circle"}),s.spots.cat=[-7.2,-9,.6],s.coins=[[12,-6.5],[-14.5,2.6],[5,5.6]]}var hr="#e9e3d3",no="#c9bfa8",Tu="#7d8fa3";function D1(){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#fdfbf3",e.fillRect(0,0,256,256),e.strokeStyle="#2e2638",e.lineWidth=10,e.beginPath(),e.arc(128,128,118,0,Math.PI*2),e.stroke(),e.fillStyle="#2e2638",e.font="bold 30px Georgia, serif",e.textAlign="center",e.textBaseline="middle",["XII","III","VI","IX"].forEach((n,i)=>{let r=-Math.PI/2+i*Math.PI/2;e.fillText(n,128+Math.cos(r)*88,128+Math.sin(r)*88)});for(let n=0;n<12;n++){let i=n*Math.PI/6;e.fillRect(128+Math.cos(i)*104-3,128+Math.sin(i)*104-3,6,6)}e.lineCap="round",e.lineWidth=9,e.beginPath(),e.moveTo(128,128),e.lineTo(178,98),e.stroke(),e.lineWidth=6,e.beginPath(),e.moveTo(128,128),e.lineTo(128,40),e.stroke();let t=new Gt(s);return t.colorSpace=Je,li("clockface",new ut({map:t,roughness:.6}))}function U1(s){let e=s.sub(0,-11);s.paintCircle(0,-11,8.8,"#d9cdb4");for(let a=2;a<8.6;a+=1.6)s.paintCircle(0,-11,a,a%3.2<1.6?"#cfc2a6":"#d9cdb4");s.paintRect(0,-3.6,4.4,2.6,"#d9cdb4");let t=[[.42,0],[.42,.22],[.32,.3],[.26,.45],[.2,.6],[.18,3.55],[.24,3.65],[.36,3.8],[.44,3.95],[.44,4.1],[0,4.12]],n=Array.from({length:8},(a,c)=>(c+.5)*Math.PI/4),i=n.map(a=>[Math.sin(a)*7.6,Math.cos(a)*7.6]);i.forEach(([a,c])=>{e.lathe(a,c,t,hr,{seg:16});for(let l of[1.2,2.4])e.cyl(a,c,.22,.22,.08,no,{y:l,seg:14});e.solidCircle(a,c,.42)});for(let a=0;a<8;a++){let[c,l]=i[a],[h,u]=i[(a+1)%8],f=Math.hypot(h-c,u-l),d=e.sub((c+h)/2,(l+u)/2,Math.atan2(h-c,u-l)-Math.PI/2);d.tube(0,0,[[-f/2,3.7,0],[-f/4,4.05,0],[0,4.15,0],[f/4,4.05,0],[f/2,3.7,0]],.08,hr);for(let g=-1;g<=1;g++)d.raw(new wt(.22,.035,6,16),no,g*f/4,0,new oe().makeTranslation(0,4.35-Math.abs(g)*.08,0))}e.cyl(0,0,8.25,8.25,.55,hr,{y:4.15,seg:8,spin:Math.PI/8}),e.cyl(0,0,8.4,8.4,.12,no,{y:4.68,seg:8,spin:Math.PI/8}),e.cone(0,0,9.4,2.7,Tu,{y:4.75,seg:8,spin:Math.PI/8}),n.forEach(a=>e.tube(0,0,[[Math.sin(a)*9.35,4.78,Math.cos(a)*9.35],[Math.sin(a)*4.7,6.15,Math.cos(a)*4.7],[Math.sin(a)*.4,7.4,Math.cos(a)*.4]],.07,hr)),e.cyl(0,0,2.6,2.6,1.3,hr,{y:6.9,seg:8,spin:Math.PI/8});for(let a=0;a<4;a++)e.cyl(0,0,2.66,2.66,.08,"#8b98a5",{y:7.05+a*.3,seg:8,spin:Math.PI/8});e.cone(0,0,3.4,1.5,Tu,{y:8.2,seg:8,spin:Math.PI/8}),e.rbox(0,0,1.5,2.3,1.5,hr,{y:9.3,r:.08}),e.rbox(0,0,1.7,.18,1.7,no,{y:11.6,r:.05}),D1();for(let a=0;a<4;a++){let c=e.sub(0,0,a*Math.PI/2);c.cyl(0,.77,.52,.52,.04,"#ffffff",{y:10.45,rx:Math.PI/2,seg:28,mat:"clockface",ry:Math.PI}),c.raw(new wt(.53,.05,6,24),no,0,.78,new oe().makeTranslation(0,10.45,0))}e.cone(0,0,1.15,1.7,Tu,{y:11.75,seg:4,spin:Math.PI/4}),e.cyl(0,0,.03,.05,.9,"#d9a93f",{y:13.4,seg:6}),e.ball(0,0,.12,"#d9a93f",{y:14.2}),e.sign(0,7.75,"LAU PA SAT \u8001\u5DF4\u5239",{w:4.4,h:.7,y:4.42,bg:"#5c6f84",board:!1});for(let a of[[-3,0],[3,0],[0,-2.5],[0,2.5]]){let c=e.spawn("ceilingFan",a[0],a[1],{w:1.4,y:4});s.updaters.push(l=>{c.rotation.y+=l*5})}e.rbox(0,-5.95,12.6,3,.25,"#eadfca",{r:.04}),e.solid(0,-5.95,12.6,.3),[["CHICKEN RICE \u9E21\u996D","#f3b33d"],["ICE KACHANG","#7cc6d6"],["CHAR KWAY TEOW","#e8735a"],["CARROT CAKE","#9ccf6b"]].forEach(([a,c],l)=>{let h=-4.6+l*3.07;e.rbox(h,-4.4,2.8,1.05,1,c,{r:.05}),e.rbox(h,-4.4,2.9,.06,1.1,"#f7f2e6",{y:1.05,r:.02}),e.rbox(h,-4.2,2.5,.4,.5,"#d9eef5",{y:1.11,r:.04});for(let u=0;u<3;u++)e.rbox(h-1+u*1,-5.86,.9,.5,.05,"#2b2b2b",{y:2.75,r:.02});e.sign(h,-5.8,a,{w:2.7,h:.55,y:2.3,bg:c,fg:"#2e2638",board:!1}),e.sign(h+1.15,-3.88,`#01-${12+l}`,{w:.45,h:.22,y:.75,bg:"#ffffff",fg:"#2e2638",board:!1})});for(let a=0;a<3;a++)e.ball(-5.4+a*.4,-5.4,.14,"#c8743a",{y:1.65,sy:1.3});e.cyl(-5,-5.4,.015,.015,1.4,"#888",{y:1.95,rz:Math.PI/2,seg:4}),e.model("rice-ball",-3.9,-4.6,{w:.25,y:1.11,center:!0}),e.model("ice-cream-cup",-1.9,-4.6,{w:.25,y:1.11,center:!0}),e.model("kitchenBlender",-1,-4.6,{h:.4,y:1.11,center:!0}),e.model("frying-pan",1.5,-4.5,{w:.6,y:1.11,center:!0}),e.model("kitchenStove",1.2,-5.4,{h:1,center:!0,rot:0}),e.model("steamer",4.3,-4.5,{w:.4,y:1.11,center:!0}),e.model("pot",5,-4.5,{w:.4,y:1.11,center:!0}),e.solid(0,-4.4,12.6,1),s.spots.uncleTan=[-4.6,-16.25,0],s.spots.kachang=[-1.53,-16.25,0],s.spots.ckt=[1.54,-16.25,0],[[-4.2,-.8],[0,-.8],[4.2,-.8],[-2.1,2.3],[2.1,2.3]].forEach(([a,c],l)=>Qi(e,a,c,"#ece6da",["#d24b3e","#2f8fd8","#f3c13a","#3fae49","#d24b3e"][l])),e.model("bowl-soup",-4,-.7,{w:.35,y:.79,center:!0,shadow:!1}),e.model("chopstick",-4.3,-.9,{w:.3,y:.8,center:!0,shadow:!1}),e.model("cup-tea",.2,-.9,{w:.18,y:.79,center:!0,shadow:!1}),e.model("plate-dinner",-2,2.3,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.chopeTable=[2.1,-8.7],s.spots.tissue=[-4.6,-6,0],e.rbox(-4.6,5.8,.6,.45,.4,"#8a6a4a",{r:.04});for(let a=0;a<6;a++)e.rbox(-4.8+a%2*.22,5.8,.18,.08,.12,["#ffffff","#f7c6d9","#cde8f2"][a%3],{y:.45+Math.floor(a/2)*.08,r:.02});e.model("trashcan",5.6,3.2,{h:.9,center:!0,solid:"circle"})}function N1(s){s.paintRect(7,8,11,6,"#cbbca0"),es(s,5,6.8,Math.PI,"#b5442c","#e2383f",{grill:!0,label:"SATAY 7",signBg:"#e2383f"}),es(s,9.2,6.8,Math.PI,"#b5442c","#f3c13a",{grill:!0,label:"SATAY \u6C99\u7239",signBg:"#d18a1a"}),s.spots.satay=[5,8.2,Math.PI];for(let a of[3.6,6.8,10.2])Qi(s,a,10.2,"#ece6da","#f3c13a");s.model("skewer",3.7,10.1,{w:.4,y:.79,center:!0,shadow:!1}),s.model("soda-can",6.9,10.3,{h:.18,y:.79,center:!0,shadow:!1});for(let[a,c]of[[2.6,5.6],[11.6,5.6],[2.6,11.8],[11.6,11.8]])s.cyl(a,c,.05,.05,3.6,"#555",{seg:6});let e=["#ffd27a","#ff8fb1","#9ff0ff","#c4ff8a"];for(let[a,c]of[[[2.6,5.6],[11.6,5.6]],[[2.6,11.8],[11.6,11.8]],[[2.6,5.6],[2.6,11.8]],[[11.6,5.6],[11.6,11.8]]])for(let l=0;l<=12;l++){let h=l/12,u=a[0]+(c[0]-a[0])*h,f=a[1]+(c[1]-a[1])*h;s.ball(u,f,.07,e[l%4],{y:3.5-Math.sin(h*Math.PI)*.35,glow:"win"})}let t=60,n=new Float32Array(t*3),i=[];for(let a=0;a<t;a++)i.push([Math.random(),Math.random()*1.4-.7,Math.random()*.3]);let r=new ot;r.setAttribute("position",new et(n,3));let o=new yn(r,new hn({color:14540253,size:.5,transparent:!0,opacity:.35,depthWrite:!1}));o.frustumCulled=!1,s.put(o,5,6.95,Math.PI,1.4),s.group.add(o),s.updaters.push((a,c)=>{if(o.visible=c.night>.4,!!o.visible){for(let l=0;l<t;l++){let h=i[l];h[0]=(h[0]+a*.4)%1,n[l*3]=h[1]+Math.sin(h[0]*6+l)*.15,n[l*3+1]=h[0]*2.2,n[l*3+2]=h[2]+h[0]*.4}r.attributes.position.needsUpdate=!0}})}function Tp(s){U1(s),N1(s);for(let[e,t,n,i,r]of[["building-skyscraper-c",-8,13,26,0],["building-skyscraper-a",-1.5,17,21,.3],["building-skyscraper-e",13,16,24,-.2],["building-skyscraper-b",-14.5,17,18,.5]])s.model(e,t,n,{h:i,rot:r,center:!0,solid:!0});s.model("building-g",15.5,9,{h:7,rot:-Math.PI/2,center:!0,solid:!0});for(let[e,t]of[[-13,-4.8],[13,-4.8],[-14,5.5],[14.5,4.8]])zn(s,e,t,1);Zt(s,-9.5,-3.9,3.5,.8),Zt(s,9.5,-3.9,3.5,.8),Vn(s,1.5,5.4,1,!0),Xt(s,-4.5,5.2,Math.PI);for(let e of[-12,-6.5,6.5,12])bn(s,e,-3.8,Math.PI),s.solidCircle(e,-3.8,.15);s.coins=[[-12,-7],[12,4.6],[0,8.5]]}var Au=["#f6c1c1","#a8d8c8","#f7e1a1","#b9c8ef","#f3b38f","#cfe7a2","#e7c3ef","#f9d2a7","#a9d6ec"],Ap=["#4f8f6f","#3f6f9a","#9a4f4f","#4f7f5f","#6a5a9a"],Rp=["MEDICAL HALL","BAK KWA \u8089\u5E72","TAILOR","KOPI","ANTIQUES","DIM SUM","TEA HOUSE \u8336","GOLDSMITH","BOOKS"];function O1(){let s=document.createElement("canvas");s.width=64,s.height=64;let e=s.getContext("2d");e.fillStyle="#c4553b",e.fillRect(0,0,64,64);for(let n=0;n<64;n+=16){let i=e.createLinearGradient(n,0,n+16,0);i.addColorStop(0,"#9f3e2b"),i.addColorStop(.5,"#d86a4c"),i.addColorStop(1,"#9f3e2b"),e.fillStyle=i,e.fillRect(n,0,16,64)}e.fillStyle="rgba(80,20,10,0.35)";for(let n=0;n<64;n+=16)e.fillRect(0,n,64,2);let t=new Gt(s);t.colorSpace=Je,t.wrapS=t.wrapT=an,t.repeat.set(3,3),li("rooftile",new ut({map:t,roughness:.75}))}function Cp(s,e,t,n){let i=new tn(s,e,24,24).rotateX(-Math.PI/2),r=i.attributes.position;for(let o=0;o<r.count;o++){let a=Math.abs(r.getX(o))/(s/2),c=Math.abs(r.getZ(o))/(e/2),l=Math.max(a,c);r.setY(o,t*Math.pow(1-l,1.7)+n*Math.pow(a,6)*Math.pow(c,6)+n*.25*Math.pow(l,8))}return i.computeVertexNormals(),i}function F1(s,e,t,n){let i=s.sub(e,t),r=Au[n%Au.length],o=Ap[n%Ap.length],a=n%3===1,c=a?9.4:6.6;i.box(0,-.6,3.2,3.1,4.8,Ot(r,-.05));for(let h=0;h<7;h++)i.box(-1+h*.33,1.83,.3,2.3,.04,h%2?"#7a5a3a":"#8d6a46",{y:.05});i.sign(0,1.86,Rp[n%Rp.length],{w:2.4,h:.42,y:2.65,bg:"#2b2b2b",fg:"#f3d26b",board:!1}),i.box(0,0,3.2,c-3.1,6,r,{y:3.1});for(let h of[-1.5,1.5])i.rbox(h,3.02,.24,c-3.1,.12,Ot(r,.06),{y:3.1,r:.03});let l=a?[3.6,6.4]:[3.6];for(let h of l){i.rbox(0,3.03,3,.22,.16,"#ffffff",{y:h-.25,r:.04});for(let u=0;u<9;u++)i.box(-1.2+u*.3,3.04,.26,.26,.03,["#2f8fd8","#ffffff","#3fae49"][u%3],{y:h-.6});for(let u of[-.72,.72]){i.box(u,3,.78,1.6,.05,"#2e2a26",{y:h}),i.cyl(u,3,.4,.4,.06,"#fdf4d8",{y:h+1.6,rx:Math.PI/2,seg:16,glow:"win"}),i.box(u,3,.82,.08,.08,"#ffffff",{y:h+1.58});for(let f of[-1,1]){let d=u+f*.2;i.rbox(d,3.04,.38,1.55,.05,o,{y:h+.02,r:.015});for(let g=0;g<7;g++)i.box(d,3.07,.32,.03,.02,Ot(o,.12),{y:h+.2+g*.2})}}}i.rbox(0,3.08,3.25,.25,.25,"#ffffff",{y:c-.45,r:.05});for(let h=0;h<10;h++)i.box(-1.45+h*.32,3.12,.12,.12,.1,"#f1ece0",{y:c-.6});i.box(0,1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:.42,mat:"rooftile"}),i.box(0,-1.5,3.4,.14,3.4,"#ffffff",{y:c+0,rx:-.42,mat:"rooftile"}),i.cyl(0,0,.1,.1,3.4,"#8f3a28",{y:c+.68,rz:Math.PI/2,seg:8}),i.rbox(-1.62,0,.12,.9,6.2,Ot(r,-.1),{y:c-.2,r:.03})}function Ip(s){O1();for(let n=0;n<24;n++)s.paintRect(-14.4+n*1.2+.6,-4.6,1.2,1.3,n%2?"#c99a72":"#b9845e");s.paintRect(0,9,34,11,"#ddd2bd");for(let n=0;n<9;n++)F1(s,-12.8+n*3.2,-7,n);s.solid(0,-7.6,28.8,4.8);for(let n=0;n<=9;n++){let i=-14.4+n*3.2;s.lathe(i,-4.2,[[.24,0],[.24,.25],[.18,.3],[.17,2.4],[.24,2.5],[.24,2.6],[0,2.6]],"#f3ead6",{seg:4,ry:Math.PI/4}),s.solid(i,-4.2,.4,.4),n<9&&(s.tube(i+1.6,-4.2,[[-1.45,2.55,0],[-.8,2.95,0],[0,3.05,0],[.8,2.95,0],[1.45,2.55,0]],.09,"#f3ead6"),s.box(i+1.6,-4.2,3.2,.5,.3,Au[n],{y:2.9}),s.lathe(i+1.6,-4.25,[[0,0],[.12,.02],[.24,.15],[.26,.3],[.22,.45],[.1,.55],[0,.56]],"#e2383f",{y:1.75,seg:12,glow:"win"}),s.cyl(i+1.6,-4.25,.1,.1,.06,"#d9a93f",{y:2.3,seg:8}),s.cyl(i+1.6,-4.25,.015,.03,.35,"#f3c13a",{y:1.42,seg:5}))}s.sign(-6.4,-3.98,"CHINATOWN \u725B\u8F66\u6C34",{w:4.6,h:.6,y:3.45,bg:"#b8352b",fg:"#ffe8a3"});for(let n of[-9,0,9]){for(let i of[-3.6,3.6])s.cyl(n,i,.08,.1,5,"#7a2a20",{seg:8}),s.ball(n,i,.12,"#d9a93f",{y:5}),s.solidCircle(n,i,.15);s.cyl(n,0,.012,.012,7.2,"#3a2a2a",{y:4.9,rx:Math.PI/2,seg:3});for(let i=-2;i<=2;i++)s.lathe(n,i*1.2,[[0,0],[.12,.02],[.27,.15],[.29,.32],[.24,.48],[.1,.58],[0,.6]],i%2?"#f3c13a":"#e2383f",{y:3.95,seg:12,glow:"win"}),s.cyl(n,i*1.2,.012,.012,.4,"#3a2a2a",{y:4.55,seg:3}),s.cyl(n,i*1.2,.015,.03,.3,"#f3c13a",{y:3.65,seg:5})}let e=s.sub(4,11);e.rbox(0,0,10.4,.8,8.4,"#cfc6b8",{r:.08});for(let n=0;n<3;n++)e.rbox(0,-4.4-n*.35,4.2,.8-n*.27,.4,"#d8d0c3",{r:.03});e.box(0,0,8,4,6,"#b8352b",{y:.8});for(let n of[-3.2,-1.1,1.1,3.2])e.lathe(n,-3.35,[[.3,0],[.3,.2],[.22,.28],[.21,3.6],[.3,3.75],[.3,4],[0,4]],"#c42e22",{y:.8,seg:16}),e.cyl(n,-3.35,.24,.24,.12,"#d9a93f",{y:4,seg:16});e.rbox(0,-3.03,2.2,2.8,.08,"#6b1d17",{y:.8,r:.03});for(let n=0;n<5;n++)for(let i=0;i<4;i++)e.ball(-.75+n*.38,-3.07,.05,"#d9a93f",{y:1.3+i*.6});e.rbox(0,-3.6,8.6,.28,.5,"#d9a93f",{y:4.8,r:.04});let t=[[11.5,9.2,1.9,4.95],[7.6,6.2,1.5,8.35],[5,4.2,1.5,11.15]];e.box(0,0,5.8,2.4,4.6,"#b8352b",{y:6}),e.box(0,0,3.8,1.8,3,"#b8352b",{y:9.4});for(let[n,i,r,o]of t){let a=Cp(n,i,r,.9);e.raw(a,"#3b3536",0,0,new oe().makeTranslation(0,o,0)),e.raw(Qr(Cp(n,i,r,.9)),"#6b2a22",0,0,new oe().makeTranslation(0,o-.06,0)),e.rbox(0,0,n*.32,.22,.24,"#d9a93f",{y:o+r-.1,r:.06});for(let c of[-1,1])e.cone(c*n*.16,0,.12,.45,"#d9a93f",{y:o+r,rz:-c*.5,seg:6})}e.lathe(0,0,[[.3,0],[.12,.25],[.18,.6],[.08,1],[.14,1.3],[.04,1.8],[0,2]],"#d9a93f",{y:12.6,seg:12}),e.sign(0,-3.12,"BUDDHA TOOTH RELIC TEMPLE \u4F5B\u7259\u5BFA",{w:5.4,h:.5,y:4.45,rot:Math.PI,bg:"#d9a93f",fg:"#6b1d17",board:!1});for(let n of[-2.6,2.6])e.rbox(n,-5.3,.9,.7,.9,"#bdb5a7",{r:.05}),e.rbox(n,-5.3,.55,.6,.75,"#a9a194",{y:.7,r:.18}),e.ball(n,-5.45,.36,"#a9a194",{y:1.15}),e.ball(n,-5.55,.42,"#9b9386",{y:1.05,sy:.9}),e.solid(n,-5.3,.9,.9);e.lathe(0,-6,[[0,0],[.45,0],[.55,.2],[.6,.55],[.5,.75],[.62,.8],[0,.82]],"#8a6a3a",{seg:20});for(let n=0;n<5;n++)e.cyl(-.2+n*.1,-6,.01,.01,.5,"#c4553b",{y:.82,seg:3});e.solidCircle(0,-6,.6),e.solid(0,0,10.4,8.4),es(s,-9,7,Math.PI,"#f2a33a","#f3c13a",{label:"LAKSA \u53FB\u6C99",signBg:"#d0761a"}),s.model("pot-stew",-9.6,7.05,{w:.6,y:1.25,center:!0}),s.model("bowl-soup",-8.4,6.95,{w:.35,y:1.25,center:!0}),s.spots.laksa=[-9,8.4,Math.PI],s.spots.lim=[12.5,5.8,-Math.PI*.75],s.spots.card=[-3.5,3.6];for(let[n,i,r]of[[-14.5,12,1],[15,7.5,1],[-3,15.5,.9],[15,14.5,1.1]])zn(s,n,i,r);Zt(s,-5,5.2,3,.8);for(let[n,i]of[[-13,4.6],[13,4.4]])Vn(s,n,i,1,!0);for(let n of[-13.5,13.5])bn(s,n,3.8,0),s.solidCircle(n,3.8,.15);s.spots.cat=[5.4,-4.8,Math.PI/2],s.coins=[[-13,-4.7],[-5.5,10.5],[12,11.5]]}var io="#f3f0e8",tc="#e8e1d0";function Ru(s,e,t,n=[1,1]){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new Gt(i);return r.colorSpace=Je,r.wrapS=r.wrapT=an,r.repeat.set(...n),r.anisotropy=4,r}function B1(){let s=Ru(64,64,(n,i,r)=>{n.fillStyle="#f1ede3",n.fillRect(0,0,i,r),n.strokeStyle="#cfc7b4",n.lineWidth=3;for(let o=-16;o<r+16;o+=16)for(let a=0;a<i+16;a+=16)n.beginPath(),n.arc(a+(o/16%2?8:0),o,8,0,Math.PI),n.stroke()},[10,6]);li("scales",new ut({map:s,roughness:.6}));let e=Ru(32,64,(n,i,r)=>{n.fillStyle="#e8eef2",n.fillRect(0,0,i,r),n.fillStyle="#6f8fa8",n.fillRect(0,10,i,26),n.fillStyle="#86a5bd",n.fillRect(0,42,i,16);for(let o=0;o<i;o+=8)n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(o,0,1,r)},[1,1]);e.repeat.set(.6,.6);let t=Ru(32,64,(n,i,r)=>{n.fillStyle="#000",n.fillRect(0,0,i,r),n.fillStyle="#ffd98a",n.fillRect(0,12,i,22),n.fillStyle="#fff1c4",n.fillRect(0,44,i,12)});t.repeat.copy(e.repeat),li("mbsglass",new ut({map:e,emissiveMap:t,emissive:16777215,emissiveIntensity:0,roughness:.35,metalness:.1}))}function k1(s){s.lathe(0,0,[[0,0],[2.3,0],[2.3,.25],[2.05,.35],[1.95,.9],[2.15,1],[2.15,1.15],[0,1.15]],"#c8c0b0",{seg:32});let e=1.15;s.lathe(0,0,[[0,0],[1.55,0],[1.6,.4],[1.55,1.2],[1.4,2.2],[1.3,3],[1.25,3.6],[.9,3.9],[0,4]],"#ffffff",{y:e,seg:32,mat:"scales"});for(let i of[.15,1.6,2.9])s.cyl(0,0,1.58-i*.1,1.6-i*.1,.12,tc,{y:e+i,seg:32});let t=[[0,1.6,-1],[0,1.5,-2],[0,2.1,-2.8],[0,3.1,-3],[0,3.8,-2.5]];for(let i=0;i<t.length-1;i++)s.tube(0,0,[t[i],t[i+1]].map(r=>[r[0],r[1]+e-1.15,r[2]]),.55-i*.1,io,{rseg:14,tseg:6});for(let i of[-1,1])s.rbox(i*.35,-2.25,.5,1.2,.12,io,{y:4.3,rz:i*.6,rx:.4,r:.05});let n=e+3.9;s.ball(0,-.1,1.25,tc,{y:n-.95,seg:24,hseg:18});for(let i=0;i<6;i++){let r=.35+i*.3,o=12+i*3;for(let a=0;a<o;a++){let c=Math.PI*.18+a/(o-1)*Math.PI*1.64,l=Math.sin(r)*Math.sin(c)*1.27,h=-.1+Math.sin(r)*Math.cos(c)*1.27,u=n+.3+Math.cos(r)*1.27;s.ball(l,h,.19,(i+a)%3?tc:"#ddd5c2",{y:u-.19,seg:8,hseg:6,sy:.8})}}s.ball(0,.55,1.1,io,{y:n-.8,seg:24,hseg:18,sx:1.05,sz:.95}),s.rbox(0,1.55,1.25,.9,1,io,{y:n-.55,r:.35}),s.rbox(0,1.95,.7,.32,.5,"#7a5a50",{y:n-.5,r:.12}),s.ball(0,2.05,.15,"#5a4a48",{y:n+.25,sx:1.4});for(let i of[-1,1])s.ball(i*.42,1.48,.17,"#ffffff",{y:n+.25,seg:12}),s.ball(i*.42,1.62,.09,"#2e2638",{y:n+.33,seg:10}),s.rbox(i*.42,1.45,.4,.08,.12,"#d6cfbd",{y:n+.62,rz:i*.25,r:.03}),s.cone(i*.85,.2,.32,.55,tc,{y:n+1.25,rz:-i*.35,seg:10});s.solidCircle(0,-.8,2.6)}var is=[0,1.15+3.9-.42,2.2];function H1(s){let e=s.sub(1,-14);for(let i of[-6.5,0,6.5]){let r=e.sub(i,0),o=new kn([[-1.9,0],[-.1,0],[-.1,22],[-1.9,22]].map(([c,l])=>new ie(c,l))),a=new kn;a.moveTo(.1,0),a.lineTo(1.9,0),a.bezierCurveTo(3.2,6,2.4,15,1.9,22),a.lineTo(.1,22);for(let c of[o,a]){let l=new Ws(c,{depth:4.4,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2,curveSegments:16});r.raw(l,"#ffffff",0,0,new oe().makeTranslation(0,-.4,-2.2),{mat:"mbsglass"})}r.box(0,0,.22,22.4,4.3,"#3d4a55",{y:-.4}),r.rbox(.4,0,4.2,.5,4.8,"#dfe6eb",{y:21.4,r:.1}),r.solid(.3,0,4.6,4.4)}let t=new kn;t.moveTo(-10.5,-2.2),t.lineTo(10.5,-2.2),t.quadraticCurveTo(15.5,-1.2,16.5,0),t.quadraticCurveTo(15.5,1.2,10.5,2.2),t.lineTo(-10.5,2.2),t.quadraticCurveTo(-11.5,0,-10.5,-2.2),e.extrude(0,0,t,1,"#eef2f4",{y:21.8,bevel:.12,curveSeg:16});let n=new kn(t.getPoints(24).map(i=>new ie(i.x*.93,i.y*.8)));e.extrude(0,0,n,.25,"#7cbb6a",{y:22.9}),e.rbox(-1,-1.3,13,.12,.9,"#4fc3e8",{y:22.95,r:.04,glow:"pool"});for(let i=0;i<7;i++)e.model(i%2?"tree_palmTall":"tree_palmDetailedShort",-8+i*3.2,.9,{h:1.6,y:23.1,rot:i});for(let i=0;i<10;i++)e.model("loungeChair",-7+i*1.3,-.6,{h:.35,y:23.1,rot:Math.PI,center:!0,shadow:!1});for(let i of[-6.4,0,6.4])e.rbox(i,4.6,6.5,2.8,3.2,"#d7dee4",{r:.2,y:-.3}),e.rbox(i,6.25,6.2,1.9,.1,"#ffffff",{y:.1,mat:"mbsglass",r:.03}),e.rbox(i,6.6,6.6,.15,1.2,"#eef2f4",{y:2.4,r:.05});e.solid(0,4.6,19,3.2),e.sign(0,7.25,"MARINA BAY",{w:4.4,h:.6,y:3.3,bg:"#2e4a66",board:!1})}function z1(s){let e=()=>{let t=new tn(1.6,5,6,14),n=t.attributes.position;for(let i=0;i<n.count;i++){let r=n.getX(i),o=n.getY(i),a=(o+2.5)/5;n.setX(i,r*Math.sin(Math.PI*Math.min(1,a*1.1+.08))*(1-a*.35)),n.setY(i,o+2.5),n.setZ(i,.6*a*a*3-Math.abs(r)*.25)}return t.computeVertexNormals(),t};s.lathe(0,0,[[0,0],[2,0],[1.6,.8],[1.1,1.6],[0,1.7]],"#d8d2c6",{seg:20});for(let t=0;t<10;t++){let n=t/10*Math.PI*2,i=t%2?1.2:1.6,r=new oe().makeRotationY(n).multiply(new oe().makeTranslation(0,.6,i)).multiply(new oe().makeRotationX(.35+t%2*.15));s.raw(e(),io,0,0,r),s.raw(Qr(e()),"#dcd6ca",0,0,r)}s.solidCircle(0,0,2.6)}function Pp(s,e,t,n){s.dome(e,t,n,"#c9b48a",{seg:32,hseg:14});let i=new Bn(.13,.45,5),r=new E(0,1,0),o=new Mt,a=new oe,c=new E;for(let l=.15;l<1.5;l+=.17){let h=Math.max(1,Math.round(Math.sin(l)*22));for(let u=0;u<h;u++){let f=u/h*Math.PI*2+l*3;c.set(Math.sin(l)*Math.cos(f),Math.cos(l),Math.sin(l)*Math.sin(f)),o.setFromUnitVectors(r,c),a.compose(c.clone().multiplyScalar(n+.1),o,new E(1,1,1)),s.raw(i,"#a88d55",e,t,a.clone())}}s.lathe(e,t,[[n+.3,0],[n+.3,.3],[n,.35],[0,.35]],"#d8d2c6",{seg:32}),s.solidCircle(e,t,n)}function V1(s,e,t,n){let i=s.sub(e,t);i.ball(0,0,.55,"#e2383f",{y:n,sx:1.4,sy:.55,seg:16});for(let r of[-1,1]){for(let o=0;o<3;o++)i.tube(0,0,[[r*.6,n+.25,-.2+o*.25],[r*1,n+.45,-.25+o*.3],[r*1.25,n,-.3+o*.35]],.06,"#d12f35");i.tube(0,0,[[r*.5,n+.35,.3],[r*.8,n+.6,.65]],.08,"#d12f35"),i.ball(r*.85,.75,.22,"#e2383f",{y:n+.5,sx:1.2}),i.ball(r*.18,.35,.08,"#ffffff",{y:n+.55})}}function Lp(s){B1(),s.paintRect(0,4.4,34,2.8,"#e3d7bf");for(let d=0;d<17;d++)s.paintRect(-16+d*2,4.4,1.9,2.6,d%2?"#d9ccb2":"#e3d7bf",0,!0);s.paintRect(1,-7.5,30,8,"#ddd6c8"),s.paintCircle(-5.5,6.2,3,"#e3d7bf"),s.water(2,16,10.5),s.paintCircle(-1.6,4.4,.9,"#f3c13a",!0),s.paintCircle(-1.6,4.4,.65,"#e3d7bf",!0);let e=null;for(let d=-1.25;d<=1.251;d+=.0625){let g=2+Math.sin(d)*10.8,y=16-Math.cos(d)*10.8;if(Math.hypot(g+5.5,y-6.2)<2.9){e=null;continue}if(e){let m=(g+e[0])/2,p=(y+e[1])/2;s.tube(m,p,[[e[0]-m,1,e[1]-p],[g-m,1,y-p]],.04,"#c9cdd2",{tseg:2})}Math.round(d/.0625)%2===0&&s.cyl(g,y,.04,.04,1,"#c9cdd2",{seg:6}),e=[g,y]}for(let d of[-1,.6,1.1]){let g=2+Math.sin(d)*11.4,y=16-Math.cos(d)*11.4;s.model("light-square",g,y,{h:4.2,rot:d+Math.PI}),s.ball(g,y,.18,"#fff1b8",{y:4.1,glow:"win"})}for(let[d,g,y]of[[3,20,1.6],[6,13,1.2],[-2,14,1],[7,21,1.4],[0,23,1.2]])s.model(y>1.3?"lily_large":"lily_small",d,g,{w:y,y:-.02,rot:d,shadow:!1});let t=s.sub(-5.5,6.2);k1(t),s.spots.mouth=[-5.5+is[0],6.2+is[2],is[1]],H1(s);let n=s.sub(13.5,8.5);z1(n),Pp(s,-13,-8,3.2),Pp(s,-11,-12.5,2.4);let i=s.sub(-13,9.5);i.rbox(0,0,5,2.9,4,"#f6efe2",{r:.1}),i.rbox(0,-2.02,1.3,2.1,.06,"#7a3b2e",{r:.03});for(let d of[-1.7,1.7])i.rbox(d,-2.02,1.1,.9,.06,"#ffd27a",{y:1.1,r:.03,glow:"win"});i.cone(0,0,4.2,1.6,"#c8402f",{y:2.9,seg:4,spin:Math.PI/4,sz:.85}),i.sign(0,-2.12,"CHILLI CRAB \u8FA3\u6912\u8783\u87F9",{w:4,h:.6,y:2.45,rot:Math.PI,bg:"#c8402f",board:!1}),V1(i,0,.2,4.3),i.solid(0,0,5,4),Qi(s,-15.5,6.2,"#ffffff","#e2383f"),s.model("pot-stew",-15.5,6.2,{w:.45,y:.79,center:!0,shadow:!1}),s.spots.crab=[-13,6.8,Math.PI],s.spots.kenji=[-9.2,4.6,Math.PI/2],s.spots.photo=[-1.6,4.4];for(let[d,g]of[[14.5,-5],[8,-5.5],[-6,-5]])zn(s,d,g,.9);rr(s,15,4.2,.9),s.solidCircle(15,4.2,.3),Zt(s,1,-5,4,.8),Xt(s,6.5,5,0);for(let d of[-10,2,12])bn(s,d,-3.8,Math.PI),s.solidCircle(d,-3.8,.15);s.coins=[[-15.5,-3.8],[10,-6.5],[14,1.5]],s.updaters.push((d,g)=>{er.mbsglass.emissiveIntensity=g.night*.9});let r=new si([0,.3,.6,.9,1.1].map(d=>new E(0,is[1]+1.6*d-4.2*d*d,is[2]+4.2*d))),o=new Ne(new Ai(r,24,.14,8),new ut({color:14217983,transparent:!0,opacity:.7,roughness:.1}));s.put(o,-5.5,6.2,0),s.group.add(o);let a=120,c=new Float32Array(a*3),l=[];for(let d=0;d<a;d++)l.push([Math.random(),(Math.random()-.5)*.35,(Math.random()-.5)*.2]);let h=new ot;h.setAttribute("position",new et(c,3));let u=new yn(h,new hn({color:15661823,size:.22,transparent:!0,opacity:.8,depthWrite:!1}));u.frustumCulled=!1,s.put(u,-5.5,6.2,0),s.group.add(u);let f=1.1;s.updaters.push(d=>{for(let g=0;g<a;g++){let y=l[g];y[0]=(y[0]+d/f)%1;let m=y[0]*f;c[g*3]=y[1]*m*1.5,c[g*3+1]=is[1]+1.6*m-4.2*m*m+y[2],c[g*3+2]=is[2]+4.2*m}h.attributes.position.needsUpdate=!0})}var nc=[[0,11.5,16],[-6.5,7.8,12],[6.5,8.2,13],[-4.5,16,11],[5,16.5,12],[-10.5,12.5,10],[10.5,12.8,11]],G1="#5d4a6e",Cu="#6b5579",Dp=["#4f9a57","#6fb04f","#e86fa1","#f3c13a","#3f8a4a"],ic=s=>Math.min(2.8,.2*s);function W1(s,e,t,n,i){let r=n/14,o=ic(n),a=n-o,c=3.1*r+.4,l=[[0,0],[1.25,0],[1.05,.25],[.78,.9],[.62,2.2]];for(let f=1;f<=6;f++)l.push([.62-.2*(f/6),2.2+(a-2.2)*(f/6)]);l.push([0,a]),s.lathe(e,t,l,G1,{seg:18});let h=f=>f<2.2?.78-.16*f/2.2:.62-.2*(f-2.2)/(a-2.2);for(let f=0;f<3;f++){let d=[];for(let g=0;g<=18;g++){let y=.6+(a-1)*(g/18),m=f*2.09+g*.75,p=h(y)+.06;d.push([Math.cos(m)*p,y,Math.sin(m)*p])}s.tube(e,t,d,.07,Cu,{tseg:90,rseg:5});for(let g=1;g<18;g++)for(let y=0;y<3;y++){let[m,p,v]=d[g],_=Math.atan2(v,m)+(i()-.5)*.5,x=Math.hypot(m,v)+.05,P=i()<.75?Dp[[0,1,4][y]]:Dp[2+(i()*2|0)];s.ball(e+Math.cos(_)*x,t+Math.sin(_)*x,.08+i()*.05,P,{y:p-.25+y*.18,seg:5,hseg:3,sy:.7})}}s.lathe(e,t,[[.4,a-.2],[.9,a+.3*o],[c*.6,a+.75*o],[c-.1,n-.05],[c-.2,n-.15]],"#3b2d48",{seg:24});let u=16;for(let f=0;f<u;f++){let d=f/u*Math.PI*2,g=Math.cos(d),y=Math.sin(d),m=[];for(let p=0;p<=1.001;p+=.25){let v=.45+(c-.45)*Math.pow(p,.75),_=a-.3+(o+.3)*Math.sqrt(p);m.push([g*v,_,y*v])}if(s.tube(e,t,m,.06,Cu,{tseg:14,rseg:4}),f%2===0)for(let p=1;p<m.length;p++)s.ball(e+m[p][0],t+m[p][2],.1,"#ffffff",{y:m[p][1]+.02,seg:6,hseg:4,glow:"super"})}for(let f of[.35,.7]){let d=.45+(c-.45)*Math.pow(f,.75),g=a-.3+(o+.3)*Math.sqrt(f);s.raw(new wt(d,.045,4,32),Cu,e,t,new oe().makeRotationX(Math.PI/2).setPosition(0,g,0))}s.raw(new wt(c,.13,6,40),"#ffffff",e,t,new oe().makeRotationX(Math.PI/2).setPosition(0,n,0),{glow:"super"});for(let f=0;f<20;f++){let d=f/20*Math.PI*2;s.ball(e+Math.cos(d)*(c-.15),t+Math.sin(d)*(c-.15),.12,"#ffffff",{y:n+.05,seg:6,hseg:4,glow:"super"})}s.lathe(e,t,[[1.25,0],[1.9,0],[1.9,.3],[1.75,.35],[1.25,.35]],"#cfc7b8",{seg:28});for(let f=0;f<9;f++){let d=f/9*Math.PI*2+i();s.model(f%3?"plant_bushSmall":"flower_purpleA",e+Math.cos(d)*1.55,t+Math.sin(d)*1.55,{h:.45,y:.3,rot:d,shadow:!1})}s.solidCircle(e,t,1.4)}function X1(s,e,t){let[n,i,r]=e,[o,a,c]=t,l=Math.hypot(o-n,a-i),h=Math.min(r-ic(r),c-ic(c))-1.4,u=s.sub((n+o)/2,(i+a)/2,Math.atan2(o-n,a-i)),f=14,d=y=>h-.45*Math.sin(Math.PI*y),g=y=>-l/2+1+(l-2)*y;for(let y=0;y<f;y++){let m=(y+.5)/f,p=Math.atan2(d((y+1)/f)-d(y/f),(l-2)/f);u.box(0,g(m),1,.14,(l-2)/f+.05,"#d6dbe0",{y:d(m)-.07,rx:-p}),u.box(0,g(m),.86,.04,(l-2)/f+.05,"#a88a62",{y:d(m)+.02,rx:-p})}for(let y of[-.5,.5]){let m=[],p=[];for(let v=0;v<=f;v++){let _=v/f;m.push([y,d(_)+.05,g(_)]),p.push([y,d(_)+.95,g(_)])}u.tube(0,0,p,.035,"#eef1f3",{tseg:40}),u.tube(0,0,m.map(([v,_,x])=>[v,_+.45,x]),.015,"#c8ced3",{tseg:40});for(let v=0;v<=f;v+=2){let _=v/f;u.cyl(y,g(_),.02,.02,.95,"#c8ced3",{y:d(_),seg:5})}for(let v of[-1,1]){let _=[y*.6,(v<0?r:c)-ic(v<0?r:c)-.1,v*(l/2-.7)];for(let x of v<0?[.12,.26,.4]:[.6,.74,.88])u.tube(0,0,[_,[y,d(x)+.95,g(x)]],.012,"#9aa3ab",{tseg:2,rseg:3})}}for(let y of[-1,1])u.raw(new wt(.85,.12,6,20),"#d6dbe0",0,y*(l/2-.2),new oe().makeRotationX(Math.PI/2).setPosition(0,h,0))}var q1=new ut({color:"#d9f0f7",roughness:.05,metalness:.1,transparent:!0,opacity:.28,depthWrite:!1,side:Kt});function Up(s,e,t,n,i,r,o){let a=s.sub(e,t);a.lathe(0,0,[[n-.1,0],[n+.45,0],[n+.45,.35],[n+.15,.45],[n-.1,.45]],"#d6d0c4",{seg:48});let c=new Ne(new yt(n,40,16,0,Math.PI*2,0,Math.PI/2).scale(1,i,1),q1);c.renderOrder=2,a.put(c,0,0,0,.42),s.group.add(c);let l=new oe().makeTranslation(0,.42,0);for(let u=0;u<18;u++){let f=l.clone().multiply(new oe().makeScale(1,i,1)).multiply(new oe().makeRotationY(u/18*Math.PI));a.raw(new wt(n+.03,.05,4,40,Math.PI),"#e4e9ec",0,0,f)}for(let u of[.35,.65,.95,1.25]){let f=new oe().makeRotationX(Math.PI/2).setPosition(0,.42+Math.cos(u)*n*i,0);a.raw(new wt(Math.sin(u)*n+.03,.045,4,48),"#e4e9ec",0,0,f)}let h=a.sub(0,n+.2);h.rbox(0,0,2.6,.18,1.6,"#e4e9ec",{y:2.2,r:.05});for(let u of[-1.15,1.15])h.cyl(u,.6,.06,.06,2.2,"#bfc6cc",{seg:8});if(h.box(0,-.35,1.6,2,.08,"#2c4a58",{}),r==="flower"){for(let u=0;u<9;u++){let f=o()*6.28,d=(.25+o()*.5)*n;a.model(["tree_palmDetailedShort","tree_detailed","tree_small"][u%3],Math.cos(f)*d,Math.sin(f)*d,{h:1.8+o()*.9,y:.42,rot:f,shadow:!1})}for(let u=0;u<40;u++){let f=o()*6.28,d=o()*.85*n;a.model(["flower_redA","flower_purpleA","flower_yellowA","flower_redB","plant_bushDetailed"][u%5],Math.cos(f)*d,Math.sin(f)*d,{h:.45+o()*.3,y:.42,rot:f,shadow:!1})}}else{a.lathe(0,0,[[0,.42],[2.2,.42],[1.9,1.4],[1.4,2.6],[1.1,3.6],[.7,4.3],[0,4.5]],"#4c7f48",{seg:14});for(let u=0;u<26;u++){let f=.6+o()*3.6,d=o()*6.28,g=2.2-(f-.42)*.4+.1;a.model(u%2?"plant_bushSmall":"grass_leafsLarge",Math.cos(d)*g,Math.sin(d)*g,{h:.5,y:f,rot:d,shadow:!1})}a.tube(0,0,[[0,4.3,.75],[0,3.4,1.35],[0,2,1.95],[0,.5,2.3]],.2,"#cfeeff",{tseg:20}),a.raw(new wt(2.6,.05,4,40),"#d8dde0",0,0,new oe().makeRotationX(Math.PI/2).setPosition(0,3,0))}a.solidCircle(0,0,n+.3)}function Y1(s,e,t){let n=s.sub(e,t,-.35),i=8.6,r=6;for(let c of[-1,1])for(let l of[-1,1])n.tube(0,0,[[l*2.6,0,c*1.5],[l*.25,i,c*.85]],.2,"#e3e7ea",{tseg:2,rseg:10});for(let c of[-1,1])n.box(0,c*1.2,5.6,.2,.3,"#d0d6db",{y:4.2});n.rbox(0,3.1,9,1.8,2.6,"#eef0ee",{r:.25}),n.box(0,1.79,8.6,.8,.04,"#5c8ea8",{y:.6}),n.rbox(0,3.1,9.3,.15,2.9,"#c8cfd5",{y:1.8,r:.06});for(let c=0;c<5;c++)n.model("pottedPlant",-3.6+c*1.8,1.55,{h:.9,shadow:!1});n.sign(0,1.84,"SINGAPORE FLYER",{w:3.2,h:.4,y:1.55,bg:"#1d5a8a",board:!1}),n.solid(0,3.1,9,2.6);for(let c of[-2.6,2.6])for(let l of[-1.5,1.5])n.solidCircle(c,l,.3);let o=Di(c=>{for(let h of[-.32,.32])c.add(new wt(r,.09,6,96),"#f2f4f5",Oe(0,0,h),0);c.add(new wt(r-.45,.06,5,96),"#e6eaec",Oe(0,0,0),0),c.add(new nt(.55,.55,1.8,20),"#c4ccd2",Oe(0,0,0,Math.PI/2),0),c.add(new nt(.8,.8,.2,20),"#dfe4e8",Oe(0,0,0,Math.PI/2),0);let l=28;for(let h=0;h<l*2;h++){let u=h/(l*2)*Math.PI*2,f=Math.cos(u),d=Math.sin(u);c.add(new nt(.03,.03,.64,4),"#dfe3e6",Oe(f*r,d*r,0,Math.PI/2),0);let g=new E(f*(r-.45),d*(r-.45),0),y=new E(f*r,d*r,h%2?.32:-.32),m=new nt(.025,.025,g.distanceTo(y),4),p=new Mt().setFromUnitVectors(new E(0,1,0),y.clone().sub(g).normalize());c.add(m,"#dfe3e6",new oe().compose(g.clone().add(y).multiplyScalar(.5),p,new E(1,1,1)),0)}for(let h=0;h<l;h++){let u=h/l*Math.PI*2;for(let f of[-1,1]){let d=new E(0,0,f*.85),g=new E(Math.cos(u)*(r-.45),Math.sin(u)*(r-.45),-f*.05),y=new nt(.012,.012,d.distanceTo(g),3),m=new Mt().setFromUnitVectors(new E(0,1,0),g.clone().sub(d).normalize());c.add(y,"#b8c0c6",new oe().compose(d.clone().add(g).multiplyScalar(.5),m,new E(1,1,1)),0)}}for(let h=0;h<l;h++){let u=h/l*Math.PI*2+.05,f=Math.cos(u),d=Math.sin(u),g=r+.62;c.add(new Gs(.42,.75,6,14),"#9fd3ea",Oe(f*g,d*g,0,Math.PI/2),0);for(let y of[-.5,.5])c.add(new wt(.43,.04,4,16),"#ffffff",Oe(f*g,d*g,y),0);c.add(new At(.1,.4,.1),"#e8ecef",Oe(f*(r+.25),d*(r+.25),0,0,0,u-Math.PI/2),0),c.add(new yt(.06,6,4),"#ffffff",Oe(f*(r+.12),d*(r+.12),.34),0,"win")}}),a=new lt;return a.add(o),n.put(a,0,0,0,i),s.group.add(a),o}function Np(s){let e=ui(77);s.paintCircle(0,12,13,"#7fbb64"),s.paintRect(0,4.5,3,4,"#e0d4b8"),s.paintCircle(0,11.5,3.4,"#e0d4b8"),s.paintRect(0,-8,32,9,"#ddd6c6");for(let[i,r]of[[-3.2,9.6],[-5.2,11.5],[3.4,9.6],[5.6,11.8],[-2.4,14.4],[2.6,14.8],[-8.2,10.4],[8.4,10.6]])s.paintCircle(i,r,1.15,"#e0d4b8");for(let[i,r,o]of nc)W1(s,i,r,o,e);X1(s,nc[0],nc[2]),Up(s,-7,-11,6,.62,"flower",e),Up(s,5.5,-12,4.6,1.15,"cloud",e),s.sign(-7,-4.6,"FLOWER DOME",{w:2.6,h:.5,y:1.3,bg:"#4c8f6a"}),s.sign(5.5,-6.8,"CLOUD FOREST",{w:2.6,h:.5,y:1.3,bg:"#3a7f9a"});for(let[i,r]of[[-7,-4.6],[5.5,-6.8]])for(let o of[-1.2,1.2])s.cyl(i+o,r-.05,.05,.05,1.1,"#555b62",{seg:6});let t=Y1(s,15.5,-9);s.spots.priya=[-2.6,4.8,Math.PI],s.spots.grove=[0,11.5],s.sign(0,6.6,"SUPERTREE GROVE",{w:3,h:.5,y:2.3,bg:"#5d4a6e",rot:Math.PI});for(let i of[-1.6,1.6])s.cyl(i,6.55,.06,.06,2.3,"#3b2d48",{seg:8});Zt(s,-3.6,6.2,3.2,.8),Zt(s,3.6,6.2,3.2,.8);for(let[i,r]of[[-14.5,4.5],[14.5,4.5],[-14,-5.3]])zn(s,i,r,.9);for(let[i,r]of[[-13.5,9],[13.5,9.5],[-12.5,17.5],[12.8,18]])rr(s,i,r,.9);for(let[i,r]of[[-3,7.6],[3,7.6],[-8,4.8],[8.5,4.5],[-12,15],[12,15.5],[-1.5,18.8],[7.8,14.2],[-8,14.6]])Vn(s,i,r,1.1,!0);for(let i=0;i<70;i++){let r=e()*6.28,o=4+e()*8.5,a=Math.cos(r)*o,c=12+Math.sin(r)*o;nc.some(([l,h])=>Math.hypot(l-a,h-c)<2.2)||Math.hypot(a,c-11.5)<3.6||c<7||s.model(["grass_large","grass_leafs","flower_yellowB","flower_purpleB","plant_flatShort"][i%5],a,c,{h:.35+e()*.25,rot:r,shadow:!1})}Xt(s,2.5,4.4,Math.PI),Xt(s,-2.2,18.5,Math.PI),Xt(s,-3.2,11.5,Math.PI/2),Xt(s,3.2,11.5,-Math.PI/2);for(let i of[-11,-6,6,11])bn(s,i,-3.8),s.solidCircle(i,-3.8,.15);s.coins=[[-13.5,6.5],[12.5,7.8],[0,19.5]];let n=0;s.updaters.push((i,r)=>{n+=i,t.rotation.z+=i*.05;let o=Qs.super;if(o)if(r.night>.4){let a=r.show?.35:.05;o.color.setHSL(n*a%1,.85,.5+.15*Math.sin(n*(r.show?6:1.5))),o.color.multiplyScalar(1.3)}else o.color.setRGB(.55,.5,.6)})}var rc="#9a7550",so="#c9a86a",sc="#d6b062";function $1(s,e,t,n,i){let r=s.sub(e,t,n),o="#f2f0ea";for(let a of[-.3,.3]){r.rbox(a,.2,.05,.05,1.3,o,{y:.32,r:.015});for(let c of[-.35,.75])r.cyl(a,c,.025,.025,.32,o,{seg:6});r.rbox(a,-.72,.05,.05,.7,o,{y:.5,rx:.75,r:.015})}for(let a=0;a<9;a++)r.box(0,-.38+a*.145,.6,.03,.11,"#c99a62",{y:.36});for(let a=0;a<5;a++)r.box(0,-.55-a*.1,.6,.03,.08,"#c99a62",{y:.47+a*.09,rx:.75});r.rbox(0,.2,.56,.06,1.2,i,{y:.39,r:.025}),r.rbox(0,-.75,.56,.06,.62,i,{y:.62,rx:.75,r:.025}),r.solid(0,0,.7,1.9)}function K1(s,e,t,n,i,r){let o=s.sub(e,t,n);for(let a=0;a<6;a++)o.box(0,-.75+a*.25+.125,.9,.02,.25,a%2?i:r,{y:.01})}function Z1(s,e,t){let n=s.sub(e,t,-.2),i=[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]];for(let[a,c]of i)n.tube(0,0,[[a*1.15,0,c*1.15],[a,2.2,c]],.07,"#f5f1e6",{tseg:2,rseg:8});for(let[a,c]of[[0,1],[2,3],[0,2],[1,3]]){let[l,h]=i[a],[u,f]=i[c];n.tube(0,0,[[l*1.08,.4,h*1.08],[u*1,1.9,f*1]],.03,"#e2383f",{tseg:2,rseg:5}),n.tube(0,0,[[u*1.08,.4,f*1.08],[l*1,1.9,h*1]],.03,"#e2383f",{tseg:2,rseg:5})}n.rbox(0,0,2.3,.12,2.3,rc,{y:2.2,r:.03});for(let a=0;a<9;a++)for(let[c,l,h]of[[-1.1+a*.275,-1.1],[-1.1+a*.275,1.1],[-1.1,-1.1+a*.275],[1.1,-1.1+a*.275]])n.cyl(c,l,.02,.02,.5,"#f5f1e6",{y:2.32,seg:4});for(let[a,c,l,h]of[[2.3,.05,0,-1.1],[2.3,.05,0,1.1],[.05,2.3,-1.1,0],[.05,2.3,1.1,0]])n.box(l,h,a,.05,c,"#f5f1e6",{y:2.82});n.rbox(0,.15,1.6,1.25,1.4,"#f5f1e6",{y:2.32,r:.06}),n.box(0,-.56,1.3,.5,.04,"#5aa9cf",{y:2.95});for(let a of[-.81,.81])n.box(a,.15,.04,.5,.9,"#5aa9cf",{y:2.95});n.box(0,-.57,1.3,.32,.05,"#e2383f",{y:2.55}),n.sign(0,-.6,"LIFEGUARD",{w:1.1,h:.24,y:2.71,rot:Math.PI,bg:"#e2383f",board:!1}),n.cone(0,.15,1.45,.75,"#e2383f",{y:3.57,seg:4,spin:Math.PI/4,sz:.95}),n.rbox(0,.15,2,.08,1.85,"#f3c13a",{y:3.52,r:.03});let r=[[0,2.2,-1.15],[0,0,-3.3]];for(let a of[-.4,.4])n.tube(0,0,r.map(([c,l,h])=>[a,l+.08,h]),.05,rc,{tseg:2,rseg:5});for(let a=1;a<10;a++){let c=a/10;n.box(0,-1.15-2.15*c,.8,.04,.16,Ot(rc,.05),{y:2.2*(1-c)+.08})}n.cyl(1,-1,.025,.025,2,"#d9d9d9",{y:2.8,seg:6}),n.box(1,-.65,.02,.32,.6,"#e2383f",{y:4.4}),n.box(1,-.65,.025,.16,.6,"#f3c13a",{y:4.48});let o=new wt(.26,.08,8,20);n.raw(o,"#ff5a3a",.5,-1.17,new oe().makeTranslation(0,2.5,0));for(let a=0;a<4;a++)n.raw(new wt(.262,.083,8,3,.35),"#ffffff",.5,-1.17,new oe().makeRotationZ(a*Math.PI/2).setPosition(0,2.5,-.001));n.solid(0,0,2.2,2.2)}function J1(s,e,t){let n=s.sub(e,t);for(let[i,r]of[[-2.3,-2],[2.3,-2],[-2.3,2],[2.3,2]]){n.cyl(i,r,.13,.15,2.75,so,{seg:8});for(let o=.5;o<2.6;o+=.55)n.cyl(i,r,.16,.16,.05,Ot(so,-.15),{y:o,seg:8});n.solidCircle(i,r,.2)}n.lathe(0,0,[[0,2.7],[3.85,2.45],[3.9,2.55],[3.4,2.85],[2.1,3.55],[.8,4.25],[0,4.6]],sc,{seg:9}),n.lathe(0,0,[[0,3.9],[1.5,3.85],[1.4,3.95],[.5,4.5],[0,4.75]],Ot(sc,-.08),{seg:9,rot:.3});for(let i=0;i<36;i++){let r=i/36*Math.PI*2;n.cone(Math.cos(r)*3.75,Math.sin(r)*3.75,.22,.45,Ot(sc,i%3*-.05),{y:2.2,rx:Math.PI,seg:4})}n.cone(0,0,.12,.5,Ot(sc,-.2),{y:4.6,seg:6}),n.rbox(0,.6,4,1.05,.8,"#a9835a",{r:.04});for(let i=0;i<22;i++)n.cyl(-1.95+i*.186,1.02,.085,.085,1.05,i%2?so:Ot(so,-.08),{seg:6});n.rbox(0,.6,4.3,.1,1.05,"#e7cfa2",{y:1.05,r:.03}),n.rbox(0,-1.2,3.4,1.6,.4,"#7a5a40",{r:.03});for(let i of[.9,1.35])for(let r=0;r<8;r++)n.model(r%3?"soda-bottle":"glass",-1.4+r*.4,-1.05,{h:.32,y:i,shadow:!1});n.model("speaker",1.6,-.95,{h:.5,y:1.6,shadow:!1}),n.model("radio",-1.5,-1.05,{h:.3,y:1.6,shadow:!1}),[["coconut",-1.4],["cocktail",-.7],["frappe",0],["coconut-half",.8],["cocktail",1.5]].forEach(([i,r])=>n.model(i,r,.6,{h:.3,y:1.15,shadow:!1})),n.model("pineapple",1.9,.55,{h:.4,y:1.15,shadow:!1});for(let i of[-1.5,-.5,.5,1.5])n.model("stoolBar",i,1.55,{h:.85,solid:"circle"});n.sign(0,2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:0,bg:"#2f8fd8",board:!1}),n.sign(0,-2.15,"BEACH BAR",{w:2.4,h:.55,y:2,rot:Math.PI,bg:"#2f8fd8",board:!1});for(let i of[-3.3,3.3])n.cyl(i,2.6,.04,.05,1.6,so,{seg:6}),n.cyl(i,2.6,.1,.07,.2,"#7a5a40",{y:1.6,seg:8}),n.cone(i,2.6,.08,.25,"#ff9a3a",{y:1.8,seg:6,glow:"win"}),n.solidCircle(i,2.6,.12);n.solid(0,.6,4,.8),n.solid(0,-1.2,3.4,.4)}function j1(s,e,t){let n="#e6cf8f";s.lathe(e,t,[[0,0],[1,0],[.95,.3],[.7,.35],[0,.35]],n,{seg:18}),s.lathe(e,t,[[0,.35],[.45,.35],[.42,.8],[.5,.82],[.5,.9],[0,.9]],Ot(n,-.03),{seg:14});for(let i=0;i<4;i++){let r=i/4*Math.PI*2+.4,o=e+Math.cos(r)*.72,a=t+Math.sin(r)*.72;s.lathe(o,a,[[0,.3],[.17,.3],[.15,.62],[.2,.64],[0,.66]],n,{seg:10}),s.cone(o,a,.14,.2,Ot(n,-.06),{y:.65,seg:8})}s.cyl(e,t,.01,.01,.5,"#7a5a40",{y:.9,seg:3}),s.box(e+.1,t,.2,.12,.01,"#e2383f",{y:1.25}),s.model("barrel",e+1.2,t+.3,{h:.3,shadow:!1}),s.solidCircle(e,t,.9)}function Q1(s,e,t,n,i){let r=new kn;for(let o=0;o<10;o++){let a=o/10*Math.PI*2,c=o%2?.07:.2;o?r.lineTo(Math.cos(a)*c,Math.sin(a)*c):r.moveTo(c,0)}s.extrude(e,t,r,.03,i,{rot:n,bevel:.015})}function Op(s){let e=ui(31);s.paintRect(0,9.5,40,13,"#f1dfa8"),s.paintRect(0,4.8,3.2,3.6,"#c8a070"),s.paintRect(0,-7.5,30,8,"#e7dcc4"),s.paintRect(0,15.6,40,1.4,"#ddc68a");for(let r=0;r<12;r++)s.box(0,3.15+r*.3,3,.05,.26,Ot(rc,r%3*.03),{});for(let[r,o,a]of[[-13,6.5,1],[-8,10,1.1],[-2.8,6.2,.9],[4.5,10.5,1.1],[10,6.4,1],[14.5,10,1.05],[-15.5,12.5,1]]){rr(s,r,o,a),s.solidCircle(r,o,.3);for(let c=0;c<2;c++)s.model("coconut",r+.5+e()*.5,o+(e()-.5)*.8,{h:.22,rot:e()*6,shadow:!1})}for(let[r,o,a,c,l]of[[-5,11.5,"#e2383f","#3b82c4","#ffffff"],[1.2,12.2,"#3b82c4","#f3c13a","#ffffff"],[7.5,12,"#f3c13a","#ff8fb1","#ffffff"]])tp(s,r,o,a),s.solidCircle(r,o,.15),$1(s,r-.95,o+.1,Math.PI,c),K1(s,r+1.1,o+.5,.25,c,l);Z1(s,12,13.5),J1(s,-9,-7.5);let t=s.sub(-10.5,8.6);for(let r of[-1.9,1.9])t.cyl(r,0,.05,.05,2.2,"#f5f1e6",{seg:8}),t.solidCircle(r,0,.1);t.box(0,0,3.8,.5,.02,"#2b2b30",{y:1.6});for(let r=0;r<16;r++)t.box(-1.8+r*.24,0,.012,.5,.025,"#d9d9d9",{y:1.6});t.box(0,0,3.8,.06,.03,"#ffffff",{y:2.08}),t.box(0,0,3.8,.04,.03,"#ffffff",{y:1.58});let n=new yt(.17,16,12);for(let r=0;r<6;r++){let o=new yt(.172,4,12,r/6*Math.PI*2,Math.PI/3);t.add(o,["#e2383f","#ffffff","#3b82c4","#ffffff","#f3c13a","#ffffff"][r],1.1,1.3,.17)}n.dispose(),j1(s,5.6,14.2);for(let[r,o,a]of[[6.9,13.7,"#ff8a4a"],[-3.4,15.2,"#e85d8a"],[9.6,15.4,"#f3a03a"]])Q1(s,r,o,e()*6,a);for(let[r,o,a,c]of[[-14.6,15,.3,"#f3c13a"],[-13.2,15.4,.15,"#e2383f"]]){let l=s.sub(r,o,a);l.ball(0,0,.32,c,{sx:1,sy:.4,sz:5.2,seg:16,hseg:8}),l.ball(0,.2,.2,"#2b2b30",{sx:1,sy:.3,sz:1.6,y:.18}),l.tube(.45,0,[[0,.06,-1.1],[0,.06,1.1]],.025,"#d9d9d9",{tseg:2}),l.solid(0,0,.7,3.2)}for(let[r,o,a,c]of[[-17,14.5,"rock_largeA",1.2],[-16,15.8,"rock_smallB",.5],[16.5,14.8,"rock_largeB",1.1],[15.4,15.9,"rock_smallA",.5],[-1.6,15.7,"stone_smallA",.3],[3.6,16,"rock_smallC",.35]])s.model(a,r,o,{h:c,rot:e()*6.3,solid:c>.6?"circle":!1});let i=s.sub(5,-8);i.rbox(0,0,8.8,.7,1,"#d9cdb4",{r:.12}),i.rbox(0,.3,8.4,2.4,.22,"#fffaf0",{y:.7,r:.08}),i.sign(0,.42,"SENTOSA",{w:8,h:2,y:1.9,bg:"#fffaf0",rainbow:!0,border:!1,board:!1});for(let r of[-4.7,4.7])Zt(i,r,0,1.4,1.2);i.solid(0,.15,8.8,1);for(let r=0;r<7;r++)i.model(["flower_redA","flower_yellowA","flower_purpleA"][r%3],-3.6+r*1.2,-.7,{h:.5,shadow:!1});es(s,3.5,5.2,Math.PI,"#f7f2e8","#ff8fb1",{label:"ICE CREAM $1",signBg:"#e85d8a"}),s.model("ice-cream",2.85,5.2,{h:.35,y:1.24,shadow:!1}),s.model("popsicle",4.15,5.2,{h:.3,y:1.24,shadow:!1}),s.spots.icecream=[3.5,6.6,Math.PI],s.spots.raj=[10.5,11.6,-Math.PI*.8],Xt(s,-.5,14.2,0),s.sign(2,13.8,"SUNSET POINT",{w:2.2,h:.5,y:1.6,bg:"#e8743b"}),s.cyl(2,13.8,.05,.05,1.3,"#7a5a40",{seg:6});for(let[r,o]of[[-14,-5],[14,-4.5],[-3,-5],[10.5,-6.5]])Vn(s,r,o,1.2,!0);for(let r of[-12,-5,6,12])bn(s,r,-3.8),s.solidCircle(r,-3.8,.15);for(let r=0;r<30;r++){let o=(e()-.5)*34,a=3.5+e()*2.5;Math.abs(o)<2||Math.abs(o-3.5)<1.6||s.model(r%2?"grass_leafs":"grass_large",o,a,{h:.4+e()*.3,rot:e()*6.3,shadow:!1})}s.spots.cat=[-12.2,11.2,.4],s.coins=[[-14,4.5],[8.5,14.5],[-2.5,-6.5]]}function Fp(s,e,t=128){let n=new Ei;n.add(new Ys(16777215,8952234,2.2));let i=new Pi(16777215,2.2);i.position.set(1,2,3),n.add(i);let r=new Et(30,1,.1,20);r.position.set(.9,1.5,3.4),r.lookAt(0,.95,0);let o=new In(t,t,{colorSpace:Je}),a=new Uint8Array(t*t*4),c=document.createElement("canvas");c.width=c.height=t;let l=c.getContext("2d"),h=[],u=s.getClearColor(new Ae),f=s.getClearAlpha();s.setClearColor(0,0);for(let d of e){let g=ts({char:d});Ni(g,.4,0),n.add(g.root),s.setRenderTarget(o),s.clear(),s.render(n,r),s.readRenderTargetPixels(o,0,0,t,t,a);let y=l.createImageData(t,t);for(let m=0;m<t;m++)y.data.set(a.subarray((t-1-m)*t*4,(t-m)*t*4),m*t*4);l.clearRect(0,0,t,t),l.putImageData(y,0,0),h.push(c.toDataURL()),n.remove(g.root)}return s.setRenderTarget(null),s.setClearColor(u,f),o.dispose(),h}var oc=class extends Ei{constructor(){super();let e=new At;e.deleteAttribute("uv");let t=new ut({side:Dt}),n=new ut,i=new $s(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ne(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ne(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ne(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ne(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Ne(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ne(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new Ne(e,ur(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new Ne(e,ur(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Ne(e,ur(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new Ne(e,ur(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new Ne(e,ur(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ne(e,ur(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ur(s){let e=new Nt;return e.color.setScalar(s),e}var eM={hdb:Ep,hawker:Tp,chinatown:Ip,marina:Lp,gardens:Np,sentosa:Op},Bp=new URLSearchParams(location.search).has("debug"),Bt=s=>document.getElementById(s),kp=()=>new Promise(s=>setTimeout(s,20)),tM=[{char:"female-d"},{char:"male-b",hat:{type:"cap",color:"#2f8fd8"}},{char:"female-e"},{char:"male-f"},{char:"female-a",hat:{type:"bucket",color:"#ff8fb1"}},{char:"male-c"}];async function nM(){let s=new Xa,e=new qa;s.loading("Loading fonts\u2026");try{await Promise.race([document.fonts.load('800 40px "Baloo 2"'),new Promise(X=>setTimeout(X,2500))])}catch{}s.loading("Loading 3D models\u2026 0%"),await $d(X=>s.loading(`Loading 3D models\u2026 ${Math.round(X*100)}%`,X)),s.loading("Building the island\u2026",1),await kp();let t=Bt("c"),n=matchMedia("(pointer: coarse)").matches;e.data.settings.gfx||(e.data.settings.gfx=n?"low":"high");let i=e.data.settings.gfx==="high",r=new ea({canvas:t,antialias:!0});r.setPixelRatio(Math.min(devicePixelRatio,i?2:1.25)),r.setSize(innerWidth,innerHeight),r.toneMapping=hh,r.toneMappingExposure=1.05,r.shadowMap.enabled=i,r.shadowMap.type=lh;let o=new Ei,a=new Hs(r);o.environment=a.fromScene(new oc,.04).texture,o.environmentIntensity=.35;let c=new Et(55,innerWidth/innerHeight,.1,2e3),l=new Ua,h=new $r,u=Dd.map(X=>new Da(X,h,l)),f=Object.fromEntries(u.map(X=>[X.id,X]));for(let X of u)eM[X.id](X),o.add(X.group);s.loading("Painting roads and planting trees\u2026",1),await kp();let d=cp(l,h,r);o.add(d.mesh,h.build(),Ia.build());let g=new Ya(e.data.settings),y=new Oa(o,i),m=new Ba(o),p=new Ha(o,l,e.data.char||"female-a"),v=new Va(c);v.world=l;let _=new Ga(t,Bt("joy"),Bt("joyKnob")),x=new Wa(g),P=new ja(o),R=new Ka(o,l,p),C=new ec(o,d.path,p,3),T={scene:o,camera:c,renderer:r,world:l,sites:f,siteList:u,player:p,rig:v,sky:y,ui:s,dlg:x,audio:g,save:e,fx:P,npcs:R,time:e.data.time??.1,env:{night:0,show:!1},busy:!1,titleOpen:!0,has:X=>!!e.data.flags[X],set(X){e.data.flags[X]=1,e.write()},pay(X){return e.data.money<X?!1:(e.data.money-=X,s.setMoney(e.data.money,!0),e.write(),!0)},give(X){e.data.money+=X,s.setMoney(e.data.money,!0),e.write()},addFood(X){let ne=to.find(Te=>Te.id===X);e.data.foods[X]||s.toast(`${ne.icon} ${ne.name} added to your food album!`),e.data.foods[X]=1,e.write(),s.setAlbum(Object.keys(e.data.foods).length,to.length)},hours:()=>(6+T.time*24)%24,isNight(){let X=T.hours();return X>=19.5||X<5.5},refresh(){s.renderTasks(w.tasks())}};u.forEach((X,ne)=>{let Te=ne%2?3:-3;R.walker(X,tM[ne],[-13,Te],[13,Te],1.1+ne%3*.2)});let w=Sp(T);T.quests=w;let b=new Za(T);T.map=b;let L=[...d.coinSpots];for(let X of u)X.coins.forEach(([ne,Te],Y)=>L.push({id:`${X.id}${Y}`,dir:X.dirAt(ne,Te)}));let H=new $a(o,L,e,X=>{T.give(1),g.coin(),P.burst(X.dir.clone().multiplyScalar(ze+1),X.dir,"#ffd23f",24,3,.6,.25),H.found===H.total&&s.toast("\u{1F31F} You found every coin on the planet!",4e3)});m.onStart=()=>{e.data.settings.rain&&!T.titleOpen&&s.toast("\u{1F327}\uFE0F A tropical shower! Your umbrella pops open.")},P.onBang=()=>g.pop(),T.travel=X=>{T.busy||p.dropping||(b.focus=X.id,g.whoosh(),v.flyTo(X.center,.9,()=>{b.show(!1),p.placeAtSite(X,X.def.spawn),p.startDrop(22),v.yaw=0,v.pitch=0,p.onLand=()=>s.toast(`${X.def.icon} ${X.def.name}`)}))},s.onTask=X=>{!T.titleOpen&&!T.busy&&X.site&&b.show(!0,f[X.site])},T.photo=()=>{let X=f.marina,ne=2*Math.atan(Math.tan(35*xt.DEG2RAD)/Math.min(c.aspect,4/3))*xt.RAD2DEG,Te=new Et(ne,c.aspect,.1,2e3);Te.position.copy(X.dirAt(-3.2,15.5)).multiplyScalar(ze+3.2),Te.up.copy(X.center),Te.lookAt(X.dirAt(-4.6,4).multiplyScalar(ze+7)),p.root.visible=!1,y.dome.position.copy(Te.position),r.render(o,Te);let Y=document.createElement("canvas");Y.width=800,Y.height=600;let Q=Y.getContext("2d"),I=t.width,ve=t.height,te=4/3,ye=Math.min(I,ve*te),he=ye/te;return Q.drawImage(t,(I-ye)/2,(ve-he)/2,ye,he,0,0,800,600),Q.fillStyle="rgba(255,255,255,0.85)",Q.fillRect(0,548,800,52),Q.fillStyle="#2e2638",Q.font='700 26px "Baloo 2", sans-serif',Q.fillText("Greetings from Singapore Planet!  \u{1F981}",22,582),p.root.visible=!0,Y.toDataURL("image/jpeg",.9)},T.checkFinale=()=>{!w.mainDone()||T.has("finale")||(T.set("finale"),setTimeout(()=>{P.fireworks(16),s.modal(`<h2>\u{1F386} Majulah, explorer!</h2>
        <p>You finished every task on Singapore Planet: kopi with Auntie Mei, a choped table at Lau Pa Sat, a lost card returned, a Merlion photo and the Garden Rhapsody.</p>
        <p>Keep exploring! There are still coins to find, foods to taste${T.has("q_cat")?"":" and a certain orange cat to track down"}.</p>
        <button class="btn" onclick="document.querySelector('#modal .modal-x').click()">Keep exploring</button>`)},1200))},Bt("btnAlbum").addEventListener("click",()=>{let X=e.data.foods;s.modal(`<h2>\u{1F4D6} Food Album</h2>
      <div class="album">${to.map(ne=>`<div class="food ${X[ne.id]?"got":""}"><div class="f-icon">${X[ne.id]?ne.icon:"\u2754"}</div><div class="f-name">${X[ne.id]?ne.name:"???"}</div><div class="f-where">${ne.where}</div>${X[ne.id]?`<div class="f-desc">${ne.desc}</div>`:""}</div>`).join("")}</div>
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
      <p class="muted">3D assets by <a href="https://kenney.nl" target="_blank" rel="noopener">Kenney</a> (CC0). Landmarks built in code.</p>`);ne.querySelectorAll(".toggle").forEach(Y=>Y.addEventListener("click",()=>{let Q=Y.dataset.k;X[Q]=!X[Q],Q==="music"&&g.setMusic(X.music),Q==="sfx"&&g.setSfx(X.sfx),e.write(),D()})),ne.querySelector("[data-a=gfx]").addEventListener("click",()=>{X.gfx=X.gfx==="high"?"low":"high",e.data.time=T.time,e.write(),location.reload()}),ne.querySelector("[data-a=fs]").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})});let Te=ne.querySelector("[data-a=reset]");Te.addEventListener("click",()=>{Te.dataset.sure?e.reset():(Te.dataset.sure="1",Te.textContent="\u26A0\uFE0F Tap again to erase everything")})};Bt("btnSettings").addEventListener("click",D),Bt("btnMap").addEventListener("click",()=>N());let N=()=>{T.titleOpen||T.busy||p.dropping||b.show(!b.open)};_.onDrag=(X,ne)=>v.drag(X,ne),_.onZoom=X=>v.zoom(X),s.setMoney(e.data.money),s.setAlbum(Object.keys(e.data.foods).length,to.length),T.refresh();let W=matchMedia("(pointer: coarse)").matches;v.autoSpin=25;let B=X=>{if(g.unlock(),T.titleOpen=!1,v.autoSpin=0,Bt("title").classList.add("hidden"),s.showHud(!0),Bt("joy").classList.toggle("hidden",!W),X&&e.data.pos){let[ne,Te,Y,Q,I,ve]=e.data.pos;p.place(new E(ne,Te,Y),new E(Q,I,ve)),v.openMap(p.pos,p.fwd),b.show(!1),p.startDrop(18),p.onLand=()=>s.toast("Welcome back! \u{1F44B}")}else b.show(!0),T.travel(f.hdb),p.onLand=()=>{s.toast("\u{1F3E2} Toa Payoh Heartland"),setTimeout(()=>s.toast("Tip: walk up to people and press E to chat"),2600)}};Bt("btnStart").addEventListener("click",()=>{if(e.exists&&!Bt("btnStart").dataset.sure){Bt("btnStart").dataset.sure="1",Bt("btnStart").textContent="Start over? Tap again";return}if(e.exists){e.reset();return}B(!1)}),e.exists&&e.data.pos&&(Bt("btnContinue").classList.remove("hidden"),Bt("btnContinue").addEventListener("click",()=>B(!0))),addEventListener("resize",()=>{c.aspect=innerWidth/innerHeight,c.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight)});let J=Bt("picker"),G=Fp(r,pu);pu.forEach((X,ne)=>{let Te=document.createElement("button");Te.className="pick"+(X===p.char?" on":""),Te.innerHTML=`<img src="${G[ne]}" alt="${X}">`,Te.addEventListener("click",()=>{J.querySelectorAll(".pick").forEach(Y=>Y.classList.remove("on")),Te.classList.add("on"),p.setCharacter(X),e.data.char=X,e.write()}),J.appendChild(Te)}),s.doneLoading(),Bt("title").classList.remove("hidden");let ae={up:new E,east:new E,south:new E,north:new E},ue=new E,_e=Bt("fps"),Ue=performance.now(),Ye=0,$=0,se=0,we=0,le=0,De=async X=>{T.busy=!0,p.speed=0,v.yaw=.65,s.prompt(null);try{await X.run()}catch(ne){console.error(ne)}x.close(),T.busy=!1,T.refresh()};r.setAnimationLoop(()=>{let X=performance.now(),ne=Math.min(.05,(X-Ue)/1e3);if(Ue=X,le+=ne,T.titleOpen||(T.time=(T.time+ne/Pd)%1),(_.consume("KeyM")||b.open&&_.consume("Escape"))&&N(),s.isModal&&_.consume("Escape")&&s.closeModal(),x.open){_.consume("KeyE","Space","Enter")&&x.advance();let ve=_.consume("Digit1","Digit2","Digit3");ve&&x.pick(Number(ve.slice(-1))-1)}let Te=!T.titleOpen&&!T.busy&&!s.isModal&&!b.open&&v.mode==="follow";v.dragging=_.dragging;let Y=e.data.settings.rain&&m.level>.3;p.update(ne,Te?_.axis():null,Y),v.update(ne,p),p.worldPos(ue),js(p.pos,ae);let Q=xt.clamp((c.position.length()-90)/60,0,1);y.update(T.time,ae,ue,c.position,m.level,Q),T.env.night=y.night,g.night=y.night,m.update(ne,ue,ae,e.data.settings.rain&&!T.titleOpen),g.setRain(v.mode==="follow"?m.level:0),R.update(ne),H.update(ne,le,p),C.update(ne),P.update(ne,p);for(let ve of u)for(let te of ve.updaters)te(ne,T.env);w.update(ne),v.lookUpTarget=T.env.show&&Math.abs(p.speed)<.5?1:0,x.update(ne);let I=Te&&!p.dropping?l.nearestAct(p.pos):null;s.prompt(I?I.label:null),I&&(_.consume("KeyE","Enter","Space")||s.takePromptHit())&&De(I),b.update(w.activeSites()),Ye-=ne,Ye<=0&&(Ye=.5,s.setClock(T.hours(),T.isNight(),Y)),$-=ne,$<=0&&!T.titleOpen&&!p.dropping&&($=5,e.data.time=T.time,e.data.pos=[...p.pos.toArray(),...p.fwd.toArray()],e.write()),y.dome.position.copy(c.position),r.render(o,c),_.endFrame(),Bp&&(se++,we+=(X-(T._lastNow||X))/1e3,T._lastNow=X,we>.5&&(_e.textContent=`${Math.round(se/we)} fps \xB7 ${r.info.render.calls} calls \xB7 ${(r.info.render.triangles/1e3).toFixed(0)}k tris`,se=0,we=0))}),Bp&&(_e.classList.remove("hidden"),window.G=T,T.weather=m)}nM().catch(s=>{console.error(s);let e=document.getElementById("loading");e.classList.remove("hidden"),e.querySelector("span").textContent=`Couldn't start the game: ${s.message}`});
