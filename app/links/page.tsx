import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "../components/ExternalLink";

export const metadata: Metadata = {
  title: "links",
};

export default function Links() {
  return (
    <>
      <h1 className="mb-3 text-2xl font-semibold items-center text-center">
        links
      </h1>
      <p>🕸️ Where I hang out in the interwebs</p>
      <ul data-cy="sns">
        <li>
          LinkedIn: <ExternalLink href="https://linkedin.com/in/sunyiu/" />
        </li>
        <li>
          GitHub: <ExternalLink href="https://github.com/sunnz" />
        </li>
        <li>
          mastodon: <ExternalLink href="https://infosec.exchange/@sunnz" />
        </li>
        <li>home page: you are already here 😉</li>
        <li>
          note: only trust accounts listed here. I don&apos;t have accounts on
          facebook, <s>twitter</s> X, instagram, whatsapp, or wechat. if you
          find my name from those places, you can assume they are not me, eg,
          someone else using the same name
        </li>
      </ul>
      <p>
        🔗 A collection of links that may or may not be related to anything at
        all
      </p>

      <ul>
        <li>
          Browser alternatives
          <ul>
            <li>
              ungoogled-chromium:{" "}
              <ExternalLink href="https://github.com/ungoogled-software/ungoogled-chromium/" />
            </li>
            <li>
              Icecat:{" "}
              <ExternalLink href="https://www.gnu.org/software/gnuzilla/" />
            </li>
            <li>
              Waterfox: <ExternalLink href="https://www.waterfox.net/" />
            </li>
            <li>
              Pale Meme: <ExternalLink href="https://www.palemoon.org/" />
            </li>
            <li>
              qutebrowser: <ExternalLink href="https://www.qutebrowser.org/" />
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          Cantonese
          <ul>
            <li>
              webapp: <ExternalLink href="http://www.cantoneseinput.com/" />
            </li>
            <li>
              native:{" "}
              <ExternalLink href="https://www.cantonese.tools/mac.html" />
            </li>
            <li>
              macOS opensource
              <ul>
                <li>
                  <ExternalLink href="https://openvanilla.org/" />
                </li>
                <li>
                  <ExternalLink href="https://github.com/openvanilla/openvanilla/" />
                </li>
              </ul>
            </li>
            <li>
              plugin from member of macrumors forum:{" "}
              <ExternalLink href="https://forums.macrumors.com/threads/cantonese-input-on-mac-os-x.222171/" />
            </li>
          </ul>
        </li>
        <li>
          Coffee, best time to drink
          <ul>
            <li>
              <ExternalLink href="http://en.ilovecoffee.jp/posts/view/57" />
            </li>
          </ul>
        </li>
        <li>
          Diff and patch in ten minutes
          <ul>
            <li>
              <ExternalLink href="http://stephenjungels.com/jungels.net/articles/diff-patch-ten-minutes.html" />
            </li>
            <li>
              Unified patch - how to create and apply - what <code>git</code>{" "}
              uses.
              <ul>
                <li>
                  Also: how specify a specific file to be applied on, very
                  useful.
                </li>
              </ul>
            </li>
            <li>
              Takes 10 seconds to skim if you are already familiar with{" "}
              <code>git</code> and unified patch.
            </li>
          </ul>
        </li>
        <li>
          FireFox addon collections
          <ul>
            <li>
              <ExternalLink href="https://addons.mozilla.org/en-US/firefox/collections/15219492/my-base/" />
            </li>
            <li>
              <ExternalLink href="https://addons.mozilla.org/en-US/firefox/collections/15219492/misc/" />
            </li>
          </ul>
        </li>
        <li>
          FireFox tweaks for privacy and security:
          <ul>
            <li>
              <ExternalLink href="https://www.privacytools.io/browsers/#about_config" />
            </li>
          </ul>
        </li>
        <li>
          init.sh - my opinionated initial setup for a dev machine
          <ul>
            <li>
              <ExternalLink href="https://gitlab.com/snippets/1882561" />
            </li>
          </ul>
        </li>
        <li>
          John - password recovery with dictionary + brute force
          &ldquo;hybrid&rdquo; attack
          <ul>
            <li>
              The best &ldquo;Jumbo&rdquo; version:{" "}
              <ExternalLink href="https://github.com/magnumripper/JohnTheRipper" />
            </li>
            <li>
              Usage:{" "}
              <ExternalLink href="https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/doc/EXAMPLES" />
            </li>
            <li>
              Password files (real passwords) to feed into John:{" "}
              <ExternalLink href="https://github.com/berzerk0/Probable-Wordlists/tree/master/Real-Passwords" />
            </li>
          </ul>
        </li>
        <li>
          Markdown
          <ul>
            <li>
              Common markup for Markdown and reStructuredText
              <ul>
                <li>
                  <ExternalLink href="https://gist.github.com/dupuy/1855764" />
                </li>
              </ul>
            </li>
            <li>
              Marp, Markdown Presentation Ecosystem
              <ul>
                <li>
                  <ExternalLink href="https://marp.app/" />
                </li>
                <li>
                  <ExternalLink href="https://github.com/marp-team/marp" />
                </li>
              </ul>
            </li>
            <li>
              Online editor
              <ul>
                <li>
                  <ExternalLink href="https://dillinger.io/" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Nurse on call: <Link href="tel:1300606024">1300 606 024</Link>
        </li>
        <li>
          Redis - Mac GUI
          <ul>
            <li>
              <ExternalLink href="https://github.com/luin/medis" />
            </li>
            <li>
              <ExternalLink href="http://getmedis.com/" />
            </li>
          </ul>
        </li>
        <li>
          TeamViewer Quick Support
          <ul>
            <li>
              <ExternalLink href="https://download.teamviewer.com/download/TeamViewerQS.dmg" />
            </li>
          </ul>
        </li>
        <li>
          Tyre tread depth guide
          <ul>
            <li>
              <ExternalLink href="https://ik.imagekit.io/ntvz9dezi1x/blog/Tyroola-how-to-make-sure-your-tyre-tread-depth-is-not-illegal.jpg" />
            </li>
          </ul>
        </li>
        <li>
          Misc
          <ul>
            <li>
              <span className="text-red-200">bellamy</span> (
              <ExternalLink href="https://www.abc.net.au/news/2019-11-15/bellamys-baby-formula-chinese-takeover-approved/11707190">
                acquired
              </ExternalLink>
              )
            </li>
            <li>
              <span className="text-blue-200">cygnett</span> (melbourne)
            </li>
            <li>
              <span className="text-green-200">foxconn</span>
              <ul>
                <li>
                  <span className="text-blue-200">belkin</span>
                  <ul>
                    <li>
                      <span className="text-blue-200">linksys</span>
                    </li>
                    <li>
                      <span className="text-blue-200">wemo</span>
                    </li>
                  </ul>
                </li>
                <li>fih mobile</li>
              </ul>
            </li>
            <li>
              <span className="text-blue-200">hmd glodal</span>
              <ul>
                <li>
                  <span className="text-blue-200">nokia</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="text-red-200">pico interactive</span> (beijing)
            </li>
            <li>
              <span className="text-blue-200">satechi</span> (san diego)
            </li>
            <li>
              <span className="text-blue-200">startech</span> (london, ontario)
            </li>
            <li>
              <span className="text-green-200">synology</span> (taiwan)
              <ul>
                <li>made in: nas, ram, ssd</li>
              </ul>
            </li>
            <li>
              <span className="text-blue-200">zagg</span>
              <ul>
                <li>braven</li>
                <li>gear4</li>
                <li>halo</li>
                <li>ifrogz</li>
                <li>invisible shield</li>
                <li>
                  <span className="text-blue-200">mophie</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
