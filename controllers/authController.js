
exports.getLoginPage = async (req,res) => {
     res.render('auth/login', {
        title:'Авторизация',
        isLogin: true,
        layout: 'empty',
        error: req.flash('error')
    })
}

exports.logout = async (req,res) => {
     req.session.destroy(() => {
        res.redirect('/auth/login')
    })
}

exports.login = async (req,res) => {
    try {
        const {code_ou,password} = req.body
        const candidate = {password: '1',name: '1'}
        if(candidate) {
            const areSame = await password === candidate.password
            if(areSame) {
                console.log('yes')
                req.session.user = candidate
                req.session.isAuthenticated = true
                req.session.save(err => {
                    if(err) {
                        throw err
                    }
                    return res.redirect('/')
                })
            }else {
                req.flash('error', 'Неверный пароль')
                return res.redirect('/auth/login')
            }
        }else {
            req.flash('error', 'Такой учетной записи нет')
            return res.redirect('/auth/login')
        }
    } catch(e) {
        console.log(e)
    }
}