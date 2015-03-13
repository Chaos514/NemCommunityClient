define({
	id: 'fr',
	name: 'FranÃ§ais',
	texts: {
		preferences: {
			thousandSeparator: 'â€‰',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Fichier non trouvÃ©.',
			102: 'Le portefeuille a Ã©tÃ© crÃ©Ã©.',
			103: 'Le portefeuille est corrompu. S\'il vous plait, rÃ©cupÃ©rez votre portefeuille Ã  partir de la copie de sauvegarde que vous avez faite lors de la crÃ©ation de votre portefeuille or lorsque vous y avez ajoutÃ© un compte.',
			104: 'Le mot de passe est incorrect. En espÃ©rant que vous pourrez vous en rappeler. Les mots de passe ne peuvent pas Ãªtre rÃ©cupÃ©rÃ©s s\'ils sont perdus!',
			105: 'No password was provided for the wallet.',
			106: 'Avant de pouvoir utiliser un portefeuille, il doit Ãªtre ouvert. Pour s\'assurer que vous autoriser Ã  accÃ©der Ã  ce portefeuille, vous devez fournir le mot de passe pour ce portefeuille.',
			107: 'Ce portefeuille ne contient pas ce compte.',
			108: 'Ce compte ne peut pas Ãªtre retirÃ©. Ce problÃ¨me se produit gÃ©nÃ©ralement si vous tentez de retirer un compte avec une balance supÃ©rieure Ã  0 XEMs ou s\'il s\'agit de votre compte primaire.',
			109: 'Un autre portefeuille avec le mÃªme nom existe dÃ©jÃ . S\'il vous plait, veuillez choisir un nom diffÃ©rent.',
			110: 'Le portefeuille contient dÃ©jÃ  ce compte.',
			111: 'Le nom du portefeuille est un rÃ©pertoire.',
			112: 'L\'extension du fichier de portefeuille est incorrecte.',
			113: 'Le portefeuille n\'a pas pu Ãªtre effacÃ©.',
			121: 'Le fichier de carnet d\'adresses n\'existe pas.',
			122: 'Le carnet d\'adresses a Ã©tÃ© crÃ©Ã©.',
			123: 'Le fichier du carnet d\'adresses est corrompu. S\'il vous plait, rÃ©cupÃ©rer votre carnet d\'adresses Ã  partir d\'une copie de sauvegarde.',
			124: 'Le mot de passe pour le carnet d\'adresses que vous avez fourni est incorrect.',
			125: 'Vous n\'avez fourni aucun mot de passe pour le carnet d\'adresses.',
			127: 'Le carnet d\'adresses ne contient pas cette adresse.',
			128: 'L\'adresse fournie n\'est pas valide.',
			129: 'Un autre carnet d\'adresses avec le mÃªme nom existe dÃ©jÃ . S\'il vous plait, utilisez un nom diffÃ©rent.',
			130: 'Le carnet d\'adresses contient dÃ©jÃ  cette adresse.',
			131: 'Le nom du carnet d\'adresses est un rÃ©pertoire.',
			132: 'L\'extension du fichier de carnet d\'adresses est incorrecte.',
			133: 'Le carnet d\'adresses n\'a pas pu Ãªtre effacÃ©.',
			202: 'Un message chiffrÃ© ne peut Ãªtre envoyÃ© si le destinataire n\'a jamais effectuÃ© de transaction auparavant.',
			305: 'Le serveur d\'infrastructure NEM (NIS) n\'est pas disponible.\n\nEssayez de redÃ©marrer le logiciel NEM.\n\nSi vous utilisez un serveur NIS distant, vÃ©rifier l\'hÃ´te configurÃ© pour vous assurer qu\'il n\'y a pas d\'erreur sinon utiliser un autre serveur NIS distant.\n',
			306: 'Une erreur que l\'Ã©quipe de dÃ©veloppement n\'avait pas anticipÃ©e s\'est produite. Nous vous prÃ©sentons nos excuses et nous espÃ©rons qu\'un nouvel essai va rÃ©gler ce problÃ¨me. Sinon, ouvrez un billet d\'incident auprÃ¨s de la communautÃ© NIS/NCC de NEM.',
			400: 'Certains paramÃ¨tres sont manquants ou invalides.',
			401: 'Cette opÃ©ration ne peut Ãªtre effectuÃ©e car elle pourrait divulguer votre clÃ© privÃ©e en l\'envoyant Ã  un server NIS distant.',
			404: 'La ressource que vous avez demandÃ© ne peut Ãªtre trouvÃ©e.',
			500: 'Une erreur que l\'Ã©quipe de dÃ©veloppement n\'avait pas anticipÃ©e s\'est produite. Nous vous prÃ©sentons nos excuses et nous espÃ©rons qu\'un nouvel essai va rÃ©gler ce problÃ¨me. Sinon, ouvrez un billet d\'incident auprÃ¨s de la communautÃ© NIS/NCC de NEM.',
			600: 'NCC requiert que le serveur NIS soit dÃ©marrÃ© pour pouvoir envoyer et recevoir des transactions vers le nuage NEM. S\'il vous plait, utilisez le menu NCC pour dÃ©marrer le noeud local.',
			601: 'Le noeud NIS est dÃ©jÃ  dÃ©marrÃ©. Une deuxiÃ¨me tentative de dÃ©marrage du noeud est impossible.',
			602: 'Presque disponible. Le serveur d\'infrastructure NEM charge prÃ©sentement les blocs. Le portefeuille sera fonctionnel dÃ¨s que la base de donnÃ©es sera complÃ¨tement chargÃ©e.\n',
			699: 'Le nombre maximum de cueilleurs permis sur le serveur a Ã©tÃ© atteint.',
			700: 'Le compte fourni ne satisfait pas les critÃ¨res de base pour la rÃ©colte. C\'est gÃ©nÃ©ralement liÃ© Ã  la quantitÃ© de XEM dans le compte. Le compte doit avoir au minimum 1000 XEM pour que la rÃ©colte dÃ©bute.',
			701: 'La date limite fournie est dans le passÃ©. La date limite doit Ãªtre dans un dÃ©lai dÂ’une journÃ©e.',
			702: 'La date limite fournie est trop dans le futur. La date limite doit Ãªtre dans un dÃ©lai dÂ’une journÃ©e.',
			703: 'Votre compte n\'a pas une balance suffisante pour envoyer le nombre nombre de XEMs indiquÃ©.',
			704: 'Le message que vous avez inscrit est trop long pour Ãªtre envoyÃ© via NEM. Essayez de rÃ©duire la taille du message que vous tentez d\'expÃ©dier.',
			705: 'Le hachage de transaction existe dÃ©jÃ  dans la base de donnÃ©es ou dans la liste des transactions non confirmÃ©es.',
			706: 'La signature de la transaction n\'a pas pu Ãªtre vÃ©rifiÃ©e.',
			707: 'L\'horodatage de la transaction trop loin dans le passÃ©.',
			708: 'TL\'horodatage de la transaction trop loin dans le futur.',
			709: 'Ce compte est inconnu. Un compte Ã  besoin de faire partie d\'au moins une transaction (comme expÃ©diteur ou destinataire) pour Ãªtre connue du rÃ©seau.',
			710: 'La transaction a Ã©tÃ© rejetÃ©e parce que la mÃ©moire tampon dÃ©diÃ©e aux transactions est remplie. Des frais plus Ã©levÃ©s augmentent les chances que la transaction soit acceptÃ©e.',
			730: 'Une transaction de transfert d\'importance (rÃ©colte sÃ©curisÃ©e) entre en conflit avec une transaction existante.',
			731: 'Le compte de rÃ©colte sÃ©curisÃ© Ã  une balance qui n\'est pas Ã©gale Ã  zÃ©ro et ne peut donc pas Ãªtre utilisÃ©e.',
			732: 'Transaction de transfert d\'importance rejetÃ©. Il y a dÃ©jÃ  une transaction de transfert d\'importance en attente.',
			733: 'La recolte sÃ©curiaire est dÃ©jÃ  activÃ©.',
			734: 'La rÃ©colte sÃ©curitaire n\'est PAS activÃ©e. Impossible de la dÃ©sactiver.',
			740: 'Les transactions multisig ne sont pas permises sur ce compte.',
			741: 'La transaction multisig a Ã©tÃ© rejetÃ©e. Le compte utilisÃ© n\'est cosignataire d\'aucun compte de type multisig.',
			742: 'Le compte utilisÃ© n\'est cosignataire d\'aucun compte de type multisig. La transaction multisig associÃ©e n\'est pas connue du rÃ©seau NEM.',
			743: 'Modification de compte multisig rejetÃ©. Un des comptes ajoutÃ©s est dÃ©jÃ  cosignataire.',
			901: 'Il y a une erreur lors de la mise en place du mode dÃ©connectÃ©.',
			1000: 'La clÃ© privÃ©e et la clÃ© publique que vous avez fournies ne correspondent pas.',
			1001: 'La clÃ© publique et l\'adresse que vous avez fourni ne correspondent pas.',
			1002: 'L\'adresse ne fait pas partie du rÃ©seau principal.'
		},
		common: {
			success: 'SuccÃ¨s',
			appStatus: {
				nccUnknown: 'Le statut de NCC est incconnu',
				nccUnavailable: 'NCC est introuvable',
				nccStarting: 'NCC dÃ©marre...',
				nisUnknown: 'Le statut de NIS est incconnu',
				nisUnavailable: 'NIS est introuvable',
				nisStarting: 'NIS dÃ©marre...',
				notBooted: 'NIS Ã  besoin d\'Ãªtre dÃ©marrÃ©. S\'il vous plaÃ®t, ouvrez votre portefeuille et dÃ©marrer le noeud local via la boÃ®te de dialogue ou configurÃ© le paramÃ¨tre de dÃ©marrage automatique.',
				loading: 'Chargement des blocs de la base de donnÃ©e, prÃ©sentement au bloc:',
				booting: 'DÃ©marrage de NIS...',
				nisInfoNotAvailable: 'L\'information sur NIS n\'est pas encore disponible. Tentative de rÃ©cupÃ©ration de l\'information sur NIS...',
				synchronizing: 'NIS est en cours de synchronisation. PrÃ©sentement au bloc {{1}}, est. {{2}} en retard.',
				daysBehind: {
					0: 'moins d\'une journÃ©e',
					1: 'une journÃ©e',
					many: '{{1}} jours'
				},
				synchronized: 'NIS est synchronisÃ©!',
				noRemoteNisAvailable: 'Aucun server distant NIS n\'a Ã©tÃ© trouvÃ© sur le rÃ©seau. VÃ©rifier votre connection Internet.'
			},
			addressBook: 'Carnet d\'adresses',
			password: 'Mot de passe',
			passwordValidation: 'Le mot de passe ne peut pas Ãªtre vide',
			address: 'Adresse',
			privateLabel: 'Ã‰tiquette privÃ©e',
			publicLabel: 'Ã‰tiquette publique',
			noCharge: 'Le compte utilisÃ© ne sera <b>PAS</b> chargÃ© de frais pour cette transaction, il seront chargÃ© au compte multisig.',
			justUse: 'Utiliser seulement'
		},
		transactionTypes: [
			'TRANSFERT DE TRANSACTION',
			'TRANSFERT D\'IMPORTANCE ',
			'MODIFICATION DE COMPTE MULTISIG',
			'TRANSACTION MULTISIG '
		],
		transactionDirections: {
			pending: 'Transaction en attente',
			outgoing: 'Transaction sortante',
			incoming: 'Transaction entrante',
			self: 'Faire une transaction vers sois mÃªme.',
			importance: 'Transaction d\'importance',
			modification: 'Modification globale de Multisig'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERREUR {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Oui',
				no: 'Non'
			},
			settings: {
				title: 'ParamÃ¨tres',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Serveur Distant',
					protocol: 'Protocole',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'HÃ´te',
					port: 'Port',
					defaultPort: 'Utiliser le port par dÃ©faut.'
				},
				autoBoot: {
					tabTitle: 'DÃ©marrage Automatique',
					name: 'Nom du noeud',
					account: 'Compte',
					primaryAccount: 'Compte primaire',
					auto: 'DÃ©marrage automatiquement quand le portefeuille est ouvert'
				},
				save: 'Enregistrer',
				saveSuccess: 'Les paramÃ¨tres ont Ã©tÃ© enregistrÃ©s avec succÃ¨s'
			},
			multisig: {
				title: 'Convertir ce compte en multisig',
				multisigAccount: 'Compte multisig',
				cosignatories: 'Adresses des cosignataires',
				labelDesc: 'Ce compte est Ã©tiquetÃ© comme {{1}}',
				nullLabelDesc: 'Ce compte n\'a pas d\'Ã©tiquette.',
				addCosignatory: '+ Ajouter un Cosignataires',
				cancel: 'Annuler',
				convert: 'Convertir',
				fee: 'Frais',
				feeValidation: 'Les frais ne doivent pas Ãªtre moins que les frais minimums.',
				dueBy: 'Heure dÃ»',
				useMinimumFee: 'Utiliser les frais minimums',
				hours: 'heures(s)',
				txConfirm: {
					title: 'Confirmez la conversion en compte Multisig',
					total: 'Total'
				},
				warning: 'Le compte Multisig est sur la liste de cosignataires. Cette action va barrer l\'accÃ¨s Ã  ce compte et au fond qu\'il contient. Vous ne voulez probablement <bPAS</b> executer cette action.'
			},
			signMultisig: {
				title: 'Signer la transaction multisig',
				original: {
					from: 'Compte Multisig',
					to: 'Destinataire',
					amount: 'Montant',
					fee: 'Frais interne',
					deadline: 'Date Limite'
				},
				multisigFees: 'Frais Multisig',
				multisigTotal: 'Total',
				sender: 'Cosignataire',
				fee: 'Frais',
				feeValidation: 'Les frais ne doivent pas Ãªtre moins que les frais minimums.',
				dueBy: 'Heure dÃ»',
				useMinimumFee: 'Utiliser les frais minimums',
				hours: 'heure(s)',
				password: 'Mot de passe',
				passwordValidation: 'Le mot de passe ne peut pas Ãªtre vide',
				send: 'Envoyez',
				cancel: 'Annuler',
				sending: 'Envoi...',
				successMessage: 'La transaction a Ã©tÃ© envoyÃ© avec succÃ¨s!',
				txConfirm: {
					title: 'Confirmer la transaction Multisig ',
					message: 'Message',
					encrypted: 'Le message est chiffrÃ©',
					noMessage: 'Pas de message'
				}
			},
			sendNem: {
				title: 'Envoyez des XEMs',
				sender: 'ExpÃ©diteur',
				thisAccount: 'Ce compte',
				labelDesc: 'Ce compte est Ã©tiquetÃ© comme {{1}}',
				nullLabelDesc: 'Ce compte n\'est pas Ã©tiquetÃ©',
				amount: 'Montant',
				recipient: 'Compte du destinataire',
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'Message',
				encrypt: 'Chiffrez le message',
				fee: 'Frais',
				multisigFee: 'Frais Multisig',
				feeValidation: 'Les frais ne doivent pas Ãªtre moins que les frais minimums.',
				dueBy: 'Heure dÃ»',
				useMinimumFee: 'Utiliser les frais minimums',
				hours: 'heure(s)',
				password: 'Mot de passe',
				passwordValidation: 'Le mot de passe ne peut pas Ãªtre vide',
				send: 'Envoyez',
				cancel: 'Annuler',
				sending: 'Envoi...',
				successMessage: 'La transaction a Ã©tÃ© envoyÃ© avec succÃ¨s!',
				txConfirm: {
					title: 'Confirmez la transaction',
					amount: 'Montant',
					to: 'Ã€',
					dueBy: 'Heure dÃ»',
					hours: 'heures(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Le message est chiffrÃ©',
					noMessage: 'Pas de message',
					cancel: 'Annuler',
					confirm: 'Confirmer',
					sending: 'Envoi...'
				},
				notBootedWarning: {
					title: 'Le noeud n\'a pas Ã©tÃ© dÃ©marrÃ©.',
					message: 'Le noeud local doit Ãªtre dÃ©marrÃ© avant de pouvoir envoyer des XEMs!'
				},
				bootingWarning: {
					title: 'Le noeud est en cours de dÃ©marrage',
					message: 'S\'il vous plait, attendre que le processus de dÃ©marrage soit terminÃ© avant d\'envoyer votre transaction.'
				},
				loadingWarning: {
					title: 'Chargement de la base de donnÃ©e'
				}
			},
			clientInfo: {
				title: 'Information sur le Client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signataire',
				remoteServer: 'Serveur distant',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'SynchronisÃ©',
				notSync: 'Pas synchronisÃ©',
				notConnected: 'Pas connectÃ© au Nuage NEM',
				loading: 'Chargement...'
			},
			transactionDetails: {
				title: 'DÃ©tails de la transaction',
				id: 'ID',
				hash: 'Hachage',
				type: 'Type de transaction',
				direction: 'Transaction Direction',
				pending: 'En attente',
				outgoing: 'Sortant',
				incoming: 'Entrant',
				self: 'Sois mÃªme',
				sender: 'ExpÃ©diteur',
				multisigAccount: 'Multisig Account',
				issuer: 'Emetteur',
				recipient: 'Destinataire',
				remote: 'Ã€ Distance',
				multisigMessage: 'Signatures prÃ©sente',
				message: 'Message',
				noMessage: 'Aucun message',
				encrypted: 'Le Message est chiffrÃ©',
				time: 'Horodatage',
				confirmations: 'Confirmations',
				confirmationsUnknown: 'Inconnu',
				amount: 'Montant',
				fee: 'Frais',
				innerFee: 'Frais interne',
				multisigFees: 'Frais Multisig',
				cosignatory: 'Cosignataire'
			},
			accountDetails: {
				title: 'DÃ©tails du compte',
				address: 'Adresse',
				label: 'Ã‰tiquette',
				noLabel: 'Pas d\'Ã©tiquette',
				add: 'Ajouter au carnet d\'adresses',
				remove: 'Retirer du carnet d\'adresses',
				balance: 'Balance',
				vested: 'AssigneÃ©',
				importance: 'Importance',
				publicKey: 'ClÃ© publique',
				noPublicKey: 'Pas de clÃ© publique',
				harvestedBlocks: 'Blocs rÃ©coltÃ©s',
				close: 'Fermeture'
			},
			bootLocalNode: {
				title: 'DÃ©marrage du noeud local',
				account: 'Compte pour dÃ©marrarer le noeud local',
				noLabel: '<span class=\'null\'>&lt;Aucune Ã©tiquette&gt;</span>',
				wallet: 'Portefeuille',
				node: 'Nom du noeud',
				boot: 'DÃ©marrer',
				booting: 'DÃ©marrage...',
				warning: 'Avertissement du noeud de dÃ©marrage',
				warningText: 'Vous essayez de dÃ©marrer un noeud en utilisant un compte ayant une balance de: ({{{1}}} XEM) . Ceci va rÃ©vÃ©ler la clef privÃ©e de ce compte au noeud: {{2}}\n',
				warningQuestion: 'ÃŠtes-vous certain de vouloir dÃ©marrer le noeud<u>{{3}}</u> en utilisant la clÃ© privÃ©e du compte {{1}} ({{2}} XEM)?<br><br>Ceci va rÃ©vÃ©ler la <span class=\"sublabelWarning\">clÃ© privÃ©e</span> de ce compte au noeud: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Fermeture de portefeuille',
				message: 'ÃŠtes-vous sÃ»r de vouloir fermer ce portefeuille et retourner Ã  la page d\'accueil?'
			},
			createAccount: {
				title: 'CrÃ©er un nouveau compte',
				label: 'Ã‰tiquette privÃ©',
				wallet: 'Portefeuille',
				password: 'Mot de passe du portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} Ã  Ã©tÃ© crÃ©Ã©!',
				create: 'CrÃ©er'
			},
			createRealAccountData: {
				title: 'CrÃ©er des donnÃ©es rÃ©elles de compte .',
				message: 'Les donnÃ©es ci-dessous sont pour votre compte rÃ©elles aprÃ¨s le lancement de NEM. Enregistrez l\'adresse, la clÃ© publique et surtout la clÃ© privÃ©e dans un endroit sÃ»r. Si vous perdez la clÃ© privÃ©e, votre compte et tous vos XEM seront perdus Ã  jamais !',
				address: 'Adresse',
				publicKey: 'ClÃ© publique',
				privateKey: 'ClÃ© privÃ©e',
				confirm: {
					title: 'Enregistrer la clÃ© privÃ©e',
					message: 'ÃŠtes-vous sÃ»r que votre clÃ© privÃ©e a Ã©tÃ© enregistrÃ© dans un endroit sÃ»r ?'
				},
				recheck: {
					title: 'Re-vÃ©rifier votre clÃ© privÃ©e enregistrÃ©e',
					message: 'S\'il vous plaÃ®t, entrer de nouveau votre clÃ© privÃ©e que vous venez de recevoir afin de vÃ©rifier que vous avez sauvegardÃ© la bonne. Si votre clÃ© privÃ©e est dÃ©jÃ  perdue , vous pouvez en crÃ©er une nouvelle.',
					correct: {
						title: 'Excellent!',
						message: 'Vous semblez avoir sauvegardÃ© la bonne clÃ© privÃ©e. S\'il vous plaÃ®t, n\'oubliez pas de toujours la garder en lieu sÃ»r et sÃ©curiser!'
					},
					incorrect: {
						title: 'Hmm...',
						message: 'La clÃ© privÃ©e que vous venez d\'entrer n\'est pas correcte ! S\'il vous plaÃ®t, entrez votre clÃ© privÃ©e de nouveau.',
						tryAgain: 'Essayez de l\'entrer encore une fois',
						seeOriginal: 'Voir les donnÃ©es originales.'
					},
					recheck: 'VÃ©rifier'
				},
				ok: 'Ok'
			},
			verifyRealAccountData: {
				title: 'VÃ©rifier les donnÃ©es rÃ©elles de compte',
				message: 'Entrez l\'adresse que vous avez enregistrÃ©e Ã  nouveau ainsi que la clÃ© publique et une clÃ© privÃ©e pour vÃ©rifier si elles correspondent.',
				address: 'Addresse',
				publicKey: 'ClÃ© publique',
				privateKey: 'ClÃ© privÃ©e',
				dataMatched: 'Tout semble bon : l\'adresse indiquÃ©e, la clÃ© publique et clÃ© privÃ©e correspondance.',
				verify: 'VÃ©rifier'
			},
			addAccount: {
				title: 'Ajouter un compte existant',
				privateKey: 'ClÃ© privÃ© du compte',
				wallet: 'Portefeuille',
				password: 'Mot de passe du portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} Ã  Ã©tÃ© ajoutÃ© Ã  votre portefeuille!',
				add: 'Ajouter',
				label: 'Ã‰tiquette'
			},
			setPrimary: {
				title: 'DÃ©finir votre compte principal',
				account: 'Le compte a Ã©tÃ© dÃ©fini comme votre compte principal',
				noLabel: '<span class=\'null\'>&lt;Aucune Ã©tiquette&gt;</span>',
				wallet: 'Portefeuille',
				password: 'Mot de passe du portefeuille',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} a Ã©tÃ© dÃ©fini comme votre compte principal!',
				set: 'DÃ©finir comme compte principal'
			},
			changeWalletName: {
				title: 'Changez le nom du portefeuille',
				wallet: 'Nom actuel du portefeuille',
				newName: 'Nouveau nom du portefeuille',
				password: 'Mot de passe du portefeuille',
				successMessage: 'Le nom du portefeuille a Ã©tÃ© changÃ© avec succÃ¨s de <em>{{1}}</em> Ã  <em>{{2}}</em>',
				change: 'Changer'
			},
			changeWalletPassword: {
				title: 'Changer le mot de passe du portefeuille',
				wallet: 'Portefeuille',
				password: 'Mot de passe actuel du portefeuille',
				newPassword: 'Nouveau mot de passe',
				confirmPassword: 'Confirmer le nouveau mot de passe',
				successMessage: 'Le mot de passe du portefeuille a Ã©tÃ© changÃ© avec succÃ¨s',
				change: 'Changer',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Le mot de passe et le mot de passe de confirmation ne sont pas pareils. S\'il vous plait, assurez-vous de taper votre nouveau mot de passe correctement.'
			},
			changeAccountLabel: {
				title: 'Changer l\'Ã©tiquette du compte',
				label: 'Ã‰tiquette du compte',
				wallet: 'Portefeuille',
				password: 'Mot de passe du portefeuille',
				successMessage: 'Le compte {{1}} est maintenant Ã©tiquettÃ© comme {{2}}',
				change: 'Changer'
			},
			removeAccount: {
				title: 'Retirer un compte',
				wallet: 'Portefeuille',
				password: 'Mot de passe du portefeuille',
				warning: 'S\'il vous plait, assurez-vous que ce compte ne contient plus de XEMs avant de le retirer, sinon les XEMs qu\'il contient seront perdus pour toujours.',
				successMessage: 'Le compte {{1}} {{#2}}({{2}}){{/2}} Ã  Ã©tÃ© retirÃ©!',
				remove: 'Retirer'
			},
			nisUnavailable: {
				title: 'NIS est non disponible',
				message: 'DÃ©connectÃ© de NIS, en attente de connexion'
			},
			shutdown: {
				title: 'Fermeture de l\'application',
				message: 'ÃŠtes-vous certain de vouloir fermer l\'application NEM Community Client?'
			},
			activateRemote: {
				title: 'Activer la rÃ©colte Ã  distance',
				wallet: 'Portefeuille',
				account: 'Compte',
				hoursDue: 'Heure dÃ»',
				password: 'Mot de passe du portefeuille',
				activate: 'Activer'
			},
			deactivateRemote: {
				title: 'DÃ©sactiver la rÃ©colte Ã  distance',
				wallet: 'Portefeuille',
				account: 'Compte',
				hoursDue: 'Heure dÃ»',
				password: 'Mot de passe du portefeuille',
				deactivate: 'DÃ©sactiver'
			},
			startRemote: {
				title: 'DÃ©marrer la rÃ©colte Ã  distance',
				wallet: 'Portefeuille',
				account: 'Compte',
				password: 'Mot de passe du portefeuille',
				start: 'DÃ©marrer'
			},
			stopRemote: {
				title: 'ArrÃªtez la rÃ©colte Ã  distance',
				wallet: 'Portefeuille',
				account: 'Compte',
				password: 'Mot de passe du portefeuille',
				stop: 'ArrÃªtez'
			},
			logoutWarning: {
				leavePage: 'Vous laissez votre portefeuille ouvert. Rappelez-vous que si vous laissez votre portefeuille de cette faÃ§on , d\'autres pourraient potentiellement y accÃ©der de cet ordinateur.Pour empÃªcher ceci d\'arriver, s\'il vous plaÃ®t vous connectez Ã  l\'aide du menu \'Fermeture de portefeuille\' dans le menu dÃ©roulant en haut Ã  droite avant de fermer l\'onglet de votre navigateur ou de naviguer ailleurs.'
			},
			addContact: {
				title: 'Ajouter un contact',
				add: 'Ajouter'
			},
			editContact: {
				title: 'Modifier le contact',
				saveChanges: 'Enregistrer les modifications'
			},
			removeContact: {
				title: 'Retirer le contact',
				remove: 'Retirer'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Le portefeuille a Ã©tÃ© importÃ© avec succÃ¨s!',
			nav: {
				start: 'Commencer',
				about: 'Ã€ propos de NEM',
				settings: 'ParamÃ¨tres'
			},
			main: {
				leftTitle: 'Nouveau dans <em>NEM</em>?',
				leftButton: 'CrÃ©er un nouveau portefeuille ',
				walletNamePlh: 'Nom de votre portefeuille',
				passwordPlh: 'Mot de passe',
				confirmPasswordPlh: 'Confirmez le mot de passe',
				create: 'CrÃ©er',
				creating: 'Creation...',
				rightTitle: 'DÃ©jÃ  un <em>NEM</em>bre?',
				rightButton: 'Ouvrir votre portefeuille',
				openButton: 'Ouvrir',
				walletsFound: '<strong>{{1}}</strong> <em>portefeuille(s) trouvÃ©(s)</em>',
				copyright: 'Photographie par <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>sÃ©curitÃ©</em> est trÃ¨s importante pour Ã©viter le vols de vos piÃ¨ces XEMs &amp; actifs.'
					},
					{
						title: 'NCC chiffre votre portefeuille',
						description: 'La <em>sÃ©curitÃ©</em> est trÃ¨s importante pour Ã©viter le vols de vos piÃ¨ces XEMs &amp; actifs.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'Comment NCC fonctionne?',
						paragraphs: [
							'<strong>NCC</strong>offre un accÃ¨s Ã  vos actifs et vos XEMs comme un portefeuille traditionnel le ferait.',
							'<strong>NCC</strong> requiert l\'accÃ¨s Ã  un serveur <strong>NIS</strong> pour pouvoir Ãªtre fonctionnelle. Le standard est d\'avoir un serveur local actif (est installÃ© ensemble avec <strong>NCC</strong>)',
							'Vous pouvez aussi configurer un accÃ¨s Ã  un serveur <strong>NIS</strong> distant.'
						],
						listItems: [
							'Multiples portefeuilles',
							'DÃ©finir de multiple compte Ã  Ãªtre inclus dans votre portefeuille'
						]
					},
					{
						title: 'Qu\'est-ce que le &#42;NIS?',
						paragraphs: [
							'Cette composante est responsable de garder le nuage <strong>NEM</strong> vivant.',
							'Plus il y a de <strong>NIS</strong> meilleure est la sÃ©curitÃ©.',
							'<strong>NIS</strong> est le point d\'accÃ¨s au nuage <strong>NEM</strong>.'
						],
						legend: '<strong>&#42;NIS</strong> signifie <strong>Serveur d\'infrastructure NEM (NEM Infrastructure Server)</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Il y a approximativement {{1}} jours',
			lastAccessJustNow: 'Juste maintenant',
			lastAccessTooltip: 'Dernier accÃ¨s {{1}}',
			primary: 'primaire',
			primaryShort: 'P',
			noLabel: '<Pas d\'Ã©tiquette>',
			copiedToClipboard: 'L\'adresse a Ã©tÃ© copiÃ© dans le presse papier!',
			actions: {
				refreshInfo: 'Actualiser les informations',
				bootLocalNode: 'DÃ©marrÃ© le noeud local',
				changeWalletName: 'Changer le nom du portefeuille',
				changeWalletPassword: 'Changer le mot de passe du portefeuille',
				mergeWallets: 'Fusionner des portefeuilles',
				exportWallet: 'Exporter un portefeuille',
				createAccount: 'CrÃ©er un nouveau compte',
				createRealAccountData: 'CrÃ©er les donnÃ©es rÃ©elles de compte',
				verifyRealAccountData: 'VÃ©rifier les donnÃ©es rÃ©elles de compte',
				addAccount: 'Ajouter un compte existant',
				changeAccountLabel: 'Modifier l\'Ã©tiquette du compte',
				setPrimary: 'DÃ©finir comme compte primaire',
				removeAccount: 'Retirer le compte',
				clientInfo: 'Information sur le Client',
				closeWallet: 'Fermer le portefeuille',
				closeProgram: 'Fermer l\'application',
				copyClipboard: 'Copier l\'adresse dans le presse-papier',
				convertMultisig: 'Convertir un autre compte en type multisig'
			},
			nav: [
				'Tableau de bord',
				'Messages',
				'Contacts',
				'Transactions',
				'Blocs rÃ©coltÃ©s',
				'Bourse d\'actif',
				'Nouvelles',
				'Applications',
				'Comptes',
				'ParamÃ¨tres',
				'Fermer l\'application'
			],
			bootNodeWarning: 'Un noeud local doit Ãªtre dÃ©marrÃ© avant de pouvoir utiliser pleinement les fonctionnalitÃ©s de NCC.'
		},
		dashboard: {
			assets: {
				title: 'Vos actifs'
			},
			importance: {
				title: 'Score d\'importance',
				unknown: 'statut inconnu',
				start: 'Lancer la rÃ©colte locale',
				harvesting: 'RÃ©colte',
				stop: 'ArrÃªter la rÃ©colte locale',
				description: 'importance de compte dans le nuage NEM',
				remoteHarvest: {
					activate: 'Activer la rÃ©colte Ã  distance',
					activating: 'Activation de la rÃ©colte Ã  distance ...',
					active: 'La rÃ©colte Ã  distance est active',
					deactivate: 'DÃ©sactiver la rÃ©colte Ã  distance',
					deactivating: 'DÃ©sactivation de la rÃ©colte Ã  distance...',
					startRemoteHarvesting: 'DÃ©marrer la rÃ©colte Ã  distance',
					remotelyHarvesting: 'RÃ©colte Ã  distance en cours',
					stopRemoteHarvesting: 'ArrÃªtez la rÃ©colte Ã  distance'
				}
			},
			transactions: {
				title: 'Transactions rÃ©centes',
				sendNem: 'Envoyer des XEMs',
				signMultisig: 'SIGNER',
				balance: 'Balance courante',
				vestedBalance: 'Balance assignÃ©e\n',
				syncStatus: '(au blocs {{1}}{{#2}} : est. {{3}} jours en retard{{/2}})',
				unknown: 'inconnu',
				columns: [
					'',
					'Temps',
					'ExpÃ©diteur/Destinataire',
					'Message',
					'',
					'DÃ©tails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffÃ©',
				view: 'Voir',
				confirmationsUnknown: 'Unknown',
				pending: 'En attente',
				seeAll: 'Voir toutes les transactions',
				noTransactions: 'Aucune transaction n\'a encore Ã©tÃ© effectuÃ©e'
			},
			nemValue: {
				title: 'Statistiques sur la valeur de XEM'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'Nouvelles'
			},
			notAvailable: 'Pas encore disponible en version alpha'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Envoyer des XEMs',
			balance: 'Balance courante',
			filters: {
				confirmed: 'ConfirmÃ©',
				unconfirmed: 'Non-confirmÃ©',
				incoming: 'Entrante',
				outgoing: 'Sortante'
			},
			table: {
				columns: [
					'',
					'Temps',
					'ExpÃ©diteur/Destinataire',
					'Message',
					'',
					'DÃ©tails',
					'Confirmations',
					'Frais',
					'Montant'
				],
				noMessage: 'Pas de message',
				encrypted: 'Le message est chiffÃ©',
				view: 'Voir',
				confirmationsUnknown: 'Inconnu',
				pending: 'En attente',
				noTransactions: 'Aucune transaction n\'a encore Ã©tÃ© effectuÃ©e',
				loading: 'Chargement de transactions supplÃ©mentaire...'
			}
		},
		harvestedBlocks: {
			title: 'Blocs rÃ©coltÃ©s',
			feeEarned: 'Honoraires perÃ§us pour les 25 derniers blocs rÃ©coltÃ©s',
			unknown: 'Inconnu',
			table: {
				columns: [
					'Hauteur',
					'Temps',
					'DifficultÃ© du bloc',
					'Frais'
				],
				noBlocks: 'Aucun blocs rÃ©coltÃ©s ',
				loading: 'Chargement de blocs rÃ©coltÃ©es supplÃ©mentaire'
			},
			harvesting: {
				unknown: 'Statut inconnu',
				start: 'Lancer la rÃ©colte locale',
				harvesting: 'RÃ©colte',
				stop: 'ArrÃªter la rÃ©colte locale',
				remoteHarvest: {
					startRemoteHarvesting: 'DÃ©marrer la rÃ©colte distante',
					stopRemoteHarvesting: 'ArrÃªter la rÃ©colte distante'
				}
			}
		},
		addressBook: {
			title: 'Carnet d\'adresses',
			addContact: 'Ajouter un contact',
			table: {
				columns: [
					'Adresse de compte',
					'Ã‰tiquette privÃ©e',
					'Ã‰tiquette publique'
				],
				noContacts: 'Il n\'y a pas de contact dans votre carnet d\'adresses.'
			},
			noLabel: 'Pas d\'Ã©tiquette',
			sendNem: 'Evoyer des XEMs',
			edit: 'Modifier',
			remove: 'Supprimer'
		},
		settings: {
			title: 'ParamÃ¨tres',
			settings: [
				{
					name: 'Langue'
				}
			],
			save: 'Enregistrer les modifications',
			saveSuccess: '`Les paramÃ¨tres ont Ã©tÃ© enregistrÃ©s avec succÃ¨s'
		}
	}
});
