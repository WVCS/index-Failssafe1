const _0x3f47a4 = _0x1dab;
!function(e, t) {
    const n = 543
      , a = 468
      , o = 736
      , s = 807
      , r = 634
      , i = 689
      , c = 622
      , d = _0x1dab
      , l = _0x1f5e();
    for (; ; )
        try {
            if (800691 === parseInt(d(n)) / 1 + parseInt(d(a)) / 2 * (-parseInt(d(o)) / 3) + -parseInt(d(s)) / 4 + -parseInt(d(r)) / 5 + parseInt(d(i)) / 6 + parseInt(d(700)) / 7 + -parseInt(d(c)) / 8)
                break;
            l.push(l.shift())
        } catch (e) {
            l.push(l.shift())
        }
}();
const _0x53c73b = function() {
    const e = 646;
    let t = !0;
    return function(n, a) {
        const o = t ? function() {
            if (a) {
                const t = a[_0x1dab(e)](n, arguments);
                return a = null,
                t
            }
        }
        : function() {}
        ;
        return t = !1,
        o
    }
}()
  , _0x39fc75 = _0x53c73b(this, function() {
    const e = 713
      , t = 453
      , n = _0x1dab;
    return _0x39fc75.toString()[n(782)](n(e))[n(t)]()[n(762)](_0x39fc75).search(n(e))
});
_0x39fc75();
const _0x57bc42 = function() {
    let e = !0;
    return function(t, n) {
        const a = 646
          , o = e ? function() {
            if (n) {
                const e = n[_0x1dab(a)](t, arguments);
                return n = null,
                e
            }
        }
        : function() {}
        ;
        return e = !1,
        o
    }
}()
  , _0x2404e3 = _0x57bc42(this, function() {
    const e = 577
      , t = 834
      , n = 834
      , a = 632
      , o = 843
      , s = _0x1dab;
    let r;
    try {
        r = Function(s(e) + s(759) + ");")()
    } catch (e) {
        r = window
    }
    const i = r[s(t)] = r[s(n)] || {}
      , c = [s(a), s(o), s(510), s(620), s(541), s(847), "trace"];
    for (let e = 0; e < c[s(734)]; e++) {
        const t = _0x57bc42[s(762)].prototype.bind(_0x57bc42)
          , n = c[e]
          , a = i[n] || t;
        t[s(742)] = _0x57bc42.bind(_0x57bc42),
        t.toString = a[s(453)][s(819)](a),
        i[n] = t
    }
});
async function asyncForEach(e, t) {
    if (Array[_0x1dab(671)](e))
        for (let n = 0; n < e.length; n++)
            await t(e[n], n, e)
}
_0x2404e3();
const waitFor_ = e=>new Promise(t=>setTimeout(t, e))
  , genRanHex = e=>[...Array(e)][_0x3f47a4(770)](()=>Math.floor(16 * Math.random())[_0x3f47a4(453)](16))[_0x3f47a4(531)]("");
function formatBytes(e, t=2) {
    const n = 632
      , a = 710
      , o = _0x3f47a4;
    if (0 === e)
        return "0 Bytes";
    const s = 0 > t ? 0 : t
      , r = Math.floor(Math[o(n)](e) / Math[o(632)](1024));
    return parseFloat((e / Math[o(473)](1024, r))[o(a)](s)) + " " + [o(816), "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][r]
}
function asyncEach(e, t, n) {
    const a = _0x3f47a4;
    e[a(734)] <= 0 || n >= e[a(734)] || (n || (n = 0),
    t(e[n]),
    setTimeout(function() {
        asyncEach(e, t, ++n)
    }, 0))
}
document[_0x3f47a4(683)](_0x3f47a4(850), async function(e) {
    const t = _0x3f47a4;
    await waitFor_(1e3),
    document.body[t(704)][t(600)](t(695)),
    $('[data-toggle="tooltip"]').tooltip()
});
let widgetId, queryURL = new URLSearchParams(window[_0x3f47a4(548)][_0x3f47a4(782)]), displayName = "";
const api_url = _0x3f47a4(509);
async function LoadConfig() {
    const e = 866
      , t = 767
      , n = 773
      , a = 618
      , o = 804
      , s = 628
      , r = 727
      , i = 555
      , c = _0x3f47a4;
    await fetch(api_url + c(579), {
        credentials: c(532)
    })[c(641)](async d=>{
        const l = c;
        if (200 == d[l(555)]) {
            const r = await d[l(e)]();
            try {
                if (r.maintenanceMode && location.pathname != l(801))
                    return window[l(548)][l(t)] = l(n);
                r[l(a)] && location[l(o)] == l(801) && (document.getElementById(l(s)).innerHTML = r.maintenanceNotice)
            } catch (e) {}
        } else
            console[l(632)](l(r) + d[l(i)])
    }
    )
}
async function setUpCreditsConverter() {
    const e = 580
      , t = 614
      , n = 614
      , a = 743
      , o = 647
      , s = 485
      , r = 743
      , i = 743
      , c = 485
      , d = 690
      , l = _0x3f47a4
      , u = document[l(614)](l(e))
      , m = document[l(t)](l(503))
      , _ = document[l(n)](l(717));
    m[l(a)] = l(o) + 5 * u[l(s)] + l(462) + u.value + l(715),
    _[l(r)] = l(488) + u[l(s)] + l(690) + 5 * u[l(485)] + " Credits?",
    u[l(683)](l(512), function() {
        const e = l;
        m[e(i)] = e(647) + 5 * u[e(485)] + e(462) + u[e(c)] + e(715),
        _[e(743)] = "Are you sure that you want to buy " + u.value + e(d) + 5 * u.value + " Credits?"
    })
}
"/" == location.pathname || location[_0x3f47a4(804)] == _0x3f47a4(863) ? $(_0x3f47a4(599))[_0x3f47a4(840)]("li")[_0x3f47a4(656)]("active") : $(_0x3f47a4(784) + "/" + location.pathname[_0x3f47a4(486)]("/")[1] + '"]')[_0x3f47a4(840)]("li")[_0x3f47a4(656)]("active"),
addEventListener(_0x3f47a4(553), e=>{
    const t = 597
      , n = 804
      , a = 645
      , o = _0x3f47a4;
    location[o(804)][o(t)](o(558)) && switcher(e[o(636)], !0),
    location[o(n)][o(597)](o(a)) && (window.location[o(767)] = o(645))
}
);
let rateLimitedCounter = 0;
async function ClientArea() {
    const e = 632
      , t = 555
      , n = 686
      , a = 722
      , o = 755
      , s = 743
      , r = 578
      , i = 460
      , c = 657
      , d = 582
      , l = 701
      , u = 614
      , m = 706
      , _ = 827
      , f = 701
      , g = 701
      , p = 679
      , y = 616
      , w = 683
      , b = 625
      , x = 704
      , h = 778
      , v = 478
      , E = 704
      , N = 566
      , L = 660
      , P = 785
      , C = 743
      , T = 704
      , I = 593
      , R = 683
      , S = 791
      , B = 561
      , O = 638
      , F = 566
      , k = 660
      , M = 837
      , H = 566
      , U = 566
      , A = 660
      , q = 752
      , D = 632
      , J = 566
      , Y = 839
      , V = 778
      , j = 478
      , W = 660
      , z = 839
      , K = 868
      , G = 752
      , Q = 584
      , X = 632
      , Z = 614
      , ee = 832
      , te = 614
      , ne = 614
      , ae = 516
      , oe = 637
      , se = 614
      , re = 862
      , ie = 461
      , ce = 704
      , de = 475
      , le = 743
      , ue = 758
      , me = 683
      , _e = 679
      , fe = 632
      , ge = 632
      , pe = 704
      , ye = 839
      , we = 569
      , be = 824
      , xe = 808
      , he = 799
      , ve = 743
      , Ee = 740
      , $e = 683
      , Ne = 561
      , Le = 835
      , Pe = 583
      , Ce = 529
      , Te = 632
      , Ie = 479
      , Re = 614
      , Se = 663
      , Be = 511
      , Oe = 570
      , Fe = 539
      , ke = 675
      , Me = 766
      , He = 798
      , Ue = 614
      , Ae = 533
      , qe = 561
      , De = 703
      , Je = 456
      , Ye = 600
      , Ve = 691
      , je = 548
      , We = 481
      , ze = 767
      , Ke = 691
      , Ge = 548
      , Qe = 586
      , Xe = 691
      , Ze = 767
      , et = 803
      , tt = 803
      , nt = 616
      , at = 666
      , ot = 561
      , st = 474
      , rt = {
        _0x123ed8: 596,
        _0x1b8ec6: 687,
        _0x4d42a5: 674,
        _0xb69b38: 718,
        _0x40c56a: 679,
        _0x291aa0: 616,
        _0x20f720: 803,
        _0x15a3aa: 614,
        _0x46a5e4: 616,
        _0x23dcb8: 564,
        _0x361d81: 803,
        _0x40775b: 743,
        _0x129956: 519
    }
      , it = 631
      , ct = 631
      , dt = 643
      , lt = 761
      , ut = 573
      , mt = 723
      , _t = 560
      , ft = 633
      , gt = 793
      , pt = 829
      , yt = 641
      , wt = 803
      , bt = 506
      , xt = 532
      , ht = 731
      , vt = 813
      , Et = 641
      , $t = 485
      , Nt = 677
      , Lt = 532
      , Pt = 565
      , Ct = 682
      , Tt = 641
      , It = _0x3f47a4;
    NProgress[It(517)]({
        showSpinner: !1
    }),
    NProgress[It(504)](),
    await fetch(api_url + "user/account", {
        credentials: It(532)
    })[It(641)](async e=>{
        const Rt = {
            _0x30bf9f: 650,
            _0x577029: 649
        }
          , St = 616
          , Bt = 803
          , Ot = 615
          , Ft = 485
          , kt = 616
          , Mt = 803
          , Ht = 485
          , Ut = 616
          , At = 615
          , qt = 540
          , Dt = 641
          , Jt = 555
          , Yt = 704
          , Vt = 743
          , jt = 677
          , Wt = 629
          , zt = 644
          , Kt = 679
          , Gt = 561
          , Qt = 561
          , Xt = 845
          , Zt = 616
          , en = 803
          , tn = 532
          , nn = 540
          , an = 743
          , on = 566
          , sn = 839
          , rn = 743
          , cn = 644
          , dn = 679
          , ln = 616
          , un = 616
          , mn = 743
          , _n = 704
          , fn = 566
          , gn = 743
          , pn = 566
          , yn = 660
          , wn = 785
          , bn = 743
          , xn = 566
          , hn = 743
          , vn = 868
          , En = 615
          , $n = 532
          , Nn = 731
          , Ln = 789
          , Pn = 540
          , Cn = 515
          , Tn = 515
          , In = 540
          , Rn = 704
          , Sn = 566
          , Bn = 839
          , On = 743
          , Fn = 660
          , kn = 743
          , Mn = 532
          , Hn = 743
          , Un = It;
        if (NProgress[Un(688)](),
        200 == e[Un(t)]) {
            document[Un(n)] = Un(483),
            queryURL.has("section") && await switcher(queryURL[Un(481)]("section"));
            const t = await e[Un(866)]();
            displayName = t[Un(747)],
            document.getElementById(Un(865))[Un(743)] = "My Account - " + displayName,
            document[Un(614)]("credits")[Un(743)] = t[Un(827)][Un(701)]() + Un(792),
            document[Un(614)](Un(a))[Un(743)] = t[Un(722)] + Un(825),
            document[Un(614)](Un(o))[Un(s)] = t[Un(r)] + Un(i),
            document[Un(614)](Un(657))[Un(s)] = t[Un(c)],
            document.getElementById(Un(d))[Un(743)] = t[Un(d)][Un(l)](),
            document[Un(614)](Un(699))[Un(s)] = t.ads_watched[Un(701)](),
            document[Un(u)](Un(528))[Un(s)] = t.credits_verification.toLocaleString(),
            document[Un(614)](Un(m))[Un(s)] = t[Un(_)][Un(f)](),
            document.getElementById(Un(465)).innerHTML = t[Un(748)][Un(g)]() + Un(627),
            document[Un(614)]("settings_apikey")[Un(743)] = t.apiKey,
            document.getElementById("settings_item_apiUsage")[Un(p)][Un(y)] = Un(561);
            try {
                const e = document[Un(614)]("settings_apikey")
                  , t = document.getElementById(Un(764))
                  , n = document.getElementById(Un(489));
                t[Un(683)](Un(752), async function() {
                    const n = Un;
                    await copyTextClipboard(e[n(Hn)]),
                    t[n(743)] = n(694),
                    await waitFor_(2e3),
                    t[n(743)] = n(523)
                });
                let a = !1;
                n[Un(w)]("click", async function() {
                    const t = 555
                      , n = 866
                      , o = 657
                      , s = 743
                      , r = Un;
                    a || (a = !0,
                    await fetch(api_url + "user/settings/resetApiKey", {
                        method: r(615),
                        credentials: r(Mn)
                    })[r(641)](async i=>{
                        const c = r;
                        if (200 == i[c(t)]) {
                            let t = await i[c(n)]();
                            null !== t[c(o)] && (e[c(s)] = t[c(657)])
                        }
                        a = !1
                    }
                    ))
                }),
                document.getElementById(Un(708))[Un(679)][Un(y)] = Un(561)
            } catch (e) {
                console.log(Un(472)),
                console[Un(632)](e)
            }
            try {
                const e = document[Un(614)](Un(756))
                  , n = document[Un(614)](Un(b));
                t.enableLeaderboardVisibility ? (e[Un(x)][Un(566)](Un(839), Un(h)),
                e.innerHTML = Un(v),
                n[Un(E)][Un(N)](Un(L), Un(P)),
                n[Un(C)] = Un(837)) : (e[Un(T)].replace(Un(h), Un(839)),
                e[Un(743)] = Un(I),
                n[Un(704)].replace(Un(785), Un(660)),
                n[Un(C)] = Un(868));
                let a = !1;
                n[Un(R)](Un(752), async function() {
                    const o = Un;
                    t[o(Cn)] = !t[o(515)],
                    a || (a = !0,
                    await fetch(api_url + o(608), {
                        method: o(615),
                        credentials: "include",
                        body: JSON.stringify({
                            enable: t[o(Tn)]
                        }),
                        headers: {
                            "Content-Type": o(In)
                        }
                    })[o(641)](()=>{
                        const s = o;
                        a = !1,
                        t.enableLeaderboardVisibility ? (e[s(Rn)][s(Sn)](s(Bn), "badge-success"),
                        e[s(On)] = s(478),
                        n[s(704)].replace(s(Fn), s(785)),
                        n[s(On)] = s(837)) : (e[s(Rn)].replace(s(778), s(839)),
                        e[s(kn)] = "Disabled",
                        n[s(704)][s(Sn)]("btn-outline-danger", s(660)),
                        n[s(743)] = "Enable")
                    }
                    ))
                }),
                document.getElementById(Un(S)).style[Un(y)] = Un(B)
            } catch (e) {
                console[Un(632)](Un(546)),
                console[Un(632)](e)
            }
            try {
                const e = document.getElementById(Un(855))
                  , n = document[Un(614)](Un(O));
                t.enableNSFWCensoring ? (e.classList[Un(F)](Un(839), Un(778)),
                e[Un(743)] = "Enabled",
                n.classList.replace(Un(k), Un(785)),
                n[Un(s)] = Un(M)) : (e[Un(704)][Un(H)](Un(778), Un(839)),
                e[Un(C)] = "Disabled",
                n.classList[Un(U)](Un(P), Un(A)),
                n[Un(743)] = Un(868));
                let a = !1;
                n[Un(R)](Un(q), async function() {
                    const o = 704
                      , s = 478
                      , r = 785
                      , i = 743
                      , c = 704
                      , d = 868
                      , l = Un;
                    t[l(789)] = !t[l(789)],
                    a || (a = !0,
                    await fetch(api_url + "user/settings/toggleNSFWCensoring", {
                        method: l(En),
                        credentials: l($n),
                        body: JSON[l(Nn)]({
                            enable: t[l(Ln)]
                        }),
                        headers: {
                            "Content-Type": l(Pn)
                        }
                    })[l(641)](()=>{
                        const u = l;
                        a = !1,
                        t[u(789)] ? (e[u(o)].replace("badge-danger", u(778)),
                        e[u(743)] = u(s),
                        n[u(704)][u(566)]("btn-outline-primary", u(r)),
                        n[u(i)] = u(837)) : (e[u(704)][u(566)](u(778), u(839)),
                        e.innerHTML = u(593),
                        n[u(c)][u(566)](u(785), "btn-outline-primary"),
                        n.innerHTML = u(d))
                    }
                    ))
                }),
                document.getElementById("settings_item_nsfwCensoring").style[Un(616)] = Un(B)
            } catch (e) {
                console[Un(632)](Un(705)),
                console[Un(D)](e)
            }
            try {
                const e = document.getElementById(Un(449))
                  , n = document.getElementById("settings_enableActivityLogs_button");
                t[Un(565)] ? (e.classList[Un(J)](Un(Y), Un(V)),
                e[Un(743)] = Un(j),
                n[Un(704)].replace(Un(W), Un(785)),
                n[Un(s)] = "Disable") : (e[Un(E)][Un(566)](Un(778), Un(z)),
                e[Un(s)] = "Disabled",
                n.classList[Un(U)](Un(785), Un(660)),
                n[Un(743)] = Un(K));
                let a = !1;
                n[Un(683)](Un(G), async function() {
                    const o = Un;
                    t[o(Pt)] = !t[o(565)],
                    a || (a = !0,
                    await fetch(api_url + o(Ct), {
                        method: o(615),
                        credentials: o(532),
                        body: JSON.stringify({
                            enable: t.enableActivityLogs
                        }),
                        headers: {
                            "Content-Type": o(540)
                        }
                    })[o(Tt)](()=>{
                        const s = o;
                        a = !1,
                        t[s(565)] ? (e[s(_n)][s(fn)]("badge-danger", "badge-success"),
                        e[s(gn)] = "Enabled",
                        n.classList[s(pn)](s(yn), s(wn)),
                        n[s(bn)] = s(837)) : (e[s(704)][s(xn)]("badge-success", s(839)),
                        e[s(hn)] = s(593),
                        n[s(704)].replace(s(wn), s(660)),
                        n[s(743)] = s(vn))
                    }
                    ))
                }),
                document[Un(614)](Un(848)).style[Un(616)] = Un(B)
            } catch (e) {
                console[Un(632)](Un(Q)),
                console[Un(X)](e)
            }
            try {
                const e = document[Un(614)](Un(760))
                  , n = document[Un(Z)](Un(ee))
                  , a = document[Un(te)]("settings_twoFactor_enableButton")
                  , o = document[Un(ne)](Un(ae))
                  , r = document[Un(u)](Un(oe))
                  , i = document[Un(se)](Un(838))
                  , c = document[Un(614)](Un(780))
                  , d = document.getElementById(Un(re))
                  , l = document[Un(614)](Un(ie));
                t.enableTwoFactorAuthentication ? (e[Un(704)][Un(566)](Un(839), Un(h)),
                e[Un(s)] = "Enabled",
                n[Un(ce)][Un(566)]("btn-outline-primary", "btn-outline-danger"),
                n[Un(743)] = Un(837),
                document[Un(614)](Un(758))[Un(743)] = Un(de)) : (e[Un(ce)][Un(566)]("badge-success", Un(z)),
                e.innerHTML = Un(I),
                n.classList[Un(566)](Un(785), "btn-outline-primary"),
                n[Un(le)] = "Enable",
                document[Un(614)](Un(ue))[Un(C)] = "Two-Factor Disabled"),
                settings_twoFactor_button_waiter = !1,
                n.addEventListener("click", async function() {
                    const e = 866
                      , n = 720
                      , a = 720
                      , s = 679
                      , c = 679
                      , u = 677
                      , m = 775
                      , _ = 629
                      , f = 776
                      , g = 775
                      , p = 549
                      , y = Un;
                    settings_twoFactor_button_waiter || (settings_twoFactor_button_waiter = !0,
                    o[y($t)] = null,
                    i.value = null,
                    t[y(818)] ? ($(y(776)).modal("hide"),
                    $(y(Nt))[y(775)]("show"),
                    settings_twoFactor_button_waiter = !1) : (await fetch(api_url + y(572), {
                        method: y(615),
                        credentials: y(Lt)
                    })[y(641)](async t=>{
                        const o = y;
                        if (200 == t[o(555)]) {
                            let i = await t[o(e)]();
                            null !== i[o(n)] && (r[o(445)] = i[o(a)],
                            d[o(s)][o(616)] = o(803),
                            l[o(c)][o(616)] = o(803),
                            $(o(u))[o(m)](o(_)),
                            $(o(f))[o(g)](o(p)))
                        }
                    }
                    ),
                    settings_twoFactor_button_waiter = !1))
                }),
                a[Un(me)](Un(q), async function() {
                    const a = Un;
                    d.style[a(Zt)] = a(en),
                    await fetch(api_url + a(854), {
                        method: a(615),
                        credentials: a(tn),
                        body: JSON[a(731)]({
                            enable: !0,
                            twoFactorCode: o[a(485)]
                        }),
                        headers: {
                            "Content-Type": a(nn)
                        }
                    }).then(async o=>{
                        const s = a;
                        if (200 == o.status)
                            t.enableTwoFactorAuthentication = !0,
                            document.getElementById("2faEnabled")[s(an)] = "Two-Factor Enabled",
                            e[s(704)][s(on)](s(sn), "badge-success"),
                            e[s(rn)] = "Enabled",
                            n[s(704)].replace("btn-outline-danger", s(785)),
                            n[s(743)] = s(837),
                            $(s(776))[s(775)]("hide");
                        else if (406 == o[s(555)]) {
                            let e = await o[s(866)]();
                            e.message && (d[s(743)] = e[s(cn)]),
                            d[s(dn)][s(ln)] = s(561)
                        } else
                            400 == o[s(555)] ? (d[s(dn)][s(un)] = s(561),
                            d[s(743)] = "Two-Factor is not allowed to be empty") : (d[s(679)][s(616)] = s(561),
                            d[s(mn)] = s(845))
                    }
                    )
                }),
                c[Un(w)](Un(G), async function() {
                    const a = Un;
                    l[a(679)][a(Ut)] = a(803),
                    await fetch(api_url + a(854), {
                        method: a(At),
                        credentials: "include",
                        body: JSON[a(731)]({
                            enable: !1,
                            twoFactorCode: i[a(485)]
                        }),
                        headers: {
                            "Content-Type": a(qt)
                        }
                    })[a(Dt)](async o=>{
                        const s = a;
                        if (200 == o[s(Jt)])
                            t[s(818)] = !1,
                            document[s(614)]("2faEnabled")[s(743)] = s(712),
                            e[s(704)][s(566)]("badge-success", s(839)),
                            e[s(743)] = s(593),
                            n[s(Yt)][s(566)](s(785), "btn-outline-primary"),
                            n[s(Vt)] = "Enable",
                            $(s(jt))[s(775)](s(Wt));
                        else if (406 == o[s(555)]) {
                            let e = await o[s(866)]();
                            e[s(zt)] && (l[s(Vt)] = e[s(644)]),
                            l[s(Kt)][s(616)] = "block"
                        } else
                            400 == o.status ? (l[s(679)].display = s(Gt),
                            l[s(Vt)] = s(676)) : (l[s(679)][s(616)] = s(Qt),
                            l.innerHTML = s(Xt))
                    }
                    )
                }),
                document.getElementById("settings_item_twoFactor")[Un(_e)][Un(616)] = Un(561)
            } catch (e) {
                console[Un(fe)]("TWOFACTOR SECTION ERROR"),
                console[Un(ge)](e)
            }
            try {
                const e = document[Un(se)](Un(494))
                  , n = document[Un(614)](Un(496));
                t[Un(813)] ? (e[Un(T)][Un(566)](Un(839), Un(778)),
                e[Un(s)] = "Enabled",
                n[Un(pe)][Un(U)]("btn-outline-primary", Un(785)),
                n[Un(s)] = Un(837)) : (e[Un(704)][Un(566)](Un(778), Un(ye)),
                e.innerHTML = "Disabled",
                n[Un(E)][Un(566)](Un(785), Un(660)),
                n[Un(743)] = Un(868));
                let a = !1;
                n[Un(683)](Un(G), async function() {
                    const o = 785
                      , s = 743
                      , r = 839
                      , i = 704
                      , c = 868
                      , d = Un;
                    t.enableEmailNotifications = !t[d(813)],
                    a || (a = !0,
                    await fetch(api_url + d(bt), {
                        method: "POST",
                        credentials: d(xt),
                        body: JSON[d(ht)]({
                            enable: t[d(vt)]
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })[d(Et)](()=>{
                        const l = d;
                        a = !1,
                        t[l(813)] ? (e.classList.replace(l(839), "badge-success"),
                        e.innerHTML = l(478),
                        n[l(704)][l(566)](l(660), l(o)),
                        n[l(s)] = "Disable") : (e[l(704)][l(566)](l(778), l(r)),
                        e[l(743)] = l(593),
                        n[l(i)].replace(l(785), "btn-outline-primary"),
                        n[l(743)] = l(c))
                    }
                    ))
                }),
                document[Un(614)](Un(642))[Un(679)][Un(y)] = Un(561)
            } catch (e) {
                console[Un(X)](Un(we)),
                console.log(e)
            }
            try {
                const e = document[Un(614)](Un(805))
                  , n = document.getElementById(Un(be))
                  , a = document[Un(614)](Un(598))
                  , o = document.getElementById(Un(xe))
                  , s = document.getElementById(Un(he))
                  , r = document.getElementById(Un(707));
                t[Un(749)] ? e[Un(ve)] = Un(Ee) + t[Un(749)] : e.innerHTML = "No email found",
                n[Un($e)](Un(752), async function() {
                    const e = Un;
                    s.style[e(kt)] = e(Mt),
                    r.style.display = e(803),
                    o[e(Ht)] = null,
                    s[e(Ht)] = null,
                    $("#changeEmailModal")[e(775)](e(549))
                }),
                a[Un(w)](Un(752), async function() {
                    const n = 555
                      , a = 485
                      , i = 485
                      , c = 629
                      , d = 866
                      , l = 524
                      , u = 620
                      , m = 704
                      , _ = 542
                      , f = 510
                      , g = 679
                      , p = 561
                      , y = 616
                      , w = 704
                      , b = Un;
                    r.style[b(St)] = b(Bt),
                    await fetch(api_url + "user/settings/changeEmail", {
                        method: b(Ot),
                        credentials: b(532),
                        body: JSON.stringify({
                            email: o[b(Ft)],
                            verificationCode: s.value
                        }),
                        headers: {
                            "Content-Type": b(540)
                        }
                    }).then(async x=>{
                        const h = b;
                        if (200 == x[h(n)])
                            t[h(749)] = o[h(a)],
                            e[h(743)] = h(740) + o[h(i)],
                            $("#changeEmailModal").modal(h(c));
                        else if (406 == x[h(555)]) {
                            let e = await x[h(d)]();
                            e[h(644)] && (e[h(l)] == h(u) ? r[h(m)][h(566)]("alert-secondary", h(_)) : e.messageType == h(f) && r[h(704)].replace(h(542), h(809)),
                            r[h(743)] = e[h(644)],
                            r[h(g)][h(616)] = h(p)),
                            e.requiresVerificationCode && (s[h(g)][h(y)] = h(561))
                        } else
                            r[h(w)].replace(h(809), h(542)),
                            r.innerHTML = "critical error, please try again later. (code: {" + x[h(n)] + "})",
                            r[h(g)].display = "block"
                    }
                    )
                }),
                document[Un(614)](Un(725))[Un(679)].display = Un(Ne)
            } catch (e) {
                console.log(Un(454)),
                console[Un(ge)](e)
            }
            try {
                const e = document[Un(614)](Un(Le))
                  , t = document[Un(614)](Un(Pe))
                  , n = document[Un(614)](Un(Ce))
                  , a = document.getElementById(Un(851))
                  , o = document[Un(614)](Un(658));
                e.addEventListener(Un(q), async function() {
                    const e = Un;
                    a[e(679)].display = e(wt),
                    t.value = null,
                    n.value = null,
                    $(e(815))[e(775)]("show")
                }),
                o[Un(683)](Un(752), async function() {
                    const e = 555
                      , o = 704
                      , s = 616
                      , r = 485
                      , i = 485
                      , c = 555
                      , d = 644
                      , l = 704
                      , u = 542
                      , m = 561
                      , _ = Un;
                    await fetch(api_url + _(574), {
                        method: "POST",
                        credentials: "include",
                        body: JSON[_(731)]({
                            password: t.value,
                            passwordConfirm: n.value
                        }),
                        headers: {
                            "Content-Type": _(540)
                        }
                    })[_(yt)](async f=>{
                        const g = _;
                        if (200 == f[g(e)])
                            a[g(o)][g(566)]("alert-danger", g(809)),
                            a[g(743)] = "Successfully changed password",
                            a[g(679)][g(s)] = g(561),
                            t[g(r)] = null,
                            n[g(i)] = null,
                            await waitFor_(1e3),
                            $("#changePasswordModal").modal(g(629));
                        else if (406 == f[g(c)]) {
                            let e = await f[g(866)]();
                            e[g(d)] && ("error" == e[g(524)] ? a[g(704)].replace("alert-secondary", g(542)) : e[g(524)] == g(510) && a[g(l)][g(566)](g(u), "alert-secondary"),
                            a.innerHTML = e[g(644)],
                            a.style[g(616)] = g(m))
                        } else
                            a[g(704)][g(566)](g(809), g(542)),
                            a[g(743)] = g(448) + f[g(555)] + "})",
                            a.style[g(616)] = g(561)
                    }
                    )
                }),
                document.getElementById(Un(684)).style[Un(y)] = "block"
            } catch (e) {
                console[Un(Te)](Un(Ie)),
                console.log(e)
            }
            try {
                const e = document[Un(Re)]("settings_recentActivity_formBody");
                let n = "";
                await asyncForEach(t[Un(Se)], e=>{
                    const t = Un;
                    switch (e[t(it)]) {
                    case t(513):
                        e[t(ct)] = t(dt);
                        break;
                    case t(619):
                        e[t(ct)] = t(856);
                        break;
                    case "reset-password":
                        e.type = t(800);
                        break;
                    case t(575):
                        e[t(631)] = "changed email"
                    }
                    n += t(451) + e[t(631)] + t(lt) + e[t(548)] + "</td>\n                            <td>" + e[t(ut)] + t(mt) + moment(e[t(_t)])[t(ft)](t(gt)) + t(pt)
                }
                ),
                e[Un(C)] = n
            } catch (e) {
                console[Un(632)](Un(777)),
                console[Un(X)](e)
            }
            if ($(document[Un(614)]("main"))[Un(Be)](Un(Oe), "swing"),
            null != t.system_message && t[Un(Fe)][Un(734)] > 0 && (document.getElementById("system_message_0")[Un(_e)] = Un(561),
            document[Un(614)](Un(ke))[Un(743)] = t[Un(539)]),
            t.enableAds) {
                var An = {
                    zoneId: 4717,
                    accountId: 6045,
                    gameId: 6889,
                    userId: t.ads_id,
                    fallback: 1,
                    rewarded: !0,
                    vSize: Un(Me),
                    custom: Un(He),
                    adStatusCb: function(t) {
                        const s = Un;
                        (t == s(rt._0x123ed8) || t == s(605) || t == s(630) || t == s(721) || "ad-watched" == t || t == s(rt._0x1b8ec6) || t == s(rt._0x4d42a5) || "fb-watched" == t || t == s(754)) && (document.getElementById(s(rt._0xb69b38))[s(rt._0x40c56a)][s(rt._0x291aa0)] = s(rt._0x20f720),
                        document[s(rt._0x15a3aa)](s(666))[s(679)][s(rt._0x46a5e4)] = s(803),
                        document[s(614)](s(rt._0x23dcb8))[s(rt._0x40c56a)][s(rt._0x291aa0)] = s(rt._0x361d81)),
                        t == s(596) && (e.style[s(rt._0x46a5e4)] = s(561),
                        n[s(rt._0x40775b)] = s(500)),
                        t == s(rt._0x129956) && (a[s(679)][s(rt._0x46a5e4)] = s(561),
                        o[s(rt._0x40775b)] = s(859),
                        waitFor_(5e3),
                        a[s(679)][s(rt._0x291aa0)] = "none",
                        o.innerHTML = "")
                    }
                };
                let e = document.getElementById(Un(476))
                  , n = document[Un(614)](Un(867))
                  , a = document[Un(614)](Un(476))
                  , o = document[Un(614)]("ad_error_text")
                  , s = document.getElementById(Un(533));
                document[Un(Ue)](Un(Ae))[Un(683)]("click", function(t) {
                    const r = Un;
                    e[r(679)][r(616)] = r(et),
                    n[r(743)] = "",
                    a[r(679)][r(616)] = r(tt),
                    o.innerHTML = "",
                    invokeApplixirVideoUnit(An),
                    document.getElementById("ad_space_1")[r(679)][r(nt)] = "block",
                    document[r(614)](r(at))[r(679)].display = "block",
                    document[r(614)]("ad_space_3")[r(679)][r(616)] = r(ot),
                    async function() {
                        var e = 90
                          , t = setInterval(function() {
                            const n = _0x1dab;
                            e--,
                            s[n(Rt._0x30bf9f)] = !0,
                            s[n(743)] = n(617) + e + ")",
                            1 == e && (s[n(743)] = n(Rt._0x577029),
                            s[n(650)] = !1,
                            clearInterval(t))
                        }, 1e3)
                    }(),
                    t[r(st)]()
                })
            } else
                ad_error[Un(679)].display = Un(qe),
                ad_error_text.innerHTML = Un(De);
            setInterval(function() {
                ClientArea_UpdateInfo()
            }, t.refresh_interval),
            document[Un(614)](Un(Je))[Un(Ye)](),
            NProgress.done()
        } else if (401 == e[Un(555)])
            NProgress[Un(Ve)](),
            queryURL.has(Un(607)) ? window[Un(je)].href = Un(452) + queryURL[Un(We)]("section") : window.location[Un(ze)] = Un(513);
        else if (403 == e.status)
            NProgress[Un(Ke)](),
            window[Un(Ge)][Un(ze)] = Un(Qe);
        else if (429 == e.status) {
            if (rateLimitedCounter >= 10)
                return NProgress[Un(Xe)](),
                void (window[Un(548)][Un(Ze)] = Un(480));
            rateLimitedCounter++,
            await waitFor_(2e3),
            ClientArea()
        }
    }
    )[It(788)](async t=>{
        console[It(e)](t),
        await waitFor_(2500),
        ClientArea()
    }
    )
}
function _0x1dab(e, t) {
    const n = _0x1f5e();
    return (_0x1dab = function(e, t) {
        return n[e -= 440]
    }
    )(e, t)
}
async function ClientArea_UpdateInfo() {
    const e = 466
      , t = 641
      , n = 555
      , a = 866
      , o = 614
      , s = 743
      , r = 827
      , i = 701
      , c = 792
      , d = 722
      , l = 743
      , u = 755
      , m = 657
      , _ = 743
      , f = 657
      , g = 582
      , p = 614
      , y = 528
      , w = 722
      , b = 465
      , x = 539
      , h = 561
      , v = 614
      , E = 685
      , $ = 679
      , N = 616
      , L = 555
      , P = 444
      , C = 607
      , T = 548
      , I = 452
      , R = 767
      , S = _0x3f47a4;
    await fetch(api_url + S(e), {
        credentials: "include"
    })[S(t)](async e=>{
        const t = S;
        if (200 == e[t(n)]) {
            const n = await e[t(a)]();
            document[t(o)](t(827))[t(s)] = n[t(r)][t(i)]() + t(c),
            document[t(o)](t(d))[t(l)] = n.credits_verification + t(825),
            document[t(614)](t(u)).innerHTML = n.daily_limit + " Daily Downloads Left",
            document[t(o)](t(m))[t(_)] = n[t(f)],
            document[t(o)](t(g))[t(743)] = n[t(g)][t(701)](),
            document[t(o)]("ads_watched")[t(_)] = n[t(699)].toLocaleString(),
            document[t(p)](t(y))[t(743)] = n[t(w)].toLocaleString(),
            document[t(614)]("total_credits")[t(743)] = n[t(827)][t(701)](),
            document[t(614)](t(b))[t(l)] = n.purchases[t(i)]() + " Purchases",
            document[t(p)](t(821))[t(743)] = n[t(m)],
            null != n.system_message && n[t(x)][t(734)] > 0 ? (document[t(614)](t(685))[t(679)][t(616)] = t(h),
            document[t(614)](t(675))[t(743)] = n[t(539)]) : document[t(v)](t(E))[t($)][t(N)] = "none",
            NProgress[t(691)]()
        }
        401 == e[t(L)] && (NProgress[t(691)](),
        queryURL[t(P)](t(C)) ? window[t(T)][t(767)] = t(I) + queryURL[t(481)](t(607)) : window.location[t(767)] = "login"),
        403 == e[t(555)] && (NProgress[t(691)](),
        window.location[t(R)] = t(586))
    }
    )[S(788)](e=>{
        console.log(e)
    }
    )
}
async function Login(e) {
    const t = 517
      , n = 504
      , a = 614
      , o = 458
      , s = 614
      , r = 796
      , i = 614
      , c = 585
      , d = 559
      , l = 844
      , u = 823
      , m = 691
      , _ = 453
      , f = 822
      , g = 453
      , p = 609
      , y = 532
      , w = 615
      , b = 540
      , x = 632
      , h = 607
      , v = 548
      , E = 806
      , $ = 548
      , N = 644
      , L = 524
      , P = 668
      , C = {
        _0x49e8d6: 679,
        _0x92899a: 803,
        _0x38ae28: 616
    }
      , T = {
        _0x161baa: 616,
        _0x1a2e0a: 679,
        _0x162233: 616,
        _0x2b7d1e: 803,
        _0x5404ff: 803,
        _0x391be0: 771,
        _0x17fb3a: 679
    }
      , I = {
        _0x497981: 650,
        _0x14e40e: 632
    }
      , R = {
        _0x46ed37: 704,
        _0x1b3b32: 547,
        _0x3d5add: 809,
        _0x4330d1: 809,
        _0x3176aa: 547,
        _0x345608: 542,
        _0x2d5ee9: 626,
        _0x427aad: 743,
        _0x52da07: 616,
        _0x5b2201: 561
    }
      , S = _0x3f47a4
      , B = S(527);
    NProgress[S(t)]({
        showSpinner: !1
    }),
    NProgress[S(n)]();
    const O = document[S(a)](S(o))
      , F = Object[S(698)](new FormData(e))
      , k = document[S(614)](S(464))
      , M = document[S(s)](S(491))
      , H = document[S(614)](S(r))
      , U = document[S(i)]("showSetEmail")
      , A = F[S(841)]
      , q = F[S(c)]
      , D = F[S(783)]
      , J = F[S(d)]
      , Y = F[S(492)]
      , V = F[S(l)];
    function j(e, t) {
        const n = S;
        t == n(655) && (O[n(R._0x46ed37)].remove("alert-danger"),
        O[n(R._0x46ed37)][n(R._0x1b3b32)](n(R._0x3d5add)) || O[n(704)].add(n(R._0x3d5add))),
        t == n(620) && (O[n(704)].remove(n(R._0x4330d1)),
        O[n(704)][n(R._0x3176aa)](n(R._0x345608)) || O[n(704)][n(R._0x2d5ee9)](n(R._0x345608))),
        O[n(R._0x427aad)] = e,
        O.style[n(R._0x52da07)] = n(R._0x5b2201)
    }
    function W() {
        const e = S;
        try {
            document[e(614)]("submitButton")[e(I._0x497981)] = !0,
            turnstile[e(455)](widgetId)
        } catch (t) {
            console[e(I._0x14e40e)](t)
        }
    }
    if (!F)
        return j("Error, please reload the Page"),
        void NProgress.done();
    if (!V)
        return j(S(751)),
        W(),
        void NProgress.done();
    if (!q)
        return j(S(595)),
        void NProgress[S(691)]();
    if (!D)
        return j(S(u)),
        void NProgress[S(m)]();
    (function() {
        const e = S;
        O[e(743)] = null,
        O.style.display = e(803)
    }
    )(),
    console.log({
        EmailOnly: A,
        UsernameOrEmail: q,
        Password: D,
        twoFactorCode: J,
        emailCode: Y,
        captchaCode: V
    });
    const z = JSON[S(731)]({
        EmailOnly: CryptoJS.AES[S(822)](A, B)[S(_)](),
        UsernameOrEmail: CryptoJS.AES[S(822)](q, B)[S(453)](),
        Password: CryptoJS[S(534)][S(f)](D, B)[S(g)](),
        twoFactorCode: J,
        emailCode: Y,
        captchaCode: V
    });
    await fetch(api_url + S(p), {
        credentials: S(y),
        method: S(w),
        body: z,
        headers: {
            "Content-Type": S(b)
        }
    })[S(641)](async e=>{
        const t = S;
        switch (W(),
        e.status) {
        case 200:
            queryURL.has(t(h)) ? window[t(v)][t(767)] = t(E) + queryURL[t(481)]("section") : window[t($)][t(767)] = t(558);
            break;
        case 401:
            const n = await e[t(866)]();
            n[t(644)] && j(n[t(N)], n[t(L)]),
            n.requiresTwoFactor && function(e) {
                const t = S;
                switch (k[t(679)][t(T._0x161baa)] = "none",
                M[t(T._0x1a2e0a)][t(T._0x162233)] = t(T._0x2b7d1e),
                H[t(T._0x1a2e0a)][t(616)] = t(T._0x5404ff),
                U.style[t(616)] = t(803),
                e) {
                case t(587):
                    M[t(679)][t(616)] = "block";
                    break;
                case t(T._0x391be0):
                    H[t(T._0x17fb3a)][t(616)] = t(561)
                }
            }(n[t(623)]),
            n[t(726)] && function() {
                const e = S;
                k.style[e(616)] = "none",
                M[e(C._0x49e8d6)][e(616)] = e(C._0x92899a),
                H[e(679)][e(C._0x38ae28)] = e(C._0x92899a),
                U[e(679)].display = "block"
            }();
            break;
        case 429:
            j("You are being rate-limited, try again later.");
            break;
        default:
            j(t(P) + e.status + ")")
        }
    }
    )[S(788)](e=>{
        const t = S;
        console[t(x)](e),
        j(t(774))
    }
    ),
    NProgress[S(691)]()
}
async function ResetPassword(e) {
    const t = 504
      , n = 614
      , a = 458
      , o = 698
      , s = 491
      , r = 796
      , i = 783
      , c = 559
      , d = 492
      , l = 446
      , u = 691
      , m = 595
      , _ = 691
      , f = 453
      , g = 534
      , p = 615
      , y = 548
      , w = 767
      , b = 558
      , x = 866
      , h = 661
      , v = 623
      , E = 668
      , $ = {
        _0x2fb643: 616,
        _0x36f3d6: 803,
        _0x37608c: 679,
        _0x312c98: 561
    }
      , N = {
        _0x5fa37: 614,
        _0x4f9531: 616,
        _0x57b86a: 803,
        _0x47fb48: 587,
        _0x57f2c0: 561
    }
      , L = {
        _0x2f867f: 455
    }
      , P = {
        _0x2a15f1: 679,
        _0x19d145: 803
    }
      , C = {
        _0x119520: 704,
        _0x1d2972: 600,
        _0x1c46e6: 542,
        _0x2e9b74: 809,
        _0x271d38: 620,
        _0x303c4c: 600,
        _0x371aa5: 542
    }
      , T = _0x3f47a4
      , I = T(527);
    NProgress[T(517)]({
        showSpinner: !1
    }),
    NProgress[T(t)]();
    const R = document[T(n)](T(a))
      , S = Object[T(o)](new FormData(e))
      , B = document[T(614)](T(495))
      , O = document[T(614)](T(s))
      , F = document[T(614)](T(r))
      , k = document[T(614)](T(518))
      , M = S[T(585)]
      , H = S[T(i)]
      , U = S.ConfirmPassword
      , A = S[T(c)]
      , q = S[T(d)]
      , D = S["cf-turnstile-response"];
    function J(e, t) {
        const n = T;
        "success" == t && (R[n(C._0x119520)][n(C._0x1d2972)](n(C._0x1c46e6)),
        R.classList[n(547)](n(809)) || R[n(C._0x119520)][n(626)](n(C._0x2e9b74))),
        t == n(C._0x271d38) && (R[n(C._0x119520)][n(C._0x303c4c)](n(C._0x2e9b74)),
        R.classList.contains(n(C._0x371aa5)) || R[n(704)][n(626)](n(542))),
        R[n(743)] = e,
        R[n(679)][n(616)] = n(561)
    }
    function Y() {
        const e = T;
        try {
            document[e(614)]("submitButton")[e(650)] = !0,
            turnstile[e(L._0x2f867f)](widgetId)
        } catch (t) {
            console[e(632)](t)
        }
    }
    if (!S)
        return J(T(l)),
        void NProgress[T(691)]();
    if (!D)
        return J("Invalid Captcha provided"),
        Y(),
        void NProgress[T(u)]();
    if (!M)
        return J(T(m)),
        void NProgress[T(_)]();
    !function() {
        const e = T;
        R[e(743)] = null,
        R[e(P._0x2a15f1)][e(616)] = e(P._0x19d145)
    }();
    const V = JSON[T(731)]({
        UsernameOrEmail: CryptoJS[T(534)][T(822)](M, I).toString(),
        Password: CryptoJS[T(534)][T(822)](H, I)[T(f)](),
        ConfirmPassword: CryptoJS[T(g)][T(822)](U, I)[T(f)](),
        twoFactorCode: A,
        emailCode: q,
        captchaCode: D
    });
    await fetch(api_url + "user/reset_password", {
        credentials: "include",
        method: T(p),
        body: V,
        headers: {
            "Content-Type": T(540)
        }
    }).then(async e=>{
        const t = T;
        switch (Y(),
        e.status) {
        case 200:
            window[t(y)][t(w)] = t(b);
            break;
        case 401:
            const n = await e[t(x)]();
            n[t(644)] && J(n.message, n[t(524)]),
            n[t(h)] && function(e) {
                const t = T;
                switch (document[t(N._0x5fa37)]("Password")[t(485)] = null,
                document[t(614)](t(653)).value = null,
                B[t(679)][t(N._0x4f9531)] = t(N._0x57b86a),
                O.style[t(616)] = t(N._0x57b86a),
                F[t(679)].display = "none",
                k.style.display = t(N._0x57b86a),
                e) {
                case t(N._0x47fb48):
                    O[t(679)][t(616)] = "block";
                    break;
                case "email":
                    F.style[t(616)] = t(N._0x57f2c0)
                }
            }(n[t(v)]),
            n[t(812)] && function() {
                const e = T;
                B.style[e($._0x2fb643)] = e(803),
                O[e(679)][e(616)] = e($._0x36f3d6),
                F.style[e(616)] = e(803),
                k[e($._0x37608c)].display = e($._0x312c98)
            }();
            break;
        case 429:
            J(t(732));
            break;
        default:
            J(t(E) + e.status + ")")
        }
    }
    )[T(788)](e=>{
        console.log(e),
        J("A critical error has occurred (code: 0)")
    }
    ),
    NProgress[T(_)]()
}
async function Register(e) {
    const t = 458
      , n = 698
      , a = 614
      , o = 783
      , s = 653
      , r = 492
      , i = 830
      , c = 691
      , d = 520
      , l = 594
      , u = 691
      , m = 734
      , _ = 691
      , f = 534
      , g = 453
      , p = 534
      , y = 822
      , w = 453
      , b = 772
      , x = 558
      , h = 644
      , v = 522
      , E = 732
      , $ = {
        _0x2acaad: 679,
        _0x485d54: 616,
        _0x2b7263: 771,
        _0x7dd0cb: 679,
        _0x1f1067: 561
    }
      , N = {
        _0x40f4c0: 589,
        _0x7bdf97: 632
    }
      , L = {
        _0x4c8a15: 743
    }
      , P = _0x3f47a4
      , C = P(709);
    NProgress[P(517)]({
        showSpinner: !1
    }),
    NProgress[P(504)]();
    const T = document[P(614)](P(t))
      , I = Object[P(n)](new FormData(e))
      , R = document[P(a)](P(769))
      , S = document[P(614)](P(796))
      , B = I.Username
      , O = I[P(849)]
      , F = I[P(o)]
      , k = I[P(s)]
      , M = I[P(r)]
      , H = I[P(844)];
    function U(e) {
        const t = P;
        T[t(743)] = e,
        T[t(679)][t(616)] = t(561)
    }
    function A() {
        const e = P;
        try {
            document[e(614)](e(N._0x40f4c0))[e(650)] = !0,
            turnstile[e(455)](widgetId)
        } catch (t) {
            console[e(N._0x7bdf97)](t)
        }
    }
    if (!I)
        return U("Error, please reload the Page"),
        void NProgress[P(691)]();
    if (!H)
        return U("Invalid Captcha provided"),
        A(),
        void NProgress[P(691)]();
    if (!B)
        return U(P(i)),
        void NProgress[P(691)]();
    if (!F)
        return U("No Password provided"),
        void NProgress[P(c)]();
    if (F != k)
        return U(P(d)),
        void NProgress[P(691)]();
    if (F[P(734)] < 4)
        return U(P(l)),
        void NProgress[P(u)]();
    if (F[P(m)] > 64)
        return U("Password is too long"),
        void NProgress[P(_)]();
    !function() {
        const e = P;
        T[e(L._0x4c8a15)] = null,
        T[e(679)][e(616)] = e(803)
    }();
    const q = JSON[P(731)]({
        Username: CryptoJS[P(f)][P(822)](B, C)[P(g)](),
        Email: CryptoJS.AES[P(822)](O, C)[P(g)](),
        Password: CryptoJS[P(p)][P(y)](F, C)[P(453)](),
        ConfirmPassword: CryptoJS[P(534)].encrypt(k, C)[P(w)](),
        emailCode: M,
        captchaCode: H
    });
    await fetch(api_url + P(833), {
        credentials: P(532),
        method: P(615),
        body: q,
        headers: {
            "Content-Type": P(540)
        }
    })[P(641)](async e=>{
        const t = P;
        switch (e.status) {
        case 200:
            window.location[t(767)] = t(x);
            break;
        case 401:
            A();
            const n = await e.json();
            n[t(h)] && U(n[t(h)]),
            n[t(719)] && function(e) {
                const t = P;
                switch (R[t($._0x2acaad)][t($._0x485d54)] = "none",
                S[t(679)].display = t(803),
                e) {
                case t($._0x2b7263):
                    S[t($._0x7dd0cb)][t(616)] = t($._0x1f1067)
                }
            }(n[t(v)]);
            break;
        case 429:
            A(),
            U(t(E));
            break;
        default:
            A(),
            U("There was an error (code: " + e.status + ")")
        }
    }
    )[P(788)](e=>{
        const t = P;
        console[t(632)](e),
        U(t(b))
    }
    ),
    NProgress.done()
}
async function Logout() {
    const e = 811
      , t = 767
      , n = _0x3f47a4;
    NProgress[n(517)]({
        showSpinner: !1
    }),
    NProgress.start(),
    await fetch(api_url + "user/logout", {
        credentials: n(532),
        method: n(615)
    }),
    window[n(e)].pushState("main", "", "" + location[n(804)]),
    NProgress.done(),
    window[n(548)][n(t)] = n(513)
}
let isHistoryTableLoaded = !1;
async function credits_history(e) {
    const t = 532
      , n = 641
      , a = 641
      , o = 788
      , s = 846
      , r = 571
      , i = 441
      , c = 624
      , d = 691
      , l = 691
      , u = 767
      , m = _0x3f47a4;
    var _ = $(m(592));
    fetch(api_url + m(639), {
        credentials: m(t)
    })[m(n)](async e=>Promise.all([e[m(555)], e.json()]))[m(a)](async([e,t])=>{
        const n = 545
          , a = 620
          , o = 555
          , f = 555
          , g = 555
          , p = m;
        200 == e || 404 == e ? (t[p(s)].sort((e,t)=>t[p(560)] - e.date),
        t[p(846)][p(r)](e=>{
            const t = p;
            e.date = moment(e.date)[t(633)](t(793)) + " (" + moment(e.date)[t(n)]() + ")",
            e.status == t(651) ? e.status = t(842) + e[t(555)] + "</b>" : e.status == t(a) || e[t(o)] == t(826) ? e[t(f)] = '<b style="color: red">' + e[t(g)] + t(729) : e.status == t(563) && (e[t(f)] = t(794) + e[t(g)] + t(729))
        }
        ),
        isHistoryTableLoaded ? _[p(i)](p(442), t.data, {
            classes: "table table-hover"
        }) : (isHistoryTableLoaded = !0,
        _[p(441)]({
            data: t[p(846)],
            classes: p(c)
        }))) : 401 == e ? (NProgress[p(d)](),
        window.location.href = p(857)) : 403 == e && (NProgress[p(l)](),
        window.location[p(u)] = "suspended")
    }
    )[m(o)](e=>!1)
}
let isVerificationTableLoaded = !1;
async function credits_verification() {
    const e = 846
      , t = 571
      , n = 441
      , a = 624
      , o = 624
      , s = 691
      , r = 548
      , i = 513
      , c = 633
      , d = 651
      , l = 842
      , u = 555
      , m = 555
      , _ = 555
      , f = 826
      , g = 443
      , p = 555
      , y = 555
      , w = 729
      , b = _0x3f47a4;
    var x = $(b(733));
    fetch(api_url + b(858), {
        credentials: b(532)
    }).then(async e=>Promise[b(817)]([e.status, e[b(866)]()])).then(async([h,v])=>{
        const E = b;
        200 == h || 404 == h ? (v[E(846)].sort((e,t)=>t[E(560)] - e[E(560)]),
        v[E(e)][E(t)](e=>{
            const t = E;
            e.date = moment(e[t(560)])[t(c)]("DD/MM/YYYY, HH:mm:ss") + " (" + moment(e[t(560)])[t(545)]() + ")",
            e[t(555)] == t(d) ? e[t(555)] = t(l) + e[t(u)] + t(729) : e[t(m)] == t(620) || e[t(_)] == t(f) ? e[t(555)] = t(g) + e[t(p)] + "</b>" : "waiting" == e[t(555)] && (e[t(555)] = t(794) + e[t(y)] + t(w))
        }
        ),
        isVerificationTableLoaded ? x[E(n)]("load", v[E(846)], {
            classes: E(a)
        }) : (isVerificationTableLoaded = !0,
        x[E(441)]({
            data: v.data,
            classes: E(o)
        }))) : 401 == h ? (NProgress[E(s)](),
        window[E(r)].href = E(i)) : 403 == h && (NProgress[E(691)](),
        window.location.href = "suspended")
    }
    )[b(788)](e=>!1)
}
async function credits_leaderboard() {
    const e = 743
      , t = 502
      , n = 532
      , a = 641
      , o = 788
      , s = 614
      , r = 548
      , i = 691
      , c = 767
      , d = 744
      , l = 440
      , u = _0x3f47a4;
    document[u(614)](u(802))[u(e)] = "",
    fetch(api_url + u(t), {
        credentials: u(n)
    })[u(641)](async e=>Promise[u(817)]([e[u(555)], e[u(866)]()]))[u(a)](async([e,t])=>{
        const n = u;
        if (200 == e) {
            let e = 0
              , a = [];
            await asyncForEach(t, async t=>{
                const n = _0x1dab;
                e++,
                a += n(602) + e + n(654) + t[n(d)] + n(763) + t[n(827)][n(701)]() + n(l)
            }
            ),
            document[n(s)](n(802)).innerHTML = a
        } else
            401 == e ? (NProgress[n(691)](),
            window[n(r)][n(767)] = "expired") : 403 == e && (NProgress[n(i)](),
            window[n(548)][n(c)] = "suspended")
    }
    )[u(o)](e=>!1)
}
let isPurchaseTableLoaded = !1;
async function function_clientarea_purchases() {
    const e = 664
      , t = 641
      , n = 788
      , a = 846
      , o = 846
      , s = 442
      , r = 846
      , i = 513
      , c = _0x3f47a4;
    var d = $(c(551));
    fetch(api_url + c(e), {
        credentials: "include"
    })[c(t)](async e=>Promise[c(817)]([e.status, e.json()]))[c(t)](async([e,t])=>{
        const n = 693
          , l = 693
          , u = 471
          , m = 864
          , _ = 612
          , f = 633
          , g = 793
          , p = 696
          , y = c;
        200 == e ? (t[y(a)].sort((e,t)=>t[y(612)] - e[y(612)]),
        t[y(o)][y(571)](e=>{
            const t = y;
            e[t(n)] = e[t(l)][t(482)](0, 48),
            e[t(471)] = '<img style="margin: -1vh;" src="' + e[t(u)] + t(m),
            e[t(_)] = moment(e[t(612)])[t(f)](t(g)) + " (" + moment(e.purchase_date).fromNow() + ")",
            e[t(p)] = t(606) + e[t(696)] + t(714)
        }
        ),
        isPurchaseTableLoaded ? d[y(441)](y(s), t[y(r)], {
            classes: y(624)
        }) : (isPurchaseTableLoaded = !0,
        d[y(441)]({
            data: t.data,
            classes: y(624)
        }))) : 401 == e ? (NProgress[y(691)](),
        window.location[y(767)] = y(i)) : 403 == e && (NProgress[y(691)](),
        window.location.href = y(586))
    }
    )[c(n)](e=>!1)
}
function _0x1f5e() {
    const e = ["then", "settings_item_emailNotifications", "logged in", "message", "avatars", "apply", "Convert ", "writeText", "Start Video", "disabled", "credited", "textarea", "ConfirmPassword", "</td>\n                        <td >", "success", "addClass", "apiKey", "settings_password_buttonConfirm", "execCommand", "btn-outline-primary", "requiresTwoFactor", "credits_install_mod", "recentActivity", "user/purchases", "focus", "ad_space_2", "Status: <b style='font-weight: 600;'>Downloading(", "There was an error (code: ", "appendChild", "https://worker.ripper.store/api/v1/status?ident=", "isArray", "left", "fadeOut", "ads_unavailable", "system_message_1", "Two-Factor is not allowed to be empty", "#disable2FaModal", "001_credits_history", "style", "avatarsstored", "size", "user/settings/toggleActivityLogs", "addEventListener", "settings_item_changePassword", "system_message_0", "title", "ad-interrupted", "inc", "8115444DGEZXi", " Public Download(s) for ", "done", "upload", "name", "Copied!", "stop-transition", "ident", "append", "fromEntries", "ads_watched", "8918322GevPHG", "toLocaleString", "extracted-", "Watching Ads is currently disabled, please try again later.", "classList", "NSFW CENSORING SECTION ERROR", "total_credits", "settings_email_enableAlertbox", "settings_item_myApiKey", "144c5bad4eba6e5540879d30f99bd734", "toFixed", "001_credits_install_mod", "Two-Factor Disable", "(((.+)+)+)+$", '"><button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect">View</button></a>', " daily downloads", "Settings - ", "convertCreditsToDailyDownloadsModalText", "ad_space_1", "requiresVerification", "qrcode", "no-zoneId", "credits_verification", "</td>\n                            <td>", "avatarimagesize", "settings_item_changeEmail", "requiredToSetEmail", "Error while loading config: ", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">No File selected</h5></div>', "</b>", "001_credits_manage", "stringify", "You are being rate-limited, try again later.", "#credits_verification_table", "length", "credits_watch_ads", "9573jafXjG", "Uploading.. (", "blacklisted", "response", "Current email: ", "new_method", "__proto__", "innerHTML", "username", "https://worker.ripper.store/api/v1/hotswap?avatarid=", "getReader", "displayName", "purchases", "emailAddress", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">File is too large<br></h5></div>', "Invalid Captcha provided", "click", "URL", "sys-closing", "dl_daily_limit", "settings_leaderboard_status", "fixed", "2faEnabled", '{}.constructor("return this")( )', "settings_twoFactor_status", "</th>\n                            <td>", "constructor", "</td>\n                        <td>", "settings_apiKey_copy", "001_credits_verification", "1024x768", "href", "credits_history", "showDefaultRegister", "map", "email", "A critical error has occurred (code: fetch)", "maintenance", "A critical error has occurred (code: 0)", "modal", "#enable2FaModal", "RECENT ACTIVITY SECTION ERROR", "badge-success", "user/credits/couponCode?code=", "settings_twoFactor_disableButton", "body", "search", "Password", 'nav a[href^="', "btn-outline-danger", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">No File selected<br></h5></div>', "mt-2", "catch", "enableNSFWCensoring", "001_credits_leaderboard", "settings_item_leaderboard", " Credits", "DD/MM/YYYY, HH:mm:ss", "<b>", "download", "showEmailCode", "credits_couponCode_input", "qET0sOz8bC7OEVpkvYmQoVtpT5XkghiU9AyrjW3SXTuW8PVW7UhKB8OFjYWmYRPR", "settings_email_inputCode", "reset password", "/maintenance", "credits_leaderboard_table", "none", "pathname", "settings_email_status", "clientarea?section=", "4459596PCSSLS", "settings_email_input", "alert-secondary", "Content-Length", "history", "setNewPassword", "enableEmailNotifications", "main", "#changePasswordModal", "Bytes", "all", "enableTwoFactorAuthentication", "bind", "Start", "settings_apikey", "encrypt", "No Password provided", "settings_email_button", " Verification Processes", "failed", "credits", "premium", "</td>\n                        </tr>\n                        ", "No Username provided", "position", "settings_twoFactor_button", "user/register", "console", "settings_password_button", "send", "Disable", "settings_twoFactor_disableInput", "badge-danger", "closest", "EmailOnly", '<b style="color: green">', "warn", "cf-turnstile-response", "critical error, try again later.", "data", "table", "settings_item_activityLogs", "Email", "DOMContentLoaded", "settings_password_Alertbox", "read", "match", "user/settings/verifyTwoFactor", "settings_nsfwCensoring_status", "changed password", "expired", "user/credits/verification", "Successfully watched Ad, sending Credits.. next one! ^^", "progress", "loading_text", "settings_twoFactor_enableAlertbox", "/index", '" width="65" loading="lazy">', "header", "json", "ad_error_text", "Enable", "</td></tr>\n                        ", "bootstrapTable", "load", '<b style="color: red">', "has", "src", "Error, please reload the Page", "createElement", "critical error, please try again later. (code: {", "settings_enableActivityLogs_status", "abort", '<tr>\n                            <th scope="col">', "login?section=", "toString", "EMAIL SECTION ERROR", "reset", "loading", "Purchases - ", "alertbox", "createObjectURL", " Daily Downloads Left", "settings_twoFactor_disableAlertbox", " Credits to ", "onerror", "showDefaultLogin", "purchases_count", "user/account", "files", "106hYRHdb", "pushState", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">File too large<br></h5></div>', "image", "APIKEY SECTION ERROR", "pow", "preventDefault", "Two-Factor Enabled", "ad_error", "avatarsaddedtoday", "Enabled", "PASSWORD SECTION ERROR", "rate_limited", "get", "substr", "RipperStore - ClientArea", "Creating File", "value", "split", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">There was an Error<br></h5></div>', "Are you sure that you want to buy ", "settings_apiKey_reset", "avtr_[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}", "showTwoFactorCode", "emailCode", "credits_manage", "settings_enableEmailNotifications_status", "showDefaultResetPassword", "settings_enableEmailNotifications_button", ".zip", "Credits - ", "private_avatars", "You have to disable your AdBlocker", "001_credits_overview", "user/credits/leaderboard", "convertCreditsToDailyDownloadsText", "start", "select", "user/settings/toggleEmailNotifications", "clientarea_premium", "credits_install_questMod", "https://api.ripper.store/api/v2/", "info", "fadeIn", "input", "login", "001_credits_watch_ads", "enableLeaderboardVisibility", "settings_twoFactor_enableInput", "configure", "showPassword", "ad-rewarded", "Passwords do not match", "delete", "verificationType", "Copy", "messageType", "public_avatars", "total", "8f7f56e6201b7890b5f02bc36fb7626b", "avatars_awaiting_verification", "settings_passwordConfirm_input", "top", "join", "include", "showRewardAdButton", "AES", "responseType", "clipboard", "alert", "Coupon Code does not exist", "system_message", "application/json", "exception", "alert-danger", "1283327Dkkfnu", "headers", "fromNow", "LEADERBOARD SECTION ERROR", "contains", "location", "show", "avatarfilesize", "#purchases_table", "push", "popstate", "loaded", "status", "set", "go_back", "clientarea", "twoFactorCode", "date", "block", "flex", "waiting", "ad_space_3", "enableActivityLogs", "replace", "001_credits_install_questMod", "settings", "EMAIL NOTIFICATION SECTION ERROR", "fast", "forEach", "user/settings/enableTwoFactor", "ipAddress", "user/settings/changePassword", "change-email", "credits_leaderboard", "return (function() ", "daily_limit", "config", "convertCreditsToDailyDownloadsRange", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">File is too large</h5></div>', "avatars_submitted", "settings_password_input", "ACTIVITY SECTION ERROR", "UsernameOrEmail", "suspended", "TwoFactor", "open", "submitButton", "couponCode_alert", "swing", "#credits_history_table", "Disabled", "Password is too short", "No Username/Email provided", "ad-blocker", "includes", "settings_emailChange_button", 'nav a[href^="/index"]', "remove", "content", "\n                        <tr><td>", "avatarid_fileupload", "%)</b>", "network-error", '<a href="./detail?id=', "section", "user/settings/toggleLeaderboardVisibility", "user/login", "vrca", "clientarea_main", "purchase_date", '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">Invalid AvatarID</h5></div>', "getElementById", "POST", "display", "Next Video in (", "maintenanceMode", "change-password", "error", "start_fileupload", "13930264hOVyuz", "twoFactorType", "table table-hover", "settings_leaderboard_button", "add", " Purchases", "maintenanceNotice", "hide", "cors-error", "type", "log", "format", "419755oYeGpT", "Uploading..", "state", "settings_twoFactor_enableSrc", "settings_nsfwCensoring_button", "user/credits/history", "https://worker.ripper.store/api/v1/extractor"];
    return (_0x1f5e = function() {
        return e
    }
    )()
}
async function credits_couponCode() {
    const e = 614
      , t = 679
      , n = 788
      , a = 626
      , o = 555
      , s = 626
      , r = 787
      , i = 704
      , c = 679
      , d = 691
      , l = 691
      , u = 857
      , m = 548
      , _ = 555
      , f = 743
      , g = 704
      , p = _0x3f47a4;
    NProgress[p(504)]();
    const y = document[p(614)](p(797))
      , w = document[p(e)](p(590));
    w[p(t)][p(616)] = p(803),
    w[p(704)] = "",
    fetch(api_url + (p(779) + y[p(485)]), {
        credentials: p(532)
    }).then(async e=>{
        const t = p;
        if (200 == e[t(555)]) {
            const n = await e[t(866)]();
            w[t(743)] = n[t(644)],
            w.classList.add(t(537)),
            w[t(704)][t(626)]("mt-2"),
            w[t(704)][t(a)]("alert-success"),
            w.style[t(616)] = "block",
            NProgress.done()
        } else
            400 == e[t(o)] || 404 == e[t(o)] ? (w.innerHTML = t(538),
            w.classList[t(a)](t(537)),
            w.classList[t(s)](t(r)),
            w[t(i)][t(626)](t(542)),
            w[t(c)][t(616)] = t(561),
            NProgress[t(d)]()) : 401 == e[t(555)] ? (NProgress[t(l)](),
            window[t(548)].href = t(u)) : 403 == e[t(o)] ? (NProgress[t(d)](),
            window[t(m)].href = t(586)) : 406 == e[t(_)] && (w[t(f)] = "You already used this Coupon Code",
            w[t(g)].add(t(537)),
            w.classList[t(a)]("mt-2"),
            w[t(704)][t(626)](t(542)),
            w[t(679)][t(616)] = "block",
            NProgress.done())
    }
    )[p(n)](e=>!1)
}
async function switcher(e, t) {
    const n = 614
      , a = 814
      , o = 591
      , s = 591
      , r = 673
      , i = 591
      , c = 743
      , d = 521
      , l = 607
      , u = 591
      , m = 556
      , _ = 748
      , f = 804
      , g = 570
      , p = 469
      , y = 804
      , w = 828
      , b = 673
      , x = 607
      , h = 469
      , v = 673
      , E = 591
      , N = 570
      , L = 673
      , P = 591
      , C = 673
      , T = 591
      , I = 570
      , R = 614
      , S = 865
      , B = 743
      , O = 498
      , F = 614
      , k = 501
      , M = 570
      , H = 591
      , U = 673
      , A = 511
      , q = 570
      , D = 614
      , J = 501
      , Y = 673
      , V = 511
      , j = 570
      , W = 511
      , z = 591
      , K = 498
      , G = 673
      , Q = 591
      , X = 511
      , Z = 591
      , ee = 591
      , te = 614
      , ne = 865
      , ae = 743
      , oe = 498
      , se = 570
      , re = 673
      , ie = 614
      , ce = 591
      , de = 614
      , le = 556
      , ue = 607
      , me = 811
      , _e = 591
      , fe = 673
      , ge = 591
      , pe = 511
      , ye = 570
      , we = 498
      , be = 570
      , xe = 591
      , he = 765
      , ve = 673
      , Ee = 678
      , $e = 591
      , Ne = 673
      , Le = 673
      , Pe = 614
      , Ce = 790
      , Te = 511
      , Ie = 556
      , Re = 607
      , Se = 576
      , Be = 576
      , Oe = 591
      , Fe = 511
      , ke = 511
      , Me = 614
      , He = 743
      , Ue = 501
      , Ae = 673
      , qe = 614
      , De = 514
      , Je = 673
      , Ye = 591
      , Ve = 567
      , je = 673
      , We = 765
      , ze = 607
      , Ke = 722
      , Ge = 673
      , Qe = 591
      , Xe = 570
      , Ze = 865
      , et = 614
      , tt = 673
      , nt = 591
      , at = 591
      , ot = 570
      , st = 865
      , rt = 614
      , it = 678
      , ct = 673
      , dt = 765
      , lt = 673
      , ut = 711
      , mt = 673
      , _t = 591
      , ft = 614
      , gt = 730
      , pt = 673
      , yt = 567
      , wt = 501
      , bt = 827
      , xt = 827
      , ht = 591
      , vt = 511
      , Et = 591
      , $t = 570
      , Nt = 743
      , Lt = 673
      , Pt = 591
      , Ct = 570
      , Tt = 614
      , It = 743
      , Rt = 716
      , St = 673
      , Bt = 591
      , Ot = 570
      , Ft = 591
      , kt = 591
      , Mt = 591
      , Ht = 865
      , Ut = 457
      , At = 570
      , qt = 591
      , Dt = _0x3f47a4;
    const Jt = document.getElementById(Dt(611))
      , Yt = document[Dt(n)]("clientarea_purchases")
      , Vt = document.getElementById("clientarea_settings")
      , jt = document[Dt(614)]("clientarea_credits")
      , Wt = document.getElementById(Dt(507))
      , zt = document[Dt(614)](Dt(557));
    switch (e) {
    case Dt(a):
        $(Yt)[Dt(673)](0, "swing"),
        $(Vt).fadeOut(0, Dt(o)),
        $(Wt)[Dt(673)](0, Dt(591)),
        $(jt).fadeOut(0, Dt(s)),
        $(zt)[Dt(r)](0, Dt(i), function() {
            const e = Dt;
            $(Jt).fadeIn(e(At), e(qt))
        }),
        document[Dt(614)]("header")[Dt(c)] = "My Account - " + displayName,
        queryURL[Dt(d)](Dt(l)),
        t || window.history[Dt(469)](Dt(814), "", "" + location.pathname);
        break;
    case "purchases":
        function_clientarea_purchases(),
        $(Jt).fadeOut(Dt(570), Dt(u), function() {
            const e = Dt;
            $(Vt)[e(St)](0, e(Bt)),
            $(Wt)[e(673)](0, e(591)),
            $(Yt)[e(511)](e(Ot), e(Ft)),
            $(jt)[e(673)](0, e(kt)),
            $(zt).fadeIn(e(570), e(Mt)),
            document.getElementById(e(Ht))[e(743)] = e(Ut) + displayName
        }),
        queryURL[Dt(m)](Dt(607), Dt(748)),
        t || window.history[Dt(469)](Dt(_), "", location[Dt(f)] + "?" + queryURL);
        break;
    case "settings":
        $(Jt).fadeOut(Dt(g), Dt(591), function() {
            const e = Dt;
            $(Yt)[e(673)](0, e(591)),
            $(jt)[e(Lt)](0, e(591)),
            $(Wt).fadeOut(0, e(Pt)),
            $(Vt).fadeIn(e(Ct), e(Pt)),
            $(zt).fadeIn("fast", e(591)),
            document[e(Tt)]("header")[e(It)] = e(Rt) + displayName
        }),
        queryURL[Dt(556)](Dt(l), Dt(568)),
        t || window.history[Dt(p)](Dt(568), "", location[Dt(y)] + "?" + queryURL);
        break;
    case Dt(w):
        $(Jt)[Dt(b)](Dt(570), "swing", function() {
            const e = Dt;
            $(Yt)[e(673)](0, e(ht)),
            $(jt)[e(673)](0, e(591)),
            $(Vt)[e(673)](0, e(591)),
            $(Wt)[e(vt)]("fast", e(Et)),
            $(zt)[e(vt)](e($t), e(591)),
            document[e(614)](e(865))[e(Nt)] = "Premium - " + displayName
        }),
        queryURL[Dt(m)](Dt(x), Dt(828)),
        t || window[Dt(811)][Dt(h)](Dt(828), "", location[Dt(804)] + "?" + queryURL);
        break;
    case Dt(827):
        $(Jt)[Dt(v)](Dt(g), Dt(E), function() {
            const e = Dt;
            $(Yt)[e(673)](0, e(at)),
            $(Vt)[e(673)](0, e(591)),
            $(Wt)[e(673)](0, "swing"),
            $(jt)[e(511)](e(570), e(591)),
            $(zt).fadeIn(e(ot), e(591)),
            document[e(614)](e(st))[e(743)] = "Credits - " + displayName,
            $(document[e(rt)](e(it)))[e(ct)](0, "swing"),
            $(document[e(rt)](e(dt))).fadeOut(0, "swing"),
            $(document[e(614)](e(790)))[e(lt)](0, e(591)),
            $(document[e(rt)](e(ut)))[e(673)](0, e(591)),
            $(document.getElementById(e(514)))[e(mt)](0, e(_t)),
            $(document[e(ft)](e(gt)))[e(pt)](0, "swing"),
            $(document.getElementById(e(yt)))[e(673)](0, e(591)),
            $(document[e(ft)](e(wt)))[e(511)](e(ot), e(591)),
            queryURL[e(556)]("section", e(bt)),
            t || window[e(811)][e(469)](e(xt), "", location[e(804)] + "?" + queryURL)
        });
        break;
    case "credits_history":
        credits_history(),
        $(Jt)[Dt(673)](Dt(N), Dt(o), function() {
            const e = 673
              , n = 591
              , a = 673
              , o = 591
              , s = 514
              , r = 673
              , i = 730
              , c = 614
              , d = 678
              , l = 511
              , u = 570
              , m = 591
              , _ = 556
              , f = 811
              , g = Dt;
            $(Yt)[g(673)](0, "swing"),
            $(Vt)[g(Ge)](0, g(591)),
            $(Wt).fadeOut(0, "swing"),
            $(jt)[g(511)](g(570), g(Qe)),
            $(zt)[g(511)](g(Xe), g(591)),
            document[g(614)](g(Ze))[g(743)] = "Credits - " + displayName,
            $(document[g(et)](g(501)))[g(tt)]("fast", g(nt), function() {
                const p = g;
                $(document.getElementById(p(765)))[p(e)](0, p(n)),
                $(document[p(614)]("001_credits_leaderboard"))[p(a)](0, p(591)),
                $(document[p(614)](p(711)))[p(673)](0, p(o)),
                $(document.getElementById(p(s)))[p(r)](0, "swing"),
                $(document[p(614)](p(i)))[p(673)](0, p(591)),
                $(document[p(c)](p(567)))[p(673)](0, p(591)),
                $(document[p(614)](p(d)))[p(l)](p(u), p(m)),
                queryURL[p(_)]("section", "credits_history"),
                t || window[p(f)][p(469)](p(768), "", location[p(804)] + "?" + queryURL)
            })
        });
        break;
    case Dt(722):
        credits_verification(),
        $(Jt).fadeOut(Dt(570), Dt(591), function() {
            const e = Dt;
            $(Yt).fadeOut(0, "swing"),
            $(Vt)[e(673)](0, e(Oe)),
            $(Wt)[e(673)](0, "swing"),
            $(jt)[e(Fe)](e(570), e(591)),
            $(zt)[e(ke)](e(570), e(Oe)),
            document[e(Me)](e(865))[e(He)] = "Credits - " + displayName,
            $(document[e(614)](e(Ue)))[e(Ae)]("fast", "swing", function() {
                const n = e;
                $(document[n(614)]("001_credits_history"))[n(673)](0, n(591)),
                $(document[n(qe)](n(790))).fadeOut(0, "swing"),
                $(document[n(qe)](n(711)))[n(673)](0, n(591)),
                $(document[n(614)](n(De)))[n(673)](0, "swing"),
                $(document[n(614)](n(730)))[n(Je)](0, n(Ye)),
                $(document.getElementById(n(Ve)))[n(je)](0, "swing"),
                $(document[n(qe)](n(We)))[n(511)](n(570), n(591)),
                queryURL[n(556)](n(ze), "credits_verification"),
                t || window.history.pushState(n(Ke), "", location[n(804)] + "?" + queryURL)
            })
        });
        break;
    case Dt(576):
        credits_leaderboard(),
        $(Jt)[Dt(673)](Dt(570), Dt(i), function() {
            const e = Dt;
            $(Yt)[e(673)](0, e(_e)),
            $(Vt)[e(673)](0, "swing"),
            $(Wt)[e(fe)](0, e(ge)),
            $(jt)[e(pe)]("fast", "swing"),
            $(zt)[e(511)](e(ye), e(591)),
            document[e(614)](e(865))[e(743)] = e(we) + displayName,
            $(document[e(614)]("001_credits_overview"))[e(673)](e(be), e(xe), function() {
                const n = e;
                $(document.getElementById(n(he)))[n(ve)](0, n(591)),
                $(document[n(614)](n(Ee)))[n(ve)](0, n(591)),
                $(document[n(614)](n(711))).fadeOut(0, n($e)),
                $(document.getElementById(n(514)))[n(Ne)](0, "swing"),
                $(document.getElementById(n(730)))[n(Le)](0, n(591)),
                $(document[n(614)]("001_credits_install_questMod"))[n(673)](0, "swing"),
                $(document[n(Pe)](n(Ce)))[n(Te)]("fast", "swing"),
                queryURL[n(Ie)](n(Re), n(Se)),
                t || window[n(811)][n(469)](n(Be), "", location.pathname + "?" + queryURL)
            })
        });
        break;
    case Dt(662):
        $(Jt)[Dt(673)](Dt(g), Dt(o), function() {
            const e = Dt;
            $(Yt)[e(G)](0, e(Q)),
            $(Vt)[e(G)](0, e(591)),
            $(Wt)[e(673)](0, e(Q)),
            $(jt)[e(X)]("fast", e(Z)),
            $(zt).fadeIn(e(570), e(ee)),
            document[e(te)](e(ne))[e(ae)] = e(oe) + displayName,
            $(document[e(te)]("001_credits_overview"))[e(673)](e(se), e(591), function() {
                const n = e;
                $(document[n(614)]("001_credits_verification")).fadeOut(0, "swing"),
                $(document.getElementById(n(678)))[n(673)](0, "swing"),
                $(document[n(614)](n(790))).fadeOut(0, "swing"),
                $(document[n(614)](n(514)))[n(re)](0, "swing"),
                $(document[n(ie)](n(730)))[n(673)](0, n(ce)),
                $(document[n(ie)](n(567))).fadeOut(0, n(591)),
                $(document[n(de)]("001_credits_install_mod")).fadeIn(n(570), n(ce)),
                queryURL[n(le)](n(ue), "credits_install_mod"),
                t || window[n(me)][n(469)]("credits_install_mod", "", location[n(804)] + "?" + queryURL)
            })
        });
        break;
    case "credits_watch_ads":
        $(Jt)[Dt(673)]("fast", "swing", function() {
            const e = 614
              , n = 765
              , a = 591
              , o = 591
              , s = 711
              , r = 673
              , i = 673
              , c = 567
              , d = 570
              , l = Dt;
            $(Yt).fadeOut(0, l(591)),
            $(Vt)[l(673)](0, "swing"),
            $(Wt).fadeOut(0, l(591)),
            $(jt)[l(V)](l(j), "swing"),
            $(zt)[l(W)](l(570), l(z)),
            document.getElementById(l(865)).innerHTML = l(K) + displayName,
            $(document.getElementById(l(501)))[l(673)](l(570), l(591), function() {
                const u = l;
                $(document[u(e)](u(n))).fadeOut(0, u(a)),
                $(document[u(e)](u(678)))[u(673)](0, u(a)),
                $(document[u(614)](u(790)))[u(673)](0, u(o)),
                $(document[u(e)](u(s)))[u(r)](0, "swing"),
                $(document[u(e)]("001_credits_manage"))[u(i)](0, u(591)),
                $(document[u(614)](u(c)))[u(673)](0, u(591)),
                $(document[u(e)]("001_credits_watch_ads"))[u(511)](u(d), u(o)),
                queryURL.set(u(607), u(735)),
                t || window[u(811)][u(469)](u(735), "", location[u(804)] + "?" + queryURL)
            })
        });
        break;
    case Dt(508):
        $(Jt)[Dt(v)](Dt(g), Dt(591), function() {
            const e = 765
              , n = 591
              , a = 614
              , o = 591
              , s = 711
              , r = 514
              , i = 556
              , c = 508
              , d = 811
              , l = 469
              , u = 804
              , m = Dt;
            $(Yt)[m(673)](0, m(H)),
            $(Vt).fadeOut(0, m(H)),
            $(Wt)[m(U)](0, "swing"),
            $(jt)[m(A)](m(q), m(591)),
            $(zt).fadeIn("fast", m(H)),
            document.getElementById("header")[m(743)] = m(498) + displayName,
            $(document[m(D)](m(J)))[m(Y)](m(570), m(H), function() {
                const _ = m;
                $(document[_(614)](_(e)))[_(673)](0, _(n)),
                $(document[_(614)](_(678))).fadeOut(0, "swing"),
                $(document[_(a)](_(790)))[_(673)](0, _(o)),
                $(document[_(a)](_(s)))[_(673)](0, "swing"),
                $(document[_(a)](_(730)))[_(673)](0, _(o)),
                $(document[_(a)](_(r)))[_(673)](0, _(n)),
                $(document[_(614)](_(567))).fadeIn(_(570), _(591)),
                queryURL[_(i)](_(607), _(c)),
                t || window[_(d)][_(l)](_(508), "", location[_(u)] + "?" + queryURL)
            })
        });
        break;
    case Dt(493):
        $(Jt)[Dt(L)](Dt(N), Dt(P), function() {
            const e = 673
              , n = 614
              , a = 591
              , o = 614
              , s = 514
              , r = 591
              , i = 673
              , c = 511
              , d = Dt;
            $(Yt)[d(673)](0, d(591)),
            $(Vt)[d(C)](0, d(T)),
            $(Wt).fadeOut(0, d(591)),
            $(jt)[d(511)](d(I), d(591)),
            $(zt)[d(511)](d(570), d(T)),
            document[d(R)](d(S))[d(B)] = d(O) + displayName,
            $(document[d(F)](d(k)))[d(C)](d(M), d(T), function() {
                const l = d;
                $(document[l(614)](l(765)))[l(e)](0, "swing"),
                $(document[l(n)](l(678))).fadeOut(0, "swing"),
                $(document[l(614)]("001_credits_leaderboard"))[l(673)](0, l(a)),
                $(document[l(n)](l(711)))[l(673)](0, "swing"),
                $(document[l(o)](l(s)))[l(e)](0, l(r)),
                $(document[l(614)](l(567)))[l(i)](0, l(591)),
                $(document[l(614)](l(730)))[l(c)](l(570), l(591)),
                queryURL.set("section", l(493)),
                t || window[l(811)].pushState("credits_manage", "", location[l(804)] + "?" + queryURL)
            })
        });
        break;
    default:
        switcher(Dt(a))
    }
}
async function HotswapReset() {
    const e = 610
      , t = 614
      , n = 743
      , a = 803
      , o = 804
      , s = _0x3f47a4;
    document[s(614)](s(603)).value = null,
    document[s(614)](s(e))[s(467)][0] = null,
    document[s(t)](s(621))[s(650)] = !1,
    document[s(614)](s(621))[s(n)] = "Start",
    document.getElementById(s(601)).style.display = "flex",
    document.getElementById(s(456))[s(679)].display = s(a),
    params[s(521)]("ident"),
    window.history[s(469)]({}, "", location[s(o)] + "?" + params)
}
async function HotswapQueue(e) {
    const t = 616
      , n = 803
      , a = 601
      , o = 679
      , s = 670
      , r = 532
      , i = 632
      , c = 861
      , d = 729
      , l = 826
      , u = 743
      , m = 487
      , _ = _0x3f47a4;
    document[_(614)](_(741)).style[_(t)] = _(n),
    document[_(614)](_(a))[_(o)].display = "none",
    document.getElementById(_(456))[_(679)][_(616)] = "block",
    await fetch(_(s) + e, {
        credentials: _(r)
    })[_(641)](async t=>{
        const n = 781
          , a = 810
          , o = 861
          , s = 743
          , r = 710
          , i = 604
          , f = 447
          , g = 795
          , p = 781
          , y = _;
        let w = await t[y(866)]()
          , b = w[0][y(555)];
        return document.getElementById(y(c))[y(743)] = "Status: <b style='font-weight: 600;'>" + b + y(d),
        b == y(l) ? (alertbox[y(u)] = y(m),
        void HotswapReset()) : b == y(691) ? (await fetch(w[0].download).then(async e=>{
            const t = y
              , c = e[t(n)].getReader()
              , d = e.headers[t(481)](t(a));
            let l = 0
              , u = []
              , m = 0;
            for (; ; ) {
                const {done: e, value: n} = await c[t(852)]();
                if (++m >= 50 && (m = 0,
                document[t(614)](t(o))[t(s)] = "Status: <b style='font-weight: 600;'>Downloading(" + (l / d * 100)[t(r)](2) + t(i)),
                e)
                    break;
                u[t(552)](n),
                l += n[t(734)]
            }
            document.getElementById("start_fileupload")[t(743)] = t(484);
            let _ = new Blob(u);
            var w = window[t(753)].createObjectURL(_)
              , b = document[t(f)]("a");
            b[t(767)] = w,
            b[t(g)] = "custom.vrca",
            document[t(p)].appendChild(b),
            b[t(752)](),
            b.remove(),
            NProgress.done(),
            HotswapReset()
        }
        ).catch(e=>{
            HotswapReset()
        }
        ),
        void HotswapReset()) : void setTimeout(async function() {
            HotswapQueue(e)
        }, 2e3)
    }
    )[_(788)](e=>{
        console[_(i)](e),
        HotswapReset()
    }
    )
}
async function hotswapWithUpload() {
    const e = 517
      , t = 504
      , n = 743
      , a = 614
      , o = 610
      , s = 734
      , r = 743
      , i = 614
      , c = 621
      , d = 681
      , l = 581
      , u = 614
      , m = 621
      , _ = 820
      , f = 743
      , g = 614
      , p = 614
      , y = 691
      , w = 621
      , b = 697
      , x = 866
      , h = 615
      , v = 745
      , E = 692
      , $ = 683
      , N = 450
      , L = 683
      , P = 860
      , C = 836
      , T = 555
      , I = 556
      , R = 804
      , S = 743
      , B = 470
      , O = 691
      , F = 487
      , k = 737
      , M = 691
      , H = _0x3f47a4;
    document.getElementById(H(621)).disabled = !0,
    NProgress[H(e)]({
        showSpinner: !1
    }),
    NProgress[H(t)](),
    alertbox[H(n)] = null;
    let U = document[H(a)]("avatarid_fileupload").value
      , A = document[H(614)](H(o)).files[0];
    if (null == A || 0 == A[H(s)])
        return alertbox[H(r)] = H(728),
        document[H(i)]("start_fileupload")[H(650)] = !1,
        document.getElementById(H(c))[H(n)] = H(820),
        void NProgress[H(691)]();
    if (A[H(d)] > 1e8)
        return alertbox.innerHTML = H(l),
        document[H(u)](H(m))[H(650)] = !1,
        document[H(i)](H(621)).innerHTML = H(_),
        void NProgress.done();
    if (!U[H(853)](H(490)))
        return alertbox[H(f)] = H(613),
        document[H(g)]("start_fileupload")[H(650)] = !1,
        document[H(p)](H(c))[H(f)] = H(_),
        void NProgress[H(y)]();
    document.getElementById(H(w))[H(743)] = H(635);
    let q = new FormData;
    q[H(b)](H(610), A);
    let D = new XMLHttpRequest;
    D[H(535)] = H(x),
    D[H(588)](H(h), H(v) + U),
    D[H(463)] = function(e) {
        const t = H;
        HotswapReset(),
        NProgress[t(691)]()
    }
    ,
    D[H(E)][H($)](H(620), function(e) {
        const t = H;
        HotswapReset(),
        NProgress[t(691)]()
    }),
    D[H(E)].addEventListener(H(N), function(e) {
        const t = H;
        HotswapReset(),
        NProgress[t(M)]()
    }),
    D[H(E)][H(L)](H(P), function(e) {
        const t = H;
        let n = e[t(554)] / e[t(526)] * 100;
        document[t(614)](t(621))[t(743)] = t(k) + n[t(710)](0) + "%)"
    }),
    D.addEventListener("load", function(e) {
        const t = H;
        if (201 == D[t(T)]) {
            NProgress.done();
            let e = D[t(739)];
            params[t(I)]("ident", e),
            window[t(811)][t(469)]({}, "", location[t(R)] + "?" + params),
            HotswapQueue(e)
        } else
            413 == D.status ? (alertbox[t(S)] = t(B),
            NProgress[t(O)](),
            HotswapReset()) : 500 == D[t(555)] && (alertbox[t(S)] = t(F),
            NProgress[t(691)](),
            HotswapReset())
    }),
    D[H(C)](q)
}
async function ExtractorReset() {
    const e = 614
      , t = 621
      , n = 650
      , a = 743
      , o = 562
      , s = 616
      , r = 803
      , i = 521
      , c = 811
      , d = _0x3f47a4;
    document[d(e)]("vrca").files[0] = null,
    document.getElementById(d(t))[d(n)] = !1,
    document[d(e)](d(621))[d(a)] = d(820),
    document[d(614)](d(601))[d(679)][d(616)] = d(o),
    document[d(614)](d(456)).style[d(s)] = d(r),
    params[d(i)]("ident"),
    window[d(c)][d(469)]({}, "", location[d(804)] + "?" + params)
}
async function ExtractorQueue(e) {
    const t = 601
      , n = 616
      , a = 614
      , o = 456
      , s = 561
      , r = 532
      , i = 641
      , c = 788
      , d = 861
      , l = 743
      , u = 826
      , m = 691
      , _ = 641
      , f = 788
      , g = 710
      , p = 552
      , y = 734
      , w = 621
      , b = 459
      , x = 447
      , h = 767
      , v = 702
      , E = 691
      , $ = _0x3f47a4;
    document[$(614)]($(t))[$(679)][$(n)] = "none",
    document[$(a)]($(o))[$(679)][$(616)] = $(s),
    await fetch("https://worker.ripper.store/api/v1/status?ident=" + e, {
        credentials: $(r)
    })[$(i)](async t=>{
        const n = $;
        let a = await t[n(866)]()
          , o = a[0][n(555)];
        return document[n(614)](n(d))[n(l)] = "Status: <b style='font-weight: 600;'>" + o + n(729),
        o == n(u) ? (alertbox.innerHTML = '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">There was an Error<br></h5></div>',
        void ExtractorReset()) : o == n(m) ? (await fetch(a[0][n(795)])[n(_)](async e=>{
            const t = n
              , a = e[t(781)][t(746)]()
              , o = e[t(544)][t(481)]("Content-Length");
            let s = 0
              , r = []
              , i = 0;
            for (; ; ) {
                const {done: e, value: n} = await a[t(852)]();
                if (++i >= 50 && (i = 0,
                document.getElementById(t(861))[t(743)] = t(667) + (s / o * 100)[t(g)](2) + "%)</b>"),
                e)
                    break;
                r[t(p)](n),
                s += n[t(y)]
            }
            document.getElementById(t(w)).innerHTML = t(484);
            let c = new Blob(r);
            var d = window.URL[t(b)](c)
              , l = document[t(x)]("a");
            l[t(h)] = d,
            l.download = t(v) + genRanHex(6) + t(497),
            document.body[t(669)](l),
            l[t(752)](),
            l[t(600)](),
            NProgress[t(E)](),
            ExtractorReset()
        }
        )[n(f)](e=>{
            ExtractorReset()
        }
        ),
        void ExtractorReset()) : void setTimeout(async function() {
            ExtractorQueue(e)
        }, 2e3)
    }
    )[$(c)](e=>{
        console.log(e),
        ExtractorReset()
    }
    )
}
async function extractWithUpload() {
    const e = 621
      , t = 650
      , n = 504
      , a = 614
      , o = 681
      , s = 786
      , r = 750
      , i = 691
      , c = 635
      , d = 610
      , l = 535
      , u = 640
      , m = 620
      , _ = 683
      , f = 450
      , g = 692
      , p = 860
      , y = 691
      , w = 556
      , b = 696
      , x = 555
      , h = 470
      , v = 555
      , E = 743
      , $ = 743
      , N = 710
      , L = 691
      , P = 691
      , C = _0x3f47a4;
    document[C(614)](C(e))[C(t)] = !0,
    NProgress.configure({
        showSpinner: !1
    }),
    NProgress[C(n)](),
    alertbox[C(743)] = null;
    let T = document[C(a)](C(610))[C(467)][0];
    if (null == T || 0 == T[C(734)] || null == T[C(o)])
        return alertbox[C(743)] = C(s),
        NProgress.done(),
        void ExtractorReset();
    if (T[C(o)] > 1e8)
        return alertbox.innerHTML = C(r),
        NProgress[C(i)](),
        void ExtractorReset();
    document[C(614)](C(e)).innerHTML = C(c);
    let I = new FormData;
    I.append(C(d), T);
    let R = new XMLHttpRequest;
    R[C(l)] = "json",
    R[C(588)](C(615), C(u)),
    R.onerror = function(e) {
        const t = C;
        ExtractorReset(),
        NProgress[t(691)]()
    }
    ,
    R[C(692)][C(683)](C(m), function(e) {
        const t = C;
        ExtractorReset(),
        NProgress[t(P)]()
    }),
    R[C(692)][C(_)](C(f), function(e) {
        const t = C;
        ExtractorReset(),
        NProgress[t(L)]()
    }),
    R[C(g)][C(683)](C(p), function(e) {
        const t = C;
        let n = e[t(554)] / e.total * 100;
        document[t(614)](t(621))[t($)] = "Uploading.. (" + n[t(N)](0) + "%)"
    }),
    R.addEventListener("load", function(e) {
        const t = C;
        if (201 == R.status) {
            NProgress[t(y)]();
            let e = R.response;
            params[t(w)](t(b), e),
            window[t(811)].pushState({}, "", location[t(804)] + "?" + params),
            ExtractorQueue(e)
        } else
            413 == R[t(x)] ? (alertbox[t(743)] = t(h),
            NProgress.done(),
            ExtractorReset()) : 500 == R[t(v)] && (alertbox[t(E)] = '<hr><div class="alert-danger fade show" id="error-info" role="alert" style="text-align: center;padding: 1px 1px 10px 1px;margin: 0% 15% 0% 15%;border-radius: 10px;border: 1px solid transparent;margin-bottom: 1rem;position: relative;"><br><h5 class="alert-heading">There was an Error<br></h5></div>',
            NProgress.done(),
            ExtractorReset())
    }),
    R.send(I)
}
async function Stats() {
    const e = 532
      , t = 641
      , n = 614
      , a = 550
      , o = 566
      , s = 738
      , r = 525
      , i = 743
      , c = 499
      , d = _0x3f47a4;
    NProgress[d(517)]({
        showSpinner: !1
    }),
    NProgress.start(),
    fetch(api_url + "stats", {
        credentials: d(e)
    })[d(t)](e=>e.json()).then(e=>{
        const t = d;
        NProgress.inc(),
        document[t(614)]("avatarimagesize").innerHTML = formatBytes(e[t(724)], 2),
        document[t(n)](t(a)).innerHTML = formatBytes(e[t(550)], 2),
        document[t(614)](t(680)).innerHTML = e[t(680)].toLocaleString("en")[t(o)](/,/g, "."),
        document[t(614)]("avatarsaddedtoday").innerHTML = e[t(477)][t(701)]("en").replace(/,/g, "."),
        document[t(614)]("blacklisted")[t(743)] = e[t(s)],
        document[t(614)]("public_avatars")[t(743)] = e[t(r)][t(701)]("en")[t(566)](/,/g, "."),
        document[t(n)](t(499))[t(i)] = e[t(c)].toLocaleString("en")[t(566)](/,/g, "."),
        NProgress[t(691)]()
    }
    )
}
function fallbackCopyTextClipboard(e) {
    const t = 530
      , n = 831
      , a = 757
      , o = 781
      , s = 665
      , r = 781
      , i = _0x3f47a4;
    var c = document[i(447)](i(652));
    c.value = e,
    c.style[i(t)] = "0",
    c.style[i(672)] = "0",
    c.style[i(n)] = i(a),
    document[i(o)][i(669)](c),
    c[i(s)](),
    c[i(505)]();
    try {
        document[i(659)]("copy")
    } catch (e) {}
    document[i(r)].removeChild(c)
}
function copyTextClipboard(e) {
    const t = 536
      , n = 648
      , a = 641
      , o = _0x3f47a4;
    navigator[o(536)] ? navigator[o(t)][o(n)](e)[o(a)](function() {}, function(e) {}) : fallbackCopyTextClipboard(e)
}
