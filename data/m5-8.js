window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Manage",
 "title": "System Administration",
 "subtitle": "Users, groups, directories, policy, backups and patching: keeping many systems consistent and safe",
 "outcomes": [
  "Manage users, groups and permissions using least privilege and joiner-mover-leaver processes",
  "Explain directory services, domains, OUs and cloud identity, and perform common account tasks",
  "Apply and troubleshoot group policy and configuration management",
  "Design, run and test backups against agreed RPO and RTO targets",
  "Run a ring-based patch process with emergency handling and rollback"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Users, Groups and Permissions",
   "subtitle": "Giving the right people the right access, and nothing more",
   "minutes": 28,
   "objectives": [
    "Create and manage local user accounts and groups on Windows and Linux",
    "Explain role-based access and why permissions are assigned to groups",
    "Combine share and file-system permissions correctly",
    "Run joiner, mover and leaver processes safely"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most security incidents and many support tickets come down to access: someone cannot open what they need, or someone can open what they should not. System administration starts with **identity**: every person has their own account, accounts belong to groups that match roles, and permissions are granted to groups, never to individuals one by one."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Standard user",
       "items": [
        "Everyday work: email, documents, apps",
        "Cannot install system software or change security settings",
        "The default for every employee"
       ]
      },
      {
       "title": "Administrator",
       "items": [
        "Full control of a device or system",
        "Separate admin account used only for admin tasks",
        "Never used for email or browsing"
       ]
      },
      {
       "title": "Service account",
       "items": [
        "Runs an application or scheduled task",
        "Long random password or managed credential",
        "No interactive sign-in; documented owner"
       ]
      }
     ],
     "title": "Account types"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "If ten accountants each get individual permissions on a folder, you will spend the year fixing exceptions. Create a group such as **GRP-Finance-RW**, give the group access and add or remove people from it. A new hire then needs one change, not ten.",
     "title": "Assign to groups, not to people"
    },
    {
     "type": "tree",
     "title": "Group-based access to a finance folder",
     "root": {
      "label": "\\\\fs01\\Finance",
      "text": "Permissions set on groups only",
      "children": [
       {
        "label": "GRP-Finance-RW",
        "text": "Modify",
        "children": [
         {
          "label": "Accountants",
          "text": "Added by role at joining"
         }
        ]
       },
       {
        "label": "GRP-Finance-RO",
        "text": "Read",
        "children": [
         {
          "label": "External auditor",
          "text": "Named account, expires in 3 weeks"
         }
        ]
       },
       {
        "label": "GRP-IT-Admins",
        "text": "Full control",
        "children": [
         {
          "label": "Admin accounts",
          "text": "Separate from daily accounts"
         }
        ]
       }
      ]
     },
     "caption": "Permissions are granted once, to groups; people join or leave groups as their role changes. A new accountant needs one change, and the auditor's access ends automatically with her account."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-LocalUser | Select-Object Name, Enabled, LastLogon",
      "$pw = Read-Host -AsSecureString 'Temporary password'",
      "New-LocalUser -Name 'kiosk01' -Password $pw -FullName 'Lobby kiosk' -Description 'Reception kiosk'",
      "Add-LocalGroupMember -Group 'Users' -Member 'kiosk01'",
      "Get-LocalGroupMember -Group 'Administrators'",
      "Disable-LocalUser -Name 'olduser'"
     ],
     "title": "Local users and groups on Windows",
     "note": "Read-Host -AsSecureString keeps the password out of the screen and command history. Review the Administrators group regularly: it should contain very few members."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "sudo useradd -m -s /bin/bash -c 'Nusrat Jahan' nusrat",
      "sudo passwd nusrat                 # set an initial password",
      "sudo groupadd finance",
      "sudo usermod -aG finance nusrat    # -a appends; without it other groups are removed",
      "id nusrat                          # show user and group membership",
      "sudo usermod -L olduser            # lock an account"
     ],
     "title": "Users and groups on Linux"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Share permissions",
       "items": [
        "Apply only when accessed over the network",
        "Simple: read, change, full control",
        "Common practice: give authenticated users broad share access, control detail with file-system permissions"
       ]
      },
      {
       "title": "File-system (NTFS) permissions",
       "items": [
        "Apply locally and over the network",
        "Detailed: read, write, modify, full control, special",
        "Inherited from parent folders unless inheritance is broken"
       ]
      },
      {
       "title": "Effective result",
       "items": [
        "When both apply, the most restrictive wins",
        "An explicit deny overrides allows",
        "Test with the 'effective access' view"
       ]
      }
     ],
     "title": "Share permissions and file-system permissions"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Over the network",
       "expr": "effective = most restrictive of (combined share permission, combined NTFS permission)",
       "meaning": "Share 'Change' plus NTFS 'Read' gives Read."
      },
      {
       "name": "Within one permission type",
       "expr": "combined = union of all allows from user and groups, minus any denies",
       "meaning": "Member of Sales-Read and Sales-Modify gets Modify unless a deny applies."
      }
     ],
     "title": "Working out effective access"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Joiner",
       "text": "HR request triggers account, groups, licences and device for the role."
      },
      {
       "label": "Mover",
       "text": "Add new role groups and remove old ones on the day of the move."
      },
      {
       "label": "Leaver",
       "text": "Disable sign-in at the agreed time, revoke sessions and MFA, recover devices."
      },
      {
       "label": "Retain",
       "text": "Hand mailbox and files to the manager per policy."
      },
      {
       "label": "Delete",
       "text": "Remove the account after the retention period."
      }
     ],
     "title": "Joiner, mover, leaver"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "People who move between teams often keep old access 'just in case'. After a few years they can see far more than any single role needs. Removing old groups when someone moves, and reviewing access every quarter, stops this creep.",
     "title": "Privilege creep"
    },
    {
     "type": "template",
     "title": "Access request record",
     "purpose": "Capture who asked for access, who approved it and when it should be reviewed.",
     "columns": [
      "User",
      "Resource",
      "Access level",
      "Group used",
      "Approved by",
      "Review date"
     ],
     "example": [
      [
       "T. Rahman",
       "\\\\fs01\\Finance",
       "Modify",
       "GRP-Finance-RW",
       "Head of Finance",
       "2026-09-30"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "An external auditor will work at a Dhaka bank's head office for three weeks and needs to read the Finance folder. The finance manager asks you to 'just give her the same access as me'.",
     "options": [
      {
       "text": "Create a named account with an expiry date and add it to a read-only finance group, with the manager's written approval",
       "feedback": "Correct. Least privilege, accountability through a named account and an automatic end date.",
       "best": true
      },
      {
       "text": "Copy the finance manager's account permissions to the auditor",
       "feedback": "The manager has write and many other rights; the auditor needs read-only access to one folder.",
       "best": false
      },
      {
       "text": "Share the finance manager's password with the auditor",
       "feedback": "Sharing passwords destroys accountability and breaks policy.",
       "best": false
      },
      {
       "text": "Give the auditor a domain admin account so nothing blocks her",
       "feedback": "Massive over-privilege for a read-only need.",
       "best": false
      }
     ],
     "title": "Access for a temporary auditor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "User account",
       "def": "An identity that lets one person sign in and be held accountable for actions on a system."
      },
      {
       "term": "Group",
       "def": "A collection of accounts that receives permissions as a unit, usually matching a role or team."
      },
      {
       "term": "Role-based access control",
       "def": "Granting permissions according to job roles, implemented through groups."
      },
      {
       "term": "Service account",
       "def": "A non-human account used by an application or service, with a documented owner and strong credentials."
      },
      {
       "term": "NTFS permissions",
       "def": "File-system permissions on Windows volumes that control read, write, modify and full control access."
      },
      {
       "term": "Effective permissions",
       "def": "The access a user actually has after combining all user, group, share and deny entries."
      },
      {
       "term": "Privilege creep",
       "def": "The gradual build-up of unnecessary access as people change roles without old access being removed."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Every person gets their own account; admins also get a separate admin account.",
      "Grant permissions to role groups, never to individuals one by one.",
      "Over the network, the most restrictive of share and NTFS permissions applies, and an explicit deny wins.",
      "Run joiner, mover and leaver steps on the day they happen to stop privilege creep.",
      "Temporary access gets a named account, approval and an expiry date."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A user has share permission 'Full control' and NTFS permission 'Read' on a folder. What can they do over the network?",
       "options": [
        "Full control",
        "Modify",
        "Nothing",
        "Read"
       ],
       "answer": 3,
       "explain": "Over the network, the most restrictive of share and NTFS permissions applies, so Read."
      },
      {
       "q": "Why should `usermod` be run with `-aG` when adding a Linux user to a group?",
       "options": [
        "-a makes the user an administrator of the group so they can add other members",
        "-a sets a password",
        "-a appends the group; without it existing supplementary groups are replaced",
        "-a locks the account"
       ],
       "answer": 2,
       "explain": "Without -a, the user's supplementary groups are replaced by the new list."
      },
      {
       "q": "A team of twelve needs access to a project folder. What is the best practice?",
       "options": [
        "Add each user to the folder's permissions individually so access is precise",
        "Give everyone full control",
        "Share one account among the team",
        "Create a group, grant it access and add the users to the group"
       ],
       "answer": 3,
       "explain": "Group-based access is easier to manage, audit and change."
      },
      {
       "q": "An employee leaves today at 17:00. When should their account be disabled?",
       "options": [
        "Next month",
        "At or immediately after 17:00 as agreed with HR",
        "When their manager remembers",
        "Never, in case they return or need to collect personal files later"
       ],
       "answer": 1,
       "explain": "Leaver accounts should be disabled at the agreed time to remove access promptly."
      },
      {
       "q": "What is privilege creep?",
       "options": [
        "Accumulation of unneeded access as people change roles",
        "A virus that elevates privileges",
        "Slow sign-in times",
        "Too many administrators logging in at once and slowing the domain controllers"
       ],
       "answer": 0,
       "explain": "Privilege creep is access building up over time without removal."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Directory Services and Identity",
   "subtitle": "Domains, organisational units, LDAP, Kerberos and cloud identity",
   "minutes": 30,
   "objectives": [
    "Explain what a directory service stores and why organisations use one",
    "Describe domains, domain controllers, organisational units and groups",
    "Compare on-premises directories, cloud identity and hybrid models",
    "Perform common account tasks: reset, unlock and find users"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once an organisation has more than a handful of people, managing accounts on each computer becomes impossible. A **directory service** keeps one central database of users, groups, computers and policies. People sign in anywhere with the same account, and IT can manage thousands of devices from one place. The most widely deployed example on-premises is Active Directory; cloud identity platforms now play the same role for SaaS apps."
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "Forest",
       "parts": [
        "Security boundary containing one or more domains"
       ]
      },
      {
       "label": "Domain",
       "parts": [
        "company.local",
        "Shared user database and policies"
       ]
      },
      {
       "label": "Organisational units (OUs)",
       "parts": [
        "Dhaka, Chattogram, Laptops, Servers",
        "Used to delegate admin and apply policy"
       ]
      },
      {
       "label": "Objects",
       "parts": [
        "Users, groups, computers, printers, service accounts"
       ]
      },
      {
       "label": "Domain controllers",
       "parts": [
        "Servers holding a replicated copy of the directory",
        "Answer sign-ins and LDAP queries"
       ]
      }
     ],
     "title": "A typical on-premises directory (top first)"
    },
    {
     "type": "table",
     "head": [
      "Name",
      "What it does",
      "Port"
     ],
     "rows": [
      [
       "LDAP",
       "Query and modify directory entries",
       "389 (636 for LDAPS)"
      ],
      [
       "Kerberos",
       "Ticket-based authentication for domain sign-in",
       "88"
      ],
      [
       "DNS",
       "Clients find domain controllers through DNS records",
       "53"
      ],
      [
       "SAML / OpenID Connect",
       "Single sign-on to web and SaaS apps",
       "443"
      ],
      [
       "SCIM",
       "Automatic provisioning of users into SaaS apps",
       "443"
      ]
     ],
     "title": "Directory protocols and services"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Domain-joined PCs locate domain controllers through DNS. If a PC uses a public DNS server instead of the internal one, sign-ins, policies and file shares fail in confusing ways. One of the first checks on a 'cannot log on to the domain' ticket is the PC's DNS setting.",
     "title": "DNS is the heartbeat of a domain"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "On-premises directory",
       "items": [
        "Domain controllers in the office or data centre",
        "Strong control of PCs and file servers",
        "Needs VPN or line of sight for some functions"
       ]
      },
      {
       "title": "Cloud identity",
       "items": [
        "Identity provider hosted as a service",
        "SSO, MFA and passkeys for SaaS apps",
        "Devices joined and managed over the internet"
       ]
      },
      {
       "title": "Hybrid",
       "items": [
        "On-premises accounts synchronised to the cloud",
        "One password for local and cloud resources",
        "Very common in 2026; many newer organisations start cloud-only"
       ]
      }
     ],
     "title": "Identity models"
    },
    {
     "type": "topology",
     "title": "Hybrid identity in one picture",
     "nodes": [
      {
       "id": "idp",
       "kind": "idp",
       "label": "Cloud identity",
       "sub": "SSO, MFA, conditional access",
       "x": 1,
       "y": 0
      },
      {
       "id": "saas",
       "kind": "cloud",
       "label": "SaaS apps",
       "sub": "mail, files, HR, CRM",
       "x": 4,
       "y": 0
      },
      {
       "id": "dc",
       "kind": "server",
       "label": "Domain controller",
       "sub": "on-premises directory",
       "x": 1,
       "y": 3
      },
      {
       "id": "pc",
       "kind": "host",
       "label": "Domain PC",
       "sub": "Kerberos sign-in",
       "x": 0,
       "y": 5
      },
      {
       "id": "lap",
       "kind": "laptop",
       "label": "Cloud laptop",
       "sub": "managed by MDM",
       "x": 3,
       "y": 5
      },
      {
       "id": "ph",
       "kind": "phone",
       "label": "Phone",
       "sub": "authenticator or passkey",
       "x": 5,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "dc",
       "b": "idp",
       "label": "directory sync"
      },
      {
       "a": "idp",
       "b": "saas",
       "label": "SSO + SCIM"
      },
      {
       "a": "pc",
       "b": "dc",
       "label": "Kerberos"
      },
      {
       "a": "lap",
       "b": "idp",
       "label": "sign-in"
      },
      {
       "a": "ph",
       "b": "idp",
       "label": "MFA",
       "style": "dashed"
      }
     ],
     "zones": [
      {
       "label": "Cloud",
       "x": 1,
       "y": 0,
       "w": 4,
       "h": 1,
       "tone": "accent"
      },
      {
       "label": "On-premises",
       "x": 0,
       "y": 3,
       "w": 2,
       "h": 3,
       "tone": "neutral"
      }
     ],
     "caption": "Accounts are created once on-premises and synchronised to the cloud identity provider, which signs users in to every SaaS app with SSO and MFA. A cloud-only organisation simply has no on-premises zone."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "# Requires the directory management tools (RSAT) and suitable delegated rights",
      "Get-ADUser -Identity sabbir -Properties LockedOut, LastLogonDate, PasswordExpired",
      "Unlock-ADAccount -Identity sabbir",
      "Set-ADAccountPassword -Identity sabbir -Reset -NewPassword (Read-Host -AsSecureString 'New password')",
      "Set-ADUser -Identity sabbir -ChangePasswordAtLogon $true",
      "Get-ADGroupMember -Identity 'GRP-Finance-RW' | Select-Object Name",
      "Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly"
     ],
     "title": "Common account tasks with the directory module"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Verify identity",
       "text": "Use the organisation's method: call-back to a known number, manager confirmation or identity questions from HR records. Never accept 'I am the CEO, hurry'."
      },
      {
       "title": "Check the account",
       "text": "Is it locked, expired or disabled? A lockout may point to a stale password on a phone."
      },
      {
       "title": "Reset",
       "text": "Set a temporary password through a secure channel and require change at next sign-in."
      },
      {
       "title": "Review MFA",
       "text": "If compromise is suspected, revoke sessions and re-register MFA."
      },
      {
       "title": "Record",
       "text": "Log who requested, how identity was verified and what was done."
      }
     ],
     "title": "Safe password reset procedure"
    },
    {
     "type": "sequence",
     "title": "Password reset with identity verification",
     "actors": [
      "Caller",
      "Service desk",
      "Directory"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "'Locked out, please reset my password'"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Look up account and registered phone"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Locked; phone number on file",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Calls back on the registered number",
       "note": "never the number the caller gives"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Passes verification (call-back + code)"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Unlock, temporary password, must change"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Temporary password via secure channel"
      },
      {
       "from": 0,
       "to": 2,
       "label": "Signs in, sets a new password"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Records how identity was verified"
      }
     ],
     "caption": "The desk, not the caller, decides how identity is proven, using contact details already on record. The temporary password works once, so IT never knows the user's real password."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When an account locks again minutes after an unlock, a device is usually trying an old password: a phone's mail app, a mapped drive with saved credentials or a scheduled task. Find and update the source rather than unlocking all day. Repeated lockouts from unknown locations may be an attack.",
     "title": "Repeated lockouts"
    },
    {
     "type": "case",
     "title": "Lockouts after a password change",
     "context": "A senior engineer at a power plant near Ashuganj changes his password on Monday. From Tuesday his account locks every 20 to 30 minutes. Directory logs show failed sign-ins coming from a hostname 'ENG-TAB-04', a shared engineering tablet, and from his phone's mail client.",
     "questions": [
      "What is causing the lockouts?",
      "What steps fix it without weakening security?",
      "What would you add to the knowledge base?"
     ],
     "answer": "**Cause:** the shared tablet and his phone still hold the old password and keep retrying it, each attempt counting as a failure until the lockout threshold is reached. **Fix:** unlock the account, update or remove the saved credentials on the phone mail app and the tablet (ideally stop using personal credentials on shared devices and use a service or kiosk account), then watch the logs for an hour. **Knowledge base:** an article 'Account keeps locking after a password change' listing common stale-credential sources (mobile mail, mapped drives, saved Wi-Fi, scheduled tasks, shared devices) and how to find the source in sign-in logs."
    },
    {
     "type": "scenario",
     "situation": "New PCs at a branch office in Rangpur cannot join the domain. The error says the domain controller cannot be contacted. Pinging the head-office domain controller by IP works. The PCs are using the internet provider's DNS servers.",
     "options": [
      {
       "text": "Add the domain controller's IP to each PC's hosts file",
       "feedback": "A fragile workaround that breaks with changes and misses other required records.",
       "best": false
      },
      {
       "text": "Point the branch DHCP scope's DNS option to the internal DNS servers and renew",
       "feedback": "Correct. Domain members need internal DNS to find domain controllers through service records.",
       "best": true
      },
      {
       "text": "Disable the Windows firewall on the domain controller",
       "feedback": "IP connectivity already works, and disabling the firewall creates risk.",
       "best": false
      },
      {
       "text": "Rebuild the domain controller",
       "feedback": "The controller is reachable and healthy; the clients' DNS is wrong.",
       "best": false
      }
     ],
     "title": "Domain sign-in fails at a branch"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Directory service",
       "def": "A central database of users, groups, computers and other objects used for authentication, authorisation and management."
      },
      {
       "term": "Domain controller",
       "def": "A server that holds a copy of the directory and authenticates domain sign-ins."
      },
      {
       "term": "Organisational unit (OU)",
       "def": "A container in a directory used to organise objects, delegate administration and apply policies."
      },
      {
       "term": "LDAP",
       "def": "Lightweight Directory Access Protocol: the standard protocol for querying and updating directory data."
      },
      {
       "term": "Kerberos",
       "def": "A ticket-based authentication protocol used for secure sign-in within domains."
      },
      {
       "term": "Single sign-on (SSO)",
       "def": "Signing in once to access many applications without re-entering credentials."
      },
      {
       "term": "Account lockout",
       "def": "A security control that disables sign-in temporarily after too many failed password attempts."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "A directory holds users, groups, computers and policy in one place; domain PCs find it through DNS.",
      "Hybrid identity syncs on-premises accounts to a cloud identity provider for SSO and MFA.",
      "Verify identity with details already on record before any reset or MFA change.",
      "Repeated lockouts usually mean a device still holds an old password.",
      "Record who asked, how identity was verified and what was changed."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which service do domain-joined PCs rely on to locate domain controllers?",
       "options": [
        "DHCP",
        "DNS",
        "SMTP",
        "NTP only"
       ],
       "answer": 1,
       "explain": "Service records in DNS point clients to domain controllers."
      },
      {
       "q": "What is the main purpose of an organisational unit?",
       "options": [
        "To store email",
        "To encrypt disks",
        "To organise objects for delegation and policy",
        "To replace security groups when granting access to folders and printers"
       ],
       "answer": 2,
       "explain": "OUs group objects for administration and policy; they are not security groups."
      },
      {
       "q": "A user's account locks repeatedly after a password change. What is the most likely cause?",
       "options": [
        "A failing hard drive that corrupts the stored password hash",
        "Expired licence",
        "Wrong time zone",
        "A device still using the old saved password"
       ],
       "answer": 3,
       "explain": "Stale saved credentials retry the old password and trigger lockout."
      },
      {
       "q": "Before resetting a caller's password, what must you do?",
       "options": [
        "Reset immediately to save time",
        "Email the new password to their manager so it can be passed on securely",
        "Disable MFA",
        "Verify the caller's identity using the approved method"
       ],
       "answer": 3,
       "explain": "Identity verification prevents social-engineering attacks."
      },
      {
       "q": "Which protocol is commonly used for single sign-on to SaaS apps?",
       "options": [
        "SMB",
        "DHCP",
        "SNMP",
        "SAML or OpenID Connect"
       ],
       "answer": 3,
       "explain": "SAML and OpenID Connect are standard web SSO protocols."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Group Policy and Configuration Management",
   "subtitle": "Setting rules once and applying them to thousands of devices",
   "minutes": 26,
   "objectives": [
    "Explain how group policy objects are linked, inherited and processed",
    "Troubleshoot policy application with gpupdate and gpresult",
    "Compare directory policy with cloud device management and Linux configuration tools",
    "Design a simple, testable policy structure"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Configuring 500 PCs by hand guarantees 500 slightly different PCs. **Group policy** and modern **configuration management** let you define settings once, such as password rules, mapped drives, screen locks, update schedules and software, and apply them automatically to the right users and devices. Consistency makes support easier and security stronger."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Local",
       "text": "Policy set on the PC itself."
      },
      {
       "label": "Site",
       "text": "Policies linked to the network site."
      },
      {
       "label": "Domain",
       "text": "Policies linked to the whole domain."
      },
      {
       "label": "OU",
       "text": "Policies linked to OUs, parent first then child."
      },
      {
       "label": "Result",
       "text": "Later policies win when settings conflict, so the closest OU usually wins."
      }
     ],
     "title": "Policy processing order on a domain-joined Windows PC"
    },
    {
     "type": "tree",
     "title": "Where policies are linked in a typical domain",
     "root": {
      "label": "company.local",
      "text": "GPO: password and lockout rules",
      "children": [
       {
        "label": "OU Dhaka",
        "text": "GPO: branch printers",
        "children": [
         {
          "label": "OU Laptops",
          "text": "GPO: disk encryption"
         },
         {
          "label": "OU Staff",
          "text": "GPO: drive maps, screen lock"
         }
        ]
       },
       {
        "label": "OU Chattogram",
        "text": "GPO: branch printers",
        "children": [
         {
          "label": "OU Laptops",
          "text": "GPO: disk encryption"
         }
        ]
       },
       {
        "label": "OU Servers",
        "text": "GPO: server baseline"
       }
      ]
     },
     "caption": "An object receives every policy linked on the path from the domain down to its own OU, and the closest link wins conflicts. Moving an object to another OU silently changes its policy set."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Computer configuration",
       "items": [
        "Applies at start-up to the device",
        "Firewall, update schedule, encryption, local admin rules",
        "Follows the computer object's OU"
       ]
      },
      {
       "title": "User configuration",
       "items": [
        "Applies at sign-in to the person",
        "Mapped drives, desktop restrictions, browser settings",
        "Follows the user object's OU"
       ]
      }
     ],
     "title": "Computer settings and user settings"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "An OU can **block inheritance** so higher-level policies do not apply, and a higher-level link can be **enforced** so it applies even through a block. Use both sparingly: they make troubleshooting much harder.",
     "title": "Enforced and blocked inheritance"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "gpupdate /force                                  # re-apply policies now",
      "gpresult /r                                      # summary of applied policies",
      "gpresult /h C:\\Temp\\gp-report.html               # detailed HTML report",
      "Get-WinEvent -LogName 'Microsoft-Windows-GroupPolicy/Operational' -MaxEvents 10"
     ],
     "title": "Checking which policies applied",
     "note": "Run gpresult as the affected user for user settings, and in an elevated session to see computer settings."
    },
    {
     "type": "keypoints",
     "items": [
      "The user or computer is in a different OU than you thought.",
      "Security filtering excludes the user or computer.",
      "A WMI or item-level filter evaluates to false.",
      "A later policy overrides the setting.",
      "The PC cannot reach a domain controller (often DNS or VPN).",
      "The setting needs a restart or sign-out to take effect."
     ],
     "title": "Common reasons a policy does not apply"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Cloud device management (MDM)",
       "items": [
        "Configuration profiles pushed over the internet",
        "Works for laptops that never visit the office",
        "Manages Windows, macOS, iOS and Android",
        "Compliance results can gate sign-in (conditional access)"
       ]
      },
      {
       "title": "Linux configuration tools",
       "items": [
        "Declarative tools describe the desired state",
        "Run on schedule and fix drift automatically",
        "Files stored in version control"
       ]
      },
      {
       "title": "Shared principles",
       "items": [
        "Define once, apply many",
        "Test on a pilot group first",
        "Document every policy's purpose and owner"
       ]
      }
     ],
     "title": "Configuration management beyond the domain"
    },
    {
     "type": "sequence",
     "title": "Conditional access: device health gates sign-in",
     "actors": [
      "Laptop",
      "Cloud MDM",
      "Identity provider",
      "SaaS app"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Reports: encrypted, patched, AV on"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Device marked compliant"
      },
      {
       "from": 0,
       "to": 3,
       "label": "Opens mail app"
      },
      {
       "from": 3,
       "to": 0,
       "label": "Redirect to sign-in",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Sign-in + MFA from this laptop"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Policy: user, MFA, device all OK"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Access token issued",
       "reply": true
      },
      {
       "from": 0,
       "to": 3,
       "label": "Access with token"
      }
     ],
     "caption": "The same password and MFA from an unmanaged or out-of-date device can be blocked or limited. When a user is 'blocked for no reason', check the device's compliance status first."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Define",
       "text": "Write the purpose, the setting, who it applies to and the owner."
      },
      {
       "title": "Build",
       "text": "Create a new policy object rather than editing a large existing one."
      },
      {
       "title": "Pilot",
       "text": "Link it to a pilot OU or group of IT and friendly users for a week."
      },
      {
       "title": "Communicate",
       "text": "Tell affected users what will change and when."
      },
      {
       "title": "Deploy",
       "text": "Link to production OUs in stages."
      },
      {
       "title": "Verify and document",
       "text": "Check with gpresult or compliance reports and record the change."
      }
     ],
     "title": "Rolling out a new policy safely"
    },
    {
     "type": "template",
     "title": "Policy register",
     "purpose": "Keep track of every policy, what it does and who owns it.",
     "columns": [
      "Policy name",
      "Purpose",
      "Linked to",
      "Key settings",
      "Owner",
      "Last reviewed"
     ],
     "example": [
      [
       "SEC-ScreenLock-10min",
       "Lock idle screens",
       "All Workstations OU",
       "Lock after 10 minutes, require password",
       "Security lead",
       "2026-02-15"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "The Procurement team at a Chattogram shipping company no longer gets its S: drive mapped at sign-in. Other teams' drives work. Yesterday, user accounts were moved into a new 'Procurement' OU during a clean-up.",
     "options": [
      {
       "text": "Map the drive manually on every PC",
       "feedback": "A workaround that will drift and does not fix the cause.",
       "best": false
      },
      {
       "text": "Restart the file server",
       "feedback": "Other teams' drives on the same server work.",
       "best": false
      },
      {
       "text": "Check that the drive-mapping policy is linked to the new OU, or that its targeting includes the moved users, then run gpupdate and test",
       "feedback": "Correct. The change that matches the timing is the OU move; the policy probably is not linked or filtered for the new location.",
       "best": true
      },
      {
       "text": "Give the team local administrator rights",
       "feedback": "Admin rights have nothing to do with drive mapping and add risk.",
       "best": false
      }
     ],
     "title": "Mapped drive missing for one team"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Group policy object (GPO)",
       "def": "A collection of settings linked to sites, domains or OUs to configure users and computers centrally."
      },
      {
       "term": "Inheritance",
       "def": "The way policies linked at higher levels apply to objects in lower containers unless blocked."
      },
      {
       "term": "Security filtering",
       "def": "Limiting a policy so it applies only to specified users, computers or groups."
      },
      {
       "term": "gpresult",
       "def": "A Windows command that reports which group policies have been applied to a user and computer."
      },
      {
       "term": "Configuration drift",
       "def": "Gradual divergence of systems from their intended configuration over time."
      },
      {
       "term": "Desired state",
       "def": "A declared target configuration that management tools enforce automatically."
      },
      {
       "term": "Pilot group",
       "def": "A small set of users or devices that receives a change first to catch problems before wide rollout."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Define settings once and apply them automatically: consistency makes support easier.",
      "On a domain, policies apply local, site, domain, then OU, and the closest OU usually wins.",
      "Use gpresult to see what actually applied, and check OU, filtering and DNS when it did not.",
      "Cloud MDM manages devices anywhere, and its compliance results can gate sign-in.",
      "Pilot every new policy, roll out in stages and record it in a policy register."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which command shows the policies applied to the current user and computer?",
       "options": [
        "ipconfig /all",
        "sfc /scannow",
        "gpresult /r",
        "netstat -an"
       ],
       "answer": 2,
       "explain": "gpresult reports applied policies."
      },
      {
       "q": "Two policies set conflicting screen-lock times: one at the domain and one on the user's OU. Which normally wins?",
       "options": [
        "The domain policy",
        "Whichever policy object was created first, because older policies win",
        "The OU policy, because it is processed later",
        "Neither applies"
       ],
       "answer": 2,
       "explain": "Later-processed policies win; OU links process after domain links."
      },
      {
       "q": "What is the safest way to deploy a new restrictive policy?",
       "options": [
        "Link it to the whole domain at once",
        "Apply it to administrators only",
        "Edit an existing large policy without testing so fewer objects need linking",
        "Pilot it on a small group, then roll out in stages"
       ],
       "answer": 3,
       "explain": "Piloting catches problems before they affect everyone."
      },
      {
       "q": "A laptop that rarely visits the office misses policy updates. What can help most?",
       "options": [
        "A longer DHCP lease",
        "Cloud-based device management that works over the internet",
        "Removing the laptop from the domain without any replacement management at all",
        "Disabling the firewall"
       ],
       "answer": 1,
       "explain": "MDM delivers configuration over the internet without needing the office network."
      },
      {
       "q": "What is configuration drift?",
       "options": [
        "Moving a server to a new rack or data centre without updating its documentation",
        "Slow network speed",
        "Systems gradually differing from the intended configuration",
        "A type of malware"
       ],
       "answer": 2,
       "explain": "Drift is divergence from the desired state over time."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Backup and Recovery",
   "subtitle": "If it is not tested, it is not a backup",
   "minutes": 30,
   "objectives": [
    "Apply the 3-2-1 rule and choose backup types and schedules",
    "Use RPO and RTO to agree recovery targets with the business",
    "Protect backups from ransomware with offline or immutable copies",
    "Run and document a test restore"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Hardware fails, people delete things, laptops are stolen and ransomware encrypts whole servers. Backups are the last line of defence. The goal is not to have backups but to be able to **restore** the right data, quickly enough, when it matters. Many organisations only discover their backups do not work on the day they need them."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "3",
       "title": "Three copies",
       "text": "The live data plus at least two backups."
      },
      {
       "label": "2",
       "title": "Two media types",
       "text": "For example disk on site and cloud or tape."
      },
      {
       "label": "1",
       "title": "One off site",
       "text": "A copy in another location or region to survive fire, flood or theft."
      },
      {
       "label": "+1",
       "title": "One offline or immutable",
       "text": "A copy ransomware cannot alter or delete."
      },
      {
       "label": "0",
       "title": "Zero errors",
       "text": "Backups verified and restores tested on a schedule."
      }
     ],
     "title": "The 3-2-1-1-0 rule"
    },
    {
     "type": "topology",
     "title": "3-2-1-1-0 in a small office",
     "nodes": [
      {
       "id": "cloud",
       "kind": "cloud",
       "label": "Cloud storage",
       "sub": "copy 3: off site, immutable",
       "x": 3,
       "y": 0
      },
      {
       "id": "fs",
       "kind": "server",
       "label": "File server",
       "sub": "copy 1: live data",
       "x": 1,
       "y": 2
      },
      {
       "id": "nas",
       "kind": "storage",
       "label": "NAS",
       "sub": "copy 2: on site, versioned",
       "x": 5,
       "y": 2
      },
      {
       "id": "log",
       "kind": "doc",
       "label": "Restore test log",
       "sub": "monthly tests, zero errors",
       "x": 1,
       "y": 4
      },
      {
       "id": "con",
       "kind": "monitor",
       "label": "Backup console",
       "sub": "alerts on any failure",
       "x": 5,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "fs",
       "b": "nas",
       "label": "nightly backup"
      },
      {
       "a": "nas",
       "b": "cloud",
       "label": "replicate, object lock",
       "style": "tunnel"
      },
      {
       "a": "log",
       "b": "fs",
       "label": "test restores",
       "style": "dashed"
      },
      {
       "a": "con",
       "b": "nas",
       "label": "job status"
      }
     ],
     "zones": [
      {
       "label": "Off site",
       "x": 2,
       "y": 0,
       "w": 3,
       "h": 1,
       "tone": "good"
      },
      {
       "label": "Office",
       "x": 0,
       "y": 2,
       "w": 7,
       "h": 3,
       "tone": "neutral"
      }
     ],
     "caption": "Copy 2 is fast to restore on site; copy 3 is off site and immutable, so ransomware on the office network cannot alter it. The restore test log is the zero: proof that restores really work."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "What it copies",
      "Backup speed",
      "Restore needs"
     ],
     "rows": [
      [
       "Full",
       "Everything selected",
       "Slowest, largest",
       "Just the full backup"
      ],
      [
       "Incremental",
       "Changes since the last backup of any type",
       "Fastest, smallest",
       "Last full plus every incremental since"
      ],
      [
       "Differential",
       "Changes since the last full",
       "Grows during the week",
       "Last full plus the latest differential"
      ],
      [
       "Snapshot",
       "Point-in-time state of a volume or VM",
       "Seconds",
       "Same system; not a backup on its own"
      ]
     ],
     "title": "Backup types"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "RPO",
       "expr": "RPO = maximum acceptable data loss, measured in time",
       "meaning": "An RPO of 4 hours means backups or replication must run at least every 4 hours."
      },
      {
       "name": "RTO",
       "expr": "RTO = maximum acceptable time to restore service",
       "meaning": "An RTO of 2 hours means the restore process, not just the copy, must finish within 2 hours."
      },
      {
       "name": "Retention storage (rough)",
       "expr": "storage = full size + (daily change x days retained)",
       "meaning": "A 500 GB server with 10 GB daily change kept 30 days needs about 500 + 300 = 800 GB before compression."
      }
     ],
     "title": "Recovery targets"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A hospital in Sylhet agreed an RPO of 15 minutes for its patient records system, because re-entering a morning of clinical notes is unacceptable. Its payroll system has an RPO of 24 hours. Different systems deserve different targets; agree them with the data owners, not alone in IT.",
     "title": "RPO in a hospital"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "# Mirror a folder to a backup share and log the result",
      "robocopy D:\\Shared \\\\nas01\\backup\\Shared /MIR /R:2 /W:5 /LOG:C:\\Logs\\backup.log",
      "# /MIR also deletes files in the destination that were deleted at the source:",
      "# use it only for a mirror, and keep versioned backups elsewhere"
     ],
     "title": "File-level backups from the command line"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "rsync -a --delete /srv/data/ backup@nas01:/backups/srv-data/",
      "tar -czf /backups/etc-$(date +%F).tar.gz /etc",
      "tar -tzf /backups/etc-2026-05-01.tar.gz | head   # list contents to verify",
      "# test restore into a scratch folder, never over live data",
      "mkdir -p /tmp/restore && tar -xzf /backups/etc-2026-05-01.tar.gz -C /tmp/restore"
     ],
     "title": "Linux backup with rsync and tar"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "File-sync services and RAID copy changes instantly, including deletions and encrypted files. They protect against a failed disk, not against mistakes or ransomware. You still need versioned backups with retention.",
     "title": "Sync is not backup"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Pick a sample",
       "text": "Choose a realistic item: a folder, a mailbox or a whole VM."
      },
      {
       "title": "Restore to a safe location",
       "text": "An isolated folder or test network, never over production."
      },
      {
       "title": "Time it",
       "text": "Measure how long it takes and compare with the RTO."
      },
      {
       "title": "Verify",
       "text": "Open files, check the database starts and ask the data owner to confirm."
      },
      {
       "title": "Record",
       "text": "Write the date, item, time taken, result and any issues."
      }
     ],
     "title": "Running a test restore"
    },
    {
     "type": "template",
     "title": "Backup and restore test log",
     "purpose": "Prove backups work and track restore times against agreed targets.",
     "columns": [
      "System",
      "Backup type and schedule",
      "RPO / RTO",
      "Last test date",
      "Restore time",
      "Result and notes"
     ],
     "example": [
      [
       "File server FS01",
       "Nightly incremental, weekly full, cloud copy",
       "24 h / 8 h",
       "2026-04-20",
       "1 h 40 min (300 GB)",
       "Pass; owner verified Finance folder"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "A garment buying house in Dhaka finds its file server encrypted by ransomware on Monday morning. Backups run nightly to a USB disk that is always connected to the server, plus a weekly cloud copy with 30-day versioning.",
     "options": [
      {
       "text": "Restore from the USB disk immediately",
       "feedback": "It was connected to the infected server and is likely encrypted too.",
       "best": false
      },
      {
       "text": "Pay the ransom to get files back quickly",
       "feedback": "Payment is not guaranteed to work, may be illegal and funds further attacks. Decisions belong to management and legal advisers.",
       "best": false
      },
      {
       "text": "Isolate the server, report the incident, then restore from the cloud versioned copy after confirming it predates the infection",
       "feedback": "Correct. Containment first, then restore from a copy the attacker could not reach, checking its date.",
       "best": true
      },
      {
       "text": "Wipe the server and start again without restoring",
       "feedback": "This loses the business's data when a clean backup exists.",
       "best": false
      }
     ],
     "title": "Ransomware in a small office"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "3-2-1 rule",
       "def": "A backup principle: three copies of data, on two types of media, with one copy off site; often extended to 3-2-1-1-0 with one offline or immutable copy and zero restore errors."
      },
      {
       "term": "Incremental backup",
       "def": "A backup of only the data changed since the previous backup of any type."
      },
      {
       "term": "Differential backup",
       "def": "A backup of all data changed since the last full backup."
      },
      {
       "term": "RPO",
       "def": "Recovery point objective: the maximum amount of data loss, measured in time, that is acceptable."
      },
      {
       "term": "RTO",
       "def": "Recovery time objective: the maximum acceptable time to restore a service after a failure."
      },
      {
       "term": "Immutable backup",
       "def": "A backup copy that cannot be changed or deleted until its retention period ends."
      },
      {
       "term": "Test restore",
       "def": "A planned recovery of backed-up data to prove backups work and measure restore time."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Backups exist to restore: agree RPO and RTO with data owners, system by system.",
      "Follow 3-2-1-1-0: three copies, two media, one off site, one immutable or offline, zero errors.",
      "Sync, RAID and snapshots are not backups on their own.",
      "A backup that anything on the infected network can write to can be encrypted too.",
      "Only a timed, verified test restore proves a backup works."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A system must lose no more than one hour of data. Which target is this?",
       "options": [
        "RPO of 1 hour",
        "RTO of 1 hour",
        "SLA of 1 hour",
        "Retention of 1 hour"
       ],
       "answer": 0,
       "explain": "Acceptable data loss is the recovery point objective."
      },
      {
       "q": "Which backup type needs the last full plus every backup since to restore?",
       "options": [
        "Differential",
        "Full",
        "Incremental",
        "Mirror"
       ],
       "answer": 2,
       "explain": "Incremental restores need the full and the whole chain of incrementals."
      },
      {
       "q": "Why is a continuously connected USB backup disk weak protection against ransomware?",
       "options": [
        "USB is too slow",
        "Ransomware can reach and encrypt it like any other drive",
        "USB disks cannot hold backups",
        "It breaks the 3-2-1 rule because a USB disk never counts as one of the three copies"
       ],
       "answer": 1,
       "explain": "Anything the infected system can write to can be encrypted."
      },
      {
       "q": "Which statement about RAID is correct?",
       "options": [
        "RAID protects against a disk failure but not deletion or ransomware",
        "RAID replaces backups",
        "RAID keeps 30 days of file versions, so deleted files can always be restored from it",
        "RAID stores data off site"
       ],
       "answer": 0,
       "explain": "RAID provides redundancy, not versioned, independent copies."
      },
      {
       "q": "What proves a backup will work?",
       "options": [
        "The backup job reports 'success' every night in the console for a whole month",
        "The disk has free space",
        "A successful, timed test restore verified by the data owner",
        "The backup is encrypted"
       ],
       "answer": 2,
       "explain": "Only a tested restore proves recoverability."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l5",
   "title": "Patch and Update Management",
   "subtitle": "Closing security holes quickly without breaking the business",
   "minutes": 26,
   "objectives": [
    "Describe a patch management cycle from inventory to reporting",
    "Use deployment rings, testing and maintenance windows",
    "Handle emergency patches and failed updates with rollback",
    "Check and install updates on Windows, Linux and macOS"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most successful attacks use vulnerabilities for which a patch already existed. Patching is not glamorous, but it is one of the most effective security controls a support team owns. The challenge is speed with safety: apply updates quickly, while making sure a bad update does not stop a hospital, a factory or a bank branch."
    },
    {
     "type": "cycle",
     "title": "The patch management cycle",
     "center": "Every month, and on demand",
     "items": [
      {
       "label": "Inventory",
       "text": "Know every device, OS, app and firmware version."
      },
      {
       "label": "Assess",
       "text": "Read advisories; rate severity and exposure."
      },
      {
       "label": "Test",
       "text": "Apply to a lab and a pilot ring."
      },
      {
       "label": "Deploy",
       "text": "Roll out in rings within maintenance windows."
      },
      {
       "label": "Verify",
       "text": "Confirm installation and service health."
      },
      {
       "label": "Report",
       "text": "Track compliance and exceptions."
      }
     ],
     "caption": "Reporting feeds the next inventory, so the loop never ends. Emergency patches run the same cycle in hours instead of weeks."
    },
    {
     "type": "table",
     "head": [
      "Ring",
      "Who",
      "When after release",
      "Purpose"
     ],
     "rows": [
      [
       "Ring 0",
       "IT test machines",
       "Day 0-1",
       "Catch obvious breakage"
      ],
      [
       "Ring 1 (pilot)",
       "IT staff and volunteers from each department",
       "Day 2-5",
       "Real-world testing on varied apps"
      ],
      [
       "Ring 2 (broad)",
       "Most users",
       "Day 6-14",
       "Main rollout"
      ],
      [
       "Ring 3 (critical)",
       "Sensitive systems: clinical, production lines, finance servers",
       "After broad success, in agreed windows",
       "Protect critical operations"
      ]
     ],
     "title": "Deployment rings"
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Devices updated during a ring rollout (illustrative)",
     "labels": [
      "Day 0",
      "Day 2",
      "Day 5",
      "Day 7",
      "Day 10",
      "Day 14"
     ],
     "series": [
      {
       "name": "Devices updated",
       "values": [
        2,
        10,
        15,
        55,
        85,
        97
       ]
      }
     ],
     "unit": "%",
     "yLabel": "% of devices",
     "caption": "Illustrative numbers. Coverage stays low while the test and pilot rings prove the update, then climbs steeply in the broad ring; the last few percent are critical systems and stragglers that need follow-up."
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Patch compliance",
       "expr": "compliance % = devices fully patched / devices in scope x 100",
       "meaning": "If 1,140 of 1,200 PCs are current, compliance is 95%."
      },
      {
       "name": "Mean time to patch",
       "expr": "MTTP = sum of (install date - release date) / number of patches",
       "meaning": "Track separately for critical patches; many organisations aim for days, not weeks."
      }
     ],
     "title": "Measuring patch performance"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When a vulnerability is being actively exploited, normal timelines shrink to hours or days. Follow the emergency change process: quick risk assessment, accelerated pilot, deployment to exposed systems first (internet-facing servers, VPN gateways) and close monitoring. Public catalogues of known exploited vulnerabilities help decide which patches jump the queue.",
     "title": "Emergency patches"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 10",
      "# List and install updates with the built-in Windows Update client (UI) or management tools",
      "# Check the last time updates were installed and any pending restart:",
      "Test-Path 'HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WindowsUpdate\\Auto Update\\RebootRequired'",
      "winget upgrade --all --silent          # third-party apps managed by winget"
     ],
     "title": "Updates on Windows",
     "note": "Third-party apps such as browsers, PDF readers and runtimes are frequent attack targets; patch them as seriously as the OS."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "sudo apt update && apt list --upgradable",
      "sudo apt upgrade",
      "sudo dnf check-update                     # RHEL family: list available updates",
      "sudo dnf upgrade --security               # install security updates only",
      "[ -f /var/run/reboot-required ] && cat /var/run/reboot-required   # Debian/Ubuntu",
      "# macOS: softwareupdate --list ; sudo softwareupdate --install --all --restart"
     ],
     "title": "Updates on Linux and macOS"
    },
    {
     "type": "keypoints",
     "items": [
      "**Firmware and BIOS/UEFI** on PCs, servers, switches and printers.",
      "**Network and security appliances**: firewalls and VPN gateways are prime targets.",
      "**Third-party apps**: browsers, document readers, runtimes, conferencing tools.",
      "**Mobile devices**: enforce minimum OS versions through MDM.",
      "**Unsupported systems**, such as Windows 10 PCs without ESU: isolate them and plan replacement."
     ],
     "title": "Do not forget"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Pause the rollout",
       "text": "Stop further rings from receiving the update."
      },
      {
       "title": "Confirm the link",
       "text": "Check that affected devices share the update and that unaffected ones do not."
      },
      {
       "title": "Roll back or mitigate",
       "text": "Uninstall the update on affected devices or apply the vendor's workaround."
      },
      {
       "title": "Communicate",
       "text": "Tell users and the change board what happened and the plan."
      },
      {
       "title": "Resume with a fix",
       "text": "Deploy the corrected update and record lessons learned."
      }
     ],
     "title": "When an update breaks something"
    },
    {
     "type": "case",
     "title": "Patching a factory floor",
     "context": "A textile factory in Narayanganj runs 40 production PCs that control dyeing machines with software certified only for a specific OS build. Production runs 24 hours a day, six days a week. The office has 150 standard PCs. Last month a critical vulnerability was exploited in the region, and the factory's office PCs were 60 days behind on updates.",
     "questions": [
      "How would you organise rings for the office and production PCs?",
      "How would you protect production PCs that cannot be patched quickly?",
      "What would you report to management each month?"
     ],
     "answer": "**Rings:** office PCs follow IT test, pilot and broad rings within 14 days, with critical patches within days. Production PCs form a separate ring patched only in the weekly shutdown window, after the machine vendor confirms compatibility. **Protection:** segment production PCs on their own network, block internet access, allow only required connections, use application allow-listing and strong endpoint protection, and disable USB storage. **Report:** compliance per ring, mean time to patch critical updates, exceptions with business owner sign-off, and any failed updates and rollbacks."
    },
    {
     "type": "scenario",
     "situation": "On Wednesday, Ring 1 pilot users in a telecom company's billing team report that the billing app crashes after this month's OS update. Ring 2 (all staff) is scheduled for Thursday.",
     "options": [
      {
       "text": "Continue to Ring 2 because security patches must not wait",
       "feedback": "Pushing a known-breaking update to everyone would stop billing company-wide.",
       "best": false
      },
      {
       "text": "Pause the update for the billing team's devices, roll back on affected pilots, alert the vendor and continue for unaffected groups with monitoring",
       "feedback": "Correct. You contain the impact, keep security moving where it is safe and work on a fix.",
       "best": true
      },
      {
       "text": "Cancel all patching for the month",
       "feedback": "Leaves every device exposed to the vulnerabilities the update fixes.",
       "best": false
      },
      {
       "text": "Tell billing users to stop using the app",
       "feedback": "Unacceptable business impact and no plan to fix.",
       "best": false
      }
     ],
     "title": "A patch breaks the billing app"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Patch",
       "def": "An update that fixes security vulnerabilities, bugs or adds improvements to software or firmware."
      },
      {
       "term": "Security advisory",
       "def": "A vendor notice describing a vulnerability, the affected versions, its severity and the fix or workaround."
      },
      {
       "term": "Deployment ring",
       "def": "A group of devices that receives updates at a defined stage of a phased rollout."
      },
      {
       "term": "Maintenance window",
       "def": "An agreed time when changes such as updates and restarts may be made with minimal business impact."
      },
      {
       "term": "Patch compliance",
       "def": "The percentage of devices in scope that have all required updates installed."
      },
      {
       "term": "Emergency change",
       "def": "A change, such as an urgent patch, that must be implemented faster than the normal process allows."
      },
      {
       "term": "Firmware update",
       "def": "An update to the low-level software stored on hardware such as motherboards, SSDs, printers and network devices."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Patching is one of the most effective controls a support team owns.",
      "Know your inventory, then test, pilot and deploy in rings.",
      "Actively exploited flaws on internet-facing systems go through the emergency process within days.",
      "Patch firmware, appliances and third-party apps, not only the OS.",
      "When an update breaks something, pause the rollout, roll back the affected devices and communicate."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which group should receive a new monthly update first?",
       "options": [
        "Critical production servers",
        "IT test machines and a pilot ring",
        "All users at once",
        "Executives"
       ],
       "answer": 1,
       "explain": "Testing on IT and pilot rings catches problems before wide rollout."
      },
      {
       "q": "1,800 of 2,000 devices are fully patched. What is patch compliance?",
       "options": [
        "90%",
        "80%",
        "95%",
        "18%"
       ],
       "answer": 0,
       "explain": "1,800 / 2,000 x 100 = 90%."
      },
      {
       "q": "Which Linux command on the RHEL family installs only security updates?",
       "options": [
        "sudo apt upgrade",
        "sudo systemctl upgrade",
        "sudo dnf upgrade --security",
        "sudo yum remove"
       ],
       "answer": 2,
       "explain": "dnf supports a security filter. apt is for Debian and the others are wrong."
      },
      {
       "q": "A legacy PC cannot be patched because its machine software would break. What is the best mitigation?",
       "options": [
        "Isolate it on a segmented network and plan its replacement",
        "Connect it directly to the internet so the vendor can support it remotely",
        "Disable its antivirus",
        "Give all users admin rights on it"
       ],
       "answer": 0,
       "explain": "Segmentation and controls reduce exposure while replacement is planned."
      },
      {
       "q": "What should happen first when an update breaks an important app in the pilot ring?",
       "options": [
        "Push it to everyone anyway",
        "Delete the app",
        "Reimage the pilot PCs and continue the rollout to the next ring as planned",
        "Pause further rollout of that update"
       ],
       "answer": 3,
       "explain": "Pausing prevents wider impact while you investigate."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Host",
 "title": "IT Infrastructure Services and Cloud",
 "subtitle": "Servers, virtualisation, storage, cloud and SaaS administration, monitoring and remote access",
 "outcomes": [
  "Explain and check core infrastructure services such as file, print, DNS, DHCP, time and email",
  "Use virtualisation, RAID and shared storage appropriately",
  "Apply cloud service and deployment models with the shared responsibility model and cost awareness",
  "Administer users, licences, mail flow and sharing in a cloud productivity suite",
  "Monitor services, calculate availability and provide secure remote access"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Core Infrastructure Services",
   "subtitle": "The servers and services every organisation quietly depends on",
   "minutes": 26,
   "objectives": [
    "Identify common server roles and what users experience when each fails",
    "Explain how file, print, DNS, DHCP, time and email services fit together",
    "Describe server hardware features and good server-room practice",
    "Check service health on Windows and Linux servers"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Behind every working desk is a set of shared services: file shares, printers, name resolution, addressing, time, email and remote access. Support specialists may not build all of these, but they are expected to know what each does, recognise when one has failed and gather the right evidence before escalating to the infrastructure team."
    },
    {
     "type": "table",
     "head": [
      "Service",
      "What it provides",
      "What users notice when it fails"
     ],
     "rows": [
      [
       "File server / NAS",
       "Shared folders with permissions",
       "'S: drive missing', 'access denied'"
      ],
      [
       "Print server",
       "Central queues and drivers",
       "Nobody can print to shared printers"
      ],
      [
       "DNS",
       "Name resolution",
       "Everything 'down' though IP works"
      ],
      [
       "DHCP",
       "Automatic addressing",
       "New devices get 169.254 addresses"
      ],
      [
       "Directory / identity",
       "Sign-in and policy",
       "Cannot log on, policies not applied"
      ],
      [
       "NTP (time)",
       "Synchronised clocks",
       "Sign-in failures, certificate errors, wrong log timestamps"
      ],
      [
       "Email / messaging",
       "Mail flow and calendars",
       "Messages stuck in outbox or bounced"
      ]
     ],
     "title": "Server roles and failure symptoms"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Ticket-based sign-in protocols reject requests when clocks differ by more than a few minutes, and certificates appear 'not yet valid'. If several PCs suddenly cannot sign in, check that their clocks and the domain's time source are correct.",
     "title": "Time matters more than you think"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Server features",
       "items": [
        "Redundant power supplies and fans",
        "ECC memory",
        "Hot-swap drives in RAID",
        "Out-of-band management (remote console even when the OS is down)",
        "Rack mounting and higher duty cycles"
       ]
      },
      {
       "title": "Desktop features",
       "items": [
        "Single PSU",
        "Consumer components",
        "Designed for 8-10 hours a day",
        "No remote management controller"
       ]
      }
     ],
     "title": "Server versus desktop hardware"
    },
    {
     "type": "keypoints",
     "items": [
      "Locked room with access logging; no storage of boxes or cleaning supplies.",
      "Cooling sized for the heat load, with temperature monitoring and alerts.",
      "UPS for clean shutdown and, where possible, a generator for longer outages.",
      "Labelled cables and patch panels; a current rack diagram.",
      "Fire detection and suitable suppression; no water pipes overhead if avoidable.",
      "Environmental monitoring for heat, humidity and water leaks."
     ],
     "title": "Server room essentials"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-Service -Name DNS, DHCPServer, Spooler, LanmanServer | Select-Object Name, Status",
      "Get-SmbShare | Select-Object Name, Path, Description",
      "Get-SmbSession | Select-Object ClientComputerName, ClientUserName, NumOpens",
      "w32tm /query /status                    # time source and last sync",
      "Get-Printer | Where-Object PrinterStatus -ne 'Normal'"
     ],
     "title": "Checking services on a Windows server"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "systemctl --failed                     # any failed units?",
      "systemctl status smbd nginx",
      "timedatectl                            # clock and NTP sync status",
      "ss -tlnp | grep -E ':53|:445|:443'",
      "df -h /srv && free -h"
     ],
     "title": "Checking services on a Linux server"
    },
    {
     "type": "sequence",
     "title": "What happens when a user opens a shared file",
     "actors": [
      "User PC",
      "DNS",
      "Domain controller",
      "File server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "fs01.company.local?"
      },
      {
       "from": 1,
       "to": 0,
       "label": "10.0.5.20",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Kerberos: ticket for fs01, please"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Service ticket",
       "reply": true,
       "note": "only if clocks agree within minutes"
      },
      {
       "from": 0,
       "to": 3,
       "label": "SMB connect, TCP 445 + ticket"
      },
      {
       "from": 3,
       "to": 3,
       "label": "Check share and NTFS permissions"
      },
      {
       "from": 3,
       "to": 0,
       "label": "File opened and locked for editing",
       "reply": true
      }
     ],
     "caption": "Four services take part before the file appears, so 'the S: drive is broken' could be DNS, time, the directory or permissions. Test them in this order."
    },
    {
     "type": "scenario",
     "situation": "At 08:30 every user on the second floor of a Dhaka insurance office reports they cannot print. Users on other floors print normally to their own printers through the same print server. The second-floor printer's display shows 'Ready'.",
     "options": [
      {
       "text": "Check the second-floor printer's queue on the server for a stuck job and its network connectivity",
       "feedback": "Correct. The scope points to that printer's queue or connection, not to the whole server.",
       "best": true
      },
      {
       "text": "Restart the print server immediately",
       "feedback": "Other floors print through the same server, so a restart disrupts everyone and is probably unnecessary.",
       "best": false
      },
      {
       "text": "Reinstall the printer driver on every PC on the floor",
       "feedback": "A time-consuming change that does not match the evidence.",
       "best": false
      },
      {
       "text": "Replace the printer's toner",
       "feedback": "The printer is 'Ready'; toner would produce a specific error or poor prints.",
       "best": false
      }
     ],
     "title": "Nobody can print on the second floor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "File server",
       "def": "A server that stores shared files and controls access through share and file-system permissions."
      },
      {
       "term": "Print server",
       "def": "A server that hosts shared print queues and drivers for network printers."
      },
      {
       "term": "NTP",
       "def": "Network Time Protocol: keeps device clocks synchronised with a reliable time source."
      },
      {
       "term": "SMB",
       "def": "Server Message Block: the protocol used for Windows file and printer sharing, on TCP port 445."
      },
      {
       "term": "Out-of-band management",
       "def": "A dedicated controller that lets administrators manage a server remotely even when its OS is not running."
      },
      {
       "term": "Hot-swap",
       "def": "Replacing a component, such as a drive or PSU, while the system keeps running."
      },
      {
       "term": "Server room",
       "def": "A secured, cooled and powered space that houses servers and network equipment."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Know what each shared service does and how its failure looks to users.",
      "Clock drift breaks Kerberos sign-in and certificates: check time sync early.",
      "Servers add redundancy (PSUs, ECC, RAID) and out-of-band management.",
      "Use scope to choose between one queue, one server or a shared service.",
      "Gather service status and logs before escalating to the infrastructure team."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Several PCs suddenly fail to sign in and show certificate 'not yet valid' warnings. What should you check?",
       "options": [
        "Printer queues",
        "Monitor cables",
        "Clock and time synchronisation",
        "Toner levels"
       ],
       "answer": 2,
       "explain": "Wrong clocks break ticket-based authentication and certificate validity."
      },
      {
       "q": "Which port does SMB file sharing use?",
       "options": [
        "UDP 53",
        "TCP 445",
        "TCP 3389",
        "TCP 25"
       ],
       "answer": 1,
       "explain": "SMB uses TCP 445."
      },
      {
       "q": "Which server feature allows a technician to see the console of a crashed server remotely?",
       "options": [
        "Out-of-band management",
        "ECC memory",
        "Hot-swap fans",
        "RAID"
       ],
       "answer": 0,
       "explain": "The management controller works independently of the OS."
      },
      {
       "q": "A whole office cannot reach anything by name, but IP addresses work. Which service is most likely down?",
       "options": [
        "DHCP",
        "Print",
        "NTP",
        "DNS"
       ],
       "answer": 3,
       "explain": "Name resolution failure with working IP connectivity points to DNS."
      },
      {
       "q": "Which Linux command lists failed services?",
       "options": [
        "systemctl --failed",
        "timedatectl",
        "df -h",
        "ss -tlnp"
       ],
       "answer": 0,
       "explain": "systemctl --failed lists failed units."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Virtualisation and Storage",
   "subtitle": "Hypervisors, virtual machines, containers, RAID and shared storage",
   "minutes": 28,
   "objectives": [
    "Compare type 1 and type 2 hypervisors, VMs and containers",
    "Choose a RAID level and calculate usable capacity",
    "Compare direct-attached, NAS and SAN storage",
    "Use snapshots safely"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Few organisations run one service per physical server any more. **Virtualisation** runs many isolated virtual machines on one host, cutting hardware, power and space, and making backup and recovery faster. Storage has evolved too: RAID protects against disk failure and shared storage lets VMs move between hosts."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Type 1 (bare metal)",
       "items": [
        "Installs directly on server hardware",
        "Used in data centres and server rooms",
        "High performance and isolation"
       ]
      },
      {
       "title": "Type 2 (hosted)",
       "items": [
        "Runs as an app on Windows, Linux or macOS",
        "Ideal for labs, testing and training",
        "Shares resources with the host OS"
       ]
      }
     ],
     "title": "Hypervisor types"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Virtual machine",
       "items": [
        "Full OS with its own kernel",
        "Strong isolation",
        "Gigabytes in size; boots in minutes"
       ]
      },
      {
       "title": "Container",
       "items": [
        "Shares the host kernel; packages an app and its libraries",
        "Lightweight, starts in seconds",
        "Common for web apps and microservices"
       ]
      }
     ],
     "title": "Virtual machines and containers"
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Minimum disks",
      "Survives",
      "Usable capacity",
      "Typical use"
     ],
     "rows": [
      [
       "RAID 0",
       "2",
       "No disk failure",
       "All disks",
       "Scratch space only; never for important data"
      ],
      [
       "RAID 1",
       "2",
       "1 disk failure",
       "One disk's worth",
       "Boot drives, small servers"
      ],
      [
       "RAID 5",
       "3",
       "1 disk failure",
       "(n - 1) disks",
       "File servers with smaller disks"
      ],
      [
       "RAID 6",
       "4",
       "2 disk failures",
       "(n - 2) disks",
       "Large-disk arrays, archives"
      ],
      [
       "RAID 10",
       "4",
       "1 per mirror pair",
       "Half of all disks",
       "Databases, VMs needing speed"
      ]
     ],
     "title": "RAID levels"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "RAID 5",
       "expr": "usable = (n - 1) x disk size",
       "meaning": "Four 4 TB disks give 3 x 4 = 12 TB usable."
      },
      {
       "name": "RAID 6",
       "expr": "usable = (n - 2) x disk size",
       "meaning": "Six 8 TB disks give 4 x 8 = 32 TB usable."
      },
      {
       "name": "RAID 10",
       "expr": "usable = (n / 2) x disk size",
       "meaning": "Eight 2 TB disks give 4 x 2 = 8 TB usable."
      }
     ],
     "title": "RAID capacity"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Usable capacity from six 8 TB disks",
     "labels": [
      "RAID 0",
      "RAID 5",
      "RAID 6",
      "RAID 10"
     ],
     "series": [
      {
       "name": "Usable",
       "values": [
        48,
        40,
        32,
        24
       ]
      }
     ],
     "unit": " TB",
     "yLabel": "TB usable",
     "caption": "Exact usable capacity before formatting. Protection costs capacity: RAID 6 gives up two disks to survive two failures, and RAID 10 gives up half for speed."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "When a disk fails, the array rebuilds onto a replacement by reading every other disk. With large disks this can take a day or more, and a second failure during a RAID 5 rebuild loses the array. Replace failed disks promptly and keep backups current.",
     "title": "RAID rebuilds are risky"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Direct-attached (DAS)",
       "items": [
        "Disks inside or cabled to one server",
        "Simple and fast",
        "Not shared between hosts"
       ]
      },
      {
       "title": "NAS",
       "items": [
        "File-level storage over the network (SMB, NFS)",
        "Easy shared folders and backups",
        "Common in small offices"
       ]
      },
      {
       "title": "SAN",
       "items": [
        "Block-level storage over a dedicated network",
        "Shared by hypervisor clusters",
        "Higher cost and complexity"
       ]
      }
     ],
     "title": "Storage options"
    },
    {
     "type": "topology",
     "title": "Two virtualisation hosts sharing storage",
     "nodes": [
      {
       "id": "sw",
       "kind": "switch",
       "label": "Core switch",
       "sub": "VM and user traffic",
       "x": 3,
       "y": 0
      },
      {
       "id": "ha",
       "kind": "server",
       "label": "Host A",
       "sub": "hypervisor: APP01, WEB01",
       "x": 1,
       "y": 2
      },
      {
       "id": "hb",
       "kind": "server",
       "label": "Host B",
       "sub": "hypervisor: DB01, FS01",
       "x": 5,
       "y": 2
      },
      {
       "id": "st",
       "kind": "storage",
       "label": "Shared storage",
       "sub": "NAS or SAN, RAID 6",
       "x": 3,
       "y": 4
      },
      {
       "id": "bk",
       "kind": "storage",
       "label": "Backup target",
       "sub": "separate device",
       "x": 6,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "sw",
       "b": "ha",
       "label": "10 GbE"
      },
      {
       "a": "sw",
       "b": "hb",
       "label": "10 GbE"
      },
      {
       "a": "ha",
       "b": "hb",
       "label": "live migration",
       "style": "dashed"
      },
      {
       "a": "ha",
       "b": "st",
       "label": "iSCSI / NFS"
      },
      {
       "a": "hb",
       "b": "st",
       "label": "iSCSI / NFS"
      },
      {
       "a": "st",
       "b": "bk",
       "label": "nightly copy",
       "style": "dashed"
      }
     ],
     "caption": "Because both hosts see the same storage, a VM can move to the other host for maintenance or restart there after a host failure. The shared array then becomes a single point of failure, so it needs RAID, monitoring and a separate backup."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-VM | Select-Object Name, State, CPUUsage, MemoryAssigned, Uptime",
      "Checkpoint-VM -Name 'APP01' -SnapshotName 'Before-update-2026-05-10'",
      "Get-VMSnapshot -VMName 'APP01'",
      "# After a successful update and a few days of monitoring, remove the snapshot:",
      "Remove-VMSnapshot -VMName 'APP01' -Name 'Before-update-2026-05-10'"
     ],
     "title": "Inspecting virtual machines on a Windows hypervisor host",
     "note": "Other hypervisors offer equivalent commands; the principles are the same everywhere."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Take a snapshot before a risky change, verify the change and delete the snapshot within days. Long-lived snapshots grow, slow the VM and are not backups: if the underlying storage fails, they go with it.",
     "title": "Snapshots are short-term undo buttons"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "docker ps                           # running containers",
      "docker logs --tail 50 web01         # recent logs from one container",
      "docker restart web01",
      "# Podman and other runtimes use very similar commands"
     ],
     "title": "Containers at a glance"
    },
    {
     "type": "scenario",
     "situation": "A university department in Rajshahi buys a file server with six 8 TB disks for research data. Data must survive disk failures during long rebuilds, and capacity matters more than raw speed.",
     "options": [
      {
       "text": "RAID 0 for maximum capacity",
       "feedback": "Any single disk failure loses all data.",
       "best": false
      },
      {
       "text": "RAID 1 using only two of the disks",
       "feedback": "Wastes four disks and offers only 8 TB.",
       "best": false
      },
      {
       "text": "No RAID, because backups exist",
       "feedback": "A single disk failure would cause downtime and a lengthy restore.",
       "best": false
      },
      {
       "text": "RAID 6, giving 32 TB usable and surviving two disk failures, plus separate backups",
       "feedback": "Correct. With large disks and long rebuilds, double-parity protection is the safer choice, and backups remain essential.",
       "best": true
      }
     ],
     "title": "Choosing RAID for a new file server"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Hypervisor",
       "def": "Software that creates and runs virtual machines by sharing physical hardware between them."
      },
      {
       "term": "Type 1 hypervisor",
       "def": "A hypervisor installed directly on hardware, used for production servers."
      },
      {
       "term": "Container",
       "def": "A lightweight package of an application and its dependencies that shares the host operating system kernel."
      },
      {
       "term": "RAID",
       "def": "Redundant array of independent disks: combining disks for redundancy, performance or both."
      },
      {
       "term": "NAS",
       "def": "Network-attached storage: a device that provides file-level storage over the network."
      },
      {
       "term": "SAN",
       "def": "Storage area network: a dedicated network that provides block-level storage to servers."
      },
      {
       "term": "Checkpoint (VM snapshot)",
       "def": "A saved point-in-time state of a VM that can be reverted to quickly, intended for short-term use."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Type 1 hypervisors run production servers; type 2 suit labs and testing.",
      "Containers share the host kernel and start in seconds; VMs bring their own OS.",
      "Choose RAID by what must survive: RAID 6 for large disks, RAID 10 for speed, never RAID 0 for data.",
      "Shared storage lets VMs move between hosts but must itself be protected and backed up.",
      "Snapshots are short-term undo buttons, not backups."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "How much usable space do five 4 TB disks provide in RAID 5?",
       "options": [
        "20 TB",
        "12 TB",
        "16 TB",
        "10 TB"
       ],
       "answer": 2,
       "explain": "(5 - 1) x 4 = 16 TB."
      },
      {
       "q": "Which RAID level offers no redundancy?",
       "options": [
        "RAID 1",
        "RAID 5",
        "RAID 0",
        "RAID 6"
       ],
       "answer": 2,
       "explain": "RAID 0 stripes without parity or mirroring."
      },
      {
       "q": "Which statement about VM snapshots is correct?",
       "options": [
        "They replace backups",
        "They are short-term rollback points to remove after use",
        "They make VMs faster over time",
        "They protect against storage failure because they are stored as separate files"
       ],
       "answer": 1,
       "explain": "Snapshots are for short-term rollback, not backup."
      },
      {
       "q": "A trainer needs to run three test OS installs on her laptop. Which option suits best?",
       "options": [
        "A SAN",
        "RAID 10",
        "A type 2 hypervisor",
        "A print server"
       ],
       "answer": 2,
       "explain": "A hosted hypervisor runs test VMs on a laptop."
      },
      {
       "q": "What is the main difference between a container and a VM?",
       "options": [
        "Containers include a full OS kernel, so each one needs its own licence",
        "VMs cannot be backed up",
        "Containers share the host kernel and are lighter",
        "Containers only run on Windows"
       ],
       "answer": 2,
       "explain": "Containers share the host kernel; VMs run their own."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Cloud Computing Fundamentals",
   "subtitle": "Service models, deployment models, shared responsibility and cost",
   "minutes": 28,
   "objectives": [
    "Compare IaaS, PaaS and SaaS and give examples of each",
    "Explain public, private and hybrid cloud",
    "Apply the shared responsibility model to support tasks",
    "Estimate and control basic cloud costs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Cloud computing means renting computing resources over the internet on demand instead of buying and running everything yourself. For support specialists, cloud changes the job: fewer server rooms, more consoles, identities, permissions and bills. Knowing what the provider looks after, and what you still own, is essential."
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "SaaS",
       "parts": [
        "Complete application: email, office suite, CRM, HR system",
        "You manage users, data and settings"
       ]
      },
      {
       "label": "PaaS",
       "parts": [
        "Platform to run your code: managed databases, app hosting",
        "You manage the app and data"
       ]
      },
      {
       "label": "IaaS",
       "parts": [
        "Virtual machines, networks and storage",
        "You manage the OS, patches, apps and data"
       ]
      },
      {
       "label": "On-premises",
       "parts": [
        "Your own building, hardware and everything above it",
        "You manage it all"
       ]
      }
     ],
     "title": "Service models (top: you manage least)"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Public cloud",
       "items": [
        "Shared provider infrastructure",
        "Pay as you go, global regions",
        "Fast to start"
       ]
      },
      {
       "title": "Private cloud",
       "items": [
        "Dedicated to one organisation",
        "More control and customisation",
        "Higher cost and skills needed"
       ]
      },
      {
       "title": "Hybrid / multi-cloud",
       "items": [
        "Mix of on-premises and one or more clouds",
        "Common in banks, hospitals, government",
        "Needs consistent identity and security"
       ]
      }
     ],
     "title": "Deployment models"
    },
    {
     "type": "table",
     "head": [
      "Area",
      "IaaS",
      "PaaS",
      "SaaS"
     ],
     "rows": [
      [
       "Physical data centre",
       "Provider",
       "Provider",
       "Provider"
      ],
      [
       "Operating system patches",
       "Customer",
       "Provider",
       "Provider"
      ],
      [
       "Application configuration",
       "Customer",
       "Customer",
       "Customer (settings)"
      ],
      [
       "Identities and access",
       "Customer",
       "Customer",
       "Customer"
      ],
      [
       "Data and its classification",
       "Customer",
       "Customer",
       "Customer"
      ]
     ],
     "title": "Shared responsibility"
    },
    {
     "type": "topology",
     "title": "One organisation, three service models",
     "nodes": [
      {
       "id": "saas",
       "kind": "cloud",
       "label": "SaaS suite",
       "sub": "mail, files, chat",
       "x": 1,
       "y": 0
      },
      {
       "id": "idp",
       "kind": "idp",
       "label": "Identity",
       "sub": "SSO, MFA, access",
       "x": 3,
       "y": 0
      },
      {
       "id": "fw",
       "kind": "firewall",
       "label": "Cloud firewall",
       "sub": "allows 443 only",
       "x": 5,
       "y": 1
      },
      {
       "id": "vm",
       "kind": "vm",
       "label": "App VM",
       "sub": "IaaS: you patch the OS",
       "x": 4,
       "y": 3
      },
      {
       "id": "db",
       "kind": "db",
       "label": "Managed DB",
       "sub": "PaaS: provider patches",
       "x": 6,
       "y": 3
      },
      {
       "id": "staff",
       "kind": "team",
       "label": "Staff",
       "sub": "office and remote",
       "x": 2,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "staff",
       "b": "saas",
       "label": "HTTPS"
      },
      {
       "a": "staff",
       "b": "idp",
       "label": "sign-in + MFA"
      },
      {
       "a": "idp",
       "b": "saas",
       "label": "SSO"
      },
      {
       "a": "staff",
       "b": "fw",
       "label": "HTTPS"
      },
      {
       "a": "fw",
       "b": "vm"
      },
      {
       "a": "vm",
       "b": "db",
       "label": "SQL"
      }
     ],
     "zones": [
      {
       "label": "Cloud network (IaaS / PaaS)",
       "x": 4,
       "y": 1,
       "w": 3,
       "h": 3,
       "tone": "accent"
      }
     ],
     "caption": "The same organisation consumes SaaS, runs its own VM on IaaS and uses a managed database on PaaS. Who patches what differs per box, but identities, access and data are the customer's in every one."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "In every model, **you** own your accounts, MFA, permissions and data. A misconfigured public storage bucket or a shared admin password is the customer's failure, not the provider's. Many cloud breaches are configuration mistakes.",
     "title": "The provider will not save you from yourself"
    },
    {
     "type": "keypoints",
     "items": [
      "**On-demand self-service**: resources in minutes through a console or API.",
      "**Elasticity**: scale up for peaks and down afterwards.",
      "**Regions and availability zones**: choose where data lives and design for failure.",
      "**Metered service**: you pay for what you use, so idle resources still cost money.",
      "**Data residency**: some regulators require certain data to stay in-country."
     ],
     "title": "Cloud characteristics that matter to support"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Compute cost",
       "expr": "monthly cost = hourly rate x hours running x number of instances",
       "meaning": "A VM at USD 0.10 per hour running all month (730 hours) costs about USD 73."
      },
      {
       "name": "Savings from scheduling",
       "expr": "saving = hourly rate x hours switched off",
       "meaning": "Shutting a test VM down 14 hours a day saves about 14 x 30 x 0.10 = USD 42 a month."
      },
      {
       "name": "Storage cost",
       "expr": "monthly cost = GB stored x price per GB-month",
       "meaning": "2,000 GB at USD 0.02 per GB-month costs USD 40."
      }
     ],
     "title": "Basic cloud cost estimates"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "# Each provider ships a CLI; commands differ but the pattern is the same",
      "cloud login --tenant company-prod            # sign in (opens browser MFA)",
      "cloud vm list --output table                 # what is running and where",
      "cloud vm stop --name test-web-01             # stop an idle test VM",
      "cloud cost show --last 30d --group-by project"
     ],
     "title": "Working with a cloud provider's command-line tool (generic)",
     "note": "This illustrative syntax shows the workflow. Use your provider's real CLI and always confirm which tenant and project you are in before changing anything."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Tags such as owner, cost centre, environment and expiry date let you find who owns a resource, who pays for it and when it can be removed. Untagged resources are the first ones to become forgotten, insecure and expensive.",
     "title": "Tag everything"
    },
    {
     "type": "scenario",
     "situation": "A software company in Dhaka gets a cloud bill three times higher than usual. The cost report shows twelve large VMs created by a developer for a load test five weeks ago, still running, untagged.",
     "options": [
      {
       "text": "Contact the developer to confirm, stop or delete the test VMs, then introduce mandatory tags and budget alerts",
       "feedback": "Correct. You fix the immediate cost safely and prevent repeats with tagging and alerts.",
       "best": true
      },
      {
       "text": "Delete all untagged resources immediately",
       "feedback": "Some untagged resources might be production; deleting without checking could cause an outage.",
       "best": false
      },
      {
       "text": "Move everything back on-premises",
       "feedback": "An overreaction to a governance gap.",
       "best": false
      },
      {
       "text": "Ask finance to pay and ignore it",
       "feedback": "Waste continues every hour the VMs run.",
       "best": false
      }
     ],
     "title": "A surprise cloud bill"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "IaaS",
       "def": "Infrastructure as a service: renting virtual machines, storage and networks while managing the OS and above yourself."
      },
      {
       "term": "PaaS",
       "def": "Platform as a service: a managed platform for running applications and databases without managing servers."
      },
      {
       "term": "SaaS",
       "def": "Software as a service: complete applications delivered over the internet and managed by the provider."
      },
      {
       "term": "Shared responsibility model",
       "def": "The division of security and operational duties between a cloud provider and its customer."
      },
      {
       "term": "Elasticity",
       "def": "The ability to add or remove resources automatically as demand changes."
      },
      {
       "term": "Availability zone",
       "def": "A physically separate data centre location within a cloud region, used to design for failure."
      },
      {
       "term": "Resource tag",
       "def": "A key-value label attached to a cloud resource to record owner, cost centre, environment or purpose."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "SaaS, PaaS and IaaS differ in how much you still manage.",
      "Whatever the model, accounts, MFA, permissions and data stay your responsibility.",
      "Many cloud breaches are configuration mistakes, not provider failures.",
      "Cloud costs accrue every hour a resource runs: schedule, right-size and delete idle resources.",
      "Tag every resource with owner, cost centre, environment and expiry."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In IaaS, who is responsible for patching the guest operating system?",
       "options": [
        "The cloud provider",
        "The customer",
        "Nobody",
        "The hardware vendor"
       ],
       "answer": 1,
       "explain": "In IaaS the customer manages the OS and above."
      },
      {
       "q": "Which is an example of SaaS?",
       "options": [
        "A virtual machine you install Linux on",
        "A managed database you deploy code to",
        "A hosted email and office suite",
        "Your own server room"
       ],
       "answer": 2,
       "explain": "Complete applications delivered as a service are SaaS."
      },
      {
       "q": "A VM costs USD 0.20 per hour and runs 24/7 for 30 days. What is the monthly cost?",
       "options": [
        "USD 48",
        "USD 200",
        "USD 72",
        "USD 144"
       ],
       "answer": 3,
       "explain": "0.20 x 24 x 30 = USD 144."
      },
      {
       "q": "Which is always the customer's responsibility, whatever the cloud model?",
       "options": [
        "Physical security of data centres",
        "Managing user access and data",
        "Hypervisor patching",
        "Replacing failed disks"
       ],
       "answer": 1,
       "explain": "Identity and data stay with the customer."
      },
      {
       "q": "Why use resource tags?",
       "options": [
        "To make VMs faster",
        "To encrypt data",
        "To identify owner, cost and purpose and control spending",
        "To avoid using MFA when automation scripts sign in to the cloud console"
       ],
       "answer": 2,
       "explain": "Tags support ownership, cost tracking and clean-up."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "SaaS and Productivity Suite Administration",
   "subtitle": "Users, licences, mail, sharing and collaboration in cloud suites",
   "minutes": 28,
   "objectives": [
    "Perform common admin tasks in a cloud productivity suite",
    "Manage licences, shared mailboxes, groups and calendars",
    "Troubleshoot mail flow and sharing problems",
    "Configure safe external sharing and offboarding"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most organisations now run email, documents, chat and video meetings on a cloud productivity suite. The support specialist becomes a **tenant administrator**: creating users, assigning licences, fixing mail flow, recovering deleted files and controlling what can be shared outside the organisation. The menus differ between providers, but the tasks are almost identical."
    },
    {
     "type": "table",
     "head": [
      "Task",
      "Where",
      "Watch out for"
     ],
     "rows": [
      [
       "Create user and assign licence",
       "Admin centre or identity directory",
       "Correct licence tier; usage location for compliance"
      ],
      [
       "Reset password / MFA",
       "Identity admin",
       "Verify identity first; revoke sessions if compromise suspected"
      ],
      [
       "Shared mailbox",
       "Mail admin",
       "Grant access to a group; usually needs no licence of its own"
      ],
      [
       "Distribution or team group",
       "Groups admin",
       "Owner assigned; external members only if approved"
      ],
      [
       "Restore deleted file or mailbox",
       "Retention / recycle settings",
       "Retention period limits; act quickly"
      ],
      [
       "Offboard a leaver",
       "Identity, mail and storage admin",
       "Block sign-in, transfer data, convert mailbox, reclaim licence"
      ]
     ],
     "title": "Everyday SaaS admin tasks"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Block sign-in",
       "text": "Disable the account and revoke active sessions and tokens."
      },
      {
       "label": "Protect data",
       "text": "Set mail forwarding or convert to a shared mailbox for the manager."
      },
      {
       "label": "Transfer files",
       "text": "Move ownership of documents and shared drives."
      },
      {
       "label": "Remove access",
       "text": "Remove from groups, apps and devices; wipe company data on phones."
      },
      {
       "label": "Reclaim licence",
       "text": "Free the licence after the retention steps are done."
      }
     ],
     "title": "Offboarding in a cloud suite"
    },
    {
     "type": "keypoints",
     "items": [
      "Licences are assigned per user; unused licences still cost money every month.",
      "Group-based licensing assigns licences automatically by role.",
      "Review licence reports monthly for inactive accounts.",
      "Shared mailboxes and resource calendars often need no paid licence (check limits).",
      "Plan for growth: new starters cannot work without a licence on day one."
     ],
     "title": "Licence management basics"
    },
    {
     "type": "sequence",
     "title": "How an email reaches a user",
     "actors": [
      "Sender's server",
      "DNS",
      "Recipient mail service",
      "User's mailbox"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "MX for company.com?"
      },
      {
       "from": 1,
       "to": 0,
       "label": "mx1.provider.example",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "SMTP: deliver message (TLS)"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Sender's SPF, DKIM key, DMARC?"
      },
      {
       "from": 1,
       "to": 2,
       "label": "TXT records",
       "reply": true
      },
      {
       "from": 2,
       "to": 2,
       "label": "Spam, malware, auth checks; rules"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Inbox, junk or quarantine"
      },
      {
       "from": 3,
       "to": 3,
       "label": "Clients sync: desktop, web, mobile"
      }
     ],
     "caption": "Most 'missing email' tickets are answered at step 6: the message arrived but was filtered, quarantined or redirected by a rule. Message trace shows exactly which step a message reached."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Never arrived",
       "items": [
        "Check message trace in the admin centre",
        "Check quarantine and junk",
        "Check the sender's bounce message"
       ]
      },
      {
       "title": "Arrived late",
       "items": [
        "Look at message header timestamps for each hop",
        "Large attachments or greylisting",
        "Sender-side delays"
       ]
      },
      {
       "title": "Bounced",
       "items": [
        "Read the status code and text",
        "Mailbox full, address wrong, or blocked by policy",
        "Failed SPF, DKIM or DMARC checks; large mailbox providers have required all three from bulk senders since 2024"
       ]
      }
     ],
     "title": "Mail troubleshooting clues"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Attackers who compromise a mailbox often create rules to forward mail outside the organisation silently. Block automatic external forwarding by default, alert on new forwarding rules and check rules first when investigating a suspicious account.",
     "title": "Auto-forwarding to external addresses"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Internal only",
       "items": [
        "Files shared within the organisation",
        "Default for sensitive teams such as HR and finance"
       ]
      },
      {
       "title": "Specific external people",
       "items": [
        "Invite named guests who must sign in",
        "Expiry dates on guest access",
        "Good for partners and auditors"
       ]
      },
      {
       "title": "Anyone with the link",
       "items": [
        "No sign-in needed",
        "Easy to leak",
        "Disable or restrict with expiry and view-only"
       ]
      }
     ],
     "title": "Sharing settings"
    },
    {
     "type": "template",
     "title": "SaaS offboarding checklist record",
     "purpose": "Track each leaver through every offboarding step with evidence.",
     "columns": [
      "Leaver",
      "Sign-in blocked (time)",
      "Sessions revoked",
      "Mail handled",
      "Files transferred to",
      "Devices wiped",
      "Licence reclaimed"
     ],
     "example": [
      [
       "M. Chowdhury",
       "2026-06-30 17:05",
       "Yes",
       "Shared mailbox, manager access",
       "Team lead K. Das",
       "Phone work profile removed",
       "2026-07-30"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "The accounts team at a Chattogram trading company says invoices from one supplier stopped arriving three days ago. Other external mail arrives normally.",
     "options": [
      {
       "text": "Ask the supplier to send invoices by WhatsApp instead",
       "feedback": "A workaround that bypasses records and controls.",
       "best": false
      },
      {
       "text": "Increase the accounts mailbox size",
       "feedback": "Other mail arrives, so the mailbox is not full.",
       "best": false
      },
      {
       "text": "Reset the accounts team's passwords",
       "feedback": "Nothing suggests compromise; this does not explain missing mail from one sender.",
       "best": false
      },
      {
       "text": "Run a message trace for the supplier's domain and check quarantine and the supplier's SPF/DMARC results",
       "feedback": "Correct. The trace shows whether messages arrived and why they were filtered; a supplier-side authentication change is a common cause.",
       "best": true
      }
     ],
     "title": "Missing invoices from a supplier"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Tenant",
       "def": "An organisation's dedicated instance of a cloud service, with its own users, settings and data."
      },
      {
       "term": "Licence assignment",
       "def": "Allocating a paid service plan to a user so they can use specific cloud applications."
      },
      {
       "term": "Shared mailbox",
       "def": "A mailbox that several users can access, such as accounts@ or support@, without a separate sign-in."
      },
      {
       "term": "Message trace",
       "def": "An admin tool that shows the path and status of an email through the mail service."
      },
      {
       "term": "Quarantine",
       "def": "A holding area for messages blocked as spam, phishing or malware, which admins can review and release."
      },
      {
       "term": "Guest access",
       "def": "Permission for an external person to access specific internal resources after signing in."
      },
      {
       "term": "Retention policy",
       "def": "A rule that keeps or deletes data for a defined period to meet legal or business needs."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Tenant admins create users, assign licences, fix mail flow and control sharing.",
      "Offboard in order: block sign-in and revoke sessions first, reclaim the licence last.",
      "Use message trace, quarantine and SPF/DKIM/DMARC results for missing mail.",
      "Block automatic external forwarding and watch for new forwarding rules.",
      "Prefer named guest access with expiry over 'anyone with the link'."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which tool shows whether an email from a partner reached the organisation and what happened to it?",
       "options": [
        "Disk Management",
        "Message trace",
        "gpresult",
        "ipconfig"
       ],
       "answer": 1,
       "explain": "Message trace follows a message through the mail service."
      },
      {
       "q": "What should be done first when offboarding a leaver in a cloud suite?",
       "options": [
        "Delete the account immediately so the licence is freed the same day",
        "Block sign-in and revoke sessions",
        "Reclaim the licence",
        "Email their contacts"
       ],
       "answer": 1,
       "explain": "Blocking access comes first; deleting too early loses data."
      },
      {
       "q": "Why should automatic forwarding to external addresses be blocked by default?",
       "options": [
        "It slows the mail server and fills the outbound queue during busy periods",
        "It breaks calendars",
        "Attackers use it to exfiltrate mail silently",
        "It uses licences"
       ],
       "answer": 2,
       "explain": "Forwarding rules are a common data-theft technique after compromise."
      },
      {
       "q": "A team needs a common support@ inbox that four people can read and answer. What is the best choice?",
       "options": [
        "Create a shared mailbox and grant access to a group",
        "Share one user's password",
        "Forward each message manually",
        "Create four separate accounts named support1 to support4 and forward between them"
       ],
       "answer": 0,
       "explain": "A shared mailbox with group access keeps accountability."
      },
      {
       "q": "Which sharing setting carries the highest risk of data leakage?",
       "options": [
        "Internal only",
        "Anyone with the link",
        "Specific signed-in guests",
        "Owner only"
       ],
       "answer": 1,
       "explain": "Anonymous links can be forwarded to anyone."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Monitoring, Availability and Remote Access",
   "subtitle": "Seeing problems before users do and keeping services reachable",
   "minutes": 26,
   "objectives": [
    "Choose useful metrics and alerts for servers, networks and services",
    "Calculate availability and allowed downtime",
    "Describe redundancy options from power to cloud regions",
    "Provide secure remote access with VPN and remote desktop gateways"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The best support teams hear about problems from their monitoring, not from angry users. Monitoring watches health and performance; availability design adds redundancy so single failures do not stop the business; and secure remote access lets staff and support work from anywhere without opening the network to attackers."
    },
    {
     "type": "table",
     "head": [
      "Area",
      "Metrics",
      "Example alert"
     ],
     "rows": [
      [
       "Servers",
       "CPU, memory, disk space, disk latency",
       "Disk C: under 10% free for 15 minutes"
      ],
      [
       "Services",
       "Up/down, response time, error rate",
       "Intranet HTTP check fails 3 times in a row"
      ],
      [
       "Network",
       "Link status, utilisation, errors, packet loss",
       "WAN link above 90% for 10 minutes"
      ],
      [
       "Backups",
       "Job success, duration, last good copy",
       "No successful backup in 26 hours"
      ],
      [
       "Security",
       "Failed sign-ins, new admin accounts, disabled protection",
       "Antivirus disabled on any endpoint"
      ],
      [
       "Environment",
       "Server room temperature, UPS battery, humidity",
       "Temperature above 27 degrees C"
      ]
     ],
     "title": "What to monitor"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "If an alert fires and no one needs to do anything, it is noise. Too many noisy alerts train people to ignore all of them. Each alert should have an owner, a threshold based on real behaviour and a short runbook saying what to do.",
     "title": "Alert on what needs action"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Availability",
       "expr": "availability % = (total time - downtime) / total time x 100",
       "meaning": "A month of 720 hours with 3.6 hours of downtime is 99.5% available."
      },
      {
       "name": "Allowed downtime per year",
       "expr": "downtime = (1 - availability) x 8,760 hours",
       "meaning": "99.9% allows about 8.8 hours a year; 99.99% allows about 53 minutes."
      },
      {
       "name": "Two redundant components",
       "expr": "combined availability = 1 - (1 - A1) x (1 - A2)",
       "meaning": "Two independent 99% internet links give about 99.99% if failover works."
      }
     ],
     "title": "Availability maths"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Downtime allowed per year",
     "labels": [
      "99%",
      "99.5%",
      "99.9%",
      "99.95%",
      "99.99%"
     ],
     "series": [
      {
       "name": "Allowed downtime",
       "values": [
        87.6,
        43.8,
        8.76,
        4.38,
        0.88
       ]
      }
     ],
     "unit": " h",
     "yLabel": "hours per year",
     "caption": "Exact values from (1 - availability) x 8,760 hours. Each extra nine cuts allowed downtime tenfold, and usually raises the cost of redundancy sharply."
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "Sites and regions",
       "parts": [
        "Second site or cloud region",
        "Disaster recovery plans"
       ]
      },
      {
       "label": "Services",
       "parts": [
        "Clustered or load-balanced servers",
        "Two DNS and DHCP servers"
       ]
      },
      {
       "label": "Network",
       "parts": [
        "Two internet links from different providers",
        "Redundant switches and firewall pairs"
       ]
      },
      {
       "label": "Hardware",
       "parts": [
        "RAID, dual PSUs, spare parts on site"
       ]
      },
      {
       "label": "Power",
       "parts": [
        "UPS, generator, dual power feeds"
       ]
      }
     ],
     "title": "Redundancy from the ground up (top first)"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "VPN",
       "items": [
        "Encrypted tunnel into the internal network",
        "Use MFA and up-to-date VPN software",
        "Gives broad network access, so restrict by role"
       ]
      },
      {
       "title": "Remote desktop gateway or bastion",
       "items": [
        "Single hardened entry point for RDP or SSH",
        "MFA and logging at the gateway",
        "Never expose RDP directly to the internet"
       ]
      },
      {
       "title": "Zero-trust access",
       "items": [
        "Per-app access checked by identity and device health",
        "No broad network access",
        "Increasingly common in 2026"
       ]
      }
     ],
     "title": "Remote access options"
    },
    {
     "type": "topology",
     "title": "Secure remote access without exposed ports",
     "nodes": [
      {
       "id": "staff",
       "kind": "laptop",
       "label": "Remote staff",
       "sub": "managed, compliant",
       "x": 1,
       "y": 0
      },
      {
       "id": "vend",
       "kind": "user",
       "label": "Vendor engineer",
       "sub": "named, time-limited",
       "x": 5,
       "y": 0
      },
      {
       "id": "inet",
       "kind": "internet",
       "label": "Internet",
       "x": 3,
       "y": 1
      },
      {
       "id": "gw",
       "kind": "firewall",
       "label": "Access gateway",
       "sub": "VPN or per-app, MFA",
       "x": 1,
       "y": 3
      },
      {
       "id": "bas",
       "kind": "server",
       "label": "Bastion host",
       "sub": "RDP/SSH entry, logged",
       "x": 5,
       "y": 3
      },
      {
       "id": "idp",
       "kind": "idp",
       "label": "Identity",
       "sub": "MFA and device check",
       "x": 3,
       "y": 4
      },
      {
       "id": "apps",
       "kind": "process",
       "label": "Internal apps",
       "sub": "intranet, ERP",
       "x": 1,
       "y": 5
      },
      {
       "id": "img",
       "kind": "server",
       "label": "Imaging server",
       "sub": "vendor-supported",
       "x": 5,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "staff",
       "b": "inet"
      },
      {
       "a": "vend",
       "b": "inet"
      },
      {
       "a": "inet",
       "b": "gw",
       "label": "TLS"
      },
      {
       "a": "inet",
       "b": "bas",
       "label": "TLS"
      },
      {
       "a": "gw",
       "b": "idp",
       "style": "dashed"
      },
      {
       "a": "bas",
       "b": "idp",
       "style": "dashed"
      },
      {
       "a": "gw",
       "b": "apps",
       "label": "per-app"
      },
      {
       "a": "bas",
       "b": "img",
       "label": "RDP, recorded"
      }
     ],
     "zones": [
      {
       "label": "Organisation network",
       "x": 0,
       "y": 3,
       "w": 7,
       "h": 3,
       "tone": "neutral"
      }
     ],
     "caption": "Nothing internal is reachable directly: every path enters through a gateway or bastion that checks identity, MFA and device health and logs the session. The vendor's account works only during the agreed window."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Test-NetConnection vpn.company.com -Port 443",
      "Get-NetIPConfiguration | Where-Object InterfaceAlias -like '*VPN*'",
      "# Linux / macOS: secure shell through a bastion host",
      "# ssh -J admin@bastion.company.com admin@app01.internal"
     ],
     "title": "Quick health checks for remote access"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "uptime                                  # load averages",
      "df -h | awk '$5+0 > 85'                 # file systems above 85% full",
      "curl -s -o /dev/null -w '%{http_code} %{time_total}\\n' https://intranet.company.local",
      "journalctl -p warning --since today | tail -n 20"
     ],
     "title": "Simple monitoring checks on Linux"
    },
    {
     "type": "case",
     "title": "Outage on payday",
     "context": "A microfinance institution in Bogura has 60 branches connected to a head-office data centre. On payday, the loan system was unreachable for 3 hours because the single internet link at head office failed. No alert was raised; branches phoned in. The monthly availability target for the loan system is 99.5%.",
     "questions": [
      "Did the system meet its monthly target (30-day month)?",
      "What monitoring would have detected the outage sooner?",
      "What redundancy would you recommend?"
     ],
     "answer": "**Target:** 30 days = 720 hours; 3 hours down gives (720 - 3) / 720 = 99.58%, so it narrowly met 99.5%, but one more incident would breach it. **Monitoring:** external checks of the loan system's URL from outside the network, WAN link status and utilisation alerts at head office, and alerts routed to on-call phones. **Redundancy:** a second internet link from a different provider with automatic failover, tested quarterly, and possibly a cloud-hosted standby for critical services."
    },
    {
     "type": "scenario",
     "situation": "A medical equipment vendor needs to support an imaging server at a Dhaka hospital once a month. They ask for the server's Remote Desktop port to be opened to the internet.",
     "options": [
      {
       "text": "Open TCP 3389 to the internet permanently",
       "feedback": "Exposed RDP is one of the most attacked services on the internet.",
       "best": false
      },
      {
       "text": "Give the vendor a domain admin password by email",
       "feedback": "Massive privilege and an insecure channel.",
       "best": false
      },
      {
       "text": "Ask the vendor to bring a 4G router and connect it to the server",
       "feedback": "Creates an unmanaged backdoor into the hospital network.",
       "best": false
      },
      {
       "text": "Provide time-limited access through the hospital's VPN or remote access gateway with MFA, logging and a named vendor account",
       "feedback": "Correct. Access is controlled, monitored, attributable and only available when needed.",
       "best": true
      }
     ],
     "title": "Remote access for a vendor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Monitoring",
       "def": "Continuously collecting metrics and checks from systems to detect problems and trends."
      },
      {
       "term": "Alert threshold",
       "def": "The value or condition at which monitoring raises an alert, such as disk space below 10%."
      },
      {
       "term": "Availability",
       "def": "The percentage of time a service is usable as agreed."
      },
      {
       "term": "Redundancy",
       "def": "Extra components that take over when one fails, removing single points of failure."
      },
      {
       "term": "Single point of failure",
       "def": "A component whose failure stops the whole service."
      },
      {
       "term": "VPN",
       "def": "Virtual private network: an encrypted tunnel that gives remote users access to internal resources."
      },
      {
       "term": "Bastion host",
       "def": "A hardened server that acts as the controlled entry point for administrative remote access."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Good monitoring finds problems before users do; every alert needs an owner and a runbook.",
      "Availability = (total time - downtime) / total time; each extra nine costs far more.",
      "Remove single points of failure layer by layer, from power to sites.",
      "Never expose RDP or SSH directly; use a VPN, zero-trust gateway or bastion with MFA.",
      "Give vendors named, time-limited, logged access."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Roughly how much downtime per year does 99.9% availability allow?",
       "options": [
        "About 8.8 hours",
        "53 minutes",
        "3.65 days",
        "1 hour"
       ],
       "answer": 0,
       "explain": "0.001 x 8,760 hours is about 8.76 hours."
      },
      {
       "q": "Which alert is most useful?",
       "options": [
        "No successful backup in 26 hours for a critical server",
        "CPU above 1% on any server",
        "Every user sign-in",
        "Any change in any printer's page count, reported to every technician"
       ],
       "answer": 0,
       "explain": "It signals a real risk needing action."
      },
      {
       "q": "Which remote access practice is unsafe?",
       "options": [
        "VPN with MFA",
        "Bastion host with logging",
        "Per-app zero-trust access",
        "RDP exposed directly to the internet"
       ],
       "answer": 3,
       "explain": "Direct RDP exposure is heavily attacked."
      },
      {
       "q": "Two independent internet links are each 99% available. Approximately what is the combined availability with working failover?",
       "options": [
        "98%",
        "99.99%",
        "99%",
        "100%"
       ],
       "answer": 1,
       "explain": "1 - (0.01 x 0.01) = 0.9999."
      },
      {
       "q": "A service was down 7.2 hours in a 720-hour month. What was its availability?",
       "options": [
        "99.9%",
        "99%",
        "98%",
        "99.5%"
       ],
       "answer": 1,
       "explain": "(720 - 7.2) / 720 = 99%."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Protect",
 "title": "Security Basics for IT Support",
 "subtitle": "Identity, MFA, malware, phishing, encryption and incident handling for the first line of defence",
 "outcomes": [
  "Apply the CIA triad, risk scoring, least privilege and defence in depth to support decisions",
  "Configure modern password, MFA and privileged-account controls",
  "Recognise malware and phishing and respond safely",
  "Support encryption and data protection and play the support role in incidents"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Security Foundations for Support Staff",
   "subtitle": "CIA, risk, least privilege and defence in depth in everyday support work",
   "minutes": 26,
   "objectives": [
    "Explain confidentiality, integrity and availability with support examples",
    "Describe threats, vulnerabilities and risk, and estimate simple risk scores",
    "Apply least privilege and defence in depth to support decisions",
    "Recognise the support team's role in physical and social security"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Support specialists hold a lot of power: admin rights, password resets, access to devices and data. That makes them both a strong line of defence and an attractive target. You do not need to be a security engineer, but every decision you make, from granting access to installing software, has a security side."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "C",
       "title": "Confidentiality",
       "text": "Only authorised people see data. Example: locking a screen, restricting a payroll folder, encrypting a laptop."
      },
      {
       "label": "I",
       "title": "Integrity",
       "text": "Data is accurate and unaltered. Example: checksums on downloads, change control, file versioning."
      },
      {
       "label": "A",
       "title": "Availability",
       "text": "Systems and data are there when needed. Example: backups, UPS, redundancy, patching to avoid crashes."
      }
     ],
     "title": "The CIA triad in support work"
    },
    {
     "type": "table",
     "head": [
      "Term",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "Asset",
       "Something of value",
       "Customer database, laptops, reputation"
      ],
      [
       "Threat",
       "Something that could cause harm",
       "Ransomware gang, careless insider, flood"
      ],
      [
       "Vulnerability",
       "A weakness a threat can exploit",
       "Unpatched VPN, weak password, open server room"
      ],
      [
       "Risk",
       "Likelihood that a threat exploits a vulnerability, and the impact",
       "High risk: internet-facing unpatched server"
      ],
      [
       "Control",
       "Measure that reduces risk",
       "Patch, MFA, lock, backup, training"
      ]
     ],
     "title": "Threats, vulnerabilities and risk"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Risk score",
       "expr": "risk = likelihood (1-5) x impact (1-5)",
       "meaning": "An unpatched internet-facing server: likelihood 4 x impact 5 = 20, a top priority."
      },
      {
       "name": "Residual risk",
       "expr": "residual risk = risk remaining after controls are applied",
       "meaning": "After patching and MFA, likelihood drops to 1, giving 1 x 5 = 5."
      }
     ],
     "title": "Simple risk scoring"
    },
    {
     "type": "matrix",
     "title": "Deciding what to do with a risk",
     "x": "Likelihood",
     "y": "Impact",
     "quadrants": [
      {
       "title": "Plan for it",
       "items": [
        "Server-room fire or flood",
        "Off-site backups, recovery plan"
       ]
      },
      {
       "title": "Treat now",
       "items": [
        "Unpatched internet-facing server",
        "Patch, MFA, monitoring"
       ]
      },
      {
       "title": "Accept and review",
       "items": [
        "A lost low-value accessory"
       ]
      },
      {
       "title": "Reduce cheaply",
       "items": [
        "Lost visitor badges",
        "Badge expiry, sign-out at reception"
       ]
      }
     ],
     "caption": "Place each risk by likelihood and impact before choosing a control. High-high risks need action now; rare disasters need plans and backups rather than daily effort."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Give every account, person and program only the access it needs to do its job, for only as long as it needs it. Least privilege limits the damage from mistakes, malware and stolen credentials.",
     "title": "Least privilege"
    },
    {
     "type": "layers",
     "items": [
      {
       "label": "Policies and people",
       "parts": [
        "Acceptable use policy",
        "Security awareness training"
       ]
      },
      {
       "label": "Physical",
       "parts": [
        "Locked rooms, badges, visitor logs, cable locks"
       ]
      },
      {
       "label": "Network",
       "parts": [
        "Firewalls, segmentation, secure Wi-Fi, VPN"
       ]
      },
      {
       "label": "Identity",
       "parts": [
        "Strong passwords, MFA, least privilege"
       ]
      },
      {
       "label": "Endpoint",
       "parts": [
        "Patching, endpoint protection, encryption"
       ]
      },
      {
       "label": "Data",
       "parts": [
        "Classification, backups, access control"
       ]
      }
     ],
     "title": "Defence in depth (outer layer first)"
    },
    {
     "type": "keypoints",
     "items": [
      "Lock your screen every time you step away (Windows key + L, Ctrl + Cmd + Q on macOS).",
      "Challenge politely or report people without badges in restricted areas.",
      "Do not hold secure doors open for strangers (tailgating).",
      "Keep laptops locked or with you; never leave them visible in vehicles.",
      "Shred printed documents containing personal or financial data."
     ],
     "title": "Physical security habits"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Pretexting",
       "items": [
        "Caller pretends to be a manager, auditor or IT",
        "Creates a believable story to get information"
       ]
      },
      {
       "title": "Baiting",
       "items": [
        "Infected USB sticks left in car parks",
        "'Free' downloads carrying malware"
       ]
      },
      {
       "title": "Tailgating",
       "items": [
        "Following staff through secure doors",
        "Often carrying boxes to seem legitimate"
       ]
      }
     ],
     "title": "Common social engineering tricks"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Attackers specifically target help desk staff to reset passwords and add MFA devices for them. Follow identity verification procedures every time, especially when a caller is urgent, senior or angry.",
     "title": "Admins are prime targets"
    },
    {
     "type": "sequence",
     "title": "How a help-desk social engineering attack works",
     "actors": [
      "Attacker",
      "Help desk",
      "Identity provider",
      "Mailbox"
     ],
     "steps": [
      {
       "from": 0,
       "to": 0,
       "label": "Researches staff on social media"
      },
      {
       "from": 0,
       "to": 1,
       "label": "'I'm the CFO, new phone, urgent!'"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Resets password, adds new MFA device",
       "note": "the step verification must stop"
      },
      {
       "from": 1,
       "to": 0,
       "label": "New password read out on the call",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Signs in with the new MFA device"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Session token issued",
       "reply": true
      },
      {
       "from": 0,
       "to": 3,
       "label": "Reads mail, adds a forwarding rule"
      }
     ],
     "caption": "No malware is needed: one rushed reset hands over the account. Verifying identity with details already on record at step 3 breaks the whole chain."
    },
    {
     "type": "scenario",
     "situation": "You see a man in a contractor's vest near the server room door at a Gazipur factory. He says he is 'here to check the air conditioning' but has no visitor badge and no one told you about a visit.",
     "options": [
      {
       "text": "Let him in because he looks like a contractor",
       "feedback": "A vest is easy to obtain; nothing has been verified.",
       "best": false
      },
      {
       "text": "Politely ask him to wait in reception while you confirm the visit with facilities, and do not let him into the room",
       "feedback": "Correct. You verify before granting physical access, without confrontation.",
       "best": true
      },
      {
       "text": "Confront him aggressively and call the police",
       "feedback": "Escalating immediately is unnecessary; verification comes first.",
       "best": false
      },
      {
       "text": "Ignore him; security is not your job",
       "feedback": "Everyone shares responsibility for physical security.",
       "best": false
      }
     ],
     "title": "An unknown visitor in the server room corridor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "CIA triad",
       "def": "The three core goals of information security: confidentiality, integrity and availability."
      },
      {
       "term": "Threat",
       "def": "Any circumstance or actor with the potential to cause harm to an asset."
      },
      {
       "term": "Vulnerability",
       "def": "A weakness in a system, process or person that a threat could exploit."
      },
      {
       "term": "Risk",
       "def": "The combination of the likelihood of a harmful event and its impact."
      },
      {
       "term": "Least privilege",
       "def": "The principle of granting only the minimum access needed, for the minimum time."
      },
      {
       "term": "Defence in depth",
       "def": "Using multiple layers of security controls so that one failure does not lead to compromise."
      },
      {
       "term": "Social engineering",
       "def": "Manipulating people into revealing information or performing actions that weaken security."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Every support decision has a confidentiality, integrity or availability side.",
      "Risk = likelihood x impact; treat the highest scores first.",
      "Least privilege and defence in depth limit the damage of any single failure.",
      "Help desks are prime social-engineering targets: verify identity every time, especially under pressure.",
      "Physical security is everyone's job: lock screens, challenge politely, stop tailgating."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Encrypting a laptop's disk mainly protects which part of the CIA triad?",
       "options": [
        "Availability",
        "Confidentiality",
        "Integrity",
        "Accountability"
       ],
       "answer": 1,
       "explain": "Encryption keeps data confidential if the laptop is lost."
      },
      {
       "q": "A risk has likelihood 3 and impact 4. What is its score on a 1-5 x 1-5 scale?",
       "options": [
        "7",
        "34",
        "1",
        "12"
       ],
       "answer": 3,
       "explain": "3 x 4 = 12."
      },
      {
       "q": "Which action best demonstrates least privilege?",
       "options": [
        "Making all IT staff domain admins",
        "Sharing one admin password in the team so that nobody gets locked out of systems",
        "Disabling UAC",
        "Using a separate admin account only when admin tasks are needed"
       ],
       "answer": 3,
       "explain": "Separate, just-in-time admin use limits exposure."
      },
      {
       "q": "Someone follows you through a badge-controlled door without swiping. What is this called?",
       "options": [
        "Phishing",
        "Baiting",
        "Pretexting",
        "Tailgating"
       ],
       "answer": 3,
       "explain": "Following through secured doors is tailgating."
      },
      {
       "q": "Why are help desk staff targeted by attackers?",
       "options": [
        "They can reset passwords and change MFA for others",
        "They have slow PCs",
        "They never use email",
        "They work night shifts when security monitoring is usually switched off"
       ],
       "answer": 0,
       "explain": "Their privileges can be abused to take over accounts."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Passwords, MFA and Account Security",
   "subtitle": "Protecting the identities that unlock everything else",
   "minutes": 28,
   "objectives": [
    "Set and explain modern password guidance",
    "Compare MFA methods by strength and usability, including passkeys",
    "Recognise signs of account compromise and respond correctly",
    "Separate admin accounts and protect privileged access"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most breaches involve stolen or weak credentials. The good news is that a few well-chosen controls stop the vast majority of account attacks: long unique passwords stored in a password manager, multi-factor authentication everywhere and careful handling of privileged accounts. Support specialists configure these controls and help users live with them."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Outdated advice",
       "items": [
        "Short passwords with forced symbols",
        "Mandatory change every 30-90 days",
        "Password hints and security questions",
        "Writing passwords on sticky notes when rules get too hard"
       ]
      },
      {
       "title": "Modern practice",
       "items": [
        "Long passphrases: at least 15 characters when a password is the only factor",
        "No forced symbol rules or scheduled changes; change on compromise",
        "Block common and breached passwords",
        "Password manager for unique passwords; passkeys wherever offered"
       ]
      }
     ],
     "title": "Password guidance: then and now"
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "What current guidance says",
     "text": "The 2025 revision of a widely used digital identity standard (NIST SP 800-63B) tells organisations not to force periodic password changes or composition rules, to screen new passwords against breached lists, and to accept long passphrases, with at least 15 characters when a password is used on its own. Many regulators and auditors now follow the same approach."
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Possible combinations",
       "expr": "combinations = (characters available) ^ (length)",
       "meaning": "8 characters from 95 symbols is about 6.6 x 10^15; 16 lowercase letters is about 4.4 x 10^22, millions of times more."
      },
      {
       "name": "Entropy (bits)",
       "expr": "entropy = length x log2(characters available)",
       "meaning": "A 4-word passphrase chosen at random from 7,776 words has about 51.7 bits; each extra word adds about 12.9 bits."
      }
     ],
     "title": "Why length beats complexity"
    },
    {
     "type": "table",
     "head": [
      "Method",
      "Strength",
      "Notes"
     ],
     "rows": [
      [
       "SMS or voice code",
       "Weak to moderate",
       "Vulnerable to SIM swap and interception; better than nothing"
      ],
      [
       "Authenticator app code (TOTP)",
       "Moderate",
       "Works offline; can still be phished on a fake site"
      ],
      [
       "Push approval with number matching",
       "Good",
       "Number matching defeats most 'MFA fatigue' spam"
      ],
      [
       "Hardware security key (FIDO2)",
       "Strong",
       "Phishing-resistant; tied to the real site"
      ],
      [
       "Passkey (device-bound or synced)",
       "Strong",
       "Phishing-resistant sign-in without a password"
      ]
     ],
     "title": "MFA methods compared"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Attackers with a stolen password send dozens of push prompts at night, hoping the user taps 'Approve' to make them stop. Teach users: **never approve a prompt you did not start**, and report it. Number matching and phishing-resistant methods stop most of these attacks.",
     "title": "MFA fatigue attacks"
    },
    {
     "type": "sequence",
     "title": "How a passkey sign-in works",
     "actors": [
      "User",
      "Phone or laptop",
      "Website"
     ],
     "steps": [
      {
       "from": 0,
       "to": 2,
       "label": "Sign in as nadia@company.example"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Random challenge for this site",
       "reply": true,
       "note": "a fake site has a different origin"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Unlock with fingerprint or PIN"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Approves"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Challenge signed with private key"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Checks it with stored public key"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Signed in; no password sent",
       "reply": true
      }
     ],
     "caption": "The private key never leaves the device, and the signature only works for the genuine site, so a phishing page has nothing to steal or replay. If the device is lost, recovery goes through verified identity, never a quick reset."
    },
    {
     "type": "keypoints",
     "items": [
      "Sign-ins from unusual countries or impossible travel between locations.",
      "MFA prompts the user did not trigger.",
      "New inbox rules forwarding or deleting mail.",
      "Password reset emails the user did not request.",
      "Contacts receiving odd messages or invoices from the user."
     ],
     "title": "Signs an account may be compromised"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Contain",
       "text": "Reset the password, revoke all sessions and tokens, and block sign-in if needed."
      },
      {
       "title": "Check MFA",
       "text": "Remove unknown MFA methods and re-register the user's own."
      },
      {
       "title": "Inspect",
       "text": "Look for malicious inbox rules, forwarding, app consents and recent file sharing."
      },
      {
       "title": "Report",
       "text": "Raise a security incident and follow the incident process."
      },
      {
       "title": "Educate",
       "text": "Explain to the user what happened and how to spot it next time, without blame."
      }
     ],
     "title": "Responding to a suspected compromised account"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "net accounts                                     # local password and lockout policy",
      "Get-LocalUser | Select-Object Name, Enabled, PasswordLastSet, LastLogon",
      "Get-LocalGroupMember Administrators              # who has local admin?",
      "# Linux: sudo chage -l nusrat  (password ageing for a user)",
      "# Linux: getent group sudo     (who can use sudo on Debian/Ubuntu)"
     ],
     "title": "Checking local account security settings"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Separate accounts",
       "items": [
        "Daily account for email and web",
        "Admin account only for admin tasks",
        "Admin accounts never have mailboxes"
       ]
      },
      {
       "title": "Limit and log",
       "items": [
        "Just-in-time elevation that expires",
        "All admin actions logged",
        "Quarterly review of admin group membership"
       ]
      },
      {
       "title": "Local admin passwords",
       "items": [
        "Unique, random local admin password per device",
        "Rotated automatically by a management tool",
        "Never the same password on every PC"
       ]
      }
     ],
     "title": "Privileged access done well"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A good password manager generates and stores unique passwords for every site, fills them only on the correct website (which helps against phishing) and can share credentials securely within a team. It is the single most useful tool you can give users.",
     "title": "Recommend a password manager"
    },
    {
     "type": "scenario",
     "situation": "A finance officer at a mobile financial services company calls at 08:00: she received about 30 sign-in approval requests overnight and approved one by mistake around 02:00 to stop them.",
     "options": [
      {
       "text": "Treat it as a compromise: reset her password, revoke sessions, review MFA methods, inbox rules and recent activity, and raise a security incident",
       "feedback": "Correct. The attacker had her password and now likely has a session; containment and investigation are urgent.",
       "best": true
      },
      {
       "text": "Tell her not to worry because she has MFA",
       "feedback": "She approved an attacker's sign-in; the account is likely compromised.",
       "best": false
      },
      {
       "text": "Disable MFA so she will not be disturbed again",
       "feedback": "Removing MFA would make the attack easier.",
       "best": false
      },
      {
       "text": "Ask her to change her password next month",
       "feedback": "Delays let the attacker steal data or send fraudulent payment requests.",
       "best": false
      }
     ],
     "title": "Midnight MFA prompts"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Passphrase",
       "def": "A long password made of several words, easier to remember and harder to crack than a short complex one."
      },
      {
       "term": "Password manager",
       "def": "Software that generates, stores and fills unique strong passwords securely."
      },
      {
       "term": "Multi-factor authentication",
       "def": "Sign-in that requires two or more types of evidence: something you know, have or are."
      },
      {
       "term": "Phishing-resistant MFA",
       "def": "Authentication methods such as FIDO2 security keys and passkeys that cannot be replayed on a fake site."
      },
      {
       "term": "Passkey",
       "def": "A cryptographic credential stored on a device that replaces passwords and is bound to the genuine website."
      },
      {
       "term": "MFA fatigue",
       "def": "An attack that floods a user with approval prompts hoping they will accept one."
      },
      {
       "term": "Privileged account",
       "def": "An account with elevated rights, such as administrator or root, that needs extra protection."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Length beats complexity: long passphrases plus a password manager.",
      "Drop forced periodic changes and composition rules; block breached passwords instead.",
      "Prefer phishing-resistant MFA: passkeys and FIDO2 keys; number matching for push.",
      "Never approve a prompt you did not start; unexpected prompts mean the password is known.",
      "Separate admin accounts, just-in-time elevation and unique local admin passwords protect privileged access."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which MFA method is phishing-resistant?",
       "options": [
        "SMS code",
        "Authenticator app code",
        "FIDO2 security key or passkey",
        "Email code"
       ],
       "answer": 2,
       "explain": "FIDO2 and passkeys are bound to the genuine site."
      },
      {
       "q": "Which password policy reflects modern practice?",
       "options": [
        "Long passphrases, blocking breached passwords, change on compromise",
        "Change every 30 days",
        "8-character passwords with forced symbols, numbers and a change every 30 days",
        "Security questions for resets"
       ],
       "answer": 0,
       "explain": "Length, breach checks and event-driven change are modern guidance."
      },
      {
       "q": "A user reports MFA prompts they did not trigger. What does this suggest?",
       "options": [
        "Their phone is broken",
        "MFA is misconfigured and sending duplicate prompts after each sign-in",
        "Nothing; ignore them",
        "Someone has their password and is trying to sign in"
       ],
       "answer": 3,
       "explain": "Unexpected prompts mean an attacker likely knows the password."
      },
      {
       "q": "Why should admins have separate admin accounts?",
       "options": [
        "To get more licences",
        "Because admins change roles often and forget which password belongs to which system",
        "So email and browsing run without admin rights, limiting damage",
        "To avoid MFA"
       ],
       "answer": 2,
       "explain": "Separating daily and admin use reduces exposure."
      },
      {
       "q": "Which local admin practice is safest?",
       "options": [
        "The same strong password on every PC, so technicians can remember it",
        "No password",
        "Password written on the PC",
        "Unique, automatically rotated passwords per device"
       ],
       "answer": 3,
       "explain": "Unique rotated passwords stop one stolen password unlocking every device."
      },
      {
       "q": "A small organisation is updating its password policy to current guidance. Which existing rule should it drop?",
       "options": [
        "Checking new passwords against lists of breached passwords",
        "Forcing every password to change every 60 days",
        "Allowing long passphrases that contain spaces",
        "Requiring MFA for email and remote access"
       ],
       "answer": 1,
       "explain": "Scheduled changes push people towards weak, predictable passwords, so current guidance drops them and changes passwords only on compromise. Breach screening, long passphrases and MFA all stay."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Malware, Phishing and Endpoint Protection",
   "subtitle": "Recognising, preventing and cleaning up the most common attacks",
   "minutes": 28,
   "objectives": [
    "Identify common malware types and their symptoms",
    "Recognise phishing and teach users to report it",
    "Explain endpoint protection, EDR and application control",
    "Follow a safe malware response procedure"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Phishing emails and malware are where most incidents begin, and support staff are usually the first to hear about them: 'My PC is acting strange', 'I clicked a link', 'My files have weird extensions'. A calm, correct first response limits the damage. A panicked or careless one can spread an infection across the organisation."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "What it does",
      "Typical sign"
     ],
     "rows": [
      [
       "Virus",
       "Infects files and spreads when they run",
       "Modified files, antivirus alerts"
      ],
      [
       "Worm",
       "Spreads across networks on its own",
       "Sudden network traffic, many infected hosts"
      ],
      [
       "Trojan",
       "Hides inside apparently legitimate software",
       "Unknown processes after installing 'free' tools"
      ],
      [
       "Ransomware",
       "Encrypts data and demands payment",
       "Renamed files, ransom notes"
      ],
      [
       "Spyware / keylogger",
       "Steals data and keystrokes",
       "Account takeovers, unexpected outbound traffic"
      ],
      [
       "Rootkit",
       "Hides deep in the OS or firmware",
       "Security tools disabled or blind"
      ],
      [
       "Cryptominer",
       "Uses CPU/GPU to mine currency",
       "High CPU, loud fans, slow PC"
      ]
     ],
     "title": "Malware types"
    },
    {
     "type": "keypoints",
     "items": [
      "Urgency or threats: 'Your account will be closed in 2 hours'.",
      "Sender address that does not match the claimed organisation, or a lookalike domain.",
      "Links whose real destination (hover to check) differs from the text.",
      "Unexpected attachments, especially archives, macro documents or HTML files.",
      "Requests to change bank details, buy gift cards or bypass normal process.",
      "Generic greetings and unusual language for that sender.",
      "QR codes or voice messages that rush you to a sign-in page or payment; text and even voices can now be AI-generated."
     ],
     "title": "Red flags in a phishing message"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Chattogram importer received an email that looked like it came from a long-standing supplier asking for 'updated bank details'. The domain had one letter changed. The accounts officer phoned the supplier on the number in their files, not the one in the email, and avoided losing a USD 48,000 payment.",
     "title": "Payment diversion fraud"
    },
    {
     "type": "topology",
     "title": "How a phishing attack unfolds",
     "nodes": [
      {
       "id": "att",
       "kind": "attacker",
       "label": "Attacker",
       "sub": "lookalike domain",
       "x": 1,
       "y": 0
      },
      {
       "id": "fake",
       "kind": "cloud",
       "label": "Fake login page",
       "sub": "harvests password + code",
       "x": 5,
       "y": 0
      },
      {
       "id": "flt",
       "kind": "shield",
       "label": "Mail filter",
       "sub": "catches most, not all",
       "x": 1,
       "y": 3
      },
      {
       "id": "idp",
       "kind": "idp",
       "label": "Real sign-in",
       "sub": "attacker replays session",
       "x": 5,
       "y": 3
      },
      {
       "id": "lap",
       "kind": "laptop",
       "label": "User laptop",
       "sub": "clicks the link",
       "x": 1,
       "y": 5
      },
      {
       "id": "mbx",
       "kind": "db",
       "label": "Mailbox",
       "sub": "rules, invoice fraud",
       "x": 5,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "att",
       "b": "flt",
       "label": "phishing email",
       "style": "attack"
      },
      {
       "a": "flt",
       "b": "lap",
       "label": "delivered"
      },
      {
       "a": "lap",
       "b": "fake",
       "label": "clicks link",
       "style": "attack"
      },
      {
       "a": "fake",
       "b": "idp",
       "label": "replays login",
       "style": "attack"
      },
      {
       "a": "idp",
       "b": "mbx",
       "label": "takes over",
       "style": "attack"
      }
     ],
     "caption": "Each arrow is a place to break the chain: filtering, a user who pauses and reports, phishing-resistant MFA that will not work on the fake page, and alerts on new forwarding rules."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Pause",
       "text": "Do not click links, open attachments or reply."
      },
      {
       "label": "Report",
       "text": "Use the report-phishing button or forward as instructed."
      },
      {
       "label": "If you clicked",
       "text": "Tell IT immediately; do not feel embarrassed."
      },
      {
       "label": "If you entered a password",
       "text": "Change it now from a trusted device and tell IT."
      },
      {
       "label": "Delete",
       "text": "Remove it once reported."
      }
     ],
     "title": "What users should do with a suspicious email"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Antivirus / anti-malware",
       "items": [
        "Signature and behaviour detection",
        "Real-time scanning and scheduled scans",
        "Must be on and up to date"
       ]
      },
      {
       "title": "EDR",
       "items": [
        "Records endpoint activity for investigation",
        "Detects suspicious behaviour chains",
        "Can isolate a device remotely"
       ]
      },
      {
       "title": "Hardening controls",
       "items": [
        "Application allow-listing",
        "Blocking macros from the internet",
        "Host firewall, removal of local admin rights"
       ]
      }
     ],
     "title": "Endpoint protection layers"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-MpComputerStatus | Select-Object AMServiceEnabled, RealTimeProtectionEnabled, AntivirusSignatureLastUpdated",
      "Update-MpSignature",
      "Start-MpScan -ScanType QuickScan",
      "Get-MpThreatDetection | Select-Object -First 5 ThreatID, InitialDetectionTime, ActionSuccess"
     ],
     "title": "Checking built-in protection on Windows",
     "note": "These cmdlets work with the operating system's built-in protection. Third-party tools provide their own consoles."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Isolate",
       "text": "Disconnect the device from the network (unplug Ethernet, turn off Wi-Fi) or isolate it through EDR. Do not power it off unless told to; memory evidence may matter."
      },
      {
       "title": "Report",
       "text": "Raise a security incident and note the time, user, symptoms and what was clicked."
      },
      {
       "title": "Assess scope",
       "text": "Check whether other devices or accounts show the same signs."
      },
      {
       "title": "Clean or rebuild",
       "text": "Follow the security team's direction; rebuilding from a known-good image is often safer than cleaning."
      },
      {
       "title": "Recover",
       "text": "Restore data from clean backups, reset credentials used on the device."
      },
      {
       "title": "Learn",
       "text": "Record the cause and improve controls or training."
      }
     ],
     "title": "Malware response for support staff"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If ransomware or a remote-access trojan is suspected, a clean scan does not prove the device is safe, and the attacker may already have credentials. Isolate, report and follow the incident process.",
     "title": "Do not 'just run a scan and close it'"
    },
    {
     "type": "scenario",
     "situation": "A user at a Dhaka architecture firm calls: files on her laptop and on the shared S: drive now end in `.lockd` and there is a text file demanding payment.",
     "options": [
      {
       "text": "Ask her to keep working while you investigate remotely",
       "feedback": "Encryption may be continuing on the shared drive every second she stays connected.",
       "best": false
      },
      {
       "text": "Delete the ransom note and rename the files back",
       "feedback": "Renaming does not decrypt files and destroys evidence.",
       "best": false
      },
      {
       "text": "Restart the laptop to clear the infection",
       "feedback": "A restart does not remove ransomware and may destroy useful evidence.",
       "best": false
      },
      {
       "text": "Tell her to disconnect from the network immediately, then report a security incident and alert the file server team",
       "feedback": "Correct. Isolation stops further encryption of shared data; rapid reporting starts containment and recovery.",
       "best": true
      }
     ],
     "title": "Files with strange extensions"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Malware",
       "def": "Malicious software designed to damage, disrupt, steal from or gain unauthorised access to systems."
      },
      {
       "term": "Ransomware",
       "def": "Malware that encrypts data or systems and demands payment for their release."
      },
      {
       "term": "Trojan",
       "def": "Malware disguised as legitimate software to trick users into installing it."
      },
      {
       "term": "Phishing",
       "def": "Fraudulent messages that trick people into revealing information, clicking malicious links or opening attachments."
      },
      {
       "term": "Spear phishing",
       "def": "Phishing tailored to a specific person or organisation using researched details."
      },
      {
       "term": "EDR",
       "def": "Endpoint detection and response: tools that monitor endpoint behaviour, detect threats and support investigation and isolation."
      },
      {
       "term": "Application allow-listing",
       "def": "A control that lets only approved applications run on a device."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Most incidents start with phishing or malware, and support hears about them first.",
      "Teach users to pause, report and tell IT at once if they clicked or typed a password.",
      "Verify payment or bank-detail changes through a known contact, never the message itself.",
      "Layer antivirus, EDR and hardening such as allow-listing and macro blocking.",
      "Suspected ransomware: isolate first, report, then follow the incident process."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which malware type spreads across networks without user action?",
       "options": [
        "Trojan",
        "Worm",
        "Keylogger",
        "Adware"
       ],
       "answer": 1,
       "explain": "Worms self-propagate across networks."
      },
      {
       "q": "A PC's fans run loudly at 100% CPU even when idle, with an unknown process using the GPU. What is the most likely malware?",
       "options": [
        "Ransomware",
        "Cryptominer",
        "Rootkit",
        "Phishing"
       ],
       "answer": 1,
       "explain": "Heavy unexplained CPU/GPU use suggests cryptomining."
      },
      {
       "q": "What is the first action when ransomware is suspected on a laptop?",
       "options": [
        "Run a full scan and keep working",
        "Pay the ransom",
        "Delete the encrypted files",
        "Disconnect it from the network"
       ],
       "answer": 3,
       "explain": "Isolation stops the spread to shared drives."
      },
      {
       "q": "Which is a strong sign of phishing?",
       "options": [
        "An email from a known colleague confirming the time of a meeting you both scheduled",
        "A message urging immediate bank detail changes from a lookalike domain",
        "A newsletter you subscribed to",
        "An internal IT announcement on the intranet"
       ],
       "answer": 1,
       "explain": "Urgent payment changes from lookalike domains are classic fraud."
      },
      {
       "q": "What does EDR add beyond traditional antivirus?",
       "options": [
        "Faster internet",
        "Free licences",
        "Automatic backups of every file before any malware can encrypt it",
        "Behaviour recording, investigation and remote isolation"
       ],
       "answer": 3,
       "explain": "EDR records and responds to suspicious activity."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "Encryption, Data Protection and Incident Handling",
   "subtitle": "Protecting data at rest and in transit, and what to do when things go wrong",
   "minutes": 28,
   "objectives": [
    "Explain symmetric and asymmetric encryption, hashing and certificates",
    "Enable and support full-disk encryption and recovery keys",
    "Classify and handle personal and sensitive data correctly",
    "Carry out the support role in a security incident"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Encryption is how we keep data confidential on lost laptops, across public Wi-Fi and in the cloud. Data protection rules decide how personal data may be collected, stored and shared. And when something does go wrong, a clear incident process turns chaos into a coordinated response. Support specialists touch all three every week."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Symmetric encryption",
       "items": [
        "One shared key encrypts and decrypts",
        "Very fast; used for disks and bulk data",
        "Problem: sharing the key safely"
       ]
      },
      {
       "title": "Asymmetric encryption",
       "items": [
        "Public key encrypts or verifies; private key decrypts or signs",
        "Solves key exchange and enables digital signatures",
        "Slower; used to set up sessions"
       ]
      },
      {
       "title": "Hashing",
       "items": [
        "One-way fingerprint of data",
        "Detects changes; stores passwords safely when salted",
        "Cannot be reversed to the original"
       ]
      }
     ],
     "title": "Encryption building blocks"
    },
    {
     "type": "sequence",
     "title": "How HTTPS protects a session",
     "actors": [
      "Browser",
      "Web server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "ClientHello: versions, ciphers, key share"
      },
      {
       "from": 1,
       "to": 0,
       "label": "ServerHello + key share",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Certificate + proof of private key",
       "reply": true,
       "note": "already encrypted in TLS 1.3"
      },
      {
       "from": 0,
       "to": 0,
       "label": "Checks chain, name and dates"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Finished"
      },
      {
       "from": 0,
       "to": 1,
       "label": "HTTP request (encrypted)"
      },
      {
       "from": 1,
       "to": 0,
       "label": "HTTP response (encrypted)",
       "reply": true
      }
     ],
     "caption": "Both sides derive the same session key from their key shares, so the key never crosses the network. A certificate warning means step 4 failed: wrong name, expired, untrusted issuer, or someone intercepting."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A browser certificate warning can mean an expired certificate, a wrong name, an untrusted issuer or an attacker intercepting traffic. Do not teach users to click through. Find the cause, especially on internal systems where an expired certificate is common and fixable.",
     "title": "Certificate warnings are not a nuisance"
    },
    {
     "type": "table",
     "head": [
      "State",
      "Example control",
      "Support tasks"
     ],
     "rows": [
      [
       "At rest on laptops",
       "Full-disk encryption with TPM",
       "Enable, verify status, escrow recovery keys"
      ],
      [
       "At rest on servers and cloud",
       "Volume or service-side encryption",
       "Confirm enabled, control key access"
      ],
      [
       "On removable media",
       "Encrypted USB drives or blocking USB storage",
       "Issue approved drives, enforce policy"
      ],
      [
       "In transit",
       "TLS (HTTPS), VPN, SSH, encrypted email",
       "Fix certificate errors, keep protocols current"
      ]
     ],
     "title": "Data at rest and in transit"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "manage-bde -status C:",
      "manage-bde -protectors -get C:   # shows the recovery password ID to match against escrow",
      "Get-BitLockerVolume | Select-Object MountPoint, VolumeStatus, ProtectionStatus, EncryptionPercentage",
      "# Linux (LUKS): sudo cryptsetup status /dev/mapper/cryptroot",
      "# macOS: fdesetup status"
     ],
     "title": "Checking disk encryption",
     "note": "Recovery keys must be stored in the directory or device management system before a user ever needs one. Never send recovery keys over chat or email without verifying identity."
    },
    {
     "type": "table",
     "head": [
      "Level",
      "Examples",
      "Handling"
     ],
     "rows": [
      [
       "Public",
       "Brochures, published reports",
       "No restrictions"
      ],
      [
       "Internal",
       "Policies, internal memos",
       "Staff only; not on personal accounts"
      ],
      [
       "Confidential",
       "Contracts, salaries, customer lists",
       "Need-to-know access; encrypted when shared externally"
      ],
      [
       "Restricted",
       "Patient records, national ID numbers, card data",
       "Strict access, logging, encryption; follow legal requirements"
      ]
     ],
     "title": "Data classification example"
    },
    {
     "type": "keypoints",
     "items": [
      "Collect and keep only the personal data needed for the task.",
      "Never copy user data to personal devices or unapproved cloud storage.",
      "Wipe or destroy drives before disposal and record it.",
      "Report suspected data breaches immediately; many laws set short notification deadlines.",
      "Respect national data protection laws and sector rules for banks, telecoms and health."
     ],
     "title": "Data protection habits for support staff"
    },
    {
     "type": "cycle",
     "title": "Incident handling phases",
     "center": "Incident response",
     "items": [
      {
       "label": "Prepare",
       "text": "Contacts, tools, playbooks and training in place before anything happens."
      },
      {
       "label": "Detect and analyse",
       "text": "Recognise and confirm the incident; record facts and times."
      },
      {
       "label": "Contain",
       "text": "Isolate devices, disable accounts, block indicators to stop the spread."
      },
      {
       "label": "Eradicate and recover",
       "text": "Remove the cause, rebuild, restore from clean backups, monitor."
      },
      {
       "label": "Learn",
       "text": "Review what happened and improve controls and processes."
      }
     ],
     "caption": "Lessons learned feed back into preparation, so each incident should make the next one smaller. Support staff act mostly in Detect and Contain: notice, report fast and isolate."
    },
    {
     "type": "template",
     "title": "Security incident first report",
     "purpose": "Capture the essential facts the security team needs in the first minutes.",
     "columns": [
      "Time noticed",
      "Reported by",
      "Device / account",
      "What was observed",
      "Actions already taken",
      "Data possibly involved"
     ],
     "example": [
      [
       "2026-05-14 09:12",
       "R. Ahmed (Accounts)",
       "ACC-LT-22 / rahmed",
       "Clicked invoice link, entered password on fake page",
       "Password reset 09:20, sessions revoked, laptop isolated",
       "Supplier payment records (confidential)"
      ]
     ],
     "rows": 6
    },
    {
     "type": "case",
     "title": "A lost laptop at the airport",
     "context": "A sales director of a pharmaceutical company leaves his laptop in a taxi at Dhaka airport on Friday evening. He reports it on Saturday morning. The laptop holds customer price lists and a cached copy of the CRM. Device management shows it last checked in on Friday at 18:40.",
     "questions": [
      "What should the support specialist check and do first?",
      "How does encryption change the risk?",
      "What should be reported, and to whom?"
     ],
     "answer": "**First:** confirm in device management whether full-disk encryption was on and the recovery key escrowed; issue a remote lock and wipe command (it will run when the laptop connects); reset the director's password and revoke sessions; disable any certificates or VPN profiles tied to the device. **Encryption:** if the disk was encrypted and the laptop was locked or off, the data is very likely unreadable, which greatly lowers the risk of a reportable breach. If it was not encrypted, assume the data is exposed. **Reporting:** raise a security incident, inform the security or data protection lead, record the timeline and decisions, and let them decide on any legal or customer notification."
    },
    {
     "type": "scenario",
     "situation": "A user messages the help desk chat: 'My laptop is asking for a recovery key, please send it here, I am in a hurry.' The chat account name matches a real employee.",
     "options": [
      {
       "text": "Send the key in the chat immediately",
       "feedback": "Chat identity is not proof; an attacker with a stolen laptop could request the key this way.",
       "best": false
      },
      {
       "text": "Tell them to reinstall Windows",
       "feedback": "Unnecessary data loss; a verified recovery is the normal fix.",
       "best": false
      },
      {
       "text": "Disable encryption remotely so the key is not needed",
       "feedback": "Not possible from a locked state and would weaken protection.",
       "best": false
      },
      {
       "text": "Verify the user's identity through the approved method, confirm the device, then provide the key through a secure channel and record it",
       "feedback": "Correct. Recovery keys unlock all data on a device, so identity and device checks come first.",
       "best": true
      }
     ],
     "title": "A user asks for a disk encryption recovery key by chat"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Symmetric encryption",
       "def": "Encryption that uses the same secret key to encrypt and decrypt data."
      },
      {
       "term": "Asymmetric encryption",
       "def": "Encryption that uses a public and private key pair, enabling secure key exchange and digital signatures."
      },
      {
       "term": "Hash",
       "def": "A fixed-length, one-way fingerprint of data used to check integrity or store passwords securely."
      },
      {
       "term": "Digital certificate",
       "def": "A file that binds a public key to an identity, signed by a certificate authority."
      },
      {
       "term": "Full-disk encryption",
       "def": "Encryption of an entire storage volume so data is unreadable without the key."
      },
      {
       "term": "Data classification",
       "def": "Labelling data by sensitivity so it receives appropriate protection."
      },
      {
       "term": "Security incident",
       "def": "An event that compromises, or threatens, the confidentiality, integrity or availability of information or systems."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Symmetric keys encrypt bulk data, asymmetric keys solve key exchange and signatures, and hashes detect change.",
      "Encrypt data at rest and in transit, and escrow recovery keys before anyone needs them.",
      "Recovery keys get the same identity checks as a password reset.",
      "Classify data and handle it by its label; report suspected breaches immediately.",
      "Incidents run prepare, detect, contain, eradicate and recover, learn."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which technique detects whether a file has been altered but cannot be reversed?",
       "options": [
        "Hashing",
        "Symmetric encryption",
        "Compression",
        "Asymmetric encryption"
       ],
       "answer": 0,
       "explain": "Hashes are one-way fingerprints."
      },
      {
       "q": "What makes a stolen, powered-off, fully encrypted laptop low risk?",
       "options": [
        "The screen saver",
        "The laptop's serial number being recorded in the asset register",
        "The Wi-Fi password",
        "Data cannot be read without the key"
       ],
       "answer": 3,
       "explain": "Encryption keeps data unreadable without the key."
      },
      {
       "q": "In incident handling, which phase includes isolating devices and disabling accounts?",
       "options": [
        "Prepare",
        "Learn",
        "Detect",
        "Contain"
       ],
       "answer": 3,
       "explain": "Containment stops the spread."
      },
      {
       "q": "Patient records are best classified as:",
       "options": [
        "Public",
        "Internal",
        "Uncontrolled",
        "Restricted"
       ],
       "answer": 3,
       "explain": "Health data needs the highest protection."
      },
      {
       "q": "Which command shows the encryption status of drive C: on Windows?",
       "options": [
        "manage-bde -status C:",
        "chkdsk C:",
        "ipconfig /all",
        "gpupdate /force"
       ],
       "answer": 0,
       "explain": "manage-bde reports drive encryption status."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Automate",
 "title": "Scripting, Documentation and Career Growth",
 "subtitle": "PowerShell and Bash automation, documentation, asset management and the skills to grow your career",
 "outcomes": [
  "Write safe PowerShell and Bash scripts with variables, conditions, loops and error handling",
  "Schedule and scale automation for onboarding, inventory and health checks",
  "Produce runbooks, knowledge articles and asset records that others can rely on",
  "Plan a career path and present job-ready evidence of your skills"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "Scripting Foundations with PowerShell",
   "subtitle": "Variables, objects, pipelines, conditions and loops for Windows support",
   "minutes": 32,
   "objectives": [
    "Explain why support teams automate and what makes a task worth scripting",
    "Use PowerShell variables, objects, the pipeline, conditions and loops",
    "Write, run and safely test a small PowerShell script",
    "Apply execution policy and safe-scripting practices"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every support team has tasks it repeats dozens of times a week: checking disk space, creating accounts, collecting inventory, clearing caches. Scripting turns those tasks into a few seconds of reliable work, frees time for real problems and removes typing mistakes. **PowerShell** is the standard automation shell on Windows: Windows PowerShell 5.1 ships with the OS, and the newer, cross-platform PowerShell 7 also runs on Linux and macOS."
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Time saved per month",
       "expr": "saved = (manual minutes - automated minutes) x runs per month",
       "meaning": "A 12-minute task done 80 times a month, reduced to 1 minute, saves 11 x 80 = 880 minutes (about 14.7 hours)."
      },
      {
       "name": "Payback period",
       "expr": "payback (months) = hours to build and test / hours saved per month",
       "meaning": "If the script takes 10 hours to build and test, it pays back in under a month."
      }
     ],
     "title": "Is it worth automating?"
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "When the script pays back",
     "labels": [
      "Month 0",
      "Month 1",
      "Month 2",
      "Month 3",
      "Month 4",
      "Month 5",
      "Month 6"
     ],
     "series": [
      {
       "name": "Hours invested",
       "values": [
        10,
        10,
        10,
        10,
        10,
        10,
        10
       ]
      },
      {
       "name": "Hours saved (cumulative)",
       "values": [
        0,
        14.7,
        29.3,
        44,
        58.7,
        73.3,
        88
       ]
      }
     ],
     "unit": " h",
     "yLabel": "hours",
     "caption": "Uses the example above: 10 hours to build and test, about 14.7 hours saved each month. The lines cross within the first month; after that every run is pure gain."
    },
    {
     "type": "table",
     "head": [
      "Concept",
      "Example",
      "Meaning"
     ],
     "rows": [
      [
       "Cmdlet (Verb-Noun)",
       "Get-Service",
       "A command; verbs include Get, Set, New, Remove, Start, Stop"
      ],
      [
       "Variable",
       "$limit = 15",
       "Stores a value; names start with $"
      ],
      [
       "Object and property",
       "(Get-Date).DayOfWeek",
       "Output is objects with properties, not plain text"
      ],
      [
       "Pipeline",
       "Get-Process | Sort-Object CPU",
       "Passes objects from one cmdlet to the next"
      ],
      [
       "Filter",
       "Where-Object { $_.Status -eq 'Stopped' }",
       "$_ is the current object in the pipeline"
      ],
      [
       "Comparison",
       "-eq, -ne, -gt, -lt, -like",
       "Operators for conditions"
      ],
      [
       "Help",
       "Get-Help Get-Service -Examples",
       "Built-in documentation with examples"
      ]
     ],
     "title": "PowerShell building blocks"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-Command -Verb Get -Noun *Service*",
      "Get-Service | Where-Object { $_.Status -eq 'Stopped' -and $_.StartType -eq 'Automatic' }",
      "Get-Process | Sort-Object WS -Descending | Select-Object -First 5 Name, @{n='MemMB';e={[math]::Round($_.WS/1MB)}}",
      "Get-ChildItem C:\\Users\\*\\Downloads -Recurse -File | Measure-Object Length -Sum",
      "Get-Service | Export-Csv C:\\Temp\\services.csv -NoTypeInformation"
     ],
     "title": "Exploring with the pipeline"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "# Check-DiskSpace.ps1 - warn when any fixed drive is below a free-space threshold",
      "param([int]$Threshold = 15)",
      "$drives = Get-Volume | Where-Object { $_.DriveLetter -and $_.DriveType -eq 'Fixed' -and $_.Size -gt 0 }",
      "foreach ($d in $drives) {",
      "    $pctFree = [math]::Round(($d.SizeRemaining / $d.Size) * 100, 1)",
      "    if ($pctFree -lt $Threshold) {",
      "        Write-Warning \"Drive $($d.DriveLetter): only $pctFree% free\"",
      "    } else {",
      "        Write-Output \"Drive $($d.DriveLetter): $pctFree% free\"",
      "    }",
      "}",
      "# Run it:  .\\Check-DiskSpace.ps1 -Threshold 20"
     ],
     "title": "A first script: Check-DiskSpace.ps1",
     "note": "The param block makes the threshold adjustable without editing the script. The script only reads information, so it is safe to run anywhere."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A Windows setting that controls whether scripts may run, for example only signed scripts or locally created ones. It is a safety guard against accidentally running scripts, not a security boundary. Organisations usually set it centrally; do not weaken it on a user's PC to run something you downloaded.",
     "title": "Execution policy"
    },
    {
     "type": "keypoints",
     "items": [
      "Read every line of a script before running it, especially from the internet.",
      "Treat AI-generated scripts like forum code: understand and test every line before it runs.",
      "Use `-WhatIf` on cmdlets that change things to preview the effect.",
      "Test in a VM or on a test account before production.",
      "Start with read-only commands; add changes only when the output is correct.",
      "Never put passwords in scripts; use secure credential stores.",
      "Add comments and a header: purpose, author, date, version."
     ],
     "title": "Safe scripting habits"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "Get-ChildItem C:\\Temp\\*.log | Where-Object LastWriteTime -lt (Get-Date).AddDays(-30) | Remove-Item -WhatIf",
      "# Output: What if: Performing the operation \"Remove File\" on target \"C:\\Temp\\old.log\".",
      "# When the list is exactly what you expect, run it again without -WhatIf"
     ],
     "title": "Preview before you change"
    },
    {
     "type": "scenario",
     "situation": "A colleague finds a PowerShell one-liner on a forum that 'speeds up all PCs' and wants to run it on every computer in the office tonight. It downloads and runs a file from an unknown website.",
     "options": [
      {
       "text": "Run it tonight on all PCs since it is popular",
       "feedback": "Running unknown remote code on every PC is a direct route to malware.",
       "best": false
      },
      {
       "text": "Decline to run it; if the goal is valid, write or source a reviewed script, test it in a VM and pilot it",
       "feedback": "Correct. You protect the organisation while still addressing the underlying goal safely.",
       "best": true
      },
      {
       "text": "Change execution policy to Unrestricted so it runs smoothly",
       "feedback": "Weakens protection and still runs unknown code.",
       "best": false
      },
      {
       "text": "Run it on the manager's PC first",
       "feedback": "Testing on a production executive device is the opposite of safe.",
       "best": false
      }
     ],
     "title": "A script from a forum"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Script",
       "def": "A text file of commands that runs as a program to automate a task."
      },
      {
       "term": "Cmdlet",
       "def": "A PowerShell command written in Verb-Noun form, such as Get-Service."
      },
      {
       "term": "Variable",
       "def": "A named storage location for a value, written with a $ prefix in PowerShell and Bash."
      },
      {
       "term": "Pipeline",
       "def": "Passing the output of one command as input to the next, using the | symbol."
      },
      {
       "term": "Loop",
       "def": "A structure that repeats commands, for example for each item in a list."
      },
      {
       "term": "-WhatIf",
       "def": "A PowerShell parameter that shows what a command would do without making changes."
      },
      {
       "term": "Execution policy",
       "def": "A PowerShell setting that controls which scripts are allowed to run on a system."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Automate tasks that are frequent, repetitive and error-prone; check the payback.",
      "PowerShell passes objects through the pipeline; $_ is the current object.",
      "Preview changes with -WhatIf and start with read-only commands.",
      "Parameters make scripts reusable without editing them.",
      "Execution policy prevents accidents but is not a security boundary."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In a PowerShell pipeline, what does $_ represent?",
       "options": [
        "The last error",
        "The script's file name",
        "The current object being processed",
        "An environment variable"
       ],
       "answer": 2,
       "explain": "$_ is the current pipeline object."
      },
      {
       "q": "Which parameter previews the effect of Remove-Item without deleting anything?",
       "options": [
        "-Force",
        "-Recurse",
        "-WhatIf",
        "-Verbose"
       ],
       "answer": 2,
       "explain": "-WhatIf shows what would happen."
      },
      {
       "q": "A task takes 6 minutes manually and runs 100 times a month. A script reduces it to 1 minute. How much time is saved monthly?",
       "options": [
        "100 minutes",
        "500 minutes",
        "600 minutes",
        "60 minutes"
       ],
       "answer": 1,
       "explain": "(6 - 1) x 100 = 500 minutes."
      },
      {
       "q": "Which statement about execution policy is correct?",
       "options": [
        "It prevents accidental script runs and is usually set centrally",
        "It is a strong security boundary that stops malware from running any script at all",
        "It encrypts scripts",
        "It is only for Linux"
       ],
       "answer": 0,
       "explain": "Execution policy prevents accidents but is not a security boundary."
      },
      {
       "q": "Why use a param block in a script?",
       "options": [
        "To hide the code",
        "To make the script run faster by loading its variables before the main code",
        "To pass values, such as a threshold, without editing the script",
        "To sign the script"
       ],
       "answer": 2,
       "explain": "Parameters make scripts reusable."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Bash Scripting for Linux and macOS",
   "subtitle": "Shebangs, variables, tests, loops, exit codes and text tools",
   "minutes": 30,
   "objectives": [
    "Write and run a Bash script with a shebang, variables and arguments",
    "Use conditions, loops and exit codes",
    "Combine text tools such as grep, awk, sort and cut",
    "Make scripts safer with strict modes, quoting and logging"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Bash is the default automation language of Linux servers, cloud instances, network appliances and many developer workstations (macOS uses zsh by default, which runs most Bash scripts with care). Bash scripts glue together small tools that each do one job well, which makes them perfect for health checks, log searches, backups and clean-ups."
    },
    {
     "type": "table",
     "head": [
      "Concept",
      "Example",
      "Notes"
     ],
     "rows": [
      [
       "Shebang",
       "#!/usr/bin/env bash",
       "First line; chooses the interpreter"
      ],
      [
       "Variable",
       "THRESHOLD=85",
       "No spaces around =; use \"$THRESHOLD\""
      ],
      [
       "Arguments",
       "$1, $2, $#, $@",
       "First argument, second, count, all"
      ],
      [
       "Command substitution",
       "today=$(date +%F)",
       "Captures a command's output"
      ],
      [
       "Test",
       "[ -f /etc/hosts ], [ \"$a\" -gt 5 ]",
       "File checks and numeric comparisons"
      ],
      [
       "Exit code",
       "$?",
       "0 means success; anything else is failure"
      ],
      [
       "Make executable",
       "chmod +x script.sh",
       "Then run with ./script.sh"
      ]
     ],
     "title": "Bash building blocks"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "#!/usr/bin/env bash",
      "# disk-check.sh - warn when any file system is above a usage threshold",
      "set -euo pipefail",
      "THRESHOLD=\"${1:-85}\"          # first argument, default 85",
      "df -P -x tmpfs -x devtmpfs | tail -n +2 | while read -r fs size used avail pct mount; do",
      "  usage=$(echo \"$pct\" | tr -d '%')",
      "  if [ \"$usage\" -ge \"$THRESHOLD\" ]; then",
      "    echo \"WARNING: $mount is ${usage}% full\"",
      "  fi",
      "done",
      "# Run it:  chmod +x disk-check.sh && ./disk-check.sh 90"
     ],
     "title": "A health-check script: disk-check.sh",
     "note": "set -euo pipefail stops the script on errors, unset variables and failed pipeline steps, which prevents silent damage."
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "for host in web01 web02 db01; do",
      "  if ping -c 1 -W 2 \"$host\" > /dev/null 2>&1; then",
      "    echo \"$host is up\"",
      "  else",
      "    echo \"$host is DOWN\"",
      "  fi",
      "done"
     ],
     "title": "Loops and exit codes"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "grep 'Failed password' /var/log/auth.log | wc -l                 # how many failed SSH sign-ins",
      "grep 'Failed password' /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head",
      "cut -d: -f1,7 /etc/passwd | grep -v nologin                     # users with login shells",
      "find /var/log -name '*.gz' -mtime +30 -print                    # list old compressed logs first"
     ],
     "title": "Text tools for log analysis",
     "note": "The second line counts failed sign-ins per source address, a quick way to spot brute-force attempts. Always list with -print before you add -delete to a find command."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Unquoted variables split on spaces and expand wildcards. `rm -rf $DIR/` with an empty DIR becomes `rm -rf /`. Always write \"$VAR\", use `set -u` so unset variables stop the script, and test destructive commands with echo first.",
     "title": "Quote your variables"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "PowerShell",
       "items": [
        "Passes objects with properties",
        "Verb-Noun cmdlets, consistent help",
        "Strong for Windows, directory and cloud admin"
       ]
      },
      {
       "title": "Bash",
       "items": [
        "Passes text between small tools",
        "Short commands, huge ecosystem",
        "Strong for Linux servers, containers and network devices"
       ]
      }
     ],
     "title": "PowerShell and Bash side by side"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Write and test",
       "text": "Run the script by hand until the output is correct."
      },
      {
       "label": "Use absolute paths",
       "text": "cron runs with a minimal environment."
      },
      {
       "label": "Edit the crontab",
       "text": "crontab -e for the right user."
      },
      {
       "label": "Add the schedule",
       "text": "30 6 * * * /usr/local/bin/disk-check.sh 90 >> /var/log/disk-check.log 2>&1"
      },
      {
       "label": "Check the log",
       "text": "Confirm it ran at the expected time."
      }
     ],
     "title": "Scheduling a script with cron"
    },
    {
     "type": "table",
     "head": [
      "Field",
      "Range",
      "Example 30 6 * * 1-5"
     ],
     "rows": [
      [
       "Minute",
       "0-59",
       "30"
      ],
      [
       "Hour",
       "0-23",
       "6 (06:30)"
      ],
      [
       "Day of month",
       "1-31",
       "* every day"
      ],
      [
       "Month",
       "1-12",
       "* every month"
      ],
      [
       "Day of week",
       "0-7 (0 and 7 are Sunday)",
       "1-5 Monday to Friday"
      ]
     ],
     "title": "Reading a cron schedule"
    },
    {
     "type": "sequence",
     "title": "What happens when cron runs the health check",
     "actors": [
      "cron",
      "disk-check.sh",
      "df",
      "Log file"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "06:30 Mon-Fri: start script",
       "note": "minimal PATH and environment"
      },
      {
       "from": 1,
       "to": 2,
       "label": "df -P -x tmpfs -x devtmpfs"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Usage per file system",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Compare each % with threshold"
      },
      {
       "from": 1,
       "to": 3,
       "label": "WARNING: /var is 91% full",
       "note": "via >> log 2>&1 in the crontab"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Exit code 0",
       "reply": true
      }
     ],
     "caption": "cron starts the script with a minimal environment, which is why absolute paths matter. Redirecting output to a log file is the only way to see what an unattended run actually did."
    },
    {
     "type": "scenario",
     "situation": "A junior admin wrote a Bash script to delete old files in `$LOGDIR`. On one server the variable was not set and the script removed files from the wrong place before someone stopped it.",
     "options": [
      {
       "text": "Ban scripting for junior staff",
       "feedback": "Removes a valuable skill instead of fixing the unsafe pattern.",
       "best": false
      },
      {
       "text": "Restore from backup, then fix the script with set -u, quoting, a check that the directory exists and a dry-run mode, and review scripts before deployment",
       "feedback": "Correct. You recover the data and remove the root causes: unset variables, missing checks and no review.",
       "best": true
      },
      {
       "text": "Run the script as root so permissions do not block it",
       "feedback": "More privilege would make the damage worse.",
       "best": false
      },
      {
       "text": "Delete the script and do the clean-up manually forever",
       "feedback": "Manual work is slow and also error-prone.",
       "best": false
      }
     ],
     "title": "A clean-up script deleted too much"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Shebang",
       "def": "The first line of a script, such as #!/usr/bin/env bash, which tells the system which interpreter to use."
      },
      {
       "term": "Exit code",
       "def": "A number a command returns when it finishes; 0 means success and other values signal errors."
      },
      {
       "term": "Command substitution",
       "def": "Capturing the output of a command into a variable, written $(command) in Bash."
      },
      {
       "term": "cron",
       "def": "The Linux and macOS scheduler that runs commands at defined times using crontab entries."
      },
      {
       "term": "grep",
       "def": "A tool that searches text for lines matching a pattern."
      },
      {
       "term": "awk",
       "def": "A text-processing tool that splits lines into fields and prints or calculates on them."
      },
      {
       "term": "set -euo pipefail",
       "def": "Bash options that stop a script on errors, unset variables and failed pipeline commands."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Start scripts with a shebang and set -euo pipefail.",
      "Always quote variables and check that target directories exist before deleting.",
      "Exit code 0 means success; test $? or use if to react to failures.",
      "grep, awk, sort and uniq turn logs into answers quickly.",
      "Schedule with cron using absolute paths, and log every run."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does the cron entry `0 2 * * 0` mean?",
       "options": [
        "Every day at 02:00",
        "At 00:02 every day",
        "Every Sunday at 02:00",
        "Every 2 minutes on Sunday"
       ],
       "answer": 2,
       "explain": "Minute 0, hour 2, any day of month, any month, day of week 0 (Sunday)."
      },
      {
       "q": "What exit code indicates success in Bash?",
       "options": [
        "1",
        "0",
        "-1",
        "255"
       ],
       "answer": 1,
       "explain": "Zero means success."
      },
      {
       "q": "Why use `set -u` in a Bash script?",
       "options": [
        "To speed it up",
        "To run as root",
        "To enable coloured output so that warnings stand out in the terminal",
        "To stop the script if an unset variable is used"
       ],
       "answer": 3,
       "explain": "set -u prevents silent use of empty variables."
      },
      {
       "q": "Which command counts the lines containing 'error' in app.log?",
       "options": [
        "grep -c error app.log",
        "cut -d error app.log",
        "awk error app.log",
        "sort error app.log"
       ],
       "answer": 0,
       "explain": "grep -c counts matching lines."
      },
      {
       "q": "What should you do before adding -delete to a find command?",
       "options": [
        "Run it as root",
        "Run it with -print to see which files match",
        "Add sudo twice",
        "Nothing, because find always asks for confirmation before deleting files"
       ],
       "answer": 1,
       "explain": "Listing first prevents deleting the wrong files."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Automating Everyday Support Tasks",
   "subtitle": "Scheduled jobs, onboarding, inventory, logging and version control",
   "minutes": 30,
   "objectives": [
    "Schedule scripts on Windows and Linux",
    "Automate onboarding and inventory collection from structured data",
    "Make automation safe: idempotence, logging, error handling and least privilege",
    "Keep scripts in version control and share them with the team"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Individual scripts save minutes. Automation that runs on a schedule, reads its input from a file and reports what it did saves whole days and makes results consistent. This lesson turns the scripting basics into dependable tools: scheduled health checks, onboarding from a spreadsheet and automatic hardware inventory."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "$action    = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument '-NoProfile -File C:\\Scripts\\Check-DiskSpace.ps1 -Threshold 15'",
      "$trigger   = New-ScheduledTaskTrigger -Daily -At 7am",
      "$principal = New-ScheduledTaskPrincipal -UserId 'SYSTEM' -LogonType ServiceAccount -RunLevel Highest",
      "Register-ScheduledTask -TaskName 'Daily disk check' -Action $action -Trigger $trigger -Principal $principal",
      "Get-ScheduledTaskInfo -TaskName 'Daily disk check'      # last run time and result"
     ],
     "title": "Scheduling a PowerShell script",
     "note": "Run scheduled tasks under the least-privileged account that can do the job. SYSTEM is used here because the check reads all local volumes."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "# newstarters.csv columns: Name,Username,Department,Title",
      "Import-Csv .\\newstarters.csv | ForEach-Object {",
      "    New-ADUser -Name $_.Name -SamAccountName $_.Username -Department $_.Department -Title $_.Title -Enabled $false -WhatIf",
      "}",
      "# Remove -WhatIf when the preview is correct; set passwords and enable accounts in a separate, logged step"
     ],
     "title": "Onboarding from a CSV file (preview first)"
    },
    {
     "type": "topology",
     "title": "Onboarding automation from HR data to SaaS accounts",
     "nodes": [
      {
       "id": "hr",
       "kind": "db",
       "label": "HR system",
       "sub": "new starter record",
       "x": 0,
       "y": 1
      },
      {
       "id": "csv",
       "kind": "doc",
       "label": "CSV / HR feed",
       "sub": "agreed format",
       "x": 2,
       "y": 1
      },
      {
       "id": "job",
       "kind": "process",
       "label": "Onboarding job",
       "sub": "preview, log, idempotent",
       "x": 4,
       "y": 1
      },
      {
       "id": "vault",
       "kind": "vault",
       "label": "Vault",
       "sub": "no secrets in code",
       "x": 2,
       "y": 3
      },
      {
       "id": "dir",
       "kind": "server",
       "label": "Directory",
       "sub": "account + role groups",
       "x": 4,
       "y": 3
      },
      {
       "id": "idp",
       "kind": "idp",
       "label": "Cloud identity",
       "sub": "licences by group",
       "x": 6,
       "y": 3
      },
      {
       "id": "log",
       "kind": "doc",
       "label": "Log and ticket",
       "sub": "every action recorded",
       "x": 2,
       "y": 5
      },
      {
       "id": "saas",
       "kind": "cloud",
       "label": "SaaS apps",
       "sub": "accounts via SCIM",
       "x": 6,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "hr",
       "b": "csv",
       "label": "export"
      },
      {
       "a": "csv",
       "b": "job",
       "label": "input"
      },
      {
       "a": "vault",
       "b": "job",
       "label": "credential",
       "style": "dashed"
      },
      {
       "a": "job",
       "b": "dir",
       "label": "create (disabled)"
      },
      {
       "a": "job",
       "b": "log",
       "label": "log"
      },
      {
       "a": "dir",
       "b": "idp",
       "label": "sync"
      },
      {
       "a": "idp",
       "b": "saas",
       "label": "SCIM"
      }
     ],
     "caption": "HR data drives everything: the job reads an agreed format, takes credentials from a vault, creates disabled accounts in the directory and logs every action. Licences and SaaS accounts then follow from group membership."
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "$cs   = Get-CimInstance Win32_ComputerSystem",
      "$bios = Get-CimInstance Win32_BIOS",
      "$os   = Get-CimInstance Win32_OperatingSystem",
      "[pscustomobject]@{",
      "    Computer = $env:COMPUTERNAME; Model = $cs.Model; Serial = $bios.SerialNumber",
      "    RAMGB = [math]::Round($cs.TotalPhysicalMemory / 1GB); OS = $os.Caption; Build = $os.BuildNumber",
      "    Collected = (Get-Date -Format 'yyyy-MM-dd')",
      "} | Export-Csv -Path \"\\\\fs01\\inventory$\\$env:COMPUTERNAME.csv\" -NoTypeInformation"
     ],
     "title": "Collecting hardware inventory"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "hostnamectl | grep -E 'Static hostname|Operating System|Kernel'",
      "sudo dmidecode -s system-serial-number",
      "lscpu | grep 'Model name'; free -g | awk '/Mem:/ {print \"RAM GB: \" $2}'",
      "ip -br addr | grep -v '^lo'"
     ],
     "title": "Linux inventory one-liner set"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "ID",
       "title": "Idempotent",
       "text": "Running the script twice gives the same result as running it once; check before you create or change."
      },
      {
       "label": "LOG",
       "title": "Logged",
       "text": "Write what was done, when and by which account to a log file or ticket."
      },
      {
       "label": "ERR",
       "title": "Error-aware",
       "text": "Catch errors, stop safely and report failures instead of carrying on."
      },
      {
       "label": "LP",
       "title": "Least privilege",
       "text": "Run with the minimum rights; store credentials in a secure vault."
      },
      {
       "label": "REV",
       "title": "Reviewed",
       "text": "A second person reviews changes; scripts live in version control."
      }
     ],
     "title": "Principles of safe automation"
    },
    {
     "type": "cli",
     "device": "Windows PowerShell",
     "lines": [
      "$log = 'C:\\Logs\\cleanup.log'",
      "try {",
      "    Remove-Item 'C:\\Temp\\Cache\\*' -Recurse -ErrorAction Stop",
      "    Add-Content $log \"$(Get-Date -Format s) OK cache cleared by $env:USERNAME\"",
      "} catch {",
      "    Add-Content $log \"$(Get-Date -Format s) FAILED $($_.Exception.Message)\"",
      "    exit 1",
      "}"
     ],
     "title": "Error handling and logging in PowerShell"
    },
    {
     "type": "cli",
     "device": "Linux host",
     "lines": [
      "git init support-scripts && cd support-scripts",
      "git add disk-check.sh Check-DiskSpace.ps1",
      "git commit -m 'Add disk space checks for Linux and Windows'",
      "git log --oneline",
      "git diff                 # see what changed before the next commit"
     ],
     "title": "Version control basics with git",
     "note": "Version control records who changed what and why, and lets you roll back a bad change. Never commit passwords or keys."
    },
    {
     "type": "template",
     "title": "Script register",
     "purpose": "Keep a catalogue of team scripts so anyone can find, trust and maintain them.",
     "columns": [
      "Script",
      "Purpose",
      "Runs on / schedule",
      "Account used",
      "Owner",
      "Last reviewed",
      "Repository path"
     ],
     "example": [
      [
       "Check-DiskSpace.ps1",
       "Warn when fixed drives fall below 15% free",
       "All Windows servers, daily 07:00",
       "SYSTEM",
       "Service desk lead",
       "2026-06-01",
       "support-scripts/windows/"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "An NGO in Khulna onboards 30 field staff every quarter. HR sends a spreadsheet, and two technicians spend a full day creating accounts by hand, with frequent typos in names and departments.",
     "options": [
      {
       "text": "Keep doing it by hand but double-check everything",
       "feedback": "Still slow and error-prone at this volume.",
       "best": false
      },
      {
       "text": "Agree a fixed CSV format with HR, write a reviewed script that previews with -WhatIf, logs every action and assigns standard groups by role",
       "feedback": "Correct. Structured input, preview, logging and role-based groups make onboarding fast and consistent.",
       "best": true
      },
      {
       "text": "Give HR domain admin rights so they can create accounts themselves",
       "feedback": "Massive over-privilege and loss of IT control.",
       "best": false
      },
      {
       "text": "Create one shared account for all field staff",
       "feedback": "Destroys accountability and breaks security policy.",
       "best": false
      }
     ],
     "title": "Automating new-starter accounts"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Scheduled task",
       "def": "A Windows job that runs a program or script automatically at set times or events."
      },
      {
       "term": "Idempotent",
       "def": "Describes an operation that produces the same result whether it runs once or many times."
      },
      {
       "term": "CSV",
       "def": "Comma-separated values: a simple text format for tabular data used as input and output for scripts."
      },
      {
       "term": "try/catch",
       "def": "A structure that runs code and handles any errors in a controlled way."
      },
      {
       "term": "Version control",
       "def": "A system, such as git, that records changes to files over time with author and reason."
      },
      {
       "term": "Commit",
       "def": "A saved snapshot of changes in a version control repository, with a message describing it."
      },
      {
       "term": "Inventory script",
       "def": "A script that collects hardware and software details from devices for asset records."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Scheduled, logged automation saves days, not minutes.",
      "Drive bulk changes from structured input such as an agreed CSV, and preview first.",
      "Safe automation is idempotent, logged, error-aware, least-privileged and reviewed.",
      "Keep credentials in a vault, never in scripts, CSV files or commits.",
      "Store scripts in version control with a register of owners and schedules."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does idempotent mean for an onboarding script?",
       "options": [
        "It runs only once",
        "It runs very fast",
        "Running it again does not create duplicates or extra changes",
        "It needs no testing because it always produces exactly the same output"
       ],
       "answer": 2,
       "explain": "Idempotent scripts check state before acting, so repeats are safe."
      },
      {
       "q": "Where should a script's credentials be kept?",
       "options": [
        "In a secure credential store or vault",
        "In the script as plain text",
        "In the commit message",
        "In the CSV input file, so HR can update passwords with each new starter"
       ],
       "answer": 0,
       "explain": "Secrets belong in secure stores, never in code."
      },
      {
       "q": "Which git command records staged changes with a message?",
       "options": [
        "git log",
        "git diff",
        "git commit -m 'message'",
        "git init"
       ],
       "answer": 2,
       "explain": "git commit saves a snapshot with a message."
      },
      {
       "q": "Why should a scheduled task run with a least-privileged account?",
       "options": [
        "It runs faster",
        "If the script is misused or buggy, the damage is limited",
        "It avoids logging",
        "It is required for scripts that read CSV files from network shares"
       ],
       "answer": 1,
       "explain": "Limiting rights limits impact."
      },
      {
       "q": "What is the benefit of try/catch with logging?",
       "options": [
        "Errors are hidden",
        "Failures are caught and recorded instead of silently ignored",
        "The script can no longer fail, because every error is automatically retried",
        "It replaces testing"
       ],
       "answer": 1,
       "explain": "Error handling makes failures visible and safe."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Documentation, Knowledge and Asset Management",
   "subtitle": "Writing things down so the organisation, not just one person, knows how IT works",
   "minutes": 26,
   "objectives": [
    "Choose the right type of IT documentation for each need",
    "Write runbooks and knowledge articles that others can follow",
    "Run an asset lifecycle from purchase to disposal",
    "Track licences, warranties and total cost of ownership"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "If the only person who knows how the VPN is configured goes on leave, the organisation has a problem. Good documentation and asset records turn individual knowledge into organisational knowledge. They speed up troubleshooting, make audits painless and let new staff become useful in days rather than months."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Purpose",
      "Example"
     ],
     "rows": [
      [
       "Network diagram",
       "Show how things connect",
       "Office LAN, Wi-Fi, firewall, ISP links"
      ],
      [
       "Runbook / procedure",
       "Exact steps for a routine or emergency task",
       "Restore the file server from backup"
      ],
      [
       "Knowledge article",
       "Help users or technicians fix a known issue",
       "'Printer shows offline' fix"
      ],
      [
       "Configuration record",
       "Current settings of a system",
       "DHCP scopes, firewall rules, Wi-Fi SSIDs"
      ],
      [
       "Policy / standard",
       "Rules everyone must follow",
       "Password and acceptable use policy"
      ],
      [
       "Change log",
       "What changed, when, by whom and why",
       "Firewall rule added for new vendor"
      ]
     ],
     "title": "Types of IT documentation"
    },
    {
     "type": "keypoints",
     "items": [
      "Start with the purpose and who the document is for.",
      "Use numbered steps, one action per step, with expected results.",
      "Include screenshots or command output where helpful.",
      "State prerequisites: access, tools, maintenance windows.",
      "Add an owner and a review date; outdated documents are dangerous.",
      "Store documents in one searchable place, never on personal drives."
     ],
     "title": "Writing documentation people actually use"
    },
    {
     "type": "template",
     "title": "Runbook",
     "purpose": "A step-by-step procedure that any trained technician can follow under pressure.",
     "columns": [
      "Step",
      "Action",
      "Expected result",
      "If it fails"
     ],
     "example": [
      [
       "1",
       "Confirm the latest successful backup of FS01 in the backup console",
       "Job shows 'Success' within the last 24 hours",
       "Escalate to the backup owner before continuing"
      ],
      [
       "2",
       "Restore the requested folder to D:\\Restore\\<ticket number>",
       "Files appear with original timestamps",
       "Check restore job log; retry from previous backup"
      ]
     ],
     "rows": 8
    },
    {
     "type": "cycle",
     "title": "The IT asset lifecycle",
     "center": "Asset register",
     "items": [
      {
       "label": "Plan and buy",
       "text": "Standard models, approved suppliers, budget."
      },
      {
       "label": "Receive and tag",
       "text": "Asset tag, serial number, warranty and owner recorded."
      },
      {
       "label": "Deploy",
       "text": "Imaged, enrolled in management, assigned to a user."
      },
      {
       "label": "Maintain",
       "text": "Patches, repairs, moves and upgrades recorded."
      },
      {
       "label": "Retire",
       "text": "Data wiped, record updated, disposal or reuse."
      }
     ],
     "caption": "Retirement feeds the next purchase plan, so lifecycle dates in the register drive the refresh budget. Wiping data at Retire is never optional."
    },
    {
     "type": "table",
     "head": [
      "Field",
      "Example"
     ],
     "rows": [
      [
       "Asset tag",
       "ZZ-LT-0412"
      ],
      [
       "Type, make and model",
       "Laptop, 14-inch business model"
      ],
      [
       "Serial number",
       "5CG3281XYZ"
      ],
      [
       "Assigned user and location",
       "S. Islam, Dhaka HQ, 4th floor"
      ],
      [
       "Purchase date and cost",
       "2025-08-14, BDT 115,000"
      ],
      [
       "Warranty end",
       "2028-08-13"
      ],
      [
       "Status",
       "In use / in repair / in stock / retired"
      ]
     ],
     "title": "What an asset record should hold"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Straight-line depreciation",
       "expr": "annual depreciation = (cost - residual value) / useful life in years",
       "meaning": "A BDT 120,000 laptop with BDT 20,000 residual over 4 years depreciates BDT 25,000 a year."
      },
      {
       "name": "Total cost of ownership",
       "expr": "TCO = purchase + (annual support + licences + energy) x years + disposal",
       "meaning": "TCO, not purchase price, is the fair way to compare devices or services."
      },
      {
       "name": "Refresh planning",
       "expr": "devices due = assets with (purchase date + useful life) within the next 12 months",
       "meaning": "Lets you budget replacements a year ahead."
      }
     ],
     "title": "Lifecycle and cost maths"
    },
    {
     "type": "chart",
     "kind": "line",
     "title": "Book value of a BDT 120,000 laptop (straight-line)",
     "labels": [
      "Year 0",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4"
     ],
     "series": [
      {
       "name": "Book value",
       "values": [
        120000,
        95000,
        70000,
        45000,
        20000
       ]
      }
     ],
     "unit": " BDT",
     "yLabel": "BDT",
     "caption": "Straight-line depreciation removes the same BDT 25,000 each year until the residual value is reached. Book value is an accounting figure: a device can stay useful after it, or become unsafe before it if OS support ends."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "When every ticket is linked to an asset record, patterns jump out: one laptop model with repeated keyboard failures, or a printer generating 40% of all print tickets. That evidence wins budget arguments.",
     "title": "Link assets, tickets and users"
    },
    {
     "type": "case",
     "title": "The undocumented network",
     "context": "A private school in Sylhet hired a new IT officer after the previous one left without notice. There is no network diagram, the Wi-Fi admin password is unknown, licences for the lab software expire 'sometime this year' and 30 laptops have no asset records. Parents complain that the online learning portal is slow.",
     "questions": [
      "What should the new IT officer document first, and why?",
      "How should the asset and licence situation be fixed?",
      "How can documentation stay current after this effort?"
     ],
     "answer": "**First:** regain administrative access securely (reset device admin credentials through official recovery procedures and store them in a password manager), then map the network: ISP links, firewall, switches, access points and addressing. Without this, the slow portal cannot be diagnosed. **Assets and licences:** run an inventory script and a physical audit, tag every device, record serials, users and warranty dates, and list every licence with expiry dates and renewal owners; set reminders 60 days before expiry. **Keep current:** add 'update documentation' to the change and ticket closure checklists, give each document an owner and review date, and review the asset register each term."
    },
    {
     "type": "scenario",
     "situation": "A leaver returns a laptop. A manager wants to give it straight to a new employee starting tomorrow 'to save time'.",
     "options": [
      {
       "text": "Hand it over as it is",
       "feedback": "The leaver's data, accounts and possible problems would pass to the new user.",
       "best": false
      },
      {
       "text": "Delete the leaver's desktop files only",
       "feedback": "Leaves data in other locations and cached credentials.",
       "best": false
      },
      {
       "text": "Check its condition, back up any required business data, wipe and reimage it, update the asset record with the new user, then issue it",
       "feedback": "Correct. This protects data, gives the new user a clean standard build and keeps records accurate.",
       "best": true
      },
      {
       "text": "Put it in a cupboard without updating records",
       "feedback": "Assets that disappear from records are lost, stolen or forgotten.",
       "best": false
      }
     ],
     "title": "A laptop returned by a leaver"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Runbook",
       "def": "A documented, step-by-step procedure for carrying out a routine or emergency operational task."
      },
      {
       "term": "Network diagram",
       "def": "A drawing that shows network devices, connections, addressing and links."
      },
      {
       "term": "Asset tag",
       "def": "A unique label attached to a device and used to identify it in the asset register."
      },
      {
       "term": "Asset register",
       "def": "A record of an organisation's IT assets with details such as owner, location, cost and status."
      },
      {
       "term": "CMDB",
       "def": "Configuration management database: a record of IT components and the relationships between them."
      },
      {
       "term": "Total cost of ownership",
       "def": "The full cost of an asset over its life, including purchase, support, licences, energy and disposal."
      },
      {
       "term": "Depreciation",
       "def": "The reduction in an asset's book value over its useful life."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Documentation turns one person's knowledge into the organisation's knowledge.",
      "Write runbooks with numbered steps, expected results and what to do if a step fails.",
      "Track every asset from purchase to disposal and wipe data before reuse.",
      "Compare options by total cost of ownership, not purchase price.",
      "Give every document an owner and a review date."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which document gives exact steps to restore a server from backup under pressure?",
       "options": [
        "Policy",
        "Runbook",
        "Network diagram",
        "Change log"
       ],
       "answer": 1,
       "explain": "Runbooks contain step-by-step procedures."
      },
      {
       "q": "A BDT 100,000 printer with BDT 10,000 residual value over 3 years depreciates how much each year?",
       "options": [
        "BDT 33,333",
        "BDT 36,667",
        "BDT 10,000",
        "BDT 30,000"
       ],
       "answer": 3,
       "explain": "(100,000 - 10,000) / 3 = 30,000."
      },
      {
       "q": "What must happen before a returned laptop is reissued?",
       "options": [
        "Nothing",
        "Only change the wallpaper",
        "Delete the browser history and the previous user's desktop shortcuts only",
        "Back up needed data, wipe and reimage, update the asset record"
       ],
       "answer": 3,
       "explain": "Wiping and recording protect data and keep records accurate."
      },
      {
       "q": "Why should each document have an owner and review date?",
       "options": [
        "So it is kept accurate and someone is accountable for updates",
        "To make it longer",
        "For printing",
        "To restrict who can read it, so that only the owner sees the latest version"
       ],
       "answer": 0,
       "explain": "Ownership and review prevent outdated documentation."
      },
      {
       "q": "Linking tickets to asset records helps most with:",
       "options": [
        "Choosing wallpaper",
        "Speeding up Wi-Fi by matching each laptop to its nearest access point",
        "Spotting models or devices with repeated failures",
        "Encrypting disks"
       ],
       "answer": 2,
       "explain": "Patterns across tickets and assets reveal problem devices."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "Career Skills for IT Support Professionals",
   "subtitle": "From first job to a growing career in infrastructure, cloud or security",
   "minutes": 24,
   "objectives": [
    "Build a CV, portfolio and home lab that prove job-ready skills",
    "Answer technical and behavioural interview questions with structure",
    "Map career paths from IT support to specialist roles",
    "Create a personal learning plan and act ethically as a trusted professional"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "IT support is one of the best entry points into technology. It exposes you to every part of IT, from hardware to cloud, and teaches the communication skills specialists often lack. The people who grow fastest treat every ticket as a lesson, document what they learn and keep building skills deliberately."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "CV",
       "items": [
        "One or two pages, clear headings",
        "Skills section matched to the job advert",
        "Achievements with numbers: 'cut onboarding time from 4 h to 1 h with a script'",
        "Certifications and projects, not just duties"
       ]
      },
      {
       "title": "Portfolio",
       "items": [
        "Home-lab write-ups with screenshots",
        "Scripts in a public repository (no secrets)",
        "Sample knowledge-base articles",
        "Your ZITSS capstone pack"
       ]
      },
      {
       "title": "Home lab",
       "items": [
        "Old PC or laptop with a type 2 hypervisor",
        "Windows and Linux VMs, a domain, DHCP and DNS",
        "A free cloud tier for SaaS and IaaS practice",
        "Break things on purpose and document the fix"
       ]
      }
     ],
     "title": "Proving your skills"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "S",
       "title": "Situation",
       "text": "Set the scene briefly: where, when, who."
      },
      {
       "label": "T",
       "title": "Task",
       "text": "What you were responsible for."
      },
      {
       "label": "A",
       "title": "Action",
       "text": "What you did, step by step, using 'I' not 'we'."
      },
      {
       "label": "R",
       "title": "Result",
       "text": "What changed, ideally with numbers, and what you learned."
      }
     ],
     "title": "STAR: answering behavioural questions"
    },
    {
     "type": "table",
     "head": [
      "Question",
      "What the interviewer wants to see"
     ],
     "rows": [
      [
       "'A user cannot reach the internet. Walk me through it.'",
       "A layered method: link, IP, gateway, DNS, service"
      ],
      [
       "'Tell me about a time you handled an angry user.'",
       "Empathy, calm, ownership, a positive result (use STAR)"
      ],
      [
       "'What is the difference between DNS and DHCP?'",
       "Clear fundamentals explained simply"
      ],
      [
       "'How do you prioritise several urgent tickets?'",
       "Impact and urgency, SLA awareness, communication"
      ],
      [
       "'What have you automated?'",
       "Initiative and practical scripting"
      ],
      [
       "'What would you do if you did not know the answer?'",
       "Honesty, research skills and escalation judgement"
      ]
     ],
     "title": "Common interview questions and what they test"
    },
    {
     "type": "tree",
     "title": "Where IT support can lead",
     "root": {
      "label": "IT support",
      "text": "Service desk, desktop support",
      "children": [
       {
        "label": "Systems administration",
        "text": "Sysadmin, Windows/Linux engineer. Build: directory, scripting, virtualisation"
       },
       {
        "label": "Networking",
        "text": "Network technician or engineer. Build: routing, switching, Wi-Fi, firewalls"
       },
       {
        "label": "Cloud",
        "text": "Cloud support or engineer. Build: IaaS, identity, infrastructure as code, cost"
       },
       {
        "label": "Security",
        "text": "SOC analyst, security engineer. Build: logs, incident response, vulnerabilities"
       },
       {
        "label": "Service management",
        "text": "Desk lead, IT service manager. Build: ITSM, metrics, leadership"
       },
       {
        "label": "Modern workplace",
        "text": "Endpoint or SaaS admin. Build: MDM, app packaging, SaaS admin"
       }
      ]
     },
     "caption": "Every branch starts from skills you use daily in support. Pick one direction, then build lab evidence for the skills listed under it."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Vendor and independent certifications help CVs pass screening, but interviewers test whether you can actually troubleshoot and communicate. Pair every certificate with a lab project or work example that shows you can apply it.",
     "title": "Certificates open doors, skills keep you in the room"
    },
    {
     "type": "keypoints",
     "items": [
      "Access only what a task requires, even when your rights allow more.",
      "Keep users' data and conversations confidential.",
      "Never install pirated software or bypass licensing.",
      "Use AI tools within policy: no confidential data in unapproved tools, and verify every output.",
      "Report security issues and mistakes, including your own, quickly.",
      "Be honest about what you do not know and about timelines.",
      "Treat every user with the same respect, whatever their role."
     ],
     "title": "Professional ethics for IT support"
    },
    {
     "type": "template",
     "title": "90-day learning plan",
     "purpose": "Turn career goals into weekly, measurable learning actions.",
     "columns": [
      "Goal",
      "Skill or topic",
      "Resource or lab",
      "Evidence of progress",
      "Target date"
     ],
     "example": [
      [
       "Move towards a sysadmin role",
       "PowerShell automation",
       "Automate onboarding in the home-lab domain",
       "Script in repository with README and demo video",
       "2026-09-30"
      ]
     ],
     "rows": 6
    },
    {
     "type": "scenario",
     "situation": "You have two offers: a service desk role at a large bank in Dhaka with structured training, shift work and rotation into infrastructure teams after a year, or a 'solo IT person' role at a 20-person start-up with a higher salary but no senior colleagues.",
     "options": [
      {
       "text": "Weigh learning, mentoring, progression and your goals; for most newcomers, the structured role with rotation builds stronger foundations",
       "feedback": "Correct. Mentoring and exposure to mature processes accelerate early careers, though the right choice depends on your goals and circumstances.",
       "best": true
      },
      {
       "text": "Always pick the higher salary",
       "feedback": "Salary matters, but early-career learning and mentoring often matter more for long-term growth.",
       "best": false
      },
      {
       "text": "Accept both and decide later",
       "feedback": "Unprofessional and damages your reputation.",
       "best": false
      },
      {
       "text": "Reject both and wait for a perfect offer",
       "feedback": "Experience compounds; waiting rarely brings a perfect role.",
       "best": false
      }
     ],
     "title": "Your first job offer decision"
    },
    {
     "type": "reflection",
     "prompt": "Look back over the eight stages of the ZITSS Support Path. Which stage is your strongest, and which needs the most work? Write three specific actions for the next 30 days that will strengthen your weakest stage."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Home lab",
       "def": "A personal practice environment of physical or virtual machines used to build and test IT skills safely."
      },
      {
       "term": "Portfolio",
       "def": "A collection of work samples, such as lab write-ups, scripts and articles, that proves practical skills."
      },
      {
       "term": "STAR method",
       "def": "A structure for answering behavioural interview questions: situation, task, action, result."
      },
      {
       "term": "Behavioural question",
       "def": "An interview question about how you handled real situations in the past."
      },
      {
       "term": "Career path",
       "def": "A planned sequence of roles and skills leading towards a long-term professional goal."
      },
      {
       "term": "Continuous learning",
       "def": "The ongoing habit of updating skills as technology and practices change."
      },
      {
       "term": "Professional ethics",
       "def": "Principles of honest, confidential and responsible conduct expected of trusted IT staff."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Prove skills with evidence: measurable CV lines, a portfolio and home-lab write-ups.",
      "Answer behavioural questions with STAR, using 'I' for your own actions.",
      "Support leads to systems, networking, cloud, security, service management or modern workplace roles.",
      "Pair every certificate with a project that shows you can apply it.",
      "Ethics, honesty and confidentiality are what make a support professional trusted."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In the STAR method, what does the 'A' describe?",
       "options": [
        "The audience",
        "The approval you received",
        "The actions you personally took",
        "The amount of time spent"
       ],
       "answer": 2,
       "explain": "Action is what you did."
      },
      {
       "q": "Which CV line is strongest?",
       "options": [
        "Responsible for tickets",
        "Reduced new-starter set-up from 4 hours to 1 hour by scripting onboarding",
        "Helped users with IT",
        "Hard-working, passionate team player with excellent communication skills and a positive attitude"
       ],
       "answer": 1,
       "explain": "Specific, measurable achievements are most persuasive."
      },
      {
       "q": "What is the best way to show cloud skills without work experience?",
       "options": [
        "List cloud vendor names",
        "Claim experience you do not have, then learn the details quickly after being hired",
        "Only read blog posts",
        "Build and document projects in a free cloud tier and home lab"
       ],
       "answer": 3,
       "explain": "Documented hands-on projects provide evidence."
      },
      {
       "q": "An interviewer asks something you do not know. What should you do?",
       "options": [
        "Make up a confident answer, because admitting gaps always loses the job offer",
        "Change the subject",
        "Refuse to answer",
        "Admit it, explain how you would find out and link it to what you know"
       ],
       "answer": 3,
       "explain": "Honesty plus a method shows professional judgement."
      },
      {
       "q": "Which behaviour reflects professional ethics?",
       "options": [
        "Reading users' emails when bored",
        "Installing pirated tools to save the organisation money on licences",
        "Hiding your own mistakes",
        "Accessing only the data a task requires"
       ],
       "answer": 3,
       "explain": "Least access and honesty are core ethical behaviours."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
  "q": "A sales manager moves to the marketing department. Six months later an audit shows she can still open confidential sales pricing files. Which process failed?",
  "options": [
   "The joiner process",
   "The backup process",
   "The patching process",
   "The mover process"
  ],
  "answer": 3,
  "explain": "When people change roles, old group memberships must be removed on the day of the move. Joiner covers new starters, and backup and patching do not control access."
 },
 {
  "module": "m5",
  "q": "A user is a member of two groups on a folder: one grants Modify, the other has an explicit Deny on Write. What is the user's effective permission?",
  "options": [
   "Modify, because allows are combined",
   "Full control",
   "No access at all to the folder or its contents",
   "Read access only; the deny blocks writing"
  ],
  "answer": 3,
  "explain": "Explicit deny entries override allows, so write-related actions are blocked while read remains. Allows do not cancel a deny, and nothing grants full control or removes read."
 },
 {
  "module": "m5",
  "q": "A help desk receives a call: 'This is the CFO, I am travelling and locked out. Reset my password and read the new one to me now.' The number is unknown. What should the technician do?",
  "options": [
   "Verify identity first, for example by calling back on the directory number",
   "Reset the password and read it out, because the CFO is senior and the request is urgent",
   "Refuse to help at all",
   "Email the new password to the CFO's personal address"
  ],
  "answer": 0,
  "explain": "Urgency and seniority are classic social-engineering pressure; the approved verification protects the account. Refusing outright is unhelpful, and sending passwords to personal email is insecure."
 },
 {
  "module": "m5",
  "q": "After moving computer objects into a new 'Kiosks' OU, a screen-lock policy no longer applies to those PCs. What should the technician check first?",
  "options": [
   "Whether the PCs have enough RAM",
   "Whether DNS has an MX record",
   "Whether the screen-lock GPO is linked to (or inherited by) the new OU",
   "Whether users have local admin rights"
  ],
  "answer": 2,
  "explain": "Policy follows OU links and inheritance; the move is the change that matches the timing. RAM, MX records and admin rights do not determine policy scope."
 },
 {
  "module": "m5",
  "q": "Management says the order system can lose at most 30 minutes of data and must be back within 4 hours. Which backup design meets this?",
  "options": [
   "Nightly full backups only",
   "Weekly full backups with monthly tests",
   "Backups or replication at least every 30 minutes, with restores proven under 4 hours",
   "A RAID 1 mirror on the order server, relying on the mirror instead of separate backups"
  ],
  "answer": 2,
  "explain": "The RPO needs copies at least every 30 minutes and the RTO needs a proven restore time. Nightly or weekly backups lose too much, and RAID is not a backup."
 },
 {
  "module": "m5",
  "q": "A clinic's backup job reports 'success' every night, but no one has ever restored from it. What is the most important next step?",
  "options": [
   "Buy a larger backup disk",
   "Change the job to run twice a night",
   "Switch from incremental to full backups",
   "Perform and document a test restore, timed against the RTO"
  ],
  "answer": 3,
  "explain": "Only a test restore proves the backup is usable and fast enough. More capacity, frequency or type changes do not prove recoverability."
 },
 {
  "module": "m5",
  "q": "A critical vulnerability in VPN gateways is being actively exploited worldwide. The normal patch cycle is monthly. What should the IT team do?",
  "options": [
   "Wait for the next monthly cycle",
   "Disable all remote user accounts until the next monthly patch cycle is complete",
   "Patch only desktop PCs",
   "Patch the VPN gateways first through the emergency change process"
  ],
  "answer": 3,
  "explain": "Actively exploited flaws on internet-facing systems justify an emergency change, prioritising exposed devices. Waiting leaves the door open, and the other actions miss the target."
 },
 {
  "module": "m5",
  "q": "A Linux administrator runs `sudo usermod -G finance rafiq` to add Rafiq to the finance group. Afterwards Rafiq loses access to the developers' files. Why?",
  "options": [
   "The finance group has a deny rule",
   "The developers' folder was deleted",
   "Without -a, usermod replaced Rafiq's supplementary groups with only finance",
   "Linux allows only one group per user"
  ],
  "answer": 2,
  "explain": "-G alone sets the full list of supplementary groups, removing developers; -aG appends. Linux supports many groups per user, and nothing suggests deletion or deny rules."
 },
 {
  "module": "m6",
  "q": "Users across one office suddenly fail to sign in, and some see certificate errors saying 'not yet valid'. Network and DNS checks pass. What should the technician check next?",
  "options": [
   "The print server's queues",
   "The size of users' mailboxes",
   "Clock synchronisation on domain controllers and clients",
   "The RAID level and free disk space on the main file server"
  ],
  "answer": 2,
  "explain": "Clock differences break ticket-based authentication and certificate validity checks. Print queues, mailbox size and RAID level do not cause sign-in and certificate errors together."
 },
 {
  "module": "m6",
  "q": "A small office server uses RAID 5 with four disks. One disk has failed and the array is rebuilding. What is the most important immediate action?",
  "options": [
   "Add a fifth disk to increase capacity",
   "Confirm a current backup and avoid heavy load until the rebuild ends",
   "Convert the array to RAID 0 for speed",
   "Delete old files from the array so that the rebuild finishes more quickly"
  ],
  "answer": 1,
  "explain": "A second failure during a RAID 5 rebuild loses the array, so a current backup and a careful rebuild are vital. Expanding, converting or deleting files add risk without protecting data."
 },
 {
  "module": "m6",
  "q": "A company moves its accounting application to IaaS virtual machines in the cloud. Who is responsible for applying operating system security patches to those VMs?",
  "options": [
   "The cloud provider",
   "The accounting software vendor",
   "The internet service provider",
   "The company's own IT team"
  ],
  "answer": 3,
  "explain": "In IaaS the customer manages the guest OS and everything above it. The provider handles the physical and virtualisation layers, and the vendor and ISP do not patch your VMs."
 },
 {
  "module": "m6",
  "q": "An employee resigns and leaves today. Her manager needs her emails and files for the next three months. What is the best offboarding approach in the cloud suite?",
  "options": [
   "Delete her account immediately to free the licence",
   "Leave the account active and give the manager her password so he can sign in as her",
   "Block sign-in, revoke sessions, delegate the mailbox and transfer her files",
   "Forward all her mail to her personal address"
  ],
  "answer": 2,
  "explain": "This removes her access while preserving data for the business. Deleting loses data, sharing her sign-in removes accountability and forwarding to a personal address leaks data."
 },
 {
  "module": "m6",
  "q": "During an investigation of a compromised mailbox, what should the administrator check early because attackers commonly use it to steal mail silently?",
  "options": [
   "Inbox and forwarding rules that send mail to external addresses",
   "The mailbox's display picture",
   "The user's calendar colour",
   "The licence renewal date"
  ],
  "answer": 0,
  "explain": "Malicious forwarding and inbox rules are a common way to exfiltrate mail. Pictures, colours and licence dates are unrelated."
 },
 {
  "module": "m6",
  "q": "A web service had 2 hours of downtime in a 30-day month (720 hours). The SLA promises 99.9% availability. Was the SLA met?",
  "options": [
   "No, availability was about 99.72%, below 99.9%",
   "Yes, availability was about 99.97%",
   "Yes, because downtime under a day always meets SLAs",
   "It cannot be calculated without knowing user numbers"
  ],
  "answer": 0,
  "explain": "(720 - 2) / 720 = 99.72%, which misses 99.9% (about 43 minutes allowed per month). User numbers are not needed."
 },
 {
  "module": "m6",
  "q": "A vendor asks for Remote Desktop to be exposed directly to the internet so they can support a server. What is the most appropriate alternative?",
  "options": [
   "Change the RDP port to a high, random number and then expose it to the internet",
   "Use a VPN or gateway with MFA and a named, time-limited account",
   "Share an administrator password by email",
   "Disable the firewall during support sessions"
  ],
  "answer": 1,
  "explain": "A gateway or VPN with MFA, logging and limited time controls the risk. Changing ports, emailing passwords or disabling the firewall all leave the server exposed."
 },
 {
  "module": "m7",
  "q": "A caller says he is the new regional manager, is about to present to the board and needs MFA moved to his new phone immediately. He cannot answer the verification questions. What should the help desk do?",
  "options": [
   "Follow the verification procedure and decline until identity is confirmed",
   "Move MFA to the new phone because he is senior, in a hurry and sounds convincing",
   "Disable MFA for him until tomorrow",
   "Ask a colleague to vouch for his voice"
  ],
  "answer": 0,
  "explain": "Urgency and seniority are typical pretexting tactics; MFA changes require verified identity. Disabling MFA or relying on voice recognition creates the opening attackers want."
 },
 {
  "module": "m7",
  "q": "A user received 25 sign-in approval prompts overnight and approved none. What is the best interpretation and response?",
  "options": [
   "The MFA app is faulty; reinstall it on the user's phone and re-register it",
   "It is normal background activity",
   "Someone likely has the password; reset it and revoke sessions",
   "Disable MFA to stop the prompts"
  ],
  "answer": 2,
  "explain": "Unexpected prompts mean the password is likely known to an attacker, so reset and investigate. Reinstalling, ignoring or disabling MFA leaves the account at risk."
 },
 {
  "module": "m7",
  "q": "Which change would most reduce the risk of account takeover by phishing for administrators?",
  "options": [
   "Phishing-resistant MFA such as FIDO2 security keys or passkeys",
   "Forcing password changes every 30 days",
   "Adding a security question",
   "Requiring 8-character passwords with symbols"
  ],
  "answer": 0,
  "explain": "Phishing-resistant MFA cannot be replayed on fake sites. Frequent changes, security questions and short complex passwords do not stop credential phishing."
 },
 {
  "module": "m7",
  "q": "A user reports that files on the shared drive are being renamed with an unknown extension while she watches. What should the support specialist instruct first?",
  "options": [
   "Keep the file open so it is not lost",
   "Run disk defragmentation",
   "Disconnect it from the network now and report an incident",
   "Restore the files one by one from backup while still connected"
  ],
  "answer": 2,
  "explain": "Active ransomware must be isolated at once to stop further encryption. Keeping files open, defragmenting or restoring while still infected spreads the damage."
 },
 {
  "module": "m7",
  "q": "An accounts officer receives an email from a known supplier's lookalike domain asking to change bank details before today's payment. What is the correct action?",
  "options": [
   "Update the bank details because the invoice, logo and signature all look genuine",
   "Phone the supplier on the number on file to verify, and report the email",
   "Reply to the email to confirm",
   "Forward it to all colleagues as a warning"
  ],
  "answer": 1,
  "explain": "Out-of-band verification through known contacts defeats payment diversion fraud, and reporting lets IT block it. Replying reaches the attacker, and mass forwarding spreads the malicious message."
 },
 {
  "module": "m7",
  "q": "A laptop with full-disk encryption and an escrowed recovery key is stolen while powered off. What is the main remaining action for IT?",
  "options": [
   "Revoke its sessions and certificates, send a remote wipe and log it",
   "No action is needed at all",
   "Change the office Wi-Fi password only",
   "Reset every user's password company-wide in case the laptop is unlocked"
  ],
  "answer": 0,
  "explain": "Encrypted data is protected, but the device's tokens and certificates should be revoked and the loss recorded. Ignoring it, changing Wi-Fi only or mass resets are inappropriate."
 },
 {
  "module": "m7",
  "q": "A risk assessment rates an unpatched internet-facing server at likelihood 4 and impact 5, and a lost-badge risk at likelihood 3 and impact 2. Which should be addressed first and why?",
  "options": [
   "The badge risk, because badges are physical",
   "Both equally, because all risks are equal",
   "Neither until the annual review",
   "The server risk, scoring 20 against 6"
  ],
  "answer": 3,
  "explain": "Using likelihood x impact, the server scores 20 and the badge 6, so the server takes priority. Risks are not equal, and waiting leaves a high risk open."
 },
 {
  "module": "m7",
  "q": "Users keep clicking through a certificate warning on the internal HR portal. What should IT do?",
  "options": [
   "Tell users that clicking through warnings is fine for internal sites",
   "Disable certificate checks in browsers",
   "Move the HR portal to HTTP",
   "Fix the cause, such as an expired or misnamed certificate"
  ],
  "answer": 3,
  "explain": "Fixing the certificate removes the warning properly and keeps users wary of real attacks. Training users to ignore warnings, disabling checks or dropping encryption weakens security."
 },
 {
  "module": "m8",
  "q": "A technician wants a PowerShell command that deletes log files older than 30 days from a shared folder. What should be done before running it for real?",
  "options": [
   "Run it as a domain administrator to avoid errors",
   "Run it with -WhatIf and check the list of files it would remove",
   "Change execution policy to Unrestricted",
   "Run it twice to make sure it worked"
  ],
  "answer": 1,
  "explain": "-WhatIf previews exactly which files would be deleted so mistakes are caught. Extra privilege, weaker policy or repeated runs do nothing to prevent deleting the wrong files."
 },
 {
  "module": "m8",
  "q": "A Bash clean-up script uses `rm -rf \"$TARGET\"/*`. On one server TARGET was empty and the script began deleting from the root directory. Which addition would most directly have prevented this?",
  "options": [
   "Running the script with sudo",
   "Adding `set -u` and a check that TARGET is an existing directory",
   "Using a faster disk",
   "Scheduling it with cron so that it never runs interactively by hand"
  ],
  "answer": 1,
  "explain": "Strict unset-variable handling plus an explicit directory check stops the script before damage. sudo increases the damage, and disk speed or scheduling are irrelevant."
 },
 {
  "module": "m8",
  "q": "A cron entry reads `15 18 * * 1-5 /opt/scripts/report.sh`. When does it run?",
  "options": [
   "At 15:18 every day",
   "At 18:15 Monday to Friday",
   "On the 15th and 18th of each month",
   "Every 15 minutes between 18:00 and 19:00"
  ],
  "answer": 1,
  "explain": "The fields are minute 15, hour 18, any day of month, any month, days 1-5 (Monday to Friday). The other options misread field order."
 },
 {
  "module": "m8",
  "q": "An onboarding script is accidentally run twice with the same CSV and creates duplicate accounts. Which design principle was missing?",
  "options": [
   "Least privilege",
   "Idempotence: checking whether each account exists before creating it",
   "Execution policy",
   "Version control"
  ],
  "answer": 1,
  "explain": "An idempotent script checks state first, so repeats are harmless. Privilege, execution policy and version control matter, but none prevents duplicates by itself."
 },
 {
  "module": "m8",
  "q": "A team's scripts are stored on individual laptops, and nobody knows which version is current. What is the best improvement?",
  "options": [
   "Email the latest scripts to each other after every change is made",
   "Print the scripts and keep them in a binder",
   "Keep them in a shared version-control repository with reviews",
   "Allow only one technician to write scripts"
  ],
  "answer": 2,
  "explain": "Version control gives one current source, history, review and rollback. Email, paper and single-person ownership create confusion and risk."
 },
 {
  "module": "m8",
  "q": "A school bought 50 laptops at BDT 90,000 each with an expected residual value of BDT 10,000 per laptop after 4 years. What is the annual straight-line depreciation for the whole fleet?",
  "options": [
   "BDT 1,125,000",
   "BDT 1,000,000",
   "BDT 4,000,000",
   "BDT 20,000"
  ],
  "answer": 1,
  "explain": "Per laptop (90,000 - 10,000) / 4 = 20,000 a year; for 50 laptops that is BDT 1,000,000. The other values ignore the residual value, the fleet size or the useful life."
 },
 {
  "module": "m8",
  "q": "In an interview you are asked, 'Tell me about a time you resolved a difficult support issue.' Which answer structure is most effective?",
  "options": [
   "List every certification you hold",
   "Explain why the user was wrong",
   "Say that you have never had a difficult issue in any support role",
   "Situation, task, your actions and the measurable result"
  ],
  "answer": 3,
  "explain": "STAR gives a clear, evidence-based story. Listing certificates, blaming users or denying difficulty do not answer the question."
 }
]);
