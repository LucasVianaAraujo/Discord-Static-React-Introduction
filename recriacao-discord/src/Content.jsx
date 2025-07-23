function Content() {
    return (
        <div>
            <div className="background">
                <div className="inside-background">
                    <h1>Help Center</h1>
                    <input type="search" placeholder="Search" />
                </div>
            </div>

            <div className="top01">
                <h1>Need help? We've got your back.</h1>
            </div>

            <div className="text01">
                <h2>From account settings to permissions, find help for everything Discord.</h2>
                <p>
                    If you're new to Discord and looking for tips, check out our{' '}
                    <a href="#">Beginner's Guide</a>
                </p>
            </div>

            <div className="cards">
                <div className="card">
                    <img src="src/assets/img_known_issues.svg" alt="known issues" />
                    <h3>Announcements</h3>
                    <h4>We've got our ear to the ground. Here's what you need to know.</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_text_chat.svg" alt="text chat" />
                    <h3>Discord Basics</h3>
                    <h4>Start off on the right foot! Not the left one!</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_accoutn_settings.svg" alt="account settings" />
                    <h3>Account Settings</h3>
                    <h4>You're a special snowflake and so is your account.</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_server_setuo (1).svg" alt="server setup" />
                    <h3>Server Settings</h3>
                    <h4>Almost as exciting as interior decorating.</h4>
                </div>
            </div>

            <div className="cards2">
                <div className="card">
                    <img src="src/assets/img_store.svg" alt="store" />
                    <h3>Nitro, Shop & Server Boosting</h3>
                    <h4>Please don't shop until you drop. Let us help.</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_direct_messaging.svg" alt="direct messaging" />
                    <h3>Quests & Promotions</h3>
                    <h4>Welcome, weary traveler! Would you like to see our quests?</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_billing.svg" alt="billing" />
                    <h3>Payments & Billing</h3>
                    <h4>That feel when you look at your bank account.</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_trust_safety.svg" alt="safety" />
                    <h3>Safety, Privacy & Policy</h3>
                    <h4>Keep things safe & sound for you and your buddies.</h4>
                </div>
            </div>

            <div className="cards3">
                <div className="card">
                    <img src="src/assets/img_faq.svg" alt="faq" />
                    <h3>Safety, Privacy & Policy</h3>
                    <h4>Keep things safe & sound for you and your buddies.</h4>
                </div>
            </div>

            <div className="pg01">
                <h2>Other ways to find help.</h2>
            </div>

            <div className="cards4">
                <div className="card">
                    <img src="src/assets/img_helpcenter.svg" alt="help center" />
                    <h3>Developer Support</h3>
                    <h4>Your home for support with developing bots, apps, & games using our API and SDK!</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_channel_setup.svg" alt="channel setup" />
                    <h3>Apps Center</h3>
                    <h4>Read all about how you can use, discover, and add Apps as a Discord user!</h4>
                </div>

                <div className="card">
                    <img src="src/assets/img_twitter.svg" alt="twitter" />
                    <h3>Twitter</h3>
                    <h4>Have a quick question? Hit us up on Twitter!</h4>
                </div>
            </div>

            <div className="background1">
                <div className="empty">
                    <div className="empty"></div>
                    <h2>LEARN MORE</h2>
                </div>

                <div className="textinho">
                    <a className="carinha" href="#">
                        <h2>LEARN MORE</h2>
                    </a>
                </div>

                <div className="device">
                    <img src="src/assets/pc.png" width="1000px" alt="pc" />
                </div>

                <div className="sep">
                    <div className="parte">
                        <a href="#"><h3>Download</h3></a>
                        <p></p>
                        <a href="#"><h3>Help & Support</h3></a>
                        <p></p>
                        <a href="#"><h3>Feedback</h3></a>
                        <p></p>
                        <a href="#"><h3>Status</h3></a>
                        <p></p>
                    </div>

                    <div className="parte1">
                        <a href="#"><h3>Company</h3></a>
                        <p></p>
                        <a href="#"><h3>Jobs <strong>- We're hiring</strong></h3></a>
                        <p></p>
                        <a href="#"><h3>Blog</h3></a>
                        <p></p>
                        <a href="#"><h3>Terms & Privacy</h3></a>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;