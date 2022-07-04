import { encode } from "./encryption";

export const firstGameDate = new Date(2022, 4, 27);
const clearTextPageList: string[] = [];

const shuffle = <T>(array: T[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const getEncodePageList = (): string[] => {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw Error("Missing encryption key");
  }
  const encoded = clearTextPageList.map((pageName: string) =>
    encode(pageName, encryptionKey)
  );
  shuffle(encoded);
  return encoded;
};

export const encodedPageList = [
  "U2FsdGVkX19MKbLX4sRpHZJ6bczF+GyeBgxmFaIl/w4=",
  "U2FsdGVkX1/zE8MG1kvEDK7OJ/CQVwLZvJyolwITn+w=",
  "U2FsdGVkX1/eYnyK8oz7IjwdR47c1pahAYGeKBNZZDE=",
  "U2FsdGVkX1+sUbnsvlo3SOaLmwUUQlW2rSxga8BhV+k=",
  "U2FsdGVkX1/8K45666EBnMRvrDROg+jH3NXWD4OW5DA=",
  "U2FsdGVkX18F2oF1lx3JajwmX1t63KeI0Tr6pqvJIiM=",
  "U2FsdGVkX18FKGv2u/pgLyX07hc3SzHtmE0jQbi1M+o=",
  "U2FsdGVkX18iNQflibxBsPx8z0HMQgt8pLoEPiZ5f2o=",
  "U2FsdGVkX1/ZZZd5apE7XbwiZP03//Q65DAbXR2pT3c=",
  "U2FsdGVkX1/Mx1nH5EXxS5Pe/sliCy4m5aJNH7CbtFE=",
  "U2FsdGVkX1/XUdQzY02kYSWM1HYjTco1i43w1jjvi0aM9GlOEePgXI2w+35JQldD",
  "U2FsdGVkX1+n9LfJf/3xHUviitSNb6nQWu7wuG7x+Q8=",
  "U2FsdGVkX1+beIxAiT0NmVsm4xLX5G590XS6+LKwawA=",
  "U2FsdGVkX18jbh69G2qL+e6onA2ZLKjab1wcmjjQlrM=",
  "U2FsdGVkX19DqkMTPoHdPHhWObYlsxROSCMg2Llirj4UJHXG7MS1BNPANP+SzGkM",
  "U2FsdGVkX19VM+raesVkl84AA97sFsgM2PkXo7+bDps=",
  "U2FsdGVkX1+X2g5Mu1Sp5sdFXFrT2m4nlqXQlT6mLTY=",
  "U2FsdGVkX1+DwtIOY1IlRx+ddGQTjA6l2tdWKDtyNF8=",
  "U2FsdGVkX188VFgixII/KIVGpBeOpRR2ctb45hMaQno=",
  "U2FsdGVkX19c07XoYAwIkrHCKLvBd7/zaXI8zbBUW0o=",
  "U2FsdGVkX1+ccsHdHxr4rjWf1oNimCTk+eVCjlZPB+I=",
  "U2FsdGVkX1/dR8kONM4ig3TQMiBa6hCFZNOFFhKuHYc=",
  "U2FsdGVkX19Dq1Jfs2W6V8YY/+PA9xDDmaBS3FMk3fM=",
  "U2FsdGVkX19MDeXaeoXpGWEvU0QBaGyG3vOhqn63vD8=",
  "U2FsdGVkX19m+ubE7aK/b8TSPFICaVK/AfhvtOz/spI=",
  "U2FsdGVkX1+x6fVzG0tdQCiJS2Duzl3sXqjiy8bHLuQ=",
  "U2FsdGVkX18DH+rUgPYtUiI7jEwbI5sz8zcWg8B4uSs=",
  "U2FsdGVkX197ITKtggZGd/9wvy94N08FWtlu/WFaKoA=",
  "U2FsdGVkX19rOkNRyX/3TD8Ze9+aLmfQYO3Llz6ODTI=",
  "U2FsdGVkX19zXjPX0J8Ki4mjAdLTjxnGQZsgOxwACII=",
  "U2FsdGVkX1/6PdBuubAwhOpBCGeYawUccY/jJiFWUf4XxhWyTImu9pfovq3vF7b5",
  "U2FsdGVkX18ymeQqWy0OgJ6STyGrv4Md97BNtXVq4ZXYohx8qEe2UOXRD7pkUoslepZgdDxXXUOgvH8DYwI7wA==",
  "U2FsdGVkX1/cv05MtrQMbs/CRnXme5aqwdU1d0gFP2U=",
  "U2FsdGVkX190v7MLGrCERjSAJiKOP6op23vj6UPPyHA=",
  "U2FsdGVkX18mYbPoFvip27bW2mC92qaIb490v3YzSyk=",
  "U2FsdGVkX19D33dXLqMJmuPkzL1F4lseWo6R1IC5t0o=",
  "U2FsdGVkX189WH1enRCJVVN4yoV+sconUoLzLgO7yNY=",
  "U2FsdGVkX1/vfNl+f/fJwofTYrxaItPbri0ka/OU6MQ=",
  "U2FsdGVkX1+fy8Z+gBrwQ+nuoKSz5M/Qp3Y+LVtChPc=",
  "U2FsdGVkX1/hVclhIo7wEt5kUsq+0X2TmvmO5lR3VQaZuJAt9VhFIjExNedzme+b",
  "U2FsdGVkX1+2fZiilJIop2D1LWPdtPZYstLGOzb3nHc=",
  "U2FsdGVkX18UxmDosYX4GPLqEmrA1j4NL/LCiN9jn+zES7aEfdfBwpJx6tzIPAgT",
  "U2FsdGVkX182/G1KAeu3XWc9LdIGpjwaTgLS9SSOLm0=",
  "U2FsdGVkX1/pUHSzEpabx8WjkZcODetHJDoF9+wpr6c=",
  "U2FsdGVkX18XSSVXiK2ZDZ/lFZOLn/8YSk8Z15v/gGA=",
  "U2FsdGVkX1+w4G4hMYmawsyPOaGdN8o3klUotBlJaJQ=",
  "U2FsdGVkX1+IGRopHhIXKHWnzw6icL2o3ERrXLh/BVE=",
  "U2FsdGVkX196mubUQ5v18sbtvcb7gWLdC8DTnKPuLOo=",
  "U2FsdGVkX1/p1KSOzQyQRrV06VBacfyFFVvk914yLKvQR5V2Syh1R+KwtN9DCqz/",
  "U2FsdGVkX1/dfQlG51jtO0BTR5ZrjxlvZazTSNovwig=",
  "U2FsdGVkX18SorIZFmch6N2OHDn1VZ9b+155p6zNQfM=",
  "U2FsdGVkX1/LLa1oqujHQf/J680NZS6ctpqarFNr6uU=",
  "U2FsdGVkX19zlD/zU7/AiEYvBw4+tH0kFBA/YFj4pjQ=",
  "U2FsdGVkX195EH3lNHYe/ElEIpMVHHn+EP8Kqlkfvtc=",
  "U2FsdGVkX1+p6dsIGTVn+nCwWX1npuoWtHUYWCr2i0Q=",
  "U2FsdGVkX18iAsuh+ajJEnaylAV63spm3pjbuQxP0F0=",
  "U2FsdGVkX1+azinwODWGOCogHnS49B7V8/fIeZycPWU=",
  "U2FsdGVkX19G2WADpesN+TUziAVgVsC0JP3IjsuVT4Y=",
  "U2FsdGVkX1+qHIB4Fjleb/TGQIrr5Hp2PrY/Rl7+oIQ=",
  "U2FsdGVkX1+KR+ebn7bgiRknV5DYShvPvIoQGy+ImYgii1v5L2kXNiL3Poh131tg",
  "U2FsdGVkX181hq08Vrf7RGGfxtbDn5TPurs/eLurMF0=",
  "U2FsdGVkX18RjpcCCE0rNfCIfQw0yWHq5m9eZ+7VT6c=",
  "U2FsdGVkX18zyGWAlMhvOTacSC2qMXI5hDzblQXEEUc=",
  "U2FsdGVkX18TfeejTs78I25sXDG99yZN3BdKDN2ooHI=",
  "U2FsdGVkX18c+fwJ/NErOt4YMn+5cYTea+VCPZkmbw4=",
  "U2FsdGVkX1/ESWC/bmzhLRFD8Fe/niQ6WZG+KeZ1URM=",
  "U2FsdGVkX19W3wL7Lqf94eBxV3NfGeJLCxmQ9doE9f4=",
  "U2FsdGVkX1+CKe08fBZoPOLScg6jzmvDww/MnSk+p/k=",
  "U2FsdGVkX1/nvyzAo3o1uYjToE1Uo4igr/7EjTl9Q6w=",
  "U2FsdGVkX19joBwM9HMVrAm0mcKG9UY1nUpFh7buN+k=",
  "U2FsdGVkX1/lnUx7Mp+vngI+oJ8a9xC2XROeVuJpMsc=",
  "U2FsdGVkX1/o+8kZZw5zAvrq7/IDFOUuivkYm5TTi42NG5DIv2w+0MVpevzidkcM",
  "U2FsdGVkX1/BcICbdGaxD2i8nGNbxyzsyYE0tDId6JI=",
  "U2FsdGVkX18XgRZuPWnAdqyd29I/YSPXsXT3b6j5y4o=",
  "U2FsdGVkX1+YccSlpYmlCCvg57pDOOullPhxUFYIbYg=",
  "U2FsdGVkX18FpR8Y2A11m9cd0Ev33eIMfUcrwg7tUZoO6kEGT0YX+aOj+3VpT1Tg",
  "U2FsdGVkX18oIo2lVuDsl8KFHtsAKRwlvoF0G+pV1ctaI7kxkzRe5/C6cdiFoyU5",
  "U2FsdGVkX19ORMwnXHnmS5vm8Tc+0Tcngf3nUZGnsGs=",
  "U2FsdGVkX19Fmy3A7qosZXdNtwjfB4fZhnZ2Pl57UskMjpFukQPT1zuFBgMSE3w3",
  "U2FsdGVkX19xU/DWLqR4vw8tkVGqh1w9/BUF/iYAcIM=",
  "U2FsdGVkX1+nNNMlwPeNSalWc6RRnA5W93gUn0MFZ/Q=",
  "U2FsdGVkX19J34+9VHdW5t+GDpNmMXDDjYr37OFBEpM=",
  "U2FsdGVkX18BgbuWaj7e7XScF0XiNbdNQhkh98uKxv2xKNMy7fWvHhm9vajsn4Tr",
  "U2FsdGVkX1+RADHZVN1Nf2J5mIj5ZYlXw1i+U+fYcDY=",
  "U2FsdGVkX18VRbImMItxS+euhhPQKAmBsAbJpFpRAQc=",
  "U2FsdGVkX19bKbpLQC0dyZvH1ljPZU7cnH5pnwoWdyI=",
  "U2FsdGVkX1+gYPr2jFO+ieJKzMA+LQcL5ryqv3nzqLQ=",
  "U2FsdGVkX18Fe6b9odvVHbOuZ4D48cWftsYxgqlfwq4=",
  "U2FsdGVkX195anGDtPXl2vg5FZ3Vx2CkK2M61ROKtOQ=",
  "U2FsdGVkX19BT60U9Sndb+bF44tZeFvILaz/Vgbr38xo/yxzNG0Rn4kp837qjYGF",
  "U2FsdGVkX18ZRYqQ/EDru/iEDac3LP0F/WWlHBiU0/E=",
  "U2FsdGVkX18/pjV8tHgHaG+1uhgrEvP1kfkaiF0vD0g=",
  "U2FsdGVkX1+JD8Vmkkp2Li2iZ5+5nlbaDdQUFrQHCHQ=",
  "U2FsdGVkX19Qdplaicw0f3Ty++YoF8Ys2TMDwLn7dXc=",
  "U2FsdGVkX19ObPwhN9WC0P5Rg0tvRTmUZVxDCGTDOzA=",
  "U2FsdGVkX19dZgeO/KBbrWFcCipRNOR2Yu9L3VzjyVM=",
  "U2FsdGVkX1+DvtYyRhbbrWOsgTFFmuGtsJCrPY3bhYM=",
  "U2FsdGVkX182gTNzZ8/r62YM6Fl+T2TDY++2Qzdpsh4=",
  "U2FsdGVkX19+ukhh+XI7mxhrxn5tgUH6TrNLC48Pf0E=",
  "U2FsdGVkX1/NJS3qIp8/Wjk5RM2aq3vE1OBzQmR397E=",
  "U2FsdGVkX18W4EfYPMJnC5ziuNR0uxplqZr9bW5QK4A=",
  "U2FsdGVkX1+IeE88d4kvtEVfdLsiRgzIgYZ2FtZyQvU=",
  "U2FsdGVkX194opYUWBjCkn9HO1JtSm3bCqL4oOhnZ6I=",
  "U2FsdGVkX1+gIZIj/TJZivZGBVN1dFqktz84mDqUGhY=",
  "U2FsdGVkX19ta2tzoyY5qSYcr/ErZCKo9zX/DP8tTtc=",
  "U2FsdGVkX1/bQuJvtz+71cCG/yolntq+jJ4+pbfhRTE=",
  "U2FsdGVkX1+SpVkKfqhMzaIeq/LZ5RvjqleK33oWej4=",
  "U2FsdGVkX1/Cd4FqJIgMLd+NBOxR4pHRNVcgrBc9giI=",
  "U2FsdGVkX19mWBVP2YY8H6TtfsBawKHceDajDM+4kmU=",
  "U2FsdGVkX18XtWC3oGvRPi1MsqyaO3ltm90nBFWsxKc=",
  "U2FsdGVkX1+glPmdr0OhSms/C8DPNeLUFwE14CupwpU=",
  "U2FsdGVkX18g5VIGeS0nkpCIJ+aRA5oHshTYRqA/gjE=",
  "U2FsdGVkX18LazAply4GW4SibOl2zcHkj2O4BFF+q/rH5aV7qy7xi5u0nDjyTgLv",
  "U2FsdGVkX18VisD7mL/1XapILq/BHb0ej7U9GID1gKc=",
  "U2FsdGVkX18rjWS+vOhUTZ4v8N0JNQKRY1llk4LD3DI=",
  "U2FsdGVkX1/6l0QHCNKYlMebQOQDAR/mlxd7EnIAZBE=",
  "U2FsdGVkX1/DAie293esetFXIuRZZmMmpFb4wmUDo78=",
  "U2FsdGVkX19T47FlapadH4OQT43b6JOBIJV7p/4kXIo=",
  "U2FsdGVkX18HTOcpGnNOo5ea/fk5/cg76AoTx3v8fjE=",
  "U2FsdGVkX1954MnTl58T+pZYtpWHNBCvjO04xsHH8pA=",
  "U2FsdGVkX18wwKAEmBGbHxPWFW3zS5t2J9A+cglHwdo=",
  "U2FsdGVkX1/ZwYN+oHSkR9xgYi6dt4xXoaYMxkaM/Rg=",
  "U2FsdGVkX19jxRsbUZecI7jquhapgT1gk0GB0/hmg8V4lJnh1DRfIJDPePlXEL6G",
  "U2FsdGVkX1+njdDNzgYv4DEhd5/h47eLK0ftrfo39Lc=",
  "U2FsdGVkX19l9bf0Je8ujjFzsN8YSNOvT3qVPpHLycI=",
  "U2FsdGVkX1+6yLdb3RAd7OEeaCtRhlkb+x0F72rHceZjcfupZa8lfAjsqUPLxeKg",
  "U2FsdGVkX19raQYhx/fRGOdxDUj3zEzfUHw48ro98FObtozgdgL9MwaMWRaeQXrC",
  "U2FsdGVkX1/BupRjDaYzS4mpO3cBo1e1cWXaPcPjSA4=",
  "U2FsdGVkX1/jpgCM8jgTks4nzfqua0EQ66uI3bjtlRc=",
  "U2FsdGVkX1+1nLfr9Zcgq2VU+CZxZDwZMN0+SAkePwQ=",
  "U2FsdGVkX19udVznm5eiIBbqj4cuCegrYzs9NOSuygo=",
  "U2FsdGVkX1/QALJRT7gGDYeqTy/EB17pyjMV9DKJ7hM=",
  "U2FsdGVkX1+6saIAfaDzPac04+aIJGBz4NKBroZNBihU5qUAb0mo7AuP5w4Hfbav",
  "U2FsdGVkX19JdzVIr5HxDm2UYbKPAiZmKP60FgRr36Q=",
  "U2FsdGVkX1/OWFjGvgMtSFdLWN1fHJvNtD5v5MdAKb0=",
  "U2FsdGVkX1+OtDrUVhO042zj7qelHK90htEqQ2GD5bc=",
  "U2FsdGVkX1+9i74dfemM9mDyOWS0DZl99/z/PE2e1U73gNLyOtpgmuznto0Lgn4O",
  "U2FsdGVkX1/+MvSmuxtAeBAfuUCk/AC2kVRgujrCtAlkPMk3EN0j5mW0CR5jQ1aY",
  "U2FsdGVkX18hnApHMuE8GFGV0RM+x+G4wb8LRJgiZHw=",
  "U2FsdGVkX186Emjb7bm5HR3hFUGnF6Vw96BKsmjHULc=",
  "U2FsdGVkX1+wPA0i/rssjyFTDhikvrHnHhVOTOpQN34=",
  "U2FsdGVkX19Zf4g+bRkU7sLCtJyKBiUln1xoCeOXAiI=",
  "U2FsdGVkX18Y4FHTTMplkes6NKvlprhybpzIkl54RZs=",
  "U2FsdGVkX1/wHGrCwpmIXTkFTqz1JkxWW1x+0GUtw3I=",
  "U2FsdGVkX1913tTHfGwGnrGh8/rWU6qLfICBFf2pnos=",
  "U2FsdGVkX19ebRNz8JXYMZtSu+N08rcvVYZk1qVnakI=",
  "U2FsdGVkX1/F3yfMBPDTYYibpD7rACwx2pep8wmq53o=",
  "U2FsdGVkX19KTINATTZ83h1iBdqFfwLxs6cnAM93oMU=",
  "U2FsdGVkX1+DBPgxx7E2VDR9HomvA/HnaMCiOzJZxH42dbsdEH/cQhhk1fu3PzoJ",
  "U2FsdGVkX18kfOmnJNb1Ltcqx3e/tjy0Kf2aX3vK6YU=",
  "U2FsdGVkX18xV7zIureiqONvj0q43C0zx45sHVuNpBY=",
  "U2FsdGVkX19KLVRN3Bn6Itw0vHEV3w9h6CjpqCynf3c=",
  "U2FsdGVkX1/obQFyFc+Gc86JpU2YbS2mdlxGYhFFXbntK8Y5dAq+SAYomdliGc3Y",
  "U2FsdGVkX18mWJyxSmTi8AMS56FnadV/KTe6CbzYLG4=",
  "U2FsdGVkX1+eFoNzEQXHcEItHcgR/kvHhBSMf6vzUwi24FgnOSxy4JPOL9bdscmJ",
  "U2FsdGVkX19a/bONNOhA3rccSBS8kjaIbDbA2O61miw=",
  "U2FsdGVkX19FpvYirDmEcjesEej+Rm+H8xKXkV3h6xU=",
  "U2FsdGVkX1/cFc8ltHIhlLkbMNCbi6YzSAPLTjKrC6A=",
  "U2FsdGVkX18WejERwVDojP75c7eGjaUnCQxLTiAovbs=",
  "U2FsdGVkX18APfynod5xDa/ibY4lS2kJelvNhd7/VJo=",
  "U2FsdGVkX18GpbdYc/QoE7WxalJ5KeR/DTW8l27LYVk=",
  "U2FsdGVkX18Tqc+Yzi7Hvqc9SaZGeEii5h5PyHOvipg27bo5hO2CxVe21Y1M9Bu/",
  "U2FsdGVkX1+6Pv9zfNnkLK64yzSIN77JcYkw8cr/yBo=",
  "U2FsdGVkX1/UQqEqcxHznBEIWKj+0RavDQFemafy1oE=",
  "U2FsdGVkX1/0p7iT68KZFLki+wzxyk0+MNRu7HX5frI=",
  "U2FsdGVkX1/Ryv7H1L3cSDvlXwbFyML0QIY2qgNYw4M=",
  "U2FsdGVkX1/Q1SyUUl/Y3U53fhrGko3YpH5EFJsrBnOwif+8CN3mBcVN87Pz9Lde",
  "U2FsdGVkX18oZnd0o69Wa6HbTkpYHKRG6llkUYahwcAWLl1izrbSUh76g5bCZIx6",
  "U2FsdGVkX18hzLlVn06DV/oqcNLGc8SvapGtcPE/IjvGdZPeWHjMtsEovWdResnE",
  "U2FsdGVkX18dzwNhmzVq+zPIeerlRbBOQrIfp4X/EbJ1nO54PHY3OoRXGWC2oHIO",
  "U2FsdGVkX1/dWLwe+Y5RcrDjlbX5Iw7rPRKX1iixus4=",
  "U2FsdGVkX1/MQ3LTZcGyNjDGK7yD5BzS39jpps0K7+Q=",
  "U2FsdGVkX19D5W7Ksx6UGPbKHdrn+SQX38vD1UQESURq/qXVGobv9Ec55A1Uu1fF",
  "U2FsdGVkX18KMMOd70B4muzwtpgebwPVvK+8Ol71yrs=",
  "U2FsdGVkX1/Q2XKlA7eOxEa+iye/krv6on1C3xK3Xb8=",
  "U2FsdGVkX18BrMCcYHevkhj3TnIX6gC1fJ62vD7T7pU=",
  "U2FsdGVkX1+Yb+w2ohgu0gQzKBTdZFjfdz5oxZkAeEI=",
  "U2FsdGVkX1/Wql8STDYCiF5Ns662f3rq1s6Itfn3xtU=",
  "U2FsdGVkX19WYPtvTZF2zUFRKPa3o0C+TIVPf1xHf2I=",
  "U2FsdGVkX1+DMuHzvQ+WvchtZzu6EuxcEM2oymMxeOE=",
  "U2FsdGVkX1+IX+i+jcj9Nqke+bp+7DOsZ4DW9qhGIiM=",
  "U2FsdGVkX1+BiWy5lm5TGHw+20O1Tzg4W4CP/0ZUzEw=",
  "U2FsdGVkX199Rff12y34lLESC6qCuGYKc69HApD9Er2gRvACoa7o0b5DJzxv8KeI",
  "U2FsdGVkX1+3BMZOC+/HHzsezW8H6Pzjuk+d9/KQKxc=",
  "U2FsdGVkX1/jFWWpJEjo0wzSkrxn/T6fQZBTp5+EhlY=",
  "U2FsdGVkX1/PKNdjNi9hzGPfry75aC2kcNaaUBmQL0c=",
  "U2FsdGVkX199aJ5tSYBSnNP8oLakM61+vgdT1Adyrx0=",
  "U2FsdGVkX18yIH3fKKsNT6y+Ao5bGl2ax+ItR3m62EY=",
  "U2FsdGVkX19xEMwlEDeNPx1MSbNkdI6EtAmCqaell3Q=",
  "U2FsdGVkX19gzN5PnX27aCE0MCEOT1FLkx58sPj5M5M=",
  "U2FsdGVkX1+1CGD2Uq1H8YKUgbaxaM05Z+LkCghbB2NoOP9eWpgvMoa0p250hmS3",
  "U2FsdGVkX1+V/NlfMRjmMtmh0tIjw0E20QzKlb6nspQ=",
  "U2FsdGVkX1/jjlm7p1FDue/510hRzyqAkmwIgRgpzSc=",
  "U2FsdGVkX18j74BhZiVIkG6roGJxCINCRHGCYc479lo=",
  "U2FsdGVkX1+e2KvCAoU+ZFkUmUhCc2CC4dGNBxaHNKo=",
  "U2FsdGVkX19agb1viPqe81alBRCA7qV/EYWUy/BxhwI=",
  "U2FsdGVkX19Zo+z7fj4wWAI72bkzA4MABz+oCc2+qmo=",
  "U2FsdGVkX1+piWYte/j9NY7dYprp0GlxGxlOuOqIarQ=",
  "U2FsdGVkX18e2wPhLLfMCI0ssee4jFPE70ls+5d1xw0=",
  "U2FsdGVkX18kTt4UHPGEGqYSSHFZD19YdlKg3wbV/5k=",
  "U2FsdGVkX1+MXaixdJsCpipQJ4xEXfvqpdT1l+KkqJqgiO4Ybavg0T76eoQ3Jj+K",
  "U2FsdGVkX1/+gpWTruqvgFt4abSiuaS9C1CjoO9oDu4=",
];

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://caviardeul.julienc.io";
