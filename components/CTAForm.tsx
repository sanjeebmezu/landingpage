"use client";

import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    FlodeskObject?: string;
    fd?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const formId = "6aa0c15462e13cf23dbbd093";
const rootSelector = ".ff-6aa0c15462e13cf23dbbd093";
const thanksUrl = "https://consultation.mezustudio.com/thanks";
const redirectDelayMs = 1800;

const flodeskConfig =
  "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IllvdSBhcmUgYm9va2VkLiBSZWRpcmVjdGluZyBub3cuLi4iLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY29uc3VsdGF0aW9uLm1lenVzdHVkaW8uY29tL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=";

export function CTAForm() {
  useEffect(() => {
    window.FlodeskObject = "fd";
    const fdHandler =
      window.fd ||
      (((...args: unknown[]) => {
        fdHandler.q = fdHandler.q || [];
        fdHandler.q.push(args);
      }) as ((...args: unknown[]) => void) & { q?: unknown[] });

    window.fd = fdHandler;

    const version = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;
    loadFlodeskScript("flodesk-universal-module", `https://assets.flodesk.com/universal.mjs${version}`, true);
    loadFlodeskScript("flodesk-universal-nomodule", `https://assets.flodesk.com/universal.js${version}`, false);

    fdHandler("form:handle", {
      formId,
      rootEl: rootSelector
    });

    const root = document.querySelector(rootSelector);
    let redirectTimer: number | undefined;

    const observer = new MutationObserver(() => {
      if (root?.getAttribute("data-ff-stage") === "success" && !redirectTimer) {
        redirectTimer = window.setTimeout(() => {
          window.location.assign(thanksUrl);
        }, redirectDelayMs);
      }
    });

    if (root) {
      observer.observe(root, {
        attributes: true,
        attributeFilter: ["data-ff-stage", "class"]
      });
    }

    return () => {
      observer.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <section id="book-call" className="section-shell scroll-mt-8 pb-20 pt-6 sm:pb-28">
      <link rel="preload" href="https://assets.flodesk.com/flodesk-sans.css" as="style" />
      <link rel="stylesheet" href="https://assets.flodesk.com/flodesk-sans.css" />

      <div className="panel mx-auto grid max-w-6xl gap-8 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Book the call</p>
          <h2 className="mt-4 text-3xl font-black tracking-normal text-white sm:text-5xl">
            Get your customized AI marketing plan
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            One-to-One Consultation. Customized Strategy for Your Business.
          </p>
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-sm font-semibold text-slate-200">
            <ShieldCheck size={17} className="text-brand" />
            We respect your privacy. No spam.
          </div>
        </div>

        <div
          className="flodesk-dark-wrap"
          dangerouslySetInnerHTML={{
            __html: `
<div class="ff-6aa0c15462e13cf23dbbd093" data-ff-el="root" data-ff-version="3" data-ff-type="inline" data-ff-name="inlineNoImage" data-ff-stage="default">
  <!--tpl {% block config %} tpl-->
  <div data-ff-el="config" data-ff-config="${flodeskConfig}" style="display: none"></div>
  <!--tpl {% endblock %} tpl-->
  <div class="ff-6aa0c15462e13cf23dbbd093__container">
    <div class="ff-6aa0c15462e13cf23dbbd093__wrapper">
      <form class="ff-6aa0c15462e13cf23dbbd093__form" action="https://form.flodesk.com/forms/6aa0c15462e13cf23dbbd093/submit" method="post" data-ff-el="form">
        <div class="ff-6aa0c15462e13cf23dbbd093__title">
          <div style="min-height: 1em">
            <div></div>
          </div>
        </div>
        <div class="ff-6aa0c15462e13cf23dbbd093__subtitle">
          <div style="min-height: 1.6em">
            <div></div>
          </div>
        </div>
        <div class="ff-6aa0c15462e13cf23dbbd093__content fd-form-content" data-ff-el="content">
          <div class="ff-6aa0c15462e13cf23dbbd093__fields" data-ff-el="fields">
            <!--tpl {% block fields %} tpl-->

            <div class="ff-6aa0c15462e13cf23dbbd093__field fd-form-group">
              <input id="ff-6aa0c15462e13cf23dbbd093-firstName" class="ff-6aa0c15462e13cf23dbbd093__control fd-form-control" type="text" maxlength="255" name="firstName" placeholder="First name" data-ff-tab="firstName::email" required />
              <label for="ff-6aa0c15462e13cf23dbbd093-firstName" class="ff-6aa0c15462e13cf23dbbd093__label fd-form-label">
                <div>
                  <div>First name</div>
                </div>
              </label>
            </div>


            <div class="ff-6aa0c15462e13cf23dbbd093__field fd-form-group">
              <input id="ff-6aa0c15462e13cf23dbbd093-email" class="ff-6aa0c15462e13cf23dbbd093__control fd-form-control" type="text" maxlength="255" name="email" placeholder="Email address" data-ff-tab="email:firstName:fields.whatsappNumber" required />
              <label for="ff-6aa0c15462e13cf23dbbd093-email" class="ff-6aa0c15462e13cf23dbbd093__label fd-form-label">
                <div>
                  <div>Email address</div>
                </div>
              </label>
            </div>


            <div class="ff-6aa0c15462e13cf23dbbd093__field fd-form-group">
              <input id="ff-6aa0c15462e13cf23dbbd093-3I8qWM85kK" class="ff-6aa0c15462e13cf23dbbd093__control fd-form-control" type="text" maxlength="255" name="fields.whatsappNumber" placeholder="WhatsApp Number" data-ff-tab="fields.whatsappNumber:email:fields.businessName" required />
              <label for="ff-6aa0c15462e13cf23dbbd093-3I8qWM85kK" class="ff-6aa0c15462e13cf23dbbd093__label fd-form-label">
                <div>
                  <div>WhatsApp Number</div>
                </div>
              </label>
            </div>


            <div class="ff-6aa0c15462e13cf23dbbd093__field fd-form-group">
              <input id="ff-6aa0c15462e13cf23dbbd093-kH0aPf9FDU" class="ff-6aa0c15462e13cf23dbbd093__control fd-form-control" type="text" maxlength="255" name="fields.businessName" placeholder="Business Name" data-ff-tab="fields.businessName:fields.whatsappNumber:fields." required />
              <label for="ff-6aa0c15462e13cf23dbbd093-kH0aPf9FDU" class="ff-6aa0c15462e13cf23dbbd093__label fd-form-label">
                <div>
                  <div>Business Name</div>
                </div>
              </label>
            </div>


            <div class="ff-6aa0c15462e13cf23dbbd093__field fd-form-group">
              <input id="ff-6aa0c15462e13cf23dbbd093-zPnhnSXTIi" class="ff-6aa0c15462e13cf23dbbd093__control fd-form-control" type="text" maxlength="255" name="fields." placeholder="Website / Facebook Link" data-ff-tab="fields.:fields.businessName:submit" required />
              <label for="ff-6aa0c15462e13cf23dbbd093-zPnhnSXTIi" class="ff-6aa0c15462e13cf23dbbd093__label fd-form-label">
                <div>
                  <div>Website / Facebook Link</div>
                </div>
              </label>
            </div>

            <input type="text" maxlength="255" name="confirm_email_address" style="display: none" />
            <!--tpl {% endblock %} tpl-->
          </div>


          <div class="ff-6aa0c15462e13cf23dbbd093__footer" data-ff-el="footer">
            <button type="submit" class="ff-6aa0c15462e13cf23dbbd093__button fd-btn" data-ff-el="submit" data-ff-tab="submit">
              <div><span data-draw-element="editable">Book a call with me</span></div>
            </button>
          </div>

          <!--tpl {% if var.Config.Gdpr.PrivacyPolicy.Enabled and var.Config.Gdpr.AcceptsMarketing == false and var.Config.Gdpr.PrivacyPolicy.Mandatory == false %} tpl-->

          <!--tpl {% endif %} tpl-->

        </div>
        <div class="ff-6aa0c15462e13cf23dbbd093__success fd-form-success" data-ff-el="success">
          <div class="ff-6aa0c15462e13cf23dbbd093__success-message">
            <div>
              <div>
                <div data-paragraph="true">You’ve successfully signed up! Check your email for details.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="ff-6aa0c15462e13cf23dbbd093__error fd-form-error" data-ff-el="error"></div>
      </form>
    </div>
  </div>
</div>`
          }}
        />
      </div>
    </section>
  );
}

function loadFlodeskScript(id: string, src: string, isModule: boolean) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;

  if (isModule) {
    script.type = "module";
  } else {
    script.noModule = true;
  }

  document.head.appendChild(script);
}
