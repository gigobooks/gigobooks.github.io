---
title: Roadmap (October 2020)
---

Well, that took longer than expected. The previous [roadmap post]({% link _posts/2020-07-10-roadmap-july-2020.md %}) was three months ago and I thought I'd have a lot more done by now. Unfortunately, there were some unexpected delays and distractions and life just got in the way from time to time.

<!--break-->

But first, a rant.

Tax complicates things A LOT. Really. A LOT. Trying to come up with a system that could handle all sorts of different jurisdictions (with different reporting requirements) resulted in me (A) re-working a lot of things, and (B) discovering a lot of previously unknown sinkholes. A lot of unscheduled and unforeseen work randomly burned a week or two of time here and there.

Okay, rant over. So anyway ...

Fortunately, most of that is in the past now. There's still a lot of work to do tax-wise but most of the complicated/foundational stuff is, or should be, done.

Here's the status (with reference to the previous roadmap):

* Fundamental financial reports (profit and loss, balance sheet) are done.
* Printable PDF invoices are done.
* Tax/VAT/GST integration and reporting is partially done (more below).

## Tax/VAT/GST

I had to review the entire tax subsystem and re-work some parts of it substantially. It turns out that there is no one universal approach which would fulfil reporting requirements everywhere in the world. Instead, after ripping it all out and replacing with a flexible foundation, it was a case of customising for each region/country/jurisdiction one-at-a-time.

Here's the shortlist of tax jurisdictions for consideration (in the short-term):

* Australia (done)
* New Zealand (done)
* Canada
* Ireland
* Ireland MOSS (mini one stop shop)
* UK and other EU countries ??
* ??, US sales tax ??

Australia was supported first because I needed to use it. New Zealand was next because their GST was the simplest and it was a proof of concept to show that, yes, tax can be customised for each country.

Next up: Canada and Ireland (including MOSS). These were chosen because information on their GST/VAT was readily available, and they are important proof of concepts. Canada's an interesting case because there are multiple GST systems co-existing together (It also helps that I know an early prospective user who is in Canada). Ireland is representative of the EU. Once Ireland is supported, only minor modifications should be needed for other EU countries.

The UK ... is complicated because, apparently, they're going to change their VAT in 2021. I'm not going to prioritise it now if I need to change it again a month of two later. So, probably, once the UK decides what it wants to do, it'll appear on the list.

The US ... is also complicated. US state sales tax is like horrible spaghetti code: Each state or county (and even zipcode) has it's own variation, and the reporting documentation is just nuts. Since sales tax is only for retail sales, it may be the case that the majority of prospective users don't have to collect/report it anyway. So if I'm lucky ... Out of the box, it's already compliant for 90+% of users anyway. Well, hopefully.

Hence, for now, I don't have any plans to customise for US state sales tax anytime soon ... unless someone comes to me and asks. In which case, I could customise it for their specific locality if they assist me with information and testing.

This approach applies to other regions/countries as well. 

If your region/country is not mentioned (probable), just let me know. If you're able to assist me with information and testing, then there's a good chance I'll add support and customisation for it.

(For example, I'd like to support more EU countries but I'm having trouble finding VAT details for the non-english speaking EU countries.)

Basically, if there's something you need, just drop me a line.

## Strategy / Web Beta

Now, I wanna talk some strategy.

As it is, GigoBooks is usable (as long as you're in Australia or New Zealand or you don't have to collect GST/VAT/sales tax). I'm actually already using it *right now* for my own accounts and the quarterly reporting that I have to send to the government. However, I'm only a sample size of one, and it's entirely probable that once other people start using it, then they're going to discover (A) something that's needed-but-missing, or (B) some bugs.

I don't really feel right charging for software that hasn't been more thoroughly used and proven.

So, I thought of an idea.

Since GigoBooks is javascript/typescript/reactjs, I can re-target it to run on the web, and I can run a beta trial that way. This will allow me to see how well it works, to polish it up, and fix up any bugs before I launch a premium/desktop edition (and charge for it). Since the web beta is free, hopefully people won't get too upset if it's doesn't (yet) meet their expectations.

This is not to say that the web edition is a crippled version. Far from it, it will be fully functional and the feature set will, for the foreseeable future, be the same. For example, the files created by GigoBooks will be interchangeable between the desktop edition and the web edition. Anyone who creates a file with the web edition can use that same file with the desktop edition (and vice versa).

There's an interesting side-effect. If you really need to use GigoBooks before I've launched the desktop edition, go ahead and use the web edition first. You can switch to the desktop edition at a later time. Seamlessly.

## Roadmap

With that in mind, here's the roadmap for the next few months:

**'Soon'** (Oct/Nov 2020)

* Add some more tax jurisdictions (CA, IE, IE-MOSS, then? See above.)
* Launch a web beta
* Polish. Fix bugs.

**Later** (Nov/Dec 2020 and onwards?)

* Redo the website
* Marketing. Get the word out.
* More polish.
* (Hopefully?) Launch premium/desktop edition

Keep in mind that this roadmap might (probably will?) change. I'm excited to see what's on the other side!

Thanks for reading!
